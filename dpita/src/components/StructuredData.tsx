const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'dpita.com',
  url: 'https://dpita.com',
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: 'https://dpita.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  ],
  description:
    'dpita.com delivers lightning-fast daily tools with a privacy-first, multilingual experience designed for every device.',
  inLanguage: ['en', 'es', 'fr'],
  publisher: {
    '@type': 'Organization',
    name: 'dpita.com',
    url: 'https://dpita.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dpita.com/logo.svg',
      width: 512,
      height: 512,
    },
  },
  sameAs: [
    'https://twitter.com/dpita',
    'https://www.linkedin.com/company/dpita',
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
