import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';

const MainPostSlide = () => {
  return (
    <Swiper showsButtons={false} loop={false} showsPagination={false}>
      <View style={styles.slide}>
        <View style={styles.slideCircleContainer}>
          <View style={styles.slideCircleFilled}></View>
          <View style={styles.slideCircle}></View>
          <View style={styles.slideCircle}></View>
        </View>
        <Text style={[fontStyles.title03, { marginBottom: 12 }]}>실시간 HOT 게시글</Text>
        <Text style={fontStyles.basicFont}>도쿄역 근처 맛집 추천 리스트</Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.slideCircleContainer}>
          <View style={styles.slideCircle}></View>
          <View style={styles.slideCircleFilled}></View>
          <View style={styles.slideCircle}></View>
        </View>
        <Text style={[fontStyles.title03, { marginBottom: 12 }]}>자유게시판</Text>
        <Text style={fontStyles.basicFont}>오늘 시부야에서 혐한 시위가있다네요</Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.slideCircleContainer}>
          <View style={styles.slideCircle}></View>
          <View style={styles.slideCircle}></View>
          <View style={styles.slideCircleFilled}></View>
        </View>
        <Text style={[fontStyles.title03, { marginBottom: 12 }]}>동행/번개</Text>
        <Text style={fontStyles.basicFont}>요코하마 쪽으로 이동할 예정인데 같이 렌트</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  slideCircleContainer: {
    flexDirection: 'row',
    gap: 2,
    justifyContent: 'flex-end',
  },
  slideCircle: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderColor: color.BLUE_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  slideCircleFilled: {
    width: 8,
    height: 8,
    backgroundColor: 'white',
    borderColor: color.BLUE_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    backgroundColor: color.BLUE_500,
  },
});

export default MainPostSlide;
