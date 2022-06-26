import fs from 'fs/promises';
import type { Resource } from '~/types/types';

export const getResources = async (): Promise<{ resources: Resource[] }> => {
  const allResources = await fs.readFile('./app/resources/all.json', 'utf-8');
  const resources = JSON.parse(allResources);

  return { resources };
};
