import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual domain when deploying
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sotoanggut.com"

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // If you have more routes in the future (like /menu or /contact), add them here
  ]
}