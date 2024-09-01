import { cache } from 'react'
import dbConnect from '../dbConnect'
import ProductModel, { Product } from '../models/ProductModel'

export const revalidate = 3600

const getLatest = cache(async () => {
  await dbConnect()
  const products = await ProductModel.find({
    $or: [
      { slug: 'Bread-Bread-Ciabata100g' },
      { slug: 'Pastry-Cream-BananaCake' },
      { slug: 'Sandwich-Sandwich-HamTomato' },
    ],
  })
    .sort({ _id: -1 })
    .lean()
  return products as Product[]
})

const getAllProducts = cache(async ()=>{
  await dbConnect()
  const products = await ProductModel.find({}).lean()
  return products as Product[]
}) 


const getBySlug = cache(async (slug: string) => {
  await dbConnect()
  const product = await ProductModel.findOne({slug}).lean()
  return product as Product
})

const getCategories = cache(async () => {
  await dbConnect()
  const categories = await ProductModel.find().distinct('category')
  return categories
})

const getByQuery = cache(
  async ({category,}: {category: string}) => {
    await dbConnect()

    const categoryFilter = category && category !== 'all' ? { category } : {}
   
    const categories = await ProductModel.find().distinct('category')
    const products = await ProductModel.find(
      {...categoryFilter,},
    ).lean()

    return {
      products: products as Product[],
      categories,
    }
  }
)

const productService = {
  getLatest,
  getAllProducts,
  getBySlug,
  getCategories,
  getByQuery,
}

export default productService