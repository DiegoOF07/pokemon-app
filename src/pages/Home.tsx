import React from "react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Slider } from "../components";
import { GetPokemons } from "../helpers/GetPokemons"

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const obtenerPokemons = async () => {
    const poke = await GetPokemons();
    setPokemons(poke);
  }

  useEffect(() => {
    obtenerPokemons();
  }, [])
  return (
    <>
      <h2 className="title">Pokepedia</h2>
      <p className="text">
        ¡Bienvenido!<br />
        ¿Quieres saber acerca de tus Pokemon favoritos?<br />
        ¡Puedes hacerlo aca, colocando el nombre de tus pokemon!
      </p>
      <p className="text">
        O bien<br />
        ¿Quieres ver un listado con todos los pokemon?<br />
      </p>

      <Slider images={pokemons} />
      <div className="container2">
        <Link to="/todos-los-pokemon" className="btn">Ver listado!</Link>
        <Link to="/busca-pokemon" className="btn">Buscar!</Link>
      </div>


    </>
  )
}
