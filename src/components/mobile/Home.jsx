import React from 'react'
import { HiOutlineArrowLongDown } from 'react-icons/hi2';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center mt-[65%] fadeInDown font-black' style={{ WebkitTextStrokeWidth: '2px', WebkitTextStrokeColor: '#ffffff', color: 'transparent', textShadow: '0 0 20px #908D8C' }}>
                    Nicolas Schnaider<br /><span className='text-white font-medium'>Construcciones</span>
                </h1>
                <p className='text-5xl text-white flex justify-center mt-10 fadeInDown font-bold'>
                    < HiOutlineArrowLongDown />
                </p>
            </div>
        </div>
    )
}

export default Home