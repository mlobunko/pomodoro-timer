import styled from "styled-components";
import PropTypes from "prop-types";

import ImageTomato from "shared/images/tomato.svg";
import ImageTomatoCool from "shared/images/tomato-cool.svg";

export const StyledTomatoComponent = styled.div`
  background: ${props =>
    props.isWorkingTime
      ? `url(${ImageTomato}) no-repeat center center`
      : `url(${ImageTomatoCool}) no-repeat center center`};
  background-size: contain;
  width: 100%;
  height: 30rem;
  line-height: 38rem;
  font-size: 7.5rem;
  color: white;
  text-align: center;
  font-family: TitanOne;

  @media (min-width: 360px) {
    height: 34rem;
    line-height: 43rem;
  }

  @media (min-width: 600px) {
    height: 38rem;
    line-height: 48rem;
    font-size: 9.5rem;
  }
`;

StyledTomatoComponent.displayName = "StyledTomatoComponent";

StyledTomatoComponent.propTypes = {
  isWorkingTime: PropTypes.bool
};
