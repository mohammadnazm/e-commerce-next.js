import React from "react"
import { client, urlFor } from "../../lib/client"

const ProductDetails = () => {
  return (
    <div>
      <div className="product-details-container">
        <div className="image-container">
          <img />
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  console.log(product)

  return {
    props: { products, product },
  }
}

export default ProductDetails
