import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcards = ({blog}) => {

    const navigate = useNavigate ()

  return (
        <div className= 'text-white bg-[#030712] px-[20px] py-[20px] rounded-3xl cursor-pointer' onClick={() => navigate(`/blogdetails/${blog._id}`)}>
            <p className='text-[20px] px-[20px]'>{new Date(blog.createdAt).toLocaleString()}</p>
            <h2 className='text-[20px] font-bold px-[20px] py-[25px]'>{blog.title}</h2>
            <p className='text-[15px] px-[20px]'>{blog.description}</p>
        </div> 
    )
}

export default Blogcards