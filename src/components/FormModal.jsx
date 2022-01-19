import React, { useState, useEffect } from 'react'
import Api from '../store/api'
export default function FormModal({closeModal, passedData}) {
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
  const updateData = async () => {
    const res = await Api.put(`/mahasiswa/${passedData.id}`,initialValue)
  }
  const onSubmitClick = (e) => {
    e.preventDefault()
    if (passedData != null) {
      updateData()    
    } else {
      addData()
    }
    closeModal(false)
  }
  const style = {
    input: 'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring',
    btn: 'px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400'
  }

  useEffect(() => {
    if (passedData) {
      setInitialValue(passedData)
    }
  }, []);
  return (
    <div className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center'>
      <div className='bg-white w-1/4 p-5 rounded-md transition'>
        <div className='flex justify-between items-center'>
          <h4 className='text-lg font-medium'>Add Data</h4>
          <h3 className='text-lg font-medium cursor-pointer hover:text-xl hover:drop-shadow-md' onClick={() => {closeModal(false)}}>X</h3>
        </div>
        <div className='mt-2'>
          <div>
            <form action="">
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
                  <button className={style.btn} onClick={onSubmitClick}>{passedData != null ? 'Update' : 'Submit' }</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
