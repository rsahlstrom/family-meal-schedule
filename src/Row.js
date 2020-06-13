import React from 'react';

export default ({ weekday, children }) => {
  const classNames = [];
  if (weekday === 'Sun') {
    classNames.push('bg-red-200');
  } else if (weekday === 'Mon') {
    classNames.push('bg-orange-200');
  } else if (weekday === 'Tue') {
    classNames.push('bg-yellow-200');
  } else if (weekday === 'Wed') {
    classNames.push('bg-green-200');
  } else if (weekday === 'Thu') {
    classNames.push('bg-blue-200');
  } else if (weekday === 'Fri') {
    classNames.push('bg-purple-200');
  } else if (weekday === 'Sat') {
    classNames.push('bg-gray-200');
  }
  return (
    <div
      className={`grid grid-cols-6 text-gray-800 mb-2 px-6 py-2 border-black border-t-2 border-b-2 ${classNames.join(
        ' '
      )}`}
    >
      {children}
    </div>
  );
};
