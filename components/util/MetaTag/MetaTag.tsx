import { MetaTagFragment } from '@models/operations';
import Head from 'next/head';

export interface MetaTagProps {
  title?: string;
  metatags: Array<MetaTagFragment | null>;
}

const filterAtrributes = (attributes: any) => {
  return Object.fromEntries(
    Object.entries(attributes).filter(([, v]) => v != null)
  );
};

export const MetaTag = ({ title, metatags }: MetaTagProps) => {
  const linkTags = metatags ? metatags.filter((t) => t?.tag === 'link') : [];
  const metaTags = metatags ? metatags.filter((t) => t?.tag === 'meta') : [];
  const seoTitle = metatags.find(
    (t) => t?.__typename === 'MetaTagValue' && t?.attributes?.name === 'title'
  );

  return (
    <>
      <Head>
        <title>
          {seoTitle?.__typename === 'MetaTagValue'
            ? seoTitle?.attributes?.content
            : title}
        </title>
        {linkTags.map((t, i) => (
          <link key={i} {...filterAtrributes(t?.attributes)} />
        ))}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {metaTags.map((t, i) => (
          <meta key={i} {...filterAtrributes(t?.attributes)} />
        ))}
      </Head>
    </>
  );
};
