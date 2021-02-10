import React from 'react'
import { useRouter } from 'next/router'

const SearchCard = ({ name, img, id }) => {
      const { push } = useRouter()

    return (
      <div
        onClick={() => push(`/pokemon?id=${id}`)}
        className='flex items-center bg-white mb-2 px-2 rounded-md cursor-pointer'>
        <img className='w-14' src={img} alt={name} />
        <p className='capitalize'>{name}</p>
        <p className='ml-3'>#{id}</p>
      </div>
    )
}

export default SearchCard
