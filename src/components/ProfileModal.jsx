import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import color from '../styles/colorPalette';
import {
  BlueChatIcon,
  BlueCloseIcon,
  BlueFlightIcon,
  BlueSummarizeIcon,
  ReportIcon,
} from '../assets';
import fontStyles from '../styles/fontStyles';
import { useNavigation } from '@react-navigation/native';
import { useProfileModal } from '../contexts/profileModalContext';

const ProfileModal = ({ user }) => {
  const navigation = useNavigation();
  const articleButtonHandler = () => {
    console.log('이동한다');
    // navigation.navigate('MyPageArticle');
  };

  const { closeProfile } = useProfileModal();

  return (
    <View style={styles.modalWrapper}>
      <View style={styles.modalHeaderWrapper}>
        <TouchableOpacity style={styles.reportIconWrapper}>
          <ReportIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => closeProfile()}>
          <BlueCloseIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.modalBodyWrapper}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{user.profileName}</Text>
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
