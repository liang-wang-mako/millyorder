
import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true, default: 0},
    numReviews: {type: Number, required: true, default: 0},
    banner: String,
  },
  {
    timestamps: true,
  }
)

const ProductModel = mongoose.models.Product || mongoose.model('Product', productSchema)
export default ProductModel


export type Product = {
  _id?: string
  name: string
  slug: string
  image: string
  category: string
  price: number
  description: string
  rating: number
  numReviews: number
  banner?: string
}