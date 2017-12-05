const suffixProperties = (object, suffix) =>
  Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [`${key}${suffix}`]: object[key] }),
    {}
  );

export default suffixProperties;
