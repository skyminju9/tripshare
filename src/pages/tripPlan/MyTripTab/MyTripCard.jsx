import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PeopleIcon } from '../../../assets/index';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import shadowStyles from '../../../styles/shadowStyles';
import moment from 'moment';

export const parseDate = (dateStr, format = 'YY.MM.DD') => {
  return moment(dateStr, format);
};

export const formatDate = (dateStr, inputFormat = 'YYYY-MM-DD', outputFormat = 'YY.MM.DD') => {
  return moment(dateStr, inputFormat).format(outputFormat);
};

export const calculateDday = (startDate, format) => {
  const today = moment().startOf('day');
  const start = parseDate(startDate, format);
  const diff = start.diff(today, 'days');
  return diff;
};

const MyTripCard = ({ item, combinedData }) => {
  const navigation = useNavigation();
  const dateFormat =
    typeof item.id === 'string' && item.id.startsWith('dummy') ? 'YY.MM.DD' : 'YYYY-MM-DD';
  const dDay = calculateDday(item.dates[0], dateFormat);

  const handlePress = () => {
    const updatedItem = { ...item, dDay };
    navigation.navigate('MyTripDetail', { tripId: item.id, combinedData, dDay: updatedItem.dDay });
  };

  return (
    <TouchableOpacity key={item.id} style={styles.tripPlanCard} onPress={handlePress}>
      <View style={styles.planCoverImageWrapper}>
        <Image source={item.coverImage} resizeMode="cover" style={styles.planCoverImage} />
      </View>
      <View style={styles.planDescriptWrapper}>
        <Text style={fontStyles.title03}>{item.title}</Text>
        <View style={styles.planDatesWrapper}>
          <Text style={fontStyles.basicFont02}>
            {item.dates.map(date => formatDate(date, 'YYYY-MM-DD', 'YY.MM.DD')).join(' ~ ')}
          </Text>
          <View style={styles.planFriendsWrapper}>
            <PeopleIcon width={24} height={24} />
            <Text style={fontStyles.basicFont02}>
              {item.friendList.map(friend => friend.name).join(', ')}
            </Text>
          </View>
        </View>
        <View style={styles.planDdayWrapper}>
          {dDay > 0 ? (
            <Text style={styles.planDday}>D - {dDay}</Text>
          ) : dDay === 0 ? (
            <Text style={styles.planDday}>D - day</Text>
          ) : (
            <Text style={styles.planDday}>D + {Math.abs(dDay)}</Text>
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
    ...shadowStyles.smallShadow,
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
  planDday: { ...fontStyles.title01 },
});

export default MyTripCard;
