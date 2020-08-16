import Head from 'next/head';
import PageHeading from 'components/PageHeading';
import MealPlan from 'components/MealPlan';
import fs from 'fs';
import path from 'path';
import { format, addDays } from 'date-fns';
import 'twin.macro';

const MealSchedule = ({ planData }) => {
  const startDate = new Date(planData.start);
  const endDate = addDays(new Date(planData.start), planData.days.length - 1);

  return (
    <>
      <Head>
        <title>Family Meal Schedule</title>
      </Head>

      <PageHeading tw="mb-0">Meal Schedule</PageHeading>
      <h2 tw="text-lg text-center mb-4">
        {format(startDate, 'EEEE, d MMM yyyy')} &ndash;{' '}
        {format(endDate, 'EEEE, d MMM yyyy')}
      </h2>
      <MealPlan {...planData} />
    </>
  );
};

export async function getStaticProps(context) {
  const { year, month, date } = context.params;
  const mealPlansDirectory = path.join(process.cwd(), 'mealPlans');
  const filename = `${year}${month}${date}.json`;
  const mealPlanFile = path.join(mealPlansDirectory, filename);
  const fileContents = JSON.parse(fs.readFileSync(mealPlanFile, 'utf8'));
  return {
    props: {
      planData: fileContents,
    },
  };
}

export async function getStaticPaths() {
  const mealPlansDirectory = path.join(process.cwd(), 'mealPlans');
  const filenames = fs.readdirSync(mealPlansDirectory);
  const mealPlans = filenames.map((filename) => {
    const matches = filename.match(/(\d{4})(\d{2})(\d{2})/);
    return {
      params: {
        year: matches[1],
        month: matches[2],
        date: matches[3],
      },
    };
  });
  return {
    paths: mealPlans,
    fallback: false,
  };
}

export default MealSchedule;
