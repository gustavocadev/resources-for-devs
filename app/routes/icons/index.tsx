import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { getScreenshots } from '../../helpers/getScreenshots';
import { allResources } from '~/resources/data';

type Loader = {
  icons: Resource[];
};

export const loader: LoaderFunction = async () => {
  const resources = allResources;

  const icons = resources.filter(
    ({ categoryName }) => categoryName === 'Iconos'
  );

  return { icons };
};

export default function Icons() {
  const { icons } = useLoaderData<Loader>();
  return (
    <main className="px-2 sm:px-[40px]">
      <h1 className="my-2 text-4xl">Icons</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {icons.map((icon) => {
          const screenshotsIconsLinks = getScreenshots(icon.name);
          return (
            <Card
              key={icon.name}
              img={screenshotsIconsLinks}
              title={icon.name}
              description={icon.description}
              link={icon.url}
            />
          );
        })}
      </section>
    </main>
  );
}
