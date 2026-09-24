import React from 'react'
import { Outlet } from "react-router-dom"

const Products = ({clickHandler}) => {

  

  return (
    <div className=''>

      <div className='flex my-4 justify-around text-gray-300 '>

        <div className='border border-blue-600 p-4 rounded-sm'>
          <h3>Product 01</h3>
          <p>This is p01</p>
          <button 
            onClick={()=>clickHandler("Product 01")}
            className='bg-gray-900 px-2 mt-2 cursor-pointer' 
          >click</button>
        </div>

        <div className='border border-blue-600 p-4 rounded-sm'>
          <h3>Product 02</h3>
          <p>This is p02</p>
          <button 
            onClick={()=>clickHandler("Product 02")}
            className='bg-gray-900 px-2 mt-2 cursor-pointer' 
          >click</button>
        </div>

        <div className='border border-blue-600 p-4 rounded-sm'>
          <h3>Product 03</h3>
          <p>This is p03</p>
          <button 
            onClick={()=>clickHandler("Product 03")}
            className='bg-gray-900 px-2 mt-2 cursor-pointer' 
          >click</button>
        </div>

        <div className='border border-blue-600 p-4 rounded-sm'>
          <h3>Product 04</h3>
          <p>This is p04</p>
          <button 
            onClick={()=>clickHandler("Product 04")}
            className='bg-gray-900 px-2 mt-2 cursor-pointer' 
          >click</button>
        </div>

      </div>


      <div>
        <Outlet/>
      </div>

    </div>
  )
}

export default Products