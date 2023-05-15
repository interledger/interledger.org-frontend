import { withInitData } from '@components/hoc/withInitData/withInitData';
import { MetaTag } from '@components/util/MetaTag/MetaTag';
import { queryOptions } from '@graphql/graphql-client';
import { getRouteEntity } from '@graphql/helpers';
import { useGetNodeByPathQuery, useGetNodesPathsQuery } from '@graphql/hooks';
import { NodeArticleFragment, NodePageFragment } from '@models/operations';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { BackgroundSwirl } from '@components/ui/BackgroundSwirl/BackgroundSwirl';

const NodeArticle = dynamic(() =>
  import('@components/node/NodeArticle/NodeArticle').then(
    (paragraph) => paragraph.NodeArticle
  )
);

const NodePage = dynamic(() =>
  import('@components/node/NodePage/NodePage').then(
    (paragraph) => paragraph.NodePage
  )
);

interface BasicProps {
  slug: string;
}

type NodeFragmentUnion = NodePageFragment | NodeArticleFragment;

interface NodeSelectorProps {
  node: NodeFragmentUnion;
}

const NodeSelector = ({ node }: NodeSelectorProps) => {
  if (node.__typename === 'NodePage') {
    return <NodePage node={node} />;
  }

  if (node.__typename === 'NodeArticle') {
    return <NodeArticle node={node} />;
  }

  return null;
};

const BasicPage: NextPage<BasicProps> = ({ slug }) => {
  const { data: page } = useGetNodeByPathQuery(
    { slug },
    { select: (data) => getRouteEntity(data) as NodeFragmentUnion }
  );

  return (
    <>
      {page && 'metatag' in page && <MetaTag metatags={page.metatag} />}
      {page && <NodeSelector node={page} />}
      <BackgroundSwirl />
    </>
  );
};

export const getStaticProps: GetStaticProps = withInitData(
  async (context, queryClient) => {
    const { preview, params } = context;

    const slugParts = params?.slug as string[];
    const slug = slugParts?.join('/') as string;

    if (!slug) {
      return {
        notFound: true,
        props: {},
      };
    }

    const data = await queryClient.fetchQuery(
      useGetNodeByPathQuery.getKey({ slug }),
      useGetNodeByPathQuery.fetcher({ slug })
    );

    return {
      notFound: data === null,
      props: {
        preview: preview ?? false,
        redirect:
          slug === '/home' ? { permanent: true, destination: '/' } : null,
        dehydratedState: dehydrate(queryClient),
        slug,
      },
      revalidate: 60,
    };
  }
);

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient(queryOptions);

  const pages = await queryClient.fetchQuery(
    useGetNodesPathsQuery.getKey({ first: 50 }),
    useGetNodesPathsQuery.fetcher({ first: 50 })
  );

  const paths = pages.nodes.nodes.map((page) => ({
    params: { slug: [page.path] },
  }));

  return { paths, fallback: 'blocking' };
};

export default BasicPage;
