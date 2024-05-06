import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PlanList from './ExploreComponents/PlanList';
import DiaryList from './ExploreComponents/DiaryList';
import RightArrow from '../../../assets/icons/myTrip/arrow_right.svg';

const Explore = () => {
  const navigation = useNavigation();
  const [moreView, setMoreView] = useState(false);

  const handleMorePress1 = () => {
    navigation.navigate('HotPlan');
  };

  const handleMorePress2 = () => {
    navigation.navigate('HotDiary');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.categoryArea}>
            <View style={styles.categoryTextArea}>
              <Text style={styles.categoryTitle}>실시간 인기 계획</Text>
              <TouchableOpacity style={styles.myTripMore} onPress={handleMorePress1}>
                <Text>더보기</Text>
                <RightArrow width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.planListContiner}>
              <PlanList />
              <PlanList />
              <PlanList />
            </View>
          </View>

          <View style={styles.categoryArea}>
            <View style={styles.categoryTextArea}>
              <Text style={styles.categoryTitle}>실시간 인기 기록</Text>
              <View style={styles.moreArea}>
                <TouchableOpacity style={styles.myTripMore} onPress={handleMorePress2}>
                  <Text>더보기</Text>
                  <RightArrow width={24} height={24} />
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.diaryListContiner}>
              <DiaryList />
              <DiaryList />
              <DiaryList />
              <DiaryList />
              <DiaryList />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  categoryArea: {
    flex: 1,
    marginBottom: 10,
  },
  categoryTextArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginVertical: 16,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 20,
    letterSpacing: -0.4,
    fontWeight: '500',
  },
  myTripMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    width: 8,
    height: 8,
  },
  moreViewText: {
    fontSize: 14,
    letterSpacing: -0.28,
    color: '#707070',
  },
  planListContiner: {
    flex: 1,
    alignItems: 'center', // 수평 가운데 정렬
  },
  diaryListContiner: {
    flexDirection: 'row',
  },
});

export default Explore;
