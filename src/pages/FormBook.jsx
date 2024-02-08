import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormBook = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      title: "",
      author: "",
      genre: "",
      publicationDate: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('El nombre es requerido'),
      email: Yup.string()
        .email('Introduce una dirección de correo válida')
        .required('El correo es requerido'),
      title: Yup.string()
        .required('El título del libro es requerido'),
      author: Yup.string()
        .required('El autor del libro es requerido'),
      genre: Yup.string()
        .required('El género del libro es requerido'),
      publicationDate: Yup.date()
        .required('La fecha de publicación es requerida')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className='flex flex-col pt-10 bg-slate-500 w-full h-screen items-center'>
      <h1 className='text-2xl font-bold text-yellow-500'>Formulario de Registro de Nuevo Libro</h1>
      <form onSubmit={formik.handleSubmit} className='flex flex-col items-center w-full md:w-96 pt-10 rounded-md'>
        <input
          type='text'
          placeholder='Introduce tu nombre aquí'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          className='h-12 w-full rounded-sm '
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
        <input
          type='email'
          placeholder='Introduce tu correo aquí'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          className='h-12 w-full rounded-sm '
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
        <input
          type='text'
          placeholder='Título del libro'
          name='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          className='h-12 w-full rounded-sm '
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <input
          type='text'
          placeholder='Autor del libro'
          name='author'
          value={formik.values.author}
          onChange={formik.handleChange}
          className='h-12 w-full rounded-sm  '
        />
        {formik.touched.author && formik.errors.author ? (
          <div>{formik.errors.author}</div>
        ) : null}
        <input
          type='text'
          placeholder='Género del libro'
          name='genre'
          value={formik.values.genre}
          onChange={formik.handleChange}
          className='h-12 w-full rounded-sm '
        />
        {formik.touched.genre && formik.errors.genre ? (
          <div>{formik.errors.genre}</div>
        ) : null}
        <input
          type='date'
          placeholder='Fecha de publicación'
          name='publicationDate'
          value={formik.values.publicationDate}
          onChange={formik.handleChange}
          className='h-12 w-full rounded-sm '
        />
        {formik.touched.publicationDate && formik.errors.publicationDate ? (
          <div>{formik.errors.publicationDate}</div>
        ) : null}
        <button type='submit' className=' mt-4 border border-black h-8 bg-gray-400 rounded-md w-36'>Enviar libro nuevo</button>
      </form>
    </div>
  );
};

export default FormBook;

