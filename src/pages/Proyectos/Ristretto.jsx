import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const Ristretto = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Black Ristretto -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Local - Salamanca, Madrid - Enero 2023</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ristretto/2.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ristretto/4.jpg' className='w-[30%] p-2' />
          <img src='/images/Ristretto/3.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ristretto/5.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ristretto/6.jpg' className='w-[30%] p-2' />
          <img src='/images/Ristretto/7.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ristretto/1.jpg' />
        </div>
      </div>
      <div className='w-[17.5%] h-[17.5%] mx-auto relative'>
        <img src='/images/Osom/Portada.jpg' className='mx-auto' />
        <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
          <p className='text-2xl font-bold text-white'>Osom Cantine</p>
          <p className='text-lg text-white'>Local</p>
          <p className='text-lg text-white'>Letras, Madrid</p>
          <p className='text-lg text-white'>Diciemre 2022</p>
          <p className='text-lg text-white'>Proyecto: BersStudio</p>
        </div>
      </div>
      <div className='flex flex-auto justify-center font-Montserrat pt-2 pb-10'>
        <Link href="/Proyectos/Osom">
          <div className='flex flex-auto items-center bg-black/80 hover:bg-black/60 rounded-full px-2 py-2 transition duration-300'>
            <AiOutlineArrowLeft className='text-white' />
            <p className='pl-2 text-white'>Anterior proyecto</p>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Ristretto