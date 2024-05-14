import React, { useEffect, useState, useRef } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import BasicHeader from '../../../components/BasicHeader';
import DatePicker from 'react-native-date-picker';
import { APP_WIDTH } from '../../../constants';
import { SearchLocationIcon, SearchTimeIcon } from '../../../assets/index';
import { useNavigation } from '@react-navigation/native';
import { toISODate, clock } from '../../../utils/date';
import { BlueHeartIcon, BlueSearchIcon, ModalCloseIcon } from '../../../assets/index';
import { useSchedule } from '../../../contexts/AddScheduleContext';

const AddSchedule = ({ route }) => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date(route.params.params));
  const [openDate, setOpenDate] = useState(false);

  const [time, setTime] = useState(new Date(route.params.params));
  const [openTime, setOpenTime] = useState(false);

  const [openAddLocation, setOpenAddLocation] = useState(false);
  const [location, setLocation] = useState();

  const { addSchedule } = useSchedule();
  const scheduleId = useRef(4);

  const handleAddSchedule = () => {
    const newSchedule = { scheduleId: scheduleId.current, time: clock(time), location: location };
    addSchedule(toISODate(date), newSchedule);
    scheduleId.current += 1;
    setLocation('');
    setDate(new Date(route.params.params));
    setTime(new Date(route.params.params));
    navigation.goBack();
  };

  const handleModal = () => {
    setOpenAddLocation(!openAddLocation);
  };

  useEffect(() => {
    if (route.params.params[1]) {
      setLocation(route.params.params[1].locationName);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title={'여행 계획 추가'} />
      <View style={styles.inputsArea}>
        <View style={styles.locationWrapper}>
          <View style={styles.titleWrapper}>
            <SearchLocationIcon />
            <Text style={fontStyles.title03}>장소 추가</Text>
          </View>
          <TouchableOpacity onPress={handleModal} style={styles.addLocationButton}>
            {location ? (
              <Text style={fontStyles.basicFont01}>{location}</Text>
            ) : (
              <Text style={styles.placeholderStyle}>장소를 입력해주세요</Text>
            )}
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.titleWrapper}>
            <SearchTimeIcon />
            <Text style={fontStyles.title03}>시간 설정</Text>
          </View>
          <View style={styles.dateTimePickersWrapper}>
            <TouchableOpacity onPress={() => setOpenDate(true)} style={styles.addDateTimeButton}>
              <Text style={styles.placeholderStyle}>{toISODate(date)}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpenTime(true)} style={styles.addDateTimeButton}>
              <Text style={styles.placeholderStyle}>{clock(time)}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleAddSchedule} style={styles.doneButton}>
        <Text style={styles.doneText}>완료</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={openDate}
        date={date}
        onConfirm={date => {
          setOpenDate(false);
          setDate(date);
        }}
        onCancel={() => setOpenDate(false)}
      />
      <DatePicker
        modal
        mode="time"
        open={openTime}
        date={time}
        onConfirm={date => {
          setOpenTime(false);
          setTime(date);
        }}
        onCancel={() => setOpenTime(false)}
      />
      <Modal
        animationType="fade"
        onBackdropPress={handleModal}
        backgroundColor="rgba(0, 0, 0, 0.5)"
        style={styles.modalStyle}
        transparent={true}
        visible={openAddLocation}
        onRequestClose={handleModal}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalTitleArea}>
            <View style={styles.blankView} />
            <Text style={fontStyles.title02}>장소 추가하기</Text>
            <TouchableOpacity onPress={handleModal}>
              <ModalCloseIcon width={32} height={32} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalSelectionArea}>
            <View style={styles.selections}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FavoriteLocation', { params: toISODate(date) });
                  handleModal();
                }}
                style={styles.selectButtonStyle}>
                <BlueHeartIcon />
                <Text>관심 장소</Text>
              </TouchableOpacity>
              <View style={styles.seperateLine} />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SearchLocations', { params: toISODate(date) });
                  handleModal();
                }}
                style={styles.selectButtonStyle}>
                <BlueSearchIcon />
                <Text>장소 검색</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  inputsArea: { margin: 20, gap: 48 },
  locationWrapper: { gap: 12 },
  titleWrapper: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  addLocationButton: {
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    paddingVertical: 20,
    paddingHorizontal: 12,
    width: 300,
    height: 60,
  },
  dateTimePickersWrapper: { flexDirection: 'row', marginVertical: 12, gap: 24 },
  addDateTimeButton: {
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    width: 140,
    height: 60,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderStyle: [fontStyles.basicFont01, { color: color.GRAY_200 }],
  doneButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: APP_WIDTH,
    height: 100,
    backgroundColor: color.BLUE_500,
    position: 'absolute',
    bottom: 0,
  },
  doneText: [fontStyles.title02, { color: color.WHITE }],
  modalStyle: { margin: 0, justifyContent: 'flex-end' },
  modalWrapper: {
    alignItems: 'center',
    backgroundColor: color.WHITE,
    width: APP_WIDTH,
    height: 280,
  },
  modalTitleArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    width: APP_WIDTH,
  },
  blankView: { width: 32 },
  modalSelectionArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selections: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectButtonStyle: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 },
  seperateLine: { width: 1, height: 150, backgroundColor: color.GRAY_50 },
});

export default AddSchedule;
