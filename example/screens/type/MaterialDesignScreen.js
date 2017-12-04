import React from 'react';
import { View, Text } from 'react-native';
import { material } from 'react-native-typography';
import TypeDemoScreen from './TypeDemoScreen';

const MaterialDesignScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[material.display4, guides]}>Light 112</Text>
          <Text style={[material.display3, guides]}>Regular 56</Text>
          <Text style={[material.display2, guides]}>Regular 45</Text>
          <Text style={[material.display1, guides]}>Regular 34</Text>
          <Text style={[material.headline, guides]}>Regular 24</Text>
          <Text style={[material.title, guides]}>Medium 20</Text>
          <Text style={[material.subheading, guides]}>Regular 16</Text>
          <Text style={[material.body2, guides]}>Medium 14</Text>
          <Text style={[material.body1, guides]}>Regular 14</Text>
          <Text style={[material.caption, guides]}>Regular 12</Text>
          <Text style={[material.button, guides]}>MEDIUM 14</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[material.display4White, guides]}>Light 112</Text>
          <Text style={[material.display3White, guides]}>Regular 56</Text>
          <Text style={[material.display2White, guides]}>Regular 45</Text>
          <Text style={[material.display1White, guides]}>Regular 34</Text>
          <Text style={[material.headlineWhite, guides]}>Regular 24</Text>
          <Text style={[material.titleWhite, guides]}>Medium 20</Text>
          <Text style={[material.subheadingWhite, guides]}>Regular 16</Text>
          <Text style={[material.body2White, guides]}>Medium 14</Text>
          <Text style={[material.body1White, guides]}>Regular 14</Text>
          <Text style={[material.captionWhite, guides]}>Regular 12</Text>
          <Text style={[material.buttonWhite, guides]}>MEDIUM 14</Text>
        </View>
      )}
    />
  );
};

export default MaterialDesignScreen;
