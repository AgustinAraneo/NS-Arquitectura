import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-black text-white py-6 font-Montserrat">
      <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col items-start space-y-2">
          <span className="text-lg font-bold">Contacto:</span>
          <p>Mail: arq.nschnaider@gmail.com</p>
          <p>Telefono: (+34) 617 800 682</p>
          <p>Dirección: Calle de Zabaleta, 23, 28002 Madrid.</p>
        </div>
        <div className='mt-4 w-24 h-24 '>
          <img src='images/logo-blanco.png' />
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-4 mx-auto text-2xl mt-10" style={{ borderTop: "solid 1px #718096", width: "70%" }}>
        <a href="#" className="inline-block text-slate-400 hover:text-white transition duration-500 hover:scale-105">
            <FaInstagram />
          </a>
          <a href="#" className="inline-block text-slate-400 hover:text-white transition duration-500 hover:scale-105">
            <FaWhatsapp />
          </a>
          <a href="#" className="inline-block text-slate-400 hover:text-white transition duration-500 hover:scale-105">
            <FiMail />
          </a>
      </div>
    </footer>
  );
}

export default Footer;
