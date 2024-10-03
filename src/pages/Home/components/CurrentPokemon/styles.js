import styled from "styled-components";

export const CurrentPokemonContainer = styled.div`
  position: relative;
  flex: 2.5;
     
  > div {
    position: fixed;
    right: 0;
    width: 28vw;
    padding: 40px 30px 10px 30px;
    height: 62vh;
    border-radius: 10px 0 0 10px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    display: flex;
    flex-direction: column;
    align-items: center;

    > img.currentPokemon {
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

      @media (max-height: 700px) {
        padding-bottom: 12vh;
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
      color: #746b68;
      font-weight: 500;
      width: 80%;
    }

    @media (max-width: 1200px) {
      width: 25vw;
      height: 62vh;
      
      > div {
        overflow-y: scroll;
        scrollbar-width: none;
        height: 56vh;
      }
    }

    @media (max-width: 1100px) {
      display: unset;
      z-index: 5;
      width: 100%;
      bottom: 0;
      right: 0;
      position: fixed;
      
      padding: 0;
      padding-top: 35px;
      border-radius: 20px 20px 0 0;
      animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

      > img.currentPokemon {
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }
  
  @media (max-width: 1100px) {
    display: ${props => props.$currentPokemonIsSelected ? 'unset' : 'none'}
  }

  @keyframes slide-in-bottom {
    0% {
      -webkit-transform: translateY(1000px);
              transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-right {
    0% {
      -webkit-transform: translateX(1000px);
              transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
  }

  @keyframes slide-out-bottom {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(1000px);
              transform: translateY(1000px);
      opacity: 0;
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

export const WithoutCurrentPokemonLoading = styled.div`
  @media (max-width: 700px) {
    display: none;
    position: relative;
  }

  img {
    max-width: 200px;
    position: relative;
    margin-bottom: 30px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  border: ${(props) => props.theme['border']} 4px solid;
  border-right: none;
  width: 28vw;
  padding: 40px 30px 10px 30px;
  height: 62vh;
  border-radius: 10px 0 0 10px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`