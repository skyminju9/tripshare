import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import NotiIcon from '../assets/icons/header/notification.svg';
import LogoIcon from '../assets/icons/header/blue_logo.svg';
import DropDownIcon from '../assets/icons/header/arrow_drop_down.svg';
import fontStyles from '../styles/fontStyles';
import { useLocation } from '../contexts/LocationContext';
import Dropdown from './CitySelectDropdown';
import color from '../styles/colorPalette';

const LogoHeader = () => {
  const { selectedCountry, selectedCity, setSelectedCountry, setSelectedCity } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [locationText, setLocationText] = useState('지역 선택');

  const handleLocationClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (selectedCountry && selectedCity) {
      setLocationText(`${selectedCity}`);
    } else {
      setLocationText('지역 선택');
    }
  }, [selectedCountry, selectedCity]);

  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity style={styles.locationDropdown} onPress={handleLocationClick}>
        <Text style={fontStyles.title03}>{locationText}</Text>
        <DropDownIcon width={32} height={32} />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <LogoIcon width={52} height={52} />
      </View>
      <TouchableOpacity>
        <NotiIcon width={28} height={28} color={color.TEXT_PRIMARY} />
      </TouchableOpacity>

      {showModal && (
        <Dropdown
          showModal={showModal}
          setShowModal={setShowModal}
          handleCloseModal={handleCloseModal}
        />
      )}
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
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 4,
    height: 60,
    position: 'relative',
  },
  locationDropdown: { flexDirection: 'row', alignItems: 'center' },
  logoContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -6 }],
  },
});

export default LogoHeader;
