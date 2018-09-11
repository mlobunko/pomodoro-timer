import styled from "styled-components";
import ImageBgClock from "../images/bg-clock.svg";

export const StyledBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  background: url(${ImageBgClock});
  background-size: cover;
  height: 100vh;
  filter: opacity(15%);
`;

export const StyledCenterOfPage = styled.div`
  height: 65%;
  width: 31rem;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 3.2rem;

  @media (min-width: 360px) {
    width: 35rem;
  }
  @media (min-width: 600px) {
    width: 42rem;
    height: 80%;
  }
`;

export const StyledFront = styled.div`
  z-index: 2;
`;

export const StyledPage = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;
