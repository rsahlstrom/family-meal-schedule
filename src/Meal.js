import React from 'react';

export default ({ children }) => {
  return (
    <div className="col-span-5 mb-auto mt-auto relative">
      <p className="text-lg">{children}</p>
    </div>
  );
};
