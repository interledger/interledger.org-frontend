export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Attributes: any;
  Cursor: any;
  Email: any;
  Html: any;
  PhoneNumber: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  UtcOffset: any;
};

/** Complex address data. */
export type Address = {
  __typename?: 'Address';
  additionalName?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  administrativeArea?: Maybe<Scalars['String']>;
  country?: Maybe<AddressCountry>;
  dependentLocality?: Maybe<Scalars['String']>;
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  sortingCode?: Maybe<Scalars['String']>;
};

/** Address country. */
export type AddressCountry = {
  __typename?: 'AddressCountry';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** An Domain within the CMS. */
export type ConfigPages = {
  /** The uuid of the Domain. */
  id: Scalars['ID'];
  /** The display name of the Domain. */
  label?: Maybe<Scalars['String']>;
};

/** A paginated set of results. */
export type Connection = {
  /** The edges of this connection. */
  edges: Array<Edge>;
  /** The nodes of the edges of this connection. */
  nodes: Array<EdgeNode>;
  /** Information to aid in pagination. */
  pageInfo: ConnectionPageInfo;
};

/** Filter */
export type ConnectionFilter = {
  conditions?: InputMaybe<Array<InputMaybe<ConnectionFilterCondition>>>;
  conjunction?: InputMaybe<ConnectionFilterConjunction>;
  groups?: InputMaybe<Array<InputMaybe<ConnectionFilter>>>;
};

/** Filter conditions */
export type ConnectionFilterCondition = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  field: Scalars['String'];
  language?: InputMaybe<Scalars['String']>;
  operator?: InputMaybe<ConnectionFilterOperator>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Conjunctions for filter  */
export enum ConnectionFilterConjunction {
  /** AND conjuction */
  And = 'AND',
  /** OR conjuction */
  Or = 'OR',
}

/** Operators for filter  */
export enum ConnectionFilterOperator {
  /** Between 2 values */
  Between = 'BETWEEN',
  /** Equal to */
  Equal = 'EQUAL',
  /** Greater than */
  GreaterThan = 'GREATER_THAN',
  /** Greater than or equal */
  GreaterThanOrEqual = 'GREATER_THAN_OR_EQUAL',
  /** In */
  In = 'IN',
  /** Is not null */
  IsNotNull = 'IS_NOT_NULL',
  /** Is null */
  IsNull = 'IS_NULL',
  /** Like / contains */
  Like = 'LIKE',
  /** Not between */
  NotBetween = 'NOT_BETWEEN',
  /** Not equal */
  NotEqual = 'NOT_EQUAL',
  /** Not in */
  NotIn = 'NOT_IN',
  /** Not like */
  NotLike = 'NOT_LIKE',
  /** Smaller than */
  SmallerThan = 'SMALLER_THAN',
  /** Smaller than or equal */
  SmallerThanOrEqual = 'SMALLER_THAN_OR_EQUAL',
}

/** Information about the page in a connection. */
export type ConnectionPageInfo = {
  __typename?: 'ConnectionPageInfo';
  /** The cursor for the last element in this page. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** Whether there are more pages in this connection. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are previous pages in this connection. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor for the first element in this page. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** Choose how your sorts will occur and on which field. */
export enum ConnectionSortKeys {
  /** Sort by creation date */
  CreatedAt = 'CREATED_AT',
  /** Sort by popular status. */
  Popular = 'POPULAR',
  /** Sort by promoted status. */
  Promoted = 'PROMOTED',
  /** Sort by sticky status. */
  Sticky = 'STICKY',
  /** Sort by entity title. */
  Title = 'TITLE',
  /** Sort by updated date */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by weight. */
  Weight = 'WEIGHT',
}

/** A Date range has a start and an end. */
export type DateRange = {
  __typename?: 'DateRange';
  end?: Maybe<DateTime>;
  start?: Maybe<DateTime>;
};

/** A DateTime object. */
export type DateTime = {
  __typename?: 'DateTime';
  offset: Scalars['UtcOffset'];
  time: Scalars['Time'];
  timestamp: Scalars['Timestamp'];
  timezone: Scalars['TimeZone'];
};

/**
 * An edge in a connection.
 * Provides the cursor to fetch data based on the position of the associated
 * node. Specific edge implementations may provide more information about the
 * relationship they represent.
 */
export type Edge = {
  cursor: Scalars['Cursor'];
  node: EdgeNode;
};

/** This entity is accessible over an Edge connection. */
export type EdgeNode = {
  id: Scalars['ID'];
};

/** A file object to represent an managed file. */
export type File = {
  __typename?: 'File';
  description?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
  url: Scalars['String'];
};

/** A image object to represent an managed file. */
export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']>;
  height: Scalars['Int'];
  mime?: Maybe<Scalars['String']>;
  /** Fetch an responsive image style. */
  responsive?: Maybe<ResponsiveImageStyleDerivative>;
  /** Fetch an image style. */
  style?: Maybe<ImageStylePathDerivative>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** A image object to represent an managed file. */
export type ImageResponsiveArgs = {
  name?: InputMaybe<ResponsiveImageStyleAvailable>;
};

/** A image object to represent an managed file. */
export type ImageStyleArgs = {
  name?: InputMaybe<ImageStylePathAvailable>;
};

/** Entity type image_style. */
export type ImageStyle = ImageStyleInterface & {
  __typename?: 'ImageStyle';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Entity type image_style. */
export type ImageStyleInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** List of image styles available to use. */
export enum ImageStylePathAvailable {
  /** Medium (220×220) */
  Medium = 'MEDIUM',
}

/** ImageStylePath derivative for an Image. */
export type ImageStylePathDerivative = {
  __typename?: 'ImageStylePathDerivative';
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  style?: Maybe<ImageStyle>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageStyleUnion = ImageStyle;

/** Generic untyped input for key-value pairs. */
export type KeyValueInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

/** A language definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  direction?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  internal: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Use local images for reusable media. */
export type MediaImage = MediaInterface & {
  __typename?: 'MediaImage';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Image */
  mediaImage: Image;
  /** Name */
  name: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

/** Entity type media. */
export type MediaInterface = {
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Name */
  name: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

/** A remotely hosted video from YouTube or Vimeo. */
export type MediaRemoteVideo = MediaInterface & {
  __typename?: 'MediaRemoteVideo';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Video URL */
  mediaOembedVideo: Scalars['String'];
  /** Name */
  name: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

export type MediaUnion =
  | MediaImage
  | MediaRemoteVideo
  | MediaVectorImage
  | MediaVideo;

/** A locally hosted Scalable Vector Graphics file. */
export type MediaVectorImage = MediaInterface & {
  __typename?: 'MediaVectorImage';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** SVG */
  mediaSvg: Svg;
  /** Name */
  name: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

/** A locally hosted video file. */
export type MediaVideo = MediaInterface & {
  __typename?: 'MediaVideo';
  /** The time the media item was last edited. */
  changed: DateTime;
  /** The time the media item was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Video file */
  mediaVideoFile: File;
  /** Name */
  name: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

/** Entity type menu. */
export type Menu = MenuInterface & {
  __typename?: 'Menu';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  items: Array<MenuItem>;
  name: Scalars['String'];
};

/** List of menus available to load. */
export enum MenuAvailable {
  /** Footer */
  Footer = 'FOOTER',
  /** Main navigation */
  Main = 'MAIN',
}

/** Entity type menu. */
export type MenuInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  items: Array<MenuItem>;
  name: Scalars['String'];
};

/** A menu item defined in the CMS. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /** Attributes of this menu item. */
  attributes: MenuItemAttributes;
  /** Child menu items of this menu item. */
  children: Array<MenuItem>;
  description?: Maybe<Scalars['String']>;
  /** Whether this menu item is intended to be expanded. */
  expanded: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Whether this menu item links to an internal route. */
  internal: Scalars['Boolean'];
  /** The route this menu item uses. Route loading can be disabled per menu type. */
  route?: Maybe<RouteUnion>;
  title: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

/** Menu item options set within the CMS. */
export type MenuItemAttributes = {
  __typename?: 'MenuItemAttributes';
  class?: Maybe<Scalars['String']>;
};

export type MenuUnion = Menu;

/** Meta elements are tags used in HTML and XHTML documents to provide structured metadata about a Web page. */
export type MetaTag = {
  tag: Scalars['String'];
};

export type MetaTagLink = MetaTag & {
  __typename?: 'MetaTagLink';
  attributes: MetaTagLinkAttributes;
  tag: Scalars['String'];
};

export type MetaTagLinkAttributes = {
  __typename?: 'MetaTagLinkAttributes';
  href?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
};

export type MetaTagProperty = MetaTag & {
  __typename?: 'MetaTagProperty';
  attributes: MetaTagPropertyAttributes;
  tag: Scalars['String'];
};

export type MetaTagPropertyAttributes = {
  __typename?: 'MetaTagPropertyAttributes';
  content?: Maybe<Scalars['String']>;
  property?: Maybe<Scalars['String']>;
};

export type MetaTagUnion = MetaTagLink | MetaTagProperty | MetaTagValue;

export type MetaTagValue = MetaTag & {
  __typename?: 'MetaTagValue';
  attributes: MetaTagValueAttributes;
  tag: Scalars['String'];
};

export type MetaTagValueAttributes = {
  __typename?: 'MetaTagValueAttributes';
  content?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** A GraphQL mutation is a request that changes data on the server. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder field to enable schema mutation extension. */
  _: Scalars['Boolean'];
};

/** Use <em>articles</em> for time-sensitive content like news, press releases or blog posts. */
export type NodeArticle = EdgeNode &
  NodeInterface & {
    __typename?: 'NodeArticle';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Image */
    image?: Maybe<MediaImage>;
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** URL alias */
    path: Scalars['String'];
    /** Promoted to front page */
    promote: Scalars['Boolean'];
    /** Sections */
    sections?: Maybe<Array<NodeArticleSectionsUnion>>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Title */
    title: Scalars['String'];
  };

/** A paginated set of results for NodeArticle. */
export type NodeArticleConnection = Connection & {
  __typename?: 'NodeArticleConnection';
  edges: Array<NodeArticleEdge>;
  nodes: Array<NodeArticle>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodeArticle. */
export type NodeArticleEdge = Edge & {
  __typename?: 'NodeArticleEdge';
  cursor: Scalars['Cursor'];
  node: NodeArticle;
};

export type NodeArticleSectionsUnion =
  | ParagraphButton
  | ParagraphSpacer
  | ParagraphText;

/** Entity type node. */
export type NodeInterface = {
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** URL alias */
  path: Scalars['String'];
  /** Promoted to front page */
  promote: Scalars['Boolean'];
  /** Published */
  status: Scalars['Boolean'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean'];
  /** Title */
  title: Scalars['String'];
};

/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export type NodePage = EdgeNode &
  NodeInterface & {
    __typename?: 'NodePage';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** Header */
    header?: Maybe<ParagraphHeroHeader>;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** URL alias */
    path: Scalars['String'];
    /** Promoted to front page */
    promote: Scalars['Boolean'];
    /** Sections */
    sections?: Maybe<Array<NodePageSectionsUnion>>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Preview image pulled in when post displayed in listings */
    teaser: ParagraphTeaser;
    /** Title */
    title: Scalars['String'];
  };

/** A paginated set of results for NodePage. */
export type NodePageConnection = Connection & {
  __typename?: 'NodePageConnection';
  edges: Array<NodePageEdge>;
  nodes: Array<NodePage>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodePage. */
export type NodePageEdge = Edge & {
  __typename?: 'NodePageEdge';
  cursor: Scalars['Cursor'];
  node: NodePage;
};

export type NodePageSectionsUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphHighlightedList
  | ParagraphHighlightedSpeakers
  | ParagraphImage
  | ParagraphImageCarousel
  | ParagraphImageGallery
  | ParagraphLargeCalloutText
  | ParagraphSpacer
  | ParagraphSpeakersGrid
  | ParagraphTalksGrid
  | ParagraphText
  | ParagraphTwoColumnContent
  | ParagraphVideo;

/** Entity type node. */
export type NodeSpeaker = EdgeNode &
  NodeInterface & {
    __typename?: 'NodeSpeaker';
    /** Biography */
    biography?: Maybe<Text>;
    /** The time that the node was last edited. */
    changed: DateTime;
    /** Company */
    company?: Maybe<Scalars['String']>;
    /** The time that the node was created. */
    created: DateTime;
    /** Email */
    email?: Maybe<Scalars['Email']>;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Image */
    image: MediaImage;
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** URL alias */
    path: Scalars['String'];
    /** Promoted to front page */
    promote: Scalars['Boolean'];
    /** Role */
    role?: Maybe<Scalars['String']>;
    /** Social Media */
    socialMedia?: Maybe<ParagraphSocialMedia>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Summary */
    summary?: Maybe<Text>;
    /**
     * This is a viewfield query proxy. Page size and contextual filters are applied
     * within the CMS. See the actual view base query for more documentation on
     * filters and options available. Speaker Talks
     */
    talks: ViewResultUnion;
    /** Teaser */
    teaser: ParagraphTeaser;
    /** Title */
    title: Scalars['String'];
  };

/** Entity type node. */
export type NodeSpeakerTalksArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** A paginated set of results for NodeSpeaker. */
export type NodeSpeakerConnection = Connection & {
  __typename?: 'NodeSpeakerConnection';
  edges: Array<NodeSpeakerEdge>;
  nodes: Array<NodeSpeaker>;
  pageInfo: ConnectionPageInfo;
};

/** Edge for NodeSpeaker. */
export type NodeSpeakerEdge = Edge & {
  __typename?: 'NodeSpeakerEdge';
  cursor: Scalars['Cursor'];
  node: NodeSpeaker;
};

/** Entity type node. */
export type NodeTalk = NodeInterface & {
  __typename?: 'NodeTalk';
  /** The time that the node was last edited. */
  changed: DateTime;
  /** The time that the node was created. */
  created: DateTime;
  /** Date & Time */
  dateTime: DateTime;
  /** Description */
  description?: Maybe<Text>;
  /** Enter talk duration in minutes */
  duration: Scalars['Int'];
  /** Header */
  header?: Maybe<ParagraphTalkHeader>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** URL alias */
  path: Scalars['String'];
  /** Promoted to front page */
  promote: Scalars['Boolean'];
  /** Speakers */
  speakers?: Maybe<Array<NodeSpeaker>>;
  /** Published */
  status: Scalars['Boolean'];
  /** Sticky at top of lists */
  sticky: Scalars['Boolean'];
  /** Preview image pulled in when post displayed in listings */
  teaser: ParagraphTeaser;
  /** Title */
  title: Scalars['String'];
};

export type NodeUnion = NodeArticle | NodePage | NodeSpeaker | NodeTalk;

/** A paginated set of results for Nodes */
export type NodesConnection = NodesUnionConnection & {
  __typename?: 'NodesConnection';
  edges: Array<Edge>;
  nodes: Array<NodeUnion>;
  pageInfo: ConnectionPageInfo;
};

/** A paginated set of results. */
export type NodesUnionConnection = {
  /** The edges of this connection. */
  edges: Array<Edge>;
  /** The nodes of the edges of this connection. */
  nodes: Array<NodeUnion>;
  /** Information to aid in pagination. */
  pageInfo: ConnectionPageInfo;
};

/** Entity type paragraph. */
export type ParagraphButton = ParagraphInterface & {
  __typename?: 'ParagraphButton';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Link */
  link: Link;
};

/** Entity type paragraph. */
export type ParagraphCarouselItem = ParagraphInterface & {
  __typename?: 'ParagraphCarouselItem';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Link */
  link?: Maybe<Link>;
  /** Image */
  singleImage: MediaImage;
};

/** Entity type paragraph. */
export type ParagraphContentTitle = ParagraphInterface & {
  __typename?: 'ParagraphContentTitle';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Content Title */
  title?: Maybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphHeroHeader = ParagraphInterface & {
  __typename?: 'ParagraphHeroHeader';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Poster Image */
  singleImage: MediaImage;
  /** Header Title */
  title?: Maybe<Scalars['String']>;
  /** Video */
  video?: Maybe<MediaVideo>;
  /** When text */
  whenText?: Maybe<Scalars['String']>;
  /** Where text */
  whereText?: Maybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphHighlightedList = ParagraphInterface & {
  __typename?: 'ParagraphHighlightedList';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** List Item */
  listItem?: Maybe<Array<Scalars['String']>>;
};

/** Entity type paragraph. */
export type ParagraphHighlightedSpeakers = ParagraphInterface & {
  __typename?: 'ParagraphHighlightedSpeakers';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Speakers */
  speakers?: Maybe<Array<NodeSpeaker>>;
};

/** Entity type paragraph. */
export type ParagraphImage = ParagraphInterface & {
  __typename?: 'ParagraphImage';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Image */
  singleImage: MediaImage;
};

/** Entity type paragraph. */
export type ParagraphImageCarousel = ParagraphInterface & {
  __typename?: 'ParagraphImageCarousel';
  /** Carousel Item */
  carouselItem?: Maybe<Array<ParagraphCarouselItem>>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
};

/** Entity type paragraph. */
export type ParagraphImageGallery = ParagraphInterface & {
  __typename?: 'ParagraphImageGallery';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Gallery Images */
  multipleImages: Array<MediaImage>;
};

/** Entity type paragraph. */
export type ParagraphInterface = {
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
};

/** Entity type paragraph. */
export type ParagraphLargeCalloutText = ParagraphInterface & {
  __typename?: 'ParagraphLargeCalloutText';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Large Callout Text */
  largeCalloutText?: Maybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphMediaHeader = ParagraphInterface & {
  __typename?: 'ParagraphMediaHeader';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Image */
  singleImage: MediaImage;
  /** Video */
  video?: Maybe<MediaRemoteVideo>;
};

/** Entity type paragraph. */
export type ParagraphSocialMedia = ParagraphInterface & {
  __typename?: 'ParagraphSocialMedia';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Links */
  socialMediaLinks?: Maybe<Array<ParagraphSocialMediaLink>>;
};

/** Entity type paragraph. */
export type ParagraphSocialMediaLink = ParagraphInterface & {
  __typename?: 'ParagraphSocialMediaLink';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Link */
  link: Link;
  /** Social Media Type */
  socialMediaType: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphSpacer = ParagraphInterface & {
  __typename?: 'ParagraphSpacer';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Spacer Line */
  spacerLine?: Maybe<Scalars['Boolean']>;
  /** Spacer Size */
  spacerSize: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphSpeakersGrid = ParagraphInterface & {
  __typename?: 'ParagraphSpeakersGrid';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. Speakers View
   */
  speakersView?: Maybe<ViewResultUnion>;
};

/** Entity type paragraph. */
export type ParagraphSpeakersGridSpeakersViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphTalkHeader = ParagraphInterface & {
  __typename?: 'ParagraphTalkHeader';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Header After */
  headerAfter: ParagraphMediaHeader;
  /** Header Before */
  headerBefore: ParagraphMediaHeader;
  /** Header During */
  headerDuring: ParagraphMediaHeader;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
};

/** Entity type paragraph. */
export type ParagraphTalksGrid = ParagraphInterface & {
  __typename?: 'ParagraphTalksGrid';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. Talks View
   */
  talksView: ViewResultUnion;
};

/** Entity type paragraph. */
export type ParagraphTalksGridTalksViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphTeaser = ParagraphInterface & {
  __typename?: 'ParagraphTeaser';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Teaser Image */
  singleImage: MediaImage;
};

/** Entity type paragraph. */
export type ParagraphText = ParagraphInterface & {
  __typename?: 'ParagraphText';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Text */
  text: Text;
};

/** Entity type paragraph. */
export type ParagraphTwoColumnContent = ParagraphInterface & {
  __typename?: 'ParagraphTwoColumnContent';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** First Column */
  firstColumn?: Maybe<Array<ParagraphTwoColumnContentFirstColumnUnion>>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Second Column */
  secondColumn?: Maybe<Array<ParagraphTwoColumnContentSecondColumnUnion>>;
};

export type ParagraphTwoColumnContentFirstColumnUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphSpacer
  | ParagraphText
  | ParagraphVideo;

export type ParagraphTwoColumnContentSecondColumnUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphSpacer
  | ParagraphText
  | ParagraphVideo;

export type ParagraphUnion =
  | ParagraphButton
  | ParagraphCarouselItem
  | ParagraphContentTitle
  | ParagraphHeroHeader
  | ParagraphHighlightedList
  | ParagraphHighlightedSpeakers
  | ParagraphImage
  | ParagraphImageCarousel
  | ParagraphImageGallery
  | ParagraphLargeCalloutText
  | ParagraphMediaHeader
  | ParagraphSocialMedia
  | ParagraphSocialMediaLink
  | ParagraphSpacer
  | ParagraphSpeakersGrid
  | ParagraphTalkHeader
  | ParagraphTalksGrid
  | ParagraphTeaser
  | ParagraphText
  | ParagraphTwoColumnContent
  | ParagraphVideo;

/** Entity type paragraph. */
export type ParagraphVideo = ParagraphInterface & {
  __typename?: 'ParagraphVideo';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Poster Image */
  singleImage: MediaImage;
  /** Video */
  video: MediaVideo;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type Query = {
  __typename?: 'Query';
  /** Schema information. */
  info: SchemaInformation;
  /** Load a Route by path. */
  menu?: Maybe<Menu>;
  /** List of all NodeArticle on the platform. */
  nodeArticles: NodeArticleConnection;
  /** List of all NodePage on the platform. */
  nodePages: NodePageConnection;
  /** List of all NodeSpeaker on the platform. */
  nodeSpeakers: NodeSpeakerConnection;
  /** List of all Nodes on the platform. Results are access controlled. */
  nodes: NodesConnection;
  /** Load a Route by path. */
  route?: Maybe<RouteUnion>;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryMenuArgs = {
  name: MenuAvailable;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryNodeArticlesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  langcode?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryNodePagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  langcode?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryNodeSpeakersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  langcode?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryNodesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  langcode?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QueryRouteArgs = {
  langcode?: InputMaybe<Scalars['String']>;
  path: Scalars['String'];
};

/** Entity type responsive_image_style. */
export type ResponsiveImageStyle = ResponsiveImageStyleInterface & {
  __typename?: 'ResponsiveImageStyle';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** List of responsive image styles available to use. */
export enum ResponsiveImageStyleAvailable {
  /** Aspect Ratio Landscape (16:9) */
  AspectRatioLandscape_16_9 = 'ASPECT_RATIO_LANDSCAPE_16_9',
  /** Aspect Ratio Portrait (9:16) */
  AspectRatioPortrait_9_16 = 'ASPECT_RATIO_PORTRAIT_9_16',
  /** Aspect Ratio Square (1:1) */
  AspectRatioSquare_1_1 = 'ASPECT_RATIO_SQUARE_1_1',
  /** Width */
  Width = 'WIDTH',
}

/** ResponsiveImageStyle derivative for an Image. */
export type ResponsiveImageStyleDerivative = {
  __typename?: 'ResponsiveImageStyleDerivative';
  height?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  responsive?: Maybe<ResponsiveImageStyle>;
  srcSetPath?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** Entity type responsive_image_style. */
export type ResponsiveImageStyleInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ResponsiveImageStyleUnion = ResponsiveImageStyle;

/** Routes represent incoming requests that resolve to content. */
export type Route = {
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean'];
  /** URL of this route. */
  url: Scalars['String'];
};

/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion = NodeArticle | NodePage | NodeSpeaker | NodeTalk;

/** Route outside of this website. */
export type RouteExternal = Route & {
  __typename?: 'RouteExternal';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean'];
  /** URL of this route. */
  url: Scalars['String'];
};

/** Route within this website. */
export type RouteInternal = Route & {
  __typename?: 'RouteInternal';
  /** Breadcrumb links for this route. */
  breadcrumbs?: Maybe<Array<Link>>;
  /** Content assigned to this route. */
  entity?: Maybe<RouteEntityUnion>;
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean'];
  /** URL of this route. */
  url: Scalars['String'];
};

/** Redirect to another URL with status. */
export type RouteRedirect = Route & {
  __typename?: 'RouteRedirect';
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean'];
  /** Utility prop. Always true for redirects. */
  redirect: Scalars['Boolean'];
  /** Suggested status for redirect. Eg 301. */
  status: Scalars['Int'];
  /** URL of this route. */
  url: Scalars['String'];
};

/** Route types that can exist in the system. */
export type RouteUnion = RouteExternal | RouteInternal | RouteRedirect;

/** A file object to represent an managed file. */
export type Svg = {
  __typename?: 'SVG';
  description?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size: Scalars['Int'];
  url: Scalars['String'];
};

/** Schema information provided by the system. */
export type SchemaInformation = {
  __typename?: 'SchemaInformation';
  /** The schema description. */
  description?: Maybe<Scalars['String']>;
  /** The internal path to the front page. */
  home?: Maybe<Scalars['String']>;
  /** The schema version. */
  version?: Maybe<Scalars['String']>;
};

/** List of menus available to load. */
export enum SortDirection {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC',
}

/** Result for view speakers display graphql_1. */
export type SpeakersResult = View & {
  __typename?: 'SpeakersResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

export type Table = {
  __typename?: 'Table';
  caption?: Maybe<Scalars['String']>;
  /** A text format associated with the row data. */
  format?: Maybe<Scalars['String']>;
  rows?: Maybe<Array<Maybe<TableRow>>>;
};

export type TableRow = {
  __typename?: 'TableRow';
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
  weight?: Maybe<Scalars['Int']>;
};

export type TalksAllContextualFilterInput = {
  nid?: InputMaybe<Scalars['String']>;
};

/** Result for view talks display graphql_1. */
export type TalksAllResult = View & {
  __typename?: 'TalksAllResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

/** Result for view talks display graphql_2. */
export type TalksResult = View & {
  __typename?: 'TalksResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

/** A processed text format defined by the CMS. */
export type Text = {
  __typename?: 'Text';
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['Html']>;
  value?: Maybe<Scalars['String']>;
};

/** A processed text format with summary defined by the CMS. */
export type TextSummary = {
  __typename?: 'TextSummary';
  format?: Maybe<Scalars['String']>;
  processed?: Maybe<Scalars['Html']>;
  summary?: Maybe<Scalars['Html']>;
  value?: Maybe<Scalars['String']>;
};

/**
 * Unsupported entity or field type in the schema.
 * This entity may not have been enabled in the schema yet and is being referenced via entity reference.
 */
export type UnsupportedType = {
  __typename?: 'UnsupportedType';
  /** Unsupported type, always TRUE. */
  unsupported?: Maybe<Scalars['Boolean']>;
};

/** Views represent collections of curated data from the site. */
export type View = {
  /** The description of the view. */
  description?: Maybe<Scalars['String']>;
  /** The machine name of the display. */
  display: Scalars['String'];
  /** The ID of the view. */
  id: Scalars['ID'];
  /** The human friendly label of the view. */
  label?: Maybe<Scalars['String']>;
  /** The language code of the view. */
  langcode?: Maybe<Scalars['String']>;
  /** Information about the page in the view. */
  pageInfo: ViewPageInfo;
  /** The machine name of the view. */
  view: Scalars['String'];
};

/** Information about the page in a view. */
export type ViewPageInfo = {
  __typename?: 'ViewPageInfo';
  /** Any result offset being used. */
  offset: Scalars['Int'];
  /** The current page being returned. */
  page: Scalars['Int'];
  /** How many results per page. */
  pageSize: Scalars['Int'];
  /** How many results total. */
  total: Scalars['Int'];
};

/** A reference to an embedded view */
export type ViewReference = {
  __typename?: 'ViewReference';
  contextualFilter?: Maybe<Array<Scalars['String']>>;
  display: Scalars['String'];
  pageSize?: Maybe<Scalars['Int']>;
  /** The name of the query used to fetch the data, if the view is a GraphQL display. */
  query?: Maybe<Scalars['String']>;
  view: Scalars['String'];
};

/** All available view result types. */
export type ViewResultUnion = SpeakersResult | TalksAllResult | TalksResult;
