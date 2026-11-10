import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

const paths = ['', '/about', '/services', '/menu', '/accommodation', '/contact', '/quote-request']

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
  }))
}
