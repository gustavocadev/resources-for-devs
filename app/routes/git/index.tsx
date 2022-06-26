import type { LoaderFunction } from '@remix-run/node';
import Card from '../../components/ui/Card';
import { useLoaderData } from '@remix-run/react';
import type { Resource } from '~/types/types';
import { getResources } from '../../helpers/getResources.server';
import { getScreenshots } from '../../helpers/getScreenshots';

type Loader = {
  gitResources: Resource[];
};

export const loader: LoaderFunction = async () => {
  const { resources } = await getResources();

  const gitResources = resources.filter(
    ({ categoryName }) => categoryName === 'Git'
  );

  return { gitResources };
};

export default function Git() {
  const { gitResources } = useLoaderData<Loader>();
  return (
    <main className="px-[40px]">
      <h1 className="my-2 text-4xl">Git Resources</h1>
      <section className="grid grid-cols-3 gap-4">
        {gitResources.map((gitResource) => {
          const screenshotsGitLinks = getScreenshots(gitResource.name);
          return (
            <Card
              key={gitResource.name}
              img={screenshotsGitLinks}
              title={gitResource.name}
              description={gitResource.description}
              link={gitResource.url}
            />
          );
        })}
      </section>
    </main>
  );
}
