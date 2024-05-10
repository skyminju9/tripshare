import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { dummy_article } from '../../dummyData';
import { useAuthUser } from '../../contexts/AuthUserContext';
import BasicHeader from '../../components/BasicHeader';

const MyPageArticle = ({ navigation, router }) => {
  const user = useAuthUser();
  const [articleData, setArticleData] = useState(
    dummy_article.filter(articleData => articleData.userId == user.id),
  );

  useEffect(() => {
    console.log(articleData);
  }, [articleData]);

  return (
    <SafeAreaView>
      <BasicHeader title="작성한 게시글" />
      <Text>MyPageArticle</Text>
    </SafeAreaView>
  );
};

export default MyPageArticle;

const styles = StyleSheet.create({});
