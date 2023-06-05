import * as OperationTypes from '@models/operations';

import { endpoint } from '@graphql/graphql-client';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint as string, {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
export const ImageStyleFragment = /*#__PURE__*/ `
    fragment ImageStyleFragment on ImageStylePathDerivative {
  __typename
  height
  path
  width
}
    `;
export const ResponsiveImageStyleFragment = /*#__PURE__*/ `
    fragment ResponsiveImageStyleFragment on ResponsiveImageStyleDerivative {
  __typename
  height
  path
  srcSetPath
  width
}
    `;
export const MediaImageFragment = /*#__PURE__*/ `
    fragment MediaImageFragment on MediaImage {
  __typename
  id
  mediaImage {
    alt
    style(name: MEDIUM) {
      ...ImageStyleFragment
    }
    responsive(name: ASPECT_RATIO_LANDSCAPE_16_9) {
      ...ResponsiveImageStyleFragment
    }
  }
}
    `;
export const MediaRemoteVideoFragment = /*#__PURE__*/ `
    fragment MediaRemoteVideoFragment on MediaRemoteVideo {
  __typename
  id
  mediaOembedVideo
}
    `;
export const RouteUnionFragment = /*#__PURE__*/ `
    fragment RouteUnionFragment on RouteUnion {
  ... on RouteInternal {
    __typename
    url
    internal
  }
  ... on RouteExternal {
    __typename
    internal
    url
  }
}
    `;
export const MenuItemFragment = /*#__PURE__*/ `
    fragment MenuItemFragment on MenuItem {
  __typename
  title
  route {
    ...RouteUnionFragment
  }
  children {
    __typename
    title
    route {
      ...RouteUnionFragment
    }
  }
}
    `;
export const FooterMenuFragment = /*#__PURE__*/ `
    fragment FooterMenuFragment on Menu {
  __typename
  items {
    ...MenuItemFragment
  }
}
    `;
export const MainMenuFragment = /*#__PURE__*/ `
    fragment MainMenuFragment on Menu {
  __typename
  items {
    ...MenuItemFragment
  }
}
    `;
export const LinkFragment = /*#__PURE__*/ `
    fragment LinkFragment on Link {
  url
  title
}
    `;
export const ParagraphButtonFragment = /*#__PURE__*/ `
    fragment ParagraphButtonFragment on ParagraphButton {
  __typename
  id
  link {
    ...LinkFragment
  }
}
    `;
export const ParagraphTextFragment = /*#__PURE__*/ `
    fragment ParagraphTextFragment on ParagraphText {
  __typename
  id
  text {
    processed
  }
}
    `;
export const ParagraphSpacerFragment = /*#__PURE__*/ `
    fragment ParagraphSpacerFragment on ParagraphSpacer {
  __typename
  id
  spacerSize
  spacerLine
}
    `;
export const ParagraphContentTitleFragment = /*#__PURE__*/ `
    fragment ParagraphContentTitleFragment on ParagraphContentTitle {
  __typename
  id
  title
}
    `;
export const MediaVideoFragment = /*#__PURE__*/ `
    fragment MediaVideoFragment on MediaVideo {
  __typename
  id
  mediaVideoFile {
    url
  }
}
    `;
export const MediaImageLandscapeFragment = /*#__PURE__*/ `
    fragment MediaImageLandscapeFragment on MediaImage {
  __typename
  id
  mediaImage {
    alt
    responsive(name: ASPECT_RATIO_LANDSCAPE_16_9) {
      ...ResponsiveImageStyleFragment
    }
  }
}
    `;
export const ParagraphVideoFragment = /*#__PURE__*/ `
    fragment ParagraphVideoFragment on ParagraphVideo {
  __typename
  id
  video {
    ...MediaVideoFragment
  }
  image: singleImage {
    ... on MediaImage {
      ...MediaImageLandscapeFragment
    }
  }
}
    `;
export const TwoColumnContentFragment = /*#__PURE__*/ `
    fragment TwoColumnContentFragment on ParagraphInterface {
  ... on ParagraphButton {
    ...ParagraphButtonFragment
  }
  ... on ParagraphText {
    ...ParagraphTextFragment
  }
  ... on ParagraphSpacer {
    ...ParagraphSpacerFragment
  }
  ... on ParagraphContentTitle {
    ...ParagraphContentTitleFragment
  }
  ... on ParagraphSpacer {
    ...ParagraphSpacerFragment
  }
  ... on ParagraphVideo {
    ...ParagraphVideoFragment
  }
}
    `;
export const ParagraphTwoColumnContentFragment = /*#__PURE__*/ `
    fragment ParagraphTwoColumnContentFragment on ParagraphTwoColumnContent {
  __typename
  id
  firstColumn {
    ...TwoColumnContentFragment
  }
  secondColumn {
    ...TwoColumnContentFragment
  }
}
    `;
export const ParagraphLargeCalloutTextFragment = /*#__PURE__*/ `
    fragment ParagraphLargeCalloutTextFragment on ParagraphLargeCalloutText {
  __typename
  id
  largeCalloutText
}
    `;
export const ParagraphHighlightedListFragment = /*#__PURE__*/ `
    fragment ParagraphHighlightedListFragment on ParagraphHighlightedList {
  __typename
  id
  listItem
}
    `;
export const MediaImageSquareFragment = /*#__PURE__*/ `
    fragment MediaImageSquareFragment on MediaImage {
  __typename
  id
  mediaImage {
    alt
    responsive(name: ASPECT_RATIO_SQUARE_1_1) {
      ...ResponsiveImageStyleFragment
    }
  }
}
    `;
export const ParagraphImageFragment = /*#__PURE__*/ `
    fragment ParagraphImageFragment on ParagraphImage {
  __typename
  id
  landscapeImage: singleImage {
    ...MediaImageLandscapeFragment
  }
  squareIamge: singleImage {
    ...MediaImageSquareFragment
  }
}
    `;
export const ParagraphImageCarouselFragment = /*#__PURE__*/ `
    fragment ParagraphImageCarouselFragment on ParagraphImageCarousel {
  __typename
  id
  carouselItem {
    id
    link {
      ...LinkFragment
    }
    image: singleImage {
      ... on MediaImage {
        ...MediaImageLandscapeFragment
      }
    }
  }
}
    `;
export const ParagraphTeaserFragment = /*#__PURE__*/ `
    fragment ParagraphTeaserFragment on ParagraphTeaser {
  __typename
  id
  squareImage: singleImage {
    ...MediaImageSquareFragment
  }
  landscapeImage: singleImage {
    ...MediaImageLandscapeFragment
  }
}
    `;
export const ParagraphHighlightedSpeakersFragment = /*#__PURE__*/ `
    fragment ParagraphHighlightedSpeakersFragment on ParagraphHighlightedSpeakers {
  __typename
  id
  speakers {
    id
    title
    teaser {
      ...ParagraphTeaserFragment
    }
  }
}
    `;
export const ParagraphImageGalleryFragment = /*#__PURE__*/ `
    fragment ParagraphImageGalleryFragment on ParagraphImageGallery {
  __typename
  id
  multipleImages {
    ... on MediaImage {
      ...MediaImageLandscapeFragment
    }
  }
}
    `;
export const ParagraphsFragment = /*#__PURE__*/ `
    fragment ParagraphsFragment on ParagraphInterface {
  ... on ParagraphButton {
    ...ParagraphButtonFragment
  }
  ... on ParagraphText {
    ...ParagraphTextFragment
  }
  ... on ParagraphSpacer {
    ...ParagraphSpacerFragment
  }
  ... on ParagraphTwoColumnContent {
    ...ParagraphTwoColumnContentFragment
  }
  ... on ParagraphLargeCalloutText {
    ...ParagraphLargeCalloutTextFragment
  }
  ... on ParagraphHighlightedList {
    ...ParagraphHighlightedListFragment
  }
  ... on ParagraphImage {
    ...ParagraphImageFragment
  }
  ... on ParagraphImageCarousel {
    ...ParagraphImageCarouselFragment
  }
  ... on ParagraphHighlightedSpeakers {
    ...ParagraphHighlightedSpeakersFragment
  }
  ... on ParagraphImageGallery {
    ...ParagraphImageGalleryFragment
  }
  ... on ParagraphContentTitle {
    ...ParagraphContentTitleFragment
  }
  ... on ParagraphVideo {
    ...ParagraphVideoFragment
  }
}
    `;
export const MetaTagFragment = /*#__PURE__*/ `
    fragment MetaTagFragment on MetaTag {
  __typename
  ... on MetaTagLink {
    tag
    attributes {
      href
      rel
    }
  }
  ... on MetaTagValue {
    tag
    attributes {
      content
      name
    }
  }
  ... on MetaTagProperty {
    tag
    attributes {
      content
      property
    }
  }
}
    `;
export const NodeArticleFragment = /*#__PURE__*/ `
    fragment NodeArticleFragment on NodeArticle {
  __typename
  id
  title
  path
  sections {
    ...ParagraphsFragment
  }
  metatag {
    ...MetaTagFragment
  }
}
    `;
export const ParagraphHeroHeaderFragment = /*#__PURE__*/ `
    fragment ParagraphHeroHeaderFragment on ParagraphHeroHeader {
  __typename
  id
  title
  whereText
  whenText
  image: singleImage {
    ... on MediaImage {
      ...MediaImageLandscapeFragment
    }
  }
  video {
    ...MediaVideoFragment
  }
}
    `;
export const NodePageFragment = /*#__PURE__*/ `
    fragment NodePageFragment on NodePage {
  __typename
  id
  title
  path
  sections {
    ...ParagraphsFragment
  }
  metatag {
    ...MetaTagFragment
  }
  teaser {
    ...ParagraphTeaserFragment
  }
  header {
    ...ParagraphHeroHeaderFragment
  }
}
    `;
export const NodeArticleCardFragment = /*#__PURE__*/ `
    fragment NodeArticleCardFragment on NodeArticle {
  __typename
  id
  title
  path
  image {
    ... on MediaImage {
      ...MediaImageLandscapeFragment
    }
  }
}
    `;
export const NodePageCardFragment = /*#__PURE__*/ `
    fragment NodePageCardFragment on NodePage {
  __typename
  id
  title
  path
  teaser {
    ...ParagraphTeaserFragment
  }
}
    `;
export const NodeCardFragment = /*#__PURE__*/ `
    fragment NodeCardFragment on Node {
  ... on NodeArticle {
    ...NodeArticleCardFragment
  }
  ... on NodePage {
    ...NodePageCardFragment
  }
}
    `;
export const GetInitDataQueryDocument = /*#__PURE__*/ `
    query GetInitDataQuery {
  mainMenu: menu(name: MAIN) {
    ...MainMenuFragment
  }
  footerMenu: menu(name: FOOTER) {
    ...FooterMenuFragment
  }
}
    ${MainMenuFragment}
${MenuItemFragment}
${RouteUnionFragment}
${FooterMenuFragment}`;
export const useGetInitDataQuery = <
  TData = OperationTypes.GetInitDataQuery,
  TError = unknown
>(
  variables?: OperationTypes.GetInitDataQueryVariables,
  options?: UseQueryOptions<OperationTypes.GetInitDataQuery, TError, TData>
) =>
  useQuery<OperationTypes.GetInitDataQuery, TError, TData>(
    variables === undefined
      ? ['GetInitDataQuery']
      : ['GetInitDataQuery', variables],
    fetcher<
      OperationTypes.GetInitDataQuery,
      OperationTypes.GetInitDataQueryVariables
    >(GetInitDataQueryDocument, variables),
    options
  );

useGetInitDataQuery.getKey = (
  variables?: OperationTypes.GetInitDataQueryVariables
) =>
  variables === undefined
    ? ['GetInitDataQuery']
    : ['GetInitDataQuery', variables];
useGetInitDataQuery.fetcher = (
  variables?: OperationTypes.GetInitDataQueryVariables
) =>
  fetcher<
    OperationTypes.GetInitDataQuery,
    OperationTypes.GetInitDataQueryVariables
  >(GetInitDataQueryDocument, variables);
export const GetNodeByPathQueryDocument = /*#__PURE__*/ `
    query GetNodeByPathQuery($slug: String!) {
  route(path: $slug) {
    ... on RouteInternal {
      __typename
      internal
      url
      entity {
        ... on NodeArticle {
          ...NodeArticleFragment
        }
        ... on NodePage {
          ...NodePageFragment
        }
      }
    }
    ... on RouteExternal {
      __typename
      internal
      url
    }
    ... on RouteRedirect {
      __typename
      internal
      redirect
      status
      url
    }
  }
}
    ${NodeArticleFragment}
${ParagraphsFragment}
${ParagraphButtonFragment}
${LinkFragment}
${ParagraphTextFragment}
${ParagraphSpacerFragment}
${ParagraphTwoColumnContentFragment}
${TwoColumnContentFragment}
${ParagraphContentTitleFragment}
${ParagraphVideoFragment}
${MediaVideoFragment}
${MediaImageLandscapeFragment}
${ResponsiveImageStyleFragment}
${ParagraphLargeCalloutTextFragment}
${ParagraphHighlightedListFragment}
${ParagraphImageFragment}
${MediaImageSquareFragment}
${ParagraphImageCarouselFragment}
${ParagraphHighlightedSpeakersFragment}
${ParagraphTeaserFragment}
${ParagraphImageGalleryFragment}
${MetaTagFragment}
${NodePageFragment}
${ParagraphHeroHeaderFragment}`;
export const useGetNodeByPathQuery = <
  TData = OperationTypes.GetNodeByPathQuery,
  TError = unknown
>(
  variables: OperationTypes.GetNodeByPathQueryVariables,
  options?: UseQueryOptions<OperationTypes.GetNodeByPathQuery, TError, TData>
) =>
  useQuery<OperationTypes.GetNodeByPathQuery, TError, TData>(
    ['GetNodeByPathQuery', variables],
    fetcher<
      OperationTypes.GetNodeByPathQuery,
      OperationTypes.GetNodeByPathQueryVariables
    >(GetNodeByPathQueryDocument, variables),
    options
  );

useGetNodeByPathQuery.getKey = (
  variables: OperationTypes.GetNodeByPathQueryVariables
) => ['GetNodeByPathQuery', variables];
useGetNodeByPathQuery.fetcher = (
  variables: OperationTypes.GetNodeByPathQueryVariables
) =>
  fetcher<
    OperationTypes.GetNodeByPathQuery,
    OperationTypes.GetNodeByPathQueryVariables
  >(GetNodeByPathQueryDocument, variables);
export const GetNodesPathsQueryDocument = /*#__PURE__*/ `
    query GetNodesPathsQuery($first: Int) {
  nodes(first: $first) {
    nodes {
      ... on NodeArticle {
        path
      }
      ... on NodePage {
        path
      }
      ... on NodeSpeaker {
        path
      }
    }
  }
}
    `;
export const useGetNodesPathsQuery = <
  TData = OperationTypes.GetNodesPathsQuery,
  TError = unknown
>(
  variables?: OperationTypes.GetNodesPathsQueryVariables,
  options?: UseQueryOptions<OperationTypes.GetNodesPathsQuery, TError, TData>
) =>
  useQuery<OperationTypes.GetNodesPathsQuery, TError, TData>(
    variables === undefined
      ? ['GetNodesPathsQuery']
      : ['GetNodesPathsQuery', variables],
    fetcher<
      OperationTypes.GetNodesPathsQuery,
      OperationTypes.GetNodesPathsQueryVariables
    >(GetNodesPathsQueryDocument, variables),
    options
  );

useGetNodesPathsQuery.getKey = (
  variables?: OperationTypes.GetNodesPathsQueryVariables
) =>
  variables === undefined
    ? ['GetNodesPathsQuery']
    : ['GetNodesPathsQuery', variables];
useGetNodesPathsQuery.fetcher = (
  variables?: OperationTypes.GetNodesPathsQueryVariables
) =>
  fetcher<
    OperationTypes.GetNodesPathsQuery,
    OperationTypes.GetNodesPathsQueryVariables
  >(GetNodesPathsQueryDocument, variables);
export const GetNodesQueryDocument = /*#__PURE__*/ `
    query GetNodesQuery($first: Int, $after: Cursor, $before: Cursor, $last: Int, $filter: ConnectionFilter, $sortKey: ConnectionSortKeys, $reverse: Boolean) {
  nodes(
    first: $first
    after: $after
    before: $before
    last: $last
    filter: $filter
    sortKey: $sortKey
    reverse: $reverse
  ) {
    nodes {
      ...NodeCardFragment
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}
    ${NodeCardFragment}
${NodeArticleCardFragment}
${MediaImageLandscapeFragment}
${ResponsiveImageStyleFragment}
${NodePageCardFragment}
${ParagraphTeaserFragment}
${MediaImageSquareFragment}`;
export const useGetNodesQuery = <
  TData = OperationTypes.GetNodesQuery,
  TError = unknown
>(
  variables?: OperationTypes.GetNodesQueryVariables,
  options?: UseQueryOptions<OperationTypes.GetNodesQuery, TError, TData>
) =>
  useQuery<OperationTypes.GetNodesQuery, TError, TData>(
    variables === undefined ? ['GetNodesQuery'] : ['GetNodesQuery', variables],
    fetcher<
      OperationTypes.GetNodesQuery,
      OperationTypes.GetNodesQueryVariables
    >(GetNodesQueryDocument, variables),
    options
  );

useGetNodesQuery.getKey = (variables?: OperationTypes.GetNodesQueryVariables) =>
  variables === undefined ? ['GetNodesQuery'] : ['GetNodesQuery', variables];
useGetNodesQuery.fetcher = (
  variables?: OperationTypes.GetNodesQueryVariables
) =>
  fetcher<OperationTypes.GetNodesQuery, OperationTypes.GetNodesQueryVariables>(
    GetNodesQueryDocument,
    variables
  );
