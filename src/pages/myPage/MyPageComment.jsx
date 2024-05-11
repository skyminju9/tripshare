import { SafeAreaView, StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { dummy_comment } from '../../dummyData';
import { useAuthUser } from '../../contexts/AuthUserContext';
import BasicHeader from '../../components/BasicHeader';
import { formatDate } from '../../utils/date';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import { HeartOffIcon } from '../../assets';

const MyPageComment = () => {
  const user = useAuthUser();
  const [commentData, setCommentData] = useState(
    dummy_comment.filter(commentData => commentData.userId === user.id),
  );

  const renderItem = (item, index) => {
    let isPrevSameDate = false;
    if (!!commentData[index - 1]) {
      isPrevSameDate = formatDate(item.createdAt) === formatDate(commentData[index - 1]?.createdAt);
    }

    let isNextSameDate = false;
    if (!!commentData[index + 1]) {
      isNextSameDate = formatDate(item.createdAt) === formatDate(commentData[index + 1]?.createdAt);
    }

    return (
      <View style={styles.commentContainer}>
        {!isPrevSameDate && <Text style={styles.cardDate}>{formatDate(item.createdAt)}</Text>}
        <TouchableOpacity style={styles.commentWrapper}>
          <Text>{item.content}</Text>
          <View style={styles.commentLikeWrapper}>
            <HeartOffIcon />
            <Text style={styles.commentLike}>{item.like}</Text>
          </View>
        </TouchableOpacity>
        {!isPrevSameDate && <View style={styles.separateBarWrapper} />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="작성한 댓글" />
      <FlatList
        data={commentData}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={item => item.id}
        style={styles.flatListWrapper}
      />
    </SafeAreaView>
  );
};

export default MyPageComment;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.WHITE },
  flatListWrapper: { flex: 1 },
  commentContainer: {
    paddingHorizontal: 20,
  },
  cardDate: {
    ...fontStyles.title03,
    marginTop: 20,
  },
  commentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    marginHorizontal: 16,
  },
  commentLikeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  commentLike: {
    ...fontStyles.redFont02,
  },
  separateBarWrapper: {
    backgroundColor: color.GRAY_50,
    width: '100%',
    height: 1,
    marginTop: 10,
  },
});
