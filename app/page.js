import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Hero from './_components/Hero';

import CategorieSearch from './_components/CategorieSearch';
import DoctorList from './_components/DoctorList';

export default function Home() {
  return (
    <main className="">
      {/* Hero Section  */}
      <Hero></Hero>
      {/* Hero Section end */}
      {/* Categories Search Bar  */}
      <CategorieSearch />

      {/* Categories Search Bar End
       */}

      {/* Popular Doctor List */}

      <DoctorList></DoctorList>
    </main>
  );
}
