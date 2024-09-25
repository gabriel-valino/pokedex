import styled from "styled-components";

export const CurrentPokemonContainer = styled.div`
  position: relative;
  flex: 2.5;
  
  >  div {
    position: fixed;
    right: 0;
    width: 28vw;
    padding: 40px 50px 10px 30px;
    height: 62vh;
    border-radius: 10px 0 0 10px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
      max-width: 200px;
      top: -160px;
      position: absolute;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      overflow-y: scroll;
      scrollbar-width: none;

      @media (max-height: 800px) {
      padding-bottom: 15vh;
    }
    }
   
    > div > p {
      margin-top: 4px;
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme['gray']}
    }

    > div > h1 {
      font-size: 2rem;
      font-weight: bold;
      color: ${(props) => props.theme['dark']};
      margin-bottom: 10px;
    }
 
    > div > h2 {
      margin-top: 16px;
      font-size: 1.35rem;
      font-weight: bold;
      color: ${(props) => props.theme['dark']}
    }

    > div > span {
      margin-top: 10px;
      text-align: center;
      font-weight: 500;
      width: 80%;
    }

    @media (max-width: 1200px) {
      width: 25vw;
    }
  }
`

export const StatusContainer = styled.div`
  color: ${(props) => props.theme['dark']};
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`

export const EvolutionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: ${(props) => props.theme['dark']};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    width: 100%;
    margin-top: 16px;
  }

  > div button img {
    width: 56px;
    height: 56px;
  }

  > div button {
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .evolution-level {
    padding: 2px 8px;
    border-radius: 99999px;
    background-color: ${(props) => props.theme['background']};
  }
`

export const AttributesContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin-top: 16px;

  > div {
    text-align: center;
  }

  > div p {
    margin-top: 10px;
    padding: 2px 8px;
    border-radius: 99999px;
    background-color: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['dark']};
  }

  > div h3 {
    color: ${(props) => props.theme['dark']};
  }
`