import React from "react";
import { View, Text } from "react-native";
import { materialDense } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const MaterialDenseScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[materialDense.display4, guides]}>日本語</Text>
          <Text style={[materialDense.display3, guides]}>日本語</Text>
          <Text style={[materialDense.display2, guides]}>日本語</Text>
          <Text style={[materialDense.display1, guides]}>日本語</Text>
          <Text style={[materialDense.headline, guides]}>日本語</Text>
          <Text style={[materialDense.title, guides]}>日本語</Text>
          <Text style={[materialDense.subheading, guides]}>日本語</Text>
          <Text style={[materialDense.body2, guides]}>日本語</Text>
          <Text style={[materialDense.body1, guides]}>日本語</Text>
          <Text style={[materialDense.caption, guides]}>日本語</Text>
          <Text style={[materialDense.button, guides]}>日本語</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[materialDense.display4White, guides]}>日本語</Text>
          <Text style={[materialDense.display3White, guides]}>日本語</Text>
          <Text style={[materialDense.display2White, guides]}>日本語</Text>
          <Text style={[materialDense.display1White, guides]}>日本語</Text>
          <Text style={[materialDense.headlineWhite, guides]}>日本語</Text>
          <Text style={[materialDense.titleWhite, guides]}>日本語</Text>
          <Text style={[materialDense.subheadingWhite, guides]}>日本語</Text>
          <Text style={[materialDense.body2White, guides]}>日本語</Text>
          <Text style={[materialDense.body1White, guides]}>日本語</Text>
          <Text style={[materialDense.captionWhite, guides]}>日本語</Text>
          <Text style={[materialDense.buttonWhite, guides]}>日本語</Text>
        </View>
      )}
    />
  );
};

export default MaterialDenseScreen;
