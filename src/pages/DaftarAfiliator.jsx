import React, { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import Api from '../store/api.js'

const Daftarafiliator = () => {
  const [ alert, setAlert ] = useState(false)
  const [ message, setMessage ] = useState('')
  const [ initialValue , setInitialValue ] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  })
  const handlerInputName = (e) => {
    setInitialValue({ ...initialValue, name: e.target.value })
  }
  const handlerInputUsername = (e) => {
    setInitialValue({ ...initialValue, username: e.target.value })
  }
  const handlerInputPassword = (e) => {
    setInitialValue({ ...initialValue, password: e.target.value })
  }
  const handlerConfirmPassword = (e) => {
    setInitialValue({ ...initialValue, confirmPassword: e.target.value })
  }
  const addData = async () => {
    const req = {
      name: initialValue.name,
      username: initialValue.username,
      password: initialValue.password,
    }
    const res = await Api.post('/afiliator', req)
    setMessage(res.data.message)
    setAlert(true)
  }
  const onSubmitClick = (e) => {
    e.preventDefault()
    addData()
    setInitialValue({
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    })
  }
  const style = {
    input: 'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring',
    btn: 'px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400'
  }
  return (
    <div className='grid grid-cols-12'>
      <div className='bg-white shadow-md col-start-5 col-end-9 p-4 mb-24'>
        {
          alert && <Alert setAlert={setAlert} message={message}/>
        }
        <p className='text-xl font-medium my-2'>Form Pendaftaran Afiliator</p>
        <div className='grid grid-cols-1 gap-6 mt-4'>
          <div>
            <label htmlFor="name" className='text-gray-700'>Name :</label>
            <input type="text" id='name' className={style.input} value={initialValue.name} onChange={handlerInputName}/>
          </div>
          <div>
            <label htmlFor="username" className='text-gray-700'>Username : </label>
            <input type="text" id='username' className={style.input} value={initialValue.username} onChange={handlerInputUsername}/>
          </div>
          <div>
            <label htmlFor="password" className='text-gray-700'>Password : </label>
            <input type="text" id='password' className={style.input} value={initialValue.password} onChange={handlerInputPassword}/>
          </div>
          <div>
            <label htmlFor="confirmPassword" className='text-gray-700'>Confirm Password : </label>
            <input type="text" id='confirmPassword' className={style.input} value={initialValue.confirmPassword} onChange={handlerConfirmPassword}/>
          </div>
          <div className="flex justify-end mt-6">
            <button className={style.btn} onClick={onSubmitClick}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daftarafiliator;
