import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Osom = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Osom Cantine -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Local - Letras, Madrid - Diciembre 2022 - Proyecto: BersStudio</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/2.jpg' className='w-[45%] p-2' />
          <img src='/images/Osom/3.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/4.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/5.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/16.jpg' className='w-[45%] p-2' />
          <img src='/images/Osom/7.jpg' className='w-[45%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/8.jpg' className='w-[45%] p-2' />
          <img src='/images/Osom/9.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/12.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/11.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/10.jpg' className='w-[45%] p-2' />
          <img src='/images/Osom/13.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/14.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/15.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Osom