import { withInitData } from '@components/hoc/withInitData/withInitData';
import { NodeArticle } from '@components/node/NodeArticle/NodeArticle';
import { NodeDeveloperTools } from '@components/node/NodeDeveloperTools/NodeDeveloperTools';
import { NodeFoundationPage } from '@components/node/NodeFoundationPage/NodeFoundationPage';
import { NodePage } from '@components/node/NodePage/NodePage';
import { NodePeople } from '@components/node/NodePeople/NodePeople';
import { NodeSpeaker } from '@components/node/NodeSpeaker/NodeSpeaker';
import { NodeTalk } from '@components/node/NodeTalk/NodeTalk';
import { MetaTag } from '@components/util/MetaTag/MetaTag';
import { queryOptions } from '@graphql/graphql-client';
import { getRouteEntity } from '@graphql/helpers';
import { useGetNodeByPathQuery, useGetNodesPathsQuery } from '@graphql/hooks';
import {
  NodeArticleFragment,
  NodeDeveloperToolsFragment,
  NodeFoundationPageFragment,
  NodePageFragment,
  NodePeopleFragment,
  NodeSpeakerFragment,
  NodeTalkFragment,
} from '@models/operations';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface BasicProps {
  slug: string;
}

type NodeFragmentUnion =
  | NodePageFragment
  | NodeArticleFragment
  | NodeSpeakerFragment
  | NodeTalkFragment
  | NodeFoundationPageFragment
  | NodeDeveloperToolsFragment
  | NodePeopleFragment;

interface NodeSelectorProps {
  node: NodeFragmentUnion;
}

const NodeSelector = ({ node }: NodeSelectorProps) => {
  if (node.__typename === 'NodePage') {
    return <NodePage node={node} />;
  }

  if (node.__typename === 'NodeFoundationPage') {
    return <NodeFoundationPage node={node} />;
  }

  if (node.__typename === 'NodeArticle') {
    return <NodeArticle node={node} />;
  }

  if (node.__typename === 'NodeSpeaker') {
    return <NodeSpeaker node={node} />;
  }

  if (node.__typename === 'NodeTalk') {
    return <NodeTalk node={node} />;
  }

  if (node.__typename === 'NodeDeveloperTools') {
    return <NodeDeveloperTools node={node} />;
  }

  if (node.__typename === 'NodePeople') {
    return <NodePeople node={node} />;
  }

  return null;
};

const BasicPage: NextPage<BasicProps> = ({ slug }) => {
  const { data: page } = useGetNodeByPathQuery(
    { slug },
    { select: (data) => getRouteEntity(data) as NodeFragmentUnion },
  );

  return (
    <>
      {page && 'metatag' in page && <MetaTag metatags={page.metatag} />}
      {page && <NodeSelector node={page} />}
    </>
  );
};

export const getStaticProps: GetStaticProps = withInitData(
  async (context, queryClient) => {
    const { params } = context;

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
      useGetNodeByPathQuery.fetcher({ slug }),
    );

    return {
      notFound: data.route === null,
      props: {
        redirect:
          slug === '/home' ? { permanent: true, destination: '/' } : null,
        dehydratedState: dehydrate(queryClient),
        slug,
      },
    };
  },
);

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient(queryOptions);

  const pages = await queryClient.fetchQuery(
    useGetNodesPathsQuery.getKey(),
    useGetNodesPathsQuery.fetcher(),
  );

  const paths =
    pages.nodePaths?.results.map((page) => ({
      params: { slug: [page.path] },
    })) ?? [];

  return { paths, fallback: 'blocking' };
};

export default BasicPage;
