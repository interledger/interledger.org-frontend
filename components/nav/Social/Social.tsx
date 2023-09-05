import { SocialFragment } from '@models/operations';
import cn from 'classnames';
import styles from './Social.module.scss';
import { TwitterIcon } from '@components/icon/TwitterIcon/TwitterIcon';
import { GitHubIcon } from '@components/icon/GitHubIcon/GitHubIcon';
import { LinkedInIcon } from '@components/icon/LinkedInIcon/LinkedInIcon';
import { SlackIcon } from '@components/icon/SlackIcon/SlackIcon';
import Link from 'next/link';
import { MastadonIcon } from '@components/icon/MastadonIcon/MastadonIcon';

export interface SocialProps {
  /** Optional className for Social, pass in a sass module class to override component default */
  className?: string;
  social: SocialFragment;
}

interface IconProps {
  type: string;
}

const Icon = ({ type }: IconProps) => {
  switch (type) {
    case 'twitter':
      return <TwitterIcon />;
    case 'mastadon':
      return <MastadonIcon />;
    case 'github':
      return <GitHubIcon />;
    case 'linkedin':
      return <LinkedInIcon />;
    case 'slack':
      return <SlackIcon />;
    default:
      return null;
  }
};

/**
 * Social description
 */

export const Social = ({ className, social }: SocialProps) => {
  const rootClassName = cn(styles.root, className);
  return (
    <nav className={rootClassName}>
      <ul role="list">
        {social.socialMediaLinks?.map((l) =>
          l.link.url ? (
            <li key={l.socialMediaType}>
              <Link href={l.link.url} target="_blank" rel="noreferrer">
                <Icon type={l.socialMediaType} />
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};
