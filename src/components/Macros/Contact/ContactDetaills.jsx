import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
const ContactDetails = () => {
  return (
    <div className='flex flex-col-reverse gap-5 justify-start font-poppins'>
      <div className="">
        <p className='text-3xl text-primary mx-10'>Get In Touch</p>
        <div className='flex items-baseline gap-5'>
          <FaMapMarkerAlt className="text-xl" />
          <div><p className="flex py-4">Katira Complex, A-105,</p>
            <p className="">RTO Relocation Site,</p>
            <p className="py-4">Bhuj, Gujarat 370001</p></div></div>
      </div>
      <div className=''>
        <p className='text-3xl text-primary mx-10'>Contact</p>
        <div className="flex flex-col contact-info">
          <div className='flex gap-5 items-center py-4' onClick={() => window.location.href = 'tel:+91-9825439181'}>
            <FaPhoneAlt /> +91-9825439181
          </div>
          <div className='flex gap-5 items-center' onClick={() => window.location.href = 'mailto:plezerconstruction@gmail.com'}>
            <FaEnvelope /> plezerconstruction@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;