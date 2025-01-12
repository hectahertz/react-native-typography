import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Welcome",
            title: "Welcome"
          }}
        />
        <Drawer.Screen
          name="human"
          options={{
            drawerLabel: "Human",
            title: "Human"
          }}
        />
        <Drawer.Screen
          name="systemWeights"
          options={{
            drawerLabel: "System Weights",
            title: "System Weights"
          }}
        />
        <Drawer.Screen
          name="systemTallWeights"
          options={{
            drawerLabel: "System Tall Weights",
            title: "System Tall Weights"
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
