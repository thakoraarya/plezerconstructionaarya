import Image from 'next/image';
import HeroSection from '@/components/HeroSection/HeroSection';
import Header from '@/components/Header/Header';
import { Inter, Poppins } from 'next/font/google';

// Define font variables
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: "--font-poppins"
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  variable: "--font-inter"
});

export default function Home() {
  return (
    <>
      <Header active={"Home"} />
      <HeroSection />
    </>
  )
}
