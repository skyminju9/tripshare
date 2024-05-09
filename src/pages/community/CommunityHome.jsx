import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import LogoHeader from '../../components/LogoHeader';
import fontStyles from '../../styles/fontStyles';
import shadowStyles from '../../styles/shadowStyles.js';
import color from '../../styles/colorPalette';
import SeeMoreBtn from '../../components/SeeMoreBtn.jsx';
import { getHotArticle } from '../../utils/sortArticle.js';
import { Shadow } from 'react-native-shadow-2';
import { APP_WIDTH } from '../../constants.js';

import { FlashIcon, PlaceIcon, EventIcon, FreeTalkIcon } from '../../assets/index.js';

import { dummy_article } from '../../dummyData';

const CommunityHome = ({ navigation }) => {
  const [hotTitle, setHotTitle] = useState([]);

  useEffect(() => {
    setHotTitle(getHotArticle(dummy_article, 3));
  }, []);

  const renderHotPost = (item, index) => {
    return (
      <Shadow {...shadowStyles.smallShadow} key={index} stretch>
        <TouchableOpacity style={styles.hotPostListItemWarpper}>
          <View style={styles.hotPostListItemDot} />
          <Text style={fontStyles.basicFont01}>{item.title}</Text>
        </TouchableOpacity>
      </Shadow>
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
            {hotTitle.map((item, index) => {
              return renderHotPost(item, index);
            })}
          </View>
        </View>
        <View style={styles.communityContainer}>
          <Text style={fontStyles.title03}>커뮤니티</Text>
          <View style={styles.communityListWrapper}>
            <View style={styles.communityList}>
              <Shadow style={styles.communityListItemWrapper} {...shadowStyles.smallShadow} stretch>
                <TouchableOpacity
                  style={styles.communityListItem}
                  onPress={() => navigation.navigate('CommunityMeetingMap')}>
                  <Text style={fontStyles.basicFont}>번개/동행</Text>
                  <FlashIcon />
                </TouchableOpacity>
              </Shadow>
              <Shadow style={styles.communityListItemWrapper} {...shadowStyles.smallShadow} stretch>
                <TouchableOpacity style={styles.communityListItem}>
                  <Text style={fontStyles.basicFont01}>맛집/명소</Text>
                  <PlaceIcon />
                </TouchableOpacity>
              </Shadow>
              <Shadow style={styles.communityListItemWrapper} {...shadowStyles.smallShadow} stretch>
                <TouchableOpacity style={styles.communityListItem}>
                  <Text style={fontStyles.basicFont01}>이벤트</Text>
                  <EventIcon />
                </TouchableOpacity>
              </Shadow>
            </View>
            <View style={styles.communityList}>
              <Shadow
                style={styles.communityListBigItemWrapper}
                {...shadowStyles.smallShadow}
                stretch>
                <TouchableOpacity style={styles.communityListBigItem}>
                  <Text>지도</Text>
                </TouchableOpacity>
              </Shadow>
              <Shadow
                style={styles.communityListBigItemWrapper}
                {...shadowStyles.smallShadow}
                stretch>
                <TouchableOpacity
                  style={styles.communityListFreeTalk}
                  onPress={() => navigation.navigate('CommunityFreeBoard')}>
                  <Text style={fontStyles.title03}>자유 게시판</Text>
                  <FreeTalkIcon />
                </TouchableOpacity>
              </Shadow>
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
    paddingTop: 16,
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
    height: '44%',
    gap: 16,
  },
  communityList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  communityListItemWrapper: { width: (APP_WIDTH - 80) / 3, height: (APP_WIDTH - 80) / 3 },
  communityListItem: {
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    padding: 16,
    backgroundColor: color.WHITE,
    alignItems: 'center',
    gap: 8,
  },
  communityListBigItemWrapper: { width: (APP_WIDTH - 64) / 2, height: (APP_WIDTH - 74) / 2 },
  communityListBigItem: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  communityListFreeTalk: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    borderRadius: 16,
    padding: 32,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});

export default CommunityHome;
