import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import { FaGithub } from "react-icons/fa";
import {  FaLinkedin, FaArrowUp } from 'react-icons/fa'
import { useEffect } from 'react'
import {Link} from 'react-scroll'

const Footer = () => {

    useEffect( () => {
        AOS.init({
            duration:800,
            delay: 200,
            once: false,
    
        })
     }, [])
  return (
    <div id='contact' className='bg-black w-full px-8 py-[80px] flex flex-col justify-center items-center gap-5'>
        <h1 data-aos='zoom-in' className='capitalize text-white text-[25px] font-semibold font-poppins'>Get in touch with Me</h1>
        <p data-aos='zoom-in' data-aos-delay='200' className='text-gray-300 text-[16px] text-center font-poppins leading-8'>
            Gurugram sec-49 <br></br>
            shashanksingh.dev01@gmail.com <br></br>
            +91-7290805689
        </p>

      <div  data-aos='zoom-in' data-aos-delay='400' 
      id='social-icons'
       className=' w-full flex justify-center items-center gap-3 mt-6'>
                <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
                      <a href='https://leetcode.com/u/shashankdev007/'> <SiLeetcode className='fill-white size-6'/></a> 
                </div>
                <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
                       <a href='https://www.instagram.com/shashank.4rajput/profilecard/?igsh=dzBybzMxc3VhcGF3'><RiInstagramFill className='fill-white size-6'/></a> 
                </div>
                <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
                       <a href='https://www.linkedin.com/in/shashanksingh-dev01/'><FaLinkedin className='fill-white size-6'/></a> 
                </div>
                <div className='bg-[#2f2f2f] hover:bg-themered rounded-full p-3 cursor-pointer'>
                       <a href='https://github.com/shashankdev01'><FaGithub className='fill-white size-6'/></a> 
                </div>
      </div>
      <p className='text-gray-300 text-[15px] text-center font-poppins leading-8'>Copyright 205, Inframe, All rights</p>
      <div id='icon-box' className='bg-themered text-white p-3 rounded-full hover:bg-black hover:text-themered cursor-pointer fixed bottom-7 right-7'>
       <Link to='hero' spy={true} offset={100} smooth={true}> 
               <FaArrowUp className='size-7'/>
       </Link>

      </div>
    </div>
  )
}

export default Footer
