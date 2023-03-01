import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {FiMail} from 'react-icons/fi'
import { useRouter } from 'next/router';
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-wrap items-center justify-between p-8 bg-black font-Montserrat">
      <div className="flex items-center flex-shrink-0 text-white">
      <img src='images/logo-negro.jpg' className='w-14 h-14' />
        <span className="text-xl tracking-tight ml-[0rem] text-slate-400">Nicolas <span className='text-white'>Schnaider</span></span>
      </div>
      <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
        <div className="mx-auto text-xl flex ">
          <Link href="/">
            <p className={router.asPath === '/' ? 'block mt-10 lg:inline-block lg:mt-0 text-slate-400 hover:text-white mr-10 active navbarSelected' : 'block mt-10 lg:inline-block lg:mt-0 text-slate-400 hover:text-white mr-10'}>
              Inicio
            </p>
          </Link>
          <Link href="/Reformas">
            <p className={router.asPath === '/Reformas' ? 'block mt-10 lg:inline-block lg:mt-0 text-slate-400 hover:text-white mr-10 active navbarSelected' : 'block mt-10 lg:inline-block lg:mt-0 text-slate-400 hover:text-white mr-10'}>
              Reformas
            </p>
          </Link>
          <Link href="/Contacto">
            <p className={router.asPath === '/Contacto' ? 'block mt-10 lg:inline-block lg:mt-0 text-slate-400 hover:text-white active navbarSelected' : 'block mt-10 lg:inline-block lg:mt-0 text-slate-400 hover:text-white'}>
              Contacto
            </p>
          </Link>
        </div>

        <div className='mr-[2rem] text-xl'>
          <a href="#" className="inline-block mr-4 text-slate-400 hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="inline-block mr-4 text-slate-400 hover:text-white">
            <FaWhatsapp />
          </a>
          <a href="#" className="inline-block text-slate-400 hover:text-white">
            <FiMail />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
