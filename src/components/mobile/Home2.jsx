import React from "react";
import { FaHome, FaHardHat } from "react-icons/fa";
import { FiClock } from 'react-icons/fi'
import Link from "next/link";

const Home2 = () => {
  return (
    <div>
      <div className="w-full text-black bg-white font-Montserrat">
        <h3 className="pt-12 text-3xl font-bold text-center">Sobre Nosotros</h3>
        <p className="mx-auto text-justify text-[15px] font-Montserrat pt-4 w-[80%] leading-7">
        Somos un estudio que nace de nuestra pasión por fusionar diseño y construcción. Cada proyecto es un nuevo reto donde se transforman la luz, el espacio, las ingenierías y el detalle, con el objetivo de cubrir las necesidades de uso, confort y coste del cliente.
        </p>
      </div>
      <div className="pt-16 pb-16 text-3xl leading-6 text-black font-Montserrat">
        <div className="mx-auto text-justify">
          <div className="w-[80%] mx-auto">
            <p className="pt-4 mx-auto font-medium text-center">
            Transparencia & Compromiso
            </p>
            <p className="pt-4 text-[13px] mx-auto">
            Estamos comprometidos en proporcionar una experiencia de construcción transparente y responsable con nuestros clientes. Trabajamos con los más altos estándares de calidad, eficiencia y atención al detalle.
            </p>
          </div>
          <div className="w-[80%] mx-auto pt-16">
            <p className="pt-4 mx-auto font-medium text-center">Honestidad</p>
            <p className="pt-4 text-[13px] mx-auto">
            Confía en nosotros para hacer realidad tu proyecto. Desde el inicio hasta el final, te guiaremos de manera profesional y cercana para asegurarnos de que tus ideas se conviertan en realidad.
            </p>
          </div>
          <div className="w-[80%] mx-auto pt-16">
            <p className="pt-4 mx-auto font-medium text-center">
            Saber hacer
            </p>
            <p className="pt-4 text-[13px]  mx-auto">
            Nuestro equipo está altamente calificado y cuentan con años de experiencia en la industria. Nos mantenemos actualizados con las últimas tendencias y tecnologías en el campo de la arquitectura y la construcción, para ofrecer soluciones innovadoras y eficientes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full px-4 mb-10">
        <div className="flex flex-col items-center mb-4 w-[85%] mx-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-4 font-medium text-white bg-black rounded-full">
            <FaHome className="mx-auto text-2xl" />
          </div>
          <p className="mb-2 text-lg font-medium text-center text-black">
            Definición del proyecto
          </p>
          <div className="w-full h-1 mb-2 bg-black"></div>
          <p className="text-base text-center text-black">
            Planos, propuesta de materiales y presupuesto
          </p>
        </div>
        <div className="flex flex-col items-center mb-4 w-[85%] mx-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-4 font-medium text-white bg-black rounded-full">
            <FaHardHat className="mx-auto text-2xl" />
          </div>
          <p className="mb-2 text-lg font-medium text-center text-black">
            Seguimiento
          </p>
          <div className="w-full h-1 mb-2 bg-black"></div>
          <p className="text-base text-center text-black">
            En el proceso de ejecución de obra y gestión con asesoramiento
            continuo
          </p>
        </div>
        <div className="flex flex-col items-center mb-4 w-[85%] mx-auto">
          <div className="flex items-center justify-center w-12 h-12 mb-4 font-medium text-white bg-black rounded-full">
            <FiClock className="mx-auto text-2xl" />
          </div>
          <p className="mb-2 text-lg font-medium text-center text-black">
            Entrega llave en mano
          </p>
          <div className="w-full h-1 mb-2 bg-black"></div>
          <p className="text-base text-center text-black">
            Garantizando la calidad íntegra del proyecto en la fecha pactada
          </p>
        </div>
      </div>
      <div className="flex h-[25rem] bg-stone-400">
        <div className="flex flex-col items-center justify-center mx-auto ">
          <p className="mb-6 text-4xl font-extrabold text-black select-none font-Montserrat Extra Bold leading-[4rem]">
            ¿Estás pensando
            <br /> en realizar una
            <br /> reforma integral?
          </p>
          <Link href="/ContactoMobile">
            <button className="px-4 py-2 text-base font-bold text-black transition duration-500 bg-transparent rounded shadow-2xl hover:scale-105 font-Montserrat border-[3px] border-black">
              Contáctanos
            </button>
            {/* <button className="px-4 py-2 text-base font-bold text-white transition duration-500 bg-black rounded shadow-2xl hover:scale-105 font-Montserrat">
              Contáctanos
            </button> */}
          </Link>
        </div>
      </div>
      <div className="w-full h-[25rem] relative">
        <img
          className="object-cover w-full h-full"
          src="https://i.postimg.cc/Zqw4Tvrg/principal.png"
          alt="Proyecto"
        />
      </div>
    </div>
  );
};

export default Home2;
