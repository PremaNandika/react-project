import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-start-3 col-end-7 mt-36'>
        <p className='text-2xl font-semibold'>Kampusku</p>
        <p className='text-6xl font-medium mt-2'>Affiliate Program</p>
        <p className='mt-3 my-5'>Dapatkan komisi dengan bermitra bersama Kampusku</p>
        <Link to='/daftar-afiliator' className='bg-blue-500 text-white hover:bg-blue-400 py-2 px-4'>Daftar Sekarang</Link>
      </div>
      <div className='col-start-8 col-end-10 mt-36 w-[400px] h-[400px]'>
        <img src={require('../assets/anakKuliah.png')} alt="Anak Kuliah" />
      </div>
    </div>
  )
}
