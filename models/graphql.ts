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
  Violation: any;
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

/** Entity type config_pages. */
export type ConfigPagesInterface = {
  /** The config page UUID. */
  id?: Maybe<Scalars['ID']>;
  /** A brief description of your config page. */
  label?: Maybe<Scalars['String']>;
};

/** A paginated set of results. */
export type Connection = {
  /** The edges of this connection. */
  edges: Array<Edge>;
  /** The nodes of the edges of this connection. */
  nodes: Array<Node>;
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
  endCursor: Scalars['Cursor'];
  /** Whether there are more pages in this connection. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are previous pages in this connection. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor for the first element in this page. */
  startCursor: Scalars['Cursor'];
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
  node: Node;
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
export type ImageStyle = {
  __typename?: 'ImageStyle';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
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

/** A langauge definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  direction?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  route?: Maybe<RouteUnion>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** Use local images for reusable media. */
export type MediaImage = MediaInterface &
  Node & {
    __typename?: 'MediaImage';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** UUID */
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
  changed?: Maybe<DateTime>;
  /** The time the media item was created. */
  created?: Maybe<DateTime>;
  /** UUID */
  id?: Maybe<Scalars['ID']>;
  /** Name */
  name: Scalars['String'];
  /** Published */
  status?: Maybe<Scalars['Boolean']>;
};

/** A remotely hosted video from YouTube or Vimeo. */
export type MediaRemoteVideo = MediaInterface &
  Node & {
    __typename?: 'MediaRemoteVideo';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** UUID */
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
export type MediaVectorImage = MediaInterface &
  Node & {
    __typename?: 'MediaVectorImage';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** SVG */
    mediaSvg: Svg;
    /** Name */
    name: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
  };

/** A locally hosted video file. */
export type MediaVideo = MediaInterface &
  Node & {
    __typename?: 'MediaVideo';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Video file */
    mediaVideoFile: File;
    /** Name */
    name: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
  };

/** Entity type menu. */
export type Menu = {
  __typename?: 'Menu';
  items?: Maybe<Array<MenuItem>>;
  name?: Maybe<Scalars['String']>;
};

/** List of menus available to load. */
export enum MenuAvailable {
  /** Footer */
  Footer = 'FOOTER',
  /** Main navigation */
  Main = 'MAIN',
}

/** A menu item defined in the CMS. */
export type MenuItem = {
  __typename?: 'MenuItem';
  children?: Maybe<Array<MenuItem>>;
  description?: Maybe<Scalars['String']>;
  expanded: Scalars['Boolean'];
  route: RouteUnion;
  title?: Maybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  /** Schema generator version. */
  info: SchemaInformation;
};

/** A concrete fetchable type that is addressable by an id. */
export type Node = {
  id: Scalars['ID'];
};

/** Use <em>articles</em> for time-sensitive content like news, press releases or blog posts. */
export type NodeArticle = Node &
  NodeInterface & {
    __typename?: 'NodeArticle';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** UUID */
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
    sections?: Maybe<Array<NodeArticleFieldSectionsUnion>>;
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

export type NodeArticleFieldSectionsUnion =
  | ParagraphButton
  | ParagraphSpacer
  | ParagraphText;

/** Entity type node. */
export type NodeInterface = {
  /** The time that the node was last edited. */
  changed?: Maybe<DateTime>;
  /** The time that the node was created. */
  created?: Maybe<DateTime>;
  /** UUID */
  id?: Maybe<Scalars['ID']>;
  /** Language */
  langcode?: Maybe<Language>;
  /** The computed meta tags for the entity. */
  metatag?: Maybe<Array<MetaTagUnion>>;
  /** URL alias */
  path?: Maybe<Scalars['String']>;
  /** Promoted to front page */
  promote?: Maybe<Scalars['Boolean']>;
  /** Published */
  status?: Maybe<Scalars['Boolean']>;
  /** Sticky at top of lists */
  sticky?: Maybe<Scalars['Boolean']>;
  /** Title */
  title: Scalars['String'];
};

/** Use <em>basic pages</em> for your static content, such as an 'About us' page. */
export type NodePage = Node &
  NodeInterface & {
    __typename?: 'NodePage';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** Header */
    header?: Maybe<ParagraphHeroHeader>;
    /** UUID */
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
    sections?: Maybe<Array<NodePageFieldSectionsUnion>>;
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

export type NodePageFieldSectionsUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphHighlightedList
  | ParagraphImage
  | ParagraphImageCarousel
  | ParagraphLargeCalloutText
  | ParagraphSpacer
  | ParagraphText
  | ParagraphTwoColumnContent;

/** Entity type node. */
export type NodeSpeaker = Node &
  NodeInterface & {
    __typename?: 'NodeSpeaker';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** UUID */
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
    sections?: Maybe<Array<NodeSpeakerFieldSectionsUnion>>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Teaser */
    teaser: ParagraphTeaser;
    /** Title */
    title: Scalars['String'];
  };

export type NodeSpeakerFieldSectionsUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphText;

export type NodeUnion = NodeArticle | NodePage | NodeSpeaker;

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
export type ParagraphButton = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphButton';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Link */
    link: Link;
  };

/** Entity type paragraph. */
export type ParagraphContentTitle = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphContentTitle';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Content Title */
    title?: Maybe<Scalars['String']>;
  };

/** Entity type paragraph. */
export type ParagraphHeroHeader = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphHeroHeader';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Poster Image */
    singleImage: MediaImage;
    /** Header Title */
    title?: Maybe<Scalars['String']>;
    /** Video */
    video?: Maybe<ParagraphHeroHeaderFieldVideoUnion>;
    /** When text */
    whenText?: Maybe<Scalars['String']>;
    /** Where text */
    whereText?: Maybe<Scalars['String']>;
  };

export type ParagraphHeroHeaderFieldVideoUnion = MediaRemoteVideo | MediaVideo;

/** Entity type paragraph. */
export type ParagraphHighlightedList = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphHighlightedList';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** List Item */
    listItem?: Maybe<Array<Scalars['String']>>;
  };

/** Entity type paragraph. */
export type ParagraphImage = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphImage';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Image */
    singleImage: MediaImage;
  };

/** Entity type paragraph. */
export type ParagraphImageCarousel = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphImageCarousel';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Multiple Images */
    multipleImages?: Maybe<Array<MediaImage>>;
  };

/** Entity type paragraph. */
export type ParagraphInterface = {
  /** The time that the Paragraph was created. */
  created?: Maybe<DateTime>;
  /** UUID */
  id?: Maybe<Scalars['ID']>;
};

/** Entity type paragraph. */
export type ParagraphLargeCalloutText = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphLargeCalloutText';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Large Callout Text */
    largeCalloutText?: Maybe<Scalars['String']>;
  };

/** Entity type paragraph. */
export type ParagraphSpacer = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphSpacer';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Spacer Line */
    spacerLine?: Maybe<Scalars['Boolean']>;
    /** Spacer Size */
    spacerSize: Scalars['String'];
  };

/** Entity type paragraph. */
export type ParagraphTeaser = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphTeaser';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Teaser Image */
    singleImage: MediaImage;
  };

/** Entity type paragraph. */
export type ParagraphText = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphText';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** UUID */
    id: Scalars['ID'];
    /** Text */
    text: Text;
  };

/** Entity type paragraph. */
export type ParagraphTwoColumnContent = Node &
  ParagraphInterface & {
    __typename?: 'ParagraphTwoColumnContent';
    /** The time that the Paragraph was created. */
    created: DateTime;
    /** First Column */
    firstColumn?: Maybe<Array<ParagraphTwoColumnContentFieldFirstColumnUnion>>;
    /** UUID */
    id: Scalars['ID'];
    /** Second Column */
    secondColumn?: Maybe<
      Array<ParagraphTwoColumnContentFieldSecondColumnUnion>
    >;
  };

export type ParagraphTwoColumnContentFieldFirstColumnUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphSpacer
  | ParagraphText;

export type ParagraphTwoColumnContentFieldSecondColumnUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphSpacer
  | ParagraphText;

export type ParagraphUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphHeroHeader
  | ParagraphHighlightedList
  | ParagraphImage
  | ParagraphImageCarousel
  | ParagraphLargeCalloutText
  | ParagraphSpacer
  | ParagraphTeaser
  | ParagraphText
  | ParagraphTwoColumnContent;

/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export type Query = {
  __typename?: 'Query';
  /** Schema generator version. */
  info: SchemaInformation;
  /** Load a Route by path. */
  menu?: Maybe<Menu>;
  /** List of all NodeArticle on the platform. */
  nodeArticles: NodeArticleConnection;
  /** List of all NodePage on the platform. */
  nodePages: NodePageConnection;
  /** List of all Nodes on the platform. Results are access controlled. */
  nodes: NodesConnection;
  /** Load a Route by path. */
  route?: Maybe<RouteUnion>;
};

/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export type QueryMenuArgs = {
  name: MenuAvailable;
};

/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export type QueryNodeArticlesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export type QueryNodePagesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export type QueryNodesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  filter?: InputMaybe<ConnectionFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ConnectionSortKeys>;
};

/**
 * The schema's entry-point for queries. This acts as the public, top-level API
 * from which all queries must start.
 */
export type QueryRouteArgs = {
  langcode?: InputMaybe<Scalars['String']>;
  path: Scalars['String'];
};

/** The base GraphQL Response class */
export type Response = {
  errors?: Maybe<Array<Maybe<Scalars['Violation']>>>;
};

/** Entity type responsive_image_style. */
export type ResponsiveImageStyle = {
  __typename?: 'ResponsiveImageStyle';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

/** List of responsive image styles available to use. */
export enum ResponsiveImageStyleAvailable {
  /** Aspect Ratio Landscape (16:9) */
  AspectRatioLandscape_16_9 = 'ASPECT_RATIO_LANDSCAPE_16_9',
  /** Aspect Ratio Portrait (9:16) */
  AspectRatioPortrait_9_16 = 'ASPECT_RATIO_PORTRAIT_9_16',
  /** Aspect Ratio Square (1:1) */
  AspectRatioSquare_1_1 = 'ASPECT_RATIO_SQUARE_1_1',
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

export type ResponsiveImageStyleUnion = ResponsiveImageStyle;

/** Routes represent incoming requests that resolve to content. */
export type Route = {
  internal: Scalars['Boolean'];
  url: Scalars['String'];
};

/** A list of possible entites that can be returned by URL. */
export type RouteEntityUnion = NodeArticle | NodePage;

/** Route outside of this website. */
export type RouteExternal = Route & {
  __typename?: 'RouteExternal';
  internal: Scalars['Boolean'];
  url: Scalars['String'];
};

/** Route within this website. */
export type RouteInternal = Route & {
  __typename?: 'RouteInternal';
  /** Content assigned to this route. */
  entity?: Maybe<RouteEntityUnion>;
  internal: Scalars['Boolean'];
  url: Scalars['String'];
};

/** Redirect to another URL with status. */
export type RouteRedirect = Route & {
  __typename?: 'RouteRedirect';
  internal: Scalars['Boolean'];
  /** Utility prop. Always true for redirects. */
  redirect: Scalars['Boolean'];
  /** Suggested status for redirect. Eg 301. */
  status: Scalars['Int'];
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

/** Schema generator version. */
export type SchemaInformation = {
  __typename?: 'SchemaInformation';
  /** Schema description. */
  description: Scalars['String'];
  /** Path to the homepage. */
  home?: Maybe<Scalars['String']>;
  /** Schema module version. */
  version: Scalars['String'];
};

/** List of menus available to load. */
export enum SortDirection {
  /** Ascending */
  Asc = 'ASC',
  /** Descending */
  Desc = 'DESC',
}

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

/** Entity type taxonomy_term. */
export type TermInterface = {
  /** The time that the term was last edited. */
  changed?: Maybe<DateTime>;
  /** Description */
  description?: Maybe<Text>;
  /** The term UUID. */
  id?: Maybe<Scalars['ID']>;
  /** The term language code. */
  langcode?: Maybe<Language>;
  /** Name */
  name: Scalars['String'];
  /** URL alias */
  path?: Maybe<Scalars['String']>;
  /** Published */
  status?: Maybe<Scalars['Boolean']>;
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
