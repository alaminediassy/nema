import React from 'react'
import Link from 'next/link';
import { useRef, useState } from "react";
import { useRouter } from 'next/router';

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
    <div className='mb-10'>
        <div className='flex items-center max-w-container justify-between lg:p-5 sm:p-2 lg:mx-10 font-bodyFont'>
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
          
        </div>
    </div>
  )
}

export default Navbar;