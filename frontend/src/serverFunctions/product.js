import axios from 'axios'

export const createProduct = async (authtoken, product) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL}/product/create`,
    product,
    {
      headers: {
        authtoken,
      },
    }
  )
}

export const getProducts = async (number) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/products/${number}`)
}

export const deleteProduct = async (authtoken, slug) =>
  await axios.delete(
    `${process.env.REACT_APP_API_URL}/products/delete/${slug}`,
    {
      headers: {
        authtoken,
      },
    }
  )

export const getProduct = async (slug) => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/product/${slug}`)
}