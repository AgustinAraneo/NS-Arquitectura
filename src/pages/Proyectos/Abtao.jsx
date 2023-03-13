import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import Footer from '@/components/desktop/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'

const Abtao = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[10rem]'>
        <h1 className='text-4xl text-center font-Montserrat fadeIn font-base'>- Abtao -</h1>
        <p className='text-center fadeIn text-lg pt-4 w-[80%] mx-auto'>Vivienda - Pacifico, Madrid - Septiembre 2022</p>
      </div>
      <div className='w-full h-full pt-10 pb-10 fadeIn'>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Abtao/1.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Abtao/2.jpg' className='w-[30%] p-2' />
          <img src='/images/Abtao/3.jpg' className='w-[30%] p-2' />
        </div>
        <div className='w-[60%] mx-auto p-2'>
          <img src='/images/Abtao/4.jpg' />
        </div>
        <div className='flex justify-center w-full grid-cols-2'>
          <img src='/images/Abtao/5.jpg' className='w-[30%] p-2' />
          <img src='/images/Abtao/6.jpg' className='w-[30%] p-2' />
        </div>
      </div>
      <div className="flex justify-center fadeIn">
        <div className="w-[17.5%] h-[17.5%] pr-4">
          <div className='relative w-full h-full mx-auto'>
            <img src='/images/Ruiz/portada.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Ruiz</p>
              <p className='text-lg text-white'>Vivienda</p>
              <p className='text-lg text-white'>Malasaña, Madrid</p>
              <p className='text-lg text-white'>Diciembre 2021</p>
              <p className='text-lg text-white'>Proyecto: BerdStudio</p>
            </div>
          </div>
          <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat'>
            <Link href="/Proyectos/Ruiz">
              <div className='flex items-center flex-auto px-2 py-2 transition duration-300 rounded-full bg-black/80 hover:bg-black/60'>
                <AiOutlineArrowLeft className='text-white' />
                <p className='pl-2 text-white'>Anterior proyecto</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[17.5%] h-[17.5%] pl-4">
          <div className='relative w-full h-full mx-auto'>
            <img src='/images/Entenza/Portada2.jpg' className='mx-auto' />
            <div className='absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100'>
              <p className='text-2xl font-bold text-white'>Entenza</p>
              <p className='text-lg text-white'>Vivienda</p>
              <p className='text-lg text-white'>l Eixample, Barcelona </p>
              <p className='text-lg text-white'>Septiembre 2022</p>
            </div>
          </div>
          <div className='flex justify-center flex-auto pt-2 pb-10 font-Montserrat'>
            <Link href="/Proyectos/Entenza">
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

export default Abtao