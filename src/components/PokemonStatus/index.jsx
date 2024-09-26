import { PokemonAttribute, PokemonStatusContainer } from "./styles";

export function PokemonStatus ({ stats }) {
  const { hp, attack, defense, specialAttack, specialDefense, speed, total } = stats

  return (
    <PokemonStatusContainer>
      <PokemonAttribute attribute="HP">
        <div>
          <span>HP</span>
        </div>
        <span>{hp}</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="ATK">
        <div>
          <span>ATK</span>
        </div>
        <span>{attack}</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="DEF">
        <div>
          <span>DEF</span>
        </div>
        <span>{defense}</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="SpA">
        <div>
          <span>SpA</span>
        </div>
        <span>{specialAttack}</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="SpD">
        <div>
          <span>SpD</span>
        </div>
        <span>{specialDefense}</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="SPD">
        <div>
          <span>SPD</span>
        </div>
        <span>{speed}</span>
      </PokemonAttribute>
      <PokemonAttribute attribute="TOT">
        <div>
          <span>TOT</span>
        </div>
        <span>{total}</span>
      </PokemonAttribute>
    </PokemonStatusContainer>
  )
}