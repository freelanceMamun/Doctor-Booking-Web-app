import React from 'react';
import CatagoriesList from './_components/CatagoriesList';

const layout = ({ children }) => {
  return (
    <div className="xl:px-60 lg:px-20 md:px-8 px-2  my-16">
      <div className="grid grid-cols-4">
        <div className="">
          {/* ===   Categories  ==== */}

          <CatagoriesList></CatagoriesList>
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </div>
  );
};

export default layout;
