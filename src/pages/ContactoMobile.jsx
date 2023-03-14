import React from "react";
import Navbar from "@/components/mobile/Navbar";
import ScrollButton from "@/components/desktop/ScrollButton";
import ContactForm from "@/components/mobile/ContactForm";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "@/components/mobile/Footer";
import Link from "next/link";

const Contacto = () => {
  return (
    <div>
      <header className="fixed top-0 z-10 w-full">
        <Navbar />
      </header>
      <ScrollButton />
      <div className="w-full bg-white h-fit pt-[5rem]">
        <h1 className="text-xl text-center text-black font-Montserrat fadeIn">
          <span className="pt-2 text-5xl font-bold text-center text-black font-Montserrat">
            Contáctanos
          </span>
        </h1>
        <div className="pb-20 fadeIn">
          <ContactForm />
        </div>
      </div>
      <div className="text-xl text-center text-black bg-slate-100 font-Montserrat">
        <div className="flex text-4xl pt-6 pb-10 mx-[2rem] font-Montserrat">
          <div className="mx-auto">
            <div className="w-[100%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105">
              <a
                href="https://www.instagram.com/ns_reforma/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="mx-auto" />
                <p className="pt-4 mx-auto text-sm text-center">@ns_reforma</p>
              </a>
            </div>
            <div className="w-[100%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105 pt-4">
              <a href="https://wa.me/34617800682" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mx-auto" />
                <p className="pt-4 mx-auto text-sm text-center">
                  (+34) 617 800 682
                </p>
              </a>
            </div>
            <div className="w-[100%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105 pt-4">
              <a href="mailto:arq.nschnaider@gmail.com" target="_blank" rel="noopener noreferrer">
                <FiMail className="mx-auto" />
                <p className="pt-4 mx-auto text-sm text-center">
                  arq.nschnaider@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden w-4/5 pb-10 mx-auto">
          <div className="grid grid-cols-1 gap-8">
            <div className="relative shadow-lg">
              <Link href="/ProyectosMobile/Ruiz">
                <img className="object-cover w-full h-full" src="https://i.postimg.cc/BZFWXPjP/contacto1.jpg" alt="Imagen 1" />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-700 bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                  <p className="text-2xl text-white">Trabajo realizado en Ruiz</p>
                </div>
              </Link>
            </div>
            <div className="relative shadow-lg">
              <Link href="/ProyectosMobile/Osom">
                <img className="object-cover w-full h-full" src="https://i.postimg.cc/3wbMDgjm/contacto2.jpg" alt="Imagen 2" />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                  <p className="text-2xl text-white">Trabajo realizado en Osom Cantine</p>
                </div>
              </Link>
            </div>
            <div className="relative shadow-lg">
              <Link href='/ProyectosMobile/Abtao'>
                <img className="object-cover w-full h-full " src="https://i.postimg.cc/0N474wqP/portada.jpg" alt="Imagen 3" />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <p className="text-2xl text-white">Trabajo realizado en Abtao</p>
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
