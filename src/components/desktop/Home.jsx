import React from 'react'
import { HiOutlineArrowLongDown } from 'react-icons/hi2';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl text-center text-white/80 font-Montserrat mt-[15%] fadeInDown'>Nicolas Schnaider
                    Construcciones</h1>
                <p className='text-7xl text-white flex justify-center mt-10 cursor-pointer fadeIn'>
                    < HiOutlineArrowLongDown />
                </p>
            </div>
        </div>
    )
}

export default Home