import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default class Slick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
    return (
      <div className="py-10 pb-10 bg-stone-800">
        <h1 className="mb-2 text-3xl font-bold text-center text-white font-Montserrat">
          Nuestros Proyectos
        </h1>
        <Slider {...settings} className="mx-8">
          <div className="relative">
            <Link href="/Proyectos/Osom">
              <div className="w-full h-[24rem] flex items-center justify-center select-none">
                <img
                  src="https://i.postimg.cc/YCjrRp1B/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Osom Cantine
                    </p>
                    <p className="text-xl text-center text-white">Local</p>
                    <p className="text-xl text-center text-white">Letras, Madrid</p>
                    <p className="text-xl text-center text-white">Diciembre 2022</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Link href="/Proyectos/Ristretto">
              <div className="w-full h-[24rem] flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/HkzNXcNQ/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Black Ristretto
                    </p>
                    <p className="text-xl text-center text-white">Local</p>
                    <p className="text-xl text-center text-white">Salamanca, Madrid</p>
                    <p className="text-xl text-center text-white">Enero 2023</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/Proyectos/Ruiz">
              <div className="w-full h-[24rem] flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/TPDR8C7k/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Ruiz
                    </p>
                    <p className="text-xl text-center text-white">Vivienda</p>
                    <p className="text-xl text-center text-white">Malasaña, Madrid</p>
                    <p className="text-xl text-center text-white">Diciembre 2021</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/Proyectos/Abtao">
              <div className="w-full h-[24rem] flex items-center justify-center ">
                <img
                  src="https://i.postimg.cc/zf3J4rZR/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Abtao
                    </p>
                    <p className="text-xl text-center text-white">Vivienda</p>
                    <p className="text-xl text-center text-white">Pacifico, Madrid</p>
                    <p className="text-xl text-center text-white">Septiembre 2022</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/Proyectos/Entenza">
              <div className="w-full h-[24rem] flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/J0sYWp7x/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Entenza
                    </p>
                    <p className="text-xl text-center text-white">Vivienda</p>
                    <p className="text-xl text-center text-white">l Eixample, Barcelona</p>
                    <p className="text-xl text-center text-white">Septiembre 2022</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/Proyectos/Hilario">
              <div className="w-full h-[24rem] flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/yxB6ycTL/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Hilario
                    </p>
                    <p className="text-xl text-center text-white">Vivienda</p>
                    <p className="text-xl text-center text-white">Lucero, Madrid</p>
                    <p className="text-xl text-center text-white">Agosto 2022</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="relative">
            <Link href="/Proyectos/Margallo">
              <div className="w-full h-[24rem] flex items-center justify-center">
                <img
                  src="https://i.postimg.cc/c4x4K7CH/portada.jpg"
                  className="object-cover w-full h-full p-2"
                  alt="Placeholder image"
                />
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-gray-800 bg-opacity-0 opacity-0 cursor-pointer hover:bg-opacity-50 hover:opacity-100">
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold text-white">
                      Trabajo realizado en Margallo
                    </p>
                    <p className="text-xl text-center text-white">Vivienda</p>
                    <p className="text-xl text-center text-white">Tetúan, Madrid</p>
                    <p className="text-xl text-center text-white">Abril 2022</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}
