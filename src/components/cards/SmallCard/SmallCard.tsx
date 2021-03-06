import { FaNpm } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';
import { SiStorybook } from 'react-icons/si';

// Quarks
import Grid from 'quarks/Grid';
import Link from 'quarks/Link';
import Text from 'quarks/Text';
import { BasicProps } from 'quarks/interpolations/basic';

import type { FC } from 'react';

export type SmallCardProps = BasicProps & {
  icon: 'browser' | 'github' | 'npm';
  title: string;
  url?: string;
  disabled?: boolean;
};

const iconMap = {
  github: <FiGithub size={64} />,
  browser: <GoBrowser size={64} />,
  npm: <FaNpm size={64} />,
  storyBook: <SiStorybook size={64} />,
};

const SmallCard: FC<SmallCardProps> = ({ icon, title, url, disabled, ...props }) => (
  <Link href={url || ''}>
    <Grid
      placeItems="center"
      gap="8px"
      width="150px"
      paddingAll={16}
      textColor={disabled ? 'gray-900' : undefined}
      backgroundColor={{ dark: 'purple-800', light: 'gray-50' }}
      hover={!disabled ? { textColor: 'primary-600', boxShadow: 'lg', filter: 'brightness(1.125)' } : undefined}
      borderRadius="8px"
      cursor={!disabled ? 'pointer' : 'default'}
      {...props}
    >
      <>
        {iconMap[icon]}
        <Text as="div" textStyle="xl" fontWeight="semiBold">
          {title}
        </Text>
      </>
    </Grid>
  </Link>
);

export default SmallCard;

SmallCard.defaultProps = {};
