'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';

const CategorieSearch = () => {
  // Catagories Initial data  Store
  const [categoriesList, setCategorList] = useState([1, 2, 4, 6, 8, 4, 8, 20]);

  // useEffect(() => {
  //   getCategoriesList();
  // }, []);

  const getCategoriesList = () => {
    GlobalApi.getCatagories().then((response) => {
      console.log(response.data.data);
      setCategorList(response.data.data);
    });
  };

  return (
    <div className="lg:px-60">
      <div className=" flex flex-col gap-5">
        <h1 className="text-3xl lg:text-5xl font-bold tracking-wider text-center">
          Category <span className=" text-purple-600">Search</span>{' '}
        </h1>
        <h2 className="text-center text-md lg:text-2xl text-gray-500">
          Search your doctor and book Appoinment on click
        </h2>
      </div>

      <div className="flex w-full max-w-sm  lg:max-w-lg items-center space-x-2 mx-auto pt-8">
        <Input
          type="email"
          placeholder="Search for Doctor..."
          className="px-4 py-6 rounded-sm"
        />
        <Button type="submit" className="px-5 py-6 rounded-sm">
          <Search></Search>
          Subscribe
        </Button>
      </div>

      {/* Display Categories List */}

      <div className=" mt-14 mb-14 grid grid-cols-3 gap-3  md:grid-cols-4 lg:grid-cols-6">
        {categoriesList.map((item, index) => {
          return (
            <div
              className=" flex flex-col items-center text-center gap-2 p-10 border bg-blue-50 m-2 rounded-lg hover:scale-105 hover:shadow-sm transition-all ease-out"
              key={index}
            >
              <Image src={''} alt="icon"></Image>
              <label className=" text-2xl font-semibold text-blue-600">
                Dentist
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorieSearch;
