import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsPerson } from "react-icons/bs"; // Add missing import for react-icons

const RenderSlides = ({ slides }) => {
  return slides.map((slide, index) => (
    <div className="carousel-slide focus:outline-none outline-none hover:scale-105 transition duration-300 ease-in-out" key={index}>
      <Image className='carousel-image p-4 focus:outline-none outline-none md:w-[500px]' src={slide.imageSrc} alt={slide.alt} />
    </div>
  ));
};


const RenderSlides2 = ({ slides }) => {
  return slides.map((slide, index) => (
    <div key={index} className="border-2 border-gray-200">
      <figure className="flex flex-col h-96 justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r ">
        <figcaption className="flex flex-col justify-center items-center space-x-3">
          <BsPerson className="border-2 rounded-full text-primary text-xl border-primary" />
          <div>{slide.customerName}</div>
          <div className="space-y-0.5 font-medium  text-left">
            <div className="text-sm font-light text-secondary ">Home Owner Happy Homes</div>
          </div>
        </figcaption>
        <blockquote className="mx-auto mt-4 max-w-2xl text-secondary">
          <h3 className="text-sm xl:text-lg font-semibold text-primary ">{slide.comment}</h3>
          <p className="text-xs xl:text-lg xl:text-justify">{slide.description}</p>
        </blockquote>
      </figure>
    </div>
  ));
};

const SliderComponent = ({ slides, img }) => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Show 2 slides at a time in desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 1, // Show 1 slide at a time on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const renderSlides = () => {
  //   return slides.map((slide, index) => (
  //     <div className="carousel-slide focus:outline-none outline-none hover:scale-105 transition duration-300 ease-in-out" key={index}>
  //       <Image className='carousel-image p-4 focus:outline-none outline-none md:w-[500px]' src={slide.imageSrc} alt={slide.alt} />
  //     </div>
  //   ));
  // };


  // const renderSlides2 = () => {
  //   return slides.map((slide, index) => (
  //     <div key={index} className="border-2 border-gray-200">
  //       <figure className="flex flex-col h-96 justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r ">
  //         <figcaption className="flex flex-col justify-center items-center space-x-3">
  //           <BsPerson className="border-2 rounded-full text-primary text-xl border-primary" />
  //           <div>{slide.customerName}</div>
  //           <div className="space-y-0.5 font-medium  text-left">
  //             <div className="text-sm font-light text-secondary ">Home Owner Happy Homes</div>
  //           </div>
  //         </figcaption>
  //         <blockquote className="mx-auto mt-4 max-w-2xl text-secondary">
  //           <h3 className="text-sm xl:text-lg font-semibold text-primary ">{slide.comment}</h3>
  //           <p className="text-xs xl:text-lg xl:text-justify">{slide.description}</p>
  //         </blockquote>
  //       </figure>
  //     </div>
  //   ));
  // };


  return (
    <div className='w-full justify-center'>
      <Slider {...settings} className="carousel flex">
        {img ? <RenderSlides slides={slides} /> : <RenderSlides2 slides={slides} />}
      </Slider>
    </div >
  )
}

export default SliderComponent