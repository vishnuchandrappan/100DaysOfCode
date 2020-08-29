import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 60%;
  margin: auto;
  padding: 10px;

  ${(props) =>
    props.fluid &&
    css`
      max-width: 90%;
    `};

  ${(props) =>
    props.primary &&
    css`
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    `};

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export default Container;
