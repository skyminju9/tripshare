import { StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { dummy_article, dummy_user } from '../../dummyData';
import { useAuthUser } from '../../contexts/AuthUserContext';
import BasicHeader from '../../components/BasicHeader';
import color from '../../styles/colorPalette';
import { formatDate } from '../../utils/date';
import ArticleCard from '../../components/community/ArticleCard';
import fontStyles from '../../styles/fontStyles';

import { useIsFocused } from '@react-navigation/native';
import { getMyBookmarkedList } from '../../firebase/store/ArticleDB';
import { DummyProfileImg } from '../../assets';
import { setUserList } from '../../firebase/store/UserDB';

const MyPageBookmark = () => {
  const user = useAuthUser();
  const [articleData, setArticleData] = useState([]);
  const isFocused = useIsFocused();

  const handleContent = (data, userList) => {
    const initialArticles = data.map(article => {
      const content = article._data;
      if (userList !== undefined) {
        const articleUser = userList.find(user => user.id === content.creator);

        return {
          id: article.id,
          ...content,
          authorName: articleUser.name,
          authorImage: articleUser.profileImage || DummyProfileImg,
        };
      } else {
        const articleUser = dummy_user.find(user => user.id === content.creator);

        return {
          id: article.id,
          ...content,
          authorName: articleUser.name,
          authorImage: articleUser.profileImage || DummyProfileImg,
        };
      }
    });

    return initialArticles;
  };

  const getMyBookmarked = async () => {
    const lists = await getMyBookmarkedList(user.bookmarkList);
    const userList = await setUserList();
    if (userList !== undefined) {
      setArticleData(handleContent(lists, userList));
    }
  };

  useEffect(() => {
    getMyBookmarked();
  }, [isFocused]);

  const renderItem = (item, index) => {
    let isSameDate = false;
    if (articleData[index - 1]) {
      isSameDate = formatDate(item.createdAt) === formatDate(articleData[index - 1]?.createdAt);
    }

    return (
      <View style={styles.cardContainer}>
        {!isSameDate && <Text style={styles.cardDate}>{formatDate(item.createdAt)}</Text>}
        <View style={styles.articleCardWrapper}>
          <ArticleCard item={item} />
        </View>
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
  cardContainer: {
    paddingHorizontal: 20,
  },
  articleCardWrapper: {
    marginTop: 12,
  },
  cardDate: {
    ...fontStyles.title03,
    marginLeft: 20,
    marginTop: 20,
  },
});
