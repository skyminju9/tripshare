import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';
import PlusIcon from '../../../../assets/icons/myTrip/plusicon.png';

const AddSchHash = () => {
  const [hashTags, setHashTags] = useState([]);
  const handleAddHashTag = () => {
    const inputHashTag = hashTagInput.trim();
    if (inputHashTag) {
      setHashTags([...hashTags, inputHashTag]);
      setHashTagInput('');
    }
  };

  const handleDeleteHashTag = tag => {
    const updatedTags = hashTags.filter(item => item !== tag);
    setHashTags(updatedTags);
  };

  const [hashTagInput, setHashTagInput] = useState('');

  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader text="나의 여행 일정 추가" />

        <View style={styles.container}>
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
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
  },
  container: {
    height: '100%',
    padding: 20,
    backgroundColor: color.BLUE_30,
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
  },
  plusIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  selectedHashTagsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  selectedHashTag: {
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginRight: 6,
    borderRadius: 10,
    borderStyle: 'solid',
    backgroundColor: color.BLUE_500,
    flexDirection: 'row',
  },
});

export default AddSchHash;
