import React, { useEffect, useState } from 'react';

import { SingularPokemon } from '../models/singularPokemon.model';

export const PokemonBienvenida = ({ img, setImagen, imagenes }) => {
  const [imgs, setImgs] = useState(
    new SingularPokemon('', '', [], [], { front_default: '' }, 0)
  );

  const getImg = async () => {
    const response = await fetch(img.url);
    const image = await response.json();

    setImgs(image);
  };

  useEffect(() => {

    getImg();
    setImagen(...imagenes, imgs.sprites.front_default);
  }, []);

  return (
    <>
      {imgs 
      ? (
        <img
          src = {imgs.sprites.front_default}
          alt = {imgs.name}
          className = "portada resp"
        />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};
