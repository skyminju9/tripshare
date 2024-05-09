import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import BasicHeader from '../../../../components/BasicHeader';
import fontStyles from '../../../../styles/fontStyles';
import color from '../../../../styles/colorPalette';

const AddSchComplete = () => {
  return (
    <View>
      <SafeAreaView style={styles.wrapper} />

      <SafeAreaView>
        <BasicHeader text="나의 여행 일정 추가" />

        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={fontStyles.title01}>여행 일정 등록이 완료되었어요.</Text>
          </View>
          <View>
            <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
              여행 일정 페이지로 이동해 더 자세한 계획을 세워보세요.
            </Text>
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
  completeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '100%',
    height: 54,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.BLUE_500,
  },
});

export default AddSchComplete;
