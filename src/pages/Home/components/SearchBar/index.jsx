import { SearchBarContainer } from "./styles";

import searchIcon from '/search.svg'

export function SearchBar() {
  return (
    <SearchBarContainer >
      <input type="text" placeholder="Search a pokemon"/>
      <img src={searchIcon} alt="search icon - pokeball" />
    </SearchBarContainer>
  )
}