import Image from 'next/image'
import React from 'react'
import play from '../public/images/play.svg'

const About = () => {
  return (
    <div className='bg-bodyColor max-w-container lg:p-5 sm:p-4 lg:mx-10 '>
        <div className='flex xl:flex-row flex-col justify-between'>
            <div className='flex  xl:w-1/2 items-center gap-4 '>
                <div className='text-6xl flex flex-col font-bold'>
                    <h1>About <span className='text-textOrange'>Us</span></h1>
                </div>
                <div className='border-b-4 border-textOrange w-1/3'></div>
            </div>
            <div className='xl:w-1/2'>
                <p className='text-md font-normal text-white/50'>
                    We are branding agency team lead by callum and kate. We have
                    a talented  web developer, UI-UX Design and Branding.
                </p>
            </div>
        </div>
        <div className='flex xl:flex-row flex-col my-16 gap-2 w-full'>
            <div className="flex items-center justify-center xl:w-3/5-10 w-full h-96 xl:h-auto rounded-3xl bg-center bg-gray-400 bg-blend-multiply bg-[url('../public/images/portrait.jpeg')] bg-cover">
                <div className=''>
                    <Image className=''  src={play} alt='play'/>
                </div>
            </div>
          <div className='xl:w-2/5 w-full'>
            <div className="rounded-3xl flex xl:flex-col  gap-2">
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>About us</button>
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>Our services</button>
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>Our projects</button>
              <button className='bg-buttonColor hover:bg-white hover:text-buttonColor hover:font-normal rounded-3xl sm:w-full xl:text-xl text-md font-semibold md:pt-10 pt-4 pb-4 md:pb-10 pr-6 pl-6'>Clients says</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
