import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo-fidyou.png';


const Header = () => {
  return (
    <div className='flex justify-around items-center p-5 bg-black'>
        
        <div>
         <a href='/'>  <img src={Logo} alt="logo_fidyou" className='w-[10%]' /> </a> 
        </div>

        <div className='mr-4'>
            <nav className='flex text-white gap-4'>
                 <NavLink to="/apropos" className="whitespace-nowrap">A propos</NavLink>
                 <NavLink className="whitespace-nowrap">Mon profil</NavLink>
                 <NavLink to="/inscription" className="whitespace-nowrap">S'inscrire</NavLink>
                 <NavLink to="/promos" className="whitespace-nowrap">Promos</NavLink>
                 <NavLink to="/login" className="whitespace-nowrap">Login</NavLink>
                 <NavLink to="/help" className="whitespace-nowrap">Help</NavLink>
            </nav>
        </div>

        <div className='flex gap-4 text-white cursor-pointer'>
            <FaFacebookF />
            <FaTwitter />
        </div>
    </div>
  )
}

export default Header