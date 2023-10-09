import React, { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from "react-icons/ai"

const AccordionComponent = ({term, title, desc}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <>
    <div className='bg-buttonColor rounded-3xl sm:w-full text-sm  md:pt-4 pt-4 md:pb-4 pb-4  pr-6 pl-6 cursor-pointer hover:bg-white/20'
      onClick={() => setIsActive(!isActive)}
    >
      <div className='flex items-center'>
          <div className='text-4xl w-1/3 font-bold text-textOrange'>
            {term}
          </div>
          <div className='text-textOrange text-md font-normal w-1/3' >
            {title}
          </div>  
          <div className='cursor-pointer font-bold w-1/3 pl-16'>
            {isActive ? <AiOutlineUp/> : <AiOutlineDown/>}
          </div>
      </div>
      {isActive && <div className='pt-4 text-sm font-thin'> {desc} </div>}
    </div>
      
    </>
  )
}
export default AccordionComponent;