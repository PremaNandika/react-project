import React, { useEffect, useState } from 'react'
import ConfirmationModal from '../../components/ConfirmationModal'
import FormModal from '../../components/FormModal'
import Api from '../../store/api'
export default function DataManagement() {
  const [ mahasiswa, setMahasiswa ] = useState([])
  const [ modal, setModal ] = useState(false)
  const [ confirmationModal, setConfirmationModal ] = useState(false)
  const [ passedId, setPassedId ] = useState(null)
  const [ passedData, setPassedData ] = useState(null)
  const retriveData = async () => {
    const res = await Api.get("/mahasiswa")
    return res.data
  }
  const getAllMahasiswa = async () => {
    const allMahasiswa = await retriveData()
    if (allMahasiswa) {
      setMahasiswa(allMahasiswa)
    }
  }
  const editBtnHandler = (e, data) => {
    setPassedData(data)
    setModal(true)
  }
  const deleteBtnHandler = (e, id) => {
    setPassedId(id)
    setConfirmationModal(true)
  }
  useEffect(() => {
    console.log(modal, confirmationModal);
    if (modal == false && confirmationModal == false) {
      setPassedData(null)
      setPassedId(null)
      getAllMahasiswa()    
    }
  }, [modal, confirmationModal]);
  const style = {
    btnAdd: 'px-6 py-1 m-2 text-white transition-colors duration-200 rounded-md transform bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400',
    btnEdit: 'px-3 py-1 mx-1 text-white transition-colors duration-200 rounded-md transform bg-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-blue-400',
    btnDel: 'px-3 py-1 mx-1 text-white transition-colors duration-200 rounded-md transform bg-red-500 hover:bg-red-400 focus:outline-none focus:bg-red-400',
  }
  return (
    <div className=''>
      <div className='bg-white shadow-md container mx-auto border rounded-md'>
        <button className={style.btnAdd} onClick={() => {
          setModal(true)
        }}>Add</button>
        <table className='border mx-auto w-full'>
          <thead>
          <tr>
            <th className='border p-2 bg-gray-200'>No</th>
            <th className='border p-2 bg-gray-200'>Nama</th>
            <th className='border p-2 bg-gray-200'>Email</th>
            <th className='border p-2 bg-gray-200'>Action</th>
          </tr>
          </thead>
          <tbody>
            {
              mahasiswa.map ((d,i) => (
                <tr className='whitespace-nowrap' key={i}>
                  <td className='border-b border-r text-center py-2'>{i+1}</td>
                  <td className='border-b border-r pl-5 py-2'>{d.firstName + " " + d.lastName}</td>
                  <td className='border-b border-r pl-5 py-2'>{d.email}</td> 
                  <td className='border-b text-center py-2'>
                    <button className={style.btnEdit} onClick={(e) => {editBtnHandler(e,d)}}>Edit</button>
                    <button className={style.btnDel} onClick={(e) => {deleteBtnHandler(e,d.id)}}>Delete</button>
                  </td>
                </tr>

              ))
            }
          </tbody>
        </table>
        {
          modal && <FormModal closeModal={setModal} passedData={passedData}/>
        }
        {
          confirmationModal && <ConfirmationModal closeModal={setConfirmationModal} passedId={passedId}/>
        }
      </div>
    </div>
  )
}
