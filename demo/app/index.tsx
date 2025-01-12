import { Text, View } from "react-native";
import { human } from "react-native-typography";

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
      <Text style={human.largeTitle}>
        Thank you for choosing react-native-typography!
      </Text>
      <Text style={human.body}>
        You can find examples on the different screens on the menu.
      </Text>
    </View>
  );
}
