import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import regionsData from '../../../../PrimaryRegions.json';
import LocationSearchIcon from '../../../../assets/icons/myTrip/locationsearch.png';
import CloseIcon from '../../../../assets/icons/myTrip/closeicon.png';
import { BlueButton, GrayButton } from '../../../../components/BasicButtons';
import { useTravelSchedule } from '../../../../contexts/TravelScheduleContext'; // 변경된 import 경로

const AddSchWhere = () => {
  const navigation = useNavigation();
  const { currentSchedule, setCurrentSchedule } = useTravelSchedule(); // 변경된 훅 사용
  const [searchText, setSearchText] = useState(currentSchedule.location || '');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredRegions, setFilteredRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(currentSchedule.location || '');

  useEffect(() => {
    setSearchText(currentSchedule.location || '');
    setSelectedRegion(currentSchedule.location || '');
  }, [currentSchedule.location]);

  const onTextChanged = text => {
    setSearchText(text);
    setShowSuggestions(text.length > 0);
    updateFilteredRegions(text);
  };

  const handleNextPress = () => {
    if (selectedRegion) {
      setCurrentSchedule(prev => ({ ...prev, location: selectedRegion }));
      navigation.navigate('AddSchWith');
    }
  };

  const handlePreviousPress = () => {
    navigation.goBack();
  };

  const updateFilteredRegions = text => {
    const countryList = [];
    const cityList = [];
    const lowerCaseText = text.toLowerCase();

    for (const country in regionsData) {
      const countryNameKorean = regionsData[country].국가명.한국어;
      const countryNameLowerCase = countryNameKorean.toLowerCase();

      if (countryNameLowerCase.startsWith(lowerCaseText)) {
        countryList.push(countryNameKorean);

        if (countryNameLowerCase === lowerCaseText) {
          for (const city in regionsData[country].도시들) {
            const cityNameKorean = regionsData[country].도시들[city].한국어;
            cityList.push(`${countryNameKorean}, ${cityNameKorean}`);
          }
        }
      } else {
        for (const city in regionsData[country].도시들) {
          const cityNameKorean = regionsData[country].도시들[city].한국어.toLowerCase();

          if (cityNameKorean.startsWith(lowerCaseText)) {
            cityList.push(`${countryNameKorean}, ${cityNameKorean}`);
          }
        }
      }
    }

    setFilteredRegions([...countryList, ...cityList]);
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
            <Text style={[styles.text, item === selectedRegion && styles.selectedText]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={fontStyles.title02}>어디로 떠나시나요?</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="국가나 지역을 검색하세요"
            placeholderTextColor={color.GRAY_300}
            onChangeText={onTextChanged}
            value={searchText}
            onFocus={() => setShowSuggestions(searchText.length > 0 && filteredRegions.length > 0)}
            style={[styles.input]}
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
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
          <BlueButton title="다음" onPress={handleNextPress} disabled={!selectedRegion} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BLUE_30,
    padding: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  main: {
    flex: 1,
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
    paddingHorizontal: 16,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    color: 'black',
  },
  suggestionsContainer: {
    maxHeight: '50%',
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
    color: 'black',
  },
  selectedText: {
    fontWeight: 'bold',
  },
  footer: {},
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    gap: 0,
  },
});

export default AddSchWhere;
