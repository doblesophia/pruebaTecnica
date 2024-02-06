import React from 'react'
import Table from '../components/Table.jsx'

const SearchingBooks = () => {
  return (
    <>
        <div>
            ¡Bienvenid@ al buscador de libros de la saga de Games of Thrones!
        </div>
        <div>
        Busca tu libro favorito y encuentra todos los detalles que desees saber
        </div>
        <div>
            <Table/>
        </div>
    </>
  )
}

export default SearchingBooks
