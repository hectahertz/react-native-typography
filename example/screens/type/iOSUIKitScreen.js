import React from 'react';
import { View, Text } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import TypeDemoScreen from './TypeDemoScreen';

const iOSUIKitScreen = ({ navigation }) => {
  return (
    <TypeDemoScreen
      navigation={navigation}
      renderLightSection={guides => (
        <View>
          <Text style={[iOSUIKit.largeTitleEmphasized, guides]}>Bold 44</Text>
          <Text style={[iOSUIKit.title3Emphasized, guides]}>Semi-Bold 31</Text>
          <Text style={[iOSUIKit.title3, guides]}>Regular 31</Text>
          <Text style={[iOSUIKit.bodyEmphasized, guides]}>Semi-Bold 28</Text>
          <Text style={[iOSUIKit.body, guides]}>Regular 28</Text>
          <Text style={[iOSUIKit.subheadEmphasized, guides]}>Semi-Bold 25</Text>
          <Text style={[iOSUIKit.subhead, guides]}>Regular 25</Text>
          <Text style={[iOSUIKit.subheadShort, guides]}>Regular 25 Short</Text>
          <Text style={[iOSUIKit.callout, guides]}>Regular 26</Text>
          <Text style={[iOSUIKit.footnoteEmphasized, guides]}>Semi-Bold 23</Text>
          <Text style={[iOSUIKit.footnote, guides]}>Regular 23</Text>
          <Text style={[iOSUIKit.caption2Emphasized, guides]}>Semi-Bold 20</Text>
          <Text style={[iOSUIKit.caption2, guides]}>Regular 20</Text>
        </View>
      )}
      renderDarkSection={guides => (
        <View>
          <Text style={[iOSUIKit.largeTitleEmphasizedWhite, guides]}>Bold 44</Text>
          <Text style={[iOSUIKit.title3EmphasizedWhite, guides]}>Semi-Bold 31</Text>
          <Text style={[iOSUIKit.title3White, guides]}>Regular 31</Text>
          <Text style={[iOSUIKit.bodyEmphasizedWhite, guides]}>Semi-Bold 28</Text>
          <Text style={[iOSUIKit.bodyWhite, guides]}>Regular 28</Text>
          <Text style={[iOSUIKit.subheadEmphasizedWhite, guides]}>Semi-Bold 25</Text>
          <Text style={[iOSUIKit.subheadWhite, guides]}>Regular 25</Text>
          <Text style={[iOSUIKit.subheadShortWhite, guides]}>Regular 25 Short</Text>
          <Text style={[iOSUIKit.calloutWhite, guides]}>Regular 26</Text>
          <Text style={[iOSUIKit.footnoteEmphasizedWhite, guides]}>Semi-Bold 23</Text>
          <Text style={[iOSUIKit.footnoteWhite, guides]}>Regular 23</Text>
          <Text style={[iOSUIKit.caption2EmphasizedWhite, guides]}>Semi-Bold 20</Text>
          <Text style={[iOSUIKit.caption2White, guides]}>Regular 20</Text>
        </View>
      )}
    />
  );
};

export default iOSUIKitScreen;
