import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' bg-[#030712] px-[3rem] py-[2rem] w-[50%] text-white mx-auto my-20 rounded-xl'>
        <div className='py-[25px]'>
            <h2 className='text-[20px] py-[5px]'>Email</h2>
            <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='username' />
        </div>
        <div>
            <h2 className='text-[20px] py-[3px]'>Username</h2>
            <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <div className='py-[25px]'>
            <h2 className='text-[20px] py-[3px]'>Password</h2>
            <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <div>
            <h2 className='text-[20px] py-[3px]'>Confirm Password</h2>
            <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <button type='submit' className='bg-slate-800 text-white w-[100%] py-[10px] mt-8 rounded-md hover:bg-red-700'>SIGN UP</button>
        <p className='py-[12px] flex justify-center text-[18px]'>Already have an account? <Link className='text-red-700 px-[5px] text-[18px]' to='/login'> LOGIN </Link></p>
    </div>
  )
}

export default Signup