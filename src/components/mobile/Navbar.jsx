import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white bg-opacity-80 px-4 py-3 relative">
      <div className="relative">
        <button
          className="flex items-center px-3 py-2 border rounded text-black hover:bg-gray-200 focus:outline-none mr-10"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block absolute bg-white mt-2 rounded-md shadow-lg" : "hidden"
          } md:flex md:items-center md:ml-4 mobile-menu`}
          style={{ top: "calc(100% + 0.5rem)", left: 0 }}
        >
          <Link href="/">
            <p className="text-black hover:text-gray-900 block px-4 py-2 font-medium text-center border-gray-100 border-b-2 mx-auto ">
              Inicio
            </p>
          </Link>
          <Link href="/ReformasMobile">
            <p className="text-black hover:text-gray-900 block px-4 py-2 font-medium border-gray-100 border-b-2 mx-auto">
              Proyectos
            </p>
          </Link>
          <Link href="/ContactoMobile">
            <p className="text-black hover:text-gray-900 block px-4 py-2 font-medium text-center">
              Contacto
            </p>
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <p>
          <img
            src="/images/logo-ns-simple-negro.png"
            alt="Logo"
            className="h-6 mr-2"
          />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
