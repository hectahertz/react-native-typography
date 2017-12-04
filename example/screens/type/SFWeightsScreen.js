import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { human, sanFranciscoWeights } from 'react-native-typography';
import TypeDemoScreen from './TypeDemoScreen';

const sanFranciscoWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[styles.thin, guides]}>San Francisco Thin</Text>
          <Text style={[styles.ultraLight, guides]}>San Francisco Ultralight</Text>
          <Text style={[styles.light, guides]}>San Francisco Light</Text>
          <Text style={[styles.regular, guides]}>San Francisco Regular</Text>
          <Text style={[styles.medium, guides]}>San Francisco Medium</Text>
          <Text style={[styles.semibold, guides]}>San Francisco Semi-Bold</Text>
          <Text style={[styles.bold, guides]}>San Francisco Bold</Text>
          <Text style={[styles.heavy, guides]}>San Francisco Heavy</Text>
          <Text style={[styles.black, guides]}>San Francisco Black</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[styles.thinWhite, guides]}>San Francisco Thin</Text>
          <Text style={[styles.ultraLightWhite, guides]}>San Francisco Ultralight</Text>
          <Text style={[styles.lightWhite, guides]}>San Francisco Light</Text>
          <Text style={[styles.regularWhite, guides]}>San Francisco Regular</Text>
          <Text style={[styles.mediumWhite, guides]}>San Francisco Medium</Text>
          <Text style={[styles.semiboldWhite, guides]}>San Francisco Semi-Bold</Text>
          <Text style={[styles.boldWhite, guides]}>San Francisco Bold</Text>
          <Text style={[styles.heavyWhite, guides]}>San Francisco Heavy</Text>
          <Text style={[styles.blackWhite, guides]}>San Francisco Black</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...human.title1Object,
    ...sanFranciscoWeights.thin,
  },
  ultraLight: {
    ...human.title1Object,
    ...sanFranciscoWeights.ultraLight,
  },
  light: {
    ...human.title1Object,
    ...sanFranciscoWeights.light,
  },
  regular: {
    ...human.title1Object,
    ...sanFranciscoWeights.regular,
  },
  medium: {
    ...human.title1Object,
    ...sanFranciscoWeights.medium,
  },
  semibold: {
    ...human.title1Object,
    ...sanFranciscoWeights.semibold,
  },
  bold: {
    ...human.title1Object,
    ...sanFranciscoWeights.bold,
  },
  heavy: {
    ...human.title1Object,
    ...sanFranciscoWeights.heavy,
  },
  black: {
    ...human.title1Object,
    ...sanFranciscoWeights.black,
  },
  thinWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.thin,
  },
  ultraLightWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.ultraLight,
  },
  lightWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.light,
  },
  regularWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.regular,
  },
  mediumWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.medium,
  },
  semiboldWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.semibold,
  },
  boldWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.bold,
  },
  heavyWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.heavy,
  },
  blackWhite: {
    ...human.title1WhiteObject,
    ...sanFranciscoWeights.black,
  },
});

export default sanFranciscoWeightsScreen;
