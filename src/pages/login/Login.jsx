import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    // const myError = () => {
    //     return data.message;
    // };


    async function handleLogin(e){
        e.preventDefault()

        const res = await fetch('https://mytaskz.onrender.com/login',{
            method:"POST",
            body: JSON.stringify({email:email, password:password}),
            headers: {
                "Content-Type":"application/json"
            }
        })

        const data = await res.json()
        if(!res.ok){
            setError(data.message)
        }

        if(res.ok){
            localStorage.setItem("user", JSON.stringify(data))
            navigate('/')
        }

        console.log(data.message)

        
    }



  return (
    <form onSubmit={handleLogin} className=' bg-[#030712] px-[3rem] py-[2rem] w-[50%] text-white mx-auto my-20 rounded-xl'>
        <div className='py-[25px]'>
            {
                error && <p className='flex bg-red-600 py-2 text-center'>{error}</p>
            }
            <h2 className='text-[20px] py-[5px]'>Email</h2>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='username' />
        </div>
        <div>
            <h2 className='text-[20px] py-[3px]'>Password</h2>
            <input onChange={(e) => setPassword(e.target.value)} type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <button type='submit' className='bg-slate-800 text-white w-[100%] py-[10px] mt-8 rounded-md hover:bg-red-700'>LOGIN</button>
        <p className='py-[12px] flex justify-center text-[18px]'>Not logged in? <Link className='text-red-700 px-[5px] text-[18px]' to='/sign-up'> Signup </Link></p>
    </form>
  )
}

export default Login