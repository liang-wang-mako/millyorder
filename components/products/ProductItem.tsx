import { Product } from '@/lib/models/ProductModel'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Rating } from './Rating'

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <article className="card bg-breadorange mb-2">
      <div>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full pt-5 px-5"
          />
        </Link>
      </div>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-bold">{product.name}</h2>
        </Link>
        <Rating
          value={product.rating}
          caption={`(${product.numReviews})`}
        />
        <p>{product.category}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>{' '}
        </div>
      </div>
    </article>
  )
}

export default ProductItem
