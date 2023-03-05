import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Mobile = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-screen bg-home bg-cover bg-center z-10'>
        <div className='relative'>
      <Navbar />
        </div>
      </div>
      <div className='pt-[calc(100vh*1)] sm:pt-1/2'>
      <Footer />
      </div>
    </div>
  )
}

export default Mobile