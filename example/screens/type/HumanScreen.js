import React from "react";
import { human } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const HumanScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: human.largeTitle,
          text: "Regular 34",
          name: "largeTitle"
        },
        {
          style: human.title1,
          text: "Regular 28",
          name: "title1"
        },
        {
          style: human.title2,
          text: "Regular 22",
          name: "title2"
        },
        {
          style: human.title3,
          text: "Regular 20",
          name: "title3"
        },
        {
          style: human.headline,
          text: "Semi-Bold 17",
          name: "headline"
        },
        {
          style: human.body,
          text: "Regular 17",
          name: "body"
        },
        {
          style: human.callout,
          text: "Regular 16",
          name: "callout"
        },
        {
          style: human.subhead,
          text: "Regular 15",
          name: "subhead"
        },
        {
          style: human.footnote,
          text: "Regular 13",
          name: "footnote"
        },
        {
          style: human.caption1,
          text: "Regular 12",
          name: "caption1"
        },
        {
          style: human.caption2,
          text: "Regular 11",
          name: "caption2"
        }
      ]}
      whiteStyles={[
        {
          style: human.largeTitleWhite,
          text: "Regular 34",
          name: "largeTitleWhite"
        },
        {
          style: human.title1White,
          text: "Regular 28",
          name: "title1White"
        },
        {
          style: human.title2White,
          text: "Regular 22",
          name: "title2White"
        },
        {
          style: human.title3White,
          text: "Regular 20",
          name: "title3White"
        },
        {
          style: human.headlineWhite,
          text: "Semi-Bold 17",
          name: "headlineWhite"
        },
        {
          style: human.bodyWhite,
          text: "Regular 17",
          name: "bodyWhite"
        },
        {
          style: human.calloutWhite,
          text: "Regular 16",
          name: "calloutWhite"
        },
        {
          style: human.subheadWhite,
          text: "Regular 15",
          name: "subheadWhite"
        },
        {
          style: human.footnoteWhite,
          text: "Regular 13",
          name: "footnoteWhite"
        },
        {
          style: human.caption1White,
          text: "Regular 12",
          name: "caption1White"
        },
        {
          style: human.caption2White,
          text: "Regular 11",
          name: "caption2White"
        }
      ]}
    />
  );
};

export default HumanScreen;
