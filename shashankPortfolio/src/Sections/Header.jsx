import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import {IoCloseSharp} from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import logo from '../assets/logo.jpg'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuLinks = [ 
        { name: 'Home', to:'home'},
        { name: 'About', to:'about'},
        { name: 'Services', to:'services'},
        { name: 'Projects', to:'projects'},
        { name: 'Contact', to:'contact'},
        
    ];

    useEffect(() => {
        if(menuOpen) {
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden')
        }
        return () => {
            document.body.classList.remove('overflow-hidden');

        }
    }, [menuOpen]);
  return (
    <header className='bg-themeblack py-4 lg:px-[100px] px-7 fixed top-0 left-0 w-full z-50'>

        <div className='flex justify-between items-center'>
           
            <div className='text-themered font-bold text-left text-4xl'>SS<span className='text-white'></span>.
            </div>

            <button className='text-white text-2xl md:hidden' onClick={() => setMenuOpen(!menuOpen)} >
                   {menuOpen ? <IoCloseSharp /> :<FaBars />}
            </button>

            <nav className='hidden  md:block'>
                <ul className='flex space-x-10 text-lg font-poppins text-white'>
                    {menuLinks.map((Links) => 
                    <li key={Links.to}>
                            <Link to={Links.to} smooth={true} duration={500} className={`cursor-pointer ${Links.name === 'Home' ? 'text-themered':'hover:text-themered transition-colors'}`}>
                                {Links.name}
                            </Link>
                    </li>
                    )}
                </ul>

            </nav>

        </div>
        {/* <div className={`fixed top-0 h-full bg-black text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
         transition-transform duration-300 ease-in-out z-40 flex items-center justify-center overflow-y-hidden`}>
            <IoCloseSharp className='fixed top-3 right-6 text-3xl cursor-pointer' onClick={() => setMenuOpen(false)}/>
                <ul className='flex flex-col space-y-6 text-2xl text-center'>
                    {menuLinks.map((Links) =>  (<li key={Links.to}>
                        <Link onClick={ () => setMenuOpen(false)} to={Links.to} smooth={true} duration={500} className={`cursor-pointer
                             ${Links.name ==='Home' ? 'text-themered': 'hover:text-themered transitions-colors font-poppins'}`} >
                            {Links.name}
                        </Link>
                    </li>))}

                </ul>

        </div> */}
    </header>
  )
}

export default Header
