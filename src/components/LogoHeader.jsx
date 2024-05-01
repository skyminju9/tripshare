import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import NotiIcon from '../assets/icons/header/notification.svg';
import LogoIcon from '../assets/icons/header/blue_logo.svg';
import DropDownIcon from '../assets/icons/header/arrow_drop_down.svg';

const LogoHeader = ({ location }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.halfSection}>
        <TouchableOpacity style={styles.locationDropdown}>
          <Text style={styles.locationText}>{location}</Text>
          <DropDownIcon width={32} height={32} />
        </TouchableOpacity>
        <LogoIcon width={52} height={52} />
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
  },
  halfSection: { flexDirection: 'row', gap: 82 },
  locationDropdown: { flexDirection: 'row', alignItems: 'center' },
  locationText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    letterSpacing: -0.4,
  },
});

export default LogoHeader;
