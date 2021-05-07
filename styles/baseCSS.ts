import { css } from '@emotion/react';
import NotoSans from './NotoSans';
import normalize from './normalize';

const baseCSS = css`
  * {
    font-family: 'Goblin One', 'Noto Sans', 'sans-serif';
    box-sizing: border-box;
  }

  ${NotoSans};
  ${normalize};
`;

export default baseCSS;