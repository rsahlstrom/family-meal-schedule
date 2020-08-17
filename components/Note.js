import React from 'react';
import 'twin.macro';

const Note = ({ children }) => {
  return <p tw="italic">{children}</p>;
};

export default Note;
