import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from 'expo';

import { material, systemWeights, materialColors } from 'react-native-typography';

const songs = [
  {
    song: 'Free Rhythm',
    author: 'Chaotic Hook',
    cover: require('../../assets/angel-jimenez-168185_2x.png'),
    duration: '3:23',
  },
  {
    song: 'Ascension',
    author: 'Varsity Balance',
    cover: require('../../assets/efe-kurnaz-315384_2x.png'),
    duration: '4:38',
  },
  {
    song: 'Devil Of Diamonds',
    author: 'The Audible Rupture',
    cover: require('../../assets/mario-silva-315041.png'),
    duration: '4:10',
  },
  {
    song: 'Out For Love',
    author: 'Seizing Mistake',
    cover: require('../../assets/paul-morris-144777_2x.png'),
    duration: '6:20',
  },
  {
    song: 'Female Tales',
    author: 'Twitch',
    cover: require('../../assets/sasha-freemind-186664_2x.png'),
    duration: '5:31',
  },
  {
    song: 'Easy Mind',
    author: 'Stanza',
    cover: require('../../assets/wild-vibez-317184.png'),
    duration: '4:13',
  },
  {
    song: 'Pleasure',
    author: 'Stanza',
    cover: require('../../assets/joel-filipe-193035.png'),
    duration: '4:45',
  },
  {
    song: 'Memories',
    author: 'Newt',
    cover: require('../../assets/sasha-freemind-437035.png'),
    duration: '4:02',
  },
  {
    song: 'Of Ice',
    author: 'Palm',
    cover: require('../../assets/seth-doyle-188635.png'),
    duration: '2:56',
  },
];

const SongRow = ({ number, cover, song, author, duration }) => {
  return (
    <TouchableOpacity style={songRowStyles.row}>
      <Text style={songRowStyles.number}>{number}</Text>
      <Image style={songRowStyles.image} source={cover} />
      <View style={songRowStyles.column}>
        <Text style={material.body2}>{song}</Text>
        <Text style={material.caption}>{author}</Text>
      </View>
      <Text style={songRowStyles.duration}>{duration}</Text>
    </TouchableOpacity>
  );
};

const songRowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 8,
  },
  number: {
    ...material.subheadingObject,
    color: materialColors.blackSecondary,
  },
  image: {
    marginTop: 4,
    borderRadius: 3,
    marginLeft: 16,
    height: 40,
    width: 40,
  },
  column: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  duration: {
    ...material.body1Object,
    color: materialColors.blackSecondary,
  },
});

const headerTextShadow = {
  textShadowColor: materialColors.blackPrimary,
  textShadowOffset: {
    width: 0,
    height: 1,
  },
  textShadowRadius: 4,
};

const headerStyles = StyleSheet.create({
  headerStyle: {
    position: 'absolute',
    zIndex: 100,
    top: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitle: {
    ...material.titleWhiteObject,
    ...headerTextShadow,
  },
  headerIconContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    color: '#FFFFFF',
    marginRight: 16,
    ...headerTextShadow,
  },
});

export class MaterialShowcaseScreen extends React.Component {
  static navigationOptions = {
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitle,
    headerRight: (
      <View style={headerStyles.headerIconContainer}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="playlist-plus" size={28} style={headerStyles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="share" size={28} style={headerStyles.headerIcon} />
        </TouchableOpacity>
      </View>
    ),
  };
  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        <Image style={styles.image} source={require('../../assets/sasha-freemind-186664_2x.png')}>
          <View>
            <Text style={styles.slogan}>Always fresh</Text>
            <Text style={styles.author}>
              Made for <Text style={styles.bold}>hectahertz</Text> by{' '}
              <Text style={styles.bold}>Typography</Text>
            </Text>
          </View>
        </Image>
        <View style={Platform.OS === 'ios' && { zIndex: 1 }}>
          <View style={styles.fabCircle}>
            <MaterialCommunityIcons name="play" size={48} style={styles.fabIcon} />
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={songs}
          keyExtractor={item => item.song}
          ItemSeparatorComponent={() => <View style={styles.songSeparator} />}
          ListHeaderComponent={() => <Text style={styles.topSongs}>TOP SONGS</Text>}
          renderItem={({ item, index }) => (
            <SongRow
              number={index + 1}
              song={item.song}
              author={item.author}
              cover={item.cover}
              duration={item.duration}
            />
          )}
        />
      </View>
    );
  }
}

const lightTextShadow = {
  textShadowColor: materialColors.blackTertiary,
  textShadowOffset: {
    width: 0,
    height: 1,
  },
  textShadowRadius: 4,
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    aspectRatio: 1.5,
    height: undefined,
    width: undefined,
    justifyContent: 'flex-end',
    padding: 16,
  },
  slogan: {
    ...material.display1WhiteObject,
    color: '#FFFFFF',
    ...lightTextShadow,
  },
  author: {
    ...material.body1WhiteObject,
    ...systemWeights.light,
    ...lightTextShadow,
  },
  bold: systemWeights.semibold,
  topSongs: {
    marginTop: 16,
    marginBottom: 8,
    marginHorizontal: 16,
    ...material.body2Object,
    color: materialColors.blackSecondary,
  },
  listContent: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  songSeparator: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: materialColors.blackTertiary,
  },
  fabCircle: {
    position: 'absolute',
    top: -64 / 2,
    right: 16,
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: '#D81E5B',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      android: { elevation: 12 },
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
    }),
  },
  fabIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
  },
});

export default MaterialShowcaseScreen;
