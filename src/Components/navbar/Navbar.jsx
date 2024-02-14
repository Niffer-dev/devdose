import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import React from 'react'
import Dropdonwnbox from '../userdropdown/Dropdonwnbox'

const Navbar = () => {

  const navigate = useNavigate()

  const [showDropDown, setShowDropDown] = useState(false)
  let user = JSON.parse(localStorage.getItem('user'))

  return (
    <nav className='bg-[#030712] text-white'>
      <div className='flex justify-between px-[7rem] py-[20px]'>
        <div>
          <h2 className='font-bold text-[28px] cursor-pointer' onClick={() => navigate('/')}>DevDose</h2>
        </div>
        <div className='flex gap-4 list-none justify-start'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='text-[22px] cursor-pointer'>
            {
              user ? <i class="ri-user-3-line"  onClick={() => setShowDropDown(!showDropDown)}></i> : <p onClick={() => navigate('/Login')}>Login</p>
            }
          </li>
        </div>
      </div>
      {
        showDropDown && <Dropdonwnbox setShowDropDown={setShowDropDown}/>
      }
      
    </nav>
  )
}

export default Navbar
