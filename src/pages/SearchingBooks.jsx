import React from 'react'
import Table from '../components/TableBooks/TableBooks'
import { Link } from 'react-router-dom'

const SearchingBooks = () => {
  return (
    <div className='bg-slate-500 rounded-2xl'>
        <div className='font-bold text-white'>
            ¡Bienvenid@ al buscador de libros de la saga de Games of Thrones!
        </div>
        <Link to={"/formbook"} className='font-bold text-white'><div>¿Consideras que falta un libro? ¡Agrégalo aquí!</div></Link>
        <div>
            <Table/>
        </div>
        </div>
  )
}

export default SearchingBooks 
