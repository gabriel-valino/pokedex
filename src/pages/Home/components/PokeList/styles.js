import styled from "styled-components";

export const PokeListContainer = styled.div`
  display: grid;
  grid-row-gap: 2.5rem;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`




