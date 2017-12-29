import notoTallWeights from "../helpers/notoTallWeights";

// San Francisco falls back from regular to bold starting from semibold for the scripts
// for which it doesn't have so many weight steps, so let's do the same for Noto.

const systemTallWeights = {
  thin: notoTallWeights.regular,
  light: notoTallWeights.regular,
  regular: notoTallWeights.regular,
  semibold: notoTallWeights.bold,
  bold: notoTallWeights.bold
};

export default systemTallWeights;
