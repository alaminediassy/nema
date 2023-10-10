import Image from 'next/image';
import React, { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai"
import iconWeb from "../public/images/store/icon1.svg"
import image_one from "../public/images/store/projet1.png"
import image_two from "../public/images/store/projet2.png"

const AccordionService = ({icon, title, description, image1, image2}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <>
    <div className='bg-buttonColor rounded-3xl text-sm md:pt-6 pt-6 md:pb-6 pb-4  pr-6 pl-6 cursor-pointer '
      onClick={() => setIsActive(!isActive)}
    >
      <div className='flex xl:items-center flex-col xl:flex-row'>
        <div className='flex flex-row w-full xl:w-1/2'>
            <div className='text-xl pr-10 xl:pr-0 xl:w-1/3 font-bold text-textOrange'>
                {icon}
            </div>
            <div className='text-white xl:w-2/3 text-2xl w right-0' >
                {title}
            </div>
        </div>
        <div className='flex xl:items-center w-full xl:w-1/2'>
            <div className='text-lg text-white/80 pt-6'>
                {description}
            </div>
            <div className='flex cursor-pointer font-bold xl:w-1/3 md:pl-20'>
                {isActive ? <AiOutlineUp/> : <AiOutlineDown/>}
            </div>
        </div> 
          
      </div>
      {isActive && 
        <div className='flex gap-2'>
            <div> {image1} </div>
            {/* <div> {image2} </div> */}
        </div>
    }
    </div>
      
    </>
  )
}

export default AccordionService
