import React, { useCallback, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity, View } from 'react-native';

import BasicHeader from '../../components/BasicHeader';
import ArticleCard from '../../components/community/ArticleCard';
import ArticleTagList from '../../components/community/ArticleTagList';
import { SearchIcon, PostIcon } from '../../assets/index';
import { dummy_user } from '../../dummyData';
import color from '../../styles/colorPalette';
import { Shadow } from 'react-native-shadow-2';
import { APP_WIDTH } from '../../constants';

import { useIsFocused } from '@react-navigation/native';
import { getArticleList, getArticleTagList } from '../../firebase/store/ArticleDB';
import { DummyProfileImg } from '../../assets/index';
import { setUserList } from '../../firebase/store/UserDB';

const tags = ['잡담', '질문', '정보'];

const CommunityFreeBoard = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const isFocused = useIsFocused();
  const [users, setUsers] = useState([]);

  const handleContent = (data, userList) => {
    const initialArticles = data.map(article => {
      if (userList !== undefined) {
        const content = article.data();
        const articleUser = userList.find(user => user.id === content.creator);

        return {
          id: article.id,
          ...content,
          authorName: articleUser.name,
          authorImage: articleUser.profileImage || DummyProfileImg,
        };
      } else {
        const content = article.data();
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

  const getFreeBoard = async () => {
    const lists = await getArticleList();
    const userList = await setUserList();
    if (userList !== undefined) {
      setArticles(handleContent(lists, userList));
      setUsers(userList);
    }
  };

  const onPressTag = useCallback(
    async activeTag => {
      if (activeTag) {
        const lists = await getArticleTagList(activeTag);
        setArticles(handleContent(lists));
      } else {
        const lists = await getArticleList();
        setArticles(handleContent(lists));
      }
    },
    [isFocused],
  );

  useEffect(() => {
    getFreeBoard();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader
        title="자유게시판"
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('CommunitySearchPage')}>
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
            onPress={() => navigation.navigate('CommunityPostPage', { edit: false })}>
            <PostIcon />
          </TouchableOpacity>
        </Shadow>
      </View>
      <FlatList
        style={styles.articleCardWrapper}
        data={articles}
        removeClippedSubviews
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ArticleCard item={item} users={users} />}
        scrollEventThrottle={20}
        contentContainerStyle={styles.flatListBottomPadding}
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
  articleCardWrapper: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  flatListBottomPadding: {
    paddingBottom: 64,
  },
});

export default CommunityFreeBoard;
