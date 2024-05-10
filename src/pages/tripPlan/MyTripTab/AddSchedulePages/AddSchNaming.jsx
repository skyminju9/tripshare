import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';

const AddSchNaming = () => {
  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader title="나의 여행 일정 추가" />

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={fontStyles.title02}>여행의 이름을 지어주세요</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="제목을 입력하세요."
              placeholderTextColor={color.GRAY_300}
              style={[fontStyles.basicFont02, styles.textInput]}
            />
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
    marginVertical: 20,
  },
  inputContainer: {
    height: 50,
    backgroundColor: color.WHITE,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: color.GRAY_50,
    paddingHorizontal: 16,
    marginBottom: 20,
    justifyContent: 'center',
  },
});

export default AddSchNaming;
