import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcards = () => {

    const navigate = useNavigate ()

  return (
        <div className= 'text-white bg-[#030712] px-[20px] py-[20px] rounded-3xl cursor-pointer' onClick={() => navigate('/BlogDetails')}>
            <p className='text-[20px] px-[20px]'>2024-02-06</p>
            <h2 className='text-[20px] font-bold px-[20px] py-[25px]'>Frank post.....</h2>
            <p className='text-[15px] px-[20px]'>In summary, the optional chaining operator is a way to safely navigate through potentially missing properties or methods in a chain of property accesses. It's particularly useful when dealing with complex data structures or when you want to ensure that your code doesn't break if an expected property or method is not present.</p>
        </div> 
    )
}

export default Blogcards