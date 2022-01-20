import React, { useState, useEffect } from 'react'
import Api from '../store/api'
export default function DataPendaftar() {
  const [ initialValue , setInitialValue ] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  const handlerInputFirstName = (e) => {
    setInitialValue({ ...initialValue, firstName: e.target.value })
  }
  const handlerInputLastName = (e) => {
    setInitialValue({ ...initialValue, lastName: e.target.value })
  }
  const handlerInputEmail = (e) => {
    setInitialValue({ ...initialValue, email: e.target.value })
  }
  const addData = async () => {
    const req = {
      id: Math.floor(Math.random() * 100),
      ...initialValue
    }
    const res = await Api.post("/mahasiswa", req)
  }
  const onSubmitClick = (e) => {
    e.preventDefault()
    addData()
    setInitialValue({
      firstName: '',
      lastName: '',
      email: ''
    })
    alert("Pendaftaran sukses !")
  }
  useEffect(() => {
  }, [initialValue])
  const style = {
    input: 'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring',
    btn: 'px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400'
  }
  return (
    <div>
      <div className='border-2 w-1/4 p-5 mx-auto shadow-md rounded-sm'>
        <p className='text-lg font-medium'>Form Pendaftaran Mahasiswa</p>
          <div className='grid grid-cols-1 gap-6 mt-4'>
            <div>
              <label htmlFor="firstName" className='text-gray-700'>First Name :</label>
              <input type="text" id='firstName' className={style.input} value={initialValue.firstName} onChange={handlerInputFirstName}/>
            </div>
            <div>
              <label htmlFor="lastName" className='text-gray-700'>Last Name : </label>
              <input type="text" id='lastName' className={style.input} value={initialValue.lastName} onChange={handlerInputLastName}/>
            </div>
            <div>
              <label htmlFor="email" className='text-gray-700'>Email : </label>
              <input type="text" id='email' className={style.input} value={initialValue.email} onChange={handlerInputEmail}/>
            </div>
            <div className="flex justify-end mt-6">
              <button className={style.btn} onClick={onSubmitClick}>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}
