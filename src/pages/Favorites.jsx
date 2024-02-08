import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import oneBook from '../../redux/actions/actionDetails';
import corazonlleno from "../assets/corazonlleno.png"
import { v4 as uuidv4 } from 'uuid';

const Favorites = () => {
    const dispatch = useDispatch();
    const { favorites } = useSelector((store) => store.favoriteReducer);
    const { books, pending } = useSelector((store) => store.oneBookReducer);

    useEffect(() => {
      favorites.forEach((isbn) => {
          dispatch(oneBook(isbn));
      });
  }, [dispatch, favorites]);

    return (
      <div className='bg-slate-500 h-screen w-auto'>
          <div className='text-3xl font-bold flex items-center justify-center mt-2'><img src={corazonlleno} className='w-5 h-5'/>Tus favoritos <img src={corazonlleno} className='w-5 h-5'/></div>
          {pending && <p>Cargando...</p>}
          {books.length > 0 ? (
              <ul>
                  {books.map((book) => (
                      <li key={uuidv4()} className='text-xl mt-10 text-yellow-500 font-bold'>{book.name}</li>
                  ))}
              </ul>
          ) : (
              <p>No tienes libros favoritos todavía.</p>
          )}
      </div>
  );
};

export default Favorites;
