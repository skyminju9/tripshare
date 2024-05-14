import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { ReplyRegisterIcon } from '../assets';
import color from '../styles/colorPalette';

import { addComment } from '../firebase/store/ArticleDB';

const CommentInput = ({ onSubmit, chatPlaceHolder, id, creator, comment = false }) => {
  const [contents, setContents] = useState('');

  const setComment = async () => {
    const data = {
      contents: contents,
      createdAt: new Date().getTime(),
      creator: creator,
      liked: 0,
    };
    const result = await addComment(id, data);
    if (result) {
      console.log('댓글 작성');
    }
  };

  const handleContentSubmit = () => {
    onSubmit(contents);
    setContents('');
  };

  return (
    <View style={styles.commentInputArea}>
      <View style={styles.commentBox}>
        <TextInput
          placeholder={chatPlaceHolder}
          value={contents}
          onChangeText={text => setContents(text)}
          maxLength={100}
        />
      </View>
      <TouchableOpacity onPress={comment ? setComment : handleContentSubmit}>
        <Image source={ReplyRegisterIcon} style={styles.replyRegister} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  commentInputArea: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: color.BLUE_30,
  },
  commentBox: {
    flex: 1,
    height: 40,
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

export default CommentInput;
