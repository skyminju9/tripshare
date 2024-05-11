import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { dummy_article, dummy_user } from '../../dummyData';
import { useAuthUser } from '../../contexts/AuthUserContext';
import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import { formatDate } from '../../utils/date';
import ArticleCard from '../../components/community/ArticleCard';
import fontStyles from '../../styles/fontStyles';

const MyPageBookmark = () => {
  const user = useAuthUser();
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    createArticleData();
  }, []);

  const createArticleData = () => {
    const userData = dummy_user.filter(data => data.id === user.id).pop();
    const bookmarkList = userData.bookmarkList;
    const bookmarkedArticle = dummy_article.filter(item => bookmarkList.includes(item.id));
    setArticleData(bookmarkedArticle);
  };

  const renderItem = (item, index) => {
    let isSameDate = false;
    if (!!articleData[index - 1]) {
      isSameDate = formatDate(item.createdAt) === formatDate(articleData[index - 1]?.createdAt);
    }
    item.authorImage = user.profileImage;
    item.authorName = user.name;

    return (
      <View>
        {!isSameDate && <Text style={styles.cardDate}>{formatDate(item.createdAt)}</Text>}
        <ArticleCard item={item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="북마크한 게시글" />
      <FlatList
        data={articleData}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item.id}
        style={styles.flatListWrapper}
      />
    </SafeAreaView>
  );
};

export default MyPageBookmark;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  flatListWrapper: { flex: 1 },
  cardDate: {
    ...fontStyles.title03,
    marginLeft: 20,
    marginTop: 20,
  },
});
