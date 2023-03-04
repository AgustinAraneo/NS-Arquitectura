import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Home2 from './Home2'
import Footer from './Footer'
import ScrollButton from './ScrollButton'

const Desktop = () => {
  return (
    <div className='relative'>
      <div className='absolute top-0 left-0 w-full h-screen bg-home bg-cover bg-center z-10'>
        <div className='relative'>
          <Navbar style={{ zIndex: 20 }} />
          <ScrollButton />
          <Home />
        </div>
      </div>
      <div className='pt-[calc(100vh*0.90)] sm:pt-1/2'>
        <Home2 />
      </div>
      <Footer />
    </div>
  )
}

export default Desktop
