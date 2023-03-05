import React from 'react'
import { FaHome, FaHardHat } from 'react-icons/fa'
import { GrZoomIn } from 'react-icons/gr'
import Link from 'next/link'

const Home2 = () => {
    return (
        <div>
            <div className='w-full  text-black bg-white font-Montserrat'>
                <h3 className='pt-12 text-3xl font-bold text-center'>Nosotros</h3>
                <p className='mx-auto text-justify text-base font-Montserrat pt-4 w-[80%] leading-7'>Somos un estudio de arquitectura y construcción
                    centrado en el mercado español. Nace de nuestra pasión por fusionar el diseño y la construcción. Cada proyecto es un nuevo reto donde se transforman la luz, el espacio, las ingenierías y el detalle, con el objetivo de cubrir las necesidades de uso, confort y coste del cliente.</p>
            </div>
            <div className='text-black text-3xl pt-16 leading-6 pb-16 font-Montserrat'>
                <div className='text-justify mx-auto'>
                    <div className='w-[80%] mx-auto'>
                        <FaHome className='mx-auto' />
                        <p className='pt-4 mx-auto font-medium text-center'>Años de experiencia</p>
                        <p className='pt-4 text-[13px] mx-auto'>Nuestro equipo está altamente calificado y cuentan con años de experiencia en la industria. Nos mantenemos actualizados con las últimas tendencias y tecnologías en el campo de la arquitectura y la construcción, para ofrecer soluciones innovadoras y eficientes.</p>
                    </div>
                    <div className='w-[80%] mx-auto pt-16'>
                        <FaHardHat className='mx-auto' />
                        <p className='pt-4 mx-auto font-medium text-center'>Confianza</p>
                        <p className='pt-4 text-[13px] mx-auto'>Confía en nosotros para hacer realidad tu proyecto. Desde el inicio hasta el final, te guiaremos de manera profesional y cercana para asegurarnos de que tu visión se convierta en realidad.</p>
                    </div>
                    <div className='w-[80%] mx-auto pt-16'>
                        <GrZoomIn className='mx-auto' />
                        <p className='pt-4 mx-auto font-medium text-center'>Responsabilidad</p>
                        <p className='pt-4 text-[13px]  mx-auto'>Estamos comprometidos en proporcionar una experiencia de construcción transparente y sin complicaciones para nuestros clientes. Trabajamos con los más altos estándares de calidad, eficiencia y atención al detalle, para que tu proyecto sea entregado a tiempo y en condiciones.</p>
                    </div>
                </div>
            </div>
            <div className="flex h-[25rem] bg-stone-400">
                <div className=" flex flex-col justify-center items-center mx-auto">
                    <p className="mb-6 font-Montserrat Extra Bold text-4xl font-extrabold text-black select-none">¿Estás pensando<br /> en realizar una<br /> reforma integral?</p>
                    <Link href="/ContactoMobile">
                        <button className="bg-black text-white font-bold py-2 px-4 text-base rounded transition duration-500 hover:scale-105 font-Montserrat shadow-2xl">
                            Contáctanos
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-full h-[25rem] relative">
                <Link href="/ReformasMobile">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.postimg.cc/Zqw4Tvrg/principal.png"
                        alt="Proyecto"
                    />
                    <div className="absolute inset-0 bg-gray-600/40 bg-opacity-50 flex items-center justify-center">

                        <p className="text-white font-bold text-4xl font-Montserrat text-center mb-48">Ve nuestros<br /> proyectos</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home2