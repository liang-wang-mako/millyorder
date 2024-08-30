import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { round2 } from '../utils'
import { OrderItem, ShippingAddress } from '../models/OrderModel'

type Cart = {
  items: OrderItem[]
  itemsPrice: number
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  shippingAddress: ShippingAddress
}

const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  },
}

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: 'cartStore',
  })
)

export default function useCartService() {
  const {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    shippingAddress,
  } = cartStore()
  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    shippingAddress,
    increase: (item: OrderItem) => {
      const exist = items.find((i) => i.slug === item.slug)
      const updatedCartItems = exist
        ? items.map((i) =>
            i.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : i
          )
        : [...items, { ...item, qty: 1 }]

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCartItems)

      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    },

    decrease: (item: OrderItem) => {
      const updatedCartItems =
        item.qty > 1
          ? items.map((i) =>
              i.slug === item.slug ? { ...item, qty: item.qty - 1 } : i
            )
          : items.filter((i) => i.slug !== item.slug)

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedCartItems)

      cartStore.setState({
        items: updatedCartItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    },
    saveShippingAddrress: (shippingAddress: ShippingAddress) => {
      cartStore.setState({
        shippingAddress,
      })
    },
    clear: () => {
      cartStore.setState({
        items: [],
      })
    },

    init: ()=> cartStore.setState(initialState),
  }
}

const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  const shippingPrice = round2(itemsPrice > 100 ? 0 : 10)
  const taxPrice = round2(Number(0.15 * itemsPrice))
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice)
  return { itemsPrice, shippingPrice, taxPrice, totalPrice }
}
