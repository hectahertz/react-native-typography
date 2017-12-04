import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { material, robotoWeights } from 'react-native-typography';
import TypeDemoScreen from './TypeDemoScreen';

const RobotoWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[styles.thin, guides]}>Roboto Thin</Text>
          <Text style={[styles.light, guides]}>Roboto Light</Text>
          <Text style={[styles.regular, guides]}>Roboto Regular</Text>
          <Text style={[styles.medium, guides]}>Roboto Medium</Text>
          <Text style={[styles.bold, guides]}>Roboto Bold</Text>
          <Text style={[styles.condensed, guides]}>Roboto Condensed</Text>
          <Text style={[styles.condensedBold, guides]}>Roboto Condensed Bold</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[styles.thinWhite, guides]}>Roboto Thin</Text>
          <Text style={[styles.lightWhite, guides]}>Roboto Light</Text>
          <Text style={[styles.regularWhite, guides]}>Roboto Regular</Text>
          <Text style={[styles.mediumWhite, guides]}>Roboto Medium</Text>
          <Text style={[styles.boldWhite, guides]}>Roboto Bold</Text>
          <Text style={[styles.condensedWhite, guides]}>Roboto Condensed</Text>
          <Text style={[styles.condensedBoldWhite, guides]}>Roboto Condensed Bold</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...material.headlineObject,
    ...robotoWeights.thin,
  },
  light: {
    ...material.headlineObject,
    ...robotoWeights.light,
  },
  regular: {
    ...material.headlineObject,
    ...robotoWeights.regular,
  },
  medium: {
    ...material.headlineObject,
    ...robotoWeights.medium,
  },
  bold: {
    ...material.headlineObject,
    ...robotoWeights.bold,
  },
  condensed: {
    ...material.headlineObject,
    ...robotoWeights.condensed,
  },
  condensedBold: {
    ...material.headlineObject,
    ...robotoWeights.condensedBold,
  },
  thinWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.thin,
  },
  lightWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.light,
  },
  regularWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.regular,
  },
  mediumWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.medium,
  },
  boldWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.bold,
  },
  condensedWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.condensed,
  },
  condensedBoldWhite: {
    ...material.headlineWhiteObject,
    ...robotoWeights.condensedBold,
  },
});

export default RobotoWeightsScreen;
