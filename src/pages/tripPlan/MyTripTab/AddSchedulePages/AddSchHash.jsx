import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import fontStyles from '../../../../styles/fontStyles';
import { useNavigation } from '@react-navigation/native';
import color from '../../../../styles/colorPalette';
import PlusIcon from '../../../../assets/icons/myTrip/plusicon.png';
import { BlueButton, GrayButton } from '../../../../components/BasicButtons';
import { useSchedule } from '../../../../contexts/ScheduleContext';

const AddSchHash = () => {
  const { currentSchedule, setCurrentSchedule } = useSchedule();
  const [hashTags, setHashTags] = useState(currentSchedule.hashtags || []);
  const [hashTagInput, setHashTagInput] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    if (currentSchedule.hashtags) {
      setHashTags(currentSchedule.hashtags);
    }
  }, [currentSchedule.hashtags]);

  const handleNextPress = () => {
    if (hashTags.length > 0) {
      setCurrentSchedule(prev => ({ ...prev, hashtags: hashTags }));
      navigation.navigate('AddSchComplete');
    }
  };

  const handlePreviousPress = () => {
    navigation.goBack();
  };

  const handleAddHashTag = () => {
    const inputHashTag = hashTagInput.trim();
    if (inputHashTag && !hashTags.includes(inputHashTag)) {
      const updatedHashTags = [...hashTags, inputHashTag];
      setHashTags(updatedHashTags);
      setHashTagInput('');
    }
  };

  const handleDeleteHashTag = tag => {
    const updatedTags = hashTags.filter(item => item !== tag);
    setHashTags(updatedTags);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={[fontStyles.title02]}>나의 여행을 위한 해시태그를 작성해 보세요.</Text>
        </View>
        <View style={{ marginVertical: 12 }}>
          <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
            좀 더 기억에 남을 여행 계획이 될 거예요.
          </Text>
        </View>
        <View style={styles.hashStatusBar}>
          <TextInput
            placeholder="해시태그를 입력하세요."
            placeholderTextColor={color.GRAY_300}
            value={hashTagInput}
            onChangeText={setHashTagInput}
            onSubmitEditing={handleAddHashTag}
            style={{ flex: 1 }}
          />
          <TouchableOpacity style={styles.plusIconContainer} onPress={handleAddHashTag}>
            <Image source={PlusIcon} style={{ width: 26, height: 26 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.selectedHashTagsContainer}>
          {hashTags.map(tag => (
            <View key={tag} style={styles.selectedHashTag}>
              <Text style={[fontStyles.basicFont02, { color: color.WHITE }]}>#{tag}</Text>
              <TouchableOpacity onPress={() => handleDeleteHashTag(tag)}>
                <Text
                  style={[
                    fontStyles.basicFont02,
                    { color: color.GRAY_50, marginLeft: 4, marginBottom: 2 },
                  ]}>
                  ×
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <GrayButton title="이전" onPress={handlePreviousPress} />
          <BlueButton title="다음" onPress={handleNextPress} disabled={hashTags.length === 0} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.BLUE_30,
    padding: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  main: {
    flex: 1,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  hashStatusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
  },
  plusIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  selectedHashTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  selectedHashTag: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
    borderRadius: 10,
    backgroundColor: color.BLUE_500,
    flexDirection: 'row',
  },
  footer: {},
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 5,
    gap: 0,
  },
});

export default AddSchHash;
