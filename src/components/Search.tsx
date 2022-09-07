import React from "react";
import { useState } from "react";
import { getPokemonsByName } from "../helpers/getPokemons";


export const Search = ({setPokemon, setError}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const obtenerPokemons=async()=>{
        try{
        const poke= await getPokemonsByName(inputValue.trim().toLowerCase());
        setPokemon(JSON.stringify(poke));
        setError('');
        }catch(err){
            setError(err.toString());
            setPokemon('');
        }

    }

    const onSubmit =(event)=>{
        event.preventDefault();
        if (inputValue.trim().length>=1) {
            obtenerPokemons();
        }
        setInputValue('')
    };

    
    

  return (
    <>
        <form onSubmit={(e)=>{onSubmit(e)}}>
            <input className='search-bar' 
            onChange={onInputChange} 
            type="text" 
            placeholder="Introduce el nombre de tu pokemon" 
            value={inputValue}/>
        </form>
    </>
  )
}
