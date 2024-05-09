import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import HeartIcon from '../../assets/icons/Explore/heart.png';
import HeartIconFilled from '../../assets/icons/Explore/heartfilled.png';
import BookmarkIcon from '../../assets/icons/Explore/bookmark.png';
import BookmarkIconFilled from '../../assets/icons/Explore/bookmarkfilled.png';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';

const PlanList = () => {
  const navigation = useNavigation();
  const handleDetailPress = () => {
    navigation.navigate('PlanDetail');
  };

  const [heartSelected, setHeartSelected] = useState(false);
  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  return (
    <View style={{ width: '100%' }}>
      <TouchableOpacity onPress={handleDetailPress}>
        <View style={styles.planListbox}>
          <Text style={fontStyles.basicFont01}>뼈 J가 계획한 3박 4일 홍콩 여행</Text>
          <View style={styles.bottomArea}>
            <View style={styles.hashTagArea}>
              <View style={styles.hashTag}>
                <Text style={[fontStyles.basicFont02, { color: color.BLUE_600 }]}>#축제</Text>
              </View>
              <View style={styles.hashTag}>
                <Text style={[fontStyles.basicFont02, { color: color.BLUE_600 }]}>#쇼핑</Text>
              </View>
              <View style={styles.hashTag}>
                <Text style={[fontStyles.basicFont02, { color: color.BLUE_600 }]}>#디즈니랜드</Text>
              </View>
            </View>

            <View style={styles.statsArea}>
              <View style={styles.statsContainer}>
                <TouchableOpacity onPress={() => setHeartSelected(!heartSelected)}>
                  <Image source={heartSelected ? HeartIconFilled : HeartIcon} style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.statsText1}>16</Text>
              </View>
              <View style={styles.statsContainer}>
                <TouchableOpacity onPress={() => setBookmarkSelected(!bookmarkSelected)}>
                  <Image
                    source={bookmarkSelected ? BookmarkIconFilled : BookmarkIcon}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.statsText2}>32</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
