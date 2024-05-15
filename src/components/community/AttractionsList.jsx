import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import { RightArrowIcon } from '../../assets';

const AttractionsList = ({ attractionList }) => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.placeCard}>
        <Image source={item.coverImage} style={styles.coverImageStyle} />
        <View style={styles.infoWrapper}>
          <View style={styles.placeNameWrapper}>
            <Text style={fontStyles.title03}>{item.placeName}</Text>
            <TouchableOpacity>
              <RightArrowIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.detailWrapper}>
            <Text style={styles.detailText}>{item.detail}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.placeCardsWrapper}>
      <FlatList
        data={attractionList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AttractionsList;

const styles = StyleSheet.create({
  placeCardsWrapper: { padding: 20 },
  placeCard: { flexDirection: 'row', marginBottom: 16 },
  coverImageStyle: {
    width: 160,
    height: 120,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.GRAY_50,
  },
  infoWrapper: { marginHorizontal: 16, gap: 6 },
  placeNameWrapper: { flexDirection: 'row' },
  detailWrapper: {
    width: 180,
    height: 80,
    backgroundColor: color.BLUE_30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 8,
  },
  detailText: [fontStyles.basicFont02, { color: color.TEXT_SECONDARY }],
});
