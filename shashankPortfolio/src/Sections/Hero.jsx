import React, { useEffect } from 'react'
import hero from '../assets/hero.jpg'
import design from '../assets/design.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
useEffect( () => {
    AOS.init({
        duration:800,
        delay: 200,
        once: false,

    })
 }, [])

  return (
    <div id= 'hero' className='w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px] h-fill flex lg:flex-row flex-col justify-between items-center gap-[100px]'>
            <div className='lg:w3/5 w-full flex flex-col justify-center items-start gap-8'>
                <h1 data-aos='zoom-in' className='text-themered lg:text-3xl text-xl font-semibold font-poppins'>
                     Hi! I'am Shashank singh
                </h1>

                <h2 data-aos='zoom-in' data-aos-delay='200' className=' text-white text-5xl font-semibold font-poppins'> Frontend developer </h2>
                <p data-aos='zoom-in' data-aos-delay='400' className='text-gray-300 lg:text-xl text-lg font-poppins'>
                With a solid foundation in HTML, CSS, JavaScript, and modern libraries like React.js and Tailwind CSS, I specialize in creating sleek, interactive user experiences. with expertise in web development and creating intuitive, user-friendly interfaces.. Over the past few years, I’ve worked on a variety of web applications—from landing pages to full-scale projects—focusing on performance, accessibility
                </p>
                <button data-aos='zoom-in' data-aos-delay='600' className='bg-themered hover:bg-white text-white hover:text-themered font-semiibold text-lg px-8 py-3 mt-5 font-poppins rounded-full '><a href='https://drive.google.com/file/d/1JsSMvmITZIyOtKJogSiywR8CfJUKG2dH/view'> My Resume</a> </button>
            </div>
            <div data-aos='zoom-in' data-aos-delay='600' className='lg:w-2/5 w-full relative'>
            
                <div className='bg-[#2f2f2f] lg:w-[400px] w-full lg:h[500px] h-[450px] rounded-lg absolute top-[30px] -left-[30px]'>
                        
                </div>
                <img src={hero} alt='hero image' className='lg:w-[500px] w-full lg:h-[500px] h-[450px] rounded -lg relative z-20'/>
                        <img src={design} alt='design im' className='absolute -top-7 -right-7 rounded-lg z-10'/>
            </div>
      
    </div>
  )
}

export default Hero
