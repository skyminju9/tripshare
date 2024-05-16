import React from 'react';
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

const SearchLocationList = ({ navigation }) => {
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
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={36} height={36} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flex}>
          <TextInput
            placeholder="장소를 검색하세요."
            placeholderTextColor={color.GRAY_200}
            style={fontStyles.basicFont}
            autoCapitalize="none"
            autoComplete="none"
            autoCorrect={false}
            editable={false}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <BlackSearchIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={dummy_locations}
        renderItem={renderItem}
        keyExtractor={item => item.locationId}
      />
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

export default SearchLocationList;
