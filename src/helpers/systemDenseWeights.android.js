import notoCJKWeights from "../helpers/notoCJKWeights";

// For now these weights are really restricted on Android, even though San Francisco
// has many steps defined for some dense languages, Noto Sans CJK only has regular
// and bold shipped with Android

// San Francisco falls back from regular to bold starting from semibold for the scripts
// for which it doesn't have so many weight steps, so let's do the same for Noto CJK.

const systemDenseWeights = {
  thin: notoCJKWeights.regular,
  light: notoCJKWeights.regular,
  regular: notoCJKWeights.regular,
  semibold: notoCJKWeights.bold,
  bold: notoCJKWeights.bold
};

export default systemDenseWeights;
