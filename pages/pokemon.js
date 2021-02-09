import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const pokemon = ({ poke }) => {
  return (
    <Layout title={poke.name}>
      <h1 className="text-4xl mb-2 text-center capitalize dark:text-white">
        {poke.name}
      </h1>
      <img src={`https://${poke.image}`} alt={poke.name} className="mx-auto" />
      <p>
        <span className="font-bold mr-2">Weight:</span> {poke.weight}
      </p>
      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
        <Link href="/pokemon-stats">
          <a className="text-2xl underline">Pokemon stats</a>
        </Link>
      </p>
    </Layout>
  )
}

export default pokemon

export const getServerSideProps = async ({ query }) => {
  const { id } = query
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const poke = await res.json()
    const paddedIndex = ('00' + id).slice(-3)
    const image = `assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`

    poke.image = image

    return {
      props: { poke },
    }
  } catch (error) {
    console.log(error.message)
  }
}
