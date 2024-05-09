import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import ProfileExample2 from '../../assets/icons/Explore/profileexample2.png';

const DiaryReply = () => {
  return (
    <View style={styles.diaryListBoxBig}>
      <View style={styles.commentArea}>
        <Image source={ProfileExample2} style={styles.profileImage} />
        <View style={styles.detailInfo}>
          <View style={styles.commentAreaTop}>
            <Text style={[fontStyles.basicFont02, styles.name]}>김민주</Text>
          </View>
          <View style={styles.commentAreaBottom}>
            <Text style={[fontStyles.basicFont02, styles.comment]}>이번 여행도 즐거웠다!</Text>
            <Text style={[fontStyles.basicFont02, styles.time]}>오늘 14:20</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diaryListBoxBig: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  commentArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailInfo: {
    flex: 1,
    paddingVertical: 2,
  },
  name: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  commentAreaTop: {},
  commentAreaBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    width: '100%',
  },
  comment: {
    flex: 1,
  },
  time: {
    color: color.TEXT_SECONDARY,
  },
  profileImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
});

export default DiaryReply;
