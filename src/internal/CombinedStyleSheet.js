import { StyleSheet } from 'react-native';
import suffixProperties from './suffixProperties';

/**
 * Very frequently you may want `absoluteFill` but with a couple tweaks - the properties with the Object suffix can be
 * used to create a customized entry in a `StyleSheet`, e.g.:
 *
 *   const styles = StyleSheet.create({
 *     wrapper: {
 *       ...material.title1,
 *       color: 'palevioletred',
 *     },
 *   });
 *
 * @see https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/StyleSheet.js
 */
const create = object => ({
  ...suffixProperties(object, 'Object'),
  ...StyleSheet.create(object),
});

export default { create };
