import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 10px 15px;
  text-transform: uppercase;
  background: lavenderblush;
  color: #2f2f2f;
  border-radius: 4px;
  border: solid 2px;

  ${(props) =>
    props.primary &&
    css`
      background: #2f2f2f;
      color: lavenderblush;
      border-color: #2f2f2f;
    `};
`;

export default Button;
