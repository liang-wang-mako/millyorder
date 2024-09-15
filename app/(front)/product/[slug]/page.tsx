

import AddToCart from '@/components/products/AddToCart'
import { convertDocToObj } from '@/lib/utils'
import productService from '@/lib/services/productService'
import Image from 'next/image'
import Link from 'next/link'
import { Rating } from '@/components/products/Rating'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return { title: 'Product not found' }
  }
  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string }
}) {
  const product = await productService.getBySlug(params.slug)
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <article>
      <section className="my-2">
        <Link
          href="/"
          className="btn btn-ghost bg-breadorange hover:bg-mouseover"
        >
          Back to Products
        </Link>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-4">
        <figure className="card md:col-span-1 xs:mb:3 sm:mb-3 bg-breadorange p-5">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </figure>
        <figure className="xs:mb:3 sm:mb-3">
          <ul className="space-y-4">
            <li>
              <h1 className="text-xl">{product.name}</h1>
            </li>
            <li>
              <Rating
                value={product.rating}
                caption={`${product.numReviews} ratings`}
              />
            </li>
            <li> {product.category}</li>
            <li>
              <div className="divider"></div>
            </li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </figure>

        <figure>
          <div className="card shadow-xl mt-3 md:mt-0 border-2 border-breadorange">
            <div className="card-body">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>${product.price}</div>
              </div>
              <div className="card-actions justify-center">
                <AddToCart
                  item={{
                    ...convertDocToObj(product),
                    qty: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </figure>
      </section>
    </article>
  )
}
