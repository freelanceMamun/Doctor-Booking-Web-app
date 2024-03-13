'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import Link from 'next/link';

const CatagoriesList = () => {
  const [CatagoriesList, setCategorList] = useState([
    1, 2, 4, 6, 8, 4, 8, 20, 52, 2, 1, 4, 6,
  ]);

  // ==== GET Catagoires Call data

  const getCatagories = () => {
    GlobalApi.getCatagories()
      .then((response) => {
        setCategorList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className=" h-screen mt-5 flex flex-col">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className=" overflow-visible  pointer-events-auto">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup
            heading="Suggestions"
            className="pointer-events-[visible] overflow-visible"
          >
            {CatagoriesList &&
              CatagoriesList.map((item, index) => {
                console.log(item);
                return (
                  <CommandItem
                    key={index}
                    className="pointer-events-[visible] font-semibold text-1xl opacity-100 cursor-pointer"
                  >
                    <Link href={'#'} className="font-semibold block w-full">
                      <label>Doctor</label>
                    </Link>
                  </CommandItem>
                );
              })}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default CatagoriesList;
