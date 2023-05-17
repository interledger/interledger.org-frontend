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
    | { __typename?: 'ParagraphContentTitle' }
    | {
        __typename: 'ParagraphHighlightedList';
        id: string;
        listItem?: Array<string> | null;
      }
    | {
        __typename: 'ParagraphHighlightedSpeakers';
        id: string;
        speakers?: Array<{
          __typename?: 'NodeSpeaker';
          id: string;
          title: string;
          teaser: {
            __typename: 'ParagraphTeaser';
            id: string;
            squareImage: {
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
            landscapeImage: {
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
          };
        }> | null;
      }
    | {
        __typename: 'ParagraphImage';
        id: string;
        landscapeImage: {
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
        squareIamge: {
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
      }
    | {
        __typename: 'ParagraphImageCarousel';
        id: string;
        multipleImages: Array<{
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
        }>;
      }
    | {
        __typename: 'ParagraphImageGallery';
        id: string;
        multipleImages: Array<{
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
        }>;
      }
    | {
        __typename: 'ParagraphLargeCalloutText';
        id: string;
        largeCalloutText?: string | null;
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
    | {
        __typename: 'ParagraphTwoColumnContent';
        id: string;
        firstColumn?: Array<
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
              __typename: 'ParagraphContentTitle';
              id: string;
              title?: string | null;
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
        secondColumn?: Array<
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
              __typename: 'ParagraphContentTitle';
              id: string;
              title?: string | null;
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
  teaser: {
    __typename: 'ParagraphTeaser';
    id: string;
    squareImage: {
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
    landscapeImage: {
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
  };
  header?: {
    __typename: 'ParagraphHeroHeader';
    id: string;
    title?: string | null;
    whereText?: string | null;
    whenText?: string | null;
    image: {
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
    video?:
      | { __typename?: 'MediaRemoteVideo' }
      | {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        }
      | null;
  } | null;
};

export type NodePageCardFragment = {
  __typename: 'NodePage';
  id: string;
  title: string;
  path: string;
  teaser: {
    __typename: 'ParagraphTeaser';
    id: string;
    squareImage: {
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
    landscapeImage: {
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
  };
};

export type ParagraphButtonFragment = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

export type ParagraphContentTitleFragment = {
  __typename: 'ParagraphContentTitle';
  id: string;
  title?: string | null;
};

export type ParagraphHeroHeaderFragment = {
  __typename: 'ParagraphHeroHeader';
  id: string;
  title?: string | null;
  whereText?: string | null;
  whenText?: string | null;
  image: {
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
  video?:
    | { __typename?: 'MediaRemoteVideo' }
    | {
        __typename: 'MediaVideo';
        id: string;
        mediaVideoFile: { __typename?: 'File'; url: string };
      }
    | null;
};

export type ParagraphHighlightedListFragment = {
  __typename: 'ParagraphHighlightedList';
  id: string;
  listItem?: Array<string> | null;
};

export type ParagraphHighlightedSpeakersFragment = {
  __typename: 'ParagraphHighlightedSpeakers';
  id: string;
  speakers?: Array<{
    __typename?: 'NodeSpeaker';
    id: string;
    title: string;
    teaser: {
      __typename: 'ParagraphTeaser';
      id: string;
      squareImage: {
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
      landscapeImage: {
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
    };
  }> | null;
};

export type ParagraphImageFragment = {
  __typename: 'ParagraphImage';
  id: string;
  landscapeImage: {
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
  squareIamge: {
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
};

export type ParagraphImageCarouselFragment = {
  __typename: 'ParagraphImageCarousel';
  id: string;
  multipleImages: Array<{
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
  }>;
};

export type ParagraphImageGalleryFragment = {
  __typename: 'ParagraphImageGallery';
  id: string;
  multipleImages: Array<{
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
  }>;
};

export type ParagraphLargeCalloutTextFragment = {
  __typename: 'ParagraphLargeCalloutText';
  id: string;
  largeCalloutText?: string | null;
};

export type ParagraphSpacerFragment = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

export type ParagraphTeaserFragment = {
  __typename: 'ParagraphTeaser';
  id: string;
  squareImage: {
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
  landscapeImage: {
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
};

export type ParagraphTextFragment = {
  __typename: 'ParagraphText';
  id: string;
  text: { __typename?: 'Text'; processed?: any | null };
};

type TwoColumnContentFragment_ParagraphButton_ = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

type TwoColumnContentFragment_ParagraphContentTitle_ = {
  __typename: 'ParagraphContentTitle';
  id: string;
  title?: string | null;
};

type TwoColumnContentFragment_ParagraphHeroHeader_ = {
  __typename?: 'ParagraphHeroHeader';
};

type TwoColumnContentFragment_ParagraphHighlightedList_ = {
  __typename?: 'ParagraphHighlightedList';
};

type TwoColumnContentFragment_ParagraphHighlightedSpeakers_ = {
  __typename?: 'ParagraphHighlightedSpeakers';
};

type TwoColumnContentFragment_ParagraphImage_ = {
  __typename?: 'ParagraphImage';
};

type TwoColumnContentFragment_ParagraphImageCarousel_ = {
  __typename?: 'ParagraphImageCarousel';
};

type TwoColumnContentFragment_ParagraphImageGallery_ = {
  __typename?: 'ParagraphImageGallery';
};

type TwoColumnContentFragment_ParagraphLargeCalloutText_ = {
  __typename?: 'ParagraphLargeCalloutText';
};

type TwoColumnContentFragment_ParagraphSpacer_ = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

type TwoColumnContentFragment_ParagraphTeaser_ = {
  __typename?: 'ParagraphTeaser';
};

type TwoColumnContentFragment_ParagraphText_ = {
  __typename: 'ParagraphText';
  id: string;
  text: { __typename?: 'Text'; processed?: any | null };
};

type TwoColumnContentFragment_ParagraphTwoColumnContent_ = {
  __typename?: 'ParagraphTwoColumnContent';
};

export type TwoColumnContentFragment =
  | TwoColumnContentFragment_ParagraphButton_
  | TwoColumnContentFragment_ParagraphContentTitle_
  | TwoColumnContentFragment_ParagraphHeroHeader_
  | TwoColumnContentFragment_ParagraphHighlightedList_
  | TwoColumnContentFragment_ParagraphHighlightedSpeakers_
  | TwoColumnContentFragment_ParagraphImage_
  | TwoColumnContentFragment_ParagraphImageCarousel_
  | TwoColumnContentFragment_ParagraphImageGallery_
  | TwoColumnContentFragment_ParagraphLargeCalloutText_
  | TwoColumnContentFragment_ParagraphSpacer_
  | TwoColumnContentFragment_ParagraphTeaser_
  | TwoColumnContentFragment_ParagraphText_
  | TwoColumnContentFragment_ParagraphTwoColumnContent_;

export type ParagraphTwoColumnContentFragment = {
  __typename: 'ParagraphTwoColumnContent';
  id: string;
  firstColumn?: Array<
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title?: string | null }
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
  secondColumn?: Array<
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title?: string | null }
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

type NodeCardFragment_NodePage_ = {
  __typename: 'NodePage';
  id: string;
  title: string;
  path: string;
  teaser: {
    __typename: 'ParagraphTeaser';
    id: string;
    squareImage: {
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
    landscapeImage: {
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
  };
};

type NodeCardFragment_NodeSpeaker_ = { __typename?: 'NodeSpeaker' };

type NodeCardFragment_ParagraphButton_ = { __typename?: 'ParagraphButton' };

type NodeCardFragment_ParagraphContentTitle_ = {
  __typename?: 'ParagraphContentTitle';
};

type NodeCardFragment_ParagraphHeroHeader_ = {
  __typename?: 'ParagraphHeroHeader';
};

type NodeCardFragment_ParagraphHighlightedList_ = {
  __typename?: 'ParagraphHighlightedList';
};

type NodeCardFragment_ParagraphHighlightedSpeakers_ = {
  __typename?: 'ParagraphHighlightedSpeakers';
};

type NodeCardFragment_ParagraphImage_ = { __typename?: 'ParagraphImage' };

type NodeCardFragment_ParagraphImageCarousel_ = {
  __typename?: 'ParagraphImageCarousel';
};

type NodeCardFragment_ParagraphImageGallery_ = {
  __typename?: 'ParagraphImageGallery';
};

type NodeCardFragment_ParagraphLargeCalloutText_ = {
  __typename?: 'ParagraphLargeCalloutText';
};

type NodeCardFragment_ParagraphSpacer_ = { __typename?: 'ParagraphSpacer' };

type NodeCardFragment_ParagraphTeaser_ = { __typename?: 'ParagraphTeaser' };

type NodeCardFragment_ParagraphText_ = { __typename?: 'ParagraphText' };

type NodeCardFragment_ParagraphTwoColumnContent_ = {
  __typename?: 'ParagraphTwoColumnContent';
};

export type NodeCardFragment =
  | NodeCardFragment_MediaImage_
  | NodeCardFragment_MediaRemoteVideo_
  | NodeCardFragment_MediaVectorImage_
  | NodeCardFragment_MediaVideo_
  | NodeCardFragment_NodeArticle_
  | NodeCardFragment_NodePage_
  | NodeCardFragment_NodeSpeaker_
  | NodeCardFragment_ParagraphButton_
  | NodeCardFragment_ParagraphContentTitle_
  | NodeCardFragment_ParagraphHeroHeader_
  | NodeCardFragment_ParagraphHighlightedList_
  | NodeCardFragment_ParagraphHighlightedSpeakers_
  | NodeCardFragment_ParagraphImage_
  | NodeCardFragment_ParagraphImageCarousel_
  | NodeCardFragment_ParagraphImageGallery_
  | NodeCardFragment_ParagraphLargeCalloutText_
  | NodeCardFragment_ParagraphSpacer_
  | NodeCardFragment_ParagraphTeaser_
  | NodeCardFragment_ParagraphText_
  | NodeCardFragment_ParagraphTwoColumnContent_;

type ParagraphsFragment_ParagraphButton_ = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

type ParagraphsFragment_ParagraphContentTitle_ = {
  __typename?: 'ParagraphContentTitle';
};

type ParagraphsFragment_ParagraphHeroHeader_ = {
  __typename?: 'ParagraphHeroHeader';
};

type ParagraphsFragment_ParagraphHighlightedList_ = {
  __typename: 'ParagraphHighlightedList';
  id: string;
  listItem?: Array<string> | null;
};

type ParagraphsFragment_ParagraphHighlightedSpeakers_ = {
  __typename: 'ParagraphHighlightedSpeakers';
  id: string;
  speakers?: Array<{
    __typename?: 'NodeSpeaker';
    id: string;
    title: string;
    teaser: {
      __typename: 'ParagraphTeaser';
      id: string;
      squareImage: {
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
      landscapeImage: {
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
    };
  }> | null;
};

type ParagraphsFragment_ParagraphImage_ = {
  __typename: 'ParagraphImage';
  id: string;
  landscapeImage: {
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
  squareIamge: {
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
};

type ParagraphsFragment_ParagraphImageCarousel_ = {
  __typename: 'ParagraphImageCarousel';
  id: string;
  multipleImages: Array<{
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
  }>;
};

type ParagraphsFragment_ParagraphImageGallery_ = {
  __typename: 'ParagraphImageGallery';
  id: string;
  multipleImages: Array<{
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
  }>;
};

type ParagraphsFragment_ParagraphLargeCalloutText_ = {
  __typename: 'ParagraphLargeCalloutText';
  id: string;
  largeCalloutText?: string | null;
};

type ParagraphsFragment_ParagraphSpacer_ = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

type ParagraphsFragment_ParagraphTeaser_ = { __typename?: 'ParagraphTeaser' };

type ParagraphsFragment_ParagraphText_ = {
  __typename: 'ParagraphText';
  id: string;
  text: { __typename?: 'Text'; processed?: any | null };
};

type ParagraphsFragment_ParagraphTwoColumnContent_ = {
  __typename: 'ParagraphTwoColumnContent';
  id: string;
  firstColumn?: Array<
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title?: string | null }
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
  secondColumn?: Array<
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title?: string | null }
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
};

export type ParagraphsFragment =
  | ParagraphsFragment_ParagraphButton_
  | ParagraphsFragment_ParagraphContentTitle_
  | ParagraphsFragment_ParagraphHeroHeader_
  | ParagraphsFragment_ParagraphHighlightedList_
  | ParagraphsFragment_ParagraphHighlightedSpeakers_
  | ParagraphsFragment_ParagraphImage_
  | ParagraphsFragment_ParagraphImageCarousel_
  | ParagraphsFragment_ParagraphImageGallery_
  | ParagraphsFragment_ParagraphLargeCalloutText_
  | ParagraphsFragment_ParagraphSpacer_
  | ParagraphsFragment_ParagraphTeaser_
  | ParagraphsFragment_ParagraphText_
  | ParagraphsFragment_ParagraphTwoColumnContent_;

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
                | { __typename?: 'ParagraphContentTitle' }
                | {
                    __typename: 'ParagraphHighlightedList';
                    id: string;
                    listItem?: Array<string> | null;
                  }
                | {
                    __typename: 'ParagraphHighlightedSpeakers';
                    id: string;
                    speakers?: Array<{
                      __typename?: 'NodeSpeaker';
                      id: string;
                      title: string;
                      teaser: {
                        __typename: 'ParagraphTeaser';
                        id: string;
                        squareImage: {
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
                        landscapeImage: {
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
                      };
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphImage';
                    id: string;
                    landscapeImage: {
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
                    squareIamge: {
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
                  }
                | {
                    __typename: 'ParagraphImageCarousel';
                    id: string;
                    multipleImages: Array<{
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
                    }>;
                  }
                | {
                    __typename: 'ParagraphImageGallery';
                    id: string;
                    multipleImages: Array<{
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
                    }>;
                  }
                | {
                    __typename: 'ParagraphLargeCalloutText';
                    id: string;
                    largeCalloutText?: string | null;
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
                | {
                    __typename: 'ParagraphTwoColumnContent';
                    id: string;
                    firstColumn?: Array<
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
                          __typename: 'ParagraphContentTitle';
                          id: string;
                          title?: string | null;
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
                    secondColumn?: Array<
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
                          __typename: 'ParagraphContentTitle';
                          id: string;
                          title?: string | null;
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
              teaser: {
                __typename: 'ParagraphTeaser';
                id: string;
                squareImage: {
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
                landscapeImage: {
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
              };
              header?: {
                __typename: 'ParagraphHeroHeader';
                id: string;
                title?: string | null;
                whereText?: string | null;
                whenText?: string | null;
                image: {
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
                video?:
                  | { __typename?: 'MediaRemoteVideo' }
                  | {
                      __typename: 'MediaVideo';
                      id: string;
                      mediaVideoFile: { __typename?: 'File'; url: string };
                    }
                  | null;
              } | null;
            }
          | { __typename?: 'NodeSpeaker' }
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
      | { __typename?: 'NodeSpeaker' }
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
      | {
          __typename: 'NodePage';
          id: string;
          title: string;
          path: string;
          teaser: {
            __typename: 'ParagraphTeaser';
            id: string;
            squareImage: {
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
            landscapeImage: {
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
          };
        }
      | { __typename?: 'NodeSpeaker' }
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
