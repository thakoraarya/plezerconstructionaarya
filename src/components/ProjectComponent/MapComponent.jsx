import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import ContactDetails from '../Macros/Contact/ContactDetaills';
const divStyle = "flex flex-col md:flex-row justify-center p-4 gap-8"
export const HappyHomesMap = () => {
  const hhDivStyle = "w-full md:w-fit flex justify-center";
  return (
    <div className={`${divStyle} items-start`}>
      <div className={`${hhDivStyle}`}>
        <div>
          <p className='text-2xl text-primary text-center'>Located At:</p>
          <div className='flex items-baseline gap-5 border-t-2 p-1 border-gray-200'>
            <FaMapMarkerAlt className="text-xl" />
            <div>
              <p className="flex pt-4">Gokuldham Rd,</p>
              <p className="">Opposite Giants Colony,</p>
              <p className="">Navavas, Madhapar,</p>
              <p className="pb-4">Bhuj, Gujarat 370020</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${hhDivStyle}`}>
        <iframe className='h-64 w-64 md:h-96 md:w-96' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.3636450214468!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950e1747dae2667%3A0x5d8110b1b4d319db!2sHappy%20Homes!5e0!3m2!1sen!2sin!4v1704673240875!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
};

export const ContactMap = () => {
  return (
    <div className={`${divStyle} items-center`}>
      <ContactDetails />
      <iframe className='h-64 w-64 md:h-96 md:w-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.146451907556!2d69.67756537536403!3d23.237757179023557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511f70c47c2923%3A0xa9188e8cb15756d5!2sPlezer%20Construction!5e0!3m2!1sen!2sin!4v1704568786074!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

