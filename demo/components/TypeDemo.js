import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { human, materialColors } from "react-native-typography";

export default function TypeDemo({ blackStyles, whiteStyles }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.section}>
        {blackStyles.map(s => (
          <View key={s.name}>
            <Text numberOfLines={1} style={s.style}>
              {s.text}
            </Text>
            <Text numberOfLines={1} style={styles.styleNameText}>
              {s.name}
            </Text>
          </View>
        ))}
      </View>
      <View style={[styles.section, styles.darkSection]}>
        {whiteStyles.map(s => (
          <View key={s.name}>
            <Text numberOfLines={1} style={s.style}>
              {s.text}
            </Text>
            <Text numberOfLines={1} style={styles.darkSectionStyleNameText}>
              {s.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  screenContent: {
    alignItems: "stretch",
    justifyContent: "flex-start"
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  darkSection: {
    backgroundColor: "#1D1D1D"
  },
  darkSectionGuides: {
    marginBottom: 1,
    backgroundColor: "rgba(255,255,255,0.1)"
  },
  lightSectionGuides: {
    marginBottom: 1,
    backgroundColor: "rgba(0,0,0,0.1)"
  },
  noGuides: {
    marginBottom: 1
  },
  styleNameText: {
    ...human.caption2Object,
    color: materialColors.blackSecondary,
    marginBottom: 4
  },
  darkSectionStyleNameText: {
    ...human.caption2Object,
    color: materialColors.whiteSecondary,
    marginBottom: 4
  }
});
