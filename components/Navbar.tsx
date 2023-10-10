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
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor xl:bg-transparent px-4">
      <div className="max-w-container h-full mx-auto py-1 flex items-center justify-between cursor-pointer">
           <h1 className='text-textOrange font-semibold text-3xl'>Nema.</h1>
          <div
          onClick={() => setShowMenu(true)}
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
            className="absolute top-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end "
            >
                <div className='w-full h-full overflow-y-scroll scrollbarHide bg-bodyColor flex flex-col items-start px-4 py-10 relative'>
                  <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-white cursor-pointer hover:text-textOrange/70 absolute"
                  />
                <div className="flex flex-col text-center gap-7 pt-16">
                <ul className="flex flex-col w-full text-base gap-7">
                  <Link
                    href="/"
                    className="flex w-fullgap-1 font-medium text-white hover:text-textOrange
                    cursor-pointer duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>
                  <Link
                    href="/About"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Our services
                    </motion.li>
                  </Link>
                  <Link
                    href="/"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.1, delay: 0.3 }}
                    >
                      Our projects
                    </motion.li>
                  </Link>
                  <Link
                    href="/Contact"
                    className="flex items-center gap-1 font-medium text-textDark hover:text-textOrange cursor-pointer
                    duration-300 nav-link"
                  >
                    <motion.li
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Contact
                    </motion.li>
                  </Link>
                </ul>
              </div>
                </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar;