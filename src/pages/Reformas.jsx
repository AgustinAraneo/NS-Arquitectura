import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/desktop/Navbar';
import Footer from '@/components/desktop/Footer';
import Link from 'next/link';

const proyectos = [
  {
    name: 'Abtao',
    title: 'Abtao',
    image: '/images/Abtao/6.jpg',
    url: '/',
  },
  {
    name: 'Hilario',
    title: 'Hilario',
    image: '/images/Hilario/4.jpg',
    url: '/Contacto',
  },
  {
    name: 'Osom',
    title: 'Osom',
    image: '/images/Osom/1.jpg',
    url: '/prueba',
  },
  {
    name: 'Margallo',
    title: 'Margallo',
    image: '/images/Margallo/1.jpg',
    url: '/prueba',
  },
  {
    name: 'Ruiz',
    title: 'Prueba',
    image: '/images/Ruiz/1.jpg',
    url: '/Proyectos/Ruiz',
  },
  {
    name: 'Hilario',
    title: 'Hilario',
    image: '/images/Hilario/4.jpg',
    url: '/Contacto',
  }
];

const Reformas = () => {
  return (
    <div>
      <Navbar />
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
