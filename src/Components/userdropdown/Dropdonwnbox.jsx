import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dropdonwnbox = ({ setShowDropDown }) => {

    const navigate = useNavigate()
    

  return (
        <ul className='bg-slate-400 text-[#030712] w-[12%] px-[8px] py-[20px] text-center rounded-md flex flex-col gap-5 fixed right-5 top-12'>
            <li className='flex items-center gap-4 cursor-pointer' onClick={() => {
                navigate('/')
                setShowDropDown(false)
            }}>
                <i class="ri-user-line"></i>
                <p>Welcome</p>
            </li>
            <li className='flex items-center gap-4 cursor-pointer' onClick={() => {
                navigate('/dashboard')
                setShowDropDown(false)
                }}>
                <i class="ri-layout-masonry-fill"></i>
                <p>Dashboard</p>
            </li>
            <li className='flex items-center gap-4 cursor-pointer' style={{borderTop: '2px solid black'}}>
                <i class="ri-logout-box-line"></i>
                <p>Logout</p>
            </li>
        </ul>
  )
}

export default Dropdonwnbox