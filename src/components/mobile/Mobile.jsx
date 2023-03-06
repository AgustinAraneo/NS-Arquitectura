import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Home2 from './Home2'
import Footer from './Footer'
import ScrollButton from '../desktop/ScrollButton'
import Responsive from './Slick'

const Mobile = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-screen bg-home bg-cover bg-center z-10'>
        <div className='relative'>
          <header className="fixed top-0 w-full z-10">
            <Navbar />
          </header>
          <ScrollButton />
          <Home />
        </div>
      </div>
      <div className='pt-[calc(100vh*1)] sm:pt-1/2 pb-28'>
        <Home2 />
      </div>
      <Responsive />
      <Footer />
    </div>
  )
}

export default Mobile