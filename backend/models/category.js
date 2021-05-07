const { Schema, model } = require('mongoose')

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
      trim: true,
      minLength: [2, 'Too short'],
      maxLength: [35, 'Too long'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
)

module.exports = model('Category', categorySchema)
