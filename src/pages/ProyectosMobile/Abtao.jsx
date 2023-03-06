import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Abtao = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Abtao -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Vivienda - Pacifico, Madrid - Septiembre 2022</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Abtao/7.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Abtao/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Abtao/2.jpg' className='w-[45%] p-2'/>
          <img src='/images/Abtao/3.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Abtao/4.jpg' className='w-[45%] p-2'/>
          <img src='/images/Abtao/6.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Abtao/5.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Abtao