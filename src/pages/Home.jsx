import React from 'react'
import { Link } from 'react-router-dom'
import imagenDeFondoDesktop from "../assets/T2MKKMK3WRGOZM4UIUBGBMJ7S4.avif"


const Home = () => {
  

  return (
    <div className='h-screen w-320 bg-cover bg-center flex  items-center flex-col' style={{ backgroundImage: `url(${imagenDeFondoDesktop})`}} >
      <div className='flex flex-col justify-center bg-slate-500 font-bold text-white  text-xl md:text-3xl  h-20 md:h-24 rounded-xl'>
      ¡Bienvenid@ al buscador de libros de la saga de Game of Thrones!
        </div>
        <div className='flex flex-col text-white font-bold text-2xl'>¿Qué deseas conocer?</div>
        <Link to="/books" className='text-white font-bold text-2xl'>Los libros de la saga</Link> 
        <Link to="/houses" className='text-white font-bold text-2xl'> Casas de la saga</Link>
    </div>
  )
}

export default Home
