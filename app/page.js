'use client';
import Hero from './_components/Hero';
import CategorieSearch from './_components/CategorieSearch';
import DoctorList from './_components/DoctorList';
import GlobalApi from './_utils/GlobalApi';
import { useState, useEffect } from 'react';

export default function Home() {
  const [doctorsList, setdoctorList] = useState([]);

  // ==== Fetch api Doctor list

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getCategoriesList = () => {
    GlobalApi.getDoctors()
      .then((response) => {
        setdoctorList(response.data.data);

        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

      <DoctorList doctorsList={doctorsList}></DoctorList>
    </main>
  );
}
