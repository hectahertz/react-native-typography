import React from "react";
// @ts-ignore TODO: Fix types
import { humanDense } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function HumanDense() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: humanDense.largeTitle,
          text: "你送了一封電子郵件。",
          name: "largeTitle"
        },
        {
          style: humanDense.title1,
          text: "你送了一封電子郵件。",
          name: "title1"
        },
        {
          style: humanDense.title2,
          text: "你送了一封電子郵件。",
          name: "title2"
        },
        {
          style: humanDense.title3,
          text: "你送了一封電子郵件。",
          name: "title3"
        },
        {
          style: humanDense.headline,
          text: "你送了一封電子郵件。",
          name: "headline"
        },
        {
          style: humanDense.body,
          text: "你送了一封電子郵件。",
          name: "body"
        },
        {
          style: humanDense.callout,
          text: "你送了一封電子郵件。",
          name: "callout"
        },
        {
          style: humanDense.subhead,
          text: "你送了一封電子郵件。",
          name: "subhead"
        },
        {
          style: humanDense.footnote,
          text: "你送了一封電子郵件。",
          name: "footnote"
        },
        {
          style: humanDense.caption1,
          text: "你送了一封電子郵件。",
          name: "caption1"
        },
        {
          style: humanDense.caption2,
          text: "你送了一封電子郵件。",
          name: "caption2"
        }
      ]}
      whiteStyles={[
        {
          style: humanDense.largeTitleWhite,
          text: "你送了一封電子郵件。",
          name: "largeTitleWhite"
        },
        {
          style: humanDense.title1White,
          text: "你送了一封電子郵件。",
          name: "title1White"
        },
        {
          style: humanDense.title2White,
          text: "你送了一封電子郵件。",
          name: "title2White"
        },
        {
          style: humanDense.title3White,
          text: "你送了一封電子郵件。",
          name: "title3White"
        },
        {
          style: humanDense.headlineWhite,
          text: "你送了一封電子郵件。",
          name: "headlineWhite"
        },
        {
          style: humanDense.bodyWhite,
          text: "你送了一封電子郵件。",
          name: "bodyWhite"
        },
        {
          style: humanDense.calloutWhite,
          text: "你送了一封電子郵件。",
          name: "calloutWhite"
        },
        {
          style: humanDense.subheadWhite,
          text: "你送了一封電子郵件。",
          name: "subheadWhite"
        },
        {
          style: humanDense.footnoteWhite,
          text: "你送了一封電子郵件。",
          name: "footnoteWhite"
        },
        {
          style: humanDense.caption1White,
          text: "你送了一封電子郵件。",
          name: "caption1White"
        },
        {
          style: humanDense.caption2White,
          text: "你送了一封電子郵件。",
          name: "caption2White"
        }
      ]}
    />
  );
}
