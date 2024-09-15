'use client'

import useCartService from '@/lib/hooks/useCartStore'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const CartDetails = () => {
  const router = useRouter()
  const { items, itemsPrice, decrease, increase } = useCartService()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  return (
    <article className="bg-breadorange mt-10 rounded-xl xs:mx-2 sm:mx-10 md:mx-20 lg:mx-30">
      <h1 className="px-3 py-4 text-2xl">Order Cart</h1>
      {items.length === 0 ? (
        <div>
          Cart is empty.
          <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.slug}>
                    <td>
                      <Link
                        href={`/product/${item.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        ></Image>
                        <span className="px-2">{item.name}</span>
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn bg-breadyellow hover:bg-mouseover"
                        type="button"
                        onClick={() => decrease(item)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        className="btn bg-breadyellow hover:bg-mouseover"
                        type="button"
                        onClick={() => increase(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>${item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="card bg-breadorange">
              <div className="card-body">
                <ul>
                  <li>
                    <div
                      className="pb-3"
                      text-xl
                    >
                      Subtotal ({items.reduce((a, c) => a + c.qty, 0)}) :$
                      {itemsPrice.toFixed(2)}
                    </div>
                  </li>
                  <li>
                    <button
                      className="btn btn-primary w-auto bg-breadyellow"
                      onClick={() => router.push('/shipping')}
                    >
                      Proceed to Checkout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

export default CartDetails
