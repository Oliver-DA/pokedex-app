//Libraries
import axios from 'axios';

//Styles
import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

//Components
import Pokemon from '../components/Pokemon';


export default function Home ({ pokemons }) {

    return (
        <Layout>
            <h1 className = { styles.title }>Pokédex</h1>

            <ul className = {styles.pokemonList}>
                {
                    pokemons.map( (pokemon, index) => (
                        <Pokemon
                        key = {index}
                        pokemon = {pokemon}
                        pokemonUrl = {`/pokemons/${index + 1}`} />
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
        let paddedIndex = index < 9 ? "00": index >= 9 && index < 99 ? "0": "";
        paddedIndex += (index + 1)

        let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

        return {
            ...pokemon,
            image
        }
    });

    return { props: { pokemons } }
}