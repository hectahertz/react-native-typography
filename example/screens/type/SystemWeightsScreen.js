import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { human, systemWeights } from 'react-native-typography';
import TypeDemoScreen from './TypeDemoScreen';

const systemWeightsScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[styles.thin, guides]}>System Thin</Text>
          <Text style={[styles.light, guides]}>System Light</Text>
          <Text style={[styles.regular, guides]}>System Regular</Text>
          <Text style={[styles.semibold, guides]}>System Semibold</Text>
          <Text style={[styles.bold, guides]}>System Bold</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[styles.thinWhite, guides]}>System Thin</Text>
          <Text style={[styles.lightWhite, guides]}>System Light</Text>
          <Text style={[styles.regularWhite, guides]}>System Regular</Text>
          <Text style={[styles.semiboldWhite, guides]}>System Semibold</Text>
          <Text style={[styles.boldWhite, guides]}>System Bold</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  thin: {
    ...human.title1Object,
    ...systemWeights.thin,
  },
  light: {
    ...human.title1Object,
    ...systemWeights.light,
  },
  regular: {
    ...human.title1Object,
    ...systemWeights.regular,
  },
  semibold: {
    ...human.title1Object,
    ...systemWeights.semibold,
  },
  bold: {
    ...human.title1Object,
    ...systemWeights.bold,
  },
  thinWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.thin,
  },
  lightWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.light,
  },
  regularWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.regular,
  },
  semiboldWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.semibold,
  },
  boldWhite: {
    ...human.title1WhiteObject,
    ...systemWeights.bold,
  },
});

export default systemWeightsScreen;
