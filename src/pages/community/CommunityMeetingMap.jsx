import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE, addressForCoordinate } from 'react-native-maps';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import Svg, { Polygon } from 'react-native-svg';

import { dummy_meet } from '../../dummyData';
import CustomMarker from '../../components/CustomMarker';
import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import {
  AccompanyIcon,
  CloseIcon,
  ImpromptuIcon,
  LocationIcon,
  TimeIcon,
  WriteIcon,
} from '../../assets';
import fontStyles from '../../styles/fontStyles';
import { hourList, minuteList } from '../../dateData';
import DatePicker from 'react-native-date-picker';
import { formatDate } from '../../utils/date';

const CommunityMeetingMap = ({ navigation }) => {
  // 마커 표시 state
  const [accompanyIsVisible, setAccompanyIsVisible] = useState(false);
  const [impromptuIsVisible, setImpromptuIsVisible] = useState(false);
  const [markerData, setMarkerData] = useState('');
  // 모달 표시 state
  const [accompanyModalIsVisible, setAccompanyModalIsVisible] = useState(false);
  const [impromptuModalIsVisible, setImpromptuModalIsVisible] = useState(false);
  // 번개 모달 state
  const [impromptuHour, setImpromptuHour] = useState('시');
  const [impromptuHourIsVisible, setImpromptuHourIsVisible] = useState(false);
  const [impromptuMin, setImpromptuMin] = useState('분');
  const [impromptuMinIsVisible, setImpromptuMinIsVisible] = useState(false);
  const [impromptuTitle, setImpromptuTitle] = useState('');
  const [impromptuContent, setImpromptuContent] = useState('');
  // 동행 모달 state
  const [address, setAddress] = useState('');
  const [accompanyDate, setAccompanyDate] = useState(new Date());
  const [isAccompanyDateModalVisible, setIsAccompanyDateModalVisible] = useState(false);
  const [accompanyTitle, setAccompanyTitle] = useState('');
  const [accompanyContent, setAccompanyContent] = useState('');

  const screenIsFocused = useIsFocused();

  const { width } = useWindowDimensions();

  const safeArea = useSafeAreaInsets(); //getSafeArea height

  const accompanyVisibleHandler = () => {
    setAccompanyIsVisible(!accompanyIsVisible);
  };

  const impromptuVisibleHandler = () => {
    setImpromptuIsVisible(!impromptuIsVisible);
  };

  const accompanyLocationHandler = () => {
    navigation.navigate('LocationSetting', {
      setAddress: setAddress,
    });
  };

  const mapPressHandler = (event, marker) => {
    if (!event.nativeEvent.action) {
      setMarkerData('');
    } else if (event.nativeEvent.action === 'marker-press') {
      setMarkerData(marker);
      event.stopPropagation();
    }
  };

  const impromptuRegisterHandler = () => {
    let offset = new Date().getTimezoneOffset() * 60000;
    let today = new Date(Date.now() - offset);
    let meetingDate =
      today.getFullYear() +
      '-' +
      ('0' + (today.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + today.getDate()).slice(-2) +
      ' ' +
      ('0' + impromptuHour).slice(-2) +
      ':' +
      ('0' + impromptuMin).slice(-2);

    dummy_meet.push({
      id: dummy_meet.length + 1,
      location: { latitude: 37.78815, longitude: -122.4318 },
      title: impromptuTitle,
      content: impromptuContent,
      name: '도쿄최고',
      category: 'impromptu',
      createAt: today,
      meetingAt: new Date(meetingDate),
    });
    setImpromptuModalIsVisible(false);
  };

  const accompanyRegisterHandler = () => {
    setAccompanyModalIsVisible(false);
    // db연결
  };

  useEffect(() => {
    console.log(accompanyDate);
  }, [accompanyDate]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader text="번개/동행" />
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPoiClick={() => setMarkerData('')}
        onPress={event => mapPressHandler(event, '')}>
        {dummy_meet.map(marker => {
          if (marker.category === 'impromptu' && !impromptuIsVisible) {
            return;
          }

          if (marker.category === 'accompany' && !accompanyIsVisible) {
            return;
          }

          return (
            <Marker
              key={marker.id}
              coordinate={marker.location}
              onPress={event => mapPressHandler(event, marker)}>
              <CustomMarker marker={marker} />
            </Marker>
          );
        })}
      </MapView>
      {/* 상단 버튼 */}
      <View style={[styles.topCheckWrapper, { top: safeArea.top + 60 + 20 }]}>
        <TouchableOpacity
          style={[
            styles.topCheckButtonWrapper,
            { backgroundColor: impromptuIsVisible ? color.BLUE_200 : '#FFF' },
          ]}
          onPress={impromptuVisibleHandler}
          activeOpacity={0.9}>
          <Image source={ImpromptuIcon} style={styles.topCheckButtonIcon} />
          <Text style={fontStyles.basicFont}>실시간 번개</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.topCheckButtonWrapper,
            { backgroundColor: accompanyIsVisible ? color.BLUE_200 : '#FFF' },
          ]}
          onPress={accompanyVisibleHandler}
          activeOpacity={0.9}>
          <Image source={AccompanyIcon} style={styles.topCheckButtonIcon} />
          <Text style={fontStyles.basicFont}>동행 구하기</Text>
        </TouchableOpacity>
      </View>
      {/* 우측 하단 버튼 */}
      <View style={[styles.bottomWrapper, { bottom: safeArea.bottom + 18, width: width }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.writeButtonWrapper}
          onPress={() => setAccompanyModalIsVisible(true)}>
          <Image source={AccompanyIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.writeButtonWrapper}
          onPress={() => setImpromptuModalIsVisible(true)}>
          <Image source={ImpromptuIcon} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
        {/* 바텀 카드 */}
        {markerData && (
          <TouchableOpacity style={styles.bottomCardWrapper}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={fontStyles.boldFont01}>{markerData.title}</Text>
              <Text style={[fontStyles.basicFont02, { color: color.GRAY_300 }]}>23분 전</Text>
            </View>
            <Text
              style={[fontStyles.basicFont02, { marginTop: 16 }]}
              numberOfLines={1}
              ellipsizeMode="tail">
              {markerData.content}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 14,
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <LocationIcon width={20} height={20} />
                <Text style={fontStyles.boldFont01}>도쿄타워</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <TimeIcon width={18} height={18} />
                <Text style={fontStyles.boldFont01}>19시</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Image
                  source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }}
                  style={{ width: 24, height: 24, borderRadius: 24 }}
                />
                <Text style={fontStyles.boldFont01}>{markerData.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
      {/* 번개 모달 */}
      <Modal
        isVisible={impromptuModalIsVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setImpromptuModalIsVisible(false)}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        <View style={styles.modalWrapper}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: 24, height: 24 }} />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Image source={ImpromptuIcon} style={{ width: 28, height: 28 }} />
              <Text style={fontStyles.title03}>번개 구하기</Text>
            </View>
            <TouchableOpacity onPress={() => setImpromptuModalIsVisible(false)}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>시간 선택</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: 12,
              marginTop: 8,
              zIndex: 1,
              alignItems: 'center',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <DropDownPicker
                open={impromptuHourIsVisible}
                value={impromptuHour}
                items={hourList}
                setOpen={setImpromptuHourIsVisible}
                setValue={setImpromptuHour}
                style={{ borderWidth: 1, borderColor: color.GRAY_200, width: 80 }}
                textStyle={fontStyles.boldFont01}
                containerStyle={{ width: 80, zIndex: 1000 }}
                placeholder="0"
                ArrowDownIconComponent={() => (
                  <Svg style={{ width: 15, height: 15 }}>
                    <Polygon points="0,0 7.5,15 15,0" fill={color.BLUE_500} />
                  </Svg>
                )}
                ArrowUpIconComponent={() => (
                  <Svg style={{ width: 15, height: 15 }}>
                    <Polygon points="0,15 7.5,0 15,15" fill={color.BLUE_500} />
                  </Svg>
                )}
              />
              <Text style={fontStyles.boldFont01}>시</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <DropDownPicker
                open={impromptuMinIsVisible}
                value={impromptuMin}
                items={minuteList}
                setOpen={setImpromptuMinIsVisible}
                setValue={setImpromptuMin}
                style={{ borderWidth: 1, borderColor: color.GRAY_200, width: 80 }}
                textStyle={fontStyles.boldFont01}
                containerStyle={{ width: 80 }}
                placeholder="0"
                ArrowDownIconComponent={() => (
                  <Svg style={{ width: 15, height: 15 }}>
                    <Polygon points="0,0 7.5,15 15,0" fill={color.BLUE_500} />
                  </Svg>
                )}
                ArrowUpIconComponent={() => (
                  <Svg style={{ width: 15, height: 15 }}>
                    <Polygon points="0,15 7.5,0 15,15" fill={color.BLUE_500} />
                  </Svg>
                )}
              />
              <Text style={fontStyles.boldFont01}>분</Text>
            </View>
          </View>
          <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>제목</Text>
          <TextInput
            placeholder="제목을 작성해주세요"
            style={[styles.textInputWrapper, fontStyles.basicFont02]}
            value={impromptuTitle}
            onChangeText={text => setImpromptuTitle(text)}
            maxLength={20}
          />
          <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>내용</Text>
          <TextInput
            placeholder="내용을 작성해주세요"
            style={[styles.textInputWrapper, fontStyles.basicFont02, { flex: 1 }]}
            value={impromptuContent}
            onChangeText={text => setImpromptuContent(text)}
            maxLength={100}
            multiline
          />
          <View style={{ width: '100%', alignItems: 'center', marginTop: 12 }}>
            <TouchableOpacity
              style={styles.writeIconWrapper}
              onPress={() => impromptuRegisterHandler()}>
              <WriteIcon width={22} height={22} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* 동행  모달 */}
      <Modal
        isVisible={screenIsFocused && accompanyModalIsVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setAccompanyModalIsVisible(false)}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        <View style={styles.modalWrapper}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{ width: 24, height: 24 }} />
            <View style={{ flexDirection: 'row', gap: 8 }}>
              <Image source={AccompanyIcon} style={{ width: 28, height: 28 }} />
              <Text style={fontStyles.title03}>동행 구하기</Text>
            </View>
            <TouchableOpacity onPress={() => setAccompanyModalIsVisible(false)}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 12, gap: 28 }}>
            <View style={{ flex: 1 }}>
              <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>장소 선택</Text>
              <TouchableOpacity
                style={[styles.selectBoxWrapper, { marginTop: 12, gap: 8 }]}
                onPress={() => accompanyLocationHandler()}>
                <LocationIcon />
                <Text
                  style={[fontStyles.basicFont02, { flex: 1 }]}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {address}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>날짜 선택</Text>
              <TouchableOpacity
                style={[styles.selectBoxWrapper, { marginTop: 12, width: 120 }]}
                onPress={() => setIsAccompanyDateModalVisible(true)}>
                <Text style={fontStyles.basicFont02}>
                  {accompanyDate.toLocaleString('ko-KR').slice(9, -3)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>제목</Text>
          <TextInput
            placeholder="제목을 작성해주세요"
            style={[styles.textInputWrapper, fontStyles.basicFont02]}
            value={accompanyTitle}
            onChangeText={text => setAccompanyTitle(text)}
            maxLength={20}
          />
          <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>내용</Text>
          <TextInput
            placeholder="내용을 작성해주세요"
            style={[styles.textInputWrapper, fontStyles.basicFont02, { flex: 1 }]}
            value={accompanyContent}
            onChangeText={text => setAccompanyContent(text)}
            maxLength={100}
            multiline
          />
          <View style={{ width: '100%', alignItems: 'center', marginTop: 12 }}>
            <TouchableOpacity
              style={styles.writeIconWrapper}
              onPress={() => accompanyRegisterHandler()}>
              <WriteIcon width={22} height={22} />
            </TouchableOpacity>
          </View>
        </View>
        <DatePicker
          modal
          open={isAccompanyDateModalVisible}
          date={accompanyDate}
          onConfirm={date => {
            setIsAccompanyDateModalVisible(false);
            setAccompanyDate(date);
          }}
          onCancel={() => setIsAccompanyDateModalVisible(false)}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default CommunityMeetingMap;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topCheckWrapper: {
    position: 'absolute',
    left: 20,
    flexDirection: 'row',
    gap: 13,
  },
  topCheckButtonWrapper: {
    flexDirection: 'row',
    gap: 4,
    padding: 9,
    borderRadius: 20,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  topCheckButtonIcon: {
    width: 20,
    height: 20,
  },
  bottomWrapper: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    gap: 18,
  },
  writeButtonWrapper: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLUE_30,
    borderRadius: 200,
    shadowColor: color.BLUE_500,
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalWrapper: {
    backgroundColor: '#FFF',
    padding: 28,
    borderRadius: 60,
    width: '100%',
    height: 447,
  },
  selectBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: color.GRAY_200,
    width: 120,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  textInputWrapper: {
    width: '100%',
    backgroundColor: color.BLUE_30,
    borderRadius: 15,
    marginTop: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  writeIconWrapper: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: color.BLUE_500,
  },
  bottomCardWrapper: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
});
