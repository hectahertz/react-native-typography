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
          name="humanDense"
          options={{
            drawerLabel: "Human Dense",
            title: "Human Dense"
          }}
        />
        <Drawer.Screen
          name="humanTall"
          options={{
            drawerLabel: "Human Tall",
            title: "Human Tall"
          }}
        />
        <Drawer.Screen
          name="iOSUIKit"
          options={{
            drawerLabel: "iOSUIKit",
            title: "iOSUIKit"
          }}
        />
        <Drawer.Screen
          name="iOSUIKitDense"
          options={{
            drawerLabel: "iOSUIKit Dense",
            title: "iOSUIKit Dense"
          }}
        />
        <Drawer.Screen
          name="iOSUIKitTall"
          options={{
            drawerLabel: "iOSUIKit Tall",
            title: "iOSUIKit Tall"
          }}
        />
        <Drawer.Screen
          name="material"
          options={{
            drawerLabel: "Material",
            title: "Material"
          }}
        />
        <Drawer.Screen
          name="materialDense"
          options={{
            drawerLabel: "Material Dense",
            title: "Material Dense"
          }}
        />
        <Drawer.Screen
          name="materialTall"
          options={{
            drawerLabel: "Material Tall",
            title: "Material Tall"
          }}
        />
        <Drawer.Screen
          name="notoCJK"
          options={{
            drawerLabel: "Noto CJK",
            title: "Noto CJK"
          }}
        />
        <Drawer.Screen
          name="notoTall"
          options={{
            drawerLabel: "Noto Tall",
            title: "Noto Tall"
          }}
        />
        <Drawer.Screen
          name="robotoWeights"
          options={{
            drawerLabel: "Roboto Weights",
            title: "Roboto Weights"
          }}
        />
        <Drawer.Screen
          name="sfWeights"
          options={{
            drawerLabel: "SF Weights",
            title: "SF Weights"
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
          name="systemDenseWeights"
          options={{
            drawerLabel: "System Dense Weights",
            title: "System Dense Weights"
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
