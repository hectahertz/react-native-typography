import React from "react";
import { StyleSheet } from "react-primitives";
import { material, notoCJKWeights } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const NotoCJKScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
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
};

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

export default NotoCJKScreen;
