'use client';

import React from 'react';
import { useEffect } from 'react';

const page = ({ params }) => {
  useEffect(() => {
    console.log(params);
  }, []);
  return <div>Result</div>;
};

export default page;
