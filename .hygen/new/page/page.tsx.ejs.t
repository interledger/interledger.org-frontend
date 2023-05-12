---
to: pages/<%= absPath %>.tsx
---
import { MetaTag, withInitData } from '@components';
import { GetStaticProps, NextPage } from 'next';
import { dehydrate } from '@tanstack/react-query';

interface <%= page_name %>Props {
  slug: string;
}

const <%= page_name %>Page: NextPage<<%= page_name %>Props> = ({ slug }) => {
  return (
    <>
      <MetaTag title='<%= page_name %>' />
    </>
  );
};

export const getStaticProps: GetStaticProps = withInitData(
  async (context, queryClient) => {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

export default <%= page_name %>Page;
