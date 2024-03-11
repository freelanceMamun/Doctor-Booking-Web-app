import Image from 'next/image';
import React from 'react';

const DoctorList = ({ doctorsList }) => {
  return (
    <div className=" md:px-8 lg:px-20 xl:px-60 px-3">
      <div className="">
        <div className="doctor-heading">
          <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">
            Popular Doctors
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 xl:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-1 lg:gap-7 mt-10">
          {doctorsList &&
            doctorsList.map((item, index) => {
              console.log(item);
              console.log(item.attributes?.images?.data?.attributes?.url);
              return (
                <div className="" key={index}>
                  <div className="doctor-image border-[1px] hover:border-blue-500 hover:shadow-sm transition-all ease-in-out rounded-lg p-3">
                    <Image
                      className="h-[200px] w-full object-cover rounded-lg"
                      src={item?.attributes?.images?.data?.attributes?.url}
                      alt="Doctor-image"
                      width={500}
                      height={300}
                    ></Image>
                    <div className="mt-3 items-baseline flex flex-col">
                      <h4 className="text-sm font-bold rounded-xl bg-blue-100 py-1 px-2  text-blue-600">
                        Denties
                      </h4>
                    </div>
                    <div className="">
                      <h3 className="font-bold text-xl pt-3 cursor-pointer">
                        {item.attributes?.Name}
                      </h3>
                      <h3 className=" font-semibold text-xl text-blue-600">
                        {item.attributes.Year_of_experience}
                      </h3>
                      <h3 className=" text-gray-500 text-sm font-semibold">
                        {item.attributes.address}
                      </h3>
                      <button
                        className="p-2 px-3 border-[1px] rounded-full w-full text-center  font-semibold hover:bg-blue-600 hover:text-white  transition-all
                        ease-in-out  duration-300 mt-3 text-blue-600 border-blue-600"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
