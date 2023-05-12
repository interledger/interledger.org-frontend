---
to: <%= absPath %>/<%= fullComponentName %>.tsx
---
import cn from 'classnames';
<% if (addGraphqlFragment) { %>import { <%= fullComponentName %>Fragment } from '@models/operations';<% } %>
import styles from './<%= fullComponentName %>.module.scss';

export interface <%= fullComponentName %>Props {
  /** Optional className for <%= fullComponentName %>, pass in a sass module class to override component default */
  className?: string;
  <% if (addGraphqlFragment) { %><%= h.changeCase.camel(category) %>: <%= fullComponentName %>Fragment<% } %>
}

/**
 * <%= fullComponentName %> description
 */

export const <%= fullComponentName %> = ({ className }: <%= fullComponentName %>Props) => {
  const rootClassName = cn(styles.root, className);
  return <div className={rootClassName}></div>;
};
