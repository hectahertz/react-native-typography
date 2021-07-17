import React from "react";
import { StyleSheet } from "react-primitives";
import { human, systemTallWeights } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const SystemTallWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: styles.thin,
          text: "टेक्स्ट वजन",
          name: "thin"
        },
        {
          style: styles.light,
          text: "टेक्स्ट वजन",
          name: "light"
        },
        {
          style: styles.regular,
          text: "टेक्स्ट वजन",
          name: "regular"
        },
        {
          style: styles.semibold,
          text: "टेक्स्ट वजन",
          name: "semibold"
        },
        {
          style: styles.bold,
          text: "टेक्स्ट वजन",
          name: "bold"
        }
      ]}
      whiteStyles={[
        {
          style: styles.thinWhite,
          text: "टेक्स्ट वजन",
          name: "thin"
        },
        {
          style: styles.lightWhite,
          text: "टेक्स्ट वजन",
          name: "light"
        },
        {
          style: styles.regularWhite,
          text: "टेक्स्ट वजन",
          name: "regular"
        },
        {
          style: styles.semiboldWhite,
          text: "टेक्स्ट वजन",
          name: "semibold"
        },
        {
          style: styles.boldWhite,
          text: "टेक्स्ट वजन",
          name: "bold"
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...human.title1Object,
    ...systemTallWeights.thin
  },
  light: {
    ...human.title1Object,
    ...systemTallWeights.light
  },
  regular: {
    ...human.title1Object,
    ...systemTallWeights.regular
  },
  semibold: {
    ...human.title1Object,
    ...systemTallWeights.semibold
  },
  bold: {
    ...human.title1Object,
    ...systemTallWeights.bold
  },
  thinWhite: {
    ...human.title1WhiteObject,
    ...systemTallWeights.thin
  },
  lightWhite: {
    ...human.title1WhiteObject,
    ...systemTallWeights.light
  },
  regularWhite: {
    ...human.title1WhiteObject,
    ...systemTallWeights.regular
  },
  semiboldWhite: {
    ...human.title1WhiteObject,
    ...systemTallWeights.semibold
  },
  boldWhite: {
    ...human.title1WhiteObject,
    ...systemTallWeights.bold
  }
});

export default SystemTallWeightsScreen;
