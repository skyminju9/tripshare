import React, { useState } from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import data from '../PrimaryRegions.json';
import { useLocation } from '../contexts/LocationContext';

const Dropdown = ({ showModal, setShowModal, handleCloseModal }) => {
  const {
    selectedCountry: currentCountry,
    selectedCity: currentCity,
    setSelectedCountry,
    setSelectedCity,
  } = useLocation();
  const [selectedCountryTemp, setSelectedCountryTemp] = useState(currentCountry);
  const [selectedCityTemp, setSelectedCityTemp] = useState(currentCity);
  const [countryConfirmed, setCountryConfirmed] = useState(false);

  const handleCountryChange = country => {
    setSelectedCountryTemp(country);
    setSelectedCityTemp('');
    setCountryConfirmed(false);
  };

  const confirmSelection = () => {
    if (data[selectedCountryTemp] && data[selectedCountryTemp].length > 0) {
      setCountryConfirmed(true);
    } else {
      alert('No city data available for this country. Please choose another country.');
    }
  };

  const handleCityChange = city => {
    setSelectedCityTemp(city);
  };

  const handlePrevious = () => {
    setCountryConfirmed(false);
    setSelectedCityTemp('');
  };

  const handleCancel = () => {
    setShowModal(false);
    setSelectedCountryTemp('');
    setSelectedCityTemp('');
    setCountryConfirmed(false);
  };

  const handleComplete = () => {
    handleCloseModal();
    setSelectedCountry(selectedCountryTemp);
    setSelectedCity(selectedCityTemp);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={handleCancel}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContent}>
          {!countryConfirmed ? (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCountryTemp}
                onValueChange={handleCountryChange}
                style={styles.picker}>
                <Picker.Item label="국가 선택" value="" />
                {Object.keys(data).map(country => (
                  <Picker.Item key={country} label={country} value={country} />
                ))}
              </Picker>
              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={handleCancel}>
                  <Text>취소</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={confirmSelection}>
                  <Text>선택</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCityTemp}
                onValueChange={handleCityChange}
                style={styles.picker}>
                <Picker.Item label="도시 선택" value="" />
                {data[selectedCountryTemp].map(city => (
                  <Picker.Item key={city} label={city} value={city} />
                ))}
              </Picker>
              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={handlePrevious} style={styles.button}>
                  <Text>이전</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleComplete} style={styles.button}>
                  <Text>완료</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 350,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 30,
  },
  pickerContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  picker: {
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Dropdown;
