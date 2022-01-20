import React, { useState, useEffect } from 'react';

const Login = () => {
  const [initialValue, setInitialValue] = useState({
    username: '',
    password: ''
  });
  const handlerInputUsername = (e) => {
    setInitialValue({...initialValue, username: e.target.value})
  }
  const handlerInputPassword = (e) => {
    setInitialValue({...initialValue, password: e.target.value})
  }
  const style = {
    input: 'block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring',
    btn: 'px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400'
  }
  return (
    <div className='grid grid-cols-12'>
      <div className='col-start-5 col-end-9 bg-white shadow-md p-4'>
        <p className='text-xl font-medium'>Login Afiliator</p>
        <div className='grid grid-cols-1 gap-6 mt-4'>
          <div>
            <label htmlFor="username" className='text-gray-700'>Username :</label>
            <input type="text" className={style.input} value={initialValue.username} onChange={handlerInputUsername}/>
          </div>
          <div>
            <label htmlFor="password" className='text-gray-700'>Password :</label>
            <input type="password" className={style.input} value={initialValue.password} onChange={handlerInputPassword}/>
          </div>
          <div className='flex justify-end mt-3'>
            <button className={style.btn}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
