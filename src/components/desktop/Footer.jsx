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
      </div>
      <div className="flex justify-center space-x-4 py-4 mx-auto text-xl mt-10" style={{ borderTop: "solid 1px #718096", width: "70%" }}>
        <span className="text-white">
          <FaInstagram />
        </span>
        <span className="text-white">
          <FaWhatsapp />
        </span>
        <span className="text-white">
          <FiMail />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
