import styled, { css } from "styled-components";

export const Heading = styled.h1`
  color: #2f2f2f;
  letter-spacing: 2px;
  font-size: larger;
  text-transform: uppercase;

  ${(props) =>
    props.center &&
    css`
      text-align: center
    `};
`;

export default Heading;
