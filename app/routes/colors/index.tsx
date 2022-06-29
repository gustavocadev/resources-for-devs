import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { allResources } from '../../resources/data';

type Loader = {
  colors: Resource[];
};

export const loader: LoaderFunction = async () => {
  const resources = allResources;

  const colors = resources.filter(
    ({ categoryName }) => categoryName === 'Colores'
  );

  return { colors };
};

export default function Colors() {
  const { colors } = useLoaderData<Loader>();
  return (
    <main className="px-2 sm:px-[40px]">
      <h1 className="my-2 text-4xl">Colors</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colors.map((color) => {
          const screenshotsColorsLinks = `https://recursosrecursosrecursos.netlify.app/assets/screenshots/${encodeURI(
            color.name
          )}.webp`;
          return (
            <Card
              key={color.name}
              img={screenshotsColorsLinks}
              title={color.name}
              description={color.description}
              link={color.url}
            />
          );
        })}
      </section>
    </main>
  );
}
