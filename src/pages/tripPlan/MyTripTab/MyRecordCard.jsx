import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import BookmarkIcon from '../../../assets/icons/myTrip/bookmark_blank.svg';
import HeartIcon from '../../../assets/icons/myTrip/favorite_blank.svg';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';

const dummyRecordImage = require('../../../assets/icons/Explore/diaryimage.png');

const MyRecordCard = ({ record }) => {
  return (
    <TouchableOpacity style={styles.cardWrapper}>
      <View style={styles.recordCoverImageWrapper}>
        <Image source={dummyRecordImage} resizeMode="cover" style={styles.recordCoverImage} />
      </View>
      <View style={styles.recordDescriptWrapper}>
        <View>
          <Text style={fontStyles.basicFont02}>{record.title}</Text>
        </View>
        <View style={styles.recordViews}>
          <View style={styles.viewElementsWrapper}>
            <HeartIcon />
            <Text style={styles.heartIconText}>{record.like}</Text>
          </View>
          <View style={styles.viewElementsWrapper}>
            <BookmarkIcon />
            <Text style={styles.bookmarkIconText}>{record.bookmark}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: 160,
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    marginRight: 8,
    overflow: 'hidden',
  },
  recordCoverImageWrapper: {
    flex: 0.7,
    overflow: 'hidden',
  },
  recordCoverImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  recordDescriptWrapper: {
    flex: 0.3,
    backgroundColor: '#FFF',
    padding: 8,
    gap: 20,
  },
  recordViews: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  viewElementsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  heartIconText: [fontStyles.basicFont02, { color: color.RED_400 }],
  bookmarkIconText: [fontStyles.basicFont02, { color: color.BLUE_600 }],
});

export default MyRecordCard;
