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
export const ResponsiveImageStyleFragment = /*#__PURE__*/ `
    fragment ResponsiveImageStyleFragment on ResponsiveImageStyleDerivative {
  __typename
  height
  path
  srcSetPath
  width
}
    `;
export const MediaImageWidthFragment = /*#__PURE__*/ `
    fragment MediaImageWidthFragment on MediaImage {
  __typename
  id
  mediaImage {
    alt
    responsive(name: WIDTH) {
      ...ResponsiveImageStyleFragment
    }
  }
}
    `;
export const ImageStyleFragment = /*#__PURE__*/ `
    fragment ImageStyleFragment on ImageStylePathDerivative {
  __typename
  height
  path
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
export const MenuItemFragment = /*#__PURE__*/ `
    fragment MenuItemFragment on MenuItem {
  __typename
  title
  id
  url
}
    `;
export const DeveloperToolsMenuFragment = /*#__PURE__*/ `
    fragment DeveloperToolsMenuFragment on Menu {
  __typename
  id
  name
  items {
    ...MenuItemFragment
    children {
      ...MenuItemFragment
    }
  }
}
    `;
export const FooterMenuFragment = /*#__PURE__*/ `
    fragment FooterMenuFragment on Menu {
  __typename
  name
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
export const SocialFragment = /*#__PURE__*/ `
    fragment SocialFragment on ParagraphSocialMedia {
  __typename
  id
  socialMediaLinks {
    socialMediaType
    link {
      url
    }
  }
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
  ... on ParagraphImage {
    ...ParagraphImageFragment
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
export const ParagraphImageFullWidthFragment = /*#__PURE__*/ `
    fragment ParagraphImageFullWidthFragment on ParagraphImageFullWidth {
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
export const NodeSpeakerCardFragment = /*#__PURE__*/ `
    fragment NodeSpeakerCardFragment on NodeSpeaker {
  __typename
  id
  title
  path
  company
  role
  teaser {
    ...ParagraphTeaserFragment
  }
}
    `;
export const ParagraphSpeakersGridFragment = /*#__PURE__*/ `
    fragment ParagraphSpeakersGridFragment on ParagraphSpeakersGrid {
  __typename
  id
  speakersView {
    __typename
    ... on SpeakersResult {
      id
      results {
        ... on NodeSpeaker {
          ...NodeSpeakerCardFragment
        }
      }
    }
  }
}
    `;
export const NodeTalkCardFragment = /*#__PURE__*/ `
    fragment NodeTalkCardFragment on NodeTalk {
  __typename
  id
  title
  path
  dateTime {
    time
  }
  duration
  teaser {
    ...ParagraphTeaserFragment
  }
  speakers {
    title
  }
}
    `;
export const ParagraphTalksGridFragment = /*#__PURE__*/ `
    fragment ParagraphTalksGridFragment on ParagraphTalksGrid {
  __typename
  id
  talksView {
    __typename
    ... on TalksAllResult {
      id
      results {
        ... on NodeTalk {
          ...NodeTalkCardFragment
        }
      }
    }
  }
}
    `;
export const ParagraphScheduleDayFragment = /*#__PURE__*/ `
    fragment ParagraphScheduleDayFragment on ParagraphScheduleDay {
  __typename
  id
  date {
    time
  }
  talksView {
    __typename
    ... on TalksByDateResult {
      results {
        ... on NodeTalk {
          ...NodeTalkCardFragment
        }
      }
    }
  }
}
    `;
export const ParagraphScheduleFragment = /*#__PURE__*/ `
    fragment ParagraphScheduleFragment on ParagraphSchedule {
  __typename
  id
  title
  days {
    ...ParagraphScheduleDayFragment
  }
}
    `;
export const ContentCarouselItemFragment = /*#__PURE__*/ `
    fragment ContentCarouselItemFragment on ParagraphInterface {
  ... on ParagraphTwoColumnContent {
    ...ParagraphTwoColumnContentFragment
  }
}
    `;
export const ParagraphContentCarouselFragment = /*#__PURE__*/ `
    fragment ParagraphContentCarouselFragment on ParagraphContentCarousel {
  __typename
  id
  carouselItem {
    ...ContentCarouselItemFragment
  }
}
    `;
export const NodeArticleCardFragment = /*#__PURE__*/ `
    fragment NodeArticleCardFragment on NodeArticle {
  __typename
  id
  title
  path
  summary {
    processed
  }
  created {
    time
  }
  teaser {
    ...ParagraphTeaserFragment
  }
}
    `;
export const ParagraphNewsListingsFragment = /*#__PURE__*/ `
    fragment ParagraphNewsListingsFragment on ParagraphNewsListings {
  __typename
  id
  newsLatestView {
    ... on NewsLatestResult {
      __typename
      results {
        ... on NodeArticle {
          ...NodeArticleCardFragment
        }
      }
    }
  }
  newsView(page: $newsListingPage) {
    ... on NewsResult {
      __typename
      pageInfo {
        offset
        page
        pageSize
        total
      }
      results {
        ... on NodeArticle {
          ...NodeArticleCardFragment
        }
      }
    }
  }
}
    `;
export const ParagraphFaqsFragment = /*#__PURE__*/ `
    fragment ParagraphFaqsFragment on ParagraphFaqs {
  __typename
  id
  faqs {
    id
    question
    answer {
      processed
    }
  }
}
    `;
export const ParagraphPriceOptionFragment = /*#__PURE__*/ `
    fragment ParagraphPriceOptionFragment on ParagraphPriceOption {
  __typename
  id
  title
  subtitle
}
    `;
export const ParagraphDividerFragment = /*#__PURE__*/ `
    fragment ParagraphDividerFragment on ParagraphDivider {
  __typename
  id
}
    `;
export const ParagraphPriceFragment = /*#__PURE__*/ `
    fragment ParagraphPriceFragment on ParagraphPrice {
  __typename
  id
  title
  menuTitle
  pricing
  options {
    ... on ParagraphPriceOption {
      ...ParagraphPriceOptionFragment
    }
    ... on ParagraphDivider {
      ...ParagraphDividerFragment
    }
  }
}
    `;
export const ParagraphPriceListFragment = /*#__PURE__*/ `
    fragment ParagraphPriceListFragment on ParagraphPriceList {
  __typename
  id
  pricesMain {
    ...ParagraphPriceFragment
  }
  pricesFooter {
    ...ParagraphPriceFragment
  }
}
    `;
export const ParagraphAnchorFragment = /*#__PURE__*/ `
    fragment ParagraphAnchorFragment on ParagraphAnchor {
  __typename
  id
  title
}
    `;
export const NodePeopleCardFragment = /*#__PURE__*/ `
    fragment NodePeopleCardFragment on NodePeople {
  __typename
  id
  path
  title
  description {
    processed
  }
  position
  teaser {
    ...ParagraphTeaserFragment
  }
}
    `;
export const ParagraphPeopleGridFragment = /*#__PURE__*/ `
    fragment ParagraphPeopleGridFragment on ParagraphPeopleGrid {
  __typename
  id
  peopleView {
    __typename
    ... on PeopleResult {
      id
      results {
        ... on NodePeople {
          ...NodePeopleCardFragment
        }
      }
    }
  }
}
    `;
export const ParagraphContactFormFragment = /*#__PURE__*/ `
    fragment ParagraphContactFormFragment on ParagraphContactForm {
  __typename
  id
  contactTopicsView {
    __typename
    ... on ContactTopicsResult {
      results {
        ... on TermContactTopics {
          id
          name
        }
      }
    }
  }
  contactTopic {
    name
    id
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
  ... on ParagraphImageFullWidth {
    ...ParagraphImageFullWidthFragment
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
  ... on ParagraphSpeakersGrid {
    ...ParagraphSpeakersGridFragment
  }
  ... on ParagraphTalksGrid {
    ...ParagraphTalksGridFragment
  }
  ... on ParagraphSchedule {
    ...ParagraphScheduleFragment
  }
  ... on ParagraphContentCarousel {
    ...ParagraphContentCarouselFragment
  }
  ... on ParagraphNewsListings {
    ...ParagraphNewsListingsFragment
  }
  ... on ParagraphFaqs {
    ...ParagraphFaqsFragment
  }
  ... on ParagraphPriceList {
    ...ParagraphPriceListFragment
  }
  ... on ParagraphAnchor {
    ...ParagraphAnchorFragment
  }
  ... on ParagraphPeopleGrid {
    ...ParagraphPeopleGridFragment
  }
  ... on ParagraphContactForm {
    ...ParagraphContactFormFragment
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
  squareImage: image {
    ...MediaImageSquareFragment
  }
  landscapeImage: image {
    ...MediaImageLandscapeFragment
  }
  sections {
    ...ParagraphsFragment
  }
  created {
    time
  }
  metatag {
    ...MetaTagFragment
  }
}
    `;
export const NodeDeveloperToolsFragment = /*#__PURE__*/ `
    fragment NodeDeveloperToolsFragment on NodeDeveloperTools {
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
export const NodeFoundationPageFragment = /*#__PURE__*/ `
    fragment NodeFoundationPageFragment on NodeFoundationPage {
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
export const NodeFoundationPageCardFragment = /*#__PURE__*/ `
    fragment NodeFoundationPageCardFragment on NodeFoundationPage {
  __typename
  id
  title
  path
  teaser {
    ...ParagraphTeaserFragment
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
export const NodePeopleFragment = /*#__PURE__*/ `
    fragment NodePeopleFragment on NodePeople {
  __typename
  id
  path
  title
  description {
    processed
  }
}
    `;
export const NodeSpeakerFragment = /*#__PURE__*/ `
    fragment NodeSpeakerFragment on NodeSpeaker {
  __typename
  id
  path
  biography {
    processed
  }
  company
  role
  summary {
    value
  }
  title
  email
  socialMedia {
    socialMediaLinks {
      link {
        url
      }
      socialMediaType
    }
  }
  image {
    ...MediaImageLandscapeFragment
  }
  talks {
    __typename
    ... on TalksResult {
      results {
        ... on NodeTalk {
          ...NodeTalkCardFragment
        }
      }
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
export const ParagraphMediaHeaderFragment = /*#__PURE__*/ `
    fragment ParagraphMediaHeaderFragment on ParagraphMediaHeader {
  __typename
  id
  image: singleImage {
    ... on MediaImage {
      ...MediaImageLandscapeFragment
    }
  }
  video {
    ...MediaRemoteVideoFragment
  }
}
    `;
export const ParagraphTalkHeaderFragment = /*#__PURE__*/ `
    fragment ParagraphTalkHeaderFragment on ParagraphTalkHeader {
  __typename
  id
  headerBefore {
    ...ParagraphMediaHeaderFragment
  }
  headerDuring {
    ...ParagraphMediaHeaderFragment
  }
  headerAfter {
    ...ParagraphMediaHeaderFragment
  }
}
    `;
export const NodeTalkFragment = /*#__PURE__*/ `
    fragment NodeTalkFragment on NodeTalk {
  __typename
  id
  title
  path
  metatag {
    ...MetaTagFragment
  }
  header {
    ...ParagraphTalkHeaderFragment
  }
  description {
    processed
  }
  duration
  speakers {
    ...NodeSpeakerCardFragment
  }
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
export const GetParagraphNewsListingDocument = /*#__PURE__*/ `
    query GetParagraphNewsListing($id: ID!, $newsListingPage: Int) {
  paragraphNewsListings(id: $id) {
    ...ParagraphNewsListingsFragment
  }
}
    ${ParagraphNewsListingsFragment}
${NodeArticleCardFragment}
${ParagraphTeaserFragment}
${MediaImageSquareFragment}
${ResponsiveImageStyleFragment}
${MediaImageLandscapeFragment}`;
export const useGetParagraphNewsListing = <
  TData = OperationTypes.GetParagraphNewsListing,
  TError = unknown
>(
  variables: OperationTypes.GetParagraphNewsListingVariables,
  options?: UseQueryOptions<
    OperationTypes.GetParagraphNewsListing,
    TError,
    TData
  >
) =>
  useQuery<OperationTypes.GetParagraphNewsListing, TError, TData>(
    ['GetParagraphNewsListing', variables],
    fetcher<
      OperationTypes.GetParagraphNewsListing,
      OperationTypes.GetParagraphNewsListingVariables
    >(GetParagraphNewsListingDocument, variables),
    options
  );

useGetParagraphNewsListing.getKey = (
  variables: OperationTypes.GetParagraphNewsListingVariables
) => ['GetParagraphNewsListing', variables];
useGetParagraphNewsListing.fetcher = (
  variables: OperationTypes.GetParagraphNewsListingVariables
) =>
  fetcher<
    OperationTypes.GetParagraphNewsListing,
    OperationTypes.GetParagraphNewsListingVariables
  >(GetParagraphNewsListingDocument, variables);
export const GetInitDataQueryDocument = /*#__PURE__*/ `
    query GetInitDataQuery {
  mainMenu: menu(name: MAIN) {
    ...MainMenuFragment
  }
  summitMenu: menu(name: SUMMIT) {
    ...MainMenuFragment
  }
  foundationFooterMenu: menu(name: INTERLEDGER_FOUNDATION_FOOTER) {
    ...FooterMenuFragment
  }
  summitFooterMenu: menu(name: INTERLEDGER_SUMMIT_FOOTER) {
    ...FooterMenuFragment
  }
  developerToolsMenu: menu(name: DEVELOPER_TOOLS) {
    ...DeveloperToolsMenuFragment
  }
  siteSettings(id: "555ebe67-59de-41ca-a877-75a5c5fed44c") {
    social {
      ...SocialFragment
    }
  }
}
    ${MainMenuFragment}
${MenuItemFragment}
${FooterMenuFragment}
${DeveloperToolsMenuFragment}
${SocialFragment}`;
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
    query GetNodeByPathQuery($slug: String!, $newsListingPage: Int = 0) {
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
        ... on NodeFoundationPage {
          ...NodeFoundationPageFragment
        }
        ... on NodeSpeaker {
          ...NodeSpeakerFragment
        }
        ... on NodeTalk {
          ...NodeTalkFragment
        }
        ... on NodeDeveloperTools {
          ...NodeDeveloperToolsFragment
        }
        ... on NodePeople {
          ...NodePeopleFragment
        }
      }
    }
  }
}
    ${NodeArticleFragment}
${MediaImageSquareFragment}
${ResponsiveImageStyleFragment}
${MediaImageLandscapeFragment}
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
${ParagraphImageFragment}
${ParagraphLargeCalloutTextFragment}
${ParagraphHighlightedListFragment}
${ParagraphImageFullWidthFragment}
${ParagraphImageCarouselFragment}
${ParagraphHighlightedSpeakersFragment}
${ParagraphTeaserFragment}
${ParagraphImageGalleryFragment}
${ParagraphSpeakersGridFragment}
${NodeSpeakerCardFragment}
${ParagraphTalksGridFragment}
${NodeTalkCardFragment}
${ParagraphScheduleFragment}
${ParagraphScheduleDayFragment}
${ParagraphContentCarouselFragment}
${ContentCarouselItemFragment}
${ParagraphNewsListingsFragment}
${NodeArticleCardFragment}
${ParagraphFaqsFragment}
${ParagraphPriceListFragment}
${ParagraphPriceFragment}
${ParagraphPriceOptionFragment}
${ParagraphDividerFragment}
${ParagraphAnchorFragment}
${ParagraphPeopleGridFragment}
${NodePeopleCardFragment}
${ParagraphContactFormFragment}
${MetaTagFragment}
${NodePageFragment}
${ParagraphHeroHeaderFragment}
${NodeFoundationPageFragment}
${NodeSpeakerFragment}
${NodeTalkFragment}
${ParagraphTalkHeaderFragment}
${ParagraphMediaHeaderFragment}
${MediaRemoteVideoFragment}
${NodeDeveloperToolsFragment}
${NodePeopleFragment}`;
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
    query GetNodesPathsQuery {
  nodePaths {
    results {
      ... on NodeArticle {
        path
      }
      ... on NodePage {
        path
      }
      ... on NodeFoundationPage {
        path
      }
      ... on NodeSpeaker {
        path
      }
      ... on NodeTalk {
        path
      }
      ... on NodeDeveloperTools {
        path
      }
      ... on NodePeople {
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
