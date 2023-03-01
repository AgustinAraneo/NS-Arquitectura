import React from "react";
import Navbar from "@/components/desktop/Navbar";
import ContactForm from "@/components/desktop/ContactForm";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "@/components/desktop/Footer";

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-zinc-700 h-fit ">
        <h1 className="pt-10 text-xl text-center text-white font-Montserrat fadeIn">
          Converti tu idea en una realidad... <br />
          <span className="pt-2 text-5xl font-bold text-center text-white font-Montserrat">
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
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mx-auto" />
              <p className="pt-4 mx-auto text-xl text-center">
                (+34) 617 800 682
              </p>
            </a>
          </div>
          <div className="w-[30%] mx-auto hover:text-zinc-700 transition duration-500 hover:scale-105">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FiMail className="mx-auto" />
              <p className="pt-4 mx-auto text-xl text-center">
                arq.nschnaider@gmail.com
              </p>
            </a>
          </div>
        </div>
        <div className="w-4/5 mx-auto pb-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="relative">
              <img className="w-full h-full object-cover" src="https://i.postimg.cc/BZFWXPjP/contacto1.jpg" alt="Imagen 1" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                <p className="text-white text-2xl">Título de la imagen 1</p>
              </div>
            </div>
            <div className="relative">
              <img className="w-full h-full object-cover" src="https://i.postimg.cc/3wbMDgjm/contacto2.jpg" alt="Imagen 2" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                <p className="text-white text-2xl">Título de la imagen 2</p>
              </div>
            </div>
            <div className="relative">
              <img className="w-full h-full object-cover " src="https://i.postimg.cc/hP9q3QgR/contacto3.jpg" alt="Imagen 3" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-0 flex items-center justify-center transition-all duration-300 opacity-0 hover:bg-opacity-50 hover:opacity-100">
                <p className="text-white text-2xl">Trabajo realizado en F014</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2">
          <h3 className="mt-[10rem] font-Montserrat text-black text-5xl font-bold">Encuentranos:</h3>
        <iframe className="w-full mt-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.484995371225!2d-3.6758817843504987!3d40.44240136200122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c572a45f39%3A0x723d316a71078081!2sC.%20de%20Zabaleta%2C%2023%2C%2028002%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sar!4v1677627272835!5m2!1ses-419!2sar" width="1920" height="400" style={{border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacto;
