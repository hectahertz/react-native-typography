import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar
} from "react-primitives";
import { iOSColors, human } from "react-native-typography";
import styled from "styled-components";
import glamorous from "glamorous-native";

const { Text: GlamorousBuiltInText } = glamorous;

// See https://github.com/styled-components/styled-components/issues/1449#issuecomment-420087359
const StyledText = styled(props => <Text {...props} />)`
  ${human.headlineObject};
  color: ${iOSColors.red};
  margin-top: 8;
`;

const GlamorousTextFromFactory = glamorous.text(human.headline, {
  color: iOSColors.green,
  marginTop: 8
});

const IntegrationsScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.screenContent}>
        <Text style={[human.headline, styles.colorOrange]}>
          Stylesheet array
        </Text>
        <Text style={styles.styleSheetSpread}>Stylesheet spread</Text>
        <StyledText>StyledComponents</StyledText>
        <GlamorousTextFromFactory>
          Glamorous from factory
        </GlamorousTextFromFactory>
        <GlamorousBuiltInText
          color={iOSColors.tealBlue}
          marginTop={8}
          style={human.headline}
        >
          Glamorous built-in
        </GlamorousBuiltInText>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: iOSColors.white
  },
  screenContent: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  guidesStyle: {
    marginBottom: 1,
    backgroundColor: iOSColors.customGray
  },
  noGuidesStyle: {
    marginBottom: 1
  },
  colorOrange: {
    color: iOSColors.orange
  },
  styleSheetSpread: {
    ...human.headlineObject,
    color: iOSColors.yellow,
    marginTop: 8
  }
});

export default IntegrationsScreen;
