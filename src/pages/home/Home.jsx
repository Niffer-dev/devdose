import React from 'react'
import Blogcards from '../../Components/blogs/blogcards'

const Home = () => {
    const vvv = [1,5,7]
  return (
    <>
        <section className='flex items-center justify-between px-[4rem] py-[1rem] bg-slate-400'>
            <h2 className='text-[25px]'>Blogs</h2>
            <p className='text-[20px]'> {new Date().toLocaleDateString()}</p>
        </section>
        <div className='grid grid-cols-3 gap-10 px-[40px]  py-[20px]'>
            {
                vvv.map(blog => (
                    <Blogcards />
                ))
            }
        </div>
    </>
  )
}

export default Home