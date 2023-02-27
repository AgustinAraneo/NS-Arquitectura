import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link'

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black/80 p-8 font-Montserrat">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="text-xl tracking-tight ml-[10rem] text-slate-400">Nicolas <span className='text-white'>Schnaider</span></span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl mx-auto">
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

        <div className='mr-[10rem] text-xl'>
          <a href="#" className="inline-block text-slate-400 hover:text-white mr-4">
            <FaFacebook />
          </a>
          <a href="#" className="inline-block text-slate-400 hover:text-white mr-4">
            <FaTwitter />
          </a>
          <a href="#" className="inline-block text-slate-400 hover:text-white">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
