//Libraries
import axios from 'axios';

//Styles
import styles from '../../styles/home.module.css';

//Components
import Layout from '../../components/Layout';
import Link from 'next/link';


export default function singlePokemon ({ pokemon }) {

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

//Generation 151 id with a for loop intead of fetchin a pokemon id from an API
//This works because pokemons are enumerate in ascending order in a pokedex
export async function getStaticPaths() {

  const paths = [];

  for (let i = 1; i < 151; i++) {

    paths.push({
      params: {id: i.toString()}
    });

  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {

  const { id } = params;

  const response = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.data;

  //Creating a paddedIndex in orther to get the image of the pokemon
  let paddedIndex = id < 10 ? "00": id >= 10 && id < 100 ? "0": "";
  paddedIndex += (id);

  let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;

  pokemon.image = image

  return { props: { pokemon } }
}


