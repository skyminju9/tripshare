import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
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
    let isSameDate = false;
    if (!!commentData[index - 1]) {
      isSameDate = formatDate(item.createdAt) === formatDate(commentData[index - 1]?.createdAt);
    }
    item.authorImage = user.profileImage;
    item.authorName = user.name;

    return (
      <View>
        {!isSameDate && <Text style={styles.cardDate}>{formatDate(item.createdAt)}</Text>}
        <View style={styles.commentWrapper}>
          <Text>{item.content}</Text>
          <HeartOffIcon />
        </View>
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
  cardDate: {
    ...fontStyles.title03,
    marginLeft: 20,
    marginTop: 20,
  },
  commentWrapper: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
    marginLeft: 32,
  },
});
