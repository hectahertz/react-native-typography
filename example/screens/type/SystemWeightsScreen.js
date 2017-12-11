import React from "react";
import { StyleSheet } from "react-native";
import { human, systemWeights } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const systemWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: styles.thin,
          text: "System Thin",
          name: "thin"
        },
        {
          style: styles.light,
          text: "System Light",
          name: "light"
        },
        {
          style: styles.regular,
          text: "System Regular",
          name: "regular"
        },
        {
          style: styles.semibold,
          text: "System Semibold",
          name: "semibold"
        },
        {
          style: styles.bold,
          text: "System Bold",
          name: "bold"
        }
      ]}
      whiteStyles={[
        {
          style: styles.thinWhite,
          text: "System Thin",
          name: "thin"
        },
        {
          style: styles.lightWhite,
          text: "System Light",
          name: "light"
        },
        {
          style: styles.regularWhite,
          text: "System Regular",
          name: "regular"
        },
        {
          style: styles.semiboldWhite,
          text: "System Semibold",
          name: "semibold"
        },
        {
          style: styles.boldWhite,
          text: "System Bold",
          name: "bold"
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...human.title1Object,
    ...systemWeights.thin
  },
  light: {
    ...human.title1Object,
    ...systemWeights.light
  },
  regular: {
    ...human.title1Object,
    ...systemWeights.regular
  },
  semibold: {
    ...human.title1Object,
    ...systemWeights.semibold
  },
  bold: {
    ...human.title1Object,
    ...systemWeights.bold
  },
  thinWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.thin
  },
  lightWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.light
  },
  regularWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.regular
  },
  semiboldWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.semibold
  },
  boldWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.bold
  }
});

export default systemWeightsScreen;
