import React from 'react';
import 'twin.macro';

const ToDo = ({ tasks = [] }) => {
  if (!tasks.length > 0) {
    return null;
  }
  return (
    <div tw="grid grid-cols-6 px-5 mb-2">
      <div tw="col-span-1" />
      <div tw="col-span-5">
        <ul tw="flex">
          {tasks.map((task) => {
            return (
              <li tw="mr-4" key={task}>
                <span tw="text-xl leading-none">☐</span> {task}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
