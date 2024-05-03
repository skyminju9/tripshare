import React from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import BasicHeader from '../../components/BasicHeader';
import DiaryListBig from './ExploreComponents/DiaryListBig';
import DiaryReply from './ExploreComponents/DiaryReply';

const DiaryDetail = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader />
      <View style={styles.container}>
        <DiaryListBig />
        <View>
          <Text style={[fontStyles.title03, styles.commentText]}>댓글</Text>
        </View>
        <View>
          <DiaryReply />
          <DiaryReply />
          <DiaryReply />
        </View>
      </View>
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
  commentText: {
    paddingLeft: 20,
    paddingVertical: 10,
  },
});

export default DiaryDetail;
