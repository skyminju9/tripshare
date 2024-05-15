import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import LogoHeader from '../../components/LogoHeader';
import fontStyles from '../../styles/fontStyles';
import shadowStyles from '../../styles/shadowStyles.js';
import color from '../../styles/colorPalette';
import SeeMoreBtn from '../../components/SeeMoreBtn.jsx';
import { Shadow } from 'react-native-shadow-2';
import { APP_WIDTH } from '../../constants.js';

import {
  FlashIcon,
  PlaceIcon,
  EventIcon,
  FreeTalkIcon,
  DummyProfileImg,
} from '../../assets/index.js';

import { dummy_user } from '../../dummyData.jsx';
import { useIsFocused } from '@react-navigation/native';
import { getHotArticleTop3 } from '../../firebase/store/ArticleDB.js';
import { setUserList } from '../../firebase/store/UserDB.js';

const CommunityHome = ({ navigation }) => {
  const [hotArticle, setHotArticle] = useState([]);
  const isFocused = useIsFocused();
  const [users, setUsers] = useState([]);

  const handleContent = (data, userList) => {
    const initialArticles = data.map(article => {
      if (userList !== undefined) {
        const content = article.data();
        const articleUser = userList.find(user => user.id === content.creator);

        return {
          id: article.id,
          title: content.title,
          authorImage: articleUser.profileImage || DummyProfileImg,
        };
      }
    });

    return initialArticles;
  };

  const getHotTopList = async () => {
    const lists = await getHotArticleTop3();
    const userList = await setUserList();
    if (userList !== undefined) {
      setHotArticle(handleContent(lists, userList));
      setUsers(userList);
    }
  };

  useEffect(() => {
    getHotTopList();
  }, [isFocused]);

  const renderHotPost = (item, index) => {
    return (
      <Shadow {...shadowStyles.smallShadow} key={index} stretch>
        <TouchableOpacity
          style={styles.hotPostListItemWarpper}
          onPress={() =>
            navigation.navigate('CommunityArticleDetail', { article: item, users: users })
          }>
          <View style={styles.hotPostListItemDot} />
          <Text style={fontStyles.basicFont01}>{item.title}</Text>
        </TouchableOpacity>
      </Shadow>
    );
  };

  const renderCommunityItems = (item, index) => {
    return (
      <View style={styles.communityListItemWrapper} key={index}>
        <Shadow
          {...{
            distance: 5,
            startColor: '#7777770D',
            endColor: '#77777700',
            offset: [0, 5],
          }}
          stretch>
          <TouchableOpacity
            style={styles.communityListItem}
            onPress={() => navigation.navigate(item.address)}>
            {item.icon}
            <Text style={fontStyles.title03}>{item.category}</Text>
          </TouchableOpacity>
        </Shadow>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader location="도쿄" />
      <View style={styles.mainWrapper}>
        <View style={styles.hotPostContainer}>
          <View style={styles.hotPostTopWrapper}>
            <Text style={fontStyles.title03}>HOT한 게시글 보기</Text>
            <SeeMoreBtn address="CommunityHotBoard" />
          </View>
          <View style={styles.hotPostListWrapper}>
            {hotArticle.map((item, index) => {
              return renderHotPost(item, index);
            })}
          </View>
        </View>
        <View style={styles.communityContainer}>
          <Text style={fontStyles.title03}>커뮤니티</Text>
          <View style={styles.communityListWrapper}>
            <View style={styles.communityList}>
              {communityList[0].map((item, index) => {
                return renderCommunityItems(item, index);
              })}
            </View>
            <View style={styles.communityList}>
              {communityList[1].map((item, index) => {
                return renderCommunityItems(item, index);
              })}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const communityList = [
  [
    {
      icon: <FlashIcon width={36} height={36} />,
      address: 'CommunityMeetingMap',
      category: '번개/동행',
    },
    {
      icon: <PlaceIcon width={36} height={36} />,
      address: 'Attractions',
      category: '맛집/명소',
    },
  ],
  [
    {
      icon: <EventIcon width={36} height={36} />,
      address: 'EventPage',
      category: '이벤트',
    },
    {
      icon: <FreeTalkIcon width={36} height={36} />,
      address: 'CommunityFreeBoard',
      category: '자유게시판',
    },
  ],
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
  },

  mainWrapper: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    gap: 32,
  },
  hotPostContainer: {
    gap: 16,
  },
  hotPostTopWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotPostListWrapper: {
    gap: 8,
  },
  hotPostListItemWarpper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: color.WHITE,
  },
  hotPostListItemDot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: color.BLUE_500,
  },
  communityContainer: {
    gap: 16,
  },
  communityListWrapper: {
    gap: 12,
  },
  communityList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  communityListItemWrapper: {
    width: (APP_WIDTH - 60) / 2,
  },
  communityListItem: {
    width: '100%',
    height: 110,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 36,
    backgroundColor: color.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});

export default CommunityHome;
