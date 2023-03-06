import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="bg-stone-800 py-10 pb-10">
        <Slider {...settings} className="mx-8">
          <Link href='/ProyectosMobile/Osom'>
            <div className="w-full h-[22rem] flex items-center justify-center">
              <img src="https://i.postimg.cc/YCjrRp1B/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
          <Link href='/ProyectosMobile/Ristretto'>
            <div className="w-full h-[22rem] flex items-center justify-center">
              <img src="https://i.postimg.cc/HkzNXcNQ/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
          <Link href='/ProyectosMobile/Ruiz'>
            <div className="w-full h-[22rem] flex items-center justify-center">
              <img src="https://i.postimg.cc/TPDR8C7k/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
          <Link href='/ProyectosMobile/Abtao'>
            <div className="w-full h-[22rem] flex items-center justify-center ">
              <img src="https://i.postimg.cc/zf3J4rZR/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
          <Link href='/ProyectosMobile/Entenza'>
            <div className="w-full h-[22rem] flex items-center justify-center">
              <img src="https://i.postimg.cc/J0sYWp7x/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
          <Link href='/ProyectosMobile/Hilario'>
            <div className="w-full h-[22rem] flex items-center justify-center">
              <img src="https://i.postimg.cc/yxB6ycTL/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
          <Link href='/ProyectosMobile/Margallo'>
            <div className="w-full h-[22rem] flex items-center justify-center">
              <img src="https://i.postimg.cc/c4x4K7CH/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
            </div>
          </Link>
        </Slider>
      </div>
    );
  }
}