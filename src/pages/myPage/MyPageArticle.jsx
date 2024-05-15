import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';
import React, { useState } from 'react';

import { dummy_article } from '../../dummyData';
import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import { formatDate } from '../../utils/date';
import ArticleCard from '../../components/community/ArticleCard';
import fontStyles from '../../styles/fontStyles';

const MyPageArticle = ({ route }) => {
  const user = route.params.user;
  const [articleData, setArticleData] = useState(
    dummy_article.filter(articleData => articleData.userId == user.id),
  );

  const renderItem = (item, index) => {
    let isPrevSameDate = false;
    if (!!articleData[index - 1]) {
      isPrevSameDate = formatDate(item.createdAt) === formatDate(articleData[index - 1]?.createdAt);
    }

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
