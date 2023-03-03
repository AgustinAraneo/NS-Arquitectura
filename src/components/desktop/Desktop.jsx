import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Home2 from './Home2'
import Footer from './Footer'
import ScrollButton from './ScrollButton'

const Desktop = () => {
  return (
    <div>
      <div className='w-full min-h-screen bg-home bg-cover bg-center'>
      <div>
        <Navbar />
        <ScrollButton />
        <Home /> 
      </div>
      </div>
      <div>
        <Home2 />
      </div>
      <Footer />
    </div>
  )
}

export default Desktop