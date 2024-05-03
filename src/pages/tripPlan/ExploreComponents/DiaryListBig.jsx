import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import ProfileExample from '../../../assets/icons/Explore/profileexample.png';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import DiaryImageBig from '../../../assets/icons/Explore/diaryimagebig.png';

const DiaryList = () => {
  return (
    <View style={styles.diaryListBoxBig}>
      <View style={styles.authorInfoArea}>
        <Image source={ProfileExample} style={styles.profileImage} />
        <View style={styles.authorInfo}>
          <Text style={[fontStyles.basicFont02, styles.name]}>김민주</Text>
          <Text style={[fontStyles.basicFont02, styles.time]}>오늘 14:20</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <Text style={[fontStyles.basicFont02, styles.content]}>이번 여행도 즐거웠다!</Text>
        <Image source={DiaryImageBig} style={styles.imageExampleBig} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diaryListBoxBig: {
    padding: 20,
    borderBottomColor: color.GRAY_50, // 아랫쪽 선 색상
    borderBottomWidth: 1, // 아랫쪽 선 굵기
  },
  authorInfoArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfo: {
    flexDirection: 'column', // 세로 방향으로 정렬
    marginLeft: 8, // 이름과 이미지 사이 간격 조절
    gap: 4,
  },
  name: {
    alignSelf: 'flex-start', // 이름은 위로 정렬
    fontWeight: 'bold',
  },
  time: {
    alignSelf: 'flex-end', // 작성 시간은 아래로 정렬
    color: color.TEXT_SECONDARY,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  imageExampleBig: {
    width: 292,
    height: 160,
    marginVertical: 4,
  },
  contentArea: {
    paddingLeft: 58,
  },
  content: {
    marginVertical: 4,
  },
});

export default DiaryList;
