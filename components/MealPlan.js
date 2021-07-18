import React from 'react';
import Row from './Row';
import Day from './Day';
import Meals from './Meals';
import Meal from './Meal';
import Note from './Note';
import Todo from './Todo';
import Alert from './Alert';
import { format, addDays } from 'date-fns';

const MealPlan = ({ start, days }) => {
  return days.map((day, index) => {
    const mealDate = addDays(new Date(start), index);
    const showType =
      (day.dinner && (day.lunch || day.breakfast)) ||
      (day.lunch && day.breakfast);
    return (
      <React.Fragment key={format(mealDate, 't')}>
        <Row weekday={format(mealDate, 'E')}>
          <Day date={mealDate} />
          <Meals>
            {day.alert ? <Alert>{day.alert}</Alert> : null}
            {day.note ? <Note>{day.note}</Note> : null}
            {day.breakfast ? (
              <Meal type="breakfast" showType={showType}>
                {day.breakfast}
              </Meal>
            ) : null}
            {day.lunch ? (
              <Meal type="lunch" showType={showType}>
                {day.lunch}
              </Meal>
            ) : null}
            {day.dinner ? (
              <Meal type="dinner" showType={showType}>
                {day.dinner}
              </Meal>
            ) : null}
          </Meals>
        </Row>
        <Todo tasks={day.tasks} />
      </React.Fragment>
    );
  });
};

export default MealPlan;
