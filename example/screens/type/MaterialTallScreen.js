import React from "react";
import { View, Text } from "react-native";
import { materialTall } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const MaterialTallScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[materialTall.display4, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.display3, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.display2, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.display1, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.headline, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.title, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.subheading, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.body2, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.body1, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.caption, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.button, guides]}>แอปเปิ้ล</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[materialTall.display4White, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.display3White, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.display2White, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.display1White, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.headlineWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.titleWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.subheadingWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.body2White, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.body1White, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.captionWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[materialTall.buttonWhite, guides]}>แอปเปิ้ล</Text>
        </View>
      )}
    />
  );
};

export default MaterialTallScreen;
