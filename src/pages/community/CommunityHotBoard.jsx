import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import BasicHeader from '../../components/BasicHeader';
import ArticleCard from '../../components/community/ArticleCard';
import { getHotArticle } from '../../utils/sortArticle';
import { dummy_article, dummy_user } from '../../dummyData';

import { useIsFocused } from '@react-navigation/native';
import { getHotArticleList } from '../../firebase/store/ArticleDB';

const CommunityHotBoard = () => {
  const [hotArticle, setHotArticle] = useState([]);
  const isFocused = useIsFocused();

  const handleContent = data => {
    const initialArticles = data.map(article => {
      const content = article.data();
      const articleUser = dummy_user.find(user => user.id === content.creator);

      return {
        id: article.id,
        ...content,
        authorName: articleUser.name,
        authorImage: articleUser.profileImage,
      };
    });

    return initialArticles;
  };

  const getHotList = async () => {
    const lists = await getHotArticleList();
    setHotArticle(handleContent(lists));
  };

  useEffect(() => {
    getHotList();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="HOT 게시글" />
      <FlatList
        style={styles.articleCardWrapper}
        data={hotArticle}
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
