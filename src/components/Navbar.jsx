import React, {useRef} from 'react';
import {SlMenu} from "react-icons/sl";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {HiOutlineMoon, HiOutlineSun, HiXMark} from "react-icons/hi2";
import {useTheme} from "../context/ThemeContext.jsx";
import {navLinks} from "../constant/navlinks.js";

gsap.registerPlugin(useGSAP)

const Navbar = () => {
    const containerRef = useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const {toggleTheme, isDark} = useTheme()

    useGSAP(() => {
        gsap.from('.nav-item', {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.2,
        })
    }, {scope: containerRef})

    return (
        <div className={'flex items-center justify-between py-5'} ref={containerRef}>
            <div className={'flex items-center sm:gap-x-8 lg:gap-x-12'}>
                <h1 className={'text-2xl font-bold mr-4 font-primary'}>FinPay</h1>

                <ul className={' hidden md:flex sm:gap-x-3 lg:gap-x-4  items-center'}>

                    {
                        navLinks.map((link) => (

                                <a key={link.id} href={link.href} className={'nav-item hover:text-primary'}>{link.title}</a>
                            )
                        )
                    }

                </ul>
            </div>

            <div className={'hidden md:flex gap-x-4 items-center font-bold '}>
                <button
                    className={`px-4 py-1.5 rounded-lg text-primary dark:border-slate-400 dark:text-gray-300 border hover:translate-x-1 transition-transform transform duration-300 border-primary`}>Login
                </button>
                <button
                    className={`px-4 py-2 rounded-lg text-white bg-primary hover:bg-secondary transition-colors duration-300`}>
                    Sign up
                </button>
                <button
                    onClick={toggleTheme}
                    className={`size-10 flex items-center justify-center rounded-full text-white bg-base hover:bg-primary hover:dark:bg-secondary dark:bg-primary transition-colors duration-300`}>
                    {
                        isDark ? <HiOutlineSun size={20} className={`${isDark ? 'text-light' : "text-base"}`}/> :
                            <HiOutlineMoon size={20} className={`${isDark ? 'text-base' : "text-light"}`}/>
                    }
                </button>
            </div>

            {/* Mobile Tigger*/}
            <div className={'md:hidden cursor-pointer'}>
                <SlMenu size={28} onClick={() => setIsOpen(true)}/>
            </div>

            {/* Mobile Menu*/}
            <div className={`flex flex-col gap-y-4 bg-base dark:bg-primary text-light w-1/2 fixed top-0 right-0 h-full p-4  z-[100] transform  duration-300 
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <span
                    onClick={() => setIsOpen(false)} className={'self-end my-4'}>
                    <HiXMark size={24} className={'text-gray-300 hover:text-red-500 cursor-pointer'}/>
                </span>

                <ul className={'md:hidden flex flex-col gap-y-4'}>
                    {
                        navLinks.map((link) => (
                            <a key={link.id} href={link.href} className={'bg-[#0B3A4F] p-2 rounded-md'}>{link.title}</a>
                        ))
                    }
                </ul>

                {/*Buttons*/}
                <div className={'flex md:hidden flex-col gap-y-4 items-center font-bold  mt-12'}>
                    <button
                        className={`px-4 py-1.5  w-full rounded-lg text-primary dark:text-light dark:border-secondary border hover:translate-x-1 transition-transform transform duration-300 border-primary`}>Login
                    </button>
                    <button
                        className={`px-4 py-2 w-full  rounded-lg text-white bg-primary dark:bg-base hover:bg-secondary transition-colors duration-300`}>
                        Sign up
                    </button>
                    <button
                        onClick={toggleTheme}
                        className={`w-full py-2 flex items-center justify-center rounded-full text-white bg-base hover:bg-primary hover:dark:bg-secondary dark:bg-base transition-colors duration-300`}>
                        {
                            isDark ? <HiOutlineSun size={20} className={`${isDark ? 'text-light' : "text-base"}`}/> :
                                <HiOutlineMoon size={20} className={`${isDark ? 'text-base' : "text-light"}`}/>
                        }
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;