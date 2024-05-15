import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PlanList from '../../../components/ExploreTabComponents/PlanList';
import DiaryList from '../../../components/ExploreTabComponents/DiaryList';
import RightArrow from '../../../assets/icons/myTrip/arrow_right.svg';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import { DummyDiaryData } from '../../../dummyData';
import { DummyPlanData } from '../../../dummyData';

const Explore = () => {
  const navigation = useNavigation();

  const handleMorePress1 = () => {
    navigation.navigate('HotPlan');
  };

  const handleMorePress2 = () => {
    navigation.navigate('HotDiary');
  };

  const top3Plans = DummyPlanData.slice(0, 3);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.categoryArea}>
          <View style={styles.categoryTextArea}>
            <Text style={fontStyles.title02}>실시간 인기 계획</Text>
            <TouchableOpacity style={styles.myTripMore} onPress={handleMorePress1}>
              <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>더보기</Text>
              <RightArrow width={24} height={24} />
            </TouchableOpacity>
          </View>
          <PlanList data={top3Plans} />
        </View>

        <View style={styles.categoryArea}>
          <View style={styles.categoryTextArea}>
            <Text style={fontStyles.title02}>실시간 인기 기록</Text>
            <View style={styles.moreArea}>
              <TouchableOpacity style={styles.myTripMore} onPress={handleMorePress2}>
                <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
                  더보기
                </Text>
                <RightArrow width={24} height={24} />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <DiaryList data={DummyDiaryData} />
          </ScrollView>
        </View>
      </View>
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
  myTripMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    width: 8,
    height: 8,
  },
});

export default Explore;
