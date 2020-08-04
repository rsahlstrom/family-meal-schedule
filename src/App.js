import React from 'react';
import MealPlan from './MealPlan';
import mealPlanData from './mealPlans/20200802.json';
import { format, addDays } from 'date-fns';

function App() {
  const startDate = new Date(mealPlanData.start);
  const endDate = addDays(
    new Date(mealPlanData.start),
    mealPlanData.days.length - 1
  );
  return (
    <main className="container mx-auto max-w-screen-sm">
      <h1 className="text-6xl text-center leading-none mt-4">
        Dinner Schedule
      </h1>
      <h2 className="text-lg text-center mb-4">
        {format(startDate, 'EEEE, d MMM yyyy')} &ndash;{' '}
        {format(endDate, 'EEEE, d MMM yyyy')}
      </h2>
      <MealPlan {...mealPlanData} />
    </main>
  );
}

export default App;
