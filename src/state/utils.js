export const normalizeDataHelper = (data) => {
  if (Array.isArray(data)) {
    return data.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }
};

export const denormalizeDataHelper = (data) => {
  if (typeof data === 'object') {
    return Object.values(data);
  }
};
