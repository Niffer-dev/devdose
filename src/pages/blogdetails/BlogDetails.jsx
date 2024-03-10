import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {

    const navigate = useNavigate ()
    const { id } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const [blog, setBlog] = useState()

    async function fetchEachBlogs(){
      const res = await fetch(`https://mytaskz.onrender.com/tasks/${id}`,{
          method:"GET",
          headers:{
            Authorization:`Bearer ${user.token}`
          }
      })

      const data = await res.json()
      setBlog(data)
      console.log(data)
  } 

    useEffect(() => {
      fetchEachBlogs()
  },[])

  return (
    <div>
        <button className='text-white bg-[#030712] px-[22px] py-[12px] mt-[2rem] ml-[2rem] rounded-lg' onClick={() => navigate('/')}>BACK</button>
        <div className= 'text-white bg-[#030712] px-[20px] py-[20px] flex flex-col justify-center w-[50%] m-auto mt-[5rem] rounded-xl cursor-pointer'>
            <p className='text-[20px] px-[20px]'>{blog && new Date(blog.createdAt).toLocaleString()}</p>
            <h2 className='text-[22px] font-bold px-[20px] py-[15px]'>{blog && blog.title}</h2>
            <p className='text-[15px] px-[20px]'>{blog && blog.description}</p>
        </div> 
    </div>
  )
}

export default BlogDetails