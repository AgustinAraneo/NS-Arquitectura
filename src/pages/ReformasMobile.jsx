import React from 'react'
import Navbar from '@/components/mobile/Navbar'
import Footer from '@/components/mobile/Footer'
import Image from 'next/image';
import Link from 'next/link';
import ScrollButton from '@/components/desktop/ScrollButton';

const proyectos = [
  // {
  //   name: 'F014',
  //   ubicacion: 'Hilario',
  //   image: '/images/F014/5.png',
  //   url: '/Contacto',
  // },
  {
    name: 'Hilario',
    ubicacion: 'Lucero, Madrid',
    tipo: 'Vivienda',
    fecha: 'Agosto 2022',
    image: '/images/Hilario/portada.jpg',
    url: '/ProyectosMobile/Hilario',
  },
  {
    name: 'Margallo',
    ubicacion: 'Tetúan, Madrid',
    tipo: 'Vivienda',
    fecha: 'Abril 2022',
    image: '/images/Margallo/portada.jpg',
    url: '/ProyectosMobile/Margallo',
  },
  {
    name: 'Ruiz',
    ubicacion: 'Malasaña, Madrid',
    tipo: 'Vivienda',
    fecha: 'Diciembre 2021',
    image: '/images/Ruiz/portada.jpg',
    url: '/ProyectosMobile/Ruiz',
    proyecto: 'Proyecto: BerdStudio'
  },
  {
    name: 'Abtao',
    ubicacion: 'Pacifico, Madrid',
    tipo: 'Vivienda',
    fecha: 'Septiembre 2022',
    image: '/images/Abtao/portada.jpg',
    url: '/ProyectosMobile/Abtao',
  },
  {
    name: 'Entenza',
    ubicacion: " l'Eixample, Barcelona ",
    tipo: 'Vivienda',
    fecha: 'Septiembre 2022',
    image: '/images/Entenza/portada.jpg',
    url: '/ProyectosMobile/Entenza',
  }
];

const proyectosLocales = [
  {
    name: 'Osom Cantine',
    ubicacion: 'Letras, Madrid',
    tipo: 'Local',
    fecha: 'Diciembre 2022',
    image: '/images/Osom/portada.jpg',
    url: '/ProyectosMobile/Osom',
    proyecto: 'Proyecto: BerdStudio'
  },
  {
    name: 'Black Ristretto',
    ubicacion: 'Salamanca, Madrid',
    tipo: 'Local',
    fecha: 'Enero 2023',
    image: '/images/Ristretto/portada.jpg',
    url: '/ProyectosMobile/Ristretto',
  }
]

const ReformasMobile = () => {
  return (
    <div>
      <header className="fixed top-0 z-10 w-full">
        <Navbar />
      </header>
      <ScrollButton />
      <div>
        <h3 className='w-[60%] mx-auto text-2xl pt-[5rem] mb-4 font-Montserrat font-medium text-gray-400 fadeIn text-center'>Viviendas</h3>
        <div className="mx-auto grid grid-cols-1 gap-8 font-Montserrat w-[90%] fadeIn">
          {proyectos.map((image, index) => {
            return (
              <div
                className="relative w-full h-[30rem] cursor-pointer hover:opacity-75"
                key={image.name}
              >
                <Link href={image.url} >
                  <Image
                    className="object-cover w-full h-full"
                    src={image.image}
                    alt={image.ubicacion}
                    width={1200}
                    height={1200}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white">{image.name}</h3>
                    <p className="text-lg text-white">{image.tipo}</p>
                    <p className="text-lg text-white">{image.ubicacion}</p>
                    <p className="text-lg text-white">{image.fecha}</p>
                    <p className="text-lg text-white">{image.proyecto}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className='w-[60%] mx-auto text-2xl pt-[4rem] mb-4 font-Montserrat font-medium text-gray-400 fadeIn text-center'>Locales</h3>
        <div className="mx-auto pb-10 grid grid-cols-1 gap-8 font-Montserrat w-[90%] fadeIn">
          {proyectosLocales.map((image, index) => {
            return (
              <div
                className="relative w-full h-[30rem] cursor-pointer hover:opacity-75"
                key={image.name}
              >
                <Link href={image.url} >
                  <Image
                    className="object-cover w-full h-full"
                    src={image.image}
                    alt={image.ubicacion}
                    width={1200}
                    height={1200}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                    <h3 className="text-2xl font-bold text-white">{image.name}</h3>
                    <p className="text-lg text-white">{image.tipo}</p>
                    <p className="text-lg text-white">{image.ubicacion}</p>
                    <p className="text-lg text-white">{image.fecha}</p>
                    <p className="text-lg text-white">{image.proyecto}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReformasMobile