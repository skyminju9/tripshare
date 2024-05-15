import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import fontStyles from '../styles/fontStyles';
import color from '../styles/colorPalette';
import { setAgoDays } from '../utils/date';
import { DummyProfileImg } from '../assets';

const FeedComment = ({ comment }) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.commentProfile}>
        <Image
          source={comment.user.profileImage || DummyProfileImg}
          style={styles.commentProfileImage}
        />
        <Text style={fontStyles.boldFont01}>{comment.user.name}</Text>
      </View>
      <View style={styles.commentContents}>
        <Text style={fontStyles.basicFont01}>{comment.contents}</Text>
        <Text style={styles.createdAtText}>{setAgoDays(comment.createdAt)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    paddingVertical: 12,
    gap: 8,
  },
  commentText: {
    marginBottom: 14,
  },
  comment: {
    gap: 6,
    marginVertical: 10,
  },
  commentProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  commentProfileImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  commentContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  createdAtText: {
    color: color.GRAY_300,
  },
});

export default FeedComment;
