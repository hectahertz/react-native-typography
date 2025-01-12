import { Text, View, StyleSheet } from "react-native";
import { iOSUIKit, systemWeights } from "react-native-typography";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingHorizontal: 15,
        paddingVertical: 15
      }}
    >
      <Text style={styles.title}>
        Thank you for testing react-native-typography!
      </Text>
      <Text style={iOSUIKit.body}>
        You can find examples of the different collections on the menu.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...iOSUIKit.largeTitleEmphasizedObject,
    marginBottom: 15
  }
});
