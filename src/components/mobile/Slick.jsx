import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div className="w-full h-[22rem] flex items-center justify-center ">
            <img src="https://i.postimg.cc/0N474wqP/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/GmS2nBcp/portada-Form.png" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/yxB6ycTL/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/c4x4K7CH/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/YCjrRp1B/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="https://i.postimg.cc/TPDR8C7k/portada.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="images/Osom/3.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
          <div className="w-full h-[22rem] flex items-center justify-center">
            <img src="images/Osom/4.jpg" className="object-cover w-full h-full p-2" alt="Placeholder image" />
          </div>
        </Slider>
      </div>
    );
  }
}