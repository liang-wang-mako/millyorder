import ProductItem from '@/components/products/ProductItem'
import productServices from '@/lib/services/productService'

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
      <h2 className="text-2xl py-2">{category==='all' ? 'All' : category} List</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cold-4">
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
