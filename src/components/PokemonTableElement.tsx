import React, { useEffect, useState } from 'react';

import { SingularPokemon } from '../models/singularPokemon.model';

export const PokemonTableElement = ({ pokemon }) => {
  const [imgs, setImgs] = useState(
    new SingularPokemon('', '', [], [], { front_default: '' }, 0)
  );

  const getImg = async () => {
    const response = await fetch(pokemon.url);
    const image = await response.json();

    setImgs(image);
  };

  useEffect(() => {

    getImg();
  }, []);

  return (
    <>
      {imgs 
      ? (
        <tr className = "card2">
          <td className = "container">ID: {imgs.id} </td>
          <td className = "container">Nombre: {imgs.name}</td>
          <td>
            <img src = {imgs.sprites.front_default} />
          </td>
        </tr>
      ) : (
        <tr className = "card2">
          <td className = "container">cargando...</td>
          <td className = "container">{pokemon.name}</td>
          <td>cargando...</td>
        </tr>
      )}
    </>
  );
};
