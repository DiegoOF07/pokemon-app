export const GetPokemons = async() =>{
    const max= 1140;
    const min=0;
    let number=Math.floor((Math.random() * (max - min + 1)) + min);
    const url=`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${number}`;
    const response= await fetch(url);
    const {results}= await response.json();
    return results;
};

export const GetAllPokemons = async() =>{
    const url=`https://pokeapi.co/api/v2/pokemon?limit=28`;
    const response= await fetch(url);
    const results= await response.json();
    return results;
};

export const GetNextPokemons =async(url) =>{
    const response= await fetch(url);
    const results= await response.json();
    return results;
}

export const GetPreviousPokemons =async(url) =>{
    const response= await fetch(url);
    const results= await response.json();
    return results;
}

export const GetPokemonsByName = async(name) =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${name}`;
    const response=await fetch(url);
    const result= await response.json();
    return result;
};