import * as GraphqlTypes from '@models/graphql';

export type ImageStyleFragment = {
  __typename: 'ImageStylePathDerivative';
  height?: number | null;
  path?: string | null;
  width?: number | null;
};

export type ResponsiveImageStyleFragment = {
  __typename: 'ResponsiveImageStyleDerivative';
  height?: number | null;
  path?: string | null;
  srcSetPath?: string | null;
  width?: number | null;
};

export type MediaImageSquareFragment = {
  __typename: 'MediaImage';
  id: string;
  mediaImage: {
    __typename?: 'Image';
    alt?: string | null;
    responsive?: {
      __typename: 'ResponsiveImageStyleDerivative';
      height?: number | null;
      path?: string | null;
      srcSetPath?: string | null;
      width?: number | null;
    } | null;
  };
};

export type MediaImageLandscapeFragment = {
  __typename: 'MediaImage';
  id: string;
  mediaImage: {
    __typename?: 'Image';
    alt?: string | null;
    responsive?: {
      __typename: 'ResponsiveImageStyleDerivative';
      height?: number | null;
      path?: string | null;
      srcSetPath?: string | null;
      width?: number | null;
    } | null;
  };
};

export type MediaImageFragment = {
  __typename: 'MediaImage';
  id: string;
  mediaImage: {
    __typename?: 'Image';
    alt?: string | null;
    style?: {
      __typename: 'ImageStylePathDerivative';
      height?: number | null;
      path?: string | null;
      width?: number | null;
    } | null;
    responsive?: {
      __typename: 'ResponsiveImageStyleDerivative';
      height?: number | null;
      path?: string | null;
      srcSetPath?: string | null;
      width?: number | null;
    } | null;
  };
};

export type MediaRemoteVideoFragment = {
  __typename: 'MediaRemoteVideo';
  id: string;
  mediaOembedVideo: string;
};

export type MediaVideoFragment = {
  __typename: 'MediaVideo';
  id: string;
  mediaVideoFile: { __typename?: 'File'; url: string };
};

export type FooterMenuFragment = {
  __typename: 'Menu';
  items?: Array<{
    __typename: 'MenuItem';
    title?: string | null;
    route:
      | { __typename: 'RouteExternal'; internal: boolean; url: string }
      | { __typename: 'RouteInternal'; url: string; internal: boolean }
      | { __typename?: 'RouteRedirect' };
    children?: Array<{
      __typename: 'MenuItem';
      title?: string | null;
      route:
        | { __typename: 'RouteExternal'; internal: boolean; url: string }
        | { __typename: 'RouteInternal'; url: string; internal: boolean }
        | { __typename?: 'RouteRedirect' };
    }> | null;
  }> | null;
};

export type MainMenuFragment = {
  __typename: 'Menu';
  items?: Array<{
    __typename: 'MenuItem';
    title?: string | null;
    route:
      | { __typename: 'RouteExternal'; internal: boolean; url: string }
      | { __typename: 'RouteInternal'; url: string; internal: boolean }
      | { __typename?: 'RouteRedirect' };
    children?: Array<{
      __typename: 'MenuItem';
      title?: string | null;
      route:
        | { __typename: 'RouteExternal'; internal: boolean; url: string }
        | { __typename: 'RouteInternal'; url: string; internal: boolean }
        | { __typename?: 'RouteRedirect' };
    }> | null;
  }> | null;
};

export type MenuItemFragment = {
  __typename: 'MenuItem';
  title?: string | null;
  route:
    | { __typename: 'RouteExternal'; internal: boolean; url: string }
    | { __typename: 'RouteInternal'; url: string; internal: boolean }
    | { __typename?: 'RouteRedirect' };
  children?: Array<{
    __typename: 'MenuItem';
    title?: string | null;
    route:
      | { __typename: 'RouteExternal'; internal: boolean; url: string }
      | { __typename: 'RouteInternal'; url: string; internal: boolean }
      | { __typename?: 'RouteRedirect' };
  }> | null;
};

export type NodeArticleFragment = {
  __typename: 'NodeArticle';
  id: string;
  title: string;
  path: string;
  sections?: Array<
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | {
        __typename: 'ParagraphSpacer';
        id: string;
        spacerSize: string;
        spacerLine?: boolean | null;
      }
    | {
        __typename: 'ParagraphText';
        id: string;
        text: { __typename?: 'Text'; processed?: any | null };
      }
  > | null;
  metatag: Array<
    | {
        __typename: 'MetaTagLink';
        tag: string;
        attributes: {
          __typename?: 'MetaTagLinkAttributes';
          href?: string | null;
          rel?: string | null;
        };
      }
    | {
        __typename: 'MetaTagProperty';
        tag: string;
        attributes: {
          __typename?: 'MetaTagPropertyAttributes';
          content?: string | null;
          property?: string | null;
        };
      }
    | {
        __typename: 'MetaTagValue';
        tag: string;
        attributes: {
          __typename?: 'MetaTagValueAttributes';
          content?: string | null;
          name?: string | null;
        };
      }
  >;
};

export type NodeArticleCardFragment = {
  __typename: 'NodeArticle';
  id: string;
  title: string;
  path: string;
  image?: {
    __typename: 'MediaImage';
    id: string;
    mediaImage: {
      __typename?: 'Image';
      alt?: string | null;
      responsive?: {
        __typename: 'ResponsiveImageStyleDerivative';
        height?: number | null;
        path?: string | null;
        srcSetPath?: string | null;
        width?: number | null;
      } | null;
    };
  } | null;
};

export type NodePageFragment = {
  __typename: 'NodePage';
  id: string;
  title: string;
  path: string;
  sections?: Array<
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | {
        __typename: 'ParagraphText';
        id: string;
        text: { __typename?: 'Text'; processed?: any | null };
      }
  > | null;
  metatag: Array<
    | {
        __typename: 'MetaTagLink';
        tag: string;
        attributes: {
          __typename?: 'MetaTagLinkAttributes';
          href?: string | null;
          rel?: string | null;
        };
      }
    | {
        __typename: 'MetaTagProperty';
        tag: string;
        attributes: {
          __typename?: 'MetaTagPropertyAttributes';
          content?: string | null;
          property?: string | null;
        };
      }
    | {
        __typename: 'MetaTagValue';
        tag: string;
        attributes: {
          __typename?: 'MetaTagValueAttributes';
          content?: string | null;
          name?: string | null;
        };
      }
  >;
};

export type NodePageCardFragment = {
  __typename: 'NodePage';
  id: string;
  title: string;
  path: string;
};

export type ParagraphButtonFragment = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

export type ParagraphSpacerFragment = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

export type ParagraphTextFragment = {
  __typename: 'ParagraphText';
  id: string;
  text: { __typename?: 'Text'; processed?: any | null };
};

type MetaTagFragment_MetaTagLink_ = {
  __typename: 'MetaTagLink';
  tag: string;
  attributes: {
    __typename?: 'MetaTagLinkAttributes';
    href?: string | null;
    rel?: string | null;
  };
};

type MetaTagFragment_MetaTagProperty_ = {
  __typename: 'MetaTagProperty';
  tag: string;
  attributes: {
    __typename?: 'MetaTagPropertyAttributes';
    content?: string | null;
    property?: string | null;
  };
};

type MetaTagFragment_MetaTagValue_ = {
  __typename: 'MetaTagValue';
  tag: string;
  attributes: {
    __typename?: 'MetaTagValueAttributes';
    content?: string | null;
    name?: string | null;
  };
};

export type MetaTagFragment =
  | MetaTagFragment_MetaTagLink_
  | MetaTagFragment_MetaTagProperty_
  | MetaTagFragment_MetaTagValue_;

export type LinkFragment = {
  __typename?: 'Link';
  url?: string | null;
  title?: string | null;
};

type NodeCardFragment_MediaImage_ = { __typename?: 'MediaImage' };

type NodeCardFragment_MediaRemoteVideo_ = { __typename?: 'MediaRemoteVideo' };

type NodeCardFragment_MediaVectorImage_ = { __typename?: 'MediaVectorImage' };

type NodeCardFragment_MediaVideo_ = { __typename?: 'MediaVideo' };

type NodeCardFragment_NodeArticle_ = {
  __typename: 'NodeArticle';
  id: string;
  title: string;
  path: string;
  image?: {
    __typename: 'MediaImage';
    id: string;
    mediaImage: {
      __typename?: 'Image';
      alt?: string | null;
      responsive?: {
        __typename: 'ResponsiveImageStyleDerivative';
        height?: number | null;
        path?: string | null;
        srcSetPath?: string | null;
        width?: number | null;
      } | null;
    };
  } | null;
};

type NodeCardFragment_NodePage_ = { __typename?: 'NodePage' };

type NodeCardFragment_ParagraphButton_ = { __typename?: 'ParagraphButton' };

type NodeCardFragment_ParagraphSpacer_ = { __typename?: 'ParagraphSpacer' };

type NodeCardFragment_ParagraphText_ = { __typename?: 'ParagraphText' };

export type NodeCardFragment =
  | NodeCardFragment_MediaImage_
  | NodeCardFragment_MediaRemoteVideo_
  | NodeCardFragment_MediaVectorImage_
  | NodeCardFragment_MediaVideo_
  | NodeCardFragment_NodeArticle_
  | NodeCardFragment_NodePage_
  | NodeCardFragment_ParagraphButton_
  | NodeCardFragment_ParagraphSpacer_
  | NodeCardFragment_ParagraphText_;

type ParagraphsFragment_ParagraphButton_ = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

type ParagraphsFragment_ParagraphSpacer_ = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

type ParagraphsFragment_ParagraphText_ = {
  __typename: 'ParagraphText';
  id: string;
  text: { __typename?: 'Text'; processed?: any | null };
};

export type ParagraphsFragment =
  | ParagraphsFragment_ParagraphButton_
  | ParagraphsFragment_ParagraphSpacer_
  | ParagraphsFragment_ParagraphText_;

type RouteUnionFragment_RouteExternal_ = {
  __typename: 'RouteExternal';
  internal: boolean;
  url: string;
};

type RouteUnionFragment_RouteInternal_ = {
  __typename: 'RouteInternal';
  url: string;
  internal: boolean;
};

type RouteUnionFragment_RouteRedirect_ = { __typename?: 'RouteRedirect' };

export type RouteUnionFragment =
  | RouteUnionFragment_RouteExternal_
  | RouteUnionFragment_RouteInternal_
  | RouteUnionFragment_RouteRedirect_;

export type GetInitDataQueryVariables = GraphqlTypes.Exact<{
  [key: string]: never;
}>;

export type GetInitDataQuery = {
  __typename?: 'Query';
  mainMenu?: {
    __typename: 'Menu';
    items?: Array<{
      __typename: 'MenuItem';
      title?: string | null;
      route:
        | { __typename: 'RouteExternal'; internal: boolean; url: string }
        | { __typename: 'RouteInternal'; url: string; internal: boolean }
        | { __typename?: 'RouteRedirect' };
      children?: Array<{
        __typename: 'MenuItem';
        title?: string | null;
        route:
          | { __typename: 'RouteExternal'; internal: boolean; url: string }
          | { __typename: 'RouteInternal'; url: string; internal: boolean }
          | { __typename?: 'RouteRedirect' };
      }> | null;
    }> | null;
  } | null;
  footerMenu?: {
    __typename: 'Menu';
    items?: Array<{
      __typename: 'MenuItem';
      title?: string | null;
      route:
        | { __typename: 'RouteExternal'; internal: boolean; url: string }
        | { __typename: 'RouteInternal'; url: string; internal: boolean }
        | { __typename?: 'RouteRedirect' };
      children?: Array<{
        __typename: 'MenuItem';
        title?: string | null;
        route:
          | { __typename: 'RouteExternal'; internal: boolean; url: string }
          | { __typename: 'RouteInternal'; url: string; internal: boolean }
          | { __typename?: 'RouteRedirect' };
      }> | null;
    }> | null;
  } | null;
};

export type GetNodeByPathQueryVariables = GraphqlTypes.Exact<{
  slug: GraphqlTypes.Scalars['String'];
}>;

export type GetNodeByPathQuery = {
  __typename?: 'Query';
  route?:
    | { __typename: 'RouteExternal'; internal: boolean; url: string }
    | {
        __typename: 'RouteInternal';
        internal: boolean;
        url: string;
        entity?:
          | {
              __typename: 'NodeArticle';
              id: string;
              title: string;
              path: string;
              sections?: Array<
                | {
                    __typename: 'ParagraphButton';
                    id: string;
                    link: {
                      __typename?: 'Link';
                      url?: string | null;
                      title?: string | null;
                    };
                  }
                | {
                    __typename: 'ParagraphSpacer';
                    id: string;
                    spacerSize: string;
                    spacerLine?: boolean | null;
                  }
                | {
                    __typename: 'ParagraphText';
                    id: string;
                    text: { __typename?: 'Text'; processed?: any | null };
                  }
              > | null;
              metatag: Array<
                | {
                    __typename: 'MetaTagLink';
                    tag: string;
                    attributes: {
                      __typename?: 'MetaTagLinkAttributes';
                      href?: string | null;
                      rel?: string | null;
                    };
                  }
                | {
                    __typename: 'MetaTagProperty';
                    tag: string;
                    attributes: {
                      __typename?: 'MetaTagPropertyAttributes';
                      content?: string | null;
                      property?: string | null;
                    };
                  }
                | {
                    __typename: 'MetaTagValue';
                    tag: string;
                    attributes: {
                      __typename?: 'MetaTagValueAttributes';
                      content?: string | null;
                      name?: string | null;
                    };
                  }
              >;
            }
          | {
              __typename: 'NodePage';
              id: string;
              title: string;
              path: string;
              sections?: Array<
                | {
                    __typename: 'ParagraphButton';
                    id: string;
                    link: {
                      __typename?: 'Link';
                      url?: string | null;
                      title?: string | null;
                    };
                  }
                | {
                    __typename: 'ParagraphText';
                    id: string;
                    text: { __typename?: 'Text'; processed?: any | null };
                  }
              > | null;
              metatag: Array<
                | {
                    __typename: 'MetaTagLink';
                    tag: string;
                    attributes: {
                      __typename?: 'MetaTagLinkAttributes';
                      href?: string | null;
                      rel?: string | null;
                    };
                  }
                | {
                    __typename: 'MetaTagProperty';
                    tag: string;
                    attributes: {
                      __typename?: 'MetaTagPropertyAttributes';
                      content?: string | null;
                      property?: string | null;
                    };
                  }
                | {
                    __typename: 'MetaTagValue';
                    tag: string;
                    attributes: {
                      __typename?: 'MetaTagValueAttributes';
                      content?: string | null;
                      name?: string | null;
                    };
                  }
              >;
            }
          | null;
      }
    | {
        __typename: 'RouteRedirect';
        internal: boolean;
        redirect: boolean;
        status: number;
        url: string;
      }
    | null;
};

export type GetNodesPathsQueryVariables = GraphqlTypes.Exact<{
  first?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Int']>;
}>;

export type GetNodesPathsQuery = {
  __typename?: 'Query';
  nodes: {
    __typename?: 'NodesConnection';
    nodes: Array<
      | { __typename?: 'NodeArticle'; path: string }
      | { __typename?: 'NodePage'; path: string }
    >;
  };
};

export type GetNodesQueryVariables = GraphqlTypes.Exact<{
  first?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Int']>;
  after?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Cursor']>;
  before?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Cursor']>;
  last?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Int']>;
  filter?: GraphqlTypes.InputMaybe<GraphqlTypes.ConnectionFilter>;
  sortKey?: GraphqlTypes.InputMaybe<GraphqlTypes.ConnectionSortKeys>;
  reverse?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Boolean']>;
}>;

export type GetNodesQuery = {
  __typename?: 'Query';
  nodes: {
    __typename?: 'NodesConnection';
    nodes: Array<
      | {
          __typename: 'NodeArticle';
          id: string;
          title: string;
          path: string;
          image?: {
            __typename: 'MediaImage';
            id: string;
            mediaImage: {
              __typename?: 'Image';
              alt?: string | null;
              responsive?: {
                __typename: 'ResponsiveImageStyleDerivative';
                height?: number | null;
                path?: string | null;
                srcSetPath?: string | null;
                width?: number | null;
              } | null;
            };
          } | null;
        }
      | { __typename?: 'NodePage' }
    >;
    pageInfo: {
      __typename?: 'ConnectionPageInfo';
      endCursor: any;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: any;
    };
  };
};
