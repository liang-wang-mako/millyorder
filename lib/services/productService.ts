import { cache } from 'react'
import dbConnect from '../dbConnect'
import ProductModel, { Product } from '../models/ProductModel'

export const revalidate = 3600

const getLatest = cache(async () => {
  await dbConnect()
  const products = await ProductModel.find({
    $or: [
      { banner: '/images/b1.png' },
      { banner: '/images/b2.png' },
      { banner: '/images/b4.png' },
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

const productService = {
  getLatest,
  getAllProducts,
  getBySlug,
}

export default productService