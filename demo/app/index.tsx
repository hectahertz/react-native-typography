import { Text, View } from "react-native";
import { iOSUIKit } from "react-native-typography";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: 48,
        paddingVertical: 20
      }}
    >
      <Text style={iOSUIKit.largeTitleEmphasized}>
        Thank you for choosing react-native-typography!
      </Text>
      <Text style={iOSUIKit.body}>
        You can find examples on the different screens on the menu.
      </Text>
    </View>
  );
}
