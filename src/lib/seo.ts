import { useEffect } from 'react';
import type { BlogArticle } from './types';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  canonicalPath?: string;
  jsonLd?: object | object[];
}

export function useSEO({ title, description, image, type = 'website', canonicalPath, jsonLd }: SEOProps) {
  useEffect(() => {
    const siteName = 'Riad Tofaha';
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Boutique Riad in Marrakech`;
    const desc = description || 'Riad Tofaha is a traditional Moroccan boutique riad in Marrakech offering authentic accommodation, warm hospitality, and an unforgettable cultural experience.';

    document.title = fullTitle;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', desc);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:site_name', siteName);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', desc);

    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('name', 'twitter:image', image);
    }

    if (canonicalPath) {
      const url = window.location.origin + canonicalPath;
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, image, type, canonicalPath, jsonLd]);
}

export function buildLodgingBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Riad Tofaha',
    description: 'A traditional Moroccan boutique riad in the heart of Marrakech offering authentic accommodation and warm hospitality.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Marrakech',
      addressCountry: 'MA',
    },
    priceRange: '$$',
    knowsLanguage: ['en', 'fr', 'ar'],
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Riad Tofaha',
    url: window.location.origin,
    description: 'A traditional Moroccan boutique riad in Marrakech.',
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Riad Tofaha',
    url: window.location.origin,
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: window.location.origin + item.url,
    })),
  };
}

export function buildBlogPostingSchema(article: BlogArticle) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.seo_title || article.title,
    description: article.seo_description || article.excerpt || '',
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Riad Tofaha',
    },
    datePublished: article.published_at || article.created_at,
    dateModified: article.updated_at,
  };

  if (article.featured_image) {
    schema.image = article.featured_image;
  }

  if (article.faq && article.faq.length > 0) {
    schema.mainEntity = article.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    }));
  }

  return schema;
}

export function buildFAQSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}
