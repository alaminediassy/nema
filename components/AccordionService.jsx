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
    <div className='bg-buttonColor rounded-3xl text-sm  md:pt-4 pt-4 md:pb-4 pb-4  pr-6 pl-6 cursor-pointer hover:bg-white/20'
      onClick={() => setIsActive(!isActive)}
    >
      <div className='flex items-center'>
        <div className='flex flex-col xl:flex-row mx-auto items-center w-1/2'>
            <div className='text-xl w-full xl:w-1/4 font-bold text-textOrange'>
                {icon}
            </div>
            <div className='text-white text-xl font-semibold w-full xl:w-1/3' >
                {title}
            </div>
        </div>
        <div className='flex items-center w-[90%] xl:w-1/2'>
            <div className='text-sm font-thin text-white'>
                {description}
            </div>
            <div className='cursor-pointer font-bold w-1/3 pl-20 xl:pl-16'>
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
