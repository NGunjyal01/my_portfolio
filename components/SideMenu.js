'use client'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu,RxCross1  } from "react-icons/rx";
import Link from 'next/link';


const SideMenu = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        // Prevent scrolling
        if(isOpen){
          document.body.style.overflow = 'hidden';
        }
        else{
          document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <div className="relative md:hidden">
            <button onClick={openMenu} className="absolute right-5 hover:text-blue-500 duration-300">
                <RxHamburgerMenu size={25}/>
            </button>
            <AnimatePresence>
                {isOpen && (<motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="fixed inset-0 w-full h-full bg-white z-50 flex flex-col justify-start items-start">
                        <button onClick={closeMenu} className="absolute right-5 hover:text-blue-500 duration-300 pt-10">
                            <RxCross1 size={25}/>
                        </button>
                        <div className='flex flex-col gap-5 text-center font-heading text-xl font-semibold mt-[50%] sm:mt-[35%] ml-[40%]'>
                            <Link href='#home-section' onClick={closeMenu} className='hover:text-blue-500 duration-300'>Home</Link>
                            <Link href='#about-section' onClick={closeMenu} className='hover:text-blue-500 duration-300'>About</Link>
                            <Link href='#projects-section' onClick={closeMenu} className='hover:text-blue-500 duration-300'>Projects</Link>
                            <Link href='#contact-section' onClick={closeMenu} className='hover:text-blue-500 duration-300'>Contact</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SideMenu;
