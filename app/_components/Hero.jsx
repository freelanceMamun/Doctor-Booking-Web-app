import React from 'react';

const Hero = () => {
  return (
    <div>
      <section>
        <div className="lg:px-60 md:px-20 lg:py-20  sm:px-6 sm:py-12  py-10 px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 overflow-hidden rounded-3xl lg:order-last ">
              <img
                src="https://st2.depositphotos.com/1518767/7621/i/450/depositphotos_76211603-stock-photo-team-of-smiling-doctors.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-6xl ">
                Find & Book <span className=" text-purple-600">Appoitment</span>{' '}
                Wtih your Fev <span className=" text-purple-600">Doctors</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
