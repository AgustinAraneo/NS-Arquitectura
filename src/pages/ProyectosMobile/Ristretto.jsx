import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const Ristretto = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Black Ristretto -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>Vivienda - Salamanca, Madrid -  Enero 2023</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ristretto/2.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ristretto/4.jpg' className='w-[45%] p-2' />
          <img src='/images/Ristretto/3.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ristretto/5.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ristretto/6.jpg' className='w-[45%] p-2' />
          <img src='/images/Ristretto/7.jpg' className='w-[45%] p-2' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Ristretto/1.jpg' />
        </div>
      </div>
      <div className='w-[45%] h-[50%] mx-auto relative'>
        <img src='/images/Osom/Portada.jpg' className='mx-auto' />
        <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
          <p className='text-lg font-bold text-white'>Osom Cantine</p>
          <p className='text-base text-white'>Local</p>
          <p className='text-base text-white'>Letras, Madrid</p>
          <p className='text-base text-white'>Diciemre 2022</p>
          <p className='text-base text-white'>Proyecto: BersStudio</p>
        </div>
      </div>
      <div className='flex flex-auto justify-center font-Montserrat pt-2 pb-10'>
        <Link href="/ProyectosMobile/Osom">
          <div className='flex flex-auto items-center bg-black/80 hover:bg-black/60 rounded-full px-1 py-1 transition duration-300'>
            <AiOutlineArrowLeft className='text-white' />
            <p className='pl-2 text-white text-[12px]'>Anterior proyecto</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Ristretto