'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Header = () => {
  const Menu = [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/explore',
      name: 'Explore',
    },
    {
      id: 3,
      path: '/contact',
      name: 'Contact Us',
    },
    {
      id: 4,
      path: '/about',
      name: 'About',
    },
    {
      id: 5,
      path: '/myaccount',
      name: 'My account',
    },
  ];

  return (
    <div className="p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-10  justify-between ">
        <Image
          src="/logo.svg"
          className=" w-14 md:w-20"
          alt="Logo"
          width={80}
          height={80}
        ></Image>
        <ul className="lg:flex items-center gap-8 hidden">
          {Menu.map((item, index) => {
            return (
              <li
                className="hover:text-[#5417D7] hover:cursor-pointer hover:scale-105 transition-all ease-in-out text-lg font-semibold"
                key={index}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
