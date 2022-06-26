import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { getResources } from '../../helpers/getResources.server';
import { getScreenshots } from '../../helpers/getScreenshots';

type Loader = {
  courses: Resource[];
};

export const loader: LoaderFunction = async () => {
  const { resources } = await getResources();

  const courses = resources.filter(
    ({ categoryName }) => categoryName === 'Cursos'
  );

  return { courses };
};

export default function Courses() {
  const { courses } = useLoaderData<Loader>();
  return (
    <main className="px-[40px]">
      <h1 className="my-2 text-4xl">Courses</h1>
      <section className="grid grid-cols-3 gap-4">
        {courses.map((course) => {
          const screenshotsCoursesLinks = getScreenshots(course.name);
          return (
            <Card
              key={course.name}
              img={screenshotsCoursesLinks}
              title={course.name}
              description={course.description}
              link={course.url}
            />
          );
        })}
      </section>
    </main>
  );
}
