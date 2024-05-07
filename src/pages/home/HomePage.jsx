import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import shadowStyles from '../../styles/shadowStyles';
import LogoHeader from '../../components/LogoHeader';
import { useLocation } from '../../contexts/LocationContext';
import Cloudy from './HomeComponents/cloudy.png';
import MainPostSlide from './HomeComponents/MainPostSlide';
import { Shadow } from 'react-native-shadow-2';
import { useAuthUser } from '../../contexts/AuthUserContext';

const HomePage = () => {
  const { selectedCountry, selectedCity } = useLocation();
  const user = useAuthUser();

  const location = selectedCountry && selectedCity ? `${selectedCity}` : '위치미정';

  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader />
      <ScrollView>
        <View style={styles.container}>
          <Text style={fontStyles.title01}>{user.name}님,</Text>
          <Text style={fontStyles.title01}>
            지금 <Text style={{ color: color.BLUE_500 }}>{location}</Text>에 계시는군요!
          </Text>

          <View style={styles.infoArea}>
            <View style={styles.infoTop}>
              <View style={styles.box1}>
                <View style={styles.flagContainer} />
                <View style={styles.subInfo}>
                  <Text style={fontStyles.title02}>도쿄,</Text>
                  <Text style={fontStyles.title02}>일본</Text>
                </View>
              </View>
              <View style={styles.box1}>
                <Image source={Cloudy} style={{ width: 40, height: 40 }} />
                <View style={styles.subInfo}>
                  <Text style={[fontStyles.title02, { color: color.BLUE_500 }]}>10°C</Text>
                  <Text style={[fontStyles.title02, { color: color.RED_400 }]}>18°C</Text>
                </View>
              </View>
            </View>
            <View style={styles.infoBottom}>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, { marginBottom: 3 }]}>환율</Text>
                <Text style={fontStyles.basicFont02}>892.67원</Text>
                <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
                  / 100JPY
                </Text>
              </View>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, { marginBottom: 3 }]}>시차</Text>
                <Text style={fontStyles.basicFont02}>차이 없음</Text>
              </View>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, { marginBottom: 3 }]}>전압</Text>
                <Text style={fontStyles.basicFont02}>100V</Text>
              </View>
            </View>
          </View>
          <View style={styles.postArea}>
            <Text style={[fontStyles.title03, styles.postAreaText]}>✈️ 다가오는 여행 일정</Text>

            <Shadow {...shadowStyles.smallShadow} stretch>
              <View style={styles.postBox}>
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
                <View style={styles.postBoxInner}>
                  <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
                    예인, 정혁, 서흔, 가연
                  </Text>
                  <Text style={[fontStyles.title03, { color: color.BLUE_500, marginLeft: 10 }]}>
                    D-day
                  </Text>
                </View>
              </View>
            </Shadow>
            <Shadow {...shadowStyles.smallShadow} style={{ borderRadius: 16, height: 110 }} stretch>
              <MainPostSlide />
            </Shadow>
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
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  infoArea: {
    marginVertical: 20,
    alignItems: 'center',
  },
  infoTop: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 7,
    justifyContent: 'center',
  },
  infoBottom: {
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },

  box1: {
    flex: 1,
    height: 90,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    minHeight: 90,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  flagContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  postAreaText: {
    marginVertical: 12,
    marginLeft: 3,
  },
  postBox: {
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  postBoxInner: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  subInfo: {
    marginLeft: 20,
  },
});

export default HomePage;
