import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 11rem;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 440px) {
    img {
      width: 80%;
    }
  }
`