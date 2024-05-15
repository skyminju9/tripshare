import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { dummy_locations } from '../../../dummyData';
import { BlackSearchIcon } from '../../../assets/index';
import { BackIcon } from '../../../assets/index';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { CheckIcon } from '../../../assets';

const SearchLocations = ({ route }) => {
  const navigation = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState();
  const [searchWord, setSearchWord] = useState();
  const [show, setShow] = useState(false);

  const date = route.params.params;

  const showToast = () => {
    if (selectedLocation) {
      Toast.show({
        type: 'success',
        text1: `${selectedLocation.locationName}`,
        text2: '장소가 선택되었습니다.',
      });
    }
  };

  const handlePressLocation = item => {
    setSelectedLocation(item);
    setShow(true);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePressLocation(item)} style={styles.location}>
        <Text style={fontStyles.title03}>{item.locationName}</Text>
        <Text style={[fontStyles.basicFont01, { color: color.TEXT_SECONDARY }]}>
          {item.locationAddress}
        </Text>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (show) {
      showToast();
    }
  }, [show]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={36} height={36} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex}>
          <TextInput
            placeholder="장소를 검색하세요."
            placeholderTextColor={color.GRAY_200}
            style={fontStyles.basicFont01}
            autoCapitalize="none"
            autoComplete="none"
            autoCorrect={false}
            onChangeText={text => setSearchWord(text)}
            editable="disable"
          />
        </TouchableOpacity>
        {selectedLocation ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddSchedule', { params: [date, selectedLocation] })
            }>
            <CheckIcon width={32} height={32} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <BlackSearchIcon width={32} height={32} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={dummy_locations}
        renderItem={renderItem}
        keyExtractor={item => item.locationId}
      />
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CBDCFF',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  location: {
    borderBottomColor: color.GRAY_50,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    gap: 4,
  },
});

export default SearchLocations;
