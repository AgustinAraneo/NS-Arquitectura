import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Hilario = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-center text-4xl font-Montserrat fadeIn font-base'>- Hilario -</h1>
      </div>
      <div className='w-full h-full pb-10 pt-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Hilario/1.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Hilario/2.jpg' className='w-[45%] p-2'/>
          <img src='/images/Hilario/6.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Hilario/4.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Hilario/7.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Hilario/3.jpg' className='w-[45%] p-2'/>
          <img src='/images/Hilario/5.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Hilario/8.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Hilario