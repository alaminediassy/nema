import React from 'react'
import Link from 'next/link';
import { useRef, useState } from "react";
import { useRouter } from 'next/router';
import { MdOutlineClose } from "react-icons/md";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);

  function handleClick(e:any) {
    if (e.target.contains(ref.current)) {
        // do somethink with myref.current
        setShowMenu(false)
    }
  }
  const router = useRouter();
 
  return (
    <div>
      <div className="w-full h-20  lg:h-[12vh] sticky top-0 z-50 bg-bodyColor xl:bg-transparent">
          <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between cursor-pointer">
              <h1 className='text-textOrange font-semibold pl-6 text-3xl'>Nema.</h1>
              <div
              onClick={() => setShowMenu(true)}
              className='pr-6'
              >
                <svg 
                ref={(node) => (ref.current = node)}
                onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
          </div>
          {showMenu && (
            <div
            ref={(node) => (ref.current = node)}
            onClick={handleClick}
            className=" fixed top-0 h-screen  w-full bg-bodyColor"
            >
                <div className='w-full   overflow-hidden scrollbarHide bg-bodyColor flex flex-col items-start px-4 py-10 relative'>
                  <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-5xl text-white cursor-pointer right-10 hover:text-textOrange/70 absolute"
                  />
                  <div className='pt-20 w-full text-center text-3xl cursor-pointer uppercase'>
                    <Link href="/">
                      <motion.div 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                      className=' w-full p-8 hover:bg-gradient-to-r from-textOrange cursor-pointer duration-300'>Home</motion.div>
                    </Link>
                    <Link href="/About">
                      <motion.div 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                      className=' w-full p-8 hover:bg-gradient-to-r from-textOrange cursor-pointer duration-300'>About us</motion.div>
                    </Link>
                    <Link href="/">
                      <motion.div 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                      className=' w-full p-8 hover:bg-gradient-to-r from-textOrange cursor-pointer duration-300'>Our services</motion.div>
                    </Link>
                    <Link href="/">
                      <motion.div 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                      className=' w-full p-8 hover:bg-gradient-to-r from-textOrange cursor-pointer duration-300'>Our projects</motion.div>
                    </Link>
                  </div>
                </div>
            </div>
          )}
        </div>
    </div>
    </div>
  )
}

export default Navbar;