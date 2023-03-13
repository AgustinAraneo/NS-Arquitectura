import React from "react";
import { FaHome, FaHardHat } from "react-icons/fa";
import { GrZoomIn } from "react-icons/gr";
import Link from "next/link";

const Home2 = () => {
  return (
    <div>
      <div className="w-full text-black bg-white font-Montserrat">
        <h3 className="pt-12 text-3xl font-bold text-center">Nosotros</h3>
        <p className="mx-auto text-justify text-base font-Montserrat pt-4 w-[80%] leading-7">
          Somos un estudio de arquitectura y construcción centrado en el mercado
          español. Nace de nuestra pasión por fusionar el diseño y la
          construcción. Cada proyecto es un nuevo reto donde se transforman la
          luz, el espacio, las ingenierías y el detalle, con el objetivo de
          cubrir las necesidades de uso, confort y coste del cliente.
        </p>
      </div>
      <div className="pt-16 pb-16 text-3xl leading-6 text-black font-Montserrat">
        <div className="mx-auto text-justify">
          <div className="w-[80%] mx-auto">
            <FaHome className="mx-auto" />
            <p className="pt-4 mx-auto font-medium text-center">
              Años de experiencia
            </p>
            <p className="pt-4 text-[13px] mx-auto">
              Nuestro equipo está altamente calificado y cuentan con años de
              experiencia en la industria. Nos mantenemos actualizados con las
              últimas tendencias y tecnologías en el campo de la arquitectura y
              la construcción, para ofrecer soluciones innovadoras y eficientes.
            </p>
          </div>
          <div className="w-[80%] mx-auto pt-16">
            <FaHardHat className="mx-auto" />
            <p className="pt-4 mx-auto font-medium text-center">Confianza</p>
            <p className="pt-4 text-[13px] mx-auto">
              Confía en nosotros para hacer realidad tu proyecto. Desde el
              inicio hasta el final, te guiaremos de manera profesional y
              cercana para asegurarnos de que tu visión se convierta en
              realidad.
            </p>
          </div>
          <div className="w-[80%] mx-auto pt-16">
            <GrZoomIn className="mx-auto" />
            <p className="pt-4 mx-auto font-medium text-center">
              Responsabilidad
            </p>
            <p className="pt-4 text-[13px]  mx-auto">
              Estamos comprometidos en proporcionar una experiencia de
              construcción transparente y sin complicaciones para nuestros
              clientes. Trabajamos con los más altos estándares de calidad,
              eficiencia y atención al detalle, para que tu proyecto sea
              entregado a tiempo y en condiciones.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full px-4 mb-10">
        <div className="flex flex-col items-center w-full mb-4">
          <div className="flex items-center justify-center w-16 h-16 mb-4 font-medium text-white bg-black rounded-full">
            1
          </div>
          <p className="mb-2 text-lg font-medium text-center text-black">
            Definición del proyecto
          </p>
          <div className="w-full h-1 mb-2 bg-black"></div>
          <p className="text-base text-center text-black">
            Planos, propuesta de materiales y presupuesto
          </p>
        </div>
        <div className="flex flex-col items-center w-full mb-4">
          <div className="flex items-center justify-center w-16 h-16 mb-4 font-medium text-white bg-black rounded-full">
            2
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
        <div className="flex flex-col items-center w-full mb-4">
          <div className="flex items-center justify-center w-16 h-16 mb-4 font-medium text-white bg-black rounded-full">
            3
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
          <p className="mb-6 text-4xl font-extrabold text-black select-none font-Montserrat Extra Bold">
            ¿Estás pensando
            <br /> en realizar una
            <br /> reforma integral?
          </p>
          <Link href="/ContactoMobile">
            <button className="px-4 py-2 text-base font-bold text-white transition duration-500 bg-black rounded shadow-2xl hover:scale-105 font-Montserrat">
              Contáctanos
            </button>
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
