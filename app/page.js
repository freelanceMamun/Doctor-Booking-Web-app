import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Hero from './_components/Hero';

import CategorieSearch from './_components/CategorieSearch';
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
    </main>
  );
}
