import { StyleSheet } from "react-native";
import suffixProperties from "./suffixProperties";

/**
 * Very frequently you may want to use a style with some tweaks.
 *
 * This class generates properties with the Object suffix, that can be
 * used to create a customized entry in a `StyleSheet`, e.g.:
 *
 *   const styles = StyleSheet.create({
 *     wrapper: {
 *       ...material.title1Object,
 *       color: 'palevioletred',
 *     },
 *   });
 *
 * Pattern taken from React Native's StyleSheet
 * @see https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/StyleSheet.js
 */
const create = object => ({
  ...suffixProperties(object, "Object"),
  ...StyleSheet.create(object)
});

export default { create };
