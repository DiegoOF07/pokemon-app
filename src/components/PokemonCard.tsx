import React from "react"

export const PokemonCard = ({ pokemon }) => {
    return (
        <>
            <div className='container'>
                <div className='card-container' >
                    <div className='card'>
                        <h2 className='title'>{pokemon.name}</h2>
                        <img className='card-img' src={pokemon.sprites.front_default} />
                    </div>
                    <div className='card'>
                        <h4>Peso</h4><p className='card'>{pokemon.weight}</p>
                        <h4>Habilidades:</h4>
                        <div className="container">
                            {pokemon.abilities.map(ability => (
                                <p key={ability.ability.name} className='card-item'>{ability.ability.name}</p>
                            ))}
                        </div>
                        <h4>Tipos</h4>
                        <div className="container">
                            {pokemon.types.map(type => (
                                <p key={type.type.name} className='card-item'>{type.type.name}</p>
                            ))}
                        </div>

                        <h4>Juegos en los que aparece</h4>
                        <div className="container">
                            {pokemon.game_indices.map(game => (
                                <p key={game.version.name} className='card-item'>{game.version.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

