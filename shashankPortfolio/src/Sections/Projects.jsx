import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {FaArrowRightLong} from 'react-icons/fa6'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
const Projects = () => {

    useEffect( () => {
        AOS.init({
            duration:800,
            delay: 200,
            once: false,
        })
     }, [])
  return (
    <div id='projects' className=' w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
        <h1 data-aos='zoom-in'  className='text-4xl uppercase text-white font-poppins font-semibold'>
            Projects
        </h1>
        <div data-aos='zoom-in' data-aos-delay='200' className='bg-themered h-[3px] w-20'></div>
        <p data-aos='zoom-in' data-aos-delay='400' className='text-gray-300 text-lg text-center font-poppin lg:w-[70%] w-full '>
        In my portfolio, you'll find a diverse range of projects showcasing my abilities 
        in frontend developre. These projects include web applications and tools built using 
        modern technologies like React.js, Node.js, MongoDB, and Tailwind CSS. From e-commerce platforms and real-time 
        data applications to personal projects with unique features, each project demonstrates my strong foundation in building responsive,
         user-friendly, and scalable web applications. Whether it’s integrating APIs, ensuring cross-platform compatibility, or creating reusable components 
         for better maintainability, I always aim to deliver efficient and clean solutions. Explore each project to see how I approach problem-solving, user experience, 
         and design, ensuring each application is not only functional but also engaging.
        </p>

        {/* projet  */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 mt-20 px-4 lg:px-0">
  
  {/* Left: Description Section */}
  <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-6">
    <div className="flex flex-col justify-center items-start gap-4">
      <h1
        data-aos="zoom-in"
        data-aos-delay="600"
        className="text-white font-semibold text-[28px] lg:text-[32px] leading-tight"
      >
        Personal Portfolio
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="800"
        className="text-gray-300 text-[16px] leading-relaxed font-poppins"
      >
       In this section, I showcase some of the projects I've worked on, demonstrating my skills in web development
        and problem-solving. Each project is crafted with attention to detail, using modern technologies like React, Node.js,
         and Tailwind CSS to create responsive, user-friendly interfaces. From full-stack web applications to simple, functional components,
          these projects highlight my ability to adapt to various challenges and deliver quality results. Feel free to explore and get a deeper
           insight into how I approach development and design.
      </p>
    </div>
    <button
      data-aos="zoom-in"
      data-aos-delay="1000"
      className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2 text-xl"
    >
      See Details <FaArrowRightLong />
    </button>
  </div>

  {/* Right: Image Section */}
  <div
    data-aos="zoom-in"
    data-aos-delay="1200"
    className="lg:w-1/2 w-full flex justify-center items-center"
  >
    <div className="relative w-full max-w-[600px]">
      <div className="bg-[#2f2f2f] w-full h-[200px] lg:h-[400px] rounded-lg absolute top-2 -left-4" />
      <img
        src={project1}
        alt="project"
        className="relative z-10 w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

<div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-10 mt-20 px-4 lg:px-0">
  
  {/* Left: Description Section */}
  <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-6">
    <div className="flex flex-col justify-center items-start gap-4">
      <h1
        data-aos="zoom-in"
        data-aos-delay="600"
        className="text-white font-semibold text-[28px] lg:text-[32px] leading-tight"
      >
        E-Book Store Web Application
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="800"
        className="text-gray-300 text-[16px] leading-relaxed font-poppins"
      >
        The E-Book Store Web Application is a full-stack project developed using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to browse, search, and purchase eBooks with ease. It features secure user authentication through a Sign-Up/Sign-In process, state management with React's useState, useEffect, and Redux for handling dynamic data, and a fully responsive UI built with Tailwind CSS. The goal was to create a seamless user experience, with reusable components to enhance scalability and maintainability.


      </p>
    </div>
    <button
      data-aos="zoom-in"
      data-aos-delay="1000"
      className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2 text-xl"
    >
      See Details <FaArrowRightLong />
    </button>
  </div>

  {/* Right: Image Section */}
  <div
    data-aos="zoom-in"
    data-aos-delay="1200"
    className="lg:w-1/2 w-full flex justify-center items-center"
  >
    <div className="relative w-full max-w-[600px]">
      <div className="bg-[#2f2f2f] w-full h-[200px] lg:h-[400px] rounded-lg absolute top-2 -left-4" />
      <img
        src={project2}
        alt="project"
        className="relative z-10 w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

<div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 mt-20 px-4 lg:px-0">
  
  {/* Left: Description Section */}
  <div className="lg:w-1/2 w-full flex flex-col justify-center items-start gap-6">
    <div className="flex flex-col justify-center items-start gap-4">
      <h1
        data-aos="zoom-in"
        data-aos-delay="600"
        className="text-white font-semibold text-[28px] lg:text-[32px] leading-tight"
      >
        Weather App
      </h1>
      <p
        data-aos="zoom-in"
        data-aos-delay="800"
        className="text-gray-300 text-[16px] leading-relaxed font-poppins"
      >
        The Weather App is a simple and intuitive application built with React 
        that provides real-time weather information based on user input. It fetches data 
        from the OpenWeather API, displaying key weather details like temperature, humidity, and weather 
        conditions in a clean, user-friendly interface. Designed to be fully responsive, the app adjusts seamlessly
         across devices using Tailwind CSS. The application also includes error handling for invalid city names and offers a smooth, 
         interactive experience with real-time updates, making it a useful tool for anyone needing quick access to weather forecasts.
      </p>
    </div>
    <button
      data-aos="zoom-in"
      data-aos-delay="1000"
      className="text-themered hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2 text-xl"
    >
       <a href='https://weatherapp-navy-six.vercel.app/'>See Details<FaArrowRightLong /></a>
    </button>
  </div>

  {/* Right: Image Section */}
  <div
    data-aos="zoom-in"
    data-aos-delay="1200"
    className="lg:w-1/2 w-full flex justify-center items-center"
  >
    <div className="relative w-full max-w-[600px]">
      <div className="bg-[#2f2f2f] w-full h-[200px] lg:h-[400px] rounded-lg absolute top-2 -left-4" />
      <img
        src={project1}
        alt="project"
        className="relative z-10 w-full h-full object-cover rounded-lg"
      />
    </div>
  </div>
</div>

        
        
      
    </div>
  )
}

export default Projects
