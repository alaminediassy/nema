import React from 'react'

const Testimonial = () => {
  return (
    <div className="max-w-contentContainer mx-auto pb-20 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
    <div className="flex xl:flex-row flex-col justify-between">
      <div className="flex w-full xl:w-1/2 items-center gap-4 ">
        <div className="text-4xl lg:text-5xl flex flex-col font-bold">
          <h1>
            Client <span className="text-textOrange">Says</span>
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
      
    </div>
  )
}

export default Testimonial
