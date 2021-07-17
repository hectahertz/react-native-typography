import React from "react";
import { StyleSheet } from "react-primitives";
import { human, sanFranciscoWeights } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const SFWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: styles.thin,
          text: "San Francisco Thin",
          name: "thin"
        },
        {
          style: styles.ultraLight,
          text: "San Francisco Ultralight",
          name: "ultraLight"
        },
        {
          style: styles.light,
          text: "San Francisco Light",
          name: "light"
        },
        {
          style: styles.regular,
          text: "San Francisco Regular",
          name: "regular"
        },
        {
          style: styles.medium,
          text: "San Francisco Medium",
          name: "medium"
        },
        {
          style: styles.semibold,
          text: "San Francisco Semi-Bold",
          name: "semibold"
        },
        {
          style: styles.bold,
          text: "San Francisco Bold",
          name: "bold"
        },
        {
          style: styles.heavy,
          text: "San Francisco Heavy",
          name: "heavy"
        },
        {
          style: styles.black,
          text: "San Francisco Black",
          name: "black"
        }
      ]}
      whiteStyles={[
        {
          style: styles.thinWhite,
          text: "San Francisco Thin",
          name: "thin"
        },
        {
          style: styles.ultraLightWhite,
          text: "San Francisco Ultralight",
          name: "ultraLight"
        },
        {
          style: styles.lightWhite,
          text: "San Francisco Light",
          name: "light"
        },
        {
          style: styles.regularWhite,
          text: "San Francisco Regular",
          name: "regular"
        },
        {
          style: styles.mediumWhite,
          text: "San Francisco Medium",
          name: "medium"
        },
        {
          style: styles.semiboldWhite,
          text: "San Francisco Semi-Bold",
          name: "semibold"
        },
        {
          style: styles.boldWhite,
          text: "San Francisco Bold",
          name: "bold"
        },
        {
          style: styles.heavyWhite,
          text: "San Francisco Heavy",
          name: "heavy"
        },
        {
          style: styles.blackWhite,
          text: "San Francisco Black",
          name: "black"
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...human.title1Object,
    ...sanFranciscoWeights.thin
  },
  ultraLight: {
    ...human.title1Object,
    ...sanFranciscoWeights.ultraLight
  },
  light: {
    ...human.title1Object,
    ...sanFranciscoWeights.light
  },
  regular: {
    ...human.title1Object,
    ...sanFranciscoWeights.regular
  },
  medium: {
    ...human.title1Object,
    ...sanFranciscoWeights.medium
  },
  semibold: {
    ...human.title1Object,
    ...sanFranciscoWeights.semibold
  },
  bold: {
    ...human.title1Object,
    ...sanFranciscoWeights.bold
  },
  heavy: {
    ...human.title1Object,
    ...sanFranciscoWeights.heavy
  },
  black: {
    ...human.title1Object,
    ...sanFranciscoWeights.black
  },
  thinWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.thin
  },
  ultraLightWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.ultraLight
  },
  lightWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.light
  },
  regularWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.regular
  },
  mediumWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.medium
  },
  semiboldWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.semibold
  },
  boldWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.bold
  },
  heavyWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.heavy
  },
  blackWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.black
  }
});

export default SFWeightsScreen;
