import React from 'react';

export default ({ showType, type, children }) => {
  if (showType) {
    return (
      <p className="text-lg">
        <span className="font-bold capitalize">{type}</span> - {children}
      </p>
    );
  }

  return <p className="text-lg">{children}</p>;
};
