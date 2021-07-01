export const getImage = (album: string) => {
  return `/src/assets/${album.toLowerCase()}.jpeg`;
};
