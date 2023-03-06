import React from "react";
import Navbar from "@/components/desktop/Navbar";
import ScrollButton from "@/components/desktop/ScrollButton";
import ContactForm from "@/components/desktop/ContactForm";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "@/components/desktop/Footer";
import Link from "next/link";

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <ScrollButton />
      <div className="w-full bg-white h-fit pt-[9rem]">
        <h1 className="text-xl text-center text-black font-Montserrat fadeIn">
          Converti tu idea en una realidad... <br />
          <span className="pt-2 text-5xl font-bold text-center text-black font-Montserrat">
            Contactanos
          </span>
        </h1>
        <div className="pb-20 fadeIn">
          <ContactForm />
        </div>
      </div>
      <div className="pt-20 text-xl text-center text-black bg-slate-100 font-Montserrat">
        <h1>
          Contactame por mis redes, <br />{" "}
          <span className="pt-2 text-4xl font-bold font-Montserrat">
            para ver más de mis trabajos
          </span>
        </h1>
        <div className="flex grid-cols-3 text-4xl pt-16 mb-10 mx-[20rem] font-Montserrat">
          <div className="w-[30%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="mx-auto" />
              <p className="pt-4 mx-auto text-xl text-center">@ns_reforma</p>
            </a>
          </div>
          <div className="w-[30%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105">
            <a href="https://wa.me/34617800682" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mx-auto" />
              <p className="pt-4 mx-auto text-xl text-center">
                (+34) 617 800 682
              </p>
            </a>
          </div>
          <div className="w-[30%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105">
            <a href="mailto:arq.nschnaider@gmail.com" target="_blank" rel="noopener noreferrer">
              <FiMail className="mx-auto" />
              <p className="pt-4 mx-auto text-xl text-center">
                arq.nschnaider@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className="w-4/5 mx-auto pb-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="relative shadow-lg">
              <Link href="/Proyectos/Ruiz">
              <img className="w-full h-full object-cover" src="https://i.postimg.cc/BZFWXPjP/contacto1.jpg" alt="Imagen 1" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                <p className="text-white text-2xl">Trabajo realizado en Ruiz</p>
              </div>
              </Link>
            </div>
            <div className="relative shadow-lg">
              <Link href="/Proyectos/Osom">
              <img className="w-full h-full object-cover" src="https://i.postimg.cc/3wbMDgjm/contacto2.jpg" alt="Imagen 2" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                <p className="text-white text-2xl">Trabajo realizado en Osom</p>
              </div>
              </Link>
            </div>
            <div className="relative shadow-lg">
              <Link href='/Proyectos/Abtao'>
              <img className="w-full h-full object-cover " src="images/Abtao/portada.jpg" alt="Imagen 3" />
              <div className="cursor-pointer absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                <p className="text-white text-2xl">Trabajo realizado en Abtao</p>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
