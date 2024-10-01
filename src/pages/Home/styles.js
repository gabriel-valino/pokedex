import styled from 'styled-components'

export const Loading = styled.div`
  height: 100vh;
  width: 100%;
  background-color: red;
  display: flex;
`

export const HomeContainer = styled.div`
  height: 100vh;


  @media (max-width: 1100px) {
    /* overflow: ${props => props.$currentPokemonIsSelected ? 'hidden' : 'auto'}; */
  }
`

export const ButtonToTop = styled.button`
  position: fixed;
  bottom: 80px;
  left: 6vw;
  border: none;

  background-color: white;
  padding: 10px;
  border-radius: 10px;
  border: none; 
  text-align: center;
  display: ${props => props.$show ? 'flex': 'none'};
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  opacity: 1;

  &:hover {
    opacity: 0.4;
  }

  img {
    line-height: 100%;
    width: 36px;
    height: 36px;
  }   

  @media (max-width: 1100px) {
    display: ${props => props.$show ? 'flex': 'none'};
    opacity: ${props => props.$currentPokemonIsSelected ? 0 : 1};
  }
`

export const PokemonContent = styled.main`
  display: flex;
  margin-top: 2rem;
  padding-left: 8vw;
  gap: 2rem;

  @media (max-width: 1100px) {
    padding-left: 8vw;
    padding-right: 8vw;
    gap: 0;
    display: block;
  }
`

export const Overflow = styled.div`
  background-color: ${props => props.theme[props.type]};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  z-index: 1;
  display: none;

  @media (max-width: 1100px) {
    display: unset;
    overflow: ${props => props.$currentPokemonIsSelected ? 'hidden' : 'auto'}
  }
`

export const PokedexInfo = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
`

export const CloseModalButton = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2;
    line-height: 100%;

    background-color: white;
    padding: 10px;
    border-radius: 10px;
    border: none; 
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    display: none;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    opacity: 1;

    &:hover {
      opacity: 0.3;
    }

    @media (max-width: 1100px) {
      display: unset;
    }
`