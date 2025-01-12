import React from "react";
import { material } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function Material() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: material.display4,
          text: "Light 112",
          name: "display4"
        },
        {
          style: material.display3,
          text: "Regular 56",
          name: "display3"
        },
        {
          style: material.display2,
          text: "Regular 45",
          name: "display2"
        },
        {
          style: material.display1,
          text: "Regular 34",
          name: "display1"
        },
        {
          style: material.headline,
          text: "Regular 24",
          name: "headline"
        },
        {
          style: material.title,
          text: "Medium 20",
          name: "title"
        },
        {
          style: material.subheading,
          text: "Regular 16",
          name: "subheading"
        },
        {
          style: material.body2,
          text: "Medium 14",
          name: "body2"
        },
        {
          style: material.body1,
          text: "Regular 14",
          name: "body1"
        },
        {
          style: material.caption,
          text: "Regular 12",
          name: "caption"
        },
        {
          style: material.button,
          text: "MEDIUM 14",
          name: "button"
        }
      ]}
      whiteStyles={[
        {
          style: material.display4White,
          text: "Light 112",
          name: "display4White"
        },
        {
          style: material.display3White,
          text: "Regular 56",
          name: "display3White"
        },
        {
          style: material.display2White,
          text: "Regular 45",
          name: "display2White"
        },
        {
          style: material.display1White,
          text: "Regular 34",
          name: "display1White"
        },
        {
          style: material.headlineWhite,
          text: "Regular 24",
          name: "headlineWhite"
        },
        {
          style: material.titleWhite,
          text: "Medium 20",
          name: "titleWhite"
        },
        {
          style: material.subheadingWhite,
          text: "Regular 16",
          name: "subheadingWhite"
        },
        {
          style: material.body2White,
          text: "Medium 14",
          name: "body2White"
        },
        {
          style: material.body1White,
          text: "Regular 14",
          name: "body1White"
        },
        {
          style: material.captionWhite,
          text: "Regular 12",
          name: "captionWhite"
        },
        {
          style: material.buttonWhite,
          text: "MEDIUM 14",
          name: "buttonWhite"
        }
      ]}
    />
  );
}
