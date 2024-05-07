import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import BasicHeader from '../../../components/BasicHeader';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';

const AddSchComplete = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={styles.wrapper}>
      <SafeAreaView />
      <BasicHeader text="나의 여행 일정 추가" backToScreen="TripPlan" />
      <View style={styles.container}>
        <View>
          <Text style={[fontStyles.title01, { marginVertical: 20 }]}>
            여행 일정 등록이 완료되었어요.
          </Text>
        </View>
        <View>
          <Text style={[fontStyles.basicFont02, { color: color.TEXT_SECONDARY }]}>
            여행 일정 페이지로 이동해 더 자세한 계획을 세워보세요.
          </Text>
        </View>
        <TouchableOpacity style={styles.completeButton}>
          <Text style={[fontStyles.title03, { color: color.WHITE }]}>
            마이 트립 메인으로 돌아가기
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: color.BLUE_30 }}>
        <SafeAreaView />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.BLUE_30,
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
