import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    async function handleSignup(e){
        console.log(JSON.stringify({email:email, username:username, password:password}));
        e.preventDefault()

        if(!email || !password || !username || !confirmPassword){
            setError("Please fill in all fields")
            setTimeout(() => {
                setError("")
            },4000)
        }else if(password !== confirmPassword){
            setError("Both passwod fields must match")
            setTimeout(() => {
                setError("")
            },4000)
        }else{

            const res = await fetch('https://mytaskz.onrender.com/signup',{
                method:"POST",
                body: JSON.stringify({email:email, username:username, password:password, confirmpassword:confirmPassword}),
                headers: {
                    "Content-Type":"application/json"
                }
            })
    
            const data = await res.json()
            console.log(data);
            if(!res.ok){
                setError(data.message)
                setTimeout(() => {
                    setError("")
                },4000)
            }
    
            if(res.ok){
                localStorage.setItem("user", JSON.stringify(data))
                navigate('/')
            }
    
            console.log(res, data.message)
        }

    }


  return (
    <form onSubmit={handleSignup} className=' bg-[#030712] px-[3rem] py-[2rem] w-[50%] text-white mx-auto my-20 rounded-xl'>
            {
               error && <p className='bg-red-600 py-2 text-center'>{error}</p>
            }
        <div className='py-[25px]'>
            <h2 className='text-[20px] py-[5px]'>Email</h2>
            <input onChange={(e) => setEmail(e.target.value)} type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='username' />
        </div>
        <div>
            <h2 className='text-[20px] py-[3px]'>Username</h2>
            <input onChange={(e) => setUsername(e.target.value)} type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <div className='py-[25px]'>
            <h2 className='text-[20px] py-[3px]'>Password</h2>
            <input onChange={(e) => setPassword(e.target.value)} type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <div>
            <h2 className='text-[20px] py-[3px]'>Confirm Password</h2>
            <input onChange={(e) => setconfirmPassword(e.target.value)} type="text" className='px-[5px] py-[8px] w-[100%] text-black outline-none rounded-md' placeholder='*******' />
        </div>
        <button type='submit' className='bg-slate-800 text-white w-[100%] py-[10px] mt-8 rounded-md hover:bg-red-700'>SIGN UP</button>
        <p className='py-[12px] flex justify-center text-[18px]'>Already have an account? <Link className='text-red-700 px-[5px] text-[18px]' to='/login'> LOGIN </Link></p>
    </form>
  )
}

export default Signup