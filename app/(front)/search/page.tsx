import ProductItem from '@/components/products/ProductItem'
import productServices from '@/lib/services/productService'
import { Rating } from '@/components/products/Rating'
import Link from 'next/link'

export async function generateMetadata({
  searchParams: {category = 'all'},
}: {
  searchParams: {
    category: string
  }
}) {
  if (category !== 'all') {
    return {
      title: `Search ${category !== 'all' ? ` : Category ${category}` : ''}`,
    }
  } else {
    return {
      title: 'Search Products',
    }
  }
}

export default async function SearchPage({searchParams: {category = 'all'}}: {searchParams: {category: string}})
 {
  
  const {products} = await productServices.getByQuery({
    category
  })
  return (
    <>
      <h2 className="text-2xl py-2">
        {category === 'all' ? 'All' : category} Product List
      </h2>
      <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-2">
        {products.map((p) => (
          <ProductItem
            key={p.slug}
            product={p}
          />
        ))}
      </div>
    </>
  )
}
