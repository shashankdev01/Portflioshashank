import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
 
import { FaHtml5 } from "react-icons/fa";
import {FaArrowRightLong} from 'react-icons/fa6'
 
 
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
useEffect( () => {
    AOS.init({
        duration:800,
        delay: 200,
        once: false,

    })
 }, [])

  return (
    <div id='services' className='w-full lg:px-[200px] px-8 lg:py-[100px] py-[400px] h-full flex lg:flex-row flex-col justify-between items-start gap-[100px]' >
      <div className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'>
        <h1 data-aos='zoom-in' className='text-4xl uppercase text-white font-semibold font-poppins'>Skiils & Expertise</h1>
        <div data-aos='zoom-in' className='bg-themered h-[3px] w-20'></div>
        <p data-aos='zoom-in' data-aos-delay='400' className='text-gray-300 text-lg fonr-popins'>Open to challenges and driven to build meaningful, scalable applications</p>

       

      </div>
      <div className='lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-center itmes-center items-start lg:gap-20 gap-12'>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-6'>
                <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                    <FaReact  className='fill-white size-9'/>
                </div>
                <div className='flex flex-col jjustify-center itmes-start gap-3'>
                    <h1 className='text-white font-semibold text-[26px]'> React js.</h1>
                    <p className='text-gray-300 text-[17px] font-poppins'>Helps in building SAP applications and & reusable components</p>
                    
                </div>
                <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details<span><FaArrowRightLong /> </span></button>
            </div>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-6'>
                <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                    <FaJs  className='fill-white size-9'/>
                </div>
                <div className='flex flex-col jjustify-center itmes-start gap-3'>
                    <h1 className='text-white font-semibold text-[26px]'> JavaScript</h1>
                    <p className='text-gray-300 text-[17px] font-poppins'> Provide building for dynamic web pages and logic building </p>
                    
                </div>
                <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details<span><FaArrowRightLong /> </span></button>
            </div>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-6'>
                <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                    <IoLogoNodejs className='fill-white size-9'/>
                </div>
                <div className='flex flex-col jjustify-center itmes-start gap-3'>
                    <h1 className='text-white font-semibold text-[26px]'>Node js.</h1>
                    <p className='text-gray-300 text-[17px] font-poppins'> Helps in Building Web Servers & APIs and real-time applications </p>
                    
                </div>
                <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details<span><FaArrowRightLong /> </span></button>
            </div>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-6'>
                <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                    <RiTailwindCssLine className='fill-white size-9'/>
                </div>
                <div className='flex flex-col jjustify-center itmes-start gap-3'>
                    <h1 className='text-white font-semibold text-[26px]'>Tailwindd CSS</h1>
                    <p className='text-gray-300 text-[17px] font-poppins'> Tailwind CSS framework that lets you style your web pages directly in your
                         HTML or JSX using predefined classes. It helps you build modern, responsive UIs quickly and consistently. </p>
                    
                </div>
                <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details<span><FaArrowRightLong /> </span></button>
            </div>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-6'>
                <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                    <FaHtml5 className='fill-white size-9'/>
                </div>
                <div className='flex flex-col jjustify-center itmes-start gap-3'>
                    <h1 className='text-white font-semibold text-[26px]'> HTML</h1>
                    <p className='text-gray-300 text-[17px] font-poppins'>HTML is the standard language used to create and structure content on the web. It forms the skeleton of every website. </p>
                    
                </div>
                <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details<span><FaArrowRightLong /> </span></button>
            </div>
            <div data-aos='zoom-in' className='flex flex-col justify-center items-start gap-6'>
                <div className='bg-themered rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
                    <FaGithub className='fill-white size-9'/>
                </div>
                <div className='flex flex-col jjustify-center itmes-start gap-3'>
                    <h1 className='text-white font-semibold text-[26px]'>GitHub</h1>
                    <p className='text-gray-300 text-[17px] font-poppins'> GitHub is a cloud-based platform for version control and collaboration that allows developers to store, track, and manage their code using Git. It’s widely used for open-source projects, team collaborations,
                        . </p>
                    
                </div>
                <button className='text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details<span><FaArrowRightLong /> </span></button>
            </div>
          
            
        </div>
    </div>
  )
}

export default Services
