import React from 'react';
import 'twin.macro';

export default ({ showType, type, children }) => {
  if (showType) {
    return (
      <p tw="text-lg">
        <span tw="font-bold capitalize">{type}</span> - {children}
      </p>
    );
  }

  return <p tw="text-lg">{children}</p>;
};
