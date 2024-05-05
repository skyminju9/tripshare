import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BasicHeader from '../../components/BasicHeader';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import { UploadImage } from '../../assets';
import TripShareBtn from '../../components/TripShareBtn';

const { width, height } = Dimensions.get('window');

const CommunityPostPage = ({ headerText = '게시글 등록하기', buttonText = '등록하기' }) => {
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader text={headerText} />
      <View style={styles.mainWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={fontStyles.title03}>글 제목</Text>
          <View>
            <TextInput
              style={[fontStyles.basicFont, styles.titleInput]}
              placeholder="제목"
              value={titleText}
              onChangeText={setTitleText}
              numberOfLines={1}
              maxLength={20}
            />
            <Text style={[fontStyles.basicFont02, styles.lengthFont]}>{titleText.length}/20</Text>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={fontStyles.title03}>내용</Text>
          <View>
            <TextInput
              style={[fontStyles.basicFont, styles.contentInput]}
              placeholder="내용"
              value={contentText}
              onChangeText={setContentText}
              editable
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={fontStyles.title03}>해시</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={fontStyles.title03}>사진 등록하기</Text>
          <View style={styles.uploadImageBtn}>
            <View style={styles.uploadImageBtnBorder}>
              <UploadImage />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.btnWrapper}>
          <TripShareBtn text={buttonText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  mainWrapper: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    gap: 20,
  },
  titleWrapper: {
    gap: 16,
  },
  titleInput: {
    backgroundColor: color.BLUE_30,
    borderRadius: 20,
    paddingLeft: 24,
    paddingRight: 64,
  },
  contentInput: {
    height: 240,
    backgroundColor: color.BLUE_30,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  uploadImageBtn: {
    paddingVertical: 24,
    paddingHorizontal: width / 2 - 60,
  },
  uploadImageBtnBorder: {
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.GRAY_50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrapper: {
    paddingHorizontal: 24,
  },

  lengthFont: {
    color: color.GRAY_300,
    position: 'absolute',
    marginVertical: 14,
    right: 24,
  },
});

export default CommunityPostPage;
