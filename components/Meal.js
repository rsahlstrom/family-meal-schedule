import React from 'react';
import 'twin.macro';

const Meal = ({ showType, type, children }) => {
  if (showType) {
    return (
      <p tw="text-lg">
        <span tw="font-bold capitalize">{type}</span> - {children}
      </p>
    );
  }

  return <p tw="text-lg">{children}</p>;
};

export default Meal;
