import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogDetails = () => {

    const navigate = useNavigate ()

  return (
    <div>
        <button className='text-white bg-[#030712] px-[22px] py-[12px] mt-[2rem] ml-[2rem] rounded-lg' onClick={() => navigate('/')}>BACK</button>
        <div className= 'text-white bg-[#030712] px-[20px] py-[20px] flex flex-col justify-center w-[50%] m-auto mt-[5rem] rounded-xl cursor-pointer'>
            <p className='text-[20px] px-[20px]'>2024-02-06</p>
            <h2 className='text-[22px] font-bold px-[20px] py-[15px]'>Frank post.....</h2>
            <p className='text-[15px] px-[20px]'>In summary, the optional chaining operator is a way to safely navigate through potentially missing properties or methods in a chain of property accesses. It's particularly useful when dealing with complex data structures or when you want to ensure that your code doesn't break if an expected property or method is not present.</p>
        </div> 
    </div>
  )
}

export default BlogDetails