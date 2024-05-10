import React from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const MyPageHome = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('MyPageBookmark')}>
        <Text>북마크한 게시글</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyPageArticle')}>
        <Text>작성한 게시글</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyPageComment')}>
        <Text>작성한 댓글</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default MyPageHome;
