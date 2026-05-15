import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ 
  title = 'Scrap & Silicon Solutions | Sustainable E-Waste Hardware',
  description = 'Transforming e-waste into premium hardware builds. Explore our sustainable technology solutions, custom robotics, and IoT projects.',
  keywords = 'e-waste, sustainable tech, hardware builds, robotics, IoT, scrap silicon, recycling technology',
  image = '/og-image.png',
  url = 'https://scrapsilicon.com'
}: SEOProps) => {
  const siteTitle = title.includes('Scrap & Silicon') ? title : `${title} | Scrap & Silicon Solutions`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
