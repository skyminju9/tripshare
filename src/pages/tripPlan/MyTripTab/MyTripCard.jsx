import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PeopleIcon } from '../../../assets/index';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
const dummyCoverImage = require('../../../assets/images/myTrip/basicimage1.jpeg');

const MyTripCard = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MyTripDetail', { params: item.id })}
      style={styles.tripPlanCard}>
      <View style={styles.planCoverImageWrapper}>
        <Image source={dummyCoverImage} resizeMode="cover" style={styles.planCoverImage} />
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
          {item.dDay > 0 ? (
            <Text style={fontStyles.title01}>D - {item.dDay}</Text>
          ) : item.dDay == 0 ? (
            <Text style={fontStyles.title01}>D - day</Text>
          ) : (
            <Text style={fontStyles.title01}>D + {item.dDay * -1}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tripPlanCard: {
    width: 200,
    height: 280,
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
  planCoverImage: { width: 200, height: 150 },
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
});

export default MyTripCard;
