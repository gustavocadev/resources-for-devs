import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { getResources } from '../../helpers/getResources.server';
import { getScreenshots } from '../../helpers/getScreenshots';

type Loader = {
  fonts: Resource[];
};

export const loader: LoaderFunction = async () => {
  const { resources } = await getResources();

  const fonts = resources.filter(
    ({ categoryName }) => categoryName === 'Fuentes'
  );

  return { fonts };
};

export default function Fonts() {
  const { fonts } = useLoaderData<Loader>();
  return (
    <main className="px-[40px]">
      <h1 className="my-2 text-4xl">Fonts</h1>
      <section className="grid grid-cols-3 gap-4">
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