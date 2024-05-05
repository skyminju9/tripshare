import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

import Svg, { Polygon } from 'react-native-svg';

import { dummy_meet } from '../../dummyData';
import CustomMarker from '../../components/CustomMarker';
import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import { AccompanyIcon, CloseIcon, ImpromptuIcon, WriteIcon } from '../../assets';
import fontStyles from '../../styles/fontStyles';
import { hourList, minuteList } from '../../utils/dateData';

const CommunityMeetingMap = ({ navigation }) => {
  const [accompanyIsVisible, setAccompanyIsVisible] = useState(false);
  const [impromptuIsVisible, setImpromptuIsVisible] = useState(false);
  const [accompanyModalIsVisible, setAccompanyModalIsVisible] = useState(false);
  const [impromptuModalIsVisible, setIsimpromptuModalIsVisible] = useState(false);
  const [impromptuHour, setImpromptuHour] = useState('시');
  const [impromptuHourIsVisible, setImpromptuHourIsVisible] = useState(false);
  const [impromptuMin, setImpromptuMin] = useState('분');
  const [impromptuMinIsVisible, setImpromptuMinIsVisible] = useState(false);
  const [impromptuTitle, setImpromptuTitle] = useState('');
  const [impromptuContent, setImpromptuContent] = useState('');

  const safeArea = useSafeAreaInsets(); //getSafeArea height

  const nowDate = new Date();
  console.log(nowDate);

  const accompanyVisibleHandler = () => {
    setAccompanyIsVisible(!accompanyIsVisible);
  };

  const impromptuVisibleHandler = () => {
    setImpromptuIsVisible(!impromptuIsVisible);
  };

  const impromptuRegisterHandler = () => {
    dummy_meet.push({
      id: dummy_meet.length + 1,
      location: { latitude: 37.78815, longitude: -122.4318 },
      title: impromptuTitle,
      content: impromptuContent,
      name: '도쿄최고',
      category: 'impromptu',
      createAt: new Date('2024-05-20 16:20'),
      meetingAt: new Date('2024-05-20 20:00'),
    });
    setIsimpromptuModalIsVisible(false);
  };

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
        }}>
        {dummy_meet.map(marker => {
          if (marker.category === 'impromptu' && !impromptuIsVisible) {
            return;
          }

          if (marker.category === 'accompany' && !accompanyIsVisible) {
            return;
          }

          return (
            <Marker key={marker.id} coordinate={marker.location}>
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
      <View style={[styles.writeButtonWrapper, { bottom: safeArea.bottom + 18 }]}>
        <TouchableOpacity activeOpacity={0.9} style={styles.writeAccompanyButtonWrapper}>
          <Image source={AccompanyIcon} style={styles.topCheckButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.writeImpromptuButtonWrapper}
          onPress={() => setIsimpromptuModalIsVisible(true)}>
          <Image source={ImpromptuIcon} style={styles.topCheckButtonIcon} />
        </TouchableOpacity>
      </View>
      {/* 번개 모달 */}
      <Modal
        isVisible={impromptuModalIsVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setIsimpromptuModalIsVisible(false)}
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
            <TouchableOpacity onPress={() => setIsimpromptuModalIsVisible(false)}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <Text style={[fontStyles.boldFont01, { marginTop: 16 }]}>시간 선택</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginTop: 8, zIndex: 1 }}>
            <DropDownPicker
              open={impromptuHourIsVisible}
              value={impromptuHour}
              items={hourList}
              setOpen={setImpromptuHourIsVisible}
              setValue={setImpromptuHour}
              style={{ borderWidth: 1, borderColor: color.GRAY_200, width: 120 }}
              textStyle={fontStyles.boldFont01}
              containerStyle={{ width: 120, zIndex: 1000 }}
              placeholder="시"
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
            <DropDownPicker
              open={impromptuMinIsVisible}
              value={impromptuMin}
              items={minuteList}
              setOpen={setImpromptuMinIsVisible}
              setValue={setImpromptuMin}
              style={{ borderWidth: 1, borderColor: color.GRAY_200, width: 120 }}
              textStyle={fontStyles.boldFont01}
              containerStyle={{ width: 120 }}
              placeholder="분"
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
            {/* <TouchableOpacity style={styles.selectBoxWrapper}>
              <Text style={[fontStyles.boldFont01]}>{impromptuMin}분</Text>
              <Svg style={{ width: 15, height: 15 }}>
                <Polygon points="0,0 7.5,15 15,0" fill={color.BLUE_500} />
              </Svg>
            </TouchableOpacity> */}
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
  writeButtonWrapper: {
    position: 'absolute',
    right: 20,
    gap: 18,
  },
  writeAccompanyButtonWrapper: {
    padding: 15,
    backgroundColor: color.BLUE_30,
    borderRadius: 200,
    shadowColor: color.BLUE_500,
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  writeImpromptuButtonWrapper: {
    padding: 15,
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
    paddingHorizontal: 20,
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
});
