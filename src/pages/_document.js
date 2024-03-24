import Footer from '@/components/Footer/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='flex flex-col h-screen max-w-screen-2xl px-4 md:px-0 xl:px-0 mx-auto'>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
