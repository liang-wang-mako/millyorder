// import Link from 'next/link'
// import Image from 'next/image'
// import data from '../../../../lib/data'
// import AddToCart from '@/components/products/AddToCart'

// const ProductDetails = ({ params }: { params: { slug: string } }) => {
//   const product = data.products.find((p) => p.slug === params.slug)

//   if (!product) {
//     return <div>Product not found</div>
//   }
//   return (
//     <>
//       <div className="my-2">
//         <Link href="/">back to products</Link>
//       </div>
//       <div className="grid md:grid-cols-4 md:gap-3">
//         <div className="md:col-span-2">
//           <Image
//             src={product.image}
//             alt={product.name}
//             width={640}
//             height={640}
//             sizes="100vw"
//             style={{
//               width: '100%',
//               height: 'auto',
//             }}
//           ></Image>
//         </div>
//         <div>
//           <ul className="space-y-4">
//             <li>
//               <h1 className="text-xl">{product.name}</h1>
//             </li>
//             <li>
//               {product.rating} of {product.numReviews} reviews
//             </li>
//             <li>{product.category}</li>
//             <li>
//               <div className="divider"></div>
//             </li>
//             <li>
//               Description: <p>{product.description}</p>
//             </li>
//           </ul>
//         </div>
//         <div className="card bg-base-300 shadow-xl mt-3 md:mt-0">
//           <div className="card-body">
//             <div className="mb-2 flex justify-between">
//               <div>Price</div>
//               <div>{product.price}</div>
//             </div>
//             <div className="card-actions justify-center">
//               <AddToCart
//                 item={{
//                   name: product.name,
//                   slug: product.slug,
//                   qty: 1,
//                   image: product.image,
//                   price: product.price,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ProductDetails

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
    <>
      <div className="my-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
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
        </div>
        <div>
          <div className="card  bg-base-300 shadow-xl mt-3 md:mt-0">
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
        </div>
      </div>
    </>
  )
}
