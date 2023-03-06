import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Margallo = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Margallo -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Vivienda - Tetúan, Madrid - Abril 2022</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Margallo/10.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Margallo/5.jpg' className='w-[30%] p-2'/>
          <img src='/images/Margallo/4.jpg' className='w-[30%] p-2'/>
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Margallo/8.jpg' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Margallo/7.jpg' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Margallo/6.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Margallo/2.jpg' className='w-[30%] p-2'/>
          <img src='/images/Margallo/3.jpg' className='w-[30%] p-2'/>
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Margallo/1.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Margallo