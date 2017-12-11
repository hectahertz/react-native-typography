import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import { iOSColors } from "react-native-typography";

import MaterialScreen from "./screens/type/MaterialScreen";
import MaterialTallScreen from "./screens/type/MaterialTallScreen";
import MaterialDenseScreen from "./screens/type/MaterialDenseScreen";
import HumanScreen from "./screens/type/HumanScreen";
import iOSUIKitScreen from "./screens/type/iOSUIKitScreen";
import IntegrationsScreen from "./screens/type/IntegrationsScreen";
import SFWeightsScreen from "./screens/type/SFWeightsScreen";
import RobotoWeightsScreen from "./screens/type/RobotoWeightsScreen";
import SystemWeightsScreen from "./screens/type/SystemWeightsScreen";
import HumanShowcaseScreen from "./screens/showcase/HumanShowcaseScreen";
import MaterialShowcaseScreen from "./screens/showcase/MaterialShowcaseScreen";

const drawerButton = (enabledIcon, disabledIcon) => ({ focused }) => (
  <Ionicons
    name={focused ? enabledIcon : disabledIcon}
    size={28}
    style={{ color: focused ? iOSColors.blue : iOSColors.gray }}
  />
);

const showGuidelinesHeaderButton = navigation => (
  <TouchableOpacity
    onPress={navigation.state.params && navigation.state.params.showGuidelines}
  >
    <Ionicons
      name={Platform.OS === "ios" ? "ios-crop" : "md-crop"}
      size={28}
      style={{ marginRight: 16, color: iOSColors.black }}
    />
  </TouchableOpacity>
);

const openDrawerHeaderButton = (navigation, color) => (
  <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
    <Ionicons
      name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      size={30}
      style={{ marginLeft: 16, color }}
    />
  </TouchableOpacity>
);

const guidelinesStackNavigator = (screen, headerTitle) =>
  StackNavigator(
    {
      Screen: { screen }
    },
    {
      navigationOptions: ({ navigation }) => ({
        headerLeft: openDrawerHeaderButton(navigation, iOSColors.black),
        headerTitle,
        headerStyle: {
          marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
        },
        headerRight: showGuidelinesHeaderButton(navigation)
      })
    }
  );

const Root = DrawerNavigator(
  {
    human: {
      screen: guidelinesStackNavigator(HumanScreen, "Human Interface"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Human Interface",
        drawerIcon: drawerButton("logo-apple", "logo-apple")
      })
    },
    material: {
      screen: guidelinesStackNavigator(MaterialScreen, "Material Design"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Material Design",
        drawerIcon: drawerButton("logo-android", "logo-android")
      })
    },
    materialTall: {
      screen: guidelinesStackNavigator(
        MaterialTallScreen,
        "Material Design Tall"
      ),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Material Design Tall",
        drawerIcon: drawerButton("logo-android", "logo-android")
      })
    },
    materialDense: {
      screen: guidelinesStackNavigator(
        MaterialDenseScreen,
        "Material Design Dense"
      ),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "Material Design Dense",
        drawerIcon: drawerButton("logo-android", "logo-android")
      })
    },
    iOSUIKit: {
      screen: guidelinesStackNavigator(iOSUIKitScreen, "iOSUIKit"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "iOSUIKit",
        drawerIcon: drawerButton("ios-construct", "ios-construct-outline")
      })
    },
    systemWeights: {
      screen: guidelinesStackNavigator(SystemWeightsScreen, "System Weights"),
      navigationOptions: ({ navigation }) => ({
        drawerLabel: "System Weights",
        drawerIcon: drawerButton("ios-quote", "ios-quote-outline")
      })
    },
    weights: Platform.select({
      ios: {
        screen: guidelinesStackNavigator(
          SFWeightsScreen,
          "San Francisco Weights"
        ),
        navigationOptions: ({ navigation }) => ({
          drawerLabel: "San Francisco Weights",
          drawerIcon: drawerButton("logo-apple", "logo-apple")
        })
      },
      android: {
        screen: guidelinesStackNavigator(RobotoWeightsScreen, "Roboto Weights"),
        navigationOptions: ({ navigation }) => ({
          drawerLabel: "Roboto Weights",
          drawerIcon: drawerButton("logo-android", "logo-android")
        })
      }
    }),
    humanShowcase: {
      screen: StackNavigator({
        Screen: { screen: HumanShowcaseScreen }
      }),
      navigationOptions: {
        drawerLabel: "Showcase - Human Interface",
        drawerIcon: drawerButton("ios-create", "ios-create-outline")
      }
    },
    materialShowcase: {
      screen: StackNavigator({
        Screen: {
          screen: MaterialShowcaseScreen,
          navigationOptions: ({ navigation }) => ({
            headerTitle: "Your Daily Mix",
            headerLeft: openDrawerHeaderButton(navigation, iOSColors.white)
          })
        }
      }),
      navigationOptions: {
        drawerLabel: "Showcase - Material Design",
        drawerIcon: drawerButton("ios-create", "ios-create-outline")
      }
    },
    integrations: {
      screen: StackNavigator({
        Screen: {
          screen: IntegrationsScreen,
          navigationOptions: ({ navigation }) => ({
            headerTitle: "Integration examples",
            headerLeft: openDrawerHeaderButton(navigation, iOSColors.black),
            headerStyle: {
              marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
            }
          })
        }
      }),
      navigationOptions: {
        drawerLabel: "Integration examples",
        drawerIcon: drawerButton("ios-code", "ios-code-outline")
      }
    }
  },
  {
    contentOptions: {
      itemsContainerStyle: {
        marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
      }
    }
  }
);

const App = () => {
  return (
    <View style={styles.container}>
      <Root />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
