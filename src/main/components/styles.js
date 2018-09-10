import styled, { injectGlobal } from "styled-components";

import fontCarterOne from "../fonts/CarterOne.ttf";
import fontTitanOne from "../fonts/TitanOne.ttf";

injectGlobal`
  html {
    font-size: 62.5%;
  };

  @media(min-height: 1024px) {
    html {
      font-size: 100%;
    }
  }

  @media(min-height: 1366px) {
    html {
      font-size: 130%;
    }
  }
`;

export const StyledGlobal = styled.div`
  @font-face {
    font-family: CarterOne;
    src: url(${fontCarterOne});
  }
  @font-face {
    font-family: TitanOne;
    src: url(${fontTitanOne});
  }
`;
