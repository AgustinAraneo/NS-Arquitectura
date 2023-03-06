import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Ristretto = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-center text-4xl font-Montserrat fadeIn font-base'>- Ristretto -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Salamanca, Madrid - Local - Enero 2023</p>
      </div>
      <div className='w-full h-full pb-10 pt-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ristretto/2.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Ristretto/4.jpg' className='w-[30%] p-2'/>
          <img src='/images/Ristretto/3.jpg' className='w-[30%] p-2'/>
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ristretto/5.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Ristretto/6.jpg' className='w-[30%] p-2'/>
          <img src='/images/Ristretto/7.jpg' className='w-[30%] p-2'/>
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ristretto/1.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ristretto