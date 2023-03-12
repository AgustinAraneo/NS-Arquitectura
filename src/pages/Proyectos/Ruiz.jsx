import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Ruiz = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Ruiz -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Vivienda - Malasaña, Madrid - Diciembre 2021 - Proyecto: BersStudio</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/2.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/3.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/4.jpg' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/5.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/6.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/15.jpg' className='w-[30%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/8.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/9.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/10.jpg' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/11.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/12.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/13.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/14.jpg' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/7.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ruiz