import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { getScreenshots } from '../../helpers/getScreenshots';
import { allResources } from '../../resources/data';

type Loader = {
  fonts: Resource[];
};

export const loader: LoaderFunction = async () => {
  const resources = allResources;

  const fonts = resources.filter(
    ({ categoryName }) => categoryName === 'Fuentes'
  );

  return { fonts };
};

export default function Fonts() {
  const { fonts } = useLoaderData<Loader>();
  return (
    <main className="px-2 sm:px-[40px]">
      <h1 className="my-2 text-4xl">Fonts</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fonts.map((font) => {
          const screenshotsFontLinks = getScreenshots(font.name);
          return (
            <Card
              key={font.name}
              img={screenshotsFontLinks}
              title={font.name}
              description={font.description}
              link={font.url}
            />
          );
        })}
      </section>
    </main>
  );
}
