import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';

import BasicHeader from '../../components/BasicHeader';
import ArticleCard from '../../components/community/ArticleCard';
import ArticleTagList from './ArticleTagList';
import { setAgoDays } from '../../utils/date';
import { SearchIcon, PostIcon } from '../../assets/index';
import { dummy_article, dummy_user } from '../../dummyData';
import color from '../../styles/colorPalette';
import { Shadow } from 'react-native-shadow-2';
import { APP_WIDTH } from '../../constants';

const tags = ['잡담', '질문', '정보'];

const CommunityFreeBoard = ({ navigation }) => {
  const [articles, setArticles] = useState(initialArticles);
  const initialArticles = dummy_article.map(article => {
    const articleUser = dummy_user.find(user => user.id === article.userId);

    return {
      ...article,
      authorName: articleUser.name,
      authorImage: articleUser.profileImage,
      createdAt: setAgoDays(article.createdAt),
    };
  });

  const onPressTag = useCallback(activeTag => {
    if (activeTag) {
      setArticles(initialArticles.filter(article => article.tag === activeTag));
    } else setArticles(initialArticles);
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader
        title="자유게시판"
        rightComponent={
          <TouchableOpacity onPress={() => console.log('search icon')}>
            <SearchIcon />
          </TouchableOpacity>
        }
      />
      <ArticleTagList tags={tags} onPressTag={onPressTag} />
      <View style={styles.postIconWrapper}>
        <Shadow
          distance={10}
          startColor={'#4F85F64D'}
          endColor={'#4F85F600'}
          offset={[-2, -2]}
          stretch>
          <TouchableOpacity
            style={styles.postIconBtn}
            onPress={() => navigation.navigate('CommunityPostPage')}>
            <PostIcon />
          </TouchableOpacity>
        </Shadow>
      </View>
      <FlatList
        data={articles}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ArticleCard item={item} />}
        scrollEventThrottle={20}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  postIconWrapper: { position: 'absolute', right: 16, bottom: APP_WIDTH / 5, zIndex: 10 },
  postIconBtn: {
    padding: 20,
    backgroundColor: color.BLUE_30,
    borderRadius: 50,
  },
});

export default CommunityFreeBoard;
