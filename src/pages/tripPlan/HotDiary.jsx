import React from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import BasicHeader from '../../components/BasicHeader';
import DiaryListBig from './ExploreComponents/DiaryListBig';
import { useNavigation } from '@react-navigation/native'; // 추가

const HotDiary = () => {
  const navigation = useNavigation();
  const handleDetailPress = () => {
    navigation.navigate('DiaryDetail');
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader />
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleDetailPress}>
            <DiaryListBig />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDetailPress}>
            <DiaryListBig />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDetailPress}>
            <DiaryListBig />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDetailPress}>
            <DiaryListBig />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDetailPress}>
            <DiaryListBig />
          </TouchableOpacity>
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

export default HotDiary;
