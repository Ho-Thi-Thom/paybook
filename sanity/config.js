const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "b4w9cnp9",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skTCgS3xb1l1F47KioWDzuYkcku39ZJvdgIfs8Jlyzsx0iVHyeYh7SDilWYm3ttvG82Nzf0XB4lSE20tKvd9Xzv4p3qtEfQrapwVJFNXrv6JhA6xs9tJBFFGQeUQDgmgS5Eo9yAqjlVY2bf2uxZQ4uRUCqTwcFVwS2BwBY6d75q3QU3UHou2",
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return source && builder.image(source).toString();
}

export default client;
