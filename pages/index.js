//Libraries
import axios from 'axios';
import { useState } from 'react';

//Styles
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

//Components
import Pokemon from '../components/Pokemon';

export default function Home ({ pokemons }) {

    //UseState
    const [filteredPokemons, setFilterPokemons] = useState(pokemons);

    //SearchPokemon function
    const searchFn = (input) => {
        let search = input;
        const filteredPokemons = [];

        if(search === "") {
            return pokemons;
        }

        for (let pokemon of pokemons) {
            
            if (pokemon.name.includes(search.toLowerCase().trim(""))) {
                filteredPokemons.push(pokemon)
            }
        }

        return filteredPokemons;
    }

    //Handlers
    const handleChange = e => {
        setFilterPokemons(searchFn(e.target.value));
    }

    return (
        <Layout>

            <div className = {styles.header}>
                <h1 className = { styles.title }>
                Pokédex
                <form>
                    <input
                        className = {styles.search}
                        type = "text"
                        placeholder = "try typing pikachu..."
                        onChange = { handleChange } />
                </form>
                </h1>
            </div>
            
            { filteredPokemons.length === 0 && <h3>No pokemons were found :(</h3> }
            <ul className = {styles.pokemonList}>
                {
                    filteredPokemons.map( (pokemon, index) => (
                        <Pokemon
                        key = {index}
                        pokemon = {pokemon}
                        pokemonUrl = {`/pokemon/${pokemon.index}`} />
                    ))
                }
            </ul>

        </Layout>
    )
}

export async function getStaticProps () {

    const response = await axios("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    const results = await response.data.results;

    const pokemons = results.map( (pokemon, index) => {
            
        //Creating a paddedIndex to get an image for each pokemon
        let paddedIndex = index < 9 ? "00": index >= 9 && index < 99 ? "0": "";
        paddedIndex += (index + 1);

        let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

        return {
            ...pokemon,
            image,
            index: (index + 1)
        }
    });

    return { props: { pokemons } }
}