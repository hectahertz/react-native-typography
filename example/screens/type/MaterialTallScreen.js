import React from "react";
import { materialTall } from "react-native-typography";
import TypeDemoScreen from "./TypeDemoScreen";

const MaterialTallScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      blackStyles={[
        {
          style: materialTall.display4,
          text: "คุณส่งอีเมลแล้ว",
          name: "display4"
        },
        {
          style: materialTall.display3,
          text: "คุณส่งอีเมลแล้ว",
          name: "display3"
        },
        {
          style: materialTall.display2,
          text: "คุณส่งอีเมลแล้ว",
          name: "display2"
        },
        {
          style: materialTall.display1,
          text: "คุณส่งอีเมลแล้ว",
          name: "display1"
        },
        {
          style: materialTall.headline,
          text: "คุณส่งอีเมลแล้ว",
          name: "headline"
        },
        {
          style: materialTall.title,
          text: "คุณส่งอีเมลแล้ว",
          name: "title"
        },
        {
          style: materialTall.subheading,
          text: "คุณส่งอีเมลแล้ว",
          name: "subheading"
        },
        {
          style: materialTall.body2,
          text: "คุณส่งอีเมลแล้ว",
          name: "body2"
        },
        {
          style: materialTall.body1,
          text: "คุณส่งอีเมลแล้ว",
          name: "body1"
        },
        {
          style: materialTall.caption,
          text: "คุณส่งอีเมลแล้ว",
          name: "caption"
        },
        {
          style: materialTall.button,
          text: "คุณส่งอีเมลแล้ว",
          name: "button"
        }
      ]}
      whiteStyles={[
        {
          style: materialTall.display4White,
          text: "คุณส่งอีเมลแล้ว",
          name: "display4White"
        },
        {
          style: materialTall.display3White,
          text: "คุณส่งอีเมลแล้ว",
          name: "display3White"
        },
        {
          style: materialTall.display2White,
          text: "คุณส่งอีเมลแล้ว",
          name: "display2White"
        },
        {
          style: materialTall.display1White,
          text: "คุณส่งอีเมลแล้ว",
          name: "display1White"
        },
        {
          style: materialTall.headlineWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "headlineWhite"
        },
        {
          style: materialTall.titleWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "titleWhite"
        },
        {
          style: materialTall.subheadingWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "subheadingWhite"
        },
        {
          style: materialTall.body2White,
          text: "คุณส่งอีเมลแล้ว",
          name: "body2White"
        },
        {
          style: materialTall.body1White,
          text: "คุณส่งอีเมลแล้ว",
          name: "body1White"
        },
        {
          style: materialTall.captionWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "captionWhite"
        },
        {
          style: materialTall.buttonWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "buttonWhite"
        }
      ]}
    />
  );
};

export default MaterialTallScreen;
