import { useEffect, useState } from "react"
import { PokemonTableElement } from "../components/PokemonTableElement";
import { getAllPokemons, getNextPokemons, getPreviousPokemons } from "../helpers/getPokemons"

export const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext]=useState('');
  const [previous, setPrevious]=useState('');

    const getMyPokemons=async()=>{
      const myPokemon = await getAllPokemons();
      setNext(myPokemon.next);
      setPrevious(myPokemon.previous);
      setPokemons(myPokemon.results);
    }

    const nextPage=async()=>{
      const nextPokemon = await getNextPokemons(next);
      setNext(nextPokemon.next);
      setPrevious(nextPokemon.previous);
      setPokemons(nextPokemon.results);
    }

    const previousPage=async () => {
        const previousPokemon=await getPreviousPokemons(previous);
        setNext(previousPokemon.next);
        setPrevious(previousPokemon.previous);
        setPokemons(previousPokemon.results);
    }


  useEffect(() => {
    getMyPokemons();
  },[])

  return (
    <>
      <h2 className='title'>Aca podras encontrar un listado con todos los pokemons</h2>
      <div className="container2">
      {next?
        <button onClick={nextPage} className="btn">siguiente</button>
        :null
      }
      {previous?
        <button onClick={previousPage} className="btn">anterior</button>
        :null
      }
      </div>
      
      <table >
        <tbody className="container">
          {pokemons.map((pokemon)=>(
            <PokemonTableElement key={pokemon.name} pokemon={pokemon}/>
          ))}
        </tbody>
      </table>
    </>
  )
}