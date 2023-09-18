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
  Email: any;
  Html: any;
  PhoneNumber: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  UtcOffset: any;
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
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** A brief description of your config page. */
  label: Scalars['String'];
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
};

/** Entity type config_pages. */
export type ConfigPagesUnion = SiteSettings;

/** Result for view contact_topics_graphql display graphql_1. */
export type ContactTopicsResult = View & {
  __typename?: 'ContactTopicsResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<TermUnion>;
  view: Scalars['String'];
};

/** A DateTime object. */
export type DateTime = {
  __typename?: 'DateTime';
  /** A string that will have a value of format ±hh:mm */
  offset: Scalars['UtcOffset'];
  /** RFC 3339 compliant time string. */
  time: Scalars['Time'];
  /** Type represents date and time as number of milliseconds from start of the UNIX epoch. */
  timestamp: Scalars['Timestamp'];
  /** A field whose value exists in the standard IANA Time Zone Database. */
  timezone: Scalars['TimeZone'];
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
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']>;
  /** The height of the image. */
  height: Scalars['Int'];
  /** The mime type of the image. */
  mime?: Maybe<Scalars['String']>;
  /** Fetch an responsive image style. (Deprecated) */
  responsive?: Maybe<ResponsiveImageStyleDerivativeDeprecated>;
  /** Responsive Image variations control different sizes and formats for images. */
  responsiveVariations?: Maybe<Array<ResponsiveImageStyleDerivative>>;
  /** The title text of the image. */
  title?: Maybe<Scalars['String']>;
  /** The URL of the image. */
  url: Scalars['String'];
  /** Image variations control different sizes and formats for images. */
  variations?: Maybe<Array<ImageStyleDerivative>>;
  /** The width of the image. */
  width: Scalars['Int'];
};

/** A image object to represent an managed file. */
export type ImageResponsiveArgs = {
  name?: InputMaybe<ResponsiveImageStyleAvailable>;
};

/** A image object to represent an managed file. */
export type ImageResponsiveVariationsArgs = {
  styles?: InputMaybe<Array<InputMaybe<ResponsiveImageStyleAvailable>>>;
};

/** A image object to represent an managed file. */
export type ImageVariationsArgs = {
  styles?: InputMaybe<Array<InputMaybe<ImageStyleAvailable>>>;
};

/** Entity type image_style. */
export type ImageStyle = ImageStyleInterface & {
  __typename?: 'ImageStyle';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** List of image styles available to use. */
export enum ImageStyleAvailable {
  /** Medium (220×220) */
  Medium = 'MEDIUM',
}

/** ImageStyle derivatives for an Image. */
export type ImageStyleDerivative = {
  __typename?: 'ImageStyleDerivative';
  height: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** Entity type image_style. */
export type ImageStyleInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** Entity type image_style. */
export type ImageStyleUnion = ImageStyle;

/** Generic untyped input for key-value pairs. */
export type KeyValueInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

/** A language definition provided by the CMS. */
export type Language = {
  __typename?: 'Language';
  /** The language direction. */
  direction?: Maybe<Scalars['String']>;
  /** The language code. */
  id?: Maybe<Scalars['ID']>;
  /** The language name. */
  name?: Maybe<Scalars['String']>;
};

/** A link. */
export type Link = {
  __typename?: 'Link';
  /** Whether the link is internal to this website. */
  internal: Scalars['Boolean'];
  /** The title of the link. */
  title?: Maybe<Scalars['String']>;
  /** The URL of the link. */
  url?: Maybe<Scalars['String']>;
};

/** Use local images for reusable media. */
export type MediaImage = MediaInterface &
  MetaTagInterface & {
    __typename?: 'MediaImage';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** Image */
    mediaImage: Image;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
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
  /** Language */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String'];
  /** URL alias */
  path: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

/** A remotely hosted video from YouTube or Vimeo. */
export type MediaRemoteVideo = MediaInterface &
  MetaTagInterface & {
    __typename?: 'MediaRemoteVideo';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** Video URL */
    mediaOembedVideo: Scalars['String'];
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
  };

/** Entity type media. */
export type MediaUnion =
  | MediaImage
  | MediaRemoteVideo
  | MediaVectorImage
  | MediaVideo;

/** A locally hosted Scalable Vector Graphics file. */
export type MediaVectorImage = MediaInterface &
  MetaTagInterface & {
    __typename?: 'MediaVectorImage';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** SVG */
    mediaSvg: Svg;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
  };

/** A locally hosted video file. */
export type MediaVideo = MediaInterface &
  MetaTagInterface & {
    __typename?: 'MediaVideo';
    /** The time the media item was last edited. */
    changed: DateTime;
    /** The time the media item was created. */
    created: DateTime;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** Video file */
    mediaVideoFile: File;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** Name */
    name: Scalars['String'];
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
  };

/** Entity type menu. */
export type Menu = MenuInterface & {
  __typename?: 'Menu';
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String'];
};

/** List of menus available to load. */
export enum MenuAvailable {
  /** Developer Tools */
  DeveloperTools = 'DEVELOPER_TOOLS',
  /** Information */
  Footer = 'FOOTER',
  /** Main navigation */
  Main = 'MAIN',
  /** Summit */
  Summit = 'SUMMIT',
}

/** Entity type menu. */
export type MenuInterface = {
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The menu items. */
  items: Array<MenuItem>;
  /** The menu name. */
  name: Scalars['String'];
};

/** A menu item defined in the CMS. */
export type MenuItem = {
  __typename?: 'MenuItem';
  /** Attributes of this menu item. */
  attributes: MenuItemAttributes;
  /** Child menu items of this menu item. */
  children: Array<MenuItem>;
  /** The description of the menu item. */
  description?: Maybe<Scalars['String']>;
  /** Whether this menu item is intended to be expanded. */
  expanded: Scalars['Boolean'];
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Whether this menu item links to an internal route. */
  internal: Scalars['Boolean'];
  /** The route this menu item uses. Route loading can be disabled per menu type. */
  route?: Maybe<RouteUnion>;
  /** The title of the menu item. */
  title: Scalars['String'];
  /** The URL of the menu item. */
  url?: Maybe<Scalars['String']>;
};

/** Menu item options set within the CMS. */
export type MenuItemAttributes = {
  __typename?: 'MenuItemAttributes';
  class?: Maybe<Scalars['String']>;
};

/** Entity type menu. */
export type MenuUnion = Menu;

/** A meta tag element. */
export type MetaTag = {
  /** The HTML tag for this meta element. */
  tag: Scalars['String'];
};

/** This entity has meta tags enabled. */
export type MetaTagInterface = {
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
};

/** A meta link element. */
export type MetaTagLink = MetaTag & {
  __typename?: 'MetaTagLink';
  /** The meta tag element attributes. */
  attributes: MetaTagLinkAttributes;
  /** The HTML tag for this meta element. */
  tag: Scalars['String'];
};

/** A meta link element's attributes. */
export type MetaTagLinkAttributes = {
  __typename?: 'MetaTagLinkAttributes';
  /** The href attribute of the link. */
  href?: Maybe<Scalars['String']>;
  /** The rel attribute of the link. */
  rel?: Maybe<Scalars['String']>;
};

/** A meta property element. */
export type MetaTagProperty = MetaTag & {
  __typename?: 'MetaTagProperty';
  /** The meta tag element attributes. */
  attributes: MetaTagPropertyAttributes;
  /** The HTML tag for this meta element. */
  tag: Scalars['String'];
};

/** A meta property element's attributes. */
export type MetaTagPropertyAttributes = {
  __typename?: 'MetaTagPropertyAttributes';
  /** The content attribute of the meta tag. */
  content?: Maybe<Scalars['String']>;
  /** The property attribute of the meta tag. */
  property?: Maybe<Scalars['String']>;
};

/** A meta tag element. */
export type MetaTagUnion = MetaTagLink | MetaTagProperty | MetaTagValue;

/** A meta content element. */
export type MetaTagValue = MetaTag & {
  __typename?: 'MetaTagValue';
  /** The meta tag element attributes. */
  attributes: MetaTagValueAttributes;
  /** The HTML tag for this meta element. */
  tag: Scalars['String'];
};

/** A meta content element's attributes. */
export type MetaTagValueAttributes = {
  __typename?: 'MetaTagValueAttributes';
  /** The content attribute of the meta tag. */
  content?: Maybe<Scalars['String']>;
  /** The name attribute of the meta tag. */
  name?: Maybe<Scalars['String']>;
};

/** A GraphQL mutation is a request that changes data on the server. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Placeholder field to enable schema mutation extension. */
  _: Scalars['Boolean'];
};

/** Result for view news display graphql_2. */
export type NewsLatestResult = View & {
  __typename?: 'NewsLatestResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

/** Result for view news display graphql_1. */
export type NewsResult = View & {
  __typename?: 'NewsResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

/** Use <em>articles</em> for time-sensitive content like news, press releases or blog posts. */
export type NodeArticle = MetaTagInterface &
  NodeInterface & {
    __typename?: 'NodeArticle';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
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
    /** Sections */
    sections?: Maybe<Array<NodeArticleSectionsUnion>>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Summary */
    summary?: Maybe<Text>;
    /** Preview image pulled in when post displayed in listings */
    teaser: ParagraphTeaser;
    /** Title */
    title: Scalars['String'];
  };

/** Sections */
export type NodeArticleSectionsUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphImage
  | ParagraphSpacer
  | ParagraphText
  | ParagraphTwoColumnContent;

/** Entity type node. */
export type NodeDeveloperTools = MetaTagInterface &
  NodeInterface & {
    __typename?: 'NodeDeveloperTools';
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
    /** Sections */
    sections?: Maybe<Array<NodeDeveloperToolsSectionsUnion>>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Title */
    title: Scalars['String'];
  };

/** Sections */
export type NodeDeveloperToolsSectionsUnion =
  | ParagraphAnchor
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphImageFullWidth
  | ParagraphSpacer
  | ParagraphText;

/** Entity type node. */
export type NodeFoundationPage = MetaTagInterface &
  NodeInterface & {
    __typename?: 'NodeFoundationPage';
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
    sections?: Maybe<Array<NodeFoundationPageSectionsUnion>>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Preview image pulled in when post displayed in listings */
    teaser: ParagraphTeaser;
    /** Title */
    title: Scalars['String'];
  };

/** Sections */
export type NodeFoundationPageSectionsUnion =
  | ParagraphButton
  | ParagraphContactForm
  | ParagraphContentCarousel
  | ParagraphContentColumnCards
  | ParagraphContentTitle
  | ParagraphFaqs
  | ParagraphHighlightedList
  | ParagraphImageCarousel
  | ParagraphImageFullWidth
  | ParagraphImageGallery
  | ParagraphLargeCalloutText
  | ParagraphNewsListings
  | ParagraphPeopleGrid
  | ParagraphPriceList
  | ParagraphScrollingLogoCarousel
  | ParagraphSpacer
  | ParagraphText
  | ParagraphTwoColumnContent
  | ParagraphVideo
  | ParagraphVideoEmbed;

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

/** Entity type node. */
export type NodePage = MetaTagInterface &
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

/** Sections */
export type NodePageSectionsUnion =
  | ParagraphButton
  | ParagraphContentCarousel
  | ParagraphContentTitle
  | ParagraphFaqs
  | ParagraphHighlightedList
  | ParagraphHighlightedSpeakers
  | ParagraphImageCarousel
  | ParagraphImageFullWidth
  | ParagraphImageGallery
  | ParagraphLargeCalloutText
  | ParagraphPriceList
  | ParagraphSchedule
  | ParagraphScrollingLogoCarousel
  | ParagraphSpacer
  | ParagraphSpeakersGrid
  | ParagraphTalksGrid
  | ParagraphText
  | ParagraphTwoColumnContent
  | ParagraphVideo
  | ParagraphVideoEmbed;

/** Result for view node_paths_graphql display graphql_1. */
export type NodePathsResult = View & {
  __typename?: 'NodePathsResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

/** Entity type node. */
export type NodePeople = MetaTagInterface &
  NodeInterface & {
    __typename?: 'NodePeople';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** Description */
    description?: Maybe<Text>;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** URL alias */
    path: Scalars['String'];
    /** Position */
    position: Scalars['String'];
    /** Promoted to front page */
    promote: Scalars['Boolean'];
    /** Social */
    social?: Maybe<ParagraphSocialMedia>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Preview image pulled in when post displayed in listings */
    teaser: ParagraphTeaser;
    /** Title */
    title: Scalars['String'];
  };

/** Entity type node. */
export type NodeSpeaker = MetaTagInterface &
  NodeInterface & {
    __typename?: 'NodeSpeaker';
    /** Biography */
    biography?: Maybe<Text>;
    /** The time that the node was last edited. */
    changed: DateTime;
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
    /** Social Media */
    socialMedia?: Maybe<ParagraphSocialMedia>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Summary */
    summary?: Maybe<Text>;
    /** Tag Line */
    tagLine?: Maybe<Scalars['String']>;
    /**
     * This is a viewfield query proxy. Page size and contextual filters are applied
     * within the CMS. See the actual view base query for more documentation on
     * filters and options available. Speaker Talks
     */
    talks: ViewResultUnion;
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

/** Entity type node. */
export type NodeTalk = MetaTagInterface &
  NodeInterface & {
    __typename?: 'NodeTalk';
    /** The time that the node was last edited. */
    changed: DateTime;
    /** The time that the node was created. */
    created: DateTime;
    /** Description */
    description?: Maybe<Text>;
    /** Ends At */
    endsAt?: Maybe<DateTime>;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** Language */
    langcode: Language;
    /** Live Video */
    liveVideo?: Maybe<MediaRemoteVideo>;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** URL alias */
    path: Scalars['String'];
    /** Promoted to front page */
    promote: Scalars['Boolean'];
    /** Recording Video */
    recordingVideo?: Maybe<MediaRemoteVideo>;
    /** Speakers */
    speakers?: Maybe<Array<NodeSpeaker>>;
    /** Starts At */
    startsAt?: Maybe<DateTime>;
    /** Published */
    status: Scalars['Boolean'];
    /** Sticky at top of lists */
    sticky: Scalars['Boolean'];
    /** Title */
    title: Scalars['String'];
  };

/** Entity type node. */
export type NodeUnion =
  | NodeArticle
  | NodeDeveloperTools
  | NodeFoundationPage
  | NodePage
  | NodePeople
  | NodeSpeaker
  | NodeTalk;

/** Entity type paragraph. */
export type ParagraphAnchor = ParagraphInterface & {
  __typename?: 'ParagraphAnchor';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Title */
  title: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphButton = ParagraphInterface & {
  __typename?: 'ParagraphButton';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Image */
  singleImage: MediaImage;
};

/** Entity type paragraph. */
export type ParagraphColumnCard = ParagraphInterface & {
  __typename?: 'ParagraphColumnCard';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Link */
  link: Link;
  /** Image */
  singleImage: MediaImage;
  /** Text */
  text: Text;
};

/** Entity type paragraph. */
export type ParagraphContactForm = ParagraphInterface & {
  __typename?: 'ParagraphContactForm';
  /** Contact Topic */
  contactTopic?: Maybe<TermContactTopics>;
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. Contact Topics View
   */
  contactTopicsView: ViewResultUnion;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphContactFormContactTopicsViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphContentCarousel = ParagraphInterface & {
  __typename?: 'ParagraphContentCarousel';
  /** Carousel Item */
  carouselItem?: Maybe<Array<ParagraphTwoColumnContent>>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphContentColumnCards = ParagraphInterface & {
  __typename?: 'ParagraphContentColumnCards';
  /** Content */
  content?: Maybe<Array<ParagraphColumnCard>>;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** Image Style */
  imageStyle: Scalars['String'];
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphContentTitle = ParagraphInterface & {
  __typename?: 'ParagraphContentTitle';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Content Title */
  title: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphDivider = ParagraphInterface & {
  __typename?: 'ParagraphDivider';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphFaq = ParagraphInterface & {
  __typename?: 'ParagraphFaq';
  /** Answer */
  answer: Text;
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Question */
  question: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphFaqs = ParagraphInterface & {
  __typename?: 'ParagraphFaqs';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** FAQs */
  faqs?: Maybe<Array<ParagraphFaq>>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphHeroHeader = ParagraphInterface & {
  __typename?: 'ParagraphHeroHeader';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Poster Image */
  singleImage: MediaImage;
  /** Header Title */
  title: Scalars['String'];
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphImageFullWidth = ParagraphInterface & {
  __typename?: 'ParagraphImageFullWidth';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Image */
  singleImage: MediaImage;
};

/** Entity type paragraph. */
export type ParagraphImageGallery = ParagraphInterface & {
  __typename?: 'ParagraphImageGallery';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Gallery Images */
  multipleImages: Array<MediaImage>;
};

/** Entity type paragraph. */
export type ParagraphInterface = {
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
};

/** Entity type paragraph. */
export type ParagraphLargeCalloutText = ParagraphInterface & {
  __typename?: 'ParagraphLargeCalloutText';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Large Callout Text */
  largeCalloutText?: Maybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphLogoLink = ParagraphInterface & {
  __typename?: 'ParagraphLogoLink';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Link */
  link: Link;
  /** Image */
  singleImage: MediaImage;
};

/** Entity type paragraph. */
export type ParagraphMediaHeader = ParagraphInterface & {
  __typename?: 'ParagraphMediaHeader';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Image */
  singleImage: MediaImage;
  /** Video */
  video?: Maybe<MediaRemoteVideo>;
};

/** Entity type paragraph. */
export type ParagraphNewsListings = ParagraphInterface & {
  __typename?: 'ParagraphNewsListings';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. News Latest View
   */
  newsLatestView: ViewResultUnion;
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. News View
   */
  newsView: ViewResultUnion;
};

/** Entity type paragraph. */
export type ParagraphNewsListingsNewsLatestViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphNewsListingsNewsViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphPeopleGrid = ParagraphInterface & {
  __typename?: 'ParagraphPeopleGrid';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. People View
   */
  peopleView: ViewResultUnion;
};

/** Entity type paragraph. */
export type ParagraphPeopleGridPeopleViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphPrice = ParagraphInterface & {
  __typename?: 'ParagraphPrice';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Menu Title */
  menuTitle?: Maybe<Scalars['String']>;
  /** Options */
  options?: Maybe<Array<ParagraphPriceOptionsUnion>>;
  /** Pricing */
  pricing: Scalars['String'];
  /** Title */
  title: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphPriceList = ParagraphInterface & {
  __typename?: 'ParagraphPriceList';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Prices Footer */
  pricesFooter?: Maybe<ParagraphPrice>;
  /** Prices Main */
  pricesMain?: Maybe<Array<ParagraphPrice>>;
};

/** Entity type paragraph. */
export type ParagraphPriceOption = ParagraphInterface & {
  __typename?: 'ParagraphPriceOption';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Title */
  title: Scalars['String'];
};

/** Options */
export type ParagraphPriceOptionsUnion =
  | ParagraphDivider
  | ParagraphPriceOption;

/** Entity type paragraph. */
export type ParagraphSchedule = ParagraphInterface & {
  __typename?: 'ParagraphSchedule';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Days */
  days: Array<ParagraphScheduleDay>;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Title */
  title: Scalars['String'];
};

/** Entity type paragraph. */
export type ParagraphScheduleDay = ParagraphInterface & {
  __typename?: 'ParagraphScheduleDay';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** Date */
  date: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /**
   * This is a viewfield query proxy. Page size and contextual filters are applied
   * within the CMS. See the actual view base query for more documentation on
   * filters and options available. Talks View
   */
  talksView: ViewResultUnion;
};

/** Entity type paragraph. */
export type ParagraphScheduleDayTalksViewArgs = {
  filter?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<SortDirection>;
  sortKey?: InputMaybe<Scalars['String']>;
};

/** Entity type paragraph. */
export type ParagraphScrollingLogoCarousel = ParagraphInterface & {
  __typename?: 'ParagraphScrollingLogoCarousel';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Logos */
  logos: Array<ParagraphLogoLink>;
};

/** Entity type paragraph. */
export type ParagraphSocialMedia = ParagraphInterface & {
  __typename?: 'ParagraphSocialMedia';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
export type ParagraphTalksGrid = ParagraphInterface & {
  __typename?: 'ParagraphTalksGrid';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
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
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Second Column */
  secondColumn?: Maybe<Array<ParagraphTwoColumnContentSecondColumnUnion>>;
};

/** First Column */
export type ParagraphTwoColumnContentFirstColumnUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphImage
  | ParagraphSpacer
  | ParagraphText
  | ParagraphVideo
  | ParagraphVideoEmbed;

/** Second Column */
export type ParagraphTwoColumnContentSecondColumnUnion =
  | ParagraphButton
  | ParagraphContentTitle
  | ParagraphImage
  | ParagraphSpacer
  | ParagraphText
  | ParagraphVideo
  | ParagraphVideoEmbed;

/** Entity type paragraph. */
export type ParagraphUnion =
  | ParagraphAnchor
  | ParagraphButton
  | ParagraphCarouselItem
  | ParagraphColumnCard
  | ParagraphContactForm
  | ParagraphContentCarousel
  | ParagraphContentColumnCards
  | ParagraphContentTitle
  | ParagraphDivider
  | ParagraphFaq
  | ParagraphFaqs
  | ParagraphHeroHeader
  | ParagraphHighlightedList
  | ParagraphHighlightedSpeakers
  | ParagraphImage
  | ParagraphImageCarousel
  | ParagraphImageFullWidth
  | ParagraphImageGallery
  | ParagraphLargeCalloutText
  | ParagraphLogoLink
  | ParagraphMediaHeader
  | ParagraphNewsListings
  | ParagraphPeopleGrid
  | ParagraphPrice
  | ParagraphPriceList
  | ParagraphPriceOption
  | ParagraphSchedule
  | ParagraphScheduleDay
  | ParagraphScrollingLogoCarousel
  | ParagraphSocialMedia
  | ParagraphSocialMediaLink
  | ParagraphSpacer
  | ParagraphSpeakersGrid
  | ParagraphTalksGrid
  | ParagraphTeaser
  | ParagraphText
  | ParagraphTwoColumnContent
  | ParagraphVideo
  | ParagraphVideoEmbed;

/** Entity type paragraph. */
export type ParagraphVideo = ParagraphInterface & {
  __typename?: 'ParagraphVideo';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Poster Image */
  singleImage: MediaImage;
  /** Video */
  video: MediaVideo;
};

/** Entity type paragraph. */
export type ParagraphVideoEmbed = ParagraphInterface & {
  __typename?: 'ParagraphVideoEmbed';
  /** The time that the Paragraph was created. */
  created: DateTime;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The paragraphs entity language code. */
  langcode: Language;
  /** Video */
  remoteVideo?: Maybe<MediaRemoteVideo>;
};

/** Result for view people display graphql_1. */
export type PeopleResult = View & {
  __typename?: 'PeopleResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
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
  /** Query for view node_paths_graphql display graphql_1. */
  nodePaths?: Maybe<NodePathsResult>;
  /** Fetch data for a specific ParagraphNewsListings */
  paragraphNewsListings?: Maybe<ParagraphNewsListings>;
  /** Load a Route by path. */
  route?: Maybe<RouteUnion>;
  /** Fetch data for a specific SiteSettings */
  siteSettings?: Maybe<SiteSettings>;
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
export type QueryParagraphNewsListingsArgs = {
  id: Scalars['ID'];
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

/**
 * The schema's entry-point for queries.
 *
 * This acts as the public, top-level API from which all queries must start.
 */
export type QuerySiteSettingsArgs = {
  id: Scalars['ID'];
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
  height: Scalars['Int'];
  name: Scalars['String'];
  srcSet: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

/** ResponsiveImageStyle derivative for an Image (Deprecated). */
export type ResponsiveImageStyleDerivativeDeprecated = {
  __typename?: 'ResponsiveImageStyleDerivativeDeprecated';
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

/** Entity type responsive_image_style. */
export type ResponsiveImageStyleUnion = ResponsiveImageStyle;

/** Routes represent incoming requests that resolve to content. */
export type Route = {
  /** Whether this route is internal or external. */
  internal: Scalars['Boolean'];
  /** URL of this route. */
  url: Scalars['String'];
};

/** A list of possible entities that can be returned by URL. */
export type RouteEntityUnion =
  | NodeArticle
  | NodeDeveloperTools
  | NodeFoundationPage
  | NodePage
  | NodePeople
  | NodeSpeaker
  | NodeTalk;

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
export type RouteUnion = RouteExternal | RouteInternal;

/** A file object to represent an managed file. */
export type Svg = {
  __typename?: 'SVG';
  /** The mime type of the image. */
  mime?: Maybe<Scalars['String']>;
  /** The title text of the image. */
  title?: Maybe<Scalars['String']>;
  /** The URL of the svg. */
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

/** Entity type config_pages. */
export type SiteSettings = ConfigPages &
  ConfigPagesInterface &
  MetaTagInterface & {
    __typename?: 'SiteSettings';
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** A brief description of your config page. */
    label: Scalars['String'];
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** Social */
    social?: Maybe<ParagraphSocialMedia>;
  };

/** Sort direction. */
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

/** Result for view talks display graphql_2. */
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

export type TalksByDateContextualFilterInput = {
  field_date_time_value?: InputMaybe<Scalars['String']>;
};

/** Result for view talks display graphql_3. */
export type TalksByDateResult = View & {
  __typename?: 'TalksByDateResult';
  description?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  langcode?: Maybe<Scalars['String']>;
  pageInfo: ViewPageInfo;
  results: Array<NodeUnion>;
  view: Scalars['String'];
};

export type TalksContextualFilterInput = {
  nid?: InputMaybe<Scalars['String']>;
};

/** Result for view talks display graphql_1. */
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

/** Entity type taxonomy_term. */
export type TermContactTopics = MetaTagInterface &
  TermInterface & {
    __typename?: 'TermContactTopics';
    /** The time that the term was last edited. */
    changed: DateTime;
    /** Description */
    description: Text;
    /** The Universally Unique IDentifier (UUID). */
    id: Scalars['ID'];
    /** The term language code. */
    langcode: Language;
    /** The computed meta tags for the entity. */
    metatag: Array<MetaTagUnion>;
    /** Name */
    name: Scalars['String'];
    /** The parents of this term. */
    parent?: Maybe<TermUnion>;
    /** URL alias */
    path: Scalars['String'];
    /** Published */
    status: Scalars['Boolean'];
  };

/** Entity type taxonomy_term. */
export type TermInterface = {
  /** The time that the term was last edited. */
  changed: DateTime;
  /** Description */
  description: Text;
  /** The Universally Unique IDentifier (UUID). */
  id: Scalars['ID'];
  /** The term language code. */
  langcode: Language;
  /** The computed meta tags for the entity. */
  metatag: Array<MetaTagUnion>;
  /** Name */
  name: Scalars['String'];
  /** The parents of this term. */
  parent?: Maybe<TermUnion>;
  /** URL alias */
  path: Scalars['String'];
  /** Published */
  status: Scalars['Boolean'];
};

/** Entity type taxonomy_term. */
export type TermUnion = TermContactTopics;

/** A processed text format defined by the CMS. */
export type Text = {
  __typename?: 'Text';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']>;
  /** The raw text value. */
  value?: Maybe<Scalars['String']>;
};

/** A processed text format with summary defined by the CMS. */
export type TextSummary = {
  __typename?: 'TextSummary';
  /** The text format used to process the text value. */
  format?: Maybe<Scalars['String']>;
  /** The processed text value. */
  processed?: Maybe<Scalars['Html']>;
  /** The processed text summary. */
  summary?: Maybe<Scalars['Html']>;
  /** The raw text value. */
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
export type ViewResultUnion =
  | ContactTopicsResult
  | NewsLatestResult
  | NewsResult
  | NodePathsResult
  | PeopleResult
  | SpeakersResult
  | TalksAllResult
  | TalksByDateResult
  | TalksResult;
