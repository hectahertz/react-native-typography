import React from "react";
import { StyleSheet } from "react-native";
// @ts-ignore TODO: Fix types
import { material, notoCJKWeights } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function NotoCJK() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: styles.regular,
          text: "你送了一封電子郵件。",
          name: "regular"
        },
        {
          style: styles.bold,
          text: "你送了一封電子郵件。",
          name: "bold"
        }
      ]}
      whiteStyles={[
        {
          style: styles.regularWhite,
          text: "你送了一封電子郵件。",
          name: "regular"
        },
        {
          style: styles.boldWhite,
          text: "你送了一封電子郵件。",
          name: "bold"
        }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  regular: {
    ...material.headlineObject,
    ...notoCJKWeights.regular
  },
  bold: {
    ...material.headlineObject,
    ...notoCJKWeights.bold
  },
  regularWhite: {
    ...material.headlineWhiteObject,
    ...notoCJKWeights.regular
  },
  boldWhite: {
    ...material.headlineWhiteObject,
    ...notoCJKWeights.bold
  }
});
