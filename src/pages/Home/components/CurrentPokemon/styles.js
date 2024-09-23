import styled from "styled-components";

export const CurrentPokemonContainer = styled.div`
  position: relative;
  flex: 2.5;
  right: 0;
  bottom: 0;
  /* background-color: red; */

  > div {
    width: 28vw;
    position: fixed;
    border-radius: 10px 0 0 10px;
    right: 0;
    background-color: white;
    padding: 62px 50px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;

    > p {
      margin-top: 4px;
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme['gray']}
    }

    > h1 {
      font-size: 2.5;
      font-weight: bold;
      color: ${(props) => props.theme['dark']};
      margin-bottom: 10px;
    }

    img {
      width: 200px;
      position: absolute;
      top: -148px;
    }

    > h2 {
      margin-top: 16px;
      font-size: 1.35rem;
      font-weight: bold;
      color: ${(props) => props.theme['dark']}
    }

    > span {
      margin-top: 10px;
      text-align: center;
      font-weight: 600;
      width: 80%;
    }

    > .atributes {
      display: flex;
      width: 50%;
      justify-content: space-between;
      margin-top: 10px;

      > div {
        text-align: center;
      }
    }

    > .status {
      margin-top: 10px;
    }

    @media (max-width: 1200px) {
      width: 25vw;
    }
  }
`