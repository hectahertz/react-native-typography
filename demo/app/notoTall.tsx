import React from "react";
import { StyleSheet } from "react-native";
// @ts-ignore TODO: Fix types
import { material, notoTallWeights } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function NotoTall() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: styles.regular,
          text: "คุณส่งอีเมลแล้ว",
          name: "regular"
        },
        {
          style: styles.bold,
          text: "คุณส่งอีเมลแล้ว",
          name: "bold"
        }
      ]}
      whiteStyles={[
        {
          style: styles.regularWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "regular"
        },
        {
          style: styles.boldWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "bold"
        }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  regular: {
    ...material.headlineObject,
    ...notoTallWeights.regular
  },
  bold: {
    ...material.headlineObject,
    ...notoTallWeights.bold
  },
  regularWhite: {
    ...material.headlineWhiteObject,
    ...notoTallWeights.regular
  },
  boldWhite: {
    ...material.headlineWhiteObject,
    ...notoTallWeights.bold
  }
});
