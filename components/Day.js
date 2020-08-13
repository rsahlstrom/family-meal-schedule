import React from 'react';
import { format } from 'date-fns';
import 'twin.macro';

export default ({ date }) => {
  return (
    <div tw="col-span-1">
      <div tw="inline-flex flex-col">
        <h2 tw="text-sm text-center">{format(date, 'LLL')}</h2>
        <h2 tw="text-4xl font-bold leading-none">{format(date, 'dd')}</h2>
        <h2 tw="text-sm text-center">{format(date, 'EEE')}</h2>
      </div>
    </div>
  );
};
