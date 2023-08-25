import * as GraphqlTypes from '@models/graphql';

type ParagraphsFragment_ParagraphAnchor_ = {
  __typename: 'ParagraphAnchor';
  id: string;
  title: string;
};

type ParagraphsFragment_ParagraphButton_ = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

type ParagraphsFragment_ParagraphCarouselItem_ = {
  __typename?: 'ParagraphCarouselItem';
};

type ParagraphsFragment_ParagraphColumnCard_ = {
  __typename?: 'ParagraphColumnCard';
};

type ParagraphsFragment_ParagraphContactForm_ = {
  __typename: 'ParagraphContactForm';
  id: string;
  contactTopicsView:
    | {
        __typename: 'ContactTopicsResult';
        results: Array<{
          __typename?: 'TermContactTopics';
          id: string;
          name: string;
        }>;
      }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | { __typename: 'TalksResult' };
  contactTopic?: {
    __typename?: 'TermContactTopics';
    name: string;
    id: string;
  } | null;
};

type ParagraphsFragment_ParagraphContentCarousel_ = {
  __typename: 'ParagraphContentCarousel';
  id: string;
  carouselItem?: Array<{
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
      | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
      | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
  }> | null;
};

type ParagraphsFragment_ParagraphContentColumnCards_ = {
  __typename: 'ParagraphContentColumnCards';
  id: string;
  imageStyle: string;
  content?: Array<{
    __typename: 'ParagraphColumnCard';
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
    text: { __typename?: 'Text'; processed?: any | null };
    link: { __typename?: 'Link'; title?: string | null; url?: string | null };
  }> | null;
};

type ParagraphsFragment_ParagraphContentTitle_ = {
  __typename: 'ParagraphContentTitle';
  id: string;
  title: string;
};

type ParagraphsFragment_ParagraphDivider_ = { __typename?: 'ParagraphDivider' };

type ParagraphsFragment_ParagraphFaq_ = { __typename?: 'ParagraphFaq' };

type ParagraphsFragment_ParagraphFaqs_ = {
  __typename: 'ParagraphFaqs';
  id: string;
  faqs?: Array<{
    __typename?: 'ParagraphFaq';
    id: string;
    question: string;
    answer: { __typename?: 'Text'; processed?: any | null };
  }> | null;
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

type ParagraphsFragment_ParagraphImageFullWidth_ = {
  __typename: 'ParagraphImageFullWidth';
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

type ParagraphsFragment_ParagraphLogoLink_ = {
  __typename?: 'ParagraphLogoLink';
};

type ParagraphsFragment_ParagraphMediaHeader_ = {
  __typename?: 'ParagraphMediaHeader';
};

type ParagraphsFragment_ParagraphNewsListings_ = {
  __typename: 'ParagraphNewsListings';
  id: string;
  newsLatestView:
    | { __typename?: 'ContactTopicsResult' }
    | {
        __typename: 'NewsLatestResult';
        results: Array<
          | {
              __typename: 'NodeArticle';
              id: string;
              title: string;
              path: string;
              summary?: { __typename?: 'Text'; processed?: any | null } | null;
              created: { __typename?: 'DateTime'; time: any };
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
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename?: 'NewsResult' }
    | { __typename?: 'NodePathsResult' }
    | { __typename?: 'PeopleResult' }
    | { __typename?: 'SpeakersResult' }
    | { __typename?: 'TalksAllResult' }
    | { __typename?: 'TalksByDateResult' }
    | { __typename?: 'TalksResult' };
  newsView:
    | { __typename?: 'ContactTopicsResult' }
    | { __typename?: 'NewsLatestResult' }
    | {
        __typename: 'NewsResult';
        pageInfo: {
          __typename?: 'ViewPageInfo';
          offset: number;
          page: number;
          pageSize: number;
          total: number;
        };
        results: Array<
          | {
              __typename: 'NodeArticle';
              id: string;
              title: string;
              path: string;
              summary?: { __typename?: 'Text'; processed?: any | null } | null;
              created: { __typename?: 'DateTime'; time: any };
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
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename?: 'NodePathsResult' }
    | { __typename?: 'PeopleResult' }
    | { __typename?: 'SpeakersResult' }
    | { __typename?: 'TalksAllResult' }
    | { __typename?: 'TalksByDateResult' }
    | { __typename?: 'TalksResult' };
};

type ParagraphsFragment_ParagraphPeopleGrid_ = {
  __typename: 'ParagraphPeopleGrid';
  id: string;
  peopleView:
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | {
        __typename: 'PeopleResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | {
              __typename: 'NodePeople';
              id: string;
              path: string;
              title: string;
              position: string;
              description?: {
                __typename?: 'Text';
                processed?: any | null;
              } | null;
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
      }
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | { __typename: 'TalksResult' };
};

type ParagraphsFragment_ParagraphPrice_ = { __typename?: 'ParagraphPrice' };

type ParagraphsFragment_ParagraphPriceList_ = {
  __typename: 'ParagraphPriceList';
  id: string;
  pricesMain?: Array<{
    __typename: 'ParagraphPrice';
    id: string;
    title: string;
    menuTitle?: string | null;
    pricing: string;
    options?: Array<
      | { __typename: 'ParagraphDivider'; id: string }
      | {
          __typename: 'ParagraphPriceOption';
          id: string;
          title: string;
          subtitle?: string | null;
        }
    > | null;
  }> | null;
  pricesFooter?: {
    __typename: 'ParagraphPrice';
    id: string;
    title: string;
    menuTitle?: string | null;
    pricing: string;
    options?: Array<
      | { __typename: 'ParagraphDivider'; id: string }
      | {
          __typename: 'ParagraphPriceOption';
          id: string;
          title: string;
          subtitle?: string | null;
        }
    > | null;
  } | null;
};

type ParagraphsFragment_ParagraphPriceOption_ = {
  __typename?: 'ParagraphPriceOption';
};

type ParagraphsFragment_ParagraphSchedule_ = {
  __typename: 'ParagraphSchedule';
  id: string;
  title: string;
  days: Array<{
    __typename: 'ParagraphScheduleDay';
    id: string;
    date: { __typename?: 'DateTime'; time: any };
    talksView:
      | { __typename: 'ContactTopicsResult' }
      | { __typename: 'NewsLatestResult' }
      | { __typename: 'NewsResult' }
      | { __typename: 'NodePathsResult' }
      | { __typename: 'PeopleResult' }
      | { __typename: 'SpeakersResult' }
      | { __typename: 'TalksAllResult' }
      | {
          __typename: 'TalksByDateResult';
          results: Array<
            | { __typename?: 'NodeArticle' }
            | { __typename?: 'NodeDeveloperTools' }
            | { __typename?: 'NodeFoundationPage' }
            | { __typename?: 'NodePage' }
            | { __typename?: 'NodePeople' }
            | { __typename?: 'NodeSpeaker' }
            | {
                __typename: 'NodeTalk';
                id: string;
                title: string;
                path: string;
                startsAt?: { __typename?: 'DateTime'; time: any } | null;
                endsAt?: { __typename?: 'DateTime'; time: any } | null;
                speakers?: Array<{
                  __typename?: 'NodeSpeaker';
                  title: string;
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
                }> | null;
              }
          >;
        }
      | { __typename: 'TalksResult' };
  }>;
};

type ParagraphsFragment_ParagraphScheduleDay_ = {
  __typename?: 'ParagraphScheduleDay';
};

type ParagraphsFragment_ParagraphScrollingLogoCarousel_ = {
  __typename: 'ParagraphScrollingLogoCarousel';
  id: string;
  logos: Array<{
    __typename: 'ParagraphLogoLink';
    id: string;
    singleImage: {
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
    link: { __typename?: 'Link'; url?: string | null; title?: string | null };
  }>;
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
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | {
        __typename: 'SpeakersResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | {
              __typename: 'NodeSpeaker';
              id: string;
              title: string;
              path: string;
              tagLine?: string | null;
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
            }
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | { __typename: 'TalksResult' }
    | null;
};

type ParagraphsFragment_ParagraphTalksGrid_ = {
  __typename: 'ParagraphTalksGrid';
  id: string;
  talksView:
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | { __typename: 'SpeakersResult' }
    | {
        __typename: 'TalksAllResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
              id: string;
              title: string;
              path: string;
              startsAt?: { __typename?: 'DateTime'; time: any } | null;
              endsAt?: { __typename?: 'DateTime'; time: any } | null;
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
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
              }> | null;
            }
        >;
      }
    | { __typename: 'TalksByDateResult' }
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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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

type ParagraphsFragment_ParagraphVideoEmbed_ = {
  __typename: 'ParagraphVideoEmbed';
  id: string;
  remoteVideo?: {
    __typename: 'MediaRemoteVideo';
    id: string;
    mediaOembedVideo: string;
  } | null;
};

export type ParagraphsFragment =
  | ParagraphsFragment_ParagraphAnchor_
  | ParagraphsFragment_ParagraphButton_
  | ParagraphsFragment_ParagraphCarouselItem_
  | ParagraphsFragment_ParagraphColumnCard_
  | ParagraphsFragment_ParagraphContactForm_
  | ParagraphsFragment_ParagraphContentCarousel_
  | ParagraphsFragment_ParagraphContentColumnCards_
  | ParagraphsFragment_ParagraphContentTitle_
  | ParagraphsFragment_ParagraphDivider_
  | ParagraphsFragment_ParagraphFaq_
  | ParagraphsFragment_ParagraphFaqs_
  | ParagraphsFragment_ParagraphHeroHeader_
  | ParagraphsFragment_ParagraphHighlightedList_
  | ParagraphsFragment_ParagraphHighlightedSpeakers_
  | ParagraphsFragment_ParagraphImage_
  | ParagraphsFragment_ParagraphImageCarousel_
  | ParagraphsFragment_ParagraphImageFullWidth_
  | ParagraphsFragment_ParagraphImageGallery_
  | ParagraphsFragment_ParagraphLargeCalloutText_
  | ParagraphsFragment_ParagraphLogoLink_
  | ParagraphsFragment_ParagraphMediaHeader_
  | ParagraphsFragment_ParagraphNewsListings_
  | ParagraphsFragment_ParagraphPeopleGrid_
  | ParagraphsFragment_ParagraphPrice_
  | ParagraphsFragment_ParagraphPriceList_
  | ParagraphsFragment_ParagraphPriceOption_
  | ParagraphsFragment_ParagraphSchedule_
  | ParagraphsFragment_ParagraphScheduleDay_
  | ParagraphsFragment_ParagraphScrollingLogoCarousel_
  | ParagraphsFragment_ParagraphSocialMedia_
  | ParagraphsFragment_ParagraphSocialMediaLink_
  | ParagraphsFragment_ParagraphSpacer_
  | ParagraphsFragment_ParagraphSpeakersGrid_
  | ParagraphsFragment_ParagraphTalksGrid_
  | ParagraphsFragment_ParagraphTeaser_
  | ParagraphsFragment_ParagraphText_
  | ParagraphsFragment_ParagraphTwoColumnContent_
  | ParagraphsFragment_ParagraphVideo_
  | ParagraphsFragment_ParagraphVideoEmbed_;

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

export type DeveloperToolsMenuFragment = {
  __typename: 'Menu';
  id: string;
  name: string;
  items: Array<{
    __typename: 'MenuItem';
    title: string;
    id: string;
    url?: string | null;
    children: Array<{
      __typename: 'MenuItem';
      title: string;
      id: string;
      url?: string | null;
    }>;
  }>;
};

export type FooterMenuFragment = {
  __typename: 'Menu';
  name: string;
  items: Array<{
    __typename: 'MenuItem';
    title: string;
    id: string;
    url?: string | null;
  }>;
};

export type MainMenuFragment = {
  __typename: 'Menu';
  id: string;
  items: Array<{
    __typename: 'MenuItem';
    title: string;
    id: string;
    url?: string | null;
    children: Array<{
      __typename: 'MenuItem';
      title: string;
      id: string;
      url?: string | null;
    }>;
  }>;
};

export type MenuItemFragment = {
  __typename: 'MenuItem';
  title: string;
  id: string;
  url?: string | null;
};

export type SocialFragment = {
  __typename: 'ParagraphSocialMedia';
  id: string;
  socialMediaLinks?: Array<{
    __typename?: 'ParagraphSocialMediaLink';
    socialMediaType: string;
    link: { __typename?: 'Link'; url?: string | null };
  }> | null;
};

export type NodeArticleFragment = {
  __typename: 'NodeArticle';
  id: string;
  title: string;
  path: string;
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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
    | {
        __typename: 'ParagraphImageFullWidth';
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
          | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
          | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
  > | null;
  created: { __typename?: 'DateTime'; time: any };
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
  summary?: { __typename?: 'Text'; processed?: any | null } | null;
  created: { __typename?: 'DateTime'; time: any };
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

export type NodeDeveloperToolsFragment = {
  __typename: 'NodeDeveloperTools';
  id: string;
  title: string;
  path: string;
  sections?: Array<
    | { __typename: 'ParagraphAnchor'; id: string; title: string }
    | {
        __typename: 'ParagraphButton';
        id: string;
        link: {
          __typename?: 'Link';
          url?: string | null;
          title?: string | null;
        };
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
    | {
        __typename: 'ParagraphImageFullWidth';
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
    | {
        __typename: 'ParagraphContactForm';
        id: string;
        contactTopicsView:
          | {
              __typename: 'ContactTopicsResult';
              results: Array<{
                __typename?: 'TermContactTopics';
                id: string;
                name: string;
              }>;
            }
          | { __typename: 'NewsLatestResult' }
          | { __typename: 'NewsResult' }
          | { __typename: 'NodePathsResult' }
          | { __typename: 'PeopleResult' }
          | { __typename: 'SpeakersResult' }
          | { __typename: 'TalksAllResult' }
          | { __typename: 'TalksByDateResult' }
          | { __typename: 'TalksResult' };
        contactTopic?: {
          __typename?: 'TermContactTopics';
          name: string;
          id: string;
        } | null;
      }
    | {
        __typename: 'ParagraphContentCarousel';
        id: string;
        carouselItem?: Array<{
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
            | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
            | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
        }> | null;
      }
    | {
        __typename: 'ParagraphContentColumnCards';
        id: string;
        imageStyle: string;
        content?: Array<{
          __typename: 'ParagraphColumnCard';
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
          text: { __typename?: 'Text'; processed?: any | null };
          link: {
            __typename?: 'Link';
            title?: string | null;
            url?: string | null;
          };
        }> | null;
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
    | {
        __typename: 'ParagraphFaqs';
        id: string;
        faqs?: Array<{
          __typename?: 'ParagraphFaq';
          id: string;
          question: string;
          answer: { __typename?: 'Text'; processed?: any | null };
        }> | null;
      }
    | {
        __typename: 'ParagraphHighlightedList';
        id: string;
        listItem?: Array<string> | null;
      }
    | {
        __typename: 'ParagraphImageCarousel';
        id: string;
        carouselItem?: Array<{
          __typename?: 'ParagraphCarouselItem';
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
        }> | null;
      }
    | {
        __typename: 'ParagraphImageFullWidth';
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
        __typename: 'ParagraphNewsListings';
        id: string;
        newsLatestView:
          | { __typename?: 'ContactTopicsResult' }
          | {
              __typename: 'NewsLatestResult';
              results: Array<
                | {
                    __typename: 'NodeArticle';
                    id: string;
                    title: string;
                    path: string;
                    summary?: {
                      __typename?: 'Text';
                      processed?: any | null;
                    } | null;
                    created: { __typename?: 'DateTime'; time: any };
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
                | { __typename?: 'NodeDeveloperTools' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | { __typename?: 'NodePeople' }
                | { __typename?: 'NodeSpeaker' }
                | { __typename?: 'NodeTalk' }
              >;
            }
          | { __typename?: 'NewsResult' }
          | { __typename?: 'NodePathsResult' }
          | { __typename?: 'PeopleResult' }
          | { __typename?: 'SpeakersResult' }
          | { __typename?: 'TalksAllResult' }
          | { __typename?: 'TalksByDateResult' }
          | { __typename?: 'TalksResult' };
        newsView:
          | { __typename?: 'ContactTopicsResult' }
          | { __typename?: 'NewsLatestResult' }
          | {
              __typename: 'NewsResult';
              pageInfo: {
                __typename?: 'ViewPageInfo';
                offset: number;
                page: number;
                pageSize: number;
                total: number;
              };
              results: Array<
                | {
                    __typename: 'NodeArticle';
                    id: string;
                    title: string;
                    path: string;
                    summary?: {
                      __typename?: 'Text';
                      processed?: any | null;
                    } | null;
                    created: { __typename?: 'DateTime'; time: any };
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
                | { __typename?: 'NodeDeveloperTools' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | { __typename?: 'NodePeople' }
                | { __typename?: 'NodeSpeaker' }
                | { __typename?: 'NodeTalk' }
              >;
            }
          | { __typename?: 'NodePathsResult' }
          | { __typename?: 'PeopleResult' }
          | { __typename?: 'SpeakersResult' }
          | { __typename?: 'TalksAllResult' }
          | { __typename?: 'TalksByDateResult' }
          | { __typename?: 'TalksResult' };
      }
    | {
        __typename: 'ParagraphPeopleGrid';
        id: string;
        peopleView:
          | { __typename: 'ContactTopicsResult' }
          | { __typename: 'NewsLatestResult' }
          | { __typename: 'NewsResult' }
          | { __typename: 'NodePathsResult' }
          | {
              __typename: 'PeopleResult';
              id: string;
              results: Array<
                | { __typename?: 'NodeArticle' }
                | { __typename?: 'NodeDeveloperTools' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | {
                    __typename: 'NodePeople';
                    id: string;
                    path: string;
                    title: string;
                    position: string;
                    description?: {
                      __typename?: 'Text';
                      processed?: any | null;
                    } | null;
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
            }
          | { __typename: 'SpeakersResult' }
          | { __typename: 'TalksAllResult' }
          | { __typename: 'TalksByDateResult' }
          | { __typename: 'TalksResult' };
      }
    | {
        __typename: 'ParagraphPriceList';
        id: string;
        pricesMain?: Array<{
          __typename: 'ParagraphPrice';
          id: string;
          title: string;
          menuTitle?: string | null;
          pricing: string;
          options?: Array<
            | { __typename: 'ParagraphDivider'; id: string }
            | {
                __typename: 'ParagraphPriceOption';
                id: string;
                title: string;
                subtitle?: string | null;
              }
          > | null;
        }> | null;
        pricesFooter?: {
          __typename: 'ParagraphPrice';
          id: string;
          title: string;
          menuTitle?: string | null;
          pricing: string;
          options?: Array<
            | { __typename: 'ParagraphDivider'; id: string }
            | {
                __typename: 'ParagraphPriceOption';
                id: string;
                title: string;
                subtitle?: string | null;
              }
          > | null;
        } | null;
      }
    | {
        __typename: 'ParagraphScrollingLogoCarousel';
        id: string;
        logos: Array<{
          __typename: 'ParagraphLogoLink';
          id: string;
          singleImage: {
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
          link: {
            __typename?: 'Link';
            url?: string | null;
            title?: string | null;
          };
        }>;
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
          | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
          | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
    | {
        __typename: 'ParagraphVideoEmbed';
        id: string;
        remoteVideo?: {
          __typename: 'MediaRemoteVideo';
          id: string;
          mediaOembedVideo: string;
        } | null;
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
    title: string;
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
    | {
        __typename: 'ParagraphContentCarousel';
        id: string;
        carouselItem?: Array<{
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
            | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
            | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
        }> | null;
      }
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
    | {
        __typename: 'ParagraphFaqs';
        id: string;
        faqs?: Array<{
          __typename?: 'ParagraphFaq';
          id: string;
          question: string;
          answer: { __typename?: 'Text'; processed?: any | null };
        }> | null;
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
        }> | null;
      }
    | {
        __typename: 'ParagraphImageCarousel';
        id: string;
        carouselItem?: Array<{
          __typename?: 'ParagraphCarouselItem';
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
        }> | null;
      }
    | {
        __typename: 'ParagraphImageFullWidth';
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
        __typename: 'ParagraphPriceList';
        id: string;
        pricesMain?: Array<{
          __typename: 'ParagraphPrice';
          id: string;
          title: string;
          menuTitle?: string | null;
          pricing: string;
          options?: Array<
            | { __typename: 'ParagraphDivider'; id: string }
            | {
                __typename: 'ParagraphPriceOption';
                id: string;
                title: string;
                subtitle?: string | null;
              }
          > | null;
        }> | null;
        pricesFooter?: {
          __typename: 'ParagraphPrice';
          id: string;
          title: string;
          menuTitle?: string | null;
          pricing: string;
          options?: Array<
            | { __typename: 'ParagraphDivider'; id: string }
            | {
                __typename: 'ParagraphPriceOption';
                id: string;
                title: string;
                subtitle?: string | null;
              }
          > | null;
        } | null;
      }
    | {
        __typename: 'ParagraphSchedule';
        id: string;
        title: string;
        days: Array<{
          __typename: 'ParagraphScheduleDay';
          id: string;
          date: { __typename?: 'DateTime'; time: any };
          talksView:
            | { __typename: 'ContactTopicsResult' }
            | { __typename: 'NewsLatestResult' }
            | { __typename: 'NewsResult' }
            | { __typename: 'NodePathsResult' }
            | { __typename: 'PeopleResult' }
            | { __typename: 'SpeakersResult' }
            | { __typename: 'TalksAllResult' }
            | {
                __typename: 'TalksByDateResult';
                results: Array<
                  | { __typename?: 'NodeArticle' }
                  | { __typename?: 'NodeDeveloperTools' }
                  | { __typename?: 'NodeFoundationPage' }
                  | { __typename?: 'NodePage' }
                  | { __typename?: 'NodePeople' }
                  | { __typename?: 'NodeSpeaker' }
                  | {
                      __typename: 'NodeTalk';
                      id: string;
                      title: string;
                      path: string;
                      startsAt?: { __typename?: 'DateTime'; time: any } | null;
                      endsAt?: { __typename?: 'DateTime'; time: any } | null;
                      speakers?: Array<{
                        __typename?: 'NodeSpeaker';
                        title: string;
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
                      }> | null;
                    }
                >;
              }
            | { __typename: 'TalksResult' };
        }>;
      }
    | {
        __typename: 'ParagraphScrollingLogoCarousel';
        id: string;
        logos: Array<{
          __typename: 'ParagraphLogoLink';
          id: string;
          singleImage: {
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
          link: {
            __typename?: 'Link';
            url?: string | null;
            title?: string | null;
          };
        }>;
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
          | { __typename: 'ContactTopicsResult' }
          | { __typename: 'NewsLatestResult' }
          | { __typename: 'NewsResult' }
          | { __typename: 'NodePathsResult' }
          | { __typename: 'PeopleResult' }
          | {
              __typename: 'SpeakersResult';
              id: string;
              results: Array<
                | { __typename?: 'NodeArticle' }
                | { __typename?: 'NodeDeveloperTools' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | { __typename?: 'NodePeople' }
                | {
                    __typename: 'NodeSpeaker';
                    id: string;
                    title: string;
                    path: string;
                    tagLine?: string | null;
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
                  }
                | { __typename?: 'NodeTalk' }
              >;
            }
          | { __typename: 'TalksAllResult' }
          | { __typename: 'TalksByDateResult' }
          | { __typename: 'TalksResult' }
          | null;
      }
    | {
        __typename: 'ParagraphTalksGrid';
        id: string;
        talksView:
          | { __typename: 'ContactTopicsResult' }
          | { __typename: 'NewsLatestResult' }
          | { __typename: 'NewsResult' }
          | { __typename: 'NodePathsResult' }
          | { __typename: 'PeopleResult' }
          | { __typename: 'SpeakersResult' }
          | {
              __typename: 'TalksAllResult';
              id: string;
              results: Array<
                | { __typename?: 'NodeArticle' }
                | { __typename?: 'NodeDeveloperTools' }
                | { __typename?: 'NodeFoundationPage' }
                | { __typename?: 'NodePage' }
                | { __typename?: 'NodePeople' }
                | { __typename?: 'NodeSpeaker' }
                | {
                    __typename: 'NodeTalk';
                    id: string;
                    title: string;
                    path: string;
                    startsAt?: { __typename?: 'DateTime'; time: any } | null;
                    endsAt?: { __typename?: 'DateTime'; time: any } | null;
                    speakers?: Array<{
                      __typename?: 'NodeSpeaker';
                      title: string;
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
                    }> | null;
                  }
              >;
            }
          | { __typename: 'TalksByDateResult' }
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
          | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
          | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
    | {
        __typename: 'ParagraphVideoEmbed';
        id: string;
        remoteVideo?: {
          __typename: 'MediaRemoteVideo';
          id: string;
          mediaOembedVideo: string;
        } | null;
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
    title: string;
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

export type NodePeopleFragment = {
  __typename: 'NodePeople';
  id: string;
  path: string;
  title: string;
  description?: { __typename?: 'Text'; processed?: any | null } | null;
};

export type NodePeopleCardFragment = {
  __typename: 'NodePeople';
  id: string;
  path: string;
  title: string;
  position: string;
  description?: { __typename?: 'Text'; processed?: any | null } | null;
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
  tagLine?: string | null;
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
  talks:
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | {
        __typename: 'TalksResult';
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
              id: string;
              title: string;
              path: string;
              startsAt?: { __typename?: 'DateTime'; time: any } | null;
              endsAt?: { __typename?: 'DateTime'; time: any } | null;
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
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
  tagLine?: string | null;
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
};

export type NodeTalkFragment = {
  __typename: 'NodeTalk';
  id: string;
  title: string;
  path: string;
  startsAt?: { __typename?: 'DateTime'; time: any } | null;
  endsAt?: { __typename?: 'DateTime'; time: any } | null;
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
  description?: { __typename?: 'Text'; processed?: any | null } | null;
  speakers?: Array<{
    __typename: 'NodeSpeaker';
    id: string;
    title: string;
    path: string;
    tagLine?: string | null;
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
  }> | null;
  liveVideo?: {
    __typename: 'MediaRemoteVideo';
    id: string;
    mediaOembedVideo: string;
  } | null;
  recordingVideo?: {
    __typename: 'MediaRemoteVideo';
    id: string;
    mediaOembedVideo: string;
  } | null;
};

export type NodeTalkCardFragment = {
  __typename: 'NodeTalk';
  id: string;
  title: string;
  path: string;
  startsAt?: { __typename?: 'DateTime'; time: any } | null;
  endsAt?: { __typename?: 'DateTime'; time: any } | null;
  speakers?: Array<{
    __typename?: 'NodeSpeaker';
    title: string;
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
  }> | null;
};

export type ParagraphAnchorFragment = {
  __typename: 'ParagraphAnchor';
  id: string;
  title: string;
};

export type ParagraphButtonFragment = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

export type ParagraphContactFormFragment = {
  __typename: 'ParagraphContactForm';
  id: string;
  contactTopicsView:
    | {
        __typename: 'ContactTopicsResult';
        results: Array<{
          __typename?: 'TermContactTopics';
          id: string;
          name: string;
        }>;
      }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | { __typename: 'TalksResult' };
  contactTopic?: {
    __typename?: 'TermContactTopics';
    name: string;
    id: string;
  } | null;
};

type ContentCarouselItemFragment_ParagraphAnchor_ = {
  __typename?: 'ParagraphAnchor';
};

type ContentCarouselItemFragment_ParagraphButton_ = {
  __typename?: 'ParagraphButton';
};

type ContentCarouselItemFragment_ParagraphCarouselItem_ = {
  __typename?: 'ParagraphCarouselItem';
};

type ContentCarouselItemFragment_ParagraphColumnCard_ = {
  __typename?: 'ParagraphColumnCard';
};

type ContentCarouselItemFragment_ParagraphContactForm_ = {
  __typename?: 'ParagraphContactForm';
};

type ContentCarouselItemFragment_ParagraphContentCarousel_ = {
  __typename?: 'ParagraphContentCarousel';
};

type ContentCarouselItemFragment_ParagraphContentColumnCards_ = {
  __typename?: 'ParagraphContentColumnCards';
};

type ContentCarouselItemFragment_ParagraphContentTitle_ = {
  __typename?: 'ParagraphContentTitle';
};

type ContentCarouselItemFragment_ParagraphDivider_ = {
  __typename?: 'ParagraphDivider';
};

type ContentCarouselItemFragment_ParagraphFaq_ = {
  __typename?: 'ParagraphFaq';
};

type ContentCarouselItemFragment_ParagraphFaqs_ = {
  __typename?: 'ParagraphFaqs';
};

type ContentCarouselItemFragment_ParagraphHeroHeader_ = {
  __typename?: 'ParagraphHeroHeader';
};

type ContentCarouselItemFragment_ParagraphHighlightedList_ = {
  __typename?: 'ParagraphHighlightedList';
};

type ContentCarouselItemFragment_ParagraphHighlightedSpeakers_ = {
  __typename?: 'ParagraphHighlightedSpeakers';
};

type ContentCarouselItemFragment_ParagraphImage_ = {
  __typename?: 'ParagraphImage';
};

type ContentCarouselItemFragment_ParagraphImageCarousel_ = {
  __typename?: 'ParagraphImageCarousel';
};

type ContentCarouselItemFragment_ParagraphImageFullWidth_ = {
  __typename?: 'ParagraphImageFullWidth';
};

type ContentCarouselItemFragment_ParagraphImageGallery_ = {
  __typename?: 'ParagraphImageGallery';
};

type ContentCarouselItemFragment_ParagraphLargeCalloutText_ = {
  __typename?: 'ParagraphLargeCalloutText';
};

type ContentCarouselItemFragment_ParagraphLogoLink_ = {
  __typename?: 'ParagraphLogoLink';
};

type ContentCarouselItemFragment_ParagraphMediaHeader_ = {
  __typename?: 'ParagraphMediaHeader';
};

type ContentCarouselItemFragment_ParagraphNewsListings_ = {
  __typename?: 'ParagraphNewsListings';
};

type ContentCarouselItemFragment_ParagraphPeopleGrid_ = {
  __typename?: 'ParagraphPeopleGrid';
};

type ContentCarouselItemFragment_ParagraphPrice_ = {
  __typename?: 'ParagraphPrice';
};

type ContentCarouselItemFragment_ParagraphPriceList_ = {
  __typename?: 'ParagraphPriceList';
};

type ContentCarouselItemFragment_ParagraphPriceOption_ = {
  __typename?: 'ParagraphPriceOption';
};

type ContentCarouselItemFragment_ParagraphSchedule_ = {
  __typename?: 'ParagraphSchedule';
};

type ContentCarouselItemFragment_ParagraphScheduleDay_ = {
  __typename?: 'ParagraphScheduleDay';
};

type ContentCarouselItemFragment_ParagraphScrollingLogoCarousel_ = {
  __typename?: 'ParagraphScrollingLogoCarousel';
};

type ContentCarouselItemFragment_ParagraphSocialMedia_ = {
  __typename?: 'ParagraphSocialMedia';
};

type ContentCarouselItemFragment_ParagraphSocialMediaLink_ = {
  __typename?: 'ParagraphSocialMediaLink';
};

type ContentCarouselItemFragment_ParagraphSpacer_ = {
  __typename?: 'ParagraphSpacer';
};

type ContentCarouselItemFragment_ParagraphSpeakersGrid_ = {
  __typename?: 'ParagraphSpeakersGrid';
};

type ContentCarouselItemFragment_ParagraphTalksGrid_ = {
  __typename?: 'ParagraphTalksGrid';
};

type ContentCarouselItemFragment_ParagraphTeaser_ = {
  __typename?: 'ParagraphTeaser';
};

type ContentCarouselItemFragment_ParagraphText_ = {
  __typename?: 'ParagraphText';
};

type ContentCarouselItemFragment_ParagraphTwoColumnContent_ = {
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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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

type ContentCarouselItemFragment_ParagraphVideo_ = {
  __typename?: 'ParagraphVideo';
};

type ContentCarouselItemFragment_ParagraphVideoEmbed_ = {
  __typename?: 'ParagraphVideoEmbed';
};

export type ContentCarouselItemFragment =
  | ContentCarouselItemFragment_ParagraphAnchor_
  | ContentCarouselItemFragment_ParagraphButton_
  | ContentCarouselItemFragment_ParagraphCarouselItem_
  | ContentCarouselItemFragment_ParagraphColumnCard_
  | ContentCarouselItemFragment_ParagraphContactForm_
  | ContentCarouselItemFragment_ParagraphContentCarousel_
  | ContentCarouselItemFragment_ParagraphContentColumnCards_
  | ContentCarouselItemFragment_ParagraphContentTitle_
  | ContentCarouselItemFragment_ParagraphDivider_
  | ContentCarouselItemFragment_ParagraphFaq_
  | ContentCarouselItemFragment_ParagraphFaqs_
  | ContentCarouselItemFragment_ParagraphHeroHeader_
  | ContentCarouselItemFragment_ParagraphHighlightedList_
  | ContentCarouselItemFragment_ParagraphHighlightedSpeakers_
  | ContentCarouselItemFragment_ParagraphImage_
  | ContentCarouselItemFragment_ParagraphImageCarousel_
  | ContentCarouselItemFragment_ParagraphImageFullWidth_
  | ContentCarouselItemFragment_ParagraphImageGallery_
  | ContentCarouselItemFragment_ParagraphLargeCalloutText_
  | ContentCarouselItemFragment_ParagraphLogoLink_
  | ContentCarouselItemFragment_ParagraphMediaHeader_
  | ContentCarouselItemFragment_ParagraphNewsListings_
  | ContentCarouselItemFragment_ParagraphPeopleGrid_
  | ContentCarouselItemFragment_ParagraphPrice_
  | ContentCarouselItemFragment_ParagraphPriceList_
  | ContentCarouselItemFragment_ParagraphPriceOption_
  | ContentCarouselItemFragment_ParagraphSchedule_
  | ContentCarouselItemFragment_ParagraphScheduleDay_
  | ContentCarouselItemFragment_ParagraphScrollingLogoCarousel_
  | ContentCarouselItemFragment_ParagraphSocialMedia_
  | ContentCarouselItemFragment_ParagraphSocialMediaLink_
  | ContentCarouselItemFragment_ParagraphSpacer_
  | ContentCarouselItemFragment_ParagraphSpeakersGrid_
  | ContentCarouselItemFragment_ParagraphTalksGrid_
  | ContentCarouselItemFragment_ParagraphTeaser_
  | ContentCarouselItemFragment_ParagraphText_
  | ContentCarouselItemFragment_ParagraphTwoColumnContent_
  | ContentCarouselItemFragment_ParagraphVideo_
  | ContentCarouselItemFragment_ParagraphVideoEmbed_;

export type ParagraphContentCarouselFragment = {
  __typename: 'ParagraphContentCarousel';
  id: string;
  carouselItem?: Array<{
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
      | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
      | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
  }> | null;
};

export type ParagraphColumnCardFragment = {
  __typename: 'ParagraphColumnCard';
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
  text: { __typename?: 'Text'; processed?: any | null };
  link: { __typename?: 'Link'; title?: string | null; url?: string | null };
};

export type ParagraphContentColumnCardsFragment = {
  __typename: 'ParagraphContentColumnCards';
  id: string;
  imageStyle: string;
  content?: Array<{
    __typename: 'ParagraphColumnCard';
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
    text: { __typename?: 'Text'; processed?: any | null };
    link: { __typename?: 'Link'; title?: string | null; url?: string | null };
  }> | null;
};

export type ParagraphContentTitleFragment = {
  __typename: 'ParagraphContentTitle';
  id: string;
  title: string;
};

export type ParagraphDividerFragment = {
  __typename: 'ParagraphDivider';
  id: string;
};

export type ParagraphFaqsFragment = {
  __typename: 'ParagraphFaqs';
  id: string;
  faqs?: Array<{
    __typename?: 'ParagraphFaq';
    id: string;
    question: string;
    answer: { __typename?: 'Text'; processed?: any | null };
  }> | null;
};

export type ParagraphHeroHeaderFragment = {
  __typename: 'ParagraphHeroHeader';
  id: string;
  title: string;
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

export type ParagraphImageFullWidthFragment = {
  __typename: 'ParagraphImageFullWidth';
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

export type ParagraphNewsListingsFragment = {
  __typename: 'ParagraphNewsListings';
  id: string;
  newsLatestView:
    | { __typename?: 'ContactTopicsResult' }
    | {
        __typename: 'NewsLatestResult';
        results: Array<
          | {
              __typename: 'NodeArticle';
              id: string;
              title: string;
              path: string;
              summary?: { __typename?: 'Text'; processed?: any | null } | null;
              created: { __typename?: 'DateTime'; time: any };
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
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename?: 'NewsResult' }
    | { __typename?: 'NodePathsResult' }
    | { __typename?: 'PeopleResult' }
    | { __typename?: 'SpeakersResult' }
    | { __typename?: 'TalksAllResult' }
    | { __typename?: 'TalksByDateResult' }
    | { __typename?: 'TalksResult' };
  newsView:
    | { __typename?: 'ContactTopicsResult' }
    | { __typename?: 'NewsLatestResult' }
    | {
        __typename: 'NewsResult';
        pageInfo: {
          __typename?: 'ViewPageInfo';
          offset: number;
          page: number;
          pageSize: number;
          total: number;
        };
        results: Array<
          | {
              __typename: 'NodeArticle';
              id: string;
              title: string;
              path: string;
              summary?: { __typename?: 'Text'; processed?: any | null } | null;
              created: { __typename?: 'DateTime'; time: any };
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
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename?: 'NodePathsResult' }
    | { __typename?: 'PeopleResult' }
    | { __typename?: 'SpeakersResult' }
    | { __typename?: 'TalksAllResult' }
    | { __typename?: 'TalksByDateResult' }
    | { __typename?: 'TalksResult' };
};

export type GetParagraphNewsListingVariables = GraphqlTypes.Exact<{
  id: GraphqlTypes.Scalars['ID'];
  newsListingPage?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Int']>;
}>;

export type GetParagraphNewsListing = {
  __typename?: 'Query';
  paragraphNewsListings?: {
    __typename: 'ParagraphNewsListings';
    id: string;
    newsLatestView:
      | { __typename?: 'ContactTopicsResult' }
      | {
          __typename: 'NewsLatestResult';
          results: Array<
            | {
                __typename: 'NodeArticle';
                id: string;
                title: string;
                path: string;
                summary?: {
                  __typename?: 'Text';
                  processed?: any | null;
                } | null;
                created: { __typename?: 'DateTime'; time: any };
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
            | { __typename?: 'NodeDeveloperTools' }
            | { __typename?: 'NodeFoundationPage' }
            | { __typename?: 'NodePage' }
            | { __typename?: 'NodePeople' }
            | { __typename?: 'NodeSpeaker' }
            | { __typename?: 'NodeTalk' }
          >;
        }
      | { __typename?: 'NewsResult' }
      | { __typename?: 'NodePathsResult' }
      | { __typename?: 'PeopleResult' }
      | { __typename?: 'SpeakersResult' }
      | { __typename?: 'TalksAllResult' }
      | { __typename?: 'TalksByDateResult' }
      | { __typename?: 'TalksResult' };
    newsView:
      | { __typename?: 'ContactTopicsResult' }
      | { __typename?: 'NewsLatestResult' }
      | {
          __typename: 'NewsResult';
          pageInfo: {
            __typename?: 'ViewPageInfo';
            offset: number;
            page: number;
            pageSize: number;
            total: number;
          };
          results: Array<
            | {
                __typename: 'NodeArticle';
                id: string;
                title: string;
                path: string;
                summary?: {
                  __typename?: 'Text';
                  processed?: any | null;
                } | null;
                created: { __typename?: 'DateTime'; time: any };
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
            | { __typename?: 'NodeDeveloperTools' }
            | { __typename?: 'NodeFoundationPage' }
            | { __typename?: 'NodePage' }
            | { __typename?: 'NodePeople' }
            | { __typename?: 'NodeSpeaker' }
            | { __typename?: 'NodeTalk' }
          >;
        }
      | { __typename?: 'NodePathsResult' }
      | { __typename?: 'PeopleResult' }
      | { __typename?: 'SpeakersResult' }
      | { __typename?: 'TalksAllResult' }
      | { __typename?: 'TalksByDateResult' }
      | { __typename?: 'TalksResult' };
  } | null;
};

export type ParagraphPeopleGridFragment = {
  __typename: 'ParagraphPeopleGrid';
  id: string;
  peopleView:
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | {
        __typename: 'PeopleResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | {
              __typename: 'NodePeople';
              id: string;
              path: string;
              title: string;
              position: string;
              description?: {
                __typename?: 'Text';
                processed?: any | null;
              } | null;
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
      }
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | { __typename: 'TalksResult' };
};

export type ParagraphPriceOptionFragment = {
  __typename: 'ParagraphPriceOption';
  id: string;
  title: string;
  subtitle?: string | null;
};

export type ParagraphPriceFragment = {
  __typename: 'ParagraphPrice';
  id: string;
  title: string;
  menuTitle?: string | null;
  pricing: string;
  options?: Array<
    | { __typename: 'ParagraphDivider'; id: string }
    | {
        __typename: 'ParagraphPriceOption';
        id: string;
        title: string;
        subtitle?: string | null;
      }
  > | null;
};

export type ParagraphPriceListFragment = {
  __typename: 'ParagraphPriceList';
  id: string;
  pricesMain?: Array<{
    __typename: 'ParagraphPrice';
    id: string;
    title: string;
    menuTitle?: string | null;
    pricing: string;
    options?: Array<
      | { __typename: 'ParagraphDivider'; id: string }
      | {
          __typename: 'ParagraphPriceOption';
          id: string;
          title: string;
          subtitle?: string | null;
        }
    > | null;
  }> | null;
  pricesFooter?: {
    __typename: 'ParagraphPrice';
    id: string;
    title: string;
    menuTitle?: string | null;
    pricing: string;
    options?: Array<
      | { __typename: 'ParagraphDivider'; id: string }
      | {
          __typename: 'ParagraphPriceOption';
          id: string;
          title: string;
          subtitle?: string | null;
        }
    > | null;
  } | null;
};

export type ParagraphScheduleFragment = {
  __typename: 'ParagraphSchedule';
  id: string;
  title: string;
  days: Array<{
    __typename: 'ParagraphScheduleDay';
    id: string;
    date: { __typename?: 'DateTime'; time: any };
    talksView:
      | { __typename: 'ContactTopicsResult' }
      | { __typename: 'NewsLatestResult' }
      | { __typename: 'NewsResult' }
      | { __typename: 'NodePathsResult' }
      | { __typename: 'PeopleResult' }
      | { __typename: 'SpeakersResult' }
      | { __typename: 'TalksAllResult' }
      | {
          __typename: 'TalksByDateResult';
          results: Array<
            | { __typename?: 'NodeArticle' }
            | { __typename?: 'NodeDeveloperTools' }
            | { __typename?: 'NodeFoundationPage' }
            | { __typename?: 'NodePage' }
            | { __typename?: 'NodePeople' }
            | { __typename?: 'NodeSpeaker' }
            | {
                __typename: 'NodeTalk';
                id: string;
                title: string;
                path: string;
                startsAt?: { __typename?: 'DateTime'; time: any } | null;
                endsAt?: { __typename?: 'DateTime'; time: any } | null;
                speakers?: Array<{
                  __typename?: 'NodeSpeaker';
                  title: string;
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
                }> | null;
              }
          >;
        }
      | { __typename: 'TalksResult' };
  }>;
};

export type ParagraphScheduleDayFragment = {
  __typename: 'ParagraphScheduleDay';
  id: string;
  date: { __typename?: 'DateTime'; time: any };
  talksView:
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | { __typename: 'SpeakersResult' }
    | { __typename: 'TalksAllResult' }
    | {
        __typename: 'TalksByDateResult';
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
              id: string;
              title: string;
              path: string;
              startsAt?: { __typename?: 'DateTime'; time: any } | null;
              endsAt?: { __typename?: 'DateTime'; time: any } | null;
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
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
              }> | null;
            }
        >;
      }
    | { __typename: 'TalksResult' };
};

export type ParagraphLogoLinkFragment = {
  __typename: 'ParagraphLogoLink';
  id: string;
  singleImage: {
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
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

export type ParagraphScrollingLogoCarouselFragment = {
  __typename: 'ParagraphScrollingLogoCarousel';
  id: string;
  logos: Array<{
    __typename: 'ParagraphLogoLink';
    id: string;
    singleImage: {
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
    link: { __typename?: 'Link'; url?: string | null; title?: string | null };
  }>;
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
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | {
        __typename: 'SpeakersResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | {
              __typename: 'NodeSpeaker';
              id: string;
              title: string;
              path: string;
              tagLine?: string | null;
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
            }
          | { __typename?: 'NodeTalk' }
        >;
      }
    | { __typename: 'TalksAllResult' }
    | { __typename: 'TalksByDateResult' }
    | { __typename: 'TalksResult' }
    | null;
};

export type ParagraphTalksGridFragment = {
  __typename: 'ParagraphTalksGrid';
  id: string;
  talksView:
    | { __typename: 'ContactTopicsResult' }
    | { __typename: 'NewsLatestResult' }
    | { __typename: 'NewsResult' }
    | { __typename: 'NodePathsResult' }
    | { __typename: 'PeopleResult' }
    | { __typename: 'SpeakersResult' }
    | {
        __typename: 'TalksAllResult';
        id: string;
        results: Array<
          | { __typename?: 'NodeArticle' }
          | { __typename?: 'NodeDeveloperTools' }
          | { __typename?: 'NodeFoundationPage' }
          | { __typename?: 'NodePage' }
          | { __typename?: 'NodePeople' }
          | { __typename?: 'NodeSpeaker' }
          | {
              __typename: 'NodeTalk';
              id: string;
              title: string;
              path: string;
              startsAt?: { __typename?: 'DateTime'; time: any } | null;
              endsAt?: { __typename?: 'DateTime'; time: any } | null;
              speakers?: Array<{
                __typename?: 'NodeSpeaker';
                title: string;
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
              }> | null;
            }
        >;
      }
    | { __typename: 'TalksByDateResult' }
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

type TwoColumnContentFragment_ParagraphAnchor_ = {
  __typename?: 'ParagraphAnchor';
};

type TwoColumnContentFragment_ParagraphButton_ = {
  __typename: 'ParagraphButton';
  id: string;
  link: { __typename?: 'Link'; url?: string | null; title?: string | null };
};

type TwoColumnContentFragment_ParagraphCarouselItem_ = {
  __typename?: 'ParagraphCarouselItem';
};

type TwoColumnContentFragment_ParagraphColumnCard_ = {
  __typename?: 'ParagraphColumnCard';
};

type TwoColumnContentFragment_ParagraphContactForm_ = {
  __typename?: 'ParagraphContactForm';
};

type TwoColumnContentFragment_ParagraphContentCarousel_ = {
  __typename?: 'ParagraphContentCarousel';
};

type TwoColumnContentFragment_ParagraphContentColumnCards_ = {
  __typename?: 'ParagraphContentColumnCards';
};

type TwoColumnContentFragment_ParagraphContentTitle_ = {
  __typename: 'ParagraphContentTitle';
  id: string;
  title: string;
};

type TwoColumnContentFragment_ParagraphDivider_ = {
  __typename?: 'ParagraphDivider';
};

type TwoColumnContentFragment_ParagraphFaq_ = { __typename?: 'ParagraphFaq' };

type TwoColumnContentFragment_ParagraphFaqs_ = { __typename?: 'ParagraphFaqs' };

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

type TwoColumnContentFragment_ParagraphImageCarousel_ = {
  __typename?: 'ParagraphImageCarousel';
};

type TwoColumnContentFragment_ParagraphImageFullWidth_ = {
  __typename?: 'ParagraphImageFullWidth';
};

type TwoColumnContentFragment_ParagraphImageGallery_ = {
  __typename?: 'ParagraphImageGallery';
};

type TwoColumnContentFragment_ParagraphLargeCalloutText_ = {
  __typename?: 'ParagraphLargeCalloutText';
};

type TwoColumnContentFragment_ParagraphLogoLink_ = {
  __typename?: 'ParagraphLogoLink';
};

type TwoColumnContentFragment_ParagraphMediaHeader_ = {
  __typename?: 'ParagraphMediaHeader';
};

type TwoColumnContentFragment_ParagraphNewsListings_ = {
  __typename?: 'ParagraphNewsListings';
};

type TwoColumnContentFragment_ParagraphPeopleGrid_ = {
  __typename?: 'ParagraphPeopleGrid';
};

type TwoColumnContentFragment_ParagraphPrice_ = {
  __typename?: 'ParagraphPrice';
};

type TwoColumnContentFragment_ParagraphPriceList_ = {
  __typename?: 'ParagraphPriceList';
};

type TwoColumnContentFragment_ParagraphPriceOption_ = {
  __typename?: 'ParagraphPriceOption';
};

type TwoColumnContentFragment_ParagraphSchedule_ = {
  __typename?: 'ParagraphSchedule';
};

type TwoColumnContentFragment_ParagraphScheduleDay_ = {
  __typename?: 'ParagraphScheduleDay';
};

type TwoColumnContentFragment_ParagraphScrollingLogoCarousel_ = {
  __typename?: 'ParagraphScrollingLogoCarousel';
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

type TwoColumnContentFragment_ParagraphVideoEmbed_ = {
  __typename?: 'ParagraphVideoEmbed';
};

export type TwoColumnContentFragment =
  | TwoColumnContentFragment_ParagraphAnchor_
  | TwoColumnContentFragment_ParagraphButton_
  | TwoColumnContentFragment_ParagraphCarouselItem_
  | TwoColumnContentFragment_ParagraphColumnCard_
  | TwoColumnContentFragment_ParagraphContactForm_
  | TwoColumnContentFragment_ParagraphContentCarousel_
  | TwoColumnContentFragment_ParagraphContentColumnCards_
  | TwoColumnContentFragment_ParagraphContentTitle_
  | TwoColumnContentFragment_ParagraphDivider_
  | TwoColumnContentFragment_ParagraphFaq_
  | TwoColumnContentFragment_ParagraphFaqs_
  | TwoColumnContentFragment_ParagraphHeroHeader_
  | TwoColumnContentFragment_ParagraphHighlightedList_
  | TwoColumnContentFragment_ParagraphHighlightedSpeakers_
  | TwoColumnContentFragment_ParagraphImage_
  | TwoColumnContentFragment_ParagraphImageCarousel_
  | TwoColumnContentFragment_ParagraphImageFullWidth_
  | TwoColumnContentFragment_ParagraphImageGallery_
  | TwoColumnContentFragment_ParagraphLargeCalloutText_
  | TwoColumnContentFragment_ParagraphLogoLink_
  | TwoColumnContentFragment_ParagraphMediaHeader_
  | TwoColumnContentFragment_ParagraphNewsListings_
  | TwoColumnContentFragment_ParagraphPeopleGrid_
  | TwoColumnContentFragment_ParagraphPrice_
  | TwoColumnContentFragment_ParagraphPriceList_
  | TwoColumnContentFragment_ParagraphPriceOption_
  | TwoColumnContentFragment_ParagraphSchedule_
  | TwoColumnContentFragment_ParagraphScheduleDay_
  | TwoColumnContentFragment_ParagraphScrollingLogoCarousel_
  | TwoColumnContentFragment_ParagraphSocialMedia_
  | TwoColumnContentFragment_ParagraphSocialMediaLink_
  | TwoColumnContentFragment_ParagraphSpacer_
  | TwoColumnContentFragment_ParagraphSpeakersGrid_
  | TwoColumnContentFragment_ParagraphTalksGrid_
  | TwoColumnContentFragment_ParagraphTeaser_
  | TwoColumnContentFragment_ParagraphText_
  | TwoColumnContentFragment_ParagraphTwoColumnContent_
  | TwoColumnContentFragment_ParagraphVideo_
  | TwoColumnContentFragment_ParagraphVideoEmbed_;

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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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
    | { __typename: 'ParagraphContentTitle'; id: string; title: string }
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

export type ParagraphVideoEmbedFragment = {
  __typename: 'ParagraphVideoEmbed';
  id: string;
  remoteVideo?: {
    __typename: 'MediaRemoteVideo';
    id: string;
    mediaOembedVideo: string;
  } | null;
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

export type RouteUnionFragment =
  | RouteUnionFragment_RouteExternal_
  | RouteUnionFragment_RouteInternal_;

export type GetInitDataQueryVariables = GraphqlTypes.Exact<{
  [key: string]: never;
}>;

export type GetInitDataQuery = {
  __typename?: 'Query';
  mainMenu?: {
    __typename: 'Menu';
    id: string;
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      id: string;
      url?: string | null;
      children: Array<{
        __typename: 'MenuItem';
        title: string;
        id: string;
        url?: string | null;
      }>;
    }>;
  } | null;
  summitMenu?: {
    __typename: 'Menu';
    id: string;
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      id: string;
      url?: string | null;
      children: Array<{
        __typename: 'MenuItem';
        title: string;
        id: string;
        url?: string | null;
      }>;
    }>;
  } | null;
  footerMenu?: {
    __typename: 'Menu';
    name: string;
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      id: string;
      url?: string | null;
    }>;
  } | null;
  developerToolsMenu?: {
    __typename: 'Menu';
    id: string;
    name: string;
    items: Array<{
      __typename: 'MenuItem';
      title: string;
      id: string;
      url?: string | null;
      children: Array<{
        __typename: 'MenuItem';
        title: string;
        id: string;
        url?: string | null;
      }>;
    }>;
  } | null;
  siteSettings?: {
    __typename?: 'SiteSettings';
    social?: {
      __typename: 'ParagraphSocialMedia';
      id: string;
      socialMediaLinks?: Array<{
        __typename?: 'ParagraphSocialMediaLink';
        socialMediaType: string;
        link: { __typename?: 'Link'; url?: string | null };
      }> | null;
    } | null;
  } | null;
};

export type GetNodeByPathQueryVariables = GraphqlTypes.Exact<{
  slug: GraphqlTypes.Scalars['String'];
  newsListingPage?: GraphqlTypes.InputMaybe<GraphqlTypes.Scalars['Int']>;
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
                    title: string;
                  }
                | {
                    __typename: 'ParagraphImageFullWidth';
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
                          title: string;
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
                          title: string;
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
              > | null;
              created: { __typename?: 'DateTime'; time: any };
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
              __typename: 'NodeDeveloperTools';
              id: string;
              title: string;
              path: string;
              sections?: Array<
                | { __typename: 'ParagraphAnchor'; id: string; title: string }
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
                    title: string;
                  }
                | {
                    __typename: 'ParagraphImageFullWidth';
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
                    __typename: 'ParagraphContactForm';
                    id: string;
                    contactTopicsView:
                      | {
                          __typename: 'ContactTopicsResult';
                          results: Array<{
                            __typename?: 'TermContactTopics';
                            id: string;
                            name: string;
                          }>;
                        }
                      | { __typename: 'NewsLatestResult' }
                      | { __typename: 'NewsResult' }
                      | { __typename: 'NodePathsResult' }
                      | { __typename: 'PeopleResult' }
                      | { __typename: 'SpeakersResult' }
                      | { __typename: 'TalksAllResult' }
                      | { __typename: 'TalksByDateResult' }
                      | { __typename: 'TalksResult' };
                    contactTopic?: {
                      __typename?: 'TermContactTopics';
                      name: string;
                      id: string;
                    } | null;
                  }
                | {
                    __typename: 'ParagraphContentCarousel';
                    id: string;
                    carouselItem?: Array<{
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
                            title: string;
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
                            __typename: 'ParagraphSpacer';
                            id: string;
                            spacerSize: string;
                            spacerLine?: boolean | null;
                          }
                        | {
                            __typename: 'ParagraphText';
                            id: string;
                            text: {
                              __typename?: 'Text';
                              processed?: any | null;
                            };
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
                            title: string;
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
                            __typename: 'ParagraphSpacer';
                            id: string;
                            spacerSize: string;
                            spacerLine?: boolean | null;
                          }
                        | {
                            __typename: 'ParagraphText';
                            id: string;
                            text: {
                              __typename?: 'Text';
                              processed?: any | null;
                            };
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
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphContentColumnCards';
                    id: string;
                    imageStyle: string;
                    content?: Array<{
                      __typename: 'ParagraphColumnCard';
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
                      text: { __typename?: 'Text'; processed?: any | null };
                      link: {
                        __typename?: 'Link';
                        title?: string | null;
                        url?: string | null;
                      };
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphContentTitle';
                    id: string;
                    title: string;
                  }
                | {
                    __typename: 'ParagraphFaqs';
                    id: string;
                    faqs?: Array<{
                      __typename?: 'ParagraphFaq';
                      id: string;
                      question: string;
                      answer: { __typename?: 'Text'; processed?: any | null };
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphHighlightedList';
                    id: string;
                    listItem?: Array<string> | null;
                  }
                | {
                    __typename: 'ParagraphImageCarousel';
                    id: string;
                    carouselItem?: Array<{
                      __typename?: 'ParagraphCarouselItem';
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
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphImageFullWidth';
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
                    __typename: 'ParagraphNewsListings';
                    id: string;
                    newsLatestView:
                      | { __typename?: 'ContactTopicsResult' }
                      | {
                          __typename: 'NewsLatestResult';
                          results: Array<
                            | {
                                __typename: 'NodeArticle';
                                id: string;
                                title: string;
                                path: string;
                                summary?: {
                                  __typename?: 'Text';
                                  processed?: any | null;
                                } | null;
                                created: { __typename?: 'DateTime'; time: any };
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
                            | { __typename?: 'NodeDeveloperTools' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | { __typename?: 'NodePeople' }
                            | { __typename?: 'NodeSpeaker' }
                            | { __typename?: 'NodeTalk' }
                          >;
                        }
                      | { __typename?: 'NewsResult' }
                      | { __typename?: 'NodePathsResult' }
                      | { __typename?: 'PeopleResult' }
                      | { __typename?: 'SpeakersResult' }
                      | { __typename?: 'TalksAllResult' }
                      | { __typename?: 'TalksByDateResult' }
                      | { __typename?: 'TalksResult' };
                    newsView:
                      | { __typename?: 'ContactTopicsResult' }
                      | { __typename?: 'NewsLatestResult' }
                      | {
                          __typename: 'NewsResult';
                          pageInfo: {
                            __typename?: 'ViewPageInfo';
                            offset: number;
                            page: number;
                            pageSize: number;
                            total: number;
                          };
                          results: Array<
                            | {
                                __typename: 'NodeArticle';
                                id: string;
                                title: string;
                                path: string;
                                summary?: {
                                  __typename?: 'Text';
                                  processed?: any | null;
                                } | null;
                                created: { __typename?: 'DateTime'; time: any };
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
                            | { __typename?: 'NodeDeveloperTools' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | { __typename?: 'NodePeople' }
                            | { __typename?: 'NodeSpeaker' }
                            | { __typename?: 'NodeTalk' }
                          >;
                        }
                      | { __typename?: 'NodePathsResult' }
                      | { __typename?: 'PeopleResult' }
                      | { __typename?: 'SpeakersResult' }
                      | { __typename?: 'TalksAllResult' }
                      | { __typename?: 'TalksByDateResult' }
                      | { __typename?: 'TalksResult' };
                  }
                | {
                    __typename: 'ParagraphPeopleGrid';
                    id: string;
                    peopleView:
                      | { __typename: 'ContactTopicsResult' }
                      | { __typename: 'NewsLatestResult' }
                      | { __typename: 'NewsResult' }
                      | { __typename: 'NodePathsResult' }
                      | {
                          __typename: 'PeopleResult';
                          id: string;
                          results: Array<
                            | { __typename?: 'NodeArticle' }
                            | { __typename?: 'NodeDeveloperTools' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | {
                                __typename: 'NodePeople';
                                id: string;
                                path: string;
                                title: string;
                                position: string;
                                description?: {
                                  __typename?: 'Text';
                                  processed?: any | null;
                                } | null;
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
                        }
                      | { __typename: 'SpeakersResult' }
                      | { __typename: 'TalksAllResult' }
                      | { __typename: 'TalksByDateResult' }
                      | { __typename: 'TalksResult' };
                  }
                | {
                    __typename: 'ParagraphPriceList';
                    id: string;
                    pricesMain?: Array<{
                      __typename: 'ParagraphPrice';
                      id: string;
                      title: string;
                      menuTitle?: string | null;
                      pricing: string;
                      options?: Array<
                        | { __typename: 'ParagraphDivider'; id: string }
                        | {
                            __typename: 'ParagraphPriceOption';
                            id: string;
                            title: string;
                            subtitle?: string | null;
                          }
                      > | null;
                    }> | null;
                    pricesFooter?: {
                      __typename: 'ParagraphPrice';
                      id: string;
                      title: string;
                      menuTitle?: string | null;
                      pricing: string;
                      options?: Array<
                        | { __typename: 'ParagraphDivider'; id: string }
                        | {
                            __typename: 'ParagraphPriceOption';
                            id: string;
                            title: string;
                            subtitle?: string | null;
                          }
                      > | null;
                    } | null;
                  }
                | {
                    __typename: 'ParagraphScrollingLogoCarousel';
                    id: string;
                    logos: Array<{
                      __typename: 'ParagraphLogoLink';
                      id: string;
                      singleImage: {
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
                      link: {
                        __typename?: 'Link';
                        url?: string | null;
                        title?: string | null;
                      };
                    }>;
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
                          title: string;
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
                          title: string;
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
                | {
                    __typename: 'ParagraphVideoEmbed';
                    id: string;
                    remoteVideo?: {
                      __typename: 'MediaRemoteVideo';
                      id: string;
                      mediaOembedVideo: string;
                    } | null;
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
                title: string;
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
                    __typename: 'ParagraphContentCarousel';
                    id: string;
                    carouselItem?: Array<{
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
                            title: string;
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
                            __typename: 'ParagraphSpacer';
                            id: string;
                            spacerSize: string;
                            spacerLine?: boolean | null;
                          }
                        | {
                            __typename: 'ParagraphText';
                            id: string;
                            text: {
                              __typename?: 'Text';
                              processed?: any | null;
                            };
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
                            title: string;
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
                            __typename: 'ParagraphSpacer';
                            id: string;
                            spacerSize: string;
                            spacerLine?: boolean | null;
                          }
                        | {
                            __typename: 'ParagraphText';
                            id: string;
                            text: {
                              __typename?: 'Text';
                              processed?: any | null;
                            };
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
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphContentTitle';
                    id: string;
                    title: string;
                  }
                | {
                    __typename: 'ParagraphFaqs';
                    id: string;
                    faqs?: Array<{
                      __typename?: 'ParagraphFaq';
                      id: string;
                      question: string;
                      answer: { __typename?: 'Text'; processed?: any | null };
                    }> | null;
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
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphImageCarousel';
                    id: string;
                    carouselItem?: Array<{
                      __typename?: 'ParagraphCarouselItem';
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
                    }> | null;
                  }
                | {
                    __typename: 'ParagraphImageFullWidth';
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
                    __typename: 'ParagraphPriceList';
                    id: string;
                    pricesMain?: Array<{
                      __typename: 'ParagraphPrice';
                      id: string;
                      title: string;
                      menuTitle?: string | null;
                      pricing: string;
                      options?: Array<
                        | { __typename: 'ParagraphDivider'; id: string }
                        | {
                            __typename: 'ParagraphPriceOption';
                            id: string;
                            title: string;
                            subtitle?: string | null;
                          }
                      > | null;
                    }> | null;
                    pricesFooter?: {
                      __typename: 'ParagraphPrice';
                      id: string;
                      title: string;
                      menuTitle?: string | null;
                      pricing: string;
                      options?: Array<
                        | { __typename: 'ParagraphDivider'; id: string }
                        | {
                            __typename: 'ParagraphPriceOption';
                            id: string;
                            title: string;
                            subtitle?: string | null;
                          }
                      > | null;
                    } | null;
                  }
                | {
                    __typename: 'ParagraphSchedule';
                    id: string;
                    title: string;
                    days: Array<{
                      __typename: 'ParagraphScheduleDay';
                      id: string;
                      date: { __typename?: 'DateTime'; time: any };
                      talksView:
                        | { __typename: 'ContactTopicsResult' }
                        | { __typename: 'NewsLatestResult' }
                        | { __typename: 'NewsResult' }
                        | { __typename: 'NodePathsResult' }
                        | { __typename: 'PeopleResult' }
                        | { __typename: 'SpeakersResult' }
                        | { __typename: 'TalksAllResult' }
                        | {
                            __typename: 'TalksByDateResult';
                            results: Array<
                              | { __typename?: 'NodeArticle' }
                              | { __typename?: 'NodeDeveloperTools' }
                              | { __typename?: 'NodeFoundationPage' }
                              | { __typename?: 'NodePage' }
                              | { __typename?: 'NodePeople' }
                              | { __typename?: 'NodeSpeaker' }
                              | {
                                  __typename: 'NodeTalk';
                                  id: string;
                                  title: string;
                                  path: string;
                                  startsAt?: {
                                    __typename?: 'DateTime';
                                    time: any;
                                  } | null;
                                  endsAt?: {
                                    __typename?: 'DateTime';
                                    time: any;
                                  } | null;
                                  speakers?: Array<{
                                    __typename?: 'NodeSpeaker';
                                    title: string;
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
                                  }> | null;
                                }
                            >;
                          }
                        | { __typename: 'TalksResult' };
                    }>;
                  }
                | {
                    __typename: 'ParagraphScrollingLogoCarousel';
                    id: string;
                    logos: Array<{
                      __typename: 'ParagraphLogoLink';
                      id: string;
                      singleImage: {
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
                      link: {
                        __typename?: 'Link';
                        url?: string | null;
                        title?: string | null;
                      };
                    }>;
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
                      | { __typename: 'ContactTopicsResult' }
                      | { __typename: 'NewsLatestResult' }
                      | { __typename: 'NewsResult' }
                      | { __typename: 'NodePathsResult' }
                      | { __typename: 'PeopleResult' }
                      | {
                          __typename: 'SpeakersResult';
                          id: string;
                          results: Array<
                            | { __typename?: 'NodeArticle' }
                            | { __typename?: 'NodeDeveloperTools' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | { __typename?: 'NodePeople' }
                            | {
                                __typename: 'NodeSpeaker';
                                id: string;
                                title: string;
                                path: string;
                                tagLine?: string | null;
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
                              }
                            | { __typename?: 'NodeTalk' }
                          >;
                        }
                      | { __typename: 'TalksAllResult' }
                      | { __typename: 'TalksByDateResult' }
                      | { __typename: 'TalksResult' }
                      | null;
                  }
                | {
                    __typename: 'ParagraphTalksGrid';
                    id: string;
                    talksView:
                      | { __typename: 'ContactTopicsResult' }
                      | { __typename: 'NewsLatestResult' }
                      | { __typename: 'NewsResult' }
                      | { __typename: 'NodePathsResult' }
                      | { __typename: 'PeopleResult' }
                      | { __typename: 'SpeakersResult' }
                      | {
                          __typename: 'TalksAllResult';
                          id: string;
                          results: Array<
                            | { __typename?: 'NodeArticle' }
                            | { __typename?: 'NodeDeveloperTools' }
                            | { __typename?: 'NodeFoundationPage' }
                            | { __typename?: 'NodePage' }
                            | { __typename?: 'NodePeople' }
                            | { __typename?: 'NodeSpeaker' }
                            | {
                                __typename: 'NodeTalk';
                                id: string;
                                title: string;
                                path: string;
                                startsAt?: {
                                  __typename?: 'DateTime';
                                  time: any;
                                } | null;
                                endsAt?: {
                                  __typename?: 'DateTime';
                                  time: any;
                                } | null;
                                speakers?: Array<{
                                  __typename?: 'NodeSpeaker';
                                  title: string;
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
                                }> | null;
                              }
                          >;
                        }
                      | { __typename: 'TalksByDateResult' }
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
                          title: string;
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
                          title: string;
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
                | {
                    __typename: 'ParagraphVideoEmbed';
                    id: string;
                    remoteVideo?: {
                      __typename: 'MediaRemoteVideo';
                      id: string;
                      mediaOembedVideo: string;
                    } | null;
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
                title: string;
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
              __typename: 'NodePeople';
              id: string;
              path: string;
              title: string;
              description?: {
                __typename?: 'Text';
                processed?: any | null;
              } | null;
            }
          | {
              __typename: 'NodeSpeaker';
              id: string;
              path: string;
              tagLine?: string | null;
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
              talks:
                | { __typename: 'ContactTopicsResult' }
                | { __typename: 'NewsLatestResult' }
                | { __typename: 'NewsResult' }
                | { __typename: 'NodePathsResult' }
                | { __typename: 'PeopleResult' }
                | { __typename: 'SpeakersResult' }
                | { __typename: 'TalksAllResult' }
                | { __typename: 'TalksByDateResult' }
                | {
                    __typename: 'TalksResult';
                    results: Array<
                      | { __typename?: 'NodeArticle' }
                      | { __typename?: 'NodeDeveloperTools' }
                      | { __typename?: 'NodeFoundationPage' }
                      | { __typename?: 'NodePage' }
                      | { __typename?: 'NodePeople' }
                      | { __typename?: 'NodeSpeaker' }
                      | {
                          __typename: 'NodeTalk';
                          id: string;
                          title: string;
                          path: string;
                          startsAt?: {
                            __typename?: 'DateTime';
                            time: any;
                          } | null;
                          endsAt?: {
                            __typename?: 'DateTime';
                            time: any;
                          } | null;
                          speakers?: Array<{
                            __typename?: 'NodeSpeaker';
                            title: string;
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
              startsAt?: { __typename?: 'DateTime'; time: any } | null;
              endsAt?: { __typename?: 'DateTime'; time: any } | null;
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
              description?: {
                __typename?: 'Text';
                processed?: any | null;
              } | null;
              speakers?: Array<{
                __typename: 'NodeSpeaker';
                id: string;
                title: string;
                path: string;
                tagLine?: string | null;
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
              }> | null;
              liveVideo?: {
                __typename: 'MediaRemoteVideo';
                id: string;
                mediaOembedVideo: string;
              } | null;
              recordingVideo?: {
                __typename: 'MediaRemoteVideo';
                id: string;
                mediaOembedVideo: string;
              } | null;
            }
          | null;
      }
    | null;
};

export type GetNodesPathsQueryVariables = GraphqlTypes.Exact<{
  [key: string]: never;
}>;

export type GetNodesPathsQuery = {
  __typename?: 'Query';
  nodePaths?: {
    __typename?: 'NodePathsResult';
    results: Array<
      | { __typename?: 'NodeArticle'; path: string }
      | { __typename?: 'NodeDeveloperTools'; path: string }
      | { __typename?: 'NodeFoundationPage'; path: string }
      | { __typename?: 'NodePage'; path: string }
      | { __typename?: 'NodePeople'; path: string }
      | { __typename?: 'NodeSpeaker'; path: string }
      | { __typename?: 'NodeTalk'; path: string }
    >;
  } | null;
};
