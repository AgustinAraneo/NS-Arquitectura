import React from 'react'
import Navbar from './Navbar'
import Home from './Home'

const Desktop = () => {
  return (
    <div>
      <div className='bg-home w-full min-h-screen'>
      <div>
        <Navbar />
        <Home /> 
      </div>
      </div>
    </div>

  )
}

export default Desktop