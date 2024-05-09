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
import { dummy_user } from '../../dummyData';
import {
  EditIcon,
  EditCheckIcon,
  MyBookmarkIcon,
  MyArticleIcon,
  MyCommentIcon,
  PositionIcon,
  NotiIcon,
  ThemeIcon,
} from '../../assets/index';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import { APP_WIDTH } from '../../constants';
import { getLongText } from '../../utils/getLongText';

const MyPageHome = () => {
  const [user, setUser] = useState(dummy_user[3]);
  const [username, setUsername] = useState('');
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setUsername(user.name);
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader />
      <View style={styles.mainContainer}>
        <View style={styles.topWrapper}>
          {edit ? (
            <>
              <View style={styles.profileImageWrapper}>
                <Image source={user.profileImage} style={styles.profileImage} />
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
              <View style={styles.profileImageWrapper}>
                <Image source={user.profileImage} style={styles.profileImage} />
              </View>
              <Text style={fontStyles.title01}>{getLongText(username)} 님</Text>
              <TouchableOpacity onPress={() => setEdit(true)}>
                <EditIcon />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.menuBox}>
          <View style={styles.menuContainer}>
            <Text style={fontStyles.title03}>게시물 관리</Text>
            <View style={styles.menuList}>
              <TouchableOpacity style={styles.menuWrapper}>
                <View style={styles.menuBtnWrapper}>
                  <MyBookmarkIcon width={20} />
                </View>
                <Text style={fontStyles.basicFont01}>북마크한 게시글 보기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuWrapper}>
                <View style={styles.menuBtnWrapper}>
                  <MyArticleIcon width={12} />
                </View>
                <Text style={fontStyles.basicFont01}>내가 작성한 게시글 보기</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuWrapper}>
                <MyCommentIcon width={24} />
                <Text style={fontStyles.basicFont01}>내가 작성한 댓글 보기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <Text style={fontStyles.title03}>설정</Text>
            <View style={styles.menuList}>
              <TouchableOpacity style={styles.menuWrapper}>
                <PositionIcon width={24} height={24} />
                <Text style={fontStyles.basicFont01}>위치 설정</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuWrapper}>
                <NotiIcon width={24} height={24} color={color.BLUE_500} />
                <Text style={fontStyles.basicFont01}>알림 설정</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuWrapper}>
                <ThemeIcon width={24} height={24} />
                <Text style={fontStyles.basicFont01}>테마 설정</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  mainContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'center',
  },
  topWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingBottom: 16,
  },
  profileImageWrapper: {
    padding: 10,
  },
  profileImage: {
    borderRadius: 50,
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
    borderRadius: 20,
    borderColor: color.BLUE_500,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 16,
  },
  menuBtnWrapper: {
    backgroundColor: color.BLUE_500,
    borderRadius: 50,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyPageHome;
