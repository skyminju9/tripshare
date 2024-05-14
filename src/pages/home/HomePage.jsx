import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import shadowStyles from '../../styles/shadowStyles';
import { Shadow } from 'react-native-shadow-2';
import LogoHeader from '../../components/LogoHeader';
import { useLocation } from '../../contexts/LocationContext';
import { useAuthUser } from '../../contexts/AuthUserContext';
import MainPostSlide from '../../components/home/MainPostSlide';
import { loadFlagData } from '../../services/flagService';
import { loadForecastData } from '../../services/weatherService';
import { loadExchangeData } from '../../services/exchangeRateService';
import { loadTimeDifference } from '../../services/timeService';
import { getExchangeRateInfo } from '../../utils/getExchangeRateInfo';
import data from '../../PrimaryRegions.json';
import Loading from '../../assets/images/Home/loading.gif';

const HomePage = () => {
  const locationContext = useLocation();
  const user = useAuthUser();

  const [selectedCountry, setSelectedCountry] = useState(
    locationContext.selectedCountry || '대한민국',
  );
  const [selectedCity, setSelectedCity] = useState(locationContext.selectedCity || '서울');
  const [flagData, setFlagData] = useState([]);
  const [filteredFlag, setFilteredFlag] = useState(null);
  const [exchangeData, setExchangeData] = useState([]);
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [summaryIcon, setSummaryIcon] = useState(null);
  const [timeDifference, setTimeDifference] = useState('차이 없음');
  const [voltage, setVoltage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultFlagUrl = 'https://example.com/south-korea-flag.png';

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const flagData = await loadFlagData();
        setFlagData(flagData);

        const forecastData = await loadForecastData(selectedCountry, selectedCity);
        setMinTemp(forecastData.minTemp);
        setMaxTemp(forecastData.maxTemp);
        setSummaryIcon(forecastData.summaryIcon);

        const exchangeData = await loadExchangeData();
        setExchangeData(exchangeData);

        const timeDifference = await loadTimeDifference(selectedCountry, selectedCity);
        setTimeDifference(timeDifference);

        updateVoltage();
        setLoading(false);
      } catch (error) {
        setError(`Error: ${error.message}`);
        setLoading(false);
      }
    };

    loadData();
  }, [selectedCountry, selectedCity]);

  useEffect(() => {
    updateFlag();
  }, [flagData, selectedCountry]);

  useEffect(() => {
    if (locationContext.selectedCountry && locationContext.selectedCity) {
      setSelectedCountry(locationContext.selectedCountry);
      setSelectedCity(locationContext.selectedCity);
    }
  }, [locationContext.selectedCountry, locationContext.selectedCity]);

  const updateFlag = () => {
    let countryName = selectedCountry;
    if (countryName === '미국') {
      countryName = '미합중국';
    } else if (countryName === '터키') {
      countryName = '튀르키예공화국';
    }

    const result = flagData.find(flag => flag.country_nm === countryName);
    if (result) {
      setFilteredFlag(result);
    } else {
      setFilteredFlag({ download_url: defaultFlagUrl });
    }
  };

  const updateVoltage = () => {
    const countryData = data[selectedCountry];
    if (countryData && countryData['전압']) {
      setVoltage(countryData['전압']);
    } else {
      setVoltage('정보없음');
    }
  };

  const location = selectedCountry && selectedCity ? `${selectedCity}` : '위치미정';

  if (loading) {
    return (
      <SafeAreaView style={[styles.wrapper, { justifyContent: 'center', alignItems: 'center' }]}>
        <View
          style={[
            styles.container,
            { justifyContent: 'center', alignItems: 'center', marginBottom: 50 },
          ]}>
          <Image source={Loading} style={{ width: 130, height: 130, marginBottom: 20 }} />
          <Text style={fontStyles.title01}>로딩 중</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>오류: {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {user && user.name ? (
            <Text style={fontStyles.title01}>{user.name}님,</Text>
          ) : (
            <Text style={fontStyles.title01}>사용자님,</Text>
          )}
          <Text style={fontStyles.title01}>
            지금 <Text style={fontStyles.blueTitle01}>{location}</Text>에 계시는군요!
          </Text>
          <View style={styles.infoArea}>
            <View style={styles.infoTop}>
              <View style={styles.box1}>
                <View style={styles.flagContainer}>
                  <View style={styles.flagCircle}>
                    <Image
                      style={styles.flagImage}
                      source={{ uri: filteredFlag ? filteredFlag.download_url : defaultFlagUrl }}
                    />
                  </View>
                </View>
                <View style={styles.subInfo}>
                  <Text style={fontStyles.title02}>{selectedCity},</Text>
                  <Text style={fontStyles.title02}>{selectedCountry}</Text>
                </View>
              </View>
              <View style={styles.box1}>
                {summaryIcon && <Image style={styles.weatherImg} source={summaryIcon} />}
                <View style={styles.subInfo}>
                  <Text style={fontStyles.blueTitle02}>{Math.round(minTemp)}°C</Text>
                  <Text style={[fontStyles.title02, { color: color.RED_400 }]}>
                    {Math.round(maxTemp)}°C
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoBottom}>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, styles.infoTitle]}>환율</Text>
                <Text style={fontStyles.basicFont02}>
                  {getExchangeRateInfo(selectedCountry, exchangeData)}
                </Text>
              </View>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, styles.infoTitle]}>시차</Text>
                <Text style={fontStyles.basicFont02}>{timeDifference}</Text>
              </View>
              <View style={styles.box2}>
                <Text style={[fontStyles.title03, styles.infoTitle]}>전압</Text>
                <Text style={fontStyles.basicFont02}>{voltage}</Text>
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
                      { color: color.TEXT_SECONDARY, alignSelf: 'flex-end' },
                    ]}>
                    24.05.01 ~ 24.05.14
                  </Text>
                </View>
                <View style={styles.postBoxInner}>
                  <Text style={fontStyles.grayFont02}>예인, 정혁, 서흔, 가연</Text>
                  <Text style={fontStyles.blueTitle03}>D-day</Text>
                </View>
              </View>
            </Shadow>
            <Shadow {...shadowStyles.smallShadow} style={styles.shadowBox} stretch>
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
    paddingLeft: 20,
    paddingRight: 10,
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
    paddingTop: 14,
  },
  infoTitle: {
    marginBottom: 4,
  },
  weatherImg: { width: 40, height: 40 },
  flagContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  flagCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: color.GRAY_50,
  },
  flagImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  postArea: {
    marginBottom: 100,
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
    marginLeft: 15,
    width: 'auto',
    maxWidth: '65%',
  },
  shadowBox: {
    borderRadius: 16,
    height: 110,
  },
});

export default HomePage;
