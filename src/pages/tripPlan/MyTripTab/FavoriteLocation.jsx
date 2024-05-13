import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { dummyLocations } from '../../../dummyData';
import BasicHeader from '../../../components/BasicHeader';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import Toast from 'react-native-toast-message';
import { CheckIcon } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const favoriteLocations = dummyLocations.filter(item => item.isFavorite == true);

const FavoriteLocation = ({ route }) => {
  const navigation = useNavigation();

  const [selectedLocation, setSelectedLocation] = useState();
  const [show, setShow] = useState(false);

  const date = route.params.params;
  console.log(date);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `${selectedLocation.locationName}`,
      text2: '장소가 선택되었습니다.',
    });
  };
  console.log(selectedLocation);

  const renderItem = ({ item }) => {
    const handlePressLocation = () => {
      setSelectedLocation(item);
      setShow(true);
    };

    show && showToast();

    return (
      <TouchableOpacity onPress={handlePressLocation} style={styles.location}>
        <Text style={fontStyles.title03}>{item.locationName}</Text>
        <Text style={[fontStyles.basicFont01, { color: color.TEXT_SECONDARY }]}>
          {item.locationAddress}
        </Text>
      </TouchableOpacity>
    );
  };
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
