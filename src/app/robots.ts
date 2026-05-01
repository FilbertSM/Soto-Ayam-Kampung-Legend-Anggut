import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://sotoanggut.com"

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Block standard API routes if any
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}