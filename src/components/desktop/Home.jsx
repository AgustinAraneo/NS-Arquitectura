import React from 'react'
import { HiOutlineArrowLongDown } from 'react-icons/hi2';
import 'animate.css';

const Home = () => {
    return (
        <div>
            <h1 className='text-5xl text-center text-white/80 font-Montserrat mt-[15%] animate__fadeInDown animate__animated animate__slower'>Nicolas Schnaider
                Construcciones</h1>
            <p className='text-7xl text-white flex justify-center mt-10 cursor-pointer animate__animated  animate__fadeIn animate__slower'>
                < HiOutlineArrowLongDown />
            </p>
        </div>
    )
}

export default Home