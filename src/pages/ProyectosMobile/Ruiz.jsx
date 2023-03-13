import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const Ruiz = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Ruiz -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Vivienda - Malasaña, Madrid - Diciembre 2021 - Proyecto: BersStudio</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/2.jpg' className='w-[45%] p-2' />
          <img src='/images/Ruiz/3.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/4.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/5.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/6.jpg' className='w-[45%] p-2' />
          <img src='/images/Ruiz/15.jpg' className='w-[45%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/8.jpg' className='w-[45%] p-2' />
          <img src='/images/Ruiz/9.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/10.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/11.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/12.jpg' className='w-[45%] p-2' />
          <img src='/images/Ruiz/13.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/14.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ruiz/7.jpg' />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[45%] h-[50%] pr-2">
          <div className='w-full h-full mx-auto relative'>
            <img src='/images/Margallo/Portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-lg font-bold text-white'>Margallo</p>
              <p className='text-base text-white'>Vivienda</p>
              <p className='text-base text-white'>Tetúan, Madrid</p>
              <p className='text-base text-white'>Abril 2022</p>
            </div>
          </div>
          <div className='flex flex-auto justify-center font-Montserrat pt-2 pb-10'>
            <Link href="/ProyectosMobile/Margallo">
              <div className='flex flex-auto items-center bg-black/80 hover:bg-black/60 rounded-full px-1 py-1 transition duration-300'>
                <AiOutlineArrowLeft className='text-white' />
                <p className='pl-2 text-white text-[12px]'>Anterior proyecto</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[45%] h-[50%] pl-2">
          <div className='w-full h-full mx-auto relative'>
            <img src='/images/Abtao/Portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-lg font-bold text-white'>Abtao</p>
              <p className='text-base text-white'>Vivienda</p>
              <p className='text-base text-white'>Pacifico, Madrid</p>
              <p className='text-base text-white'>Septiembre 2022</p>
            </div>
          </div>
          <div className='flex flex-auto justify-center font-Montserrat pt-2 pb-10'>
            <Link href="/ProyectosMobile/Abtao">
              <div className='flex flex-auto items-center bg-black/80 hover:bg-black/60 rounded-full px-1 py-1 transition duration-300'>
                <p className='pr-2 text-white text-[12px]'>Siguiente proyecto</p>
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

export default Ruiz