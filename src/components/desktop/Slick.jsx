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
          slidesToScroll: 2
        };
    return (
      <div className="bg-stone-800 py-10 pb-10">
        <Slider {...settings} className="mx-8">
          <Link href='/Proyectos/Osom'>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/YCjrRp1B/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
          <Link href='/Proyectos/Ristretto'>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/HkzNXcNQ/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
          <Link href='/Proyectos/Ruiz'>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/TPDR8C7k/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
          <Link href='/Proyectos/Abtao'>
          <div className="w-full h-[24rem] flex items-center justify-center ">
            <img src="https://i.postimg.cc/zf3J4rZR/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
          <Link href='/Proyectos/Entenza'>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/J0sYWp7x/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
          <Link href='/Proyectos/Hilario'>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/yxB6ycTL/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
          <Link href='/Proyectos/Margallo'>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/c4x4K7CH/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          </Link>
        </Slider>
      </div>
    );
  }
}