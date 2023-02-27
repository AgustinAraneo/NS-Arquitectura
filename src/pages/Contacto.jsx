import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import ContactForm from '@/components/desktop/ContactForm'

const Contacto = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-zinc-700 h-fit w-full'>
                <h1 className='text-center text-white text-xl font-Montserrat pt-10'>
                    Converti tu idea en una realidad... <br />
                    <span className='text-center text-white text-5xl font-Montserrat pt-2 font-bold'>Contactanos</span>
                </h1>
                <div className='pb-6'>
                <ContactForm />
                </div>
            </div>
            <div className='bg-white text-center text-black text-xl font-Montserrat pt-6'>
                <h1>Ve mis redes, <br/> <span className='text-3xl font-Montserrat pt-2 font-bold'>para ver más de mis trabajos</span></h1>
            </div>
        </div>
    )
}

export default Contacto