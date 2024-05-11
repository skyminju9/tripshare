import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LogoHeader from '../../components/LogoHeader';
import {
  EditIcon,
  EditCheckIcon,
  MyBookmarkIcon,
  PostIcon,
  MyCommentIcon,
  PositionIcon,
  NotiIcon,
  ThemeIcon,
} from '../../assets/index';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import { APP_WIDTH } from '../../constants';
import ImagePicker from 'react-native-image-crop-picker';
import { getLongText } from '../../utils/getLongText';
import { useAuthUser } from '../../contexts/AuthUserContext';

const MyPageHome = ({ navigation }) => {
  const user = useAuthUser();

  const [username, setUsername] = useState(user.nickname);
  const [profileImg, setProfileImg] = useState(user.profileImage);
  const [edit, setEdit] = useState(false);

  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(image => {
      setProfileImg(image.path);
    });
  };

  const randerProfileEdit = isEdit => {
    return isEdit ? (
      <>
        {/* 편집 가능 */}
        <View style={styles.profileImageWrapper}>
          <TouchableOpacity style={styles.profileImageEdit} onPress={handleImagePicker} />
          <Image
            source={typeof profileImg === 'string' ? { uri: profileImg } : profileImg}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileEditWrapper}>
          <TextInput
            style={[fontStyles.title01, styles.profileEdit]}
            value={username}
            onChangeText={setUsername}
            numberOfLines={1}
            maxLength={20}
          />
          <Text style={fontStyles.title01}> 님</Text>
        </View>
        <TouchableOpacity onPress={() => setEdit(false)}>
          <EditCheckIcon />
        </TouchableOpacity>
      </>
    ) : (
      <>
        {/* 기본 프로필 */}
        <View style={styles.profileImageWrapper}>
          <Image
            source={typeof profileImg === 'string' ? { uri: profileImg } : profileImg}
            style={styles.profileImage}
          />
        </View>
        <Text style={fontStyles.title01}>{getLongText(username)} 님</Text>
        <TouchableOpacity onPress={() => setEdit(true)}>
          <EditIcon />
        </TouchableOpacity>
      </>
    );
  };

  const renderMenu = (item, index) => {
    return (
      <TouchableOpacity
        key={index}
        style={styles.menuWrapper}
        onPress={() => navigation.navigate(item.navigateTo, { user: user })}>
        <View style={styles.menuBtnWrapper}>{item.icon}</View>
        <Text style={fontStyles.basicFont01}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader />
      <View style={styles.mainContainer}>
        <View style={styles.topWrapper}>{randerProfileEdit(edit)}</View>
        <View style={styles.menuBox}>
          <View style={styles.menuContainer}>
            <Text style={fontStyles.title03}>게시물 관리</Text>
            <View style={styles.menuList}>
              {menuList[0].map((item, index) => {
                return renderMenu(item, index);
              })}
            </View>
          </View>
          <View style={styles.menuContainer}>
            <Text style={fontStyles.title03}>설정</Text>
            <View style={styles.menuList}>
              {menuList[1].map((item, index) => {
                return renderMenu(item, index);
              })}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const menuList = [
  [
    {
      icon: <MyBookmarkIcon />,
      title: '북마크한 게시글 보기',
      navigateTo: 'MyPageBookmark',
    },
    {
      icon: <PostIcon width={19} />,
      title: '내가 작성한 게시글 보기',
      navigateTo: 'MyPageArticle',
    },
    {
      icon: <MyCommentIcon />,
      title: '내가 작성한 댓글 보기',
      navigateTo: 'MyPageComment',
    },
  ],
  [
    {
      icon: <PositionIcon />,
      title: '위치',
    },
    {
      icon: <NotiIcon width={24} height={24} color={color.BLUE_500} />,
      title: '알림',
    },
    {
      icon: <ThemeIcon />,
      title: '테마',
    },
  ],
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  mainContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'center',
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingRight: 24,
    paddingTop: 8,
    paddingBottom: 24,
  },
  profileImageWrapper: {
    width: 100,
    height: 100,
  },
  profileImage: {
    borderRadius: 50,
    width: '100%',
    height: '100%',
  },
  profileImageEdit: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    opacity: 0.5,
    backgroundColor: color.TEXT_PRIMARY,
    zIndex: 5,
  },
  profileEditWrapper: { flexDirection: 'row', alignItems: 'center' },
  profileEdit: {
    width: APP_WIDTH / 3,
    height: 50,
    paddingVertical: 0.5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: color.GRAY_200,
    borderRadius: 10,
  },
  menuBox: { gap: 28 },
  menuContainer: { gap: 12 },
  menuList: { gap: 12 },
  menuWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: color.BLUE_500,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 16,
  },
  menuBtnWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPageHome;
