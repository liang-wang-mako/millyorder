'use client'
import useCartService from '@/lib/hooks/useCartStore'
import { OrderItem } from '@/lib/models/OrderModel'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  const router = useRouter()
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((i) => i.slug === item.slug))
  }, [item, items])

  const addToCartHandler = () => {
    increase(item)
  }

  return existItem ? (
   
    <div>
      <button
        className="btn btn-ghost bg-breadorange hover:bg-mouseover"
        type="button"
        onClick={() => decrease(existItem)}
      >
        -
      </button>
      <span className="px-2">{existItem.qty}</span>
      <button
        className="btn btn-ghost bg-breadorange hover:bg-mouseover"
        type="button"
        onClick={() => increase(existItem)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-ghost btnPrimary w-full bg-breadorange hover:bg-mouseover"
      type="button"
      onClick={addToCartHandler}
    >
      Add to Cart
    </button>
  
  )
}
