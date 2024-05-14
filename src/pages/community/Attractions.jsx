import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import BasicHeader from '../../components/BasicHeader';
import { AttractionMapIcon, RightArrowIcon } from '../../assets';
import ArticleTagList from './ArticleTagList';
import { dummy_attractions } from '../../dummyData';

const tags = ['맛집', '명소'];

const Attractions = ({ navigation }) => {
  const [attractionList, setAttractionList] = useState();

  const initialAttraction = dummy_attractions;

  useEffect(() => {
    setAttractionList(initialAttraction);
  }, []);

  const onPressTag = useCallback(activeTag => {
    if (activeTag) {
      setAttractionList(initialAttraction.filter(attraction => attraction.tag === activeTag));
    } else setAttractionList(initialAttraction);
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('AttractionDetail', { params: item })}
        style={styles.placeCard}>
        <Image source={item.coverImage} style={styles.coverImageStyle} />
        <View style={styles.infoWrapper}>
          <View style={styles.placNameWrapper}>
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
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader
        title={'맛집/명소'}
        rightComponent={
          <TouchableOpacity style={{ margin: 8 }}>
            <AttractionMapIcon />
          </TouchableOpacity>
        }
      />
      <ArticleTagList tags={tags} onPressTag={onPressTag} />
      <View style={styles.placeCardsWrapper}>
        <FlatList
          data={attractionList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
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
  placNameWrapper: { flexDirection: 'row' },
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

export default Attractions;
