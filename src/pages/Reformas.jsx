import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/desktop/Navbar';
import Footer from '@/components/desktop/Footer';
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
    url: '/Proyectos/Hilario',
  },
  {
    name: 'Margallo',
    ubicacion: 'Tetúan, Madrid',
    tipo: 'Vivienda',
    fecha: 'Abril 2022',
    image: '/images/Margallo/portada.jpg',
    url: '/Proyectos/Margallo',
  },
  {
    name: 'Ruiz',
    ubicacion: 'Malasaña, Madrid',
    tipo: 'Vivienda',
    fecha: 'Diciembre 2021',
    image: '/images/Ruiz/portada.jpg',
    url: '/Proyectos/Ruiz',
  },
  {
    name: 'Abtao',
    ubicacion: 'Pacifico, Madrid',
    tipo: 'Vivienda',
    fecha: 'Septiembre 2022',
    image: '/images/Abtao/portada.jpg',
    url: '/Proyectos/Abtao',
  }
];

const proyectosLocales = [
  {
    name: 'Osom',
    ubicacion: 'Letras, Madrid',
    tipo: 'Local',
    fecha: 'Diciembre 2022',
    image: '/images/Osom/portada.jpg',
    url: '/Proyectos/Osom',
  },
]

const Reformas = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div>
        <h3 className='w-[60%] mx-auto text-4xl pt-[10rem] mb-4 font-Montserrat font-medium text-center fadeIn'>Viviendas:</h3>
        <div className="mx-auto grid grid-cols-3 max-2xl:grid-cols-2 gap-8 font-Montserrat w-[60%] fadeIn">
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-all duration-500">
                    <h3 className="text-white text-2xl font-bold">{image.name}</h3>
                    <p className="text-white text-lg">{image.ubicacion}</p>
                    <p className="text-white text-lg">{image.tipo}</p>
                    <p className="text-white text-lg">{image.fecha}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
      <h3 className='w-[60%] mx-auto text-4xl pt-[8rem] mb-4 font-Montserrat font-medium text-center fadeIn'>Locales:</h3>
      <div className="mx-auto pb-10 grid grid-cols-3 max-2xl:grid-cols-2 gap-8 font-Montserrat w-[60%] fadeIn">
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
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white text-2xl font-bold">{image.name}</h3>
                  <p className="text-white text-lg">{image.ubicacion}</p>
                  <p className="text-white text-lg">{image.tipo}</p>
                  <p className="text-white text-lg">{image.fecha}</p>
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

export default Reformas;
