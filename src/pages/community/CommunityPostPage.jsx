import React, { useState, useCallback } from 'react';
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
import ArticleTagList from './ArticleTagList';
import { APP_WIDTH } from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import { useAuthUser } from '../../contexts/AuthUserContext';

import { addArticle, editArticle } from '../../firebase/store/ArticleDB';

const tags = ['잡담', '질문', '정보'];

const CommunityPostPage = ({ navigation, route }) => {
  const user = useAuthUser();
  const isEdit = route.params.edit;
  const [contentData, setContentData] = useState(route.params.data || []);

  const [titleText, setTitleText] = useState(contentData.title || '');
  const [contentText, setContentText] = useState(contentData.contents || '');
  const [tag, setTag] = useState(contentData.tag || '');
  const [imagePath, setImagePath] = useState(contentData.images || []);

  const onPressTag = useCallback(
    activeTag => {
      if (activeTag) {
        setTag(activeTag);
      }
    },
    [tag],
  );

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

  const onPressBtn = () => {
    const data = {
      title: titleText,
      contents: contentText,
      createdAt: new Date().getTime(),
      creator: user.id,
      bookmarked: !isEdit ? 0 : contentData.bookmarked,
      liked: !isEdit ? 0 : contentData.liked,
      tag: tag,
      images: imagePath,
      comments: !isEdit ? [] : contentData.comments,
    };
    if (!isEdit) {
      const result = addArticle(data);
      if (result) {
        console.log('Article added!');
        navigation.navigate('CommunityFreeBoard');
      }
    } else {
      const result = editArticle(contentData.id, data);
      if (result) {
        console.log('Article edited!');
        navigation.navigate('CommunityFreeBoard');
      }
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title={isEdit ? '게시글 수정하기' : '게시글 등록하기'} />
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
          <ArticleTagList currentTag={tag} tags={tags} onPressTag={onPressTag} />
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
          <TouchableOpacity style={styles.button} onPress={onPressBtn}>
            <Text style={[fontStyles.title03, styles.btnText]}>
              {isEdit ? '수정하기' : '등록하기'}
            </Text>
          </TouchableOpacity>
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
  button: {
    backgroundColor: color.BLUE_500,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 24,
  },
  btnText: { color: color.WHITE },

  lengthFont: {
    color: color.GRAY_300,
    position: 'absolute',
    right: 28,
  },
});

export default CommunityPostPage;
