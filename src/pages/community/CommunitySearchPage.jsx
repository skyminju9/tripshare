import React, { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import BasicHeader from '../../components/BasicHeader';
import { SearchIcon } from '../../assets';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';

const RecentSearchHistory = ({ item, onClickKeyword, deleteItem }) => {
  return (
    <View style={styles.searchHistoryContainer}>
      <TouchableOpacity style={styles.buttonArea} onPress={onClickKeyword}>
        <Text style={fontStyles.basicFont01}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonArea} onPress={deleteItem}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const CommunitySearchPage = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');
  const [recentHistory, setRecentHistory] = useState([
    '디즈니랜드',
    '도쿄여행',
    '도쿄',
    '여행',
    '디즈니',
  ]);

  const registerRecentHistory = keyword => {
    setRecentHistory(Array.from(new Set([keyword, ...recentHistory])).slice(0, 7));
  };

  const submitKeyword = keyword => {
    if (!keyword) return alert('검색어를 입력해 주세요.');
    if (keyword.length <= 1) return alert('검색어를 2자 이상 입력해 주세요.');
    registerRecentHistory(keyword);
    setKeyword('');
    navigation.navigate('CommunitySearchResultPage', {
      keyword,
    });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="글 검색" />
      {/* 검색어 입력창 */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.searchInput}
          returnKeyType="search"
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="none"
          value={keyword}
          onChangeText={setKeyword}
          autoFocus
          onSubmitEditing={() => submitKeyword(keyword)}
        />
        <TouchableOpacity onPress={() => submitKeyword(keyword)}>
          <SearchIcon />
        </TouchableOpacity>
      </View>
      {/* 최근 검색기록 */}
      <View style={styles.recentHistoryWrapper}>
        <View style={styles.recentHistoryHeader}>
          <Text style={fontStyles.boldFont01}>최근 검색어</Text>
          <TouchableOpacity onPress={() => setRecentHistory([])}>
            <Text style={fontStyles.basicFont02}>전체 삭제</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recentHistory}
          renderItem={({ item, index }) => {
            return (
              <RecentSearchHistory
                item={item}
                onClickKeyword={() => {
                  submitKeyword(item);
                }}
                deleteItem={() => {
                  setRecentHistory(
                    recentHistory.filter(
                      (_item, recentHistoryIndex) => recentHistoryIndex !== index,
                    ),
                  );
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 24,
    fontSize: 16,
    fontWeight: '400',
    color: color.TEXT_SECONDARY,
    backgroundColor: color.BLUE_30,
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
});

export default CommunitySearchPage;
