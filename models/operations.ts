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

export type MediaImageWidthFragment = {
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
  name: string;
  items: Array<{ __typename: 'MenuItem'; title: string; url?: string | null }>;
};

export type MainMenuFragment = {
  __typename: 'Menu';
  items: Array<{ __typename: 'MenuItem'; title: string; url?: string | null }>;
};

export type MenuItemFragment = {
  __typename: 'MenuItem';
  title: string;
  url?: string | null;
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

export type NodeFoundationPageFragment = {
  __typename: 'NodeFoundationPage';
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
    | { __typename: 'ParagraphContentTitle'; id: string; title?: string | null }
    | {
        __typename: 'ParagraphHighlightedList';
        id: string;
        listItem?: Array<string> | null;
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
        carouselItem?: Array<{
          __typename?: 'ParagraphCarouselItem';
          id: string;
          link?: {
            __typename?: 'Link';
            url?: string | null;
            title?: string | null;
          } | null;
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
        }> | null;
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
          | {
              __typename: 'ParagraphVideo';
              id: string;
              video: {
                __typename: 'MediaVideo';
                id: string;
                mediaVideoFile: { __typename?: 'File'; url: string };
              };
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
          | {
              __typename: 'ParagraphVideo';
              id: string;
              video: {
                __typename: 'MediaVideo';
                id: string;
                mediaVideoFile: { __typename?: 'File'; url: string };
              };
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
            }
        > | null;
      }
    | {
        __typename: 'ParagraphVideo';
        id: string;
        video: {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        };
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
    video?: {
      __typename: 'MediaVideo';
      id: string;
      mediaVideoFile: { __typename?: 'File'; url: string };
    } | null;
  } | null;
};

export type NodeFoundationPageCardFragment = {
  __typename: 'NodeFoundationPage';
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
    | { __typename: 'ParagraphContentTitle'; id: string; title?: string | null }
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
        carouselItem?: Array<{
          __typename?: 'ParagraphCarouselItem';
          id: string;
          link?: {
            __typename?: 'Link';
            url?: string | null;
            title?: string | null;
          } | null;
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
        }> | null;
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
        __typename: 'ParagraphSpeakersGrid';
        id: string;
        speakersView?:
          | {
              __typename: 'SpeakersResult';
              id: string;
              results: Array<
                | { __typename?: 'NodeArticle' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | {
                    __typename: 'NodeSpeaker';
                    id: string;
                    title: string;
                    path: string;
                    company?: string | null;
                    role?: string | null;
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
                | { __typename?: 'NodeTalk' }
              >;
            }
          | { __typename: 'TalksAllResult' }
          | { __typename: 'TalksResult' }
          | null;
      }
    | {
        __typename: 'ParagraphTalksGrid';
        id: string;
        talksView:
          | { __typename: 'SpeakersResult' }
          | {
              __typename: 'TalksAllResult';
              id: string;
              results: Array<
                | { __typename?: 'NodeArticle' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | { __typename?: 'NodeSpeaker' }
                | {
                    __typename: 'NodeTalk';
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
                    speakers?: Array<{
                      __typename?: 'NodeSpeaker';
                      title: string;
                    }> | null;
                  }
              >;
            }
          | { __typename: 'TalksResult' };
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
          | {
              __typename: 'ParagraphVideo';
              id: string;
              video: {
                __typename: 'MediaVideo';
                id: string;
                mediaVideoFile: { __typename?: 'File'; url: string };
              };
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
          | {
              __typename: 'ParagraphVideo';
              id: string;
              video: {
                __typename: 'MediaVideo';
                id: string;
                mediaVideoFile: { __typename?: 'File'; url: string };
              };
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
            }
        > | null;
      }
    | {
        __typename: 'ParagraphVideo';
        id: string;
        video: {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        };
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
    video?: {
      __typename: 'MediaVideo';
      id: string;
      mediaVideoFile: { __typename?: 'File'; url: string };
    } | null;
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

export type NodeSpeakerFragment = {
  __typename: 'NodeSpeaker';
  id: string;
  path: string;
  company?: string | null;
  role?: string | null;
  title: string;
  email?: any | null;
  biography?: { __typename?: 'Text'; processed?: any | null } | null;
  summary?: { __typename?: 'Text'; value?: string | null } | null;
  socialMedia?: {
    __typename?: 'ParagraphSocialMedia';
    socialMediaLinks?: Array<{
      __typename?: 'ParagraphSocialMediaLink';
      socialMediaType: string;
      link: { __typename?: 'Link'; url?: string | null };
    }> | null;
  } | null;
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
  talks:
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | {
        __typename: 'TalksResult';
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
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
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
              }> | null;
            }
        >;
      };
};

export type NodeSpeakerCardFragment = {
  __typename: 'NodeSpeaker';
  id: string;
  title: string;
  path: string;
  company?: string | null;
  role?: string | null;
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

export type NodeTalkFragment = {
  __typename: 'NodeTalk';
  id: string;
  title: string;
  path: string;
  duration: number;
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
  header?: {
    __typename: 'ParagraphTalkHeader';
    id: string;
    headerBefore: {
      __typename: 'ParagraphMediaHeader';
      id: string;
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
      video?: {
        __typename: 'MediaRemoteVideo';
        id: string;
        mediaOembedVideo: string;
      } | null;
    };
    headerDuring: {
      __typename: 'ParagraphMediaHeader';
      id: string;
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
      video?: {
        __typename: 'MediaRemoteVideo';
        id: string;
        mediaOembedVideo: string;
      } | null;
    };
    headerAfter: {
      __typename: 'ParagraphMediaHeader';
      id: string;
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
      video?: {
        __typename: 'MediaRemoteVideo';
        id: string;
        mediaOembedVideo: string;
      } | null;
    };
  } | null;
  description?: { __typename?: 'Text'; processed?: any | null } | null;
  speakers?: Array<{
    __typename: 'NodeSpeaker';
    id: string;
    title: string;
    path: string;
    company?: string | null;
    role?: string | null;
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

export type NodeTalkCardFragment = {
  __typename: 'NodeTalk';
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
  speakers?: Array<{ __typename?: 'NodeSpeaker'; title: string }> | null;
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
  video?: {
    __typename: 'MediaVideo';
    id: string;
    mediaVideoFile: { __typename?: 'File'; url: string };
  } | null;
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
  carouselItem?: Array<{
    __typename?: 'ParagraphCarouselItem';
    id: string;
    link?: {
      __typename?: 'Link';
      url?: string | null;
      title?: string | null;
    } | null;
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
  }> | null;
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

export type ParagraphMediaHeaderFragment = {
  __typename: 'ParagraphMediaHeader';
  id: string;
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
  video?: {
    __typename: 'MediaRemoteVideo';
    id: string;
    mediaOembedVideo: string;
  } | null;
};

export type ParagraphSpacerFragment = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

export type ParagraphSpeakersGridFragment = {
  __typename: 'ParagraphSpeakersGrid';
  id: string;
  speakersView?:
    | {
        __typename: 'SpeakersResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | {
              __typename: 'NodeSpeaker';
              id: string;
              title: string;
              path: string;
              company?: string | null;
              role?: string | null;
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
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksResult' }
    | null;
};

export type ParagraphTalkHeaderFragment = {
  __typename: 'ParagraphTalkHeader';
  id: string;
  headerBefore: {
    __typename: 'ParagraphMediaHeader';
    id: string;
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
    video?: {
      __typename: 'MediaRemoteVideo';
      id: string;
      mediaOembedVideo: string;
    } | null;
  };
  headerDuring: {
    __typename: 'ParagraphMediaHeader';
    id: string;
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
    video?: {
      __typename: 'MediaRemoteVideo';
      id: string;
      mediaOembedVideo: string;
    } | null;
  };
  headerAfter: {
    __typename: 'ParagraphMediaHeader';
    id: string;
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
    video?: {
      __typename: 'MediaRemoteVideo';
      id: string;
      mediaOembedVideo: string;
    } | null;
  };
};

export type ParagraphTalksGridFragment = {
  __typename: 'ParagraphTalksGrid';
  id: string;
  talksView:
    | { __typename: 'SpeakersResult' }
    | {
        __typename: 'TalksAllResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
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
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
              }> | null;
            }
        >;
      }
    | { __typename: 'TalksResult' };
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

type TwoColumnContentFragment_ParagraphCarouselItem_ = {
  __typename?: 'ParagraphCarouselItem';
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

type TwoColumnContentFragment_ParagraphMediaHeader_ = {
  __typename?: 'ParagraphMediaHeader';
};

type TwoColumnContentFragment_ParagraphSocialMedia_ = {
  __typename?: 'ParagraphSocialMedia';
};

type TwoColumnContentFragment_ParagraphSocialMediaLink_ = {
  __typename?: 'ParagraphSocialMediaLink';
};

type TwoColumnContentFragment_ParagraphSpacer_ = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

type TwoColumnContentFragment_ParagraphSpeakersGrid_ = {
  __typename?: 'ParagraphSpeakersGrid';
};

type TwoColumnContentFragment_ParagraphTalkHeader_ = {
  __typename?: 'ParagraphTalkHeader';
};

type TwoColumnContentFragment_ParagraphTalksGrid_ = {
  __typename?: 'ParagraphTalksGrid';
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

type TwoColumnContentFragment_ParagraphVideo_ = {
  __typename: 'ParagraphVideo';
  id: string;
  video: {
    __typename: 'MediaVideo';
    id: string;
    mediaVideoFile: { __typename?: 'File'; url: string };
  };
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
};

export type TwoColumnContentFragment =
  | TwoColumnContentFragment_ParagraphButton_
  | TwoColumnContentFragment_ParagraphCarouselItem_
  | TwoColumnContentFragment_ParagraphContentTitle_
  | TwoColumnContentFragment_ParagraphHeroHeader_
  | TwoColumnContentFragment_ParagraphHighlightedList_
  | TwoColumnContentFragment_ParagraphHighlightedSpeakers_
  | TwoColumnContentFragment_ParagraphImage_
  | TwoColumnContentFragment_ParagraphImageCarousel_
  | TwoColumnContentFragment_ParagraphImageGallery_
  | TwoColumnContentFragment_ParagraphLargeCalloutText_
  | TwoColumnContentFragment_ParagraphMediaHeader_
  | TwoColumnContentFragment_ParagraphSocialMedia_
  | TwoColumnContentFragment_ParagraphSocialMediaLink_
  | TwoColumnContentFragment_ParagraphSpacer_
  | TwoColumnContentFragment_ParagraphSpeakersGrid_
  | TwoColumnContentFragment_ParagraphTalkHeader_
  | TwoColumnContentFragment_ParagraphTalksGrid_
  | TwoColumnContentFragment_ParagraphTeaser_
  | TwoColumnContentFragment_ParagraphText_
  | TwoColumnContentFragment_ParagraphTwoColumnContent_
  | TwoColumnContentFragment_ParagraphVideo_;

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
    | {
        __typename: 'ParagraphVideo';
        id: string;
        video: {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        };
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
    | {
        __typename: 'ParagraphVideo';
        id: string;
        video: {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        };
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
      }
  > | null;
};

export type ParagraphVideoFragment = {
  __typename: 'ParagraphVideo';
  id: string;
  video: {
    __typename: 'MediaVideo';
    id: string;
    mediaVideoFile: { __typename?: 'File'; url: string };
  };
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

type NodeCardFragment_NodeFoundationPage_ = {
  __typename?: 'NodeFoundationPage';
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

type NodeCardFragment_NodeTalk_ = { __typename?: 'NodeTalk' };

export type NodeCardFragment =
  | NodeCardFragment_NodeArticle_
  | NodeCardFragment_NodeFoundationPage_
  | NodeCardFragment_NodePage_
  | NodeCardFragment_NodeSpeaker_
  | NodeCardFragment_NodeTalk_;

type ParagraphsFragment_ParagraphButton_ = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

type ParagraphsFragment_ParagraphCarouselItem_ = {
  __typename?: 'ParagraphCarouselItem';
};

type ParagraphsFragment_ParagraphContentTitle_ = {
  __typename: 'ParagraphContentTitle';
  id: string;
  title?: string | null;
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
  carouselItem?: Array<{
    __typename?: 'ParagraphCarouselItem';
    id: string;
    link?: {
      __typename?: 'Link';
      url?: string | null;
      title?: string | null;
    } | null;
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
  }> | null;
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

type ParagraphsFragment_ParagraphMediaHeader_ = {
  __typename?: 'ParagraphMediaHeader';
};

type ParagraphsFragment_ParagraphSocialMedia_ = {
  __typename?: 'ParagraphSocialMedia';
};

type ParagraphsFragment_ParagraphSocialMediaLink_ = {
  __typename?: 'ParagraphSocialMediaLink';
};

type ParagraphsFragment_ParagraphSpacer_ = {
  __typename: 'ParagraphSpacer';
  id: string;
  spacerSize: string;
  spacerLine?: boolean | null;
};

type ParagraphsFragment_ParagraphSpeakersGrid_ = {
  __typename: 'ParagraphSpeakersGrid';
  id: string;
  speakersView?:
    | {
        __typename: 'SpeakersResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | {
              __typename: 'NodeSpeaker';
              id: string;
              title: string;
              path: string;
              company?: string | null;
              role?: string | null;
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
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksResult' }
    | null;
};

type ParagraphsFragment_ParagraphTalkHeader_ = {
  __typename?: 'ParagraphTalkHeader';
};

type ParagraphsFragment_ParagraphTalksGrid_ = {
  __typename: 'ParagraphTalksGrid';
  id: string;
  talksView:
    | { __typename: 'SpeakersResult' }
    | {
        __typename: 'TalksAllResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
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
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
              }> | null;
            }
        >;
      }
    | { __typename: 'TalksResult' };
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
    | {
        __typename: 'ParagraphVideo';
        id: string;
        video: {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        };
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
    | {
        __typename: 'ParagraphVideo';
        id: string;
        video: {
          __typename: 'MediaVideo';
          id: string;
          mediaVideoFile: { __typename?: 'File'; url: string };
        };
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
      }
  > | null;
};

type ParagraphsFragment_ParagraphVideo_ = {
  __typename: 'ParagraphVideo';
  id: string;
  video: {
    __typename: 'MediaVideo';
    id: string;
    mediaVideoFile: { __typename?: 'File'; url: string };
  };
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
};

export type ParagraphsFragment =
  | ParagraphsFragment_ParagraphButton_
  | ParagraphsFragment_ParagraphCarouselItem_
  | ParagraphsFragment_ParagraphContentTitle_
  | ParagraphsFragment_ParagraphHeroHeader_
  | ParagraphsFragment_ParagraphHighlightedList_
  | ParagraphsFragment_ParagraphHighlightedSpeakers_
  | ParagraphsFragment_ParagraphImage_
  | ParagraphsFragment_ParagraphImageCarousel_
  | ParagraphsFragment_ParagraphImageGallery_
  | ParagraphsFragment_ParagraphLargeCalloutText_
  | ParagraphsFragment_ParagraphMediaHeader_
  | ParagraphsFragment_ParagraphSocialMedia_
  | ParagraphsFragment_ParagraphSocialMediaLink_
  | ParagraphsFragment_ParagraphSpacer_
  | ParagraphsFragment_ParagraphSpeakersGrid_
  | ParagraphsFragment_ParagraphTalkHeader_
  | ParagraphsFragment_ParagraphTalksGrid_
  | ParagraphsFragment_ParagraphTeaser_
  | ParagraphsFragment_ParagraphText_
  | ParagraphsFragment_ParagraphTwoColumnContent_
  | ParagraphsFragment_ParagraphVideo_;

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
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      url?: string | null;
    }>;
  } | null;
  summitMenu?: {
    __typename: 'Menu';
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      url?: string | null;
    }>;
  } | null;
  foundationFooterMenu?: {
    __typename: 'Menu';
    name: string;
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      url?: string | null;
    }>;
  } | null;
  summitFooterMenu?: {
    __typename: 'Menu';
    name: string;
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      url?: string | null;
    }>;
  } | null;
};

export type GetNodeByPathQueryVariables = GraphqlTypes.Exact<{
  slug: GraphqlTypes.Scalars['String'];
}>;

export type GetNodeByPathQuery = {
  __typename?: 'Query';
  route?:
    | { __typename?: 'RouteExternal' }
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
              __typename: 'NodeFoundationPage';
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
                    __typename: 'ParagraphContentTitle';
                    id: string;
                    title?: string | null;
                  }
                | {
                    __typename: 'ParagraphHighlightedList';
                    id: string;
                    listItem?: Array<string> | null;
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
                    carouselItem?: Array<{
                      __typename?: 'ParagraphCarouselItem';
                      id: string;
                      link?: {
                        __typename?: 'Link';
                        url?: string | null;
                        title?: string | null;
                      } | null;
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
                    }> | null;
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
                      | {
                          __typename: 'ParagraphVideo';
                          id: string;
                          video: {
                            __typename: 'MediaVideo';
                            id: string;
                            mediaVideoFile: {
                              __typename?: 'File';
                              url: string;
                            };
                          };
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
                      | {
                          __typename: 'ParagraphVideo';
                          id: string;
                          video: {
                            __typename: 'MediaVideo';
                            id: string;
                            mediaVideoFile: {
                              __typename?: 'File';
                              url: string;
                            };
                          };
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
                        }
                    > | null;
                  }
                | {
                    __typename: 'ParagraphVideo';
                    id: string;
                    video: {
                      __typename: 'MediaVideo';
                      id: string;
                      mediaVideoFile: { __typename?: 'File'; url: string };
                    };
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
                video?: {
                  __typename: 'MediaVideo';
                  id: string;
                  mediaVideoFile: { __typename?: 'File'; url: string };
                } | null;
              } | null;
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
                    __typename: 'ParagraphContentTitle';
                    id: string;
                    title?: string | null;
                  }
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
                    carouselItem?: Array<{
                      __typename?: 'ParagraphCarouselItem';
                      id: string;
                      link?: {
                        __typename?: 'Link';
                        url?: string | null;
                        title?: string | null;
                      } | null;
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
                    }> | null;
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
                    __typename: 'ParagraphSpeakersGrid';
                    id: string;
                    speakersView?:
                      | {
                          __typename: 'SpeakersResult';
                          id: string;
                          results: Array<
                            | { __typename?: 'NodeArticle' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | {
                                __typename: 'NodeSpeaker';
                                id: string;
                                title: string;
                                path: string;
                                company?: string | null;
                                role?: string | null;
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
                            | { __typename?: 'NodeTalk' }
                          >;
                        }
                      | { __typename: 'TalksAllResult' }
                      | { __typename: 'TalksResult' }
                      | null;
                  }
                | {
                    __typename: 'ParagraphTalksGrid';
                    id: string;
                    talksView:
                      | { __typename: 'SpeakersResult' }
                      | {
                          __typename: 'TalksAllResult';
                          id: string;
                          results: Array<
                            | { __typename?: 'NodeArticle' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | { __typename?: 'NodeSpeaker' }
                            | {
                                __typename: 'NodeTalk';
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
                                speakers?: Array<{
                                  __typename?: 'NodeSpeaker';
                                  title: string;
                                }> | null;
                              }
                          >;
                        }
                      | { __typename: 'TalksResult' };
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
                      | {
                          __typename: 'ParagraphVideo';
                          id: string;
                          video: {
                            __typename: 'MediaVideo';
                            id: string;
                            mediaVideoFile: {
                              __typename?: 'File';
                              url: string;
                            };
                          };
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
                      | {
                          __typename: 'ParagraphVideo';
                          id: string;
                          video: {
                            __typename: 'MediaVideo';
                            id: string;
                            mediaVideoFile: {
                              __typename?: 'File';
                              url: string;
                            };
                          };
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
                        }
                    > | null;
                  }
                | {
                    __typename: 'ParagraphVideo';
                    id: string;
                    video: {
                      __typename: 'MediaVideo';
                      id: string;
                      mediaVideoFile: { __typename?: 'File'; url: string };
                    };
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
                video?: {
                  __typename: 'MediaVideo';
                  id: string;
                  mediaVideoFile: { __typename?: 'File'; url: string };
                } | null;
              } | null;
            }
          | {
              __typename: 'NodeSpeaker';
              id: string;
              path: string;
              company?: string | null;
              role?: string | null;
              title: string;
              email?: any | null;
              biography?: {
                __typename?: 'Text';
                processed?: any | null;
              } | null;
              summary?: { __typename?: 'Text'; value?: string | null } | null;
              socialMedia?: {
                __typename?: 'ParagraphSocialMedia';
                socialMediaLinks?: Array<{
                  __typename?: 'ParagraphSocialMediaLink';
                  socialMediaType: string;
                  link: { __typename?: 'Link'; url?: string | null };
                }> | null;
              } | null;
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
              talks:
                | { __typename: 'SpeakersResult' }
                | { __typename: 'TalksAllResult' }
                | {
                    __typename: 'TalksResult';
                    results: Array<
                      | { __typename?: 'NodeArticle' }
                      | { __typename?: 'NodeFoundationPage' }
                      | { __typename?: 'NodePage' }
                      | { __typename?: 'NodeSpeaker' }
                      | {
                          __typename: 'NodeTalk';
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
                          speakers?: Array<{
                            __typename?: 'NodeSpeaker';
                            title: string;
                          }> | null;
                        }
                    >;
                  };
            }
          | {
              __typename: 'NodeTalk';
              id: string;
              title: string;
              path: string;
              duration: number;
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
              header?: {
                __typename: 'ParagraphTalkHeader';
                id: string;
                headerBefore: {
                  __typename: 'ParagraphMediaHeader';
                  id: string;
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
                  video?: {
                    __typename: 'MediaRemoteVideo';
                    id: string;
                    mediaOembedVideo: string;
                  } | null;
                };
                headerDuring: {
                  __typename: 'ParagraphMediaHeader';
                  id: string;
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
                  video?: {
                    __typename: 'MediaRemoteVideo';
                    id: string;
                    mediaOembedVideo: string;
                  } | null;
                };
                headerAfter: {
                  __typename: 'ParagraphMediaHeader';
                  id: string;
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
                  video?: {
                    __typename: 'MediaRemoteVideo';
                    id: string;
                    mediaOembedVideo: string;
                  } | null;
                };
              } | null;
              description?: {
                __typename?: 'Text';
                processed?: any | null;
              } | null;
              speakers?: Array<{
                __typename: 'NodeSpeaker';
                id: string;
                title: string;
                path: string;
                company?: string | null;
                role?: string | null;
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
          | { __typename?: 'SiteSettings' }
          | null;
      }
    | { __typename?: 'RouteRedirect' }
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
      | { __typename?: 'NodeFoundationPage'; path: string }
      | { __typename?: 'NodePage'; path: string }
      | { __typename?: 'NodeSpeaker'; path: string }
      | { __typename?: 'NodeTalk'; path: string }
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
      | { __typename?: 'NodeFoundationPage' }
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
      | { __typename?: 'NodeTalk' }
    >;
    pageInfo: {
      __typename?: 'ConnectionPageInfo';
      endCursor?: any | null;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: any | null;
    };
  };
};
