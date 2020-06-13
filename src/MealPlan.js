import React from 'react';
import Row from './Row';
import Day from './Day';
import Meal from './Meal';
import Todo from './Todo';
import { format, addDays } from 'date-fns';

export default ({ start, days }) => {
  return days.map((day, index) => {
    const mealDate = addDays(new Date(start), index);
    return (
      <>
        <Row weekday={format(mealDate, 'E')}>
          <Day date={mealDate} />
          <Meal>{day.meal}</Meal>
        </Row>
        <Todo tasks={day.tasks} />
      </>
    );
  });
};
