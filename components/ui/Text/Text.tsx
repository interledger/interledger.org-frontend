import cn from 'classnames';

import styles from './Text.module.scss';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
  quote: 'blockquote',
};

type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subheading1'
  | 'subheading2'
  | 'body1'
  | 'body2'
  | 'quote';

export interface TextProps {
  /** Optional className for Text, pass in a sass module class to override component default */
  className?: string;
  variant: Variants;
  as?: Variants;
  color?: 'default' | 'primary' | 'secondary' | 'error';
  children: React.ReactNode;
}

export const Text = ({
  className,
  variant = 'body1',
  as,
  color = 'default',
  children,
  ...props
}: TextProps) => {
  const Component = variantsMapping[variant] as keyof JSX.IntrinsicElements;
  const rootClassName = cn(
    styles.root,
    {
      [styles[as ? as : variant]]: variant,
      [styles[color!]]: color !== 'default',
    },
    className
  );
  return (
    <Component className={rootClassName} {...props}>
      {children}
    </Component>
  );
};
