import React from "react";
import { View, Text } from "react-native";
import { humanTall } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const HumanDenseScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[humanTall.largeTitle, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.title1, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.title2, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.title3, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.headline, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.body, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.callout, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.subhead, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.footnote, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.caption1, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.caption2, guides]}>แอปเปิ้ล</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[humanTall.largeTitleWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.title1White, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.title2White, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.title3White, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.headlineWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.bodyWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.calloutWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.subheadWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.footnoteWhite, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.caption1White, guides]}>แอปเปิ้ล</Text>
          <Text style={[humanTall.caption2White, guides]}>แอปเปิ้ล</Text>
        </View>
      )}
    />
  );
};

export default HumanDenseScreen;
