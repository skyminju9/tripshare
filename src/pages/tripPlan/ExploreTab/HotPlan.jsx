import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import BasicHeader from '../../../components/BasicHeader';
import SearchBarIcon from '../../../assets/icons/Explore/searchbaricon.png';
import HeartIcon from '../../../assets/icons/Explore/heart.png';
import HeartIconFilled from '../../../assets/icons/Explore/heartfilled.png';
import BookmarkIcon from '../../../assets/icons/Explore/bookmark.png';
import BookmarkIconFilled from '../../../assets/icons/Explore/bookmarkfilled.png';
import { useNavigation } from '@react-navigation/native';
import { DummyPlanData } from '../../../dummyData';

const HotPlan = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [likedItems, setLikedItems] = useState({});
  const [bookmarkedItems, setBookmarkedItems] = useState({});

  const items = [
    { label: '최신순', value: 'latest' },
    { label: '인기순', value: 'popular' },
  ];

  const handleFocus = () => {
    setIsSearchFocused(true);
  };

  const handleBlur = () => {
    setIsSearchFocused(false);
  };

  const handleDetailPress = () => {
    navigation.navigate('PlanDetail');
  };

  const handleLikePress = id => {
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleBookmarkPress = id => {
    setBookmarkedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={handleDetailPress} style={styles.planListbox}>
      <Text style={fontStyles.basicFont01}>{item.title}</Text>
      <View style={styles.bottomArea}>
        <View style={styles.hashTagArea}>
          {item.tags.map((tag, index) => (
            <View key={index} style={styles.hashTag}>
              <Text style={[fontStyles.basicFont02, { color: color.BLUE_600 }]}>#{tag}</Text>
            </View>
          ))}
        </View>
        <View style={styles.statsArea}>
          <View style={styles.statsContainer}>
            <TouchableOpacity onPress={() => handleLikePress(item.id)}>
              <Image
                source={likedItems[item.id] ? HeartIconFilled : HeartIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.statsText1}>{item.likes}</Text>
          </View>
          <View style={styles.statsContainer}>
            <TouchableOpacity onPress={() => handleBookmarkPress(item.id)}>
              <Image
                source={bookmarkedItems[item.id] ? BookmarkIconFilled : BookmarkIcon}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.statsText2}>{item.bookmarks}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="실시간 인기 계획" />
      <View style={styles.container}>
        <View style={[styles.searchBar, isSearchFocused && styles.searchBarFocused]}>
          <Image source={SearchBarIcon} style={styles.searchBarIcon} />
          <TextInput
            style={[fontStyles.basicFont02, styles.textInput]}
            placeholder="계정 또는 키워드로 검색"
            value={searchText}
            onChangeText={setSearchText}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        {isSearchFocused && (
          <View style={styles.hashTagArea}>
            <View style={styles.hashTag}>
              <Text style={styles.hashText}>#축제</Text>
            </View>
            <View style={styles.hashTag}>
              <Text style={styles.hashText}>#쇼핑</Text>
            </View>
            <View style={styles.hashTag}>
              <Text style={styles.hashText}>#디즈니랜드</Text>
            </View>
          </View>
        )}
        <DropDownPicker
          open={open}
          value={selectedOption}
          items={items}
          setOpen={setOpen}
          setValue={setSelectedOption}
          placeholder="인기순"
          style={styles.dropdownContainer}
          dropDownContainerStyle={styles.pickerStyle}
          listItemContainerStyle={styles.listItemContainerStyle}
        />

        {!isSearchFocused && (
          <FlatList
            data={DummyPlanData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.planListContainer}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 30,
    backgroundColor: '#ECF2FF',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  searchBarFocused: {
    borderColor: color.BLUE_500,
    borderWidth: 1,
  },
  searchBarIcon: {
    width: 16,
    height: 16,
    marginHorizontal: 8,
  },
  textInput: {
    flex: 1,
    padding: 0,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 0,
    alignSelf: 'flex-end',
    width: 100,
    minHeight: 30,
  },
  pickerStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: 100,
    minHeight: 30,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  listItemContainerStyle: {
    justifyContent: 'center',
    height: 30,
  },
  planListContainer: {
    marginVertical: 8,
    width: '100%',
    flex: 1,
  },
  planListbox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    marginBottom: 8,
    padding: 12,
  },
  bottomArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  hashTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
    marginRight: 4,
    backgroundColor: '#CBDDFF',
    borderRadius: 24,
  },
  hashTagArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  statsArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    gap: 2,
  },
  icon: {
    width: 16,
    height: 16,
  },
  statsText1: {
    color: '#FF5E5E',
    fontSize: 14,
    letterSpacing: -0.28,
  },
  statsText2: {
    color: '#0041CB',
    fontSize: 14,
    letterSpacing: -0.28,
  },
  hidden: {
    display: 'none',
  },
  hashText: {
    fontWeight: '300',
    fontSize: 14,
    letterSpacing: -0.28,
    color: '#002676',
  },
});

export default HotPlan;
