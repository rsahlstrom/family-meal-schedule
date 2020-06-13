import React from 'react';
import { format } from 'date-fns';

export default ({ date }) => {
  return (
    <div className="col-span-1">
      <div className="inline-flex flex-col">
        <h2 className="text-sm text-center">{format(date, 'LLL')}</h2>
        <h2 className="text-4xl font-bold leading-none">
          {format(date, 'dd')}
        </h2>
        <h2 className="text-sm text-center">{format(date, 'EEE')}</h2>
      </div>
    </div>
  );
};
