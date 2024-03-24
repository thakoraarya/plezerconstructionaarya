import CountAnimation from '../Count Animation/CountAnimation.jsx';
import Link from 'next/link.js';
export const heading1 = (
  <div className='flex flex-col w-full gap-4'>
    <h1 className="font-heading text-primary text-3xl border-b-2 border-gray-200 pb-8">
      Explore our Exquisite Site: <span className='text-tertiary-dark font-serif italic font-thin'>Happy Homes</span>
    </h1>
    <p className=" max-w-lg text-pretty text-secondary text-justify text-xl">
      Embark on a Journey of Unparalleled Luxury and Architectural Marvel with Our
      Exceptional Bungalows.
    </p>
    <button className="text-center py-2">
      <Link href="/happyhomes" className="py-2.5 px-5 mr-2 text-sm font-medium text-primary focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Show more...</Link>
    </button>
  </div>
);
const paragraphClass = 'text-xs lg:text-xl text-center';
const animationDivClass = 'flex gap-2 items-center text-secondary';
const headingDivClass = 'flex gap-3 flex-col items-center justify-center';
export const heading2 = (
  <div className="flex justify-between pb-8 md:pb-0">
    <div className={headingDivClass}>
      <p className={paragraphClass}>Homes Built</p>
      <div className={animationDivClass}><CountAnimation duration={3000} endValue={100} />+</div>
    </div>
    <div className={headingDivClass}>
      <p className={paragraphClass}>Satisfied Customers</p>
      <div className={animationDivClass}><CountAnimation duration={3000} endValue={100} />+</div>
    </div>
    <div className={headingDivClass}>
      <p className={paragraphClass}>Years of Experience</p>
      <div className={animationDivClass}><CountAnimation duration={3000} endValue={10} />+</div>
    </div>
  </div>
);