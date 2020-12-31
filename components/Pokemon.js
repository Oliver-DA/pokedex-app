import React from 'react';
import Link from 'next/link';

const Pokemon = ({ pokemon, pokemonUrl}) => {

    const { name, image } = pokemon;

    return (
        <li>
            <h3>
                { name }
            </h3>
            <Link href = {pokemonUrl}>
                <a><img src = {image} alt = "Pokemon Image" /></a>
            </Link>
            
        </li>
    );
}
 
export default Pokemon;