import PageHeading from 'components/PageHeading';
import Link from 'next/link';
import Head from 'next/head';
import { format } from 'date-fns';
import fs from 'fs';
import path from 'path';
import 'twin.macro';

const Index = ({ plans }) => {
  return (
    <>
      <Head>
        <title>Family Meal Schedule</title>
      </Head>

      <PageHeading>Weekly Meal Schedules</PageHeading>
      <ul tw="list-disc">
        {plans.map((plan) => {
          return (
            <li key={`plan${plan.year}${plan.month}${plan.date}`}>
              <Link
                href="/plan/[year]/[month]/[date]"
                as={`/plan/${plan.year}/${plan.month}/${plan.date}`}
              >
                <a>{plan.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const mealPlansDirectory = path.join(process.cwd(), 'mealPlans');
  const filenames = fs.readdirSync(mealPlansDirectory);
  const plans = filenames.map((filename) => {
    const matches = filename.match(/(\d{4})(\d{2})(\d{2})/);
    const mealPlanFile = path.join(mealPlansDirectory, filename);
    const fileContents = JSON.parse(fs.readFileSync(mealPlanFile, 'utf8'));
    const startDate = new Date(fileContents.start);
    return {
      title: format(startDate, 'dd MMM yyyy'),
      year: matches[1],
      month: matches[2],
      date: matches[3],
    };
  });
  return {
    props: {
      plans: plans.reverse(),
    },
  };
}

export default Index;
