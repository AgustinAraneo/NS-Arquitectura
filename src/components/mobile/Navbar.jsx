import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'



const Navbar = () => {
    const router = useRouter();
  return (
    <nav className="fixed top-0 w-full flex flex-wrap items-center justify-between  bg-white/90 font-Montserrat z-50">
      <div className="flex-shrink-0 text-black flex flex-col mx-auto pb-2 pt-4">
        <img src='https://i.postimg.cc/P5MHswSG/logo-ns-simple-negro.png' className='w-[3rem] h-[1.3rem]' />
      </div>
      <div className="flex-grow block w-full">
        <div className="text-xl flex font-Montserrat font-semibold w-full justify-center gap-x-6 pb-3">
          <Link href="/">
            <p className={router.asPath === '/' ? 'block text-black hover:text-black active navbarSelected' : 'block text-black hover:text-black'}>
              Inicio
            </p>
          </Link>
          <Link href="/Reformas">
            <p className={router.asPath === '/Reformas' ? 'block text-black hover:text-black active navbarSelected' : 'block text-black hover:text-black'}>
              Proyectos
            </p>
          </Link>
          <Link href="/Contacto">
            <p className={router.asPath === '/Contacto' ? 'block text-black hover:text-black active navbarSelected' : 'block text-black hover:text-black'}>
              Contacto
            </p>
          </Link>
        </div>
      </div>
      </nav>
  )
}

export default Navbar