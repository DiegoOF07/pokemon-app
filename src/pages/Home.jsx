import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Slider } from "../components/Slider";
import { getPokemons } from "../helpers/getPokemons"

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const obtenerPokemons = async () => {
    const poke = await getPokemons();
    setPokemons(poke);
  }

  useEffect(() => {
    obtenerPokemons();
  }, [])
  return (
    <>
      <h2 className="title">Pokepedia</h2>
      <p className="text">
        ¡Bienvenido!<br/>
        ¿Quieres saber acerca de tus Pokemon favoritos?<br/>
        ¡Puedes hacerlo aca, colocando el nombre de tus pokemon!
      </p>

      <Slider images={pokemons}/>
      <Link to="/busca-pokemon"  className="btn">Vamos!</Link>

    </>
  )
}
