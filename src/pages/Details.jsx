import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import oneBook from '../../redux/actions/actionDetails.js';
import { addFavorite, removeFavorite } from '../../redux/actions/actionFavorite.js';
import corazonVacio from "../assets/pngwing.com.png";
import corazonLLeno from "../assets/corazonlleno.png";

const Details = () => {
    const { isbn } = useParams();
    console.log("isbn", isbn)
    const dispatch = useDispatch();

    const [book, setBook] = useState(null);
    const {favorites} = useSelector((state) => state.favoriteReducer);
    console.log(favorites)
    
    const isFavorite = favorites.includes(isbn);
    

    const handleFavoriteClick = () => {
        if (isFavorite) {
            dispatch(removeFavorite(isbn));
        } else {
            dispatch(addFavorite(isbn));
        }
    };

    useEffect(() => {
        dispatch(oneBook(isbn))
            .then((action) => {
                setBook(action.payload);
            })
            .catch((error) => {
                console.error('Error al obtener los datos del libro:', error);
            });
    }, [dispatch, isbn]);

  

    return (
      <div className='bg-slate-500 h-screen w-screen'>
      <div className='text-2xl font-bold text-white'>
          ¡Aquí puedes ver el detalle de tus libros favoritos!
      </div>
      {book ? (
          <div>
              <div className='font-bold  text-white'>Nombre: </div>
              <div className='font-bold'>{book.name}</div>
              <div className='font-bold  text-white'>Autor:</div>
              <div className='font-bold'>{book.authors}</div>
              <div className='font-bold  text-white'>Número de Páginas:</div>
              <div className='font-bold' >{book.numberOfPages}</div>
              <div className='font-bold  text-white'>Editorial:</div>
              <div className='font-bold'>{book.publisher}</div>
              <div className='font-bold  text-white'>País:</div>
              <div className='font-bold'>{book.country}</div>
              <div className='font-bold  text-white'>Aprieta el corazón y agrega tu libro a favoritos</div>
              <div>
                  <button onClick={handleFavoriteClick}>
                      <img src={isFavorite ? corazonLLeno : corazonVacio} className='w-8 h-8' alt="Favorite"/>
                  </button>
              </div>
              <Link to={"/favorites"} className='font-bold text-white'>Puedes ver tus libros favoritos apretando aquí</Link>
          </div>
      ) : (
          <div>Cargando...</div>
      )}
  </div>
    );
};

export default Details;