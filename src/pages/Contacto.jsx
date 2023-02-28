import React from 'react'
import Navbar from '@/components/desktop/Navbar'
import ContactForm from '@/components/desktop/ContactForm'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'

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
                <h1>Contactame por mis redes, <br/> <span className='text-4xl font-Montserrat pt-2 font-bold'>para ver más de mis trabajos</span></h1>
                <div className='flex grid-cols-3 text-4xl pt-10 mb-10 mx-[20rem] font-Montserrat'>
                <div className='w-[30%] mx-auto hover:text-zinc-700'>
                    <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='mx-auto' />
                    <p className='pt-4 text-center mx-auto text-xl'>@ns_reforma</p>
                    </a>
                </div>
                <div className='w-[30%] mx-auto hover:text-zinc-700'>
                    <a href='' target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='mx-auto' />
                    <p className='pt-4 text-center mx-auto text-xl'>(+34) 617 800 682</p>
                    </a>
                </div>
                <div className='w-[30%] mx-auto hover:text-zinc-700'>
                    <a href='' target="_blank" rel="noopener noreferrer">
                    <FiMail className='mx-auto' />
                    <p className='pt-4 text-center mx-auto text-xl'>arq.nschnaider@gmail.com</p>
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto