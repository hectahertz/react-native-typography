import React from "react";
// @ts-ignore TODO: Fix types
import { materialDense } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function MaterialDense() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: materialDense.display4,
          text: "你送了一封電子郵件。",
          name: "display4"
        },
        {
          style: materialDense.display3,
          text: "你送了一封電子郵件。",
          name: "display3"
        },
        {
          style: materialDense.display2,
          text: "你送了一封電子郵件。",
          name: "display2"
        },
        {
          style: materialDense.display1,
          text: "你送了一封電子郵件。",
          name: "display1"
        },
        {
          style: materialDense.headline,
          text: "你送了一封電子郵件。",
          name: "headline"
        },
        {
          style: materialDense.title,
          text: "你送了一封電子郵件。",
          name: "title"
        },
        {
          style: materialDense.subheading,
          text: "你送了一封電子郵件。",
          name: "subheading"
        },
        {
          style: materialDense.body2,
          text: "你送了一封電子郵件。",
          name: "body2"
        },
        {
          style: materialDense.body1,
          text: "你送了一封電子郵件。",
          name: "body1"
        },
        {
          style: materialDense.caption,
          text: "你送了一封電子郵件。",
          name: "caption"
        },
        {
          style: materialDense.button,
          text: "你送了一封電子郵件。",
          name: "button"
        }
      ]}
      whiteStyles={[
        {
          style: materialDense.display4White,
          text: "你送了一封電子郵件。",
          name: "display4White"
        },
        {
          style: materialDense.display3White,
          text: "你送了一封電子郵件。",
          name: "display3White"
        },
        {
          style: materialDense.display2White,
          text: "你送了一封電子郵件。",
          name: "display2White"
        },
        {
          style: materialDense.display1White,
          text: "你送了一封電子郵件。",
          name: "display1White"
        },
        {
          style: materialDense.headlineWhite,
          text: "你送了一封電子郵件。",
          name: "headlineWhite"
        },
        {
          style: materialDense.titleWhite,
          text: "你送了一封電子郵件。",
          name: "titleWhite"
        },
        {
          style: materialDense.subheadingWhite,
          text: "你送了一封電子郵件。",
          name: "subheadingWhite"
        },
        {
          style: materialDense.body2White,
          text: "你送了一封電子郵件。",
          name: "body2White"
        },
        {
          style: materialDense.body1White,
          text: "你送了一封電子郵件。",
          name: "body1White"
        },
        {
          style: materialDense.captionWhite,
          text: "你送了一封電子郵件。",
          name: "captionWhite"
        },
        {
          style: materialDense.buttonWhite,
          text: "你送了一封電子郵件。",
          name: "buttonWhite"
        }
      ]}
    />
  );
}
