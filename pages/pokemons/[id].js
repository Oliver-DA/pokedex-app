//Libraries
import axios from 'axios';

//Styles
import styles from '../../styles/home.module.css'

//Components
import Layout from '../../components/Layout';
import Link from 'next/link';


export default function singlePokemon ({ pokemon }){

    return (
        <Layout>

            <h1>{pokemon.name}</h1>

            <img src = {pokemon.image} alt = "Pokemon Image" />

            <div className = {styles.types}>
                <h2>Type</h2>
                    {
                        pokemon.types.map( (type, index) => (
                            <p className = {type.type.name}  key = {index}>{type.type.name}</p>
                        ))
                    }
            </div>

            <Link href = "/">
                <a className = {styles.homeButton}>Home</a>
            </Link>

        </Layout>
    )
};


export async function getServerSideProps ({ query }) {
    let { id } = query;
    const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.data;

    let paddedIndex = id < 10 ? "00": id >= 10 && id < 100 ? "0": "";
    paddedIndex += (id)

    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

    return { props: { pokemon }}

}