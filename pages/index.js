import Head from 'next/head';
import MealPlan from 'components/MealPlan';
import mealPlanData from 'mealPlans/20200809.json';
import { format, addDays } from 'date-fns';
import 'twin.macro';

export default function Index() {
  const startDate = new Date(mealPlanData.start);
  const endDate = addDays(
    new Date(mealPlanData.start),
    mealPlanData.days.length - 1
  );

  return (
    <>
      <Head>
        <title>Family Meal Schedule</title>
      </Head>

      <main tw="mx-auto max-w-screen-sm">
        <h1 tw="text-6xl text-center leading-none mt-4">Dinner Schedule</h1>
        <h2 tw="text-lg text-center mb-4">
          {format(startDate, 'EEEE, d MMM yyyy')} &ndash;{' '}
          {format(endDate, 'EEEE, d MMM yyyy')}
        </h2>
        <MealPlan {...mealPlanData} />
      </main>
    </>
  );
}
