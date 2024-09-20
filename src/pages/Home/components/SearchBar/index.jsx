import { SearchBarContainer } from "./styles";

import searchIcon from '../../../../../public/search.svg'

export function SearchBar() {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Busque um pokémon"/>
      <img src={searchIcon} alt="" />
    </SearchBarContainer>
  )
}