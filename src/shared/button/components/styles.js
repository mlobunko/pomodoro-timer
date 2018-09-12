import styled from "styled-components";
import PropTypes from "prop-types";

export const StyledButton = styled.button`
  width: ${props => {
    if (props.round) return "4rem";
    if (props.side) return "7.5rem";
    else return "9.5rem";
  }};
  height: ${props => props.round && "4rem"};
  line-height: ${props => props.round && "4rem"};
  padding: ${props => (props.round ? "" : "0.6rem 1.6rem")};

  border: ${props => (props.round ? "1px solid #3d9970" : "2px solid #3d9970")};
  border-radius: ${props => (props.round ? "50%" : "1.2rem")};

  font-size: ${props => (props.round ? "1.6rem" : "2.2rem")};

  text-align: center;
  vertical-align: ${props => props.round && "center"};

  color: white;
  background: #3d9970;

  &:hover,
  &:active {
    color: #3d9970;
    background: white;
  }
`;

StyledButton.displayName = "StyledButton";

StyledButton.propTypes = {
  round: PropTypes.bool,
  side: PropTypes.bool
};
