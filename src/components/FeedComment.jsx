import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import fontStyles from '../styles/fontStyles';
import color from '../styles/colorPalette';
import { setAgoDays } from '../utils/date';

const FeedComment = ({ comment }) => {
  return (
    <View style={styles.commentContainer}>
      <View style={styles.leftArea}>
        <Image source={comment.user.profileImage} style={styles.commentProfileImage} />
      </View>
      <View style={styles.rightArea}>
        <Text style={fontStyles.boldFont01}>{comment.user.name}</Text>
        <View style={styles.contentsArea}>
          <Text style={styles.commentContent}>{comment.content}</Text>
          <Text style={styles.createdAtText}>{setAgoDays(comment.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    marginVertical: 12,
    flexDirection: 'row',
  },
  leftArea: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    marginRight: 12,
  },
  rightArea: {
    flex: 1,
    gap: 4,
  },
  commentProfileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  contentsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createdAtText: {
    color: color.GRAY_300,
    alignSelf: 'flex-end',
  },
  commentContent: {
    ...fontStyles.basicFont02,
  },
});

export default FeedComment;
