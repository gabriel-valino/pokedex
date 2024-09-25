
import logo from '/logo.png'
import { HeaderContainer } from './styles'

export function Header () {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo Pokémon"/>
    </HeaderContainer>
  )
}