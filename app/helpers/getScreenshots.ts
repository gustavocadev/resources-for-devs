export const getScreenshots = (resourceName: string) => {
  const screenshots = `https://recursosrecursosrecursos.netlify.app/assets/screenshots/${encodeURI(
    resourceName
  )}.webp`;

  return screenshots;
};
