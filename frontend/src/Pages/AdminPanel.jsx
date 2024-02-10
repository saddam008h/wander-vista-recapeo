import React from 'react'
import ButtonGroup from '../components/ButtonGroup'
 


const AdminPanel = () => {
  return (
    <div >
      <h1 className='text-center text-xl bg-black text-white py-5 px-5 '>Admin Panel</h1>

      {/*  Buttons Section   */}
      <div  className='mt-5 text-center'>
        <ButtonGroup />
      </div>

    </div>
  )
}

export default AdminPanel
