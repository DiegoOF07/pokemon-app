import { useEffect, useState } from "react";

export const PokemonTableElement = ({ pokemon }) => {

    const [imgs, setImgs] = useState('');

    const getImg = async () => {
        const response = await fetch(pokemon.url);
        const image = await response.json();
        setImgs(image);
    }

    useEffect(() => {
        getImg();
    }, [])


    return (
        <>
            {imgs ?
                <tr className='card2'>
                    <td className="container">ID: {imgs.id} </td>
                    <td className="container">Nombre: {pokemon.name}</td>
                    <td><img src={imgs.sprites.front_default} /></td>
                </tr>
                : <tr className='card2'>
                    <td className="container">cargando...</td>
                    <td className="container">{pokemon.name}</td>
                    <td>cargando...</td>
                </tr>
            }
        </>
    )
}
