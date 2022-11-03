import React from 'react';
import './Pokecard.css';

const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// Pokemon card component

function Pokecard({id, name, type, exp}) {
    let img = POKEMON_API + `${id}.png`;

    return (
        <div className='Pokecard'>
            <div className='Pokecard-name'>{name}</div>
            <img className='Pokecard-image' src={img} alt=""/>
            <div className='Pokecard-bottom'>Type: {type}</div>
            <div className='Pokecard-bottom'>EXP: {exp}</div>
        </div>
    )
}

export default Pokecard;