import React from 'react';
import 'twin.macro';

const Meals = ({ children }) => {
  return <div tw="col-span-5 mb-auto mt-auto relative">{children}</div>;
};

export default Meals;
