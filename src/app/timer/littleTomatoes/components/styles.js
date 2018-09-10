import styled, { keyframes } from "styled-components";

import ImageTomato from "shared/images/tomato.svg";

const styleTomato = `
  background: url(${ImageTomato}) no-repeat center;
  width: 70%;
`;

const blinking = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const StyledAnimatedLittleTomato = styled.div`
  ${styleTomato};
  animation: ${blinking} 3s linear infinite;
`;
StyledAnimatedLittleTomato.displayName = "StyledAnimatedLittleTomato";

export const StyledLittleTomato = styled.div`
  ${styleTomato};
`;
StyledLittleTomato.displayName = "StyledLittleTomato";

export const StyledLittleTomatoesComponent = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 7.5rem;
  justify-items: center;
`;
StyledLittleTomatoesComponent.displayName = "StyledLittleTomatoesComponent";
