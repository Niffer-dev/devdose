import React, { useState } from 'react'

const User = () => {

  const tabArray = ["Add a post", "All Posts", "Account Settings"]
  const [activeTab, setActiveTab] = useState()
  const [addAPost, setAddAPost] = useState(true)
  const [allPost, setAllPost] = useState(false)
  const [acctSettings, setAcctSettings] = useState(false)

  function handleTabChange(tab){
    setActiveTab(tab)
    if(activeTab === "Add a post"){
      setAddAPost(true)
      setAcctSettings(false)
      setAllPost(false)
    }

    if(activeTab === "All Posts"){
      setAddAPost(false)
      setAcctSettings(false)
      setAllPost(true)
    }

    if(activeTab === "Account Settings"){
      setAddAPost(false)
      setAcctSettings(true)
      setAllPost(false)
    }
  }

  return (
    <div className='flex flex-col bg-[#030712] px-[5rem] py-[3rem] w-[50%] text-white mx-auto my-20 rounded-xl shadow-slate-700 shadow-inner'>
      <div>
        <h2 className='font-bold text-[35px] py-3'>Dashboard</h2>
      </div>
      <div className='flex py-[1rem] gap-[30px] text-[20px]' style={{borderTop: '1px solid white'}}>
        {
          tabArray.map(tab => (
            <p className=' cursor-pointer' onClick={() => handleTabChange(tab)} >{tab}</p>
          ))
        }
      </div>
      {
        addAPost && 
        <>
          <div className='py-[20px]' style={{borderTop: '1px solid white'}}>
            <input type="text" className='px-[5px] py-[8px] w-[105%] text-black outline-none rounded-md' placeholder='add a title'/>
          </div>
          <div>
            <textarea placeholder='create a post' className='outline-none px-[5px] text-black rounded-md' cols="70" rows="9"></textarea>
          </div>
          <button className='bg-slate-800 text-[#030712] m-auto w-[90%] py-[8px] mt-3 hover:bg-red-700'>POST</button>
        </>
      }
      {
        allPost && 
        <div>
          <div>
            <h2>FRANK POST...</h2>
            <div>
              <button>EDIT</button>
              <button>DELETE</button>
            </div>
          </div>
          <button className='bg-slate-800 text-[#030712] m-auto w-[90%] py-[8px] mt-3 hover:bg-red-700'>POST</button>
        </div>
      }
      {
        acctSettings && 
        <>
          <div style={{borderTop: '1px solid white'}}>
              <h2 className='text-[20px] pt-[24px] pb-[3px]'>Username</h2>
              <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
          </div>
          <div className='py-[25px]'>
              <h2 className='text-[20px] py-[3px]'>Password</h2>
              <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
          </div>
          <div>
              <h2 className='text-[20px] py-[3px]'>New Password</h2>
              <input type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
          </div>
        </>
      }
    </div>
  )
}

export default User