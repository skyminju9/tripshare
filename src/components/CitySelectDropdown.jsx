import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
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
      onRequestClose={handleCancel}
      style={styles.modal}>
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
  modal: {},
  modalContent: {
    width: 350,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 30,
    maxHeight: '50%', // 모달의 최대 높이를 설정합니다.
  },
  pickerContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  picker: {
    marginBottom: 10,
    maxHeight: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
  },
});

export default Dropdown;
