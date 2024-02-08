import React, { useEffect, useMemo, useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable, getSortedRowModel, getFilteredRowModel, getPaginationRowModel} from '@tanstack/react-table'
import { useDispatch, useSelector } from 'react-redux'
import allHouses from '../../redux/actions/actionHouses.js'
import { DateTime } from 'luxon'

const TableHouses = () => {  
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')
    const {houses} = useSelector((store)=>store.housesReducer)
    console.log(houses)
    
  useEffect(() => {
    dispatch(allHouses()).then(() => {
      setIsLoading(false)
    });
  }, [dispatch]); 
    

    const data = useMemo(()=> houses, [])
    const columns = [
      {
        header: "Nombre",
        accessorKey: "name"
      },
      {
        header: "Región",
        accessorKey: "region"
      },
    ]
    const table = useReactTable({
    data,
    columns, 
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
          <div className='flex'>
            <button onClick={()=>table.setPageIndex(0)} className='border w-32 h-8'>Primera página</button>
            <button onClick={()=>table.previousPage()} className='border w-32 h-8'>Página anterior</button>
            <button onClick={()=>table.nextPage()} className='border w-32 h-8'>Página siguiente</button>
          </div>
        </div>
      )
}

export default TableHouses