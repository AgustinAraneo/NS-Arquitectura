import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/desktop/Navbar';
import Footer from '@/components/desktop/Footer';
import Link from 'next/link';
import ScrollButton from '@/components/desktop/ScrollButton';

const proyectos = [
  {
    name: 'F014',
    title: 'Hilario',
    image: '/images/F014/5.png',
    url: '/Contacto',
  },
  {
    name: 'Hilario',
    title: 'Hilario',
    image: '/images/Hilario/portada.jpg',
    url: '/Contacto',
  },
  {
    name: 'Osom',
    title: 'Osom',
    image: '/images/Osom/portada.jpg',
    url: '/prueba',
  },
  {
    name: 'Margallo',
    title: 'Margallo',
    image: '/images/Margallo/portada.jpg',
    url: '/prueba',
  },
  {
    name: 'Ruiz',
    title: 'Prueba',
    image: '/images/Ruiz/portada.jpg',
    url: '/Proyectos/Ruiz',
  },
  {
    name: 'Abtao',
    title: 'Abtao',
    image: '/images/Abtao/portada.jpg',
    url: '/',
  }
];

const Reformas = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className="mx-auto pb-10 grid grid-cols-3 max-2xl:grid-cols-2 gap-8 font-Montserrat w-[60%] pt-10 fadeIn">
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
                alt={image.title}
                width={1200}
                height={1200}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 opacity-0 hover:bg-opacity-50 hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-2xl font-bold">{image.name}</h3>
                <p className="text-white text-lg">{image.title}</p>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Reformas;
