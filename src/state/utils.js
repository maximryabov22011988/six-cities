export const normalizeData = (data) => {
  if (Array.isArray(data)) {
    return data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }
  return {};
};

export const denormalizeData = (data) => {
  if (typeof data === 'object') {
    return Object.values(data);
  }
  return [];
};
