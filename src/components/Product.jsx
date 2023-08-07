import Link from "next/link"
import React from "react"

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}></Link>
    </div>
  )
}

export default Product
