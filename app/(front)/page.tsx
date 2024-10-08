import ProductItem from '@/components/products/ProductItem'
import { Metadata } from 'next'
import productService from '../../lib/services/productService'
import Link from 'next/link'
import Image from 'next/image'
import { convertDocToObj } from '../../lib/utils'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Milly Onlin Order',
  description:
    process.env.NEXT_PUBLIC_APP_DESC ||
    'Nextjs, Server components, Next auth, daisyui, zustand',
}

export default async function Home() {
  const latestProducts = await productService.getLatest()
  const allProducts = await productService.getAllProducts()

  return (
    <>
      <div className="w-full carousel rounded-box mt-4">
        {latestProducts.map((p, index) => (
          <div
            key={p._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${p.slug}`}>
              <img
                src={p.banner}
                className="w-full"
                alt={p.name}
              />
            </Link>
            <div className="absolute flex justify-between transform-translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide-${
                  index === 0 ? latestProducts.length - 1 : index - 1
                }`}
                className="btn btn-xs btn-circle bg-breadyellow md:btn-sm lg:btn-sm"
              >
                &#x276e;
              </a>

              <a
                href={`#slide-${
                  index === latestProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-xs btn-circle bg-breadyellow md:btn-sm lg:btn-sm"
              >
                &#x276f;
              </a>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl py-2">Product List</h2>
      <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-2">
        {allProducts.map((p) => (
          <ProductItem
            key={p.slug}
            product={convertDocToObj(p)}
          />
        ))}
      </div>
    </>
  )
}
