import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='text-center px-[2rem] py-[5rem]'>
        <div>
            <h2 className='text-[30px] py-[5px]'>Welcome to DevDose</h2>
            <p className='text-[20px]'>Hey there! I'm Adenike, the voice behind this corner of the internet. With a passion for all things tech, I'm thrilled to be your guide through the ever-evolving world of technology. Armed with a keen eye for design and a love for clean, efficient code, I specialize in bringing digital visions to life. and have a passion for blogging. Here, we dive into the latest trends, share coding tips, and explore innovative breakthroughs that make our digital lives exciting..</p>
        </div>
        <div>
            <h2 className='text-[30px] pt-[20px]'>Why DevDose</h2>
            <p className='text-[20px] py-[10px]'>This blog is your go-to resource for staying in the know about the tech landscape. I believe in demystifying complex concepts and aim to make technology accessible for everyone.Whether you're a coding enthusiast looking for the latest frameworks or a tech-curious individual interested in future innovations, there's something here for you.</p>
        </div>
        <p className='text-[18px] py-[20px]'>Let's connect!</p>
        <p className='text-[18px]'>I love hearing from you. Share your thoughts with me on <Link><i class="ri-twitter-fill"></i></Link> and <Link><i class="ri-linkedin-box-fill"></i></Link> and let's journey together into the fascinating world of tech. Thanks for stopping by!</p>
        <div className='text-[30px] flex justify-center gap-10 py-[20px]'>
            <Link>
                <i class="ri-github-fill"></i>
            </Link>
            <Link>
                <i class="ri-twitter-fill"></i>
            </Link>
            <Link>
                <i class="ri-whatsapp-line"></i>
            </Link>
        </div>
    </div>
  )
}

export default About