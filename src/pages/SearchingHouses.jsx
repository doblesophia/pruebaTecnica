import React from 'react'
import TableHouses from '../components/TableHouses'

const SearchingHouses = () => {
  return (
    <div className='bg-slate-500 rounded-2xl'>
      <div className='font-bold text-white'>
            ¡Bienvenid@ al buscador de casas de la saga de Games of Thrones!
        </div>
      <div>
        <TableHouses/>
      </div>
    </div>
  )
}

export default SearchingHouses
