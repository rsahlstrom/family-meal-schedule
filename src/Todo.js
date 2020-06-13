import React from 'react';

export default ({ tasks = [] }) => {
  if (!tasks.length > 0) {
    return null;
  }
  return (
    <div className="grid grid-cols-6 px-6 mb-2">
      <div className="col-span-1" />
      <div className="col-span-5">
        <ul className="flex">
          {tasks.map((task) => {
            return (
              <li className="mr-4">
                <span className="text-xl leading-none">☐</span> {task}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
