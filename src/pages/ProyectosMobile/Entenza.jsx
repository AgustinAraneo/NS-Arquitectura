import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import ScrollButton from '@/components/desktop/ScrollButton'

const Entenza = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className='pt-[5rem]'>
        <h1 className='text-center text-4xl font-Montserrat fadeIn font-base'>- Entenza -</h1>
        <p className='text-center fadeIn text-sm pt-4 w-[80%] mx-auto'>l Eixample, Barcelona - Vivienda - Septiembre 2022</p>
      </div>
      <div className='w-full h-full pb-10 pt-10 fadeIn'>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Entenza/5.jpg' />
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Entenza/2.jpg' />
        </div>
        <div className='flex grid-cols-2 justify-center w-full'>
          <img src='/images/Entenza/3.jpg' className='w-[45%] p-2'/>
          <img src='/images/Entenza/4.jpg' className='w-[45%] p-2'/>
        </div>
        <div className='w-[90%] mx-auto p-2'>
          <img src='/images/Entenza/1.jpg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Entenza