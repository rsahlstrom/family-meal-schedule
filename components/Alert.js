import React from 'react';
import 'twin.macro';

const Alert = ({ children }) => {
  return <p tw="text-red-600 font-bold text-lg">🚨 {children} 🚨</p>;
};

export default Alert;
