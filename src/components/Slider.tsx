import React, { useState } from 'react';

import { PokemonBienvenida } from './PokemonBienvenida';

export const Slider = ({ images }) => {
  const [imagenes, setImagenes] = useState([]);

  return (
    <div className = "container">
      {images.map((img) => (
        <PokemonBienvenida
          key = {img.name}
          img = {img}
          setImagen = {setImagenes}
          imagenes = {imagenes}
        />
      ))}
    </div>
  );
};
