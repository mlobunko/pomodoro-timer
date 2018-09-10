import styled from "styled-components";

export const StyledButtonsComponent = styled.div`
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
  width: 31rem;
  height: 4.1rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 360px) {
    width: 35rem;
  }

  @media (min-width: 600px) {
    width: 42rem;
  }
`;
StyledButtonsComponent.displayName = "StyledButtonsComponent";
