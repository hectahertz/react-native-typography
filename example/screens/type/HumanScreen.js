import React from 'react';
import { View, Text } from 'react-native';
import { human } from 'react-native-typography';
import TypeDemoScreen from './TypeDemoScreen';

const HumanScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[human.largeTitle, guides]}>Regular 34</Text>
          <Text style={[human.title1, guides]}>Regular 28</Text>
          <Text style={[human.title2, guides]}>Regular 22</Text>
          <Text style={[human.title3, guides]}>Regular 20</Text>
          <Text style={[human.headline, guides]}>Semi-Bold 17</Text>
          <Text style={[human.body, guides]}>Regular 17</Text>
          <Text style={[human.callout, guides]}>Regular 16</Text>
          <Text style={[human.subhead, guides]}>Regular 15</Text>
          <Text style={[human.footnote, guides]}>Regular 13</Text>
          <Text style={[human.caption1, guides]}>Regular 12</Text>
          <Text style={[human.caption2, guides]}>Regular 11</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[human.largeTitleWhite, guides]}>Regular 34</Text>
          <Text style={[human.title1White, guides]}>Regular 28</Text>
          <Text style={[human.title2White, guides]}>Regular 22</Text>
          <Text style={[human.title3White, guides]}>Regular 20</Text>
          <Text style={[human.headlineWhite, guides]}>Semi-Bold 17</Text>
          <Text style={[human.bodyWhite, guides]}>Regular 17</Text>
          <Text style={[human.calloutWhite, guides]}>Regular 16</Text>
          <Text style={[human.subheadWhite, guides]}>Regular 15</Text>
          <Text style={[human.footnoteWhite, guides]}>Regular 13</Text>
          <Text style={[human.caption1White, guides]}>Regular 12</Text>
          <Text style={[human.caption2White, guides]}>Regular 11</Text>
        </View>
      )}
    />
  );
};

export default HumanScreen;
