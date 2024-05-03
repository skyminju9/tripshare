import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import LogoHeader from '../../components/LogoHeader';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import { FlashIcon, PlaceIcon, EventIcon, FreeTalkIcon } from '../../assets/index.js';

import { dummy_article } from '../../dummyData';

const CommunityHome = () => {
  const [hotTitle, setHotTitle] = useState([]);

  useEffect(() => {
    getHotTitle(dummy_article);
  }, []);

  const getHotTitle = list => {
    list.sort((a, b) => b.like - a.like);
    const result = list.slice(0, 3);
    setHotTitle(result);
  };

  const renderHotPost = (item, index) => {
    return (
      <View key={index} style={styles.hotPostListItemWarpper}>
        <View style={styles.hotPostListItemDot} />
        <Text style={fontStyles.basicFont}>{item.title}</Text>
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
            <Text style={fontStyles.basicFont02}>더보기</Text>
          </View>
          <View style={styles.hotPostListWrapper}>
            {hotTitle.map((item, index) => {
              return renderHotPost(item, index);
            })}
          </View>
        </View>
        <View style={styles.communityContainer}>
          <Text style={fontStyles.title03}>커뮤니티</Text>
          <View style={styles.communityListWrapper}>
            <View style={styles.communityList}>
              <View style={styles.communityListItem}>
                <Text style={fontStyles.basicFont}>번개/동행</Text>
                <FlashIcon />
              </View>
              <View style={styles.communityListItem}>
                <Text style={fontStyles.basicFont}>맛집/명소</Text>
                <PlaceIcon />
              </View>
              <View style={styles.communityListItem}>
                <Text style={fontStyles.basicFont}>이벤트</Text>
                <EventIcon />
              </View>
            </View>
            <View style={styles.communityList}>
              <View style={styles.communityListBigItem}>
                <Text>지도</Text>
              </View>
              <View style={styles.communityListFreeTalk}>
                <Text style={fontStyles.title03}>자유 게시판</Text>
                <FreeTalkIcon />
              </View>
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

  mainWrapper: {
    flex: 1,
    paddingVertical: 20,
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
    gap: 12,
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

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
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
    gap: 24,
  },
  communityList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  communityListItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    padding: 16,
    backgroundColor: color.WHITE,
    alignItems: 'center',
    gap: 8,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 7,
  },
  communityListBigItem: {
    width: '47%',
    height: '100%',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    backgroundColor: color.WHITE,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 7,
  },
  communityListFreeTalk: {
    width: '47%',
    height: '100%',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    padding: 32,
    backgroundColor: color.WHITE,
    alignItems: 'center',
    gap: 8,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 7,
  },
});

export default CommunityHome;
