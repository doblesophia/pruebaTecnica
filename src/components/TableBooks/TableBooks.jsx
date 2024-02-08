import React, { useEffect, useMemo, useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel, getFilteredRowModel} from '@tanstack/react-table'
import { useDispatch, useSelector } from 'react-redux'
import allBooks from '../../../redux/actions/actionBooks.js'
import { useParams } from 'react-router-dom'
import { DateTime } from 'luxon'
import { Link } from 'react-router-dom'



const Table = () => {
    const { books } = useSelector((state)=>state.bookReducer)
    const [isLoading, setIsLoading] = useState(true) 
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
     
    const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(allBooks())
  }, [dispatch]);
    

    const getId = (url) => {
        return parseInt(url.match(/\d+$/)[0])
    }

    const data = useMemo(()=> books, [])
    const columns = [
      {
        header: "Nombre",
        accessorKey: "name"
      },
      { 
        header: "ISBN",
        accessorKey: "isbn"
      },
      {
        header: "Autor",
        accessorKey: "authors"
      },
      {
        header: "Número de Páginas",
        accessorKey: "numberOfPages"
      },
      {
        header: "Fecha de Publicación",
        accessorKey: "released",
        cell: info=> DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
      },
    ]
    const table = useReactTable({
    data,
    columns, 
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),  
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering  
  })
   
    
      return (
        <div>
          <input type='text' value={filtering} onChange={e=> setFiltering(e.target.value)} placeholder='Busca aquí' className=' border border-stone-950 rounded'/>
          <table className='min-w-full bg-white shadow-md rounded-xl'>
            <thead>
            {table.getHeaderGroups().map(headerGroup=>(
              <tr key={headerGroup.id} className='bg-blue-gray-100 text-gray-700'>
                {headerGroup.headers.map(header=>
                <th key={header.id} className='py-3 px-4' onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(header.column.columnDef.header, 
                    header.getContext())}
                    {
                      {asc: "⬆️", desc: "⬇️"}[header.column.getIsSorted()?? null ]
                    }
                </th>) }
              </tr>
            ))}
            </thead>
            <tbody className='text-blue-gray-900'> 
              {table.getRowModel().rows.map(row=>(
                <tr key={row.id} className='border-b border-blue-gray-200'>
                  {row.getVisibleCells().map(cell=>(
                   <td key={cell.id} className='py-3 px-4'>
                                         <Link to={`/books/${getId(cell.row.original.url)}`}> 

                     {flexRender(cell.column.columnDef.cell, cell.getContext())} </Link>
                    </td>
                  ))} 
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      )
}

export default Table

