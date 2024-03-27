import Image from "next/image";
import { heading1, heading2 } from "./Headings.jsx";
import { hero_section_slides } from "@/Data/slides.js";
import Testimonials from "../Testimonials/Testimonials.jsx";
import { Hero1 } from "@/assets/assets.js";
import SliderComponent from '../SliderComponent/SliderComponent.jsx';
import Link from "next/link.js";

const HeroSection = () => {

  return (
    <section className="flex flex-col items-center gap-3 m-auto">
      <SliderComponent slides={hero_section_slides} img={false} />
      <div className='w-full h-fit flex md:flex-row flex-col justify-around items-center md:m-16 gap-x-8'>
        <div className="flex flex-col justify-start gap-3">
          {heading1}
          {heading2}
        </div>
        {/* HomePage Image */}
        <Link href={'/happyhomes'}><Image src={Hero1} alt="Hero1" className="aspect-auto max-h-[500px] w-[500px] object-contain" /></Link>
      </div>
      <Testimonials />
    </section>

  );
};

export default HeroSection;


