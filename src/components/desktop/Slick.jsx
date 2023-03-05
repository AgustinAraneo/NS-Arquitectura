import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <Slider {...settings} className="mx-8 cursor-grab">
          <div className="w-full h-[24rem] flex items-center justify-center ">
            <img src="/images/Ruiz/Portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Abtao/Portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Margallo/Portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Osom/Portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Hilario/Portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Osom/2.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Osom/3.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[24rem] flex items-center justify-center">
            <img src="/images/Osom/4.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
        </Slider>
      </div>
    );
  }
}