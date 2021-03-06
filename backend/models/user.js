const mongoose = require('mongoose')
const { Schema, model } = mongoose
const { ObjectId } = Schema

const userSchema = new Schema(
  {
    name: String,
    picture: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: 'subscriber',
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    // whishlist: [{ type: ObjectId, ref: "Product" }],
  },
  { timestamps: true }
)

module.exports = model('User', userSchema)
