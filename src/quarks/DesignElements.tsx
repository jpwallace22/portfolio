import { FC } from 'react';
import styled from 'styled-components';

import dots from 'assets/images/dots.webp';
import { ReactComponent as Circle } from 'assets/svg/circle.svg';

import { colorParser } from 'atoms/colors/colors';

import Image, { CustomImageProps } from 'quarks/Image';
import { BasicProps, basic } from 'quarks/interpolations/basic';
import { allCSSWithPseudos } from 'quarks/styleProps/all';

import useDarkMode from 'contexts/ThemeProvider';

const StyledCircle = styled(Circle).withConfig({
  shouldForwardProp: prop => !Object.keys(allCSSWithPseudos).includes(prop),
})`
  ${basic}
`;

export const SmallCircle: FC<BasicProps> = ({ ...props }) => {
  const [isDark] = useDarkMode();

  return (
    <StyledCircle
      width="583px"
      zIndex={-1}
      {...props}
      fill={isDark ? colorParser('purple-700') : colorParser('gray-100')}
    />
  );
};

export const LargeCircle: FC<BasicProps> = ({ ...props }) => {
  const [isDark] = useDarkMode();

  return (
    <StyledCircle
      width="1200px"
      zIndex={-1}
      {...props}
      fill={isDark ? colorParser('purple-800') : colorParser('gray-50')}
    />
  );
};

export const Dots: FC<Omit<CustomImageProps, 'width' | 'height' | 'alt' | 'src'>> = ({ ...props }) => (
  <Image {...props} src={dots} width={650} height={650} alt="" zIndex={-1} />
);
