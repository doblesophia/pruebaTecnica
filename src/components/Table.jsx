import React, { useEffect, useMemo, useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel} from '@tanstack/react-table'
import { useDispatch, useSelector } from 'react-redux'
import allBooks from '../../redux/actions/actionBooks'
import { DateTime } from 'luxon'

const Table = () => {
    const { books } = useSelector((store)=>store.bookReducer)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [sorting, setSorting] = useState([])
    
  useEffect(() => {
    dispatch(allBooks()).then(() => {
      setIsLoading(false)
    });
  }, [dispatch]);
    

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
    state: {
      sorting: sorting
    },
    onSortingChange: setSorting})
   
    
      return (
        <div>
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
                </th>)}
              </tr>
            ))}
            </thead>
            <tbody className='text-blue-gray-900'>
              {table.getRowModel().rows.map(row=>(
                <tr key={row.id} className='border-b border-blue-gray-200'>
                  {row.getVisibleCells().map(cell=>(
                    <td key={cell.id} className='py-3 px-4'>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
