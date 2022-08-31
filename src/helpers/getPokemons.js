export const getPokemons = async() =>{
    const url='https://pokeapi.co/api/v2/pokemon?limit=10&offset=120';
    const response= await fetch(url);
    const {results}= await response.json();
    return results;
};

export const getAllPokemons = async() =>{
    const url='https://pokeapi.co/api/v2/pokemon?limit=200&offset=0';
    const response= await fetch(url);
    const {results}= await response.json();
    return results;
};

export const getPokemonsByName = async(name) =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
    const response=await fetch(url);
    const result= await response.json();
    return result;
};