import React from "react";
import { StyleSheet, View, Platform, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
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

const guidelinesStackNavigator = (screen, headerTitle) => ({
  screen,
  headerTitle
});

const Screens = {
  human: {
    screen: guidelinesStackNavigator(HumanScreen, "Human Interface"),
    navigationOptions: {
      drawerLabel: "Human Interface",
      drawerIcon: drawerButton("logo-apple")
    }
  },
  material: {
    screen: guidelinesStackNavigator(MaterialScreen, "Material Design"),
    navigationOptions: {
      drawerLabel: "Material Design",
      drawerIcon: drawerButton("logo-android")
    }
  },
  iOSUIKit: {
    screen: guidelinesStackNavigator(iOSUIKitScreen, "iOSUIKit"),
    navigationOptions: {
      drawerLabel: "iOSUIKit",
      drawerIcon: drawerButton("ios-construct")
    }
  },
  humanShowcase: {
    screen: guidelinesStackNavigator(HumanShowcaseScreen, "iOSUIKit"),
    navigationOptions: {
      drawerLabel: "Showcase - Human Interface",
      drawerIcon: drawerButton("ios-create")
    }
  },
  materialShowcase: {
    screen: guidelinesStackNavigator(MaterialShowcaseScreen, "Your Daily Mix"),
    navigationOptions: {
      drawerLabel: "Showcase - Material Design",
      drawerIcon: drawerButton("ios-create")
    }
  },
  systemWeights: {
    screen: guidelinesStackNavigator(SystemWeightsScreen, "System Weights"),
    navigationOptions: {
      drawerLabel: "System Weights",
      drawerIcon: drawerButton("ios-quote")
    }
  },
  ...Platform.select({
    ios: {
      sanFrancisco: {
        screen: guidelinesStackNavigator(
          SFWeightsScreen,
          "San Francisco Weights"
        ),
        navigationOptions: {
          drawerLabel: "San Francisco Weights",
          drawerIcon: drawerButton("logo-apple")
        }
      }
    },
    android: {
      roboto: {
        screen: guidelinesStackNavigator(RobotoWeightsScreen, "Roboto Weights"),
        navigationOptions: {
          drawerLabel: "Roboto Weights",
          drawerIcon: drawerButton("logo-android")
        }
      },
      notoCJK: {
        screen: guidelinesStackNavigator(NotoCJKScreen, "Noto CJK Weights"),
        navigationOptions: {
          drawerLabel: "Noto CJK Weights",
          drawerIcon: drawerButton("logo-android")
        }
      },
      notoTall: {
        screen: guidelinesStackNavigator(NotoTallScreen, "Noto Tall Weights"),
        navigationOptions: {
          drawerLabel: "Noto Tall Weights",
          drawerIcon: drawerButton("logo-android")
        }
      }
    }
  }),
  systemDenseWeights: {
    screen: guidelinesStackNavigator(
      SystemDenseWeightsScreen,
      "System Dense Weights"
    ),
    navigationOptions: {
      drawerLabel: "System Dense Weights",
      drawerIcon: drawerButton("ios-quote")
    }
  },
  systemTallWeights: {
    screen: guidelinesStackNavigator(
      SystemTallWeightsScreen,
      "System Tall Weights"
    ),
    navigationOptions: {
      drawerLabel: "System Tall Weights",
      drawerIcon: drawerButton("ios-quote")
    }
  },
  humanDense: {
    screen: guidelinesStackNavigator(HumanDenseScreen, "Human Interface Dense"),
    navigationOptions: {
      drawerLabel: "Human Interface Dense",
      drawerIcon: drawerButton("logo-apple")
    }
  },
  humanTall: {
    screen: guidelinesStackNavigator(HumanTallScreen, "Human Interface Tall"),
    navigationOptions: {
      drawerLabel: "Human Interface Tall",
      drawerIcon: drawerButton("logo-apple")
    }
  },
  materialDense: {
    screen: guidelinesStackNavigator(
      MaterialDenseScreen,
      "Material Design Dense"
    ),
    navigationOptions: {
      drawerLabel: "Material Design Dense",
      drawerIcon: drawerButton("logo-android")
    }
  },
  materialTall: {
    screen: guidelinesStackNavigator(
      MaterialTallScreen,
      "Material Design Tall"
    ),
    navigationOptions: {
      drawerLabel: "Material Design Tall",
      drawerIcon: drawerButton("logo-android")
    }
  },
  iOSUIKitDense: {
    screen: guidelinesStackNavigator(iOSUIKitDenseScreen, "iOSUIKit Dense"),
    navigationOptions: {
      drawerLabel: "iOSUIKit Dense",
      drawerIcon: drawerButton("ios-construct")
    }
  },
  iOSUIKitTall: {
    screen: guidelinesStackNavigator(iOSUIKitTallScreen, "iOSUIKit Tall"),
    navigationOptions: {
      drawerLabel: "iOSUIKit Tall",
      drawerIcon: drawerButton("ios-construct")
    }
  },
  integrations: {
    screen: guidelinesStackNavigator(
      IntegrationsScreen,
      "Integration examples"
    ),
    navigationOptions: {
      drawerLabel: "Integration examples",
      drawerIcon: drawerButton("ios-code")
    }
  }
};

const Drawer = createDrawerNavigator();

const StackScreen = (screenComponent, headerTitle) => {
  const Stack = createStackNavigator();

  return () => {
    const navigation = useNavigation();
    return (
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons
                name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
                size={30}
                style={{ paddingHorizontal: 16, color: iOSColors.black }}
              />
            </TouchableOpacity>
          ),
          headerTitle
        }}
      >
        <Stack.Screen component={screenComponent} name="Screen" />
      </Stack.Navigator>
    );
  };
};

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Drawer.Navigator>
          {Object.entries(Screens).map(([screenName, screen]) => (
            <Drawer.Screen
              name={screenName}
              component={StackScreen(
                screen.screen.screen,
                screen.screen.headerTitle
              )}
              options={{
                ...screen.navigationOptions,
                title: screen.screen.headerTitle
              }}
            />
          ))}
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
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
