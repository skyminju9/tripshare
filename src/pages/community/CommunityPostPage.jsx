import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import BasicHeader from '../../components/BasicHeader';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import { UploadIcon, DeleteIcon } from '../../assets/index';
import TripShareBtn from '../../components/TripShareBtn';
import ArticleTagList from './ArticleTagList';
import { APP_WIDTH } from '../../constants';

import ImagePicker from 'react-native-image-crop-picker';

const tags = ['잡담', '질문', '정보'];

const CommunityPostPage = ({
  navigation,
  headerText = '게시글 등록하기',
  buttonText = '등록하기',
}) => {
  const [titleText, setTitleText] = useState('');
  const [contentText, setContentText] = useState('');
  const [tag, setTag] = useState('');
  const [imagePath, setImagePath] = useState('');

  const onPressTag = useCallback(activeTag => {
    if (activeTag) {
      setTag(activeTag);
    }
  }, []);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(async images => {
      if (images.length > 3 || imagePath.length + images.length > 3) {
        console.log('No more!');
      } else {
        const list = [];
        for await (const image of images) {
          const img = await ImagePicker.openCropper({
            path: image.path,
            width: 300,
            height: 300,
          });
          list.push(img.path);
        }
        setImagePath([...imagePath, ...list]);
      }
    });
  };

  const handleImageDelete = deleteIndex => {
    const list = imagePath.filter((_, index) => {
      return index !== deleteIndex;
    });
    setImagePath(list);
  };

  const renderImage = (item, index) => {
    return (
      <TouchableOpacity key={index}>
        <TouchableOpacity style={styles.imageDeleteBtn} onPress={() => handleImageDelete(index)}>
          <DeleteIcon />
        </TouchableOpacity>
        <Image source={{ uri: item }} style={styles.imageStyle} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader text={headerText} />
      <View style={styles.mainWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={fontStyles.title03}>제목</Text>
          <View style={styles.titleInputBox}>
            <TextInput
              style={[fontStyles.basicFont01, styles.titleInput]}
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
              style={[fontStyles.basicFont01, styles.contentInput]}
              placeholder="내용"
              value={contentText}
              onChangeText={setContentText}
              editable
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>
        <View style={styles.tagWrapper}>
          <ArticleTagList tags={tags} onPressTag={onPressTag} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={fontStyles.title03}>사진 등록하기</Text>
          <View style={styles.imageWrapper}>
            {imagePath &&
              imagePath.map((item, index) => {
                return renderImage(item, index);
              })}
            <TouchableOpacity style={styles.uploadImageBtn} onPress={handleImagePicker}>
              <UploadIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <TripShareBtn text={buttonText} address="CommunityFreeBoard" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
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
  tagWrapper: {
    marginTop: -16,
    marginLeft: -12,
  },
  titleInputBox: { justifyContent: 'center' },
  titleInput: {
    backgroundColor: color.BLUE_30,
    borderRadius: 14,
    marginHorizontal: 8,
    paddingLeft: 24,
    paddingRight: 64,
    paddingVertical: 14,
  },
  contentInput: {
    height: APP_WIDTH - 180,
    backgroundColor: color.BLUE_30,
    borderRadius: 20,
    marginHorizontal: 8,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  imageWrapper: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  uploadImageBtn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.GRAY_50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: { width: (APP_WIDTH - 80) / 4, height: (APP_WIDTH - 80) / 4, borderRadius: 12 },
  imageDeleteBtn: {
    position: 'absolute',
    right: -10,
    top: -10,
    zIndex: 1,
  },
  btnWrapper: {
    paddingHorizontal: 24,
  },

  lengthFont: {
    color: color.GRAY_300,
    position: 'absolute',
    right: 28,
  },
});

export default CommunityPostPage;
