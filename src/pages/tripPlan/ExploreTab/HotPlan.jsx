import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, ScrollView, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import BasicHeader from '../../../components/BasicHeader';
import SearchBarIcon from '../../../assets/icons/Explore/searchbaricon.png';
import PlanList from '../../../components/ExploreTabComponents/PlanList';

const HotPlan = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="실시간 인기 계획" />
      <View style={styles.container}>
        <View style={[styles.searchBar, isSearchFocused && styles.searchBarFocused]}>
          <Image source={SearchBarIcon} style={styles.icon} />
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

        <ScrollView>
          <View style={[styles.planListContainer, isSearchFocused && styles.hidden]}>
            {[...Array(9)].map((_, index) => (
              <PlanList key={index} id={index} />
            ))}
          </View>
        </ScrollView>
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
  icon: {
    width: 20,
    height: 20,
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
    alignItems: 'center',
    marginVertical: 8,
  },
  hidden: {
    display: 'none',
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
  hashText: {
    fontWeight: '300',
    fontSize: 14,
    letterSpacing: -0.28,
    color: '#002676',
  },
  hashTagArea: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
});

export default HotPlan;
