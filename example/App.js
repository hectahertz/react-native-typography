import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import { iOSColors } from "react-native-typography";

import MaterialScreen from "./screens/type/MaterialScreen";
import MaterialTallScreen from "./screens/type/MaterialTallScreen";
import MaterialDenseScreen from "./screens/type/MaterialDenseScreen";
import HumanScreen from "./screens/type/HumanScreen";
import HumanDenseScreen from "./screens/type/HumanDenseScreen";
import HumanTallScreen from "./screens/type/HumanTallScreen";
import iOSUIKitScreen from "./screens/type/iOSUIKitScreen";
import iOSUIKitDenseScreen from "./screens/type/iOSUIKitDenseScreen";
import iOSUIKitTallScreen from "./screens/type/iOSUIKitTallScreen";
import IntegrationsScreen from "./screens/type/IntegrationsScreen";
import SFWeightsScreen from "./screens/type/SFWeightsScreen";
import RobotoWeightsScreen from "./screens/type/RobotoWeightsScreen";
import NotoCJKScreen from "./screens/type/NotoCJKScreen";
import NotoTallScreen from "./screens/type/NotoTallScreen";
import SystemWeightsScreen from "./screens/type/SystemWeightsScreen";
import SystemDenseWeightsScreen from "./screens/type/SystemDenseWeightsScreen";
import SystemTallWeightsScreen from "./screens/type/SystemTallWeightsScreen";
import HumanShowcaseScreen from "./screens/showcase/HumanShowcaseScreen";
import MaterialShowcaseScreen from "./screens/showcase/MaterialShowcaseScreen";

const drawerButton = icon => ({ focused }) => (
  <Ionicons
    name={icon}
    size={28}
    style={{ color: focused ? iOSColors.blue : iOSColors.gray }}
  />
);

const typeDemoHeaderRight = navigation => (
  <View style={styles.headerRightButtonRow}>
    <TouchableOpacity
      onPress={navigation.state.params && navigation.state.params.showNames}
    >
      <Ionicons
        name={Platform.OS === "ios" ? "ios-code" : "md-code"}
        size={28}
        style={{ paddingHorizontal: 16, color: iOSColors.black }}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={
        navigation.state.params && navigation.state.params.showGuidelines
      }
    >
      <Ionicons
        name={Platform.OS === "ios" ? "ios-crop" : "md-crop"}
        size={28}
        style={{ paddingRight: 16, color: iOSColors.black }}
      />
    </TouchableOpacity>
  </View>
);

const openDrawerHeaderButton = (navigation, color) => (
  <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
    <Ionicons
      name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
      size={30}
      style={{ paddingHorizontal: 16, color }}
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
        headerRight: typeDemoHeaderRight(navigation)
      })
    }
  );

const Root = DrawerNavigator({
  human: {
    screen: guidelinesStackNavigator(HumanScreen, "Human Interface"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Human Interface",
      drawerIcon: drawerButton("logo-apple",)
    })
  },
  material: {
    screen: guidelinesStackNavigator(MaterialScreen, "Material Design"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Material Design",
      drawerIcon: drawerButton("logo-android",)
    })
  },
  iOSUIKit: {
    screen: guidelinesStackNavigator(iOSUIKitScreen, "iOSUIKit"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "iOSUIKit",
      drawerIcon: drawerButton("ios-construct")
    })
  },
  humanShowcase: {
    screen: StackNavigator({
      Screen: { screen: HumanShowcaseScreen }
    }),
    navigationOptions: {
      drawerLabel: "Showcase - Human Interface",
      drawerIcon: drawerButton("ios-create")
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
      drawerIcon: drawerButton("ios-create")
    }
  },
  systemWeights: {
    screen: guidelinesStackNavigator(SystemWeightsScreen, "System Weights"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "System Weights",
      drawerIcon: drawerButton("ios-quote")
    })
  },
  ...Platform.select({
    ios: {
      sanFrancisco: {
        screen: guidelinesStackNavigator(
          SFWeightsScreen,
          "San Francisco Weights"
        ),
        navigationOptions: ({ navigation }) => ({
          drawerLabel: "San Francisco Weights",
          drawerIcon: drawerButton("logo-apple",)
        })
      }
    },
    android: {
      roboto: {
        screen: guidelinesStackNavigator(RobotoWeightsScreen, "Roboto Weights"),
        navigationOptions: ({ navigation }) => ({
          drawerLabel: "Roboto Weights",
          drawerIcon: drawerButton("logo-android",)
        })
      },
      notoCJK: {
        screen: guidelinesStackNavigator(NotoCJKScreen, "Noto CJK Weights"),
        navigationOptions: ({ navigation }) => ({
          drawerLabel: "Noto CJK Weights",
          drawerIcon: drawerButton("logo-android",)
        })
      },
      notoTall: {
        screen: guidelinesStackNavigator(NotoTallScreen, "Noto Tall Weights"),
        navigationOptions: ({ navigation }) => ({
          drawerLabel: "Noto Tall Weights",
          drawerIcon: drawerButton("logo-android",)
        })
      }
    }
  }),
  systemDenseWeights: {
    screen: guidelinesStackNavigator(
      SystemDenseWeightsScreen,
      "System Dense Weights"
    ),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "System Dense Weights",
      drawerIcon: drawerButton("ios-quote")
    })
  },
  systemTallWeights: {
    screen: guidelinesStackNavigator(
      SystemTallWeightsScreen,
      "System Tall Weights"
    ),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "System Tall Weights",
      drawerIcon: drawerButton("ios-quote")
    })
  },
  humanDense: {
    screen: guidelinesStackNavigator(HumanDenseScreen, "Human Interface Dense"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Human Interface Dense",
      drawerIcon: drawerButton("logo-apple",)
    })
  },
  humanTall: {
    screen: guidelinesStackNavigator(HumanTallScreen, "Human Interface Tall"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Human Interface Tall",
      drawerIcon: drawerButton("logo-apple",)
    })
  },
  materialDense: {
    screen: guidelinesStackNavigator(
      MaterialDenseScreen,
      "Material Design Dense"
    ),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Material Design Dense",
      drawerIcon: drawerButton("logo-android",)
    })
  },
  materialTall: {
    screen: guidelinesStackNavigator(
      MaterialTallScreen,
      "Material Design Tall"
    ),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Material Design Tall",
      drawerIcon: drawerButton("logo-android",)
    })
  },
  iOSUIKitDense: {
    screen: guidelinesStackNavigator(iOSUIKitDenseScreen, "iOSUIKit Dense"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "iOSUIKit Dense",
      drawerIcon: drawerButton("ios-construct")
    })
  },
  iOSUIKitTall: {
    screen: guidelinesStackNavigator(iOSUIKitTallScreen, "iOSUIKit Tall"),
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "iOSUIKit Tall",
      drawerIcon: drawerButton("ios-construct")
    })
  },
  integrations: {
    screen: StackNavigator({
      Screen: {
        screen: IntegrationsScreen,
        navigationOptions: ({ navigation }) => ({
          headerTitle: "Integration examples",
          headerLeft: openDrawerHeaderButton(navigation, iOSColors.black)
        })
      }
    }),
    navigationOptions: {
      drawerLabel: "Integration examples",
      drawerIcon: drawerButton("ios-code")
    }
  }
});

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
  },
  headerRightButtonRow: {
    flexDirection: "row"
  }
});

export default App;
