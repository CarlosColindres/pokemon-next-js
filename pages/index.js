import Navbar from '../components/Navbar'
import Head from 'next/head'
import PokemonCard from '../components/PokemonCard'
import {useState} from 'react'
export default function Home({ pokemons }) {
  const [num , setNum] = useState(20)
  return (
    <div className='bg-lightBlue min-h-screen'>
      <Head>
        <title>Kanto Pokedex</title>
        <link rel='icon' href='/assets/pokeball-input-02.png' />
      </Head>
      <Navbar pokemons={ pokemons }/>
      <div className='container max-w-screen-xl mx-auto grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 px-4 pb-4 mt-8'>
        {pokemons
          .filter((_, idx) => idx < num)
          .map(pokemon => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
      </div>
      { num < 150 ? <div className='container max-w-screen-xl mx-auto flex justify-center py-8'>
        <button className='bg-headerBlue text-lightBlue px-4 py-2 rounded-md hover:bg-darkBlue' onClick={() => setNum(num + 20)}>Load More</button>
      </div> : ''}
      
    </div>
  )
}

export const getStaticProps = async context => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')

    const { results } = await res.json()

    const promises = []

    results.forEach(pokemon => {
      const { url } = pokemon
      promises.push(fetch(url))
    })

    const data = await Promise.all(promises)

    const pokemons = await Promise.all(
      data.map(async item => {
        const { id, sprites, types, species } = await item.json()
        return {
          types,
          id,
          name: species.name,
          img: sprites.front_default,
        }
      })
    )

    return {
      props: { pokemons },
    }
  } catch (err) {
    console.log(err)
  }
}
