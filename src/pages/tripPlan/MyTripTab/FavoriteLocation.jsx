import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { dummy_locations } from '../../../dummyData';
import BasicHeader from '../../../components/BasicHeader';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import Toast from 'react-native-toast-message';
import { CheckIcon } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const favoriteLocations = dummy_locations.filter(item => item.isFavorite == true);

const FavoriteLocation = ({ route }) => {
  const navigation = useNavigation();

  const [selectedLocation, setSelectedLocation] = useState();
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
      <BasicHeader
        title={'저장한 장소'}
        rightComponent={
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddSchedule', { params: [date, selectedLocation] })
            }>
            {selectedLocation && <CheckIcon />}
          </TouchableOpacity>
        }
      />
      <FlatList
        data={favoriteLocations}
        renderItem={renderItem}
        keyExtractor={item => item.locationId}
      />
      <Toast />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  location: {
    borderBottomColor: color.GRAY_50,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    gap: 4,
  },
});

export default FavoriteLocation;
