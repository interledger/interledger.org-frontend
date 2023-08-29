import { Maybe } from '@models/graphql';
import { ResponsiveImageStyleFragment } from '@models/operations';

export interface SourceProps
  extends React.SourceHTMLAttributes<HTMLSourceElement> {
  responsiveImageStyle?: Maybe<ResponsiveImageStyleFragment>;
  sizes?: string;
}

/**
 * Source description
 */

export const Source = ({
  responsiveImageStyle,
  sizes,
  ...rest
}: SourceProps) => {
  if (!responsiveImageStyle) {
    return null;
  }

  return (
    <source
      srcSet={responsiveImageStyle.srcSet ?? undefined}
      sizes={sizes}
      {...rest}
    />
  );
};
