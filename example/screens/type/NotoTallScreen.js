import React from "react";
import { StyleSheet } from "react-native";
import { material, notoTallWeights } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const NotoTallScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
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
};

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

export default NotoTallScreen;
