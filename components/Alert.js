import React from 'react';
import 'twin.macro';

export default ({ children }) => {
  return <p tw="text-red-600 font-bold text-lg">🚨 {children} 🚨</p>;
};
