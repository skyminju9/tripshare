import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NotiIcon from '../assets/icons/header/notification.svg';
import LogoIcon from '../assets/icons/header/blue_logo.svg';
import DropDownIcon from '../assets/icons/header/arrow_drop_down.svg';
import fontStyles from '../styles/fontStyles';

const LogoHeader = ({ location }) => {
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.locationDropdown}>
        <Text style={fontStyles.title03}>{location}</Text>
        <DropDownIcon width={32} height={32} />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', position: 'absolute', left: 170 }}>
        <View>
          <LogoIcon width={52} height={52} />
        </View>
      </View>

      <TouchableOpacity>
        <NotiIcon width={28} height={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 4,
    height: 60,
  },
  locationDropdown: { flexDirection: 'row', alignItems: 'center' },
});

export default LogoHeader;
