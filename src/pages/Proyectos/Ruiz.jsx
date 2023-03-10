import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const Ruiz = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Ruiz -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Vivienda - Malasaña, Madrid - Diciembre 2021 - Proyecto: BerdStudio</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/2.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/3.jpg' className='w-[30%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/4.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/5.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Ruiz/6.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/7.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/8.jpg' className='w-[30%] p-2' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Ruiz/9.jpg' className='w-[30%] p-2' />
          <img src='/images/Ruiz/10.jpg' className='w-[30%] p-2' />
        </div>
      </div>
      <div className="flex justify-center fadeIn">
        <div className="w-[17.5%] h-[17.5%] pr-4">
          <div className='relative w-full h-full mx-auto'>
            <img src='/images/Margallo/portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Margallo</p>
              <p className='text-lg text-white'>Vivienda</p>
              <p className='text-lg text-white'>Tetúan, Madrid</p>
              <p className='text-lg text-white'>Abril 2022</p>
            </div>
          </div>
          <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat'>
            <Link href="/Proyectos/Margallo">
              <div className='flex items-center flex-auto px-2 py-2 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
                <AiOutlineArrowLeft className='text-white' />
                <p className='pl-2 text-white'>Anterior proyecto</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[17.5%] h-[17.5%] pl-4">
          <div className='relative w-full h-full mx-auto'>
            <img src='/images/Abtao/portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Abtao</p>
              <p className='text-lg text-white'>Vivienda</p>
              <p className='text-lg text-white'>Pacifico, Madrid</p>
              <p className='text-lg text-white'>Septiembre 2022</p>
            </div>
          </div>
          <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat'>
            <Link href="/Proyectos/Abtao">
              <div className='flex items-center flex-auto px-2 py-2 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
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

export default Ruiz