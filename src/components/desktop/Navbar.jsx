import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import { useRouter } from 'next/router';
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap items-center justify-between p-8 bg-white font-Montserrat border-black border-b-2">
      <div className="items-center flex-shrink-0 text-black flex flex-col">
      <img src='images/logo-ns-simple-negro.png' className='w-[4.5rem] h-[2.3rem]' />
      <span>Arquitectura</span>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="mx-auto text-xl flex font-Montserrat font-semibold">
          <Link href="/">
            <p className={router.asPath === '/' ? 'block mt-10 lg:inline-block lg:mt-0 text-black hover:text-black mr-10 active navbarSelected' : 'block mt-10 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'}>
              Inicio
            </p>
          </Link>
          <Link href="/Reformas">
            <p className={router.asPath === '/Reformas' ? 'block mt-10 lg:inline-block lg:mt-0 text-black hover:text-black mr-10 active navbarSelected' : 'block mt-10 lg:inline-block lg:mt-0 text-black hover:text-black mr-10'}>
              Proyectos
            </p>
          </Link>
          <Link href="/Contacto">
            <p className={router.asPath === '/Contacto' ? 'block mt-10 lg:inline-block lg:mt-0 text-black hover:text-black active navbarSelected' : 'block mt-10 lg:inline-block lg:mt-0 text-black hover:text-black'}>
              Contacto
            </p>
          </Link>
        </div>

        <div className='mr-[2rem] text-[24px] font-Montserrat font-bold'>
          <a href="#" className="inline-block mr-4 text-black transition duration-500 hover:scale-110">
            <FaInstagram />
          </a>
          <a href="#" className="inline-block mr-4 text-black transition duration-500 hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="#" className="inline-block text-black transition duration-500 hover:scale-110">
            <FiMail />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
