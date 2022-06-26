import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { getResources } from '../../helpers/getResources.server';

type Loader = {
  images: Resource[];
};

export const loader: LoaderFunction = async () => {
  const { resources } = await getResources();

  const images = resources.filter(
    ({ categoryName }) => categoryName === 'Imagenes'
  );

  return { images };
};

export default function Images() {
  const { images } = useLoaderData<Loader>();

  return (
    <main className="px-[40px]">
      <h1 className="my-2 text-4xl">Images</h1>
      <section className="grid grid-cols-3 gap-4">
        {images.map((img) => {
          const screenshotsImagesLinks = `https://recursosrecursosrecursos.netlify.app/assets/screenshots/${encodeURI(
            img.name
          )}.webp`;
          return (
            <Card
              key={img.name}
              img={screenshotsImagesLinks}
              title={img.name}
              description={img.description}
              link={img.url}
            />
          );
        })}
      </section>
    </main>
  );
}
