import React, { useEffect, useState } from 'react';

import { SingularPokemon } from '../models/singularPokemon.model';
import { InfoPokemon } from './InfoPokemon';

export const PokemonTableElement = ({ pokemon, setValidation, validation }) => {
  const [imgs, setImgs] = useState(
    new SingularPokemon('', '', [], [], { front_default: '' }, 0)
  );

  const [modal, setModal] = useState(false);

  const viewMyPokemon = () => {
    if (modal){
      setValidation(false);
      setModal(false);
    }else{
      setValidation(true);
      setModal(true);
    }
  }

  const cerrarInfo = () => {
    setValidation(false);
    setModal(false);
  }

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
        ? 
          <>
            {validation===false ?
              <tr className="card2" onClick={(e) => viewMyPokemon()}>
                <td className="container">ID: {imgs.id} </td>
                <td className="container">Nombre: {imgs.name}</td>
                <td>
                  <img src={imgs.sprites.front_default} />
                </td>
              </tr>
              :
              <tr className="card2 disabled">
                <td className="container">ID: {imgs.id} </td>
                <td className="container">Nombre: {imgs.name}</td>
                <td>
                  <img src={imgs.sprites.front_default} />
                </td>
              </tr>
            }
          </>
        : 
          <tr className="card2">
            <td className="container">cargando...</td>
            <td className="container">{pokemon.name}</td>
            <td>cargando...</td>
          </tr>
        }
      {imgs && modal ?
          <tr className="modal">
            <td className="btn" onClick={cerrarInfo}>Cerrar</td>
            <InfoPokemon pokemon={imgs} />
          </tr>
        : null
      }
    </>
  );
};
