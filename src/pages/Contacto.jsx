import React from "react";
import Navbar from "@/components/desktop/Navbar";
import ContactForm from "@/components/desktop/ContactForm";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full bg-zinc-700 h-fit">
        <h1 className="pt-10 text-xl text-center text-white font-Montserrat">
          Converti tu idea en una realidad... <br />
          <span className="pt-2 text-5xl font-bold text-center text-white font-Montserrat">
            Contactanos
          </span>
        </h1>
        <div className="pb-20">
          <ContactForm />
        </div>
      </div>
      <div className="pt-20 text-xl text-center text-black bg-white font-Montserrat">
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
      </div>
      <div className="w-full pt-20 pb-20 bg-stone-400">
        <h3 className="text-5xl font-bold text-center text-white font-Montserrat">
          Encuentranos:
        </h3>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="w-1/2 mx-auto">
            <img src="images/contacto.jpg" alt="Imagen" className="m-auto shadow-2xl" />
          </div>
          <div className="w-1/2">
            <p className="mt-40 text-lg text-white font-Montserrat">
              Dirección: Zabaleta 23, Madrid, 28002
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.4222920005996!2d-3.674916187566982!3d40.44378946442691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228c572a45f39%3A0x723d316a71078081!2sC.%20de%20Zabaleta%2C%2023%2C%2028002%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1677605382651!5m2!1ses!2sar"
              width="100%"
              height="400"
              className="w-full mt-2 h-96"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
