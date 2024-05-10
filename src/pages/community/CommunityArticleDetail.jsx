import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import BasicHeader from '../../components/BasicHeader';
import { BookmarkIcon, HeartIcon, CommentIcon } from '../../assets/index';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import shadowStyles from '../../styles/shadowStyles';
import ArticleCardHeader from '../../components/community/ArticleCardHeader';

import { dummy_comment, dummy_user } from '../../dummyData';
import FeedComment from '../../components/FeedComment';
import CommentInput from '../../components/CommentInput';

const CommunityArticleDetail = () => {
  const article = useRoute().params;
  const comments = dummy_comment
    .filter(comment => comment.articleId === article.id)
    .map(comment => {
      const user = dummy_user.find(du => du.id === comment.userId);
      return {
        ...comment,
        user,
      };
    });

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader title="게시글 상세" />
      <ScrollView style={styles.articleDetailWrapper} showsVerticalScrollIndicator={false}>
        <Shadow {...shadowStyles.smallShadow} stretch>
          <View style={styles.articleContainer}>
            <ArticleCardHeader
              authorImg={article.authorImage}
              authorName={article.authorName}
              createdAt={article.createdAt}
            />
            {/* Title & Contents */}
            <View style={styles.articleMain}>
              <Text style={fontStyles.boldFont01}>{article.title}</Text>
              <Text style={[fontStyles.basicFont02, styles.articleContents]}>
                {article.content}
              </Text>
            </View>
            {/* Icon & Tag */}
            <View style={styles.articleBottom}>
              <View>
                <Text style={[styles.basicFont02, styles.tag]}>#{article.tag}</Text>
              </View>
              <View style={styles.articleIconContainer}>
                <TouchableOpacity style={styles.articleIcon}>
                  <CommentIcon />
                  <Text style={[fontStyles.basicFont02, styles.commentNum]}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.articleIcon}>
                  <HeartIcon />
                  <Text style={[fontStyles.basicFont02, styles.heartNum]}>{article.like}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.articleIcon}>
                  <BookmarkIcon />
                  <Text style={[fontStyles.basicFont02, styles.bookmarkNum]}>
                    {article.bookmark}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Shadow>
        {/* Comment */}
        <View style={styles.commentsContainer}>
          <Text style={[fontStyles.boldFont01, styles.commentText]}>
            댓글 {comments.length || 0}
          </Text>
          {comments.map(comment => (
            <FeedComment key={comment.id} comment={comment} />
          ))}
        </View>
      </ScrollView>
      <View>
        <CommentInput />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  articleDetailWrapper: {
    margin: 20,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  articleContainer: {
    gap: 16,
    padding: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.BLUE_500,
    backgroundColor: color.WHITE,
  },
  authorProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  authorImage: {
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  createdAtText: {
    color: color.GRAY_300,
  },
  articleContents: {
    colro: color.TEXT_SECONDARY,
    marginBottom: 20,
    lineHeight: 20,
  },
  articleMain: {
    gap: 8,
  },
  articleBottom: {
    justifyContent: 'space-between',
    gap: 12,
  },
  articleIconContainer: {
    flexDirection: 'row',
    gap: 7,
  },
  articleIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  commentNum: {
    color: color.TEXT_SECONDARY,
    fontSize: 12,
  },
  heartNum: {
    color: color.RED_400,
    fontSize: 12,
  },
  bookmarkNum: {
    color: color.BLUE_600,
    fontSize: 12,
  },
  tag: {
    fontFamily: 'Pretendard-SemiBold',
    color: color.BLUE_500,
  },
  commentsContainer: {
    marginTop: 20,
    marginBottom: 80,
    paddingHorizontal: 10,
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
});

export default CommunityArticleDetail;
