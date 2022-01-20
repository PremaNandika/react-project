import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function NavBar() {
  
  let location = useLocation()
  return (
    <nav className='fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-1 m-auto top-0 transition'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          {/* title */}
          <Link to='/' className='text-3xl font-bold py-3'>Kampusku</Link>
          <div className='mt-4'>
           <Link to='/login' className='border-2 border-blue-500 px-4 py-2 my-auto hover:border-blue-300 hover:text-gray-600'>Login Afiliator</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
