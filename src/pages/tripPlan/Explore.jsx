import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import PlanList from './ExploreComponents/PlanList';
import DiaryList from './ExploreComponents/DiaryList';

const Explore = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.categoryArea1}>
        <View style={styles.categoryTextArea}>
          <Text style={styles.categoryTitle}>실시간 인기 계획</Text>
          <Text style={styles.moreViewText}>더보기..</Text>
        </View>
        <View style={styles.planListContiner}>
          <PlanList />
          <PlanList />
          <PlanList />
        </View>
      </View>

      <View style={styles.categoryArea2}>
        <View style={styles.categoryTextArea}>
          <Text style={styles.categoryTitle}>실시간 인기 기록</Text>
          <Text style={styles.moreViewText}>더보기..</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  categoryArea1: {
    flex: 1,
    padding: 20,
    marginBottom: 30,
  },
  categoryArea2: {
    padding: 20,
    flex: 1,
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

