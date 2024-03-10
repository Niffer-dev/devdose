import React, { useEffect, useState } from 'react'
import Blogcards from '../../Components/blogs/blogcards'

const Home = () => {
    const [blogs, setBlogs] = useState ([])

    async function fetchBlogs(){
        const res = await fetch('https://mytaskz.onrender.com/',{
            method:"GET",
        })

        const data = await res.json()
        setBlogs(data)
        console.log(data)
    }

    useEffect(() => {
        fetchBlogs()
    },[])



  return (
    <>
        <section className='flex items-center justify-between px-[4rem] py-[1rem] bg-slate-400'>
            <h2 className='text-[25px]'>Blogs</h2>
            <p className='text-[20px]'> {new Date().toLocaleDateString()}</p>
        </section>
        <div className='grid grid-cols-3 gap-10 px-[40px]  py-[20px]'>
            {
                blogs.map(blog => (
                    <Blogcards blog={blog}/>
                ))
            }
        </div>
    </>
  )
}

export default Home