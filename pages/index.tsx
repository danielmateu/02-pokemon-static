// import { Button } from '@nextui-org/react';
import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';


interface Props {
  pokemons: SmallPokemon[];

}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons);

  return (
    <Layout title="Listado de Pokemons">

      {/* <Button color='gradient'>Hola mundo! 😁</Button> */}
      <ul>
          {
            pokemons.map(({id,name,img}) => <li key={id}>{id} - {name} </li>)
          }
      
      </ul>

    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await  // your fetch function here 

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  console.log(data);

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

  return {
    props: {
      pokemons,
    }
  }
}

export default HomePage;
