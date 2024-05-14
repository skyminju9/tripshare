import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import fontStyles from '../../../styles/fontStyles';
import color from '../../../styles/colorPalette';
import BasicHeader from '../../../components/BasicHeader';
import DiaryListBig from '../../../components/ExploreTabComponents/DiaryListBig';
import DiaryReply from '../../../components/ExploreTabComponents/DiaryReply';
import ReplyRegister from '../../../assets/icons/Explore/replyregister.png';
import CommentInput from '../../../components/CommentInput';

import { dummy_comment, dummy_user } from '../../../dummyData';
import FeedComment from '../../../components/FeedComment';

const DiaryDetail = () => {
  const comments = dummy_comment.map(comment => {
    const user = dummy_user.find(du => du.id === comment.userId);

    return {
      ...comment,
      user,
    };
  });
  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="기록 상세보기" />
      <ScrollView style={styles.container}>
        <DiaryListBig />
        <View>
          <Text style={[fontStyles.title03, styles.commentText]}>댓글</Text>
        </View>
        <View style={styles.commentList}>
          {comments.map(comment => (
            <FeedComment key={comment.id} comment={comment} />
          ))}
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <CommentInput chatPlaceHolder="댓글을 입력해주세요" />
      </KeyboardAvoidingView>
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
  commentList: {
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  replyRegister: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
});

export default DiaryDetail;
