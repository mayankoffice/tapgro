
"use client";
export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')
    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
    <url>
      <loc>https://www.tapgro.com/</loc>
      <lastmod>2023-12-07T09:33:20+00:00</lastmod>
    </url>
    </urlset>`
  res.end(xml)
}