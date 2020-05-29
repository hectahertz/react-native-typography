import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  UIManager,
  LayoutAnimation
} from "react-native";
import { human, materialColors, systemWeights } from "react-native-typography";

export class TypeDemoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGuidelines: false, showNames: true };
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      showGuidelines: () =>
        this.setState({ showGuidelines: !this.state.showGuidelines }),
      showNames: () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ showNames: !this.state.showNames });
      }
    });
  }

  render() {
    const darkSectionGuides = this.state.showGuidelines
      ? styles.darkSectionGuides
      : styles.noGuides;
    const lightSectionGuides = this.state.showGuidelines
      ? styles.lightSectionGuides
      : styles.noGuides;

    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.screenContent}>
          <View style={styles.section}>
            {this.props.blackStyles.map(s => (
              <View key={s.name}>
                <Text numberOfLines={1} style={[s.style, lightSectionGuides]}>
                  {s.text}
                </Text>
                <Text
                  numberOfLines={1}
                  style={
                    this.state.showNames ? styles.styleNameText : styles.hidden
                  }
                >
                  {s.name}
                </Text>
              </View>
            ))}
          </View>
          <View style={[styles.section, styles.darkSection]}>
            {this.props.whiteStyles.map(s => (
              <View key={s.name}>
                <Text numberOfLines={1} style={[s.style, darkSectionGuides]}>
                  {s.text}
                </Text>
                <Text
                  numberOfLines={1}
                  style={
                    this.state.showNames
                      ? styles.darkSectionStyleNameText
                      : styles.hidden
                  }
                >
                  {s.name}
                </Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
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
  },
  hidden: {
    display: "none" // https://github.com/facebook/react-native/issues/11828
  }
});

export default TypeDemoScreen;
