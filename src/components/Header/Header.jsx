'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import plezer from '@/assets/Images/PL.png';
const Header = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileHeaderStyle = "px-4 py-2 rounded";
  const desktopHeaderStyle = "hover:bg-primary hover:text-white px-4 py-2"
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section style={{ maxWidth: "100%" }} className="sticky top-0 bg-white w-full z-10 outline-none">
      <div className="w-full flex justify-between items-end p-1 text-lg border-b border-gray-200">
        <div>
          <Link href="/">
            <Image src={plezer} className='md:h-16 h-10 w-auto mix-blend-darken' alt="PlezerLogo" />
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex backdrop-blur-2xl items-center justify-center">
            <Link href="/" className={`border-l ${desktopHeaderStyle}  ${active === "Home" && ("bg-primary text-white")}`}>Home</Link>
            <Link href="/about" className={`border-l ${desktopHeaderStyle}  ${active === "About" && ("bg-primary text-white")}`}>About</Link>
            <Link href="/happyhomes" className={`border-l ${desktopHeaderStyle}  ${active === "HappyHomes" && ("bg-primary text-white")}`}> Happy Homes</Link>
            <Link href="/contact" className={`border-x ${desktopHeaderStyle}  ${active === "Contact" && ("bg-primary text-white")}`}>Contact</Link>
          </div>
        </div>
        <div className="md:hidden flex justify-end">
          <button className="px-4 py-2 text-black hover:text-white hover:bg-primary transition-opacity ease-out duration-400" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-100">
            <div className=" px-8 py-1 flex justify-end">
              <button className="text-black text-3xl hover:text-white hover:bg-primary transition-opacity ease-out duration-300 px-2 py-1" onClick={toggleMenu}>
                &times;
              </button>
            </div>
            <div className="flex flex-col justify-center items-center text-black space-y-4">
              <Link href="/" className={`${mobileHeaderStyle} ${active === "Home" && ("bg-primary text-white")}`}>Home</Link>
              <Link href="/about" className={`${mobileHeaderStyle} ${active === "About" && ("bg-primary text-white")}`}>About</Link>
              <Link href="/happyhomes" className={`${mobileHeaderStyle} ${active === "HappyHomes" && ("bg-primary text-white")}`}>Happy Homes</Link>
              <Link href="/contact" className={`${mobileHeaderStyle} ${active === "Contact" && ("bg-primary text-white")}`}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
