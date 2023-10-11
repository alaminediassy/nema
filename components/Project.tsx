import React from 'react'
import project_1 from "../public/images/project1.png"
import Image from 'next/image'

const Project = () => {
  return (
    <div className="max-w-contentContainer mx-auto py-20 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="flex xl:flex-row flex-col justify-between">
        <div className="flex w-full xl:w-1/2 items-center gap-4 ">
          <div className="text-4xl lg:text-5xl flex flex-col font-bold">
            <h1>
              Our <span className="text-textOrange">Projects</span>
            </h1>
          </div>
          <div className="border-b-4 border-textOrange w-1/5"></div>
        </div>
        <div className="xl:w-1/2">
          <p className="text-md font-normal text-white/50">
            We are branding agency team lead by callum and kate. We have a
            talented web developer, UI-UX Design and Branding.
          </p>
        </div>
      </div>
      <div className='w-full py-10  gap-2 flex flex-col-2'>
        <div className='flex gap-2 xl:w-2/3  flex-col'>
            <div className=''> <Image className='rounded-3xl w-full h-80 xl:h-[502px] object-cover' src={project_1} alt='projet un'/> </div>
            <div className='flex gap-2  w-full'>
                <div className=''><Image className='rounded-3xl w-full'  src={project_1} alt='projet un'/></div>
                <div className=''><Image className='rounded-3xl w-full' src={project_1} alt='projet un'/></div>
            </div>
        </div>
        <div className='xl:w-1/3 flex h-full flex-col gap-2 '>
            <div className=''><Image className='hidden xl:block rounded-3xl xl:h-96 object-cover' src={project_1} alt='projet un'/></div>
            <div className=''><Image className='hidden xl:block rounded-3xl xl:h-96 object-cover' src={project_1} alt='projet un'/></div>
        </div>
      </div>
    </div>
  )
}

export default Project
