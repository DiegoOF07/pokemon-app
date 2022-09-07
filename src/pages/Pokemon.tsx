import { useState } from "react"
import { Search } from "../components/Search"
import { PokemonCard } from "../components/PokemonCard";
import React from "react";


export const Pokemon = () => {
  const [pokemon, setPokemon] = useState('');
  const [error, setError] = useState('');


  return (
    <>  
        <h2 className="title">Busca a tu Pokemon</h2>
        <Search setPokemon={setPokemon} setError={setError}/>
        { pokemon ?
          <PokemonCard pokemon={pokemon}/>
          : <h3 className='title'>Aun no has realizado busquedas</h3>
        }
        {
          error ?
          <h3 className='title'>El pokemon que has buscado no existe :c</h3>
          :null
        }

    </>
  )
}
