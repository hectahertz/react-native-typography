import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Constants } from 'expo';

import { iOSColors, human, iOSUIKit, systemWeights } from 'react-native-typography';

const headerStyles = StyleSheet.create({
  whiteHeader: {
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    height: 44,
    backgroundColor: iOSColors.white,
    borderBottomWidth: 0,
    elevation: 0,
  },
  backTouchable: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  backIcon: {
    color: iOSColors.pink,
    paddingBottom: 2, // Icon visual alignment
  },
  backText: {
    ...iOSUIKit.bodyObject,
    color: iOSColors.pink,
    marginLeft: 8,
  },
});

const TouchableRoundedImage = ({ style, ...props }) => (
  <TouchableOpacity style={style}>
    <Image borderRadius={6} style={styles.touchableRoundedImage} {...props} />
  </TouchableOpacity>
);

const recents = [
  {
    album: 'Time Of Mirrors',
    author: 'Chaotic Hook',
    cover: require('../../assets/angel-jimenez-168185_2x.png'),
  },
  {
    album: 'Last Chances',
    author: 'Seizing Mistake',
    cover: require('../../assets/paul-morris-144777_2x.png'),
  },
  {
    album: 'No Tales',
    author: 'Misconduct',
    cover: require('../../assets/sasha-freemind-186664_2x.png'),
  },
];

export class HumanShowcaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={headerStyles.backTouchable}
        onPress={() => navigation.navigate('DrawerOpen')}>
        <FontAwesome name="angle-left" size={40} style={headerStyles.backIcon} />
        <Text style={headerStyles.backText}>Back</Text>
      </TouchableOpacity>
    ),
    headerStyle: headerStyles.whiteHeader,
  });

  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <View>
            <Text style={styles.date}>MONDAY, 27 NOVEMBER</Text>
            <Text style={iOSUIKit.largeTitleEmphasized}>For You</Text>
          </View>
          <TouchableOpacity>
            <Image style={styles.avatar} source={require('../../assets/avatar.jpg')} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.body}>
          <View style={styles.card}>
            <View style={styles.suggestionRow}>
              <TouchableRoundedImage
                style={styles.bigSuggestionWithText}
                source={require('../../assets/gradient.png')}>
                <View style={styles.suggestionTextBlock}>
                  <Text style={styles.suggestionText}>
                    {`My\n`}
                    <Text style={styles.bold}>New Music</Text>
                    {`\nMix`}
                  </Text>
                </View>
                <Text style={styles.updatedFriday}>Updated Friday</Text>
              </TouchableRoundedImage>
              <View style={styles.suggestionColumn}>
                <TouchableRoundedImage
                  style={styles.smallSuggestion}
                  source={require('../../assets/wild-vibez-317184.png')}
                />
                <TouchableRoundedImage
                  style={[styles.smallSuggestion, styles.smallSuggestionMarginTop]}
                  source={require('../../assets/joel-filipe-193035.png')}
                  />
              </View>
              <TouchableRoundedImage
                style={styles.bigSuggestion}
                source={require('../../assets/efe-kurnaz-315384_2x.png')}
                />
            </View>
            <View style={styles.suggestionRowBottom}>
              <TouchableRoundedImage
                style={styles.smallSuggestion}
                source={require('../../assets/mario-silva-315041.png')}
                />
              <TouchableRoundedImage
                style={[styles.smallSuggestion, styles.smallSuggestionMarginLeft]}
                source={require('../../assets/sasha-freemind-437035.png')}
                />
              <TouchableRoundedImage
                style={[styles.smallSuggestion, styles.smallSuggestionMarginLeft]}
                source={require('../../assets/sasha-freemind-421432.png')}
              />
              <TouchableRoundedImage
                style={[styles.smallSuggestion, styles.smallSuggestionMarginLeft]}
                source={require('../../assets/seth-doyle-188635.png')}
              />
              <TouchableRoundedImage
                style={[styles.smallSuggestion, styles.smallSuggestionMarginLeft]}
                source={require('../../assets/playbutton.png')}
              />
            </View>
          </View>
          <View style={styles.recentlyPlayed}>
            <View style={styles.recentlyPlayedTitleBar}>
              <Text style={styles.recentlyPlayedTitle}>Recently Played</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal contentContainerStyle={styles.recentlyPlayedSongList}>
              {recents.map((recent, index) => (
                <View
                  key={recent.album}
                  style={index < recents.length - 1 && styles.recentlyPlayedSong}>
                  <TouchableRoundedImage
                    style={styles.recentlyPlayedSongCover}
                    source={recent.cover}
                  />
                  <Text style={styles.album}>{recent.album}</Text>
                  <Text style={styles.author}>{recent.author}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: iOSColors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginHorizontal: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: iOSColors.customGray,
  },
  date: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: iOSColors.gray,
  },
  avatar: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  card: {
    marginTop: 24,
    marginHorizontal: 16,
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: iOSColors.white,
    borderRadius: 6,
    ...Platform.select({
      android: { elevation: 16 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 16,
        },
        shadowOpacity: 0.2,
        shadowRadius: 16,
      },
    }),
  },
  suggestionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  suggestionRowBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 4,
  },
  bigSuggestion: {
    flex: 2,
    aspectRatio: 1,
  },
  bigSuggestionWithText: {
    flex: 2,
    aspectRatio: 1,
    justifyContent: 'space-between',
  },
  suggestionText: {
    ...human.headlineWhiteObject,
    ...systemWeights.light,
    margin: 8,
  },
  bold: {
    ...systemWeights.bold,
  },
  updatedFriday: {
    ...human.caption2Object,
    color: 'rgba(255,255,255,0.80)',
    margin: 8,
  },
  suggestionColumn: {
    flex: 1,
    marginHorizontal: 4,
    aspectRatio: 0.5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  smallSuggestion: {
    flex: 1,
    aspectRatio: 1,
  },
  smallSuggestionMarginTop: {
    marginTop: 4,
  },
  smallSuggestionMarginLeft: {
    marginLeft: 4,
  },
  recentlyPlayedTitle: {
    ...human.title2Object,
    ...systemWeights.bold,
  },
  recentlyPlayed: {
    marginTop: 25,
    paddingTop: 16,
    backgroundColor: iOSColors.white,
  },
  recentlyPlayedTitleBar: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    ...iOSUIKit.bodyEmphasizedObject,
    color: iOSColors.pink,
  },
  recentlyPlayedSongList: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  recentlyPlayedSong: {
    marginRight: 8,
  },
  recentlyPlayedSongCover: {
    height: 160,
    width: 160,
    borderRadius: 6,
  },
  album: {
    ...human.footnoteObject,
    marginTop: 5,
  },
  author: {
    ...human.footnoteObject,
    color: iOSColors.gray,
  },
  touchableRoundedImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

export default HumanShowcaseScreen;
