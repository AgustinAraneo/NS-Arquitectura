import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

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
          <img src='/images/Margallo/5.jpg' className='w-[30%] p-2' />
          <img src='/images/Margallo/4.jpg' className='w-[30%] p-2' />
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
          <img src='/images/Margallo/2.jpg' className='w-[30%] p-2' />
          <img src='/images/Margallo/3.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Margallo/1.jpg' />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[17.5%] h-[17.5%] pr-4">
          <div className='w-full h-full mx-auto relative'>
            <img src='/images/Hilario/Portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Hilario</p>
              <p className='text-lg text-white'>Vivienda</p>
              <p className='text-lg text-white'>Lucero, Madrid</p>
              <p className='text-lg text-white'>Agosto 2022</p>
            </div>
          </div>
          <div className='flex flex-auto justify-center font-Montserrat pt-2 pb-10'>
            <Link href="/Proyectos/Hilario">
              <div className='flex flex-auto items-center bg-black/80 hover:bg-black/60 rounded-full px-2 py-2 transition duration-300'>
                <AiOutlineArrowLeft className='text-white' />
                <p className='pr-2 text-white'>Anterior proyecto</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[17.5%] h-[17.5%] pl-4">
          <div className='w-full h-full mx-auto relative'>
            <img src='/images/Ruiz/Portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Ruiz</p>
              <p className='text-lg text-white'>Vivienda</p>
              <p className='text-lg text-white'>Malasaña, Madrid</p>
              <p className='text-lg text-white'>Diciembre 2021</p>
              <p className='text-lg text-white'>Proyecto: BersStudio</p>
            </div>
          </div>
          <div className='flex flex-auto justify-center font-Montserrat pt-2 pb-10'>
            <Link href="/Proyectos/Ruiz">
              <div className='flex flex-auto items-center bg-black/80 hover:bg-black/60 rounded-full px-2 py-2 transition duration-300'>
                <p className='pr-2 text-white'>Siguiente proyecto</p>
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