import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import BasicHeader from '../../components/BasicHeader';
import ArticleCard from '../../components/community/ArticleCard';
import { getHotArticle } from '../../utils/sortArticle';
import { dummy_article, dummy_user } from '../../dummyData';

const CommunityHotBoard = () => {
  const [hotArticle, setHotArticle] = useState([]);

  useEffect(() => {
    setHotArticle(getHotArticle(dummy_article, 10));
  }, []);

  const initialArticles = hotArticle.map(article => {
    const articleUser = dummy_user.find(user => user.id === article.userId);

    return {
      ...article,
      authorName: articleUser.name,
      authorImage: articleUser.profileImage,
    };
  });

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="HOT 게시글" />
      <FlatList
        style={styles.articleCardWrapper}
        data={initialArticles}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ArticleCard item={item} />}
        scrollEventThrottle={20}
        contentContainerStyle={styles.flatListBottomPadding}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  articleCardWrapper: {
    marginTop: 12,
    paddingBottom: 120,
    marginHorizontal: 20,
  },
  flatListBottomPadding: {
    paddingBottom: 64,
  },
});

export default CommunityHotBoard;
