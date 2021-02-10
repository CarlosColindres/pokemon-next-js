import React , {useState} from 'react'
import SearchCard from './SearchCard'
const Navbar = ({pokemons}) => {
  const [search, setSearch] = useState('')
  const [filteredMons , setFilteredMons] = useState([])
  const filter = () => {
    const searched = pokemons.filter(poke => poke.name.includes(search)).map(poke => poke)

    setFilteredMons(searched)
    
  }
  
  const onChange = (e) => {
    setSearch(e.target.value)
    filter()
  }
  
  return (
    <header className='bg-headerBlue pb-4 pt-8 h-full'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex justify-center mb-6'>
          <div className='flex items-center'>
            <img src='/assets/pokeball-color-01.png' alt='pokeball' />
            <h1 className='text-2xl md:text-6xl text-lightBlue mx-4'>
              Kanto Pokedex
            </h1>
            <img src='/assets/pokeball-color-01.png' alt='pokeball' />
          </div>
        </div>
        <div
          className='w-full
          h-full
           flex justify-center
           items-center
           bg-darkBlue
           p-2
           rounded-md
      '>
          <div className='w-full md:w-9/12 relative'>
            <input
              className='w-full p-1 rounded-md'
              type='search'
              value={search}
              onChange={onChange}
              placeholder='Search Pokemon name'
            />
            {search ? (
              <div className='w-full bg-lightBlue shadow-md p-1 absolute mt-2'>
                {filteredMons.filter((_, idx) => idx <= 10).map(mon => <SearchCard {...mon}/>)}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
