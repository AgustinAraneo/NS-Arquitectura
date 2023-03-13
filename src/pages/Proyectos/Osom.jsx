import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'

const Osom = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Osom Cantine -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Local - Letras, Madrid - Diciembre 2022 - Proyecto: BerdStudio</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Osom/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/2.jpg' className='w-[30%] p-2' />
          <img src='/images/Osom/3.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Osom/4.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/5.jpg' className='w-[30%] p-2' />
          <img src='/images/Osom/6.jpg' className='w-[30%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Osom/7.jpg' className='w-[30%] p-2' />
          <img src='/images/Osom/8.jpg' className='w-[30%] p-2' />
        </div>
      </div>
      <div className='w-[17.5%] h-[17.5%] mx-auto relative fadeIn'>
        <img src='/images/Ristretto/portada.jpg' className='mx-auto' />
        <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
          <p className='text-2xl font-bold text-white'>Black Ristretto</p>
          <p className='text-lg text-white'>Local</p>
          <p className='text-lg text-white'>Salamanca, Madrid</p>
          <p className='text-lg text-white'>Enero 2023</p>
        </div>
      </div>
      <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat fadeIn'>
        <Link href="/Proyectos/Ristretto">
          <div className='flex items-center flex-auto px-2 py-2 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
            <p className='pr-2 text-white'>Siguiente proyecto</p>
            <AiOutlineArrowRight className='text-white' />
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Osom