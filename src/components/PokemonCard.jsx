
export const PokemonCard = ({ pokemon, error }) => {
    if (error) {
        return (
            <h3 className='title'>El pokemon que has buscado no existe :c</h3>
        )
    } else if(!pokemon && !error) {
        return (
            <h3 className='title'>Aun no has realizado busquedas</h3>
        )
    }else if(pokemon && !error) {
        const myPokemon = JSON.parse(pokemon)
        return (
            <>
                <div className='container'>
                    <div className='card-container' >
                        <div className='card'>
                            <h2 className='title'>{myPokemon.name}</h2>
                            <img className='card-img' src={myPokemon.sprites.front_default} />
                        </div>
                        <div className='card'>
                            <h4>Peso</h4><p className='card'>{myPokemon.weight}</p>
                            <h4>Habilidades:</h4>
                            <div className="container">
                                {myPokemon.abilities.map(ability => (
                                    <p key={ability.ability.name} className='card-item'>{ability.ability.name}</p>
                                ))}
                            </div>
                            <h4>Tipos</h4>
                            <div className="container">
                                {myPokemon.types.map(type => (
                                    <p key={type.type.name} className='card-item'>{type.type.name}</p>
                                ))}
                            </div>

                            <h4>Juegos en los que aparece</h4>
                            <div className="container">
                                {myPokemon.game_indices.map(game => (
                                    <p key={game.version.name} className='card-item'>{game.version.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

}
