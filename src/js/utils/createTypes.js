export const createTypes = (namespace, types) => types.reduce((acc, type) => ({
  ...acc,
  [type]: `${namespace}/${type}`,
}), {})
