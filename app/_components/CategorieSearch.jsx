import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { Search } from 'lucide-react';

const CategorieSearch = () => {
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
    </div>
  );
};

export default CategorieSearch;
