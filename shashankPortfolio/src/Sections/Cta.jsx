import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Cta = () => {
useEffect( () => {
    AOS.init({
        duration:800,
        delay: 200,
        once: false,

    })
 }, [])

  return (
    <div className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between itmes-center gap-5'>
       <div data-aos='zoom-in' className='w-full bg-[#2f2f2f] flex lg:flex-row flex-col justify-between items-center lg:p-20 p-8'>
        <h1 className='text-white lg:w-[50%] w-full lg:text-[35px] leading-10 lg:text-left text-center font-semibold font-poppins'>Discover how design can help your business</h1>
        <a href='mailto:shashanksingh.dev01@gmail.com'><button className='bg-themered hover:bg-white tex-white hover:text-themered font-semibold lg:text-sm px-8 py-3 rounded-lg mt-5 font-poppins '>Contact Me</button></a> 
       </div>
    </div>
  )
}

export default Cta
