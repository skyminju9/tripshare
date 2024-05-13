import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { dummyLocations } from '../../../dummyData';
import BasicHeader from '../../../components/BasicHeader';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';

const favoriteLocations = dummyLocations.filter(item => item.isFavorite == true);

const FavoriteLocationList = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.location}>
        <Text style={fontStyles.title03}>{item.locationName}</Text>
        <Text style={[fontStyles.basicFont01, { color: color.TEXT_SECONDARY }]}>
          {item.locationAddress}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title={'저장한 장소 리스트'} />
      <FlatList
        data={favoriteLocations}
        renderItem={renderItem}
        keyExtractor={item => item.locationId}
      />
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

export default FavoriteLocationList;
