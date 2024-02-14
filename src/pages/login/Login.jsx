import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {


    function handleLogin(e){

        e.preventDefault()
        
        let userObj = {
            name:"Jeniffer",
            email:"Jeniffer@gmail.com"
        }

        localStorage.setItem('user', JSON.stringify(userObj))
    }



  return (
    <form onSubmit={handleLogin} className=' bg-[#030712] px-[3rem] py-[2rem] w-[50%] text-white mx-auto my-20 rounded-xl'>
        <div className='py-[25px]'>
            <h2 className='text-[20px] py-[5px]'>Email</h2>
            <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='username' />
        </div>
        <div>
            <h2 className='text-[20px] py-[3px]'>Password</h2>
            <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <button type='submit' className='bg-slate-800 text-white w-[100%] py-[10px] mt-8 rounded-md hover:bg-red-700'>LOGIN</button>
        <p className='py-[12px] flex justify-center text-[18px]'>Not logged in? <Link className='text-red-700 px-[5px] text-[18px]' to='/sign-up'> Signup </Link></p>
    </form>
  )
}

export default Login