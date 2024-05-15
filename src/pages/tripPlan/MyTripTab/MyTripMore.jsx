import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { dummy_plans } from '../../../dummyData';
import BasicHeader from '../../../components/BasicHeader';
import { PeopleIcon } from '../../../assets';
import { APP_WIDTH } from '../../../constants';

const MyTripMore = () => {
  const plans = dummy_plans.filter(item => item.dDay < 0);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardsBottom}>
        <TouchableOpacity style={styles.tripPlanCard}>
          <View style={styles.planCoverImageWrapper}>
            <Image source={item.coverImage} resizeMode="cover" style={styles.planCoverImage} />
          </View>
          <View style={styles.planDescriptWrapper}>
            <Text style={fontStyles.title03}>{item.title}</Text>
            <View style={styles.planDatesWrapper}>
              <Text style={fontStyles.basicFont02}>
                {item.dates[0]} ~ {item.dates[1]}
              </Text>
              <View style={styles.planFriendsWrapper}>
                <PeopleIcon width={24} height={24} />
                {item.friendList.map((friend, friendId) => (
                  <Text key={friendId} style={fontStyles.basicFont02}>
                    {friend.name}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.planDdayWrapper}>
              <Text style={fontStyles.title01}>D + {item.dDay * -1}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title={'지난 여행'} />
      <View style={styles.myPastTripsContainer}>
        <FlatList
          data={plans}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  myPastTripsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    marginBottom: 48,
  },
  tripPlanCard: {
    width: APP_WIDTH - 100,
    height: 300,
    marginRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: color.GRAY_50,
  },
  planCoverImageWrapper: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  planCoverImage: { width: APP_WIDTH - 100, height: 150 },
  planDescriptWrapper: {
    flex: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
    backgroundColor: color.WHITE,
    paddingVertical: 12,
    paddingLeft: 16,
    paddingRight: 8,
    gap: 12,
  },
  planDatesWrapper: { gap: 6 },
  planFriendsWrapper: { flexDirection: 'row', gap: 2, alignItems: 'center' },
  planDdayWrapper: { alignItems: 'flex-end' },
  cardsBottom: { marginBottom: 8 },
});
export default MyTripMore;
