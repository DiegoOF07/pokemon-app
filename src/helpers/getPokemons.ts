export const getPokemons = async() =>{
    const max= 1140;
    const min=0;
    let number=Math.floor((Math.random() * (max - min + 1)) + min);
    const url=`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${number}`;
    const response= await fetch(url);
    const {results}= await response.json();
    return results;
};

export const getAllPokemons = async() =>{
    const url=`https://pokeapi.co/api/v2/pokemon?limit=28`;
    const response= await fetch(url);
    const results= await response.json();
    return results;
};

export const getNextPokemons =async(url) =>{
    const response= await fetch(url);
    const results= await response.json();
    return results;
}

export const getPreviousPokemons =async(url) =>{
    const response= await fetch(url);
    const results= await response.json();
    return results;
}

export const getPokemonsByName = async(name) =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
    const response=await fetch(url);
    const result= await response.json();
    return result;
};