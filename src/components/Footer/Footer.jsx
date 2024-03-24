import Link from "next/link";
import Image from "next/image";
import plezer from '@/assets/Images/PL.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillSendFill, BsTelephoneOutbound, BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="mt-4 h-max">
            <div className="container mx-auto px-4">
                <div className="flex xl:flex-wrap md:gap-16 items-center xl:items-start justify-between md:justify-evenly">
                    <div className="flex px-2 xl:px-0 ">
                        <Link href="/" className="font-black md:text-xl text-sm text-primary">
                            <div>
                                <Image src={plezer} className=' h-16  w-auto aspect-video mix-blend-darken' alt="PlezerLogo" />
                            </div><br />
                            <span className="hidden xl:block">Plezer <span className="text-secondary"> Construction</span></span>
                        </Link>
                    </div>
                    <div className="flex-1 text-xl text-secondary gap-4">
                        <h4 className="font-semibold  text-gray-700 mx-10">Contact</h4>
                        <div className="flex items-center gap-5 py-4">
                            <BsFillSendFill />
                            <a className="ml-2" href={'mailto:plezerconstruction@gmail.com'}>Plezer Construction</a>
                        </div>
                        <div className="flex items-center gap-5">
                            <BsTelephoneOutbound />
                            <Link href={'tel:+91-9825439181'}>+91-9825439181</Link>
                        </div>
                        <div className="flex items-center gap-5 py-4">
                            <BsInstagram />
                            <Link href={"https://www.instagram.com/plezerconstruction"} className="ml-2">@plezerconstruction</Link>
                        </div>
                    </div>
                    <div className="hidden xl:block text-xs md:text-xl text-secondary">
                        <p className='md:mx-10 font-semibold text-gray-700'>Get In Touch</p>
                        <div className='flex items-baseline gap-5'>
                            <FaMapMarkerAlt className="" />
                            <div><p className="flex py-4">A-105, Katira Complex,</p>
                                <p className="">RTO Relocation Site,</p>
                                <p className="py-4">Bhuj, Gujarat 370001</p></div></div>
                    </div>
                    <div className="flex-1 hidden xl:block md:text-right text-secondary">
                        <h4 className="font-semibold md:text-xl text-gray-700">Page Links</h4>
                        <div className="flex flex-col md:text-right">
                            <Link href="/" className="pb-4 py-4">Home Page</Link>
                            <Link href="/happyhomes" className="pb-4">Happy Homes Page</Link>
                            <Link href="/about" className="pb-4">About Page</Link>
                            <Link href="/contact" className="pb-4">Contact Page</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary/75 h-10 md:h-16 xl:h-32 w-full bottom-0"></div>
        </footer>
    )
};
export default Footer;