import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  UIManager,
  LayoutAnimation,
  TextInput
} from "react-native";
import { human, materialColors, systemWeights } from "react-native-typography";

const INITIAL_TEXT = "Lorem ipsum dolor sit amet";

export class TypeDemoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGuidelines: false,
      showNames: true,
      text: INITIAL_TEXT,
      showText: false
    };
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
      },
      showText: () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ showText: !this.state.showText });
      }
    });
  }

  render() {
    const text = this.state.text === "" ? INITIAL_TEXT : this.state.text;
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
          <TextInput
            placeholder="Enter display text"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={[
              { borderWidth: 1, borderColor: "#ccc", margin: 16, padding: 8 },
              this.state.showText ? null : styles.hidden
            ]}
          />
          <View style={styles.section}>
            {this.props.blackStyles.map(s => (
              <View key={s.name}>
                <ScrollView
                  horizontal="true"
                  style={{ flexDirection: "row", paddingLeft: 16 }}
                  showsHorizontalScrollIndicator="false"
                >
                  <Text
                    numberOfLines={1}
                    style={[s.style, lightSectionGuides, { marginRight: 32 }]}
                  >
                    {this.state.text}
                  </Text>
                </ScrollView>
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
                <ScrollView
                  horizontal="true"
                  style={{ flexDirection: "row", paddingLeft: 16 }}
                  showsHorizontalScrollIndicator="false"
                >
                  <Text
                    numberOfLines={1}
                    style={[s.style, darkSectionGuides, { marginRight: 32 }]}
                  >
                    {this.state.text}
                  </Text>
                </ScrollView>
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
    // paddingHorizontal: 16,
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
    marginBottom: 4,
    paddingLeft: 16
  },
  darkSectionStyleNameText: {
    ...human.caption2Object,
    color: materialColors.whiteSecondary,
    marginBottom: 4,
    paddingLeft: 16
  },
  hidden: {
    display: "none" // https://github.com/facebook/react-native/issues/11828
  }
});

export default TypeDemoScreen;
