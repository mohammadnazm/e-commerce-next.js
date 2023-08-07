import sanityCli from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: "n67uv68h",
  dataset: "production",
  apiVersion: "2023-08-07",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client)

export const urlFor = source => builder.image(source)
