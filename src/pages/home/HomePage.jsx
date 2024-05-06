import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import shadowStyles from '../../styles/shadowStyles';
import LogoHeader from '../../components/LogoHeader';
import { useLocation } from '../../contexts/LocationContext';
import Cloudy from './HomeComponents/cloudy.png';
import MainPostSlide from './HomeComponents/MainPostSlide';

const HomePage = () => {
  const { selectedCountry, selectedCity } = useLocation();

  const location = selectedCountry && selectedCity ? `${selectedCity}` : '위치미정';

  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader />
      <ScrollView>
        <View style={styles.container}>
          <Text style={fontStyles.title01}>김민주 님, </Text>
          <Text style={fontStyles.title01}>
            지금 <Text style={{ color: color.BLUE_500 }}>{location}</Text>에 계시는군요!
          </Text>

          <View style={styles.infoArea}>
            <View style={styles.infoTop}>
              <View style={styles.box1}>
                <View style={styles.flatContainer} />
                <View style={styles.subInfo}>
                  <Text style={fontStyles.title02}>도쿄,</Text>
                  <Text style={fontStyles.title02}>일본</Text>
                </View>
              </View>
              <View style={styles.box1}>
                <Image
                  source={Cloudy}
                  style={{ width: 40, height: 40, marginHorizontal: 20, marginVertical: 25 }}
                />
                <View style={styles.subInfo}>
                  <Text style={[fontStyles.title02, { color: color.BLUE_500 }]}>10°C</Text>
                  <Text style={[fontStyles.title02, { color: color.RED_400 }]}>18°C</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoBottom}>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, { marginBottom: 5 }]}>환율</Text>
                <Text style={fontStyles.basicFont02}>892.67원</Text>
                <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
                  / 100JPY
                </Text>
              </View>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, { marginBottom: 5 }]}>시차</Text>
                <Text style={fontStyles.basicFont02}>차이 없음</Text>
              </View>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, { marginBottom: 5 }]}>전압</Text>
                <Text style={fontStyles.basicFont02}>100V</Text>
              </View>
            </View>
          </View>
          <View style={styles.postArea}>
            <Text style={[fontStyles.title03, styles.postAreaText]}>✈️ 다가오는 여행 일정</Text>
            <View style={[styles.postBox, shadowStyles.smallShadow]}>
              <View style={styles.postBoxInner}>
                <Text style={fontStyles.title03}>도쿄여행</Text>
                <Text
                  style={[
                    fontStyles.boldFont02,
                    { color: color.TEXT_SECONDARY, alignSelf: 'flex-end', marginLeft: 10 },
                  ]}>
                  24.05.01 ~ 24.05.14
                </Text>
              </View>
              <View
                style={[
                  styles.postBoxInner,
                  { alignItems: 'center', justifyContent: 'space-between' },
                ]}>
                <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
                  예인, 정혁, 서흔, 가연
                </Text>
                <Text style={[fontStyles.title03, { color: color.BLUE_500, marginLeft: 10 }]}>
                  D-day
                </Text>
              </View>
            </View>
            <MainPostSlide />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  infoArea: {
    marginVertical: 20,
  },
  infoTop: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 7,
  },
  infoBottom: {
    flexDirection: 'row',
    gap: 7,
  },
  box1: {
    width: 172,
    height: 90,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    flexDirection: 'row',
  },
  box2: {
    width: 112,
    height: 90,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingTop: 14,
  },
  postAreaText: {
    marginVertical: 12,
    marginLef: 3,
  },
  postBox: {
    width: 350,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  postBoxInner: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  flatContainer: {
    width: 40, // 조절 가능한 사이즈
    height: 40, // 조절 가능한 사이즈
    borderRadius: 20, // 절반으로 설정하여 동그랗게
    backgroundColor: 'red',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  subInfo: {
    justifyContent: 'center',
  },
});

export default HomePage;
