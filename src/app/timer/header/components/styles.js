import styled from "styled-components";
import ImageTomatoCool from "shared/images/tomato-cool.svg";

export const StyledHeader = styled.h1`
  margin: 0;
  flex-shrink: 0;
  text-align: center;
  font-family: CarterOne;
`;
StyledHeader.displayName = "StyledHeader";

export const StyledInfo = styled.div`
  display: inline-block;
  margin-left: 1rem;
  font-size: 2.5rem;
`;
StyledInfo.displayName = "StyledInfo";

export const StyledTomatoIcon = styled.div`
  display: inline-block;
  background: url(${ImageTomatoCool}) no-repeat center center;
  margin-left: 0.2rem;
  background-size: cover;
  width: 4rem;
  height: 4.2rem;
`;
StyledTomatoIcon.displayName = "StyledTomatoIcon";
