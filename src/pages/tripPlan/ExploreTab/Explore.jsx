import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PlanList from '../../../components/ExploreTabComponents/PlanList';
import DiaryList from '../../../components/ExploreTabComponents/DiaryList';
import RightArrow from '../../../assets/icons/myTrip/arrow_right.svg';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';

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
              <Text style={fontStyles.title02}>실시간 인기 계획</Text>
              <TouchableOpacity style={styles.myTripMore} onPress={handleMorePress1}>
                <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
                  더보기
                </Text>
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
  myTripMore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    width: 8,
    height: 8,
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
