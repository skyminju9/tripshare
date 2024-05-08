import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import regionsData from '../../../../PrimaryRegions.json';
import LocationSearchIcon from '../../../../assets/icons/myTrip/locationsearch.png';
import CloseIcon from '../../../../assets/icons/myTrip/closeicon.png';

const AddSchWhere = () => {
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredRegions, setFilteredRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  const onTextChanged = text => {
    setSearchText(text);
    setShowSuggestions(text.length > 0);
    updateFilteredRegions(text);
  };

  const updateFilteredRegions = text => {
    const newFilteredRegions = [];

    for (const country in regionsData) {
      if (country.toLowerCase() === text.toLowerCase()) {
        const countryWithAllRegions = regionsData[country].map(region => `${country}, ${region}`);
        newFilteredRegions.unshift(country);
        newFilteredRegions.push(...countryWithAllRegions);
      } else if (country.toLowerCase().startsWith(text.toLowerCase())) {
        newFilteredRegions.unshift(country);
      } else {
        const matchingRegions = regionsData[country].filter(region =>
          region.toLowerCase().startsWith(text.toLowerCase()),
        );
        newFilteredRegions.push(...matchingRegions.map(region => `${country}, ${region}`));
      }
    }

    setFilteredRegions(newFilteredRegions);
  };

  const handleRegionSelect = region => {
    setSelectedRegion(region);
    setShowSuggestions(false);
    setSearchText(region);
  };

  const handleReset = () => {
    setSelectedRegion('');
    setSearchText('');
  };

  const renderSuggestions = () => {
    if (!searchText || !showSuggestions || filteredRegions.length === 0) {
      return null;
    }

    return (
      <FlatList
        data={filteredRegions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleRegionSelect(item)}>
            <Text style={[styles.text, item === selectedRegion]}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    );
  };

  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={fontStyles.title02}>어디로 떠나시나요?</Text>
          </View>
          <View style={[styles.inputContainer, selectedRegion && styles.selectedInputContainer]}>
            <TextInput
              placeholder="국가나 지역을 검색하세요"
              onChangeText={onTextChanged}
              value={searchText}
              onFocus={() =>
                setShowSuggestions(searchText.length > 0 && filteredRegions.length > 0)
              }
              style={[
                styles.input,
                selectedRegion ? { color: color.WHITE } : { color: 'black' }, // 선택된 지역이 있으면 흰색, 없으면 검은색
              ]}
            />
            {selectedRegion ? (
              <TouchableOpacity onPress={handleReset}>
                <Image source={CloseIcon} style={{ width: 26, height: 26 }} />
              </TouchableOpacity>
            ) : (
              <Image source={LocationSearchIcon} style={{ width: 26, height: 26 }} />
            )}
          </View>
          {showSuggestions && filteredRegions.length > 0 && (
            <View style={styles.suggestionsContainer}>{renderSuggestions()}</View>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
  },
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: color.BLUE_30,
  },
  titleContainer: {
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedInputContainer: {
    backgroundColor: color.BLUE_200, // 선택된 영역의 배경색
  },
  input: {
    flex: 1, // 인풋을 늘리기 위해 추가
    color: 'black', // 입력된 텍스트 색상
  },
  suggestionsContainer: {
    maxHeight: 200,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  text: {
    ...fontStyles.basicFont02,
    marginVertical: 8,
    color: 'black', // 기본 텍스트 색상
  },
});

export default AddSchWhere;
