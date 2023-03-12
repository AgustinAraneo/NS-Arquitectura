import React from 'react'
import { FaHome, FaHardHat } from 'react-icons/fa'
import { GrZoomIn } from 'react-icons/gr'
import Link from 'next/link'

const Home2 = () => {
    return (
        <div>
            <div className='w-full  text-black bg-white font-Montserrat'>
                <h3 className='pt-44 text-5xl font-bold text-center'>Sobre Nosotros</h3>
                <p className='mx-auto text-xl font-Montserrat pt-4 w-[68%] leading-8 text-justify'>Somos un estudio que nace de nuestra pasión por fusionar diseño y construcción.
                    Cada proyecto es un nuevo reto donde se transforman la luz, el espacio, las ingenierías y el detalle, con el objetivo de cubrir las necesidades de uso, confort y coste del cliente.
                </p>
            </div>
            <div className='flex text-black text-2xl justify-center grid-cols-3 pt-16 w-[70%] leading-8 mx-auto pb-16 font-Montserrat'>
                <div className='w-[50%] mx-auto'>
                    <FaHome className='mx-auto' />
                    <p className='pt-4 mx-auto font-medium text-center'>Transparencia & Compromiso</p>
                    <p className='pt-4 text-[16px] w-[90%] mx-auto text-justify'>Estamos comprometidos en proporcionar una experiencia de construcción transparente y responsable con nuestros clientes. Trabajamos con los más altos estándares de calidad, eficiencia y atención al detalle.</p>
                </div>
                <div className='w-[50%] mx-auto'>
                    <FaHardHat className='mx-auto' />
                    <p className='pt-4 mx-auto font-medium text-center'>Honestidad</p>
                    <p className='pt-4 text-[16px] w-[90%] mx-auto text-justify'>Confía en nosotros para hacer realidad tu proyecto. Desde el inicio hasta el final, te guiaremos de manera profesional y cercana para asegurarnos de que tus ideas se conviertan en realidad.</p>
                </div>
                <div className='w-[50%] mx-auto'>
                    <GrZoomIn className='mx-auto' />
                    <p className='pt-4 mx-auto font-medium text-center'>Saber hacer</p>
                    <p className='pt-4 text-[16px]  w-[90%] mx-auto text-justify'>Nuestro equipo está altamente calificado y cuentan con años de experiencia en la industria. <span className='font-bold'>Nos mantenemos actualizados</span> con las últimas tendencias y tecnologías en el campo de la arquitectura y la construcción, para ofrecer soluciones innovadoras y eficientes.</p>
                </div>
            </div>
            <div className='flex justify-center w-[70%] mx-auto pt-4'>
                <div className='flex flex-col items-center w-1/3'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-medium mb-4'>1</div>
                    <p className='font-medium text-2xl text-black text-center mb-4'>Definición del proyecto</p>
                    <div className='w-full h-1 bg-black mb-4'></div>
                    <p className='text-lg text-black text-center'>Planos, propuesta de materiales y presupuesto</p>
                </div>
                <div className='flex flex-col items-center w-1/3'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-medium mb-4'>2</div>
                    <p className='font-medium text-2xl text-black text-center mb-4'>Seguimiento</p>
                    <div className='w-full h-1 bg-black mb-4'></div>
                    <p className='text-lg text-black text-center'>En el proceso de ejecución de obra y gestión con asesoramiento continuo</p>
                </div>
                <div className='flex flex-col items-center w-1/3'>
                    <div className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-white font-medium mb-4'>3</div>
                    <p className='font-medium text-2xl text-black text-center mb-4'>Entrega llave en mano</p>
                    <div className='w-full h-1 bg-black mb-4'></div>
                    <p className='text-lg text-black text-center'>Garantizando la calidad íntegra del proyecto en la fecha pactada</p>
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
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Home2