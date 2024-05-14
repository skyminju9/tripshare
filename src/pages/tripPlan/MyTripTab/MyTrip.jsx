import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import PlusIcon from '../../../assets/icons/myTrip/add.svg';
import shadowStyles from '../../../styles/shadowStyles';
import MyTripCard from './MyTripCard';
import { dummy_plans } from '../../../dummyData';
import { useNavigation } from '@react-navigation/native';
import MyRecordCard from './MyRecordCard';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import SeeMoreBtn from '../../../components/SeeMoreBtn';

const dummyRecords = [
  {
    id: 1,
    title: '오사카 마지막 날!',
    like: 120,
    bookmark: 22,
  },
  {
    id: 2,
    title: '오사카 마지막 날!',
    like: 120,
    bookmark: 22,
  },
  {
    id: 3,
    title: '오사카 마지막 날!',
    like: 120,
    bookmark: 22,
  },
  {
    id: 4,
    title: '오사카 마지막 날!',
    like: 120,
    bookmark: 22,
  },
];

const MyTrip = () => {
  const navigation = useNavigation();
  const renderPlan = ({ item }) => {
    return <MyTripCard item={item} />;
  };

  const renderRecord = ({ item }) => {
    return <MyRecordCard item={item} />;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.myTripPlanContainer}>
        <View style={styles.myTripContainer}>
          <View style={styles.titleWrapper}>
            <View style={styles.titlesContainer}>
              <Text style={fontStyles.title03}>나의 여행 일정</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddScheduleMain')}>
                <PlusIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View>
              <SeeMoreBtn address={'MyTripMore'} />
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <FlatList
              data={dummy_plans}
              renderItem={renderPlan}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View>
          <View style={styles.titleWrapper}>
            <View style={styles.titlesContainer}>
              <Text style={fontStyles.title03}>나의 여행 기록</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AddMyRecord')}>
                <PlusIcon width={24} height={24} />
              </TouchableOpacity>
            </View>
            <View>
              <SeeMoreBtn address={'MyRecordMore'} />
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <FlatList
              data={dummyRecords}
              renderItem={renderRecord}
              keyExtractor={item => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.WHITE,
  },
  myTripContainer: { marginBottom: 36 },
  myTripPlanContainer: { marginTop: 36, marginHorizontal: 24, marginBottom: 100 },
  titleWrapper: { flexDirection: 'row', justifyContent: 'space-between' },
  titlesContainer: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  more: { flexDirection: 'row', alignItems: 'center', marginRight: 12 },
  cardsContainer: [shadowStyles.smallShadow, { marginTop: 16 }],
});

export default MyTrip;
