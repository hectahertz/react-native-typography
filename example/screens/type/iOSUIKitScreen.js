import React from "react";
import { iOSUIKit } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const iOSUIKitScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: iOSUIKit.largeTitleEmphasized,
          text: "Bold 34",
          name: "largeTitleEmphasized"
        },
        {
          style: iOSUIKit.title3Emphasized,
          text: "Semi-Bold 20",
          name: "title3Emphasized"
        },
        {
          style: iOSUIKit.title3,
          text: "Regular 20",
          name: "title3"
        },
        {
          style: iOSUIKit.bodyEmphasized,
          text: "Semi-Bold 17",
          name: "bodyEmphasized"
        },
        {
          style: iOSUIKit.body,
          text: "Regular 17",
          name: "body"
        },
        {
          style: iOSUIKit.subheadEmphasized,
          text: "Semi-Bold 15",
          name: "subheadEmphasized"
        },
        {
          style: iOSUIKit.subhead,
          text: "Regular 15",
          name: "subhead"
        },
        {
          style: iOSUIKit.subheadShort,
          text: "Regular 15 Short",
          name: "subheadShort"
        },
        {
          style: iOSUIKit.callout,
          text: "Regular 16",
          name: "callout"
        },
        {
          style: iOSUIKit.footnoteEmphasized,
          text: "Semi-Bold 13",
          name: "footnoteEmphasized"
        },
        {
          style: iOSUIKit.footnote,
          text: "Regular 13",
          name: "footnote"
        },
        {
          style: iOSUIKit.caption2Emphasized,
          text: "Semi-Bold 11",
          name: "caption2Emphasized"
        },
        {
          style: iOSUIKit.caption2,
          text: "Regular 11",
          name: "caption2"
        }
      ]}
      whiteStyles={[
        {
          style: iOSUIKit.largeTitleEmphasizedWhite,
          text: "Bold 34",
          name: "largeTitleEmphasizedWhite"
        },
        {
          style: iOSUIKit.title3EmphasizedWhite,
          text: "Semi-Bold 20",
          name: "title3EmphasizedWhite"
        },
        {
          style: iOSUIKit.title3White,
          text: "Regular 20",
          name: "title3White"
        },
        {
          style: iOSUIKit.bodyEmphasizedWhite,
          text: "Semi-Bold 17",
          name: "bodyEmphasizedWhite"
        },
        {
          style: iOSUIKit.bodyWhite,
          text: "Regular 17",
          name: "bodyWhite"
        },
        {
          style: iOSUIKit.subheadEmphasizedWhite,
          text: "Semi-Bold 15",
          name: "subheadEmphasizedWhite"
        },
        {
          style: iOSUIKit.subheadWhite,
          text: "Regular 15",
          name: "subheadWhite"
        },
        {
          style: iOSUIKit.subheadShortWhite,
          text: "Regular 15 Short",
          name: "subheadShortWhite"
        },
        {
          style: iOSUIKit.calloutWhite,
          text: "Regular 16",
          name: "calloutWhite"
        },
        {
          style: iOSUIKit.footnoteEmphasizedWhite,
          text: "Semi-Bold 13",
          name: "footnoteEmphasizedWhite"
        },
        {
          style: iOSUIKit.footnoteWhite,
          text: "Regular 13",
          name: "footnoteWhite"
        },
        {
          style: iOSUIKit.caption2EmphasizedWhite,
          text: "Semi-Bold 11",
          name: "caption2EmphasizedWhite"
        },
        {
          style: iOSUIKit.caption2White,
          text: "Regular 11",
          name: "caption2White"
        }
      ]}
    />
  );
};

export default iOSUIKitScreen;
