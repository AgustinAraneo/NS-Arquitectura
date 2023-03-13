import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const Margallo = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Margallo -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Vivienda - Tetúan, Madrid - Abril 2022</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Margallo/10.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Margallo/5.jpg' className='w-[45%] p-2' />
          <img src='/images/Margallo/4.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Margallo/8.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Margallo/7.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Margallo/6.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Margallo/2.jpg' className='w-[45%] p-2' />
          <img src='/images/Margallo/3.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Margallo/1.jpg' />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[45%] h-[50%] pr-2">
          <div className='relative w-full h-full mx-auto'>
            <img src='/images/Hilario/portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-lg font-bold text-white'>Hilario</p>
              <p className='text-base text-white'>Vivienda</p>
              <p className='text-base text-white'>Lucero, Madrid</p>
              <p className='text-base text-white'>Agosto 2022</p>
            </div>
          </div>
          <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat'>
            <Link href="/ProyectosMobile/Hilario">
              <div className='flex items-center flex-auto px-1 py-1 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
                <AiOutlineArrowLeft className='text-white' />
                <p className='pl-1 text-white text-[12px]'>Anterior proyecto</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[45%] h-[50%] pl-2 fadeIn">
          <div className='relative w-full h-full mx-auto'>
            <img src='/images/Ruiz/portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-lg font-bold text-white'>Ruiz</p>
              <p className='text-base text-white'>Vivienda</p>
              <p className='text-base text-white'>Malasaña, Madrid</p>
              <p className='text-base text-white'>Diciembre 2021</p>
              <p className='text-base text-white'>Proyecto: BersStudio</p>
            </div>
          </div>
          <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat fadeIn'>
            <Link href="/ProyectosMobile/Ruiz">
              <div className='flex items-center flex-auto px-1 py-1 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
                <p className='pr-1 text-white text-[12px]'>Siguiente proyecto</p>
                <AiOutlineArrowRight className='text-white' />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Margallo