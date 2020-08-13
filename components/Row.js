import React from 'react';
import tw, { styled } from 'twin.macro';

const StyledRow = styled.div`
  ${tw`grid grid-cols-6 text-gray-800 mb-2 px-6 py-2 border-black border-t-2 border-b-2`}
  ${({ weekday }) => {
    if (weekday === 'Sun') {
      return tw`bg-red-200`;
    } else if (weekday === 'Mon') {
      return tw`bg-orange-200`;
    } else if (weekday === 'Tue') {
      return tw`bg-yellow-200`;
    } else if (weekday === 'Wed') {
      return tw`bg-green-200`;
    } else if (weekday === 'Thu') {
      return tw`bg-blue-200`;
    } else if (weekday === 'Fri') {
      return tw`bg-purple-200`;
    } else if (weekday === 'Sat') {
      return tw`bg-gray-200`;
    }
  }}
`;

const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

export default Row;
