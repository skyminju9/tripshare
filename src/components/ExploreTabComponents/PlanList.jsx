import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import HeartIcon from '../../assets/icons/Explore/heart.png';
import HeartIconFilled from '../../assets/icons/Explore/heartfilled.png';
import BookmarkIcon from '../../assets/icons/Explore/bookmark.png';
import BookmarkIconFilled from '../../assets/icons/Explore/bookmarkfilled.png';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';

const PlanList = ({ data }) => {
  const navigation = useNavigation();
  const [heartSelected, setHeartSelected] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  const handleDetailPress = () => {
    navigation.navigate('PlanDetail');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleDetailPress}>
      <View style={styles.planListbox}>
        <Text style={fontStyles.basicFont01}>{item.title}</Text>
        <View style={styles.bottomArea}>
          <View style={styles.hashTagArea}>
            {item.tags.map((tag, index) => (
              <View key={index} style={styles.hashTag}>
                <Text style={[fontStyles.basicFont02, { color: color.BLUE_600 }]}>#{tag}</Text>
              </View>
            ))}
          </View>
          <View style={styles.statsArea}>
            <View style={styles.statsContainer}>
              <TouchableOpacity onPress={() => setHeartSelected(!heartSelected)}>
                <Image source={heartSelected ? HeartIconFilled : HeartIcon} style={styles.icon} />
              </TouchableOpacity>
              <Text style={styles.statsText1}>{item.likes}</Text>
            </View>
            <View style={styles.statsContainer}>
              <TouchableOpacity onPress={() => setBookmarkSelected(!bookmarkSelected)}>
                <Image
                  source={bookmarkSelected ? BookmarkIconFilled : BookmarkIcon}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Text style={styles.statsText2}>{item.bookmarks}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  planListbox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  bottomArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  hashTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 4,
    backgroundColor: '#CBDDFF',
    borderRadius: 24,
  },
  hashTagArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  statsArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    gap: 2,
  },
  icon: {
    width: 16,
    height: 16,
  },
  statsText1: {
    color: '#FF5E5E',
    fontSize: 14,
    letterSpacing: -0.28,
  },
  statsText2: {
    color: '#0041CB',
    fontSize: 14,
    letterSpacing: -0.28,
  },
});

export default PlanList;
