import React, { useCallback, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import BasicHeader from '../../components/BasicHeader';
import ArticleCard from '../../components/community/ArticleCard';
import ArticleTagList from './ArticleTagList';
import { SearchIcon } from '../../assets/index';
import { dummy_article, dummy_user } from '../../dummyData';

const tags = ['잡담', '질문', '정보'];

const CommunityFreeBoard = () => {
  const [articles, setArticles] = useState(initialArticles);
  const initialArticles = dummy_article.map(article => {
    const articleUser = dummy_user.find(user => user.id === article.userId);

    return {
      ...article,
      authorName: articleUser.name,
      authorImage: articleUser.profileImage,
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
        text="자유게시판"
        RightIcon={SearchIcon}
        // TODO: navigate search page
        pressRightIcon={() => console.log('search icon')}
      />
      <ArticleTagList tags={tags} onPressTag={onPressTag} />
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
    backgroundColor: '#FFF',
  },
});

export default CommunityFreeBoard;
