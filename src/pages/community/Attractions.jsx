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
import BasicHeader from '../../components/BasicHeader';
import { AttractionMapIcon, ListIcon, RightArrowIcon } from '../../assets';
import ArticleTagList from '../../components/community/ArticleTagList';
import { dummy_attractions } from '../../dummyData';
import AttractionsList from '../../components/community/AttractionsList';
import AttractionsMap from '../../components/community/AttractionsMap';

const tags = ['맛집', '명소'];

const Attractions = ({ navigation }) => {
  const [attractionList, setAttractionList] = useState();
  const [isMapVisible, setIsMapVisible] = useState(false);

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
          <TouchableOpacity style={{ margin: 8 }} onPress={() => setIsMapVisible(!isMapVisible)}>
            {isMapVisible ? (
              <AttractionMapIcon width={24} height={24} />
            ) : (
              <ListIcon width={24} height={24} />
            )}
          </TouchableOpacity>
        }
      />
      {isMapVisible ? (
        <View style={{ flex: 1 }}>
          <ArticleTagList tags={tags} onPressTag={onPressTag} />
          <AttractionsList attractionList={attractionList} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <AttractionsMap attractionList={attractionList} />
          <View style={styles.attractionMapTagWrapper}>
            <ArticleTagList tags={tags} onPressTag={onPressTag} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  attractionMapTagWrapper: { position: 'absolute' },
});

export default Attractions;
