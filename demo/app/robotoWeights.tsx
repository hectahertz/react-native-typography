import React from "react";
import { StyleSheet } from "react-native";
import { material, robotoWeights } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function RobotoWeights() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: styles.thin,
          text: "Roboto Thin",
          name: "thin"
        },
        {
          style: styles.light,
          text: "Roboto Light",
          name: "light"
        },
        {
          style: styles.regular,
          text: "Roboto Regular",
          name: "regular"
        },
        {
          style: styles.medium,
          text: "Roboto Medium",
          name: "medium"
        },
        {
          style: styles.bold,
          text: "Roboto Bold",
          name: "bold"
        },
        {
          style: styles.condensed,
          text: "Roboto Condensed",
          name: "condensed"
        },
        {
          style: styles.condensedBold,
          text: "Roboto Condensed Bold",
          name: "condensedBold"
        }
      ]}
      whiteStyles={[
        {
          style: styles.thinWhite,
          text: "Roboto Thin",
          name: "thin"
        },
        {
          style: styles.lightWhite,
          text: "Roboto Light",
          name: "light"
        },
        {
          style: styles.regularWhite,
          text: "Roboto Regular",
          name: "regular"
        },
        {
          style: styles.mediumWhite,
          text: "Roboto Medium",
          name: "medium"
        },
        {
          style: styles.boldWhite,
          text: "Roboto Bold",
          name: "bold"
        },
        {
          style: styles.condensedWhite,
          text: "Roboto Condensed",
          name: "condensed"
        },
        {
          style: styles.condensedBoldWhite,
          text: "Roboto Condensed Bold",
          name: "condensedBold"
        }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  thin: {
    ...material.headlineObject,
    ...robotoWeights.thin
  },
  light: {
    ...material.headlineObject,
    ...robotoWeights.light
  },
  regular: {
    ...material.headlineObject,
    ...robotoWeights.regular
  },
  medium: {
    ...material.headlineObject,
    ...robotoWeights.medium
  },
  bold: {
    ...material.headlineObject,
    ...robotoWeights.bold
  },
  condensed: {
    ...material.headlineObject,
    ...robotoWeights.condensed
  },
  condensedBold: {
    ...material.headlineObject,
    ...robotoWeights.condensedBold
  },
  thinWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.thin
  },
  lightWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.light
  },
  regularWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.regular
  },
  mediumWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.medium
  },
  boldWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.bold
  },
  condensedWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.condensed
  },
  condensedBoldWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.condensedBold
  }
});
