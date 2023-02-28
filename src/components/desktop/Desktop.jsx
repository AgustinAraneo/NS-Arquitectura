import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Home2 from './Home2'

const Desktop = () => {
  return (
    <div>
      <div className='bg-home w-full min-h-screen'>
      <div>
        <Navbar />
        <Home /> 
      </div>
      </div>
      <div>
        <Home2 />
      </div>
    </div>

  )
}

export default Desktop