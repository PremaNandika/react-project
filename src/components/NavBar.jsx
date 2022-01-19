import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
export default function NavBar() {
  
  let location = useLocation()
  const menus = [
    {
      text: 'Home',
      path : '/'
    },
    {
      text: 'Pendaftaran',
      path : '/Pendaftaran'
    },
    {
      text: 'Data Management',
      path : '/Admin/Data-Management'
    },
  ]
  return (
    <nav className='fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-1 m-auto top-0 transition'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          {/* title */}
          <Link to='/' className='text-3xl font-bold py-3'>Kampusku</Link>
          {/* menus */}
          <ul className="self-center font-semibold text-base">
            {
              menus.map((d,i) => (
              <li className='inline-block' key={i}>
                <Link to={d.path} className={d.path == location.pathname? 'text-blue-500 px-6 hover:text-blue-500' :'text-gray-800 px-6 hover:text-blue-500'}>{d.text}</Link>
              </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
