import { useState } from "react"
import { Search } from "../components/Search"
import { PokemonCard } from "../components/PokemonCard";


export const Pokemon = () => {
  const [pokemon, setPokemon] = useState('');
  const [error, setError] = useState('');

  return (
    <>  
        <h2 className="title">Busca a tu Pokemon</h2>
        <Search setPokemon={setPokemon} setError={setError}/>
        <PokemonCard pokemon={pokemon} error={error}/>

    </>
  )
}
