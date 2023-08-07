import sanityCli from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
  projectId: "",
  dataset: "",
  apiVersion: "",
  useCdn: true,
  token: "",
})
