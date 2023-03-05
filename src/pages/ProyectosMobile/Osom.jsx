import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Osom = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-center text-4xl font-Montserrat fadeIn font-base'>- Osom -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Ubicacion: Letras, Madrid - Tipo de reforma: Local - Fecha de realizacion: Diciembre 2022</p>
      </div>
      <div className='w-full h-full pb-10 pt-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/1.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Osom/2.jpg' className='w-[45%] p-2'/>
          <img src='/images/Osom/3.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/4.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/5.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Osom/16.jpg' className='w-[45%] p-2'/>
          <img src='/images/Osom/7.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Osom/8.jpg' className='w-[45%] p-2'/>
          <img src='/images/Osom/9.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/12.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Osom/11.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Osom/10.jpg' className='w-[45%] p-2'/>
          <img src='/images/Osom/13.jpg' className='w-[45%] p-2'/>
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