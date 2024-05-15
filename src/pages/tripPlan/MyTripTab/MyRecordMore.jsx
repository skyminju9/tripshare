import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BasicHeader from '../../../components/BasicHeader';
import DiaryListBig from '../../../components/ExploreTabComponents/DiaryListBig';
import { useNavigation } from '@react-navigation/native';

const MyRecordMore = () => {
  const navigation = useNavigation();
  const handleDetailPress = () => {
    navigation.navigate('DiaryDetail');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="나의 여행 기록" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {[...Array(6)].map((_, index) => (
            <TouchableOpacity key={index} onPress={handleDetailPress}>
              <DiaryListBig />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
  },
});

export default MyRecordMore;
