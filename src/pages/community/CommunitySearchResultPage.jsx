import React from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { SearchIcon } from '../../assets';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import BasicHeader from '../../components/BasicHeader';
import { dummy_article, dummy_user } from '../../dummyData';
import ArticleCard from '../../components/community/ArticleCard';
import { DummyProfileImg } from '../../assets';

const CommmunitySearchResultPage = () => {
  const navigation = useNavigation();
  const keyword = useRoute().params?.keyword || '';
  const resultData = dummy_article
    .filter(article => article.title.includes(keyword) || article.contents.includes(keyword))
    .map(article => {
      const articleUser = dummy_user.find(user => user.id === article.userId);

      return {
        ...article,
        authorName: articleUser.name,
        authorImage: articleUser.profileImage || DummyProfileImg,
      };
    });

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="검색 결과" />
      <TouchableOpacity style={styles.inputContainer} onPress={() => navigation.goBack()}>
        <View style={styles.searchKeyword}>
          <Text style={fontStyles.grayFont02}>{keyword}</Text>
        </View>
        <SearchIcon />
      </TouchableOpacity>
      {resultData.length ? (
        <FlatList
          style={styles.articleCardWrapper}
          data={resultData}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ArticleCard item={item} />}
          scrollEventThrottle={20}
          contentContainerStyle={styles.flatListBottomPadding}
        />
      ) : (
        <View style={styles.noResultData}>
          <Text style={fontStyles.basicFont02}>검색 결과가 없습니다.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: { marginBottom: 80 },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  searchKeyword: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 24,
    fontSize: 16,
    fontWeight: '400',
    color: color.TEXT_SECONDARY,
    backgroundColor: color.GRAY_50,
    borderRadius: 20,
  },
  recentHistoryWrapper: {
    marginHorizontal: 24,
    gap: 16,
  },
  recentHistoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchHistoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonArea: { paddingVertical: 8 },
  articleCardWrapper: {
    marginHorizontal: 20,
  },
  flatListBottomPadding: {
    paddingBottom: 64,
  },
  noResultData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommmunitySearchResultPage;
