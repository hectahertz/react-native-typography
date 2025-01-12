import React from "react";
// @ts-ignore TODO: Fix types
import { humanTall } from "react-native-typography";
import TypeDemo from "../components/TypeDemo";

export default function HumanTall() {
  return (
    <TypeDemo
      blackStyles={[
        {
          style: humanTall.largeTitle,
          text: "คุณส่งอีเมลแล้ว",
          name: "largeTitle"
        },
        {
          style: humanTall.title1,
          text: "คุณส่งอีเมลแล้ว",
          name: "title1"
        },
        {
          style: humanTall.title2,
          text: "คุณส่งอีเมลแล้ว",
          name: "title2"
        },
        {
          style: humanTall.title3,
          text: "คุณส่งอีเมลแล้ว",
          name: "title3"
        },
        {
          style: humanTall.headline,
          text: "คุณส่งอีเมลแล้ว",
          name: "headline"
        },
        {
          style: humanTall.body,
          text: "คุณส่งอีเมลแล้ว",
          name: "body"
        },
        {
          style: humanTall.callout,
          text: "คุณส่งอีเมลแล้ว",
          name: "callout"
        },
        {
          style: humanTall.subhead,
          text: "คุณส่งอีเมลแล้ว",
          name: "subhead"
        },
        {
          style: humanTall.footnote,
          text: "คุณส่งอีเมลแล้ว",
          name: "footnote"
        },
        {
          style: humanTall.caption1,
          text: "คุณส่งอีเมลแล้ว",
          name: "caption1"
        },
        {
          style: humanTall.caption2,
          text: "คุณส่งอีเมลแล้ว",
          name: "caption2"
        }
      ]}
      whiteStyles={[
        {
          style: humanTall.largeTitleWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "largeTitleWhite"
        },
        {
          style: humanTall.title1White,
          text: "คุณส่งอีเมลแล้ว",
          name: "title1White"
        },
        {
          style: humanTall.title2White,
          text: "คุณส่งอีเมลแล้ว",
          name: "title2White"
        },
        {
          style: humanTall.title3White,
          text: "คุณส่งอีเมลแล้ว",
          name: "title3White"
        },
        {
          style: humanTall.headlineWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "headlineWhite"
        },
        {
          style: humanTall.bodyWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "bodyWhite"
        },
        {
          style: humanTall.calloutWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "calloutWhite"
        },
        {
          style: humanTall.subheadWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "subheadWhite"
        },
        {
          style: humanTall.footnoteWhite,
          text: "คุณส่งอีเมลแล้ว",
          name: "footnoteWhite"
        },
        {
          style: humanTall.caption1White,
          text: "คุณส่งอีเมลแล้ว",
          name: "caption1White"
        },
        {
          style: humanTall.caption2White,
          text: "คุณส่งอีเมลแล้ว",
          name: "caption2White"
        }
      ]}
    />
  );
}
