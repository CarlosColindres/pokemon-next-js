import React from 'react'
import Link from 'next/link'

const pokemon = ({ poke }) => {
  return (
    <div>
      <h1 className="text-4xl mb-2 text-center capitalize ">
        {poke.name}
      </h1>
      <img src={`https://${poke.image}`} alt={poke.name} className="mx-auto" />
      <p className="mt-10 text-center">
        <Link href="/">
          <a className="text-2xl underline">Home</a>
        </Link>
      </p>
    </div>
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
