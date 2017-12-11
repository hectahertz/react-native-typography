import React from "react";
import { View, Text } from "react-native";
import { humanDense } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const HumanDenseScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[humanDense.largeTitle, guides]}>日本語</Text>
          <Text style={[humanDense.title1, guides]}>日本語</Text>
          <Text style={[humanDense.title2, guides]}>日本語</Text>
          <Text style={[humanDense.title3, guides]}>日本語</Text>
          <Text style={[humanDense.headline, guides]}>日本語</Text>
          <Text style={[humanDense.body, guides]}>日本語</Text>
          <Text style={[humanDense.callout, guides]}>日本語</Text>
          <Text style={[humanDense.subhead, guides]}>日本語</Text>
          <Text style={[humanDense.footnote, guides]}>日本語</Text>
          <Text style={[humanDense.caption1, guides]}>日本語</Text>
          <Text style={[humanDense.caption2, guides]}>日本語</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[humanDense.largeTitleWhite, guides]}>日本語</Text>
          <Text style={[humanDense.title1White, guides]}>日本語</Text>
          <Text style={[humanDense.title2White, guides]}>日本語</Text>
          <Text style={[humanDense.title3White, guides]}>日本語</Text>
          <Text style={[humanDense.headlineWhite, guides]}>日本語</Text>
          <Text style={[humanDense.bodyWhite, guides]}>日本語</Text>
          <Text style={[humanDense.calloutWhite, guides]}>日本語</Text>
          <Text style={[humanDense.subheadWhite, guides]}>日本語</Text>
          <Text style={[humanDense.footnoteWhite, guides]}>日本語</Text>
          <Text style={[humanDense.caption1White, guides]}>日本語</Text>
          <Text style={[humanDense.caption2White, guides]}>日本語</Text>
        </View>
      )}
    />
  );
};

export default HumanDenseScreen;
