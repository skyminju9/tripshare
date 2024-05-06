import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image } from 'react-native';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import BasicHeader from '../../../components/BasicHeader';
import DiaryListBig from './ExploreComponents/DiaryListBig';
import DiaryReply from './ExploreComponents/DiaryReply';
import ReplyRegister from '../../../assets/icons/Explore/replyregister.png';

const DiaryDetail = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader text="기록 상세보기" />
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
        <View style={styles.commentAddArea}>
          <View style={styles.commentBox}>
            <Text style={[fontStyles.basicFont02, { color: color.BLUE_500 }]}>
              댓글을 작성해 주세요
            </Text>
          </View>

          <Image source={ReplyRegister} style={styles.replyRegister} />
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
  commentAddArea: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 62,
    borderTopWidth: 1,
    borderTopColor: color.BLUE_30,
    padding: 16,
    alignItems: 'center',
  },
  commentBox: {
    flex: 1,
    height: 30,
    backgroundColor: '#ECF2FF',
    borderRadius: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  replyRegister: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
});

export default DiaryDetail;
