import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import { formatDate } from '../../utils/date';
import ArticleCard from '../../components/community/ArticleCard';
import fontStyles from '../../styles/fontStyles';

import { useAuthUser } from '../../contexts/AuthUserContext';
import { getMyArticleList } from '../../firebase/store/ArticleDB';
import { useIsFocused } from '@react-navigation/native';
import { DummyProfileImg } from '../../assets';

const MyPageArticle = () => {
  const user = useAuthUser();
  const [articleData, setArticleData] = useState([]);
  const isFocused = useIsFocused();

  const handleContent = data => {
    const initialArticles = data.map(article => {
      const content = article.data();

      return {
        id: article.id,
        ...content,
        authorName: user.name,
        authorImage: user.profileImage || DummyProfileImg,
      };
    });

    return initialArticles;
  };

  const getMyArticle = async () => {
    const lists = await getMyArticleList(user.id);
    setArticleData(handleContent(lists));
  };

  useEffect(() => {
    getMyArticle();
  }, [isFocused]);

  const renderItem = (item, index) => {
    let isPrevSameDate = false;
    if (articleData[index - 1]) {
      isPrevSameDate = formatDate(item.createdAt) === formatDate(articleData[index - 1]?.createdAt);
    }
    item.authorImage = user.profileImage || DummyProfileImg;
    item.authorName = user.name;

    return (
      <View style={styles.cardContainer}>
        {!isPrevSameDate && <Text style={styles.cardDate}>{formatDate(item.createdAt)}</Text>}
        <View style={styles.articleCardWrapper}>
          <ArticleCard item={item} />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="작성한 게시글" />
      <FlatList
        data={articleData}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item.id}
        style={styles.flatListWrapper}
      />
    </SafeAreaView>
  );
};

export default MyPageArticle;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  flatListWrapper: { flex: 1 },
  cardContainer: {
    paddingHorizontal: 20,
  },
  articleCardWrapper: {
    marginTop: 12,
  },
  cardDate: {
    ...fontStyles.title03,
    marginTop: 20,
  },
});
