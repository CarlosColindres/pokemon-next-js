import React from 'react'
import { typeChanger } from '../utils/utils'
import {useRouter} from 'next/router'
const PokemonCard = ({ types, id, name, img }) => {
  const {push} = useRouter()
  return (
    <div
      onClick={() => push(`/pokemon?id=${id}`)}
      className='bg-white shadow-md px-3 py-4 rounded-md flex flex-col justify-center cursor-pointer'>
      <div className='bg-white shadow-md rounded-md flex justify-center'>
        <img className='w-20' src={img} alt={name} />
      </div>

      <div className='text-center'>
        <h3 className='capitalize text-headerBlue font-semibold'>{name}</h3>

        <p className='capitalize'>
          <span style={{ color: `${typeChanger(types[0].type.name)}` }}>
            {types[0].type.name}
          </span>
          {types[1] ? <span className='mx-1'>/</span> : ''}
          {types[1] ? (
            <span style={{ color: `${typeChanger(types[1].type.name)}` }}>
              {types[1].type.name}
            </span>
          ) : (
            ''
          )}
        </p>
        <p className='text-grey'>#{id}</p>
      </div>
    </div>
  )
}

export default PokemonCard
