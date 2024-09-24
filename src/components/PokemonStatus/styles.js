import { styled } from 'styled-components'

export const PokemonStatusContainer = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  margin-top: 16px;

  > div.attribute {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme['background']};
    color: black;
    border-radius: 99999px;
    padding: 4px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: red;
      padding: 2px;
    }

    > div span {
      line-height: 100%;
      font-size: 0.75rem;
      font-weight: 800;
      color: white;
    }

    > span {
      margin-top: 2px;
      font-size: 0.875rem;
      font-weight: 600;
      color: black;
    }
  } 
`

