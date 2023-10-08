import React from 'react'
import abstract from "../public/images/abstract.svg"
import phoenix from "../public/images/phoenix.svg"

import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-bodyColor max-w-container lg:p-5 sm:p-4 lg:mx-10 font-bodyFont'>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-2 items-center'>
          <h2 className='font-bold p-0 text-6xl xl:text-8xl lg:text-start text-center'>Creative</h2>
          <p className='text-lg text-white/80 mr-30 hidden xl:inline-flex'>
            We are Nema, Nema is a digital creative agency with serveral 
            services which focused on quality and innovations for your company
          </p>
        </div>
        <div className='flex pt-4 xl:flex-row items-center justify-between sm:flex-col'>
          <div className='flex-col hidden xl:inline-flex'>
            <span className='text-sm text-white/50'>creation</span>
            <p className='text-2xl font-semibold'>2023</p>
          </div>
          <div className='text-center'>
            <h2 className='font-bold p-0 text-6xl xl:text-8xl'>Digital Agency</h2>
          </div>
          <div className='xl:hidden text-center'>
            <p className='text-lg text-white/80 mr-30 pt-6'>
              We are Nema, Nema is a digital creative agency with serveral 
              services which focused on quality and innovations for your company.
            </p>
          </div>
          <div className='xl:pt-0 pt-10'>
            <button className=' bg-textOrange rounded-3xl sm:w-full text-xl font-semibold pt-8 pb-8 pr-20 pl-20 xl:pr-10 xl:pl-10'>Get in touch</button>
          </div>
        </div>
        <div className='flex xl:flex-row  flex-col my-16 gap-10 xl:gap-2 w-full'>
          <div className='xl:w-1/5 w-full '>
            <div className="rounded-3xl grid grid-cols-2 xl:grid-cols-1  gap-2">
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>About us</button>
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>Our services</button>
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>Our projects</button>
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>Clients says</button>
            </div>
          </div>
          <div className="xl:w-4/5 w-full h-96 xl:h-auto rounded-3xl bg-center bg-gray-400 bg-blend-multiply bg-[url('../public/images/web.jpg')] bg-cover">
              <div className='w-full text-center pt-20'>
              </div>
          </div>
        </div>
        <div className='flex w-full justify-between p-6'>
          <div>
            <Image className='w-36 gap-2 text-buttonColor' src={phoenix} alt='phoenix'/>
          </div>
          <div>
            <Image className='w-36 gap-2 text-buttonColor' src={abstract} alt='abstract'/>
          </div>
          <div>
            <Image className='w-36 gap-2 text-buttonColor' src={phoenix} alt='phoenix'/>
          </div>
          <div>
            <Image className='w-36 gap-2 text-buttonColor' src={abstract} alt='abstract'/>
          </div>
          <div>
            <Image className='w-36 gap-2 text-buttonColor' src={phoenix} alt='phoenix'/>
          </div>
        </div>
    </div>
  )
}
export default Header