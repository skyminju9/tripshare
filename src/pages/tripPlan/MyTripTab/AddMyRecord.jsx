import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import BasicHeader from '../../../components/BasicHeader';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import CameraIcon from '../../../assets/icons/myTrip/camera.svg';

const AddMyRecord = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title={'새 여행 기록 작성하기'} headerColor={color.BLUE_30} />
      <View style={styles.addArea}>
        <View style={styles.inputContentWrapper}>
          <Text style={fontStyles.title03}>글 제목</Text>
          <View style={styles.titleInputBox}>
            <View style={styles.titleInput}>
              <TextInput
                placeholder="제목을 입력하세요."
                autoCapitalize="none"
                autoComplete="none"
                autoCorrect={false}
                numberOfLines={1}
                maxLength={20}
              />
            </View>
            <TouchableOpacity>
              <CameraIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxesWrapper}>
            <BouncyCheckbox
              size={16}
              fillColor={color.BLUE_500}
              unFillColor={color.WHITE}
              text="공개"
              textStyle={styles.checkboxText}
              iconStyle={styles.checkboxIconStyle}
              innerIconStyle={styles.checkboxInnerIconStyle}
              onPress={isChecked => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={16}
              fillColor={color.BLUE_500}
              unFillColor={color.WHITE}
              text="비공개"
              textStyle={styles.checkboxText}
              iconStyle={styles.checkboxIconStyle}
              innerIconStyle={styles.checkboxInnerIconStyle}
              onPress={isChecked => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>
        <View style={styles.inputContentWrapper}>
          <Text style={fontStyles.title03}>내용</Text>
          <View style={styles.contentsView}>
            <TextInput
              placeholder="내용을 입력하세요."
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect={false}
              numberOfLines={20}
              multiline
              maxLength={200}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.doneButton}>
          <Text style={[fontStyles.title03, { color: color.WHITE }]}>작성 완료</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.BLUE_30 },
  addArea: {
    marginHorizontal: 20,
    marginTop: 20,
    gap: 16,
    alignItems: 'center',
  },
  inputContentWrapper: { gap: 8 },
  titleInputBox: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  titleInput: {
    backgroundColor: color.WHITE,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 320,
    height: 40,
  },
  checkboxesWrapper: { flexDirection: 'row', gap: 12 },
  checkboxText: {
    textDecorationLine: 'none',
    fontSize: 14,
  },
  checkboxIconStyle: { borderColor: color.BLUE_500, borderRadius: 2 },
  checkboxInnerIconStyle: { borderRadius: 2 },
  contentsView: {
    backgroundColor: color.WHITE,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: 350,
    height: 450,
  },
  doneButton: {
    width: 300,
    height: 60,
    backgroundColor: color.BLUE_500,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddMyRecord;
