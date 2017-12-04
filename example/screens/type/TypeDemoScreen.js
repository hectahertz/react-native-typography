import React from 'react';
import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';

export class TypeDemoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showGuidelines: false };
  }

  componentWillMount() {
    this.props.navigation.setParams({
      showGuidelines: () => this.setState({ showGuidelines: !this.state.showGuidelines }),
    });
  }

  render() {
    const darkGuides = this.state.showGuidelines ? styles.darkGuides : styles.noGuides;
    const lightGuides = this.state.showGuidelines ? styles.lightGuides : styles.noGuides;
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.screenContent}>
          <View style={styles.section}>{this.props.renderLightSection(darkGuides)}</View>
          <View style={[styles.section, styles.darkSection]}>
            {this.props.renderDarkSection(lightGuides)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screenContent: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  darkSection: {
    backgroundColor: '#1D1D1D',
  },
  darkGuides: {
    marginBottom: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  lightGuides: {
    marginBottom: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  noGuides: {
    marginBottom: 1,
  },
});

export default TypeDemoScreen;
