import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
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
  RoundChatIcon,
  TimeIcon,
  WriteIcon,
} from '../../assets';
import fontStyles from '../../styles/fontStyles';
import { hourList, minuteList } from '../../dateData';
import DatePicker from 'react-native-date-picker';
import { APP_WIDTH } from '../../constants';
import { formatDayTime, setAgoDays } from '../../utils/date';
import { convertLocationToAddress } from '../../utils/convertLocation';
import { useGeolocation } from '../../contexts/GeolocationContext';
import { Shadow } from 'react-native-shadow-2';
import shadowStyles from '../../styles/shadowStyles';
import { DummyProfileImg } from '../../assets';

const CommunityMeetingMap = ({ navigation }) => {
  // 마커 표시 state
  const [accompanyIsVisible, setAccompanyIsVisible] = useState(false);
  const [impromptuIsVisible, setImpromptuIsVisible] = useState(false);
  const [markerData, setMarkerData] = useState('');
  // 모달 표시 state
  const [accompanyModalIsVisible, setAccompanyModalIsVisible] = useState(false);
  const [impromptuModalIsVisible, setImpromptuModalIsVisible] = useState(false);
  // 번개 모달 state
  const [impromptuHour, setImpromptuHour] = useState(0);
  const [impromptuHourIsVisible, setImpromptuHourIsVisible] = useState(false);
  const [impromptuMin, setImpromptuMin] = useState(0);
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
  const geolocation = useGeolocation();

  const safeArea = useSafeAreaInsets();

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

  const mapPressHandler = async (event, marker) => {
    event.persist();
    if (!event.nativeEvent.action) {
      setMarkerData('');
    } else if (event.nativeEvent.action === 'marker-press') {
      marker.address = await convertLocationToAddress(marker.location).catch(err => {
        console.log(err);
      });
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

    //db 연결
    // dummy_meet.push({
    //   id: dummy_meet.length + 1,
    //   location: { latitude: 37.78815, longitude: -122.4318 },
    //   title: impromptuTitle,
    //   content: impromptuContent,
    //   name: '도쿄최고',
    //   category: 'impromptu',
    //   createAt: today,
    //   meetingAt: new Date(meetingDate),
    // });
    setImpromptuModalIsVisible(false);
  };

  const accompanyRegisterHandler = () => {
    setAccompanyModalIsVisible(false);
    // db연결
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* 헤더 */}
      <BasicHeader title="번개/동행" />
      {/* 지도 & 마커 */}
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
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
        <Shadow {...shadowStyles.smallShadow} stretch>
          <TouchableOpacity
            style={[
              styles.topCheckButtonWrapper,
              { backgroundColor: impromptuIsVisible ? color.BLUE_200 : '#FFF' },
            ]}
            onPress={impromptuVisibleHandler}
            activeOpacity={0.9}>
            <Image source={ImpromptuIcon} style={styles.topCheckButtonIcon} />
            <Text style={fontStyles.basicFont02}>실시간 번개</Text>
          </TouchableOpacity>
        </Shadow>
        <Shadow {...shadowStyles.smallShadow} stretch>
          <TouchableOpacity
            style={[
              styles.topCheckButtonWrapper,
              { backgroundColor: accompanyIsVisible ? color.BLUE_200 : '#FFF' },
            ]}
            onPress={accompanyVisibleHandler}
            activeOpacity={0.9}>
            <Image source={AccompanyIcon} style={styles.topCheckButtonIcon} />
            <Text style={fontStyles.basicFont02}>동행 구하기</Text>
          </TouchableOpacity>
        </Shadow>
      </View>
      {/* 우측 하단 버튼 */}
      <View style={[styles.bottomWrapper, { bottom: safeArea.bottom + 18 }]}>
        <Shadow
          distance={10}
          startColor={'#4F85F64D'}
          endColor={'#4F85F600'}
          offset={[-2, -2]}
          stretch>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.writeButtonWrapper}
            onPress={() => setAccompanyModalIsVisible(true)}>
            <Image source={AccompanyIcon} style={styles.writeButtonImage} />
          </TouchableOpacity>
        </Shadow>
        <Shadow
          distance={10}
          startColor={'#4F85F64D'}
          endColor={'#4F85F600'}
          offset={[-2, -2]}
          stretch>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.writeButtonWrapper}
            onPress={() => setImpromptuModalIsVisible(true)}>
            <Image source={ImpromptuIcon} style={styles.writeButtonImage} />
          </TouchableOpacity>
        </Shadow>
        {/* 바텀 카드 */}
        {markerData && (
          <View style={styles.bottomCardWrapper}>
            <View style={styles.bottomCardHeaderWrapper}>
              <View style={styles.bottomCardNameWrapper}>
                <Image
                  source={markerData.profileImage || DummyProfileImg}
                  style={styles.bottomCardImage}
                />
                <Text style={fontStyles.boldFont01}>{markerData.name}</Text>
              </View>
              <Text style={styles.bottomCardAgoTime}>{setAgoDays(markerData.createAt)}</Text>
            </View>
            <Text style={styles.bottomCardTitle}>{markerData.title}</Text>
            <Text style={styles.bottomCardContent} numberOfLines={3} ellipsizeMode="tail">
              {markerData.content}
            </Text>
            <View style={styles.bottomCardTailWrapper}>
              <View style={styles.bottomCardAddressWrapper}>
                <LocationIcon width={20} height={20} />
                <Text style={fontStyles.boldFont01}>{markerData.address}</Text>
              </View>
              <View style={styles.bottomCardTimeWrapper}>
                <TimeIcon width={18} height={18} />
                <Text style={fontStyles.boldFont01}>{formatDayTime(markerData.meetingAt)}</Text>
              </View>
              <TouchableOpacity>
                <Image source={RoundChatIcon} style={styles.bottomCardChatIcon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      {/* 번개 모달 */}
      <Modal
        isVisible={impromptuModalIsVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setImpromptuModalIsVisible(false)}
        style={styles.modalWrapper}>
        <View style={styles.modalBodyWrapper}>
          <View style={styles.modalHeaderWrapper}>
            <View style={styles.modalLeftHeaderWrapper} />
            <View style={styles.modalCenterHeaderWrapper}>
              <Image source={ImpromptuIcon} style={{ width: 28, height: 28 }} />
              <Text style={fontStyles.title03}>번개 구하기</Text>
            </View>
            <TouchableOpacity
              onPress={() => setImpromptuModalIsVisible(false)}
              style={styles.modalRightHeaderWrapper}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTimeChoose}>시간 선택</Text>
          <View style={styles.modalTimeChooseWrapper}>
            <View style={styles.modalDropDownWrapper}>
              <DropDownPicker
                open={impromptuHourIsVisible}
                value={impromptuHour}
                items={hourList}
                setOpen={setImpromptuHourIsVisible}
                setValue={setImpromptuHour}
                style={styles.modalDropDownPicker}
                textStyle={fontStyles.basicFont01}
                containerStyle={styles.modalDropDownContainer}
                dropDownContainerStyle={{ borderColor: color.GRAY_200 }}
                selectedItemContainerStyle={{ backgroundColor: color.BLUE_30 }}
                placeholder="0"
                ArrowDownIconComponent={() => (
                  <Svg style={styles.arrowWrapper}>
                    <Polygon points="0,0 6,12 12,0" fill={color.BLUE_500} />
                  </Svg>
                )}
                ArrowUpIconComponent={() => (
                  <Svg style={styles.arrowWrapper}>
                    <Polygon points="0,12 6,0 12,12" fill={color.BLUE_500} />
                  </Svg>
                )}
              />
              <Text style={fontStyles.boldFont01}>시</Text>
            </View>
            <View style={styles.modalDropDownWrapper}>
              <DropDownPicker
                open={impromptuMinIsVisible}
                value={impromptuMin}
                items={minuteList}
                setOpen={setImpromptuMinIsVisible}
                setValue={setImpromptuMin}
                style={styles.modalDropDownPicker}
                textStyle={fontStyles.basicFont01}
                containerStyle={styles.modalDropDownContainer}
                dropDownContainerStyle={{ borderColor: color.GRAY_200 }}
                selectedItemContainerStyle={{ backgroundColor: color.BLUE_30 }}
                placeholder="0"
                ArrowDownIconComponent={() => (
                  <Svg style={styles.arrowWrapper}>
                    <Polygon points="0,0 6,12 12,0" fill={color.BLUE_500} />
                  </Svg>
                )}
                ArrowUpIconComponent={() => (
                  <Svg style={styles.arrowWrapper}>
                    <Polygon points="0,12 6,0 12,12" fill={color.BLUE_500} />
                  </Svg>
                )}
              />
              <Text style={fontStyles.boldFont01}>분</Text>
            </View>
          </View>
          <Text style={styles.modalLabel}>제목</Text>
          <TextInput
            placeholder="제목을 작성해주세요"
            style={styles.modalTitleWrapper}
            value={impromptuTitle}
            onChangeText={text => setImpromptuTitle(text)}
            maxLength={20}
          />
          <Text style={styles.modalLabel}>내용</Text>
          <TextInput
            placeholder="내용을 작성해주세요"
            style={styles.modalContentWrapper}
            value={impromptuContent}
            onChangeText={text => setImpromptuContent(text)}
            maxLength={100}
            multiline
          />
          <View style={styles.modalBottomWrapper}>
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
        style={styles.modalWrapper}>
        <View style={styles.modalBodyWrapper}>
          <View style={styles.modalHeaderWrapper}>
            <View style={styles.modalLeftHeaderWrapper} />
            <View style={styles.modalCenterHeaderWrapper}>
              <Image source={AccompanyIcon} style={{ width: 28, height: 28 }} />
              <Text style={fontStyles.title03}>동행 구하기</Text>
            </View>
            <TouchableOpacity
              onPress={() => setAccompanyModalIsVisible(false)}
              style={styles.modalRightHeaderWrapper}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.accompanyModalMiddleTopWrapper}>
            <View style={{ flex: 1 }}>
              <Text style={styles.modalLabel}>장소 선택</Text>
              <TouchableOpacity
                style={styles.modalSelectBoxWrapper}
                onPress={() => accompanyLocationHandler()}>
                <LocationIcon />
                <Text
                  style={styles.accompanyModalLocationText}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {address}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.modalLabel}>날짜 선택</Text>
              <TouchableOpacity
                style={styles.modalSelectBoxWrapper}
                onPress={() => setIsAccompanyDateModalVisible(true)}>
                <Text style={fontStyles.basicFont02}>
                  {accompanyDate.toLocaleString('ko-KR').slice(9, -3)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.modalLabel}>제목</Text>
          <TextInput
            placeholder="제목을 작성해주세요"
            style={styles.modalTitleWrapper}
            value={accompanyTitle}
            onChangeText={text => setAccompanyTitle(text)}
            maxLength={20}
          />
          <Text style={styles.modalLabel}>내용</Text>
          <TextInput
            placeholder="내용을 작성해주세요"
            style={styles.modalContentWrapper}
            value={accompanyContent}
            onChangeText={text => setAccompanyContent(text)}
            maxLength={100}
            multiline
          />
          <View style={styles.modalBottomWrapper}>
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
    backgroundColor: color.WHITE,
  },
  topCheckWrapper: {
    position: 'absolute',
    left: 20,
    flexDirection: 'row',
    gap: 13,
  },
  topCheckButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 9,
    borderRadius: 20,
  },
  topCheckButtonIcon: {
    width: 20,
    height: 20,
  },
  bottomWrapper: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: APP_WIDTH,
    paddingHorizontal: 20,
    gap: 18,
  },
  writeButtonWrapper: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLUE_30,
    borderRadius: 200,
  },
  bottomCardWrapper: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderRadius: 20,
  },
  bottomCardHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomCardNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  bottomCardImage: { width: 24, height: 24, borderRadius: 24 },
  bottomCardAgoTime: { ...fontStyles.basicFont02, color: color.GRAY_300 },
  bottomCardTitle: {
    ...fontStyles.boldFont01,
    marginTop: 12,
  },
  bottomCardContent: {
    ...fontStyles.basicFont02,
    marginTop: 8,
  },
  bottomCardTailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },
  bottomCardAddressWrapper: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  bottomCardTimeWrapper: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  bottomCardChatIcon: { width: 30, height: 30 },
  writeButtonImage: {
    width: 24,
    height: 24,
  },
  modalWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  modalBodyWrapper: {
    backgroundColor: '#FFF',
    padding: 28,
    borderRadius: 60,
    width: '100%',
    height: 447,
  },
  modalHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalLeftHeaderWrapper: {
    flex: 1,
  },
  modalCenterHeaderWrapper: { flexDirection: 'row', gap: 8 },
  modalRightHeaderWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalTimeChoose: {
    ...fontStyles.boldFont01,
    marginTop: 16,
  },
  modalTimeChooseWrapper: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
    zIndex: 1,
    alignItems: 'center',
  },
  modalDropDownWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  modalDropDownPicker: {
    borderWidth: 1,
    borderColor: color.GRAY_200,
    width: 80,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  modalDropDownContainer: { width: 80 },
  arrowWrapper: { width: 12, height: 12 },
  modalSelectBoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: color.GRAY_200,
    width: 110,
    height: 50,
    padding: 12,
    marginTop: 12,
    gap: 8,
  },
  modalTitleWrapper: {
    ...fontStyles.basicFont02,
    width: '100%',
    backgroundColor: color.BLUE_30,
    borderRadius: 15,
    marginTop: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  modalContentWrapper: {
    ...fontStyles.basicFont02,
    flex: 1,
    width: '100%',
    backgroundColor: color.BLUE_30,
    borderRadius: 15,
    marginTop: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  modalLabel: {
    ...fontStyles.boldFont01,
    marginTop: 16,
  },
  modalBottomWrapper: { width: '100%', alignItems: 'center', marginTop: 12 },
  writeIconWrapper: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: color.BLUE_500,
  },
  accompanyModalMiddleTopWrapper: { flexDirection: 'row', marginTop: 12, gap: 28 },
  accompanyModalLocationText: {
    ...fontStyles.basicFont02,
    flex: 1,
  },
});
