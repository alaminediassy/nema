import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-contentContainer mx-auto pb-20 text-white/60  flex flex-col mdl:px-10 xl:px-4">
      <div className='w-full flex flex-col md:flex-row'>
        <div className='xl:w-2/3 flex gap-6 mx-auto justify-between xl:pr-20'>
            <h3>About</h3>
            <h3>Our services</h3>
            <h3>Latest Project</h3>
            <h3>Testimonial</h3>
        </div>
        <div className='xl:w-1/3 grid mx-auto'>
            <h3 className='justify-self-end '>All Right Reserved</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
