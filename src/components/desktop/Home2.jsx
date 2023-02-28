import React from 'react'
import { FaHome, FaHardHat } from 'react-icons/fa'
import {GrZoomIn} from 'react-icons/gr'

const Home2 = () => {
    return (
        <div>
            <div className='bg-white h-full w-full text-black font-Montserrat'>
                <h3 className='text-center text-5xl font-bold pt-10'>Nosotros</h3>
                <p className='mx-auto text-center text-xl font-Montserrat pt-4 w-[70%] leading-8'>Somos un estudio de arquitectura y construcción
                    centrado en el mercado español. Nace de nuestra pasión por fusionar el diseño y la construcción. Cada proyecto es un nuevo reto donde se transforman la luz, el espacio, las ingenierías y el detalle, con el objetivo de cubrir las necesidades de uso, confort y coste del cliente.</p>
            </div>
            <div className='flex text-black text-3xl justify-center grid-cols-3 pt-16 w-[70%] leading-8 mx-auto mb-10 font-Montserrat'>
                <div className='w-[50%] mx-auto'>
                    <FaHome className='mx-auto' />
                    <p className='pt-4 text-center mx-auto font-medium'>Años de experiencia</p>
                    <p className='pt-4 text-lg text-center w-[90%] mx-auto'>Nuestro equipo está altamente calificado y cuentan con años de experiencia en la industria. Nos mantenemos actualizados con las últimas tendencias y tecnologías en el campo de la arquitectura y la construcción, para ofrecer soluciones innovadoras y eficientes.</p>
                </div>
                <div className='w-[50%] mx-auto'>
                    <FaHardHat className='mx-auto' />
                    <p className='pt-4 text-center mx-auto font-medium'>Confianza</p>
                    <p className='pt-4 text-lg text-center w-[90%] mx-auto'>Confía en nosotros para hacer realidad tu proyecto. Desde el inicio hasta el final, te guiaremos de manera profesional y cercana para asegurarnos de que tu visión se convierta en realidad.</p>
                </div>
                <div className='w-[50%] mx-auto'>
                    <GrZoomIn className='mx-auto' />
                    <p className='pt-4 text-center mx-auto font-medium'>Responsabilidad</p>
                    <p className='pt-4 text-lg text-center w-[90%] mx-auto'>Estamos comprometidos en proporcionar una experiencia de construcción transparente y sin complicaciones para nuestros clientes. Trabajamos con los más altos estándares de calidad, eficiencia y atención al detalle, para que tu proyecto sea entregado a tiempo y en condiciones.</p>
                </div>
            </div>
        </div>
    )
}

export default Home2