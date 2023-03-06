import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Abtao = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-center text-4xl font-Montserrat fadeIn font-base'>- Abtao -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Pacifico, Madrid - Vivienda - Septiembre 2022</p>
      </div>
      <div className='w-full h-full pb-10 pt-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Abtao/7.jpg' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Abtao/1.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Abtao/2.jpg' className='w-[30%] p-2'/>
          <img src='/images/Abtao/3.jpg' className='w-[30%] p-2'/>
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Abtao/4.jpg' className='w-[30%] p-2'/>
          <img src='/images/Abtao/6.jpg' className='w-[30%] p-2'/>
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Abtao/5.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Abtao