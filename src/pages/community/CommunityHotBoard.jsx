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
      <BasicHeader text="HOT 게시글" />
      <FlatList
        data={initialArticles}
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

export default CommunityHotBoard;
