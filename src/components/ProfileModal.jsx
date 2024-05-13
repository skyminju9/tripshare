import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import color from '../styles/colorPalette';
import {
  BlueChatIcon,
  BlueCloseIcon,
  BlueFlightIcon,
  BlueSummarizeIcon,
  ReportIcon,
} from '../assets';
import fontStyles from '../styles/fontStyles';

const ProfileModal = ({ setIsProfileModalVisible, article, navigation }) => {
  const articleButtonHandler = () => {
    setIsProfileModalVisible(false);
    navigation.navigate('MyPageArticle', { user: { id: article.userId } });
  };

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalHeaderWrapper}>
        <TouchableOpacity style={styles.reportIconWrapper}>
          <ReportIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsProfileModalVisible(false)}>
          <BlueCloseIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.modalBodyWrapper}>
        <Image source={article.authorImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{article.authorName}</Text>
      </View>
      <View style={styles.modalBottomWrapper}>
        <TouchableOpacity style={styles.bottomButtonWrapper}>
          <BlueChatIcon width={30} height={30} />
          <Text style={fontStyles.basicFont02}>채팅하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtonWrapper}>
          <BlueFlightIcon width={30} height={30} />
          <Text style={fontStyles.basicFont02}>여행 기록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButtonWrapper} onPress={() => articleButtonHandler()}>
          <BlueSummarizeIcon width={30} height={30} />
          <Text style={fontStyles.basicFont02}>게시글 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileModal;

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: color.WHITE,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 12,
  },
  modalHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  modalBodyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 200,
    borderColor: color.GRAY_50,
  },
  profileName: {
    ...fontStyles.title02,
    marginTop: 20,
    marginBottom: 20,
  },
  modalBottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: color.GRAY_50,
    paddingVertical: 40,
  },
  bottomButtonWrapper: {
    flex: 1,
    gap: 8,
    alignItems: 'center',
  },
});
