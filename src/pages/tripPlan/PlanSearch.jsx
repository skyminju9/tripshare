import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import BasicHeader from '../../components/BasicHeader';
import SearchBarIcon from '../../assets/icons/Explore/searchbaricon.png';
import PlanList from './ExploreComponents/PlanList';

const PlanSearch = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = useState(false);

  const items = [
    { label: '최신순', value: 'latest' },
    { label: '인기순', value: 'popular' },
  ];

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader />
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <Image source={SearchBarIcon} style={styles.icon} />
          <Text style={[fontStyles.basicFont02, { color: color.BLUE_500 }]}>
            계정 또는 키워드로 검색
          </Text>
        </View>
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
          <View style={styles.planListContainer}>
            <PlanList />

            <PlanList />
            <PlanList />
            <PlanList />
            <PlanList />
            <PlanList />
            <PlanList />
            <PlanList />
            <PlanList />
            <PlanList />
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
    paddingHorizontal: 24,
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
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 0,
    alignSelf: 'flex-end',
    width: 90,
    minHeight: 30,
  },
  pickerStyle: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    width: 90,
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
});

export default PlanSearch;
