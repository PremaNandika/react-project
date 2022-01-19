import React,{ useEffect } from 'react'
import Api from '../store/api';
export default function ConfirmationModal({closeModal, passedId}) {
  const deleteData = async () => {
    await Api.delete(`/mahasiswa/${passedId}`)
    closeModal(false) 
  }
  useEffect(() => {
    console.log(passedId);
  }, []);
  return (
    <div className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center'>
      <div className='bg-white w-1/4 p-3 rounded-md transition'>
        <div className='flex justify-between items-center'>
          <h4 className='text-lg font-medium'>Confirmation</h4>
          <h3 className='text-lg font-medium cursor-pointer hover:text-xl hover:drop-shadow-md' onClick={() => {closeModal(false)}}>X</h3>
        </div>
        <div className='mt-2'>
          <div>
            Are you sure ?
          </div>
        </div>
        <div className='flex justify-end space-x-1'>
          <button className=' px-2 py-1 rounded-md' onClick={() => {closeModal(false)}}>Cancel</button>
          <button className='bg-red-500 hover:bg-red-400 px-2 py-1 rounded-md text-white' onClick={(e) => {deleteData()}}>Yes</button>
        </div>
      </div>
        
    </div>
  )
}
