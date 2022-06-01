import { css } from 'styled-components';

import { gradient } from 'atoms/colors/colors';
import { font } from 'atoms/typography/typography';

type TextStyles = keyof typeof font.text;
type GradientStyles = keyof typeof gradient;

const textCSS = {
  /**
   * Element's `font` shorthand property. Only accepts values set in the `text` typography atom.
   * Ex: `xs`, `sm`, etc.
   */
  textStyle: (value: TextStyles) => css`
    font: ${font.text[value].font()};
  `,
  gradient: (value: GradientStyles) => css`
    background: ${gradient[value]};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
};

export default textCSS;
