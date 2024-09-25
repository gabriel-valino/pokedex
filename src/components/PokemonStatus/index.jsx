import { PokemonAttribute, PokemonStatusContainer } from "./styles";

export function PokemonStatus () {
  return (
    <PokemonStatusContainer>
      <PokemonAttribute attribute="HP">
        <div>
          <span>HP</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="ATK">
        <div>
          <span>ATK</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="DEF">
        <div>
          <span>DEF</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="SpA">
        <div>
          <span>SpA</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="SpD">
        <div>
          <span>SpD</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="SPD">
        <div>
          <span>SPD</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="TOT">
        <div>
          <span>TOT</span>
        </div>
        <span>108</span>
      </PokemonAttribute>
    </PokemonStatusContainer>
  )
}