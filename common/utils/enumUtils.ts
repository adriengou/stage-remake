export const getEnumKeys = (enu: any) => {
  return Object.keys(enu).filter((key) => isNaN(Number(key)));
};
