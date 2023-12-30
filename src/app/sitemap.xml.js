import { createSitemap } from 'xmlbuilder';

const generateSitemap = () => {
  const root = createSitemap({ version: '1.0', encoding: 'UTF-8' });
  const urlset = root.ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    'xsi:schemaLocation':
      'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
  });

  // Add your URLs here
  urlset.ele('url').ele('loc').txt('https://www.tapgro.com/');
  urlset.ele('url').ele('loc').txt('https://www.tapgro.com/another-page');
  // Add more URLs as needed

  return root.end({ pretty: true });
};

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap());
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
