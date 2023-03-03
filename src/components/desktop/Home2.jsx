import React from 'react'
import { FaHome, FaHardHat } from 'react-icons/fa'
import { GrZoomIn } from 'react-icons/gr'
import Link from 'next/link'

const Home2 = () => {
    return (
        <div>
            <div className='w-full h-full text-black bg-white font-Montserrat'>
                <h3 className='pt-44 text-5xl font-bold text-center'>Nosotros</h3>
                <p className='mx-auto text-center text-xl font-Montserrat pt-4 w-[70%] leading-8'>Somos un estudio de arquitectura y construcción
                    centrado en el mercado español. Nace de nuestra pasión por fusionar el diseño y la construcción. Cada proyecto es un nuevo reto donde se transforman la luz, el espacio, las ingenierías y el detalle, con el objetivo de cubrir las necesidades de uso, confort y coste del cliente.</p>
            </div>
            <div className='flex text-black text-3xl justify-center grid-cols-3 pt-16 w-[70%] leading-8 mx-auto pb-16 font-Montserrat'>
                <div className='w-[50%] mx-auto transition duration-500 hover:scale-105'>
                    <FaHome className='mx-auto' />
                    <p className='pt-4 mx-auto font-medium text-center'>Años de experiencia</p>
                    <p className='pt-4 text-lg w-[90%] mx-auto'>Nuestro equipo está altamente calificado y cuentan con años de experiencia en la industria. Nos mantenemos actualizados con las últimas tendencias y tecnologías en el campo de la arquitectura y la construcción, para ofrecer soluciones innovadoras y eficientes.</p>
                </div>
                <div className='w-[50%] mx-auto transition duration-500 hover:scale-105'>
                    <FaHardHat className='mx-auto' />
                    <p className='pt-4 mx-auto font-medium text-center'>Confianza</p>
                    <p className='pt-4 text-lg w-[90%] mx-auto'>Confía en nosotros para hacer realidad tu proyecto. Desde el inicio hasta el final, te guiaremos de manera profesional y cercana para asegurarnos de que tu visión se convierta en realidad.</p>
                </div>
                <div className='w-[50%] mx-auto transition duration-500 hover:scale-105'>
                    <GrZoomIn className='mx-auto' />
                    <p className='pt-4 mx-auto font-medium text-center'>Responsabilidad</p>
                    <p className='pt-4 text-lg  w-[90%] mx-auto'>Estamos comprometidos en proporcionar una experiencia de construcción transparente y sin complicaciones para nuestros clientes. Trabajamos con los más altos estándares de calidad, eficiencia y atención al detalle, para que tu proyecto sea entregado a tiempo y en condiciones.</p>
                </div>
            </div>
            <div className="flex h-[45rem] mt-44 bg-stone-400">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <p className="mb-16 font-Montserrat Extra Bold text-6xl font-extrabold text-black select-none">¿Estás pensando<br /> en realizar una<br /> reforma integral?</p>
                    <Link href="/Contacto">
                        <button className="bg-black text-white font-bold py-4 px-6 text-xl rounded transition duration-500 hover:scale-105 font-Montserrat shadow-2xl">
                            Contáctanos
                        </button>
                    </Link>
                </div>
                <div className="w-1/2 relative">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/Zqw4Tvrg/principal.png"
                        alt="Proyecto"
                    />
                    <Link href="/Reformas">
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-500 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                            <p className="text-white font-bold text-5xl font-Montserrat text-center mb-20">Ve nuestros<br /> proyectos</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home2