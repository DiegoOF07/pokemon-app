import { useEffect, useState } from "react"
import { PokemonTableElement } from "../components/PokemonTableElement";
import { getAllPokemons } from "../helpers/getPokemons"

export const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);

    const getMyPokemons=async()=>{
      const myPokemons = await getAllPokemons();
      setPokemons(myPokemons);
    }
  useEffect(() => {
    getMyPokemons();
  },[])

  return (
    <>
      <h2 className='title'>Aca podras encontrar un listado con todos los pokemons</h2>
      <table >
        <tbody className="container">
          {pokemons.map((pokemon,i)=>(
            <PokemonTableElement key={pokemon.name} index={i+1} pokemon={pokemon}/>
          ))}
        </tbody>
      </table>
    </>
  )
}