import React, { useState } from 'react';

import { Search, PokemonCard } from '../components';


export const Pokemon = () => {
  const [pokemon, setPokemon] = useState('');
  const [error, setError] = useState('');

  return (
    <>
      <h2 className="title">Busca a tu Pokemon</h2>
      <Search 
        setPokemon = {setPokemon} 
        setError = {setError} />
          {pokemon 
          ? (
            <PokemonCard pokemon = {pokemon} />
          ) : null}
          {error 
          ? (
            <h3 className = "title">El pokemon que has buscado no existe :c</h3>
          ) : null}
          {!pokemon && !error
            ?(
              <h3 className = "title">Aun no has realizado busquedas</h3>
            ) : null}
    </>
  );
};
