import React from 'react'
import {FiChevronRight} from "react-icons/fi"

const GetinTouch = () => {
  return (
    <div className="max-w-contentContainer mx-auto pb-20 flex flex-col mdl:px-10 xl:px-4">
      <div className='text-[50px] xl:text-[80px] font-bold'>
        <div className='w-full bg-buttonColor rounded-t-3xl xl:rounded-br-3xl'> 
            <h1 className='xl:pl-8 sm:p-5 pt-4 xl:text-start text-center'>Let&apos;s <span className='text-textOrange'> build </span> and <span className='text-textOrange'> scale </span> it !</h1>
        </div>
      </div>
      <div>
      <div className='flex flex-col xl:flex-row justify-between items-center bg-buttonColor rounded-bl-3xl xl:rounded-tr-3xl rounded-br-3xl xl:pl-9'>
        <p className='text-xl sm:pt-4 font-regular text-white/80'>hello@nema.sn</p>
        <div className="hidden xl:block border-b-2 border-textOrange w-1/2"></div>
        <div className='xl:pt-0 pt-10 xl:pb-2 pb-4'>
            <button className='flex gap-4 sm:border-8 border-bodyColor bg-textOrange rounded-3xl sm:w-full text-xl font-semibold pt-8 pb-8 pr-20 pl-20 xl:pr-10 xl:pl-10'>
                Get in touch
                <FiChevronRight className="text-2xl text-white"/>
            </button>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default GetinTouch
