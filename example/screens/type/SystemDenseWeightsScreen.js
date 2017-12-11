import React from "react";
import { StyleSheet } from "react-native";
import { human, systemDenseWeights } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const SystemDenseWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: styles.thin,
          text: "텍스트 가중치",
          name: "thin"
        },
        {
          style: styles.light,
          text: "텍스트 가중치",
          name: "light"
        },
        {
          style: styles.regular,
          text: "텍스트 가중치",
          name: "regular"
        },
        {
          style: styles.semibold,
          text: "텍스트 가중치",
          name: "semibold"
        },
        {
          style: styles.bold,
          text: "텍스트 가중치",
          name: "bold"
        }
      ]}
      whiteStyles={[
        {
          style: styles.thinWhite,
          text: "텍스트 가중치",
          name: "thin"
        },
        {
          style: styles.lightWhite,
          text: "텍스트 가중치",
          name: "light"
        },
        {
          style: styles.regularWhite,
          text: "텍스트 가중치",
          name: "regular"
        },
        {
          style: styles.semiboldWhite,
          text: "텍스트 가중치",
          name: "semibold"
        },
        {
          style: styles.boldWhite,
          text: "텍스트 가중치",
          name: "bold"
        }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...human.title1Object,
    ...systemDenseWeights.thin
  },
  light: {
    ...human.title1Object,
    ...systemDenseWeights.light
  },
  regular: {
    ...human.title1Object,
    ...systemDenseWeights.regular
  },
  semibold: {
    ...human.title1Object,
    ...systemDenseWeights.semibold
  },
  bold: {
    ...human.title1Object,
    ...systemDenseWeights.bold
  },
  thinWhite: {
    ...human.title1WhiteObject,
    ...systemDenseWeights.thin
  },
  lightWhite: {
    ...human.title1WhiteObject,
    ...systemDenseWeights.light
  },
  regularWhite: {
    ...human.title1WhiteObject,
    ...systemDenseWeights.regular
  },
  semiboldWhite: {
    ...human.title1WhiteObject,
    ...systemDenseWeights.semibold
  },
  boldWhite: {
    ...human.title1WhiteObject,
    ...systemDenseWeights.bold
  }
});

export default SystemDenseWeightsScreen;
