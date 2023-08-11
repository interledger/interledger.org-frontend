import { withInitData } from '@components/hoc/withInitData/withInitData';
import { NodeFoundationPage } from '@components/node/NodeFoundationPage/NodeFoundationPage';
import { MetaTag } from '@components/util/MetaTag/MetaTag';
import { getRouteEntity } from '@graphql/helpers';
import { useGetNodeByPathQuery } from '@graphql/hooks';
import { dehydrate } from '@tanstack/react-query';
import { GetStaticProps, NextPage } from 'next';

interface HomeProps {
  slug: string;
}

const Home: NextPage<HomeProps> = ({ slug }) => {
  const { data: page } = useGetNodeByPathQuery(
    { slug },
    { select: (data) => getRouteEntity(data) }
  );

  if (page?.__typename !== 'NodeFoundationPage') {
    return null;
  }

  return (
    <>
      {page?.metatag && <MetaTag metatags={page.metatag} />}
      {page && <NodeFoundationPage node={page} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = withInitData(
  async (context, queryClient) => {
    const { preview } = context;
    const slug = '/home';

    const data = await queryClient.fetchQuery(
      useGetNodeByPathQuery.getKey({ slug }),
      useGetNodeByPathQuery.fetcher({ slug })
    );

    return {
      notFound: data === null,
      props: {
        preview: preview ?? false,
        dehydratedState: dehydrate(queryClient),
        slug,
      },
    };
  }
);

export default Home;
