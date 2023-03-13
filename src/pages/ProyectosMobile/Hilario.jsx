import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

const Hilario = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Hilario -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Vivienda - Lucero, Madrid - Agosto 2022</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Hilario/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Hilario/2.jpg' className='w-[45%] p-2' />
          <img src='/images/Hilario/3.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Hilario/4.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Hilario/5.jpg' className='w-[45%] p-2' />
          <img src='/images/Hilario/6.jpg' className='w-[45%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Hilario/7.jpg' className='w-[45%] p-2' />
          <img src='/images/Hilario/8.jpg' className='w-[45%] p-2' />
        </div>
      </div>
      <div className='w-[45%] h-[50%] mx-auto relative fadeIn'>
        <img src='/images/Margallo/portada.jpg' className='mx-auto' />
        <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
          <p className='text-lg font-bold text-white'>Margallo</p>
          <p className='text-base text-white'>Vivienda</p>
          <p className='text-base text-white'>Tetúan, Madrid</p>
          <p className='text-base text-white'>Abril 2022</p>
        </div>
      </div>
      <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat fadeIn'>
        <Link href="/ProyectosMobile/Margallo">
          <div className='flex items-center flex-auto px-1 py-1 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
            <p className='pr-2 text-white text-[12px]'>Siguiente proyecto</p>
            <AiOutlineArrowRight className='text-white' />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Hilario