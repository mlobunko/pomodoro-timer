import styled from "styled-components";
import ImageBgTomato from "../images/bg-tomato.svg";

export const StyledButtons = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
  width: 31rem;
  height: 4.1rem;
  display: flex;
  justify-content: center;

  @media (min-width: 360px) {
    width: 35rem;
  }

  @media (min-width: 600px) {
    width: 42rem;
  }
`;
StyledButtons.displayName = "StyledButtons";

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
StyledCenterOfPage.displayName = "StyledCenterOfPage";

export const StyledHeader = styled.h1`
  margin: 0;
  flex-shrink: 0;
  text-align: center;
`;
StyledHeader.displayName = "StyledHeader";

export const StyledListOfSettings = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 5rem 5rem 5rem 5rem;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;
StyledListOfSettings.displayName = "StyledListOfSettings";

export const StyledMainComponent = styled.div`
  background: url(${ImageBgTomato}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  font-size: 1.6rem;
  font-family: CarterOne;
`;
StyledMainComponent.displayName = "StyledMainComponent";
