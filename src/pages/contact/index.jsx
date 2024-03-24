import Header from '@/components/Header/Header';
import React from 'react';
import { ContactMap } from '@/components/ProjectComponent/MapComponent';
const Contact = () => {
  const location = { latitude: 23.237855784611618, longitude: 69.6801617576717 };
  return (
    <section className='flex flex-col gap-3'>
      <Header active={"Contact"} />
      <ContactMap />
    </section>
  )
}

export default Contact;