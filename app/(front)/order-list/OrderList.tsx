'use client'

import { Order } from '@/lib/models/OrderModel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function OrderList() {
  const router = useRouter()
  const { data: orders, error } = useSWR(`/api/orders/mine`)

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  if (error) return 'An error has occurred.'
  if (!orders) return 'Loading...'

  function handleDoubleClick(id: string){
    router.push(`/order/${id}`)
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            {/* <th>ACTION</th> */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order: Order) => (
            <tr key={order._id} onDoubleClick={(e) =>{ 
              e.preventDefault()
              e.stopPropagation()
              handleDoubleClick(order._id)
              }} >
              <td>{order._id.substring(20, 24)}</td>
              <td>{order.createdAt.substring(0, 10)}</td>
              <td>${order.totalPrice}</td>
              <td>
                {order.isPaid && order.paidAt
                  ? 'yes'
                  : 'no'}
              </td>
              <td>
                {order.isDelivered && order.deliveredAt
                  ? 'yes'
                  : 'no'}
              </td>
              {/* <td>
                <Link
                  href={`/order/${order._id}`}
                  passHref
                >
                  Details
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div>Note: Double click an order to view the order details.</div>
    </div>
  )
}
