/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["99designs-blog.imgix.net"],
    formats: ["image/avif", "image/webp"],
  },
}

module.exports = nextConfig
