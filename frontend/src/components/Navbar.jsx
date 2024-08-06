import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.jpg'; 

const Navbar = () => {
    const Links = [
        { name: "Beranda", link: "/" },
        { name: "Informasi", link: "/information" },
        { name: "Buku", link: "/book" },
        { name: "Sign In", link: "/login" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
                <div className='font-bold text-lg cursor-pointer flex items-center gap-1'>
                    <img src={logo} alt="Logo Perpustakaan" className='h-8 w-8' />
                    <span className='text-white ml-2'>PERPUSTAKAAN CAHAYA SMP NEGERI 1 BALIKPAPAN</span>
                </div>

                <div onClick={() => setOpen(!open)} className='absolute text-white right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link, index) => (
                            <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
