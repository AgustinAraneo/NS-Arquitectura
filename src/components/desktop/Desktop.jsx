import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Home2 from './Home2'
import Footer from './Footer'
import ScrollButton from './ScrollButton'
import Slick from './Slick'

const Desktop = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-[80vh] bg-homeDesktop bg-cover bg-center z-10 2xl:mt-[6%] xl:mt-[7%] sm:mt-[10%] mb-[6%]'>
        <div className='relative'>
          <Navbar style={{ zIndex: 20 }} />
          <ScrollButton />
          <Home />
        </div>
      </div>
      <div className='pt-[calc(100vh*0.90)] sm:pt-1/2 pb-10'>
        <Home2 />
      </div>
      <div className='pb-10'>
        <Slick />
      </div>
      <Footer />
    </div>
  )
}

export default Desktop
