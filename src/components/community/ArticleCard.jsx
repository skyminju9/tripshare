import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { APP_WIDTH } from '../../constants';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import shadowStyles from '../../styles/shadowStyles';
import { setAgoDays } from '../../utils/date';
import {
  CommentIcon,
  BookmarkOnIcon,
  BookmarkOffIcon,
  HeartOnIcon,
  HeartOffIcon,
} from '../../assets/index';
import { useAuthUser } from '../../contexts/AuthUserContext';
import { dummy_user } from '../../dummyData';

const ArticleCard = ({ item: article }) => {
  const user = useAuthUser();
  const userData = dummy_user.filter(data => data.id === user.id).pop();
  const bookmarkList = userData.bookmarkList;
  const isBookmarked = bookmarkList.includes(article.id);

  return (
    <TouchableOpacity style={[styles.articleContainer, shadowStyles.largeShadow]}>
      <View style={styles.articleHeader}>
        {/* Profile */}
        <View style={styles.authorProfile}>
          <Image source={article.authorImage} style={styles.authorImage} />
          <Text style={fontStyles.boldFont01}>{article.authorName}</Text>
        </View>
        <View>
          <Text style={[fontStyles.basicFont02, styles.createdAtText]}>
            {setAgoDays(article.createdAt)}
          </Text>
        </View>
      </View>
      {/* Article */}
      <View style={styles.articleMain}>
        <Text style={fontStyles.basicFont01}>{article.title}</Text>
        <Text numberOfLines={1} style={[fontStyles.basicFont02, styles.articleContents]}>
          {article.content}
        </Text>
      </View>
      {/* Icon & Tag */}
      <View style={styles.articleBottom}>
        <View style={styles.articleIconContainer}>
          <View style={styles.articleIcon}>
            <CommentIcon />
            <Text style={[fontStyles.basicFont02, styles.commentNum]}>3</Text>
          </View>
          <View style={styles.articleIcon}>
            <HeartOffIcon />
            <Text style={[fontStyles.basicFont02, styles.heartNum]}>{article.like}</Text>
          </View>
          <View style={styles.articleIcon}>
            {isBookmarked ? <BookmarkOnIcon /> : <BookmarkOffIcon />}
            <Text style={[fontStyles.basicFont02, styles.bookmarkNum]}>{article.bookmark}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.basicFont02, styles.tag]}>#{article.tag}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    height: APP_WIDTH / 2.6,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: color.BLUE_500,
    borderRadius: 20,
    gap: 8,
  },
  articleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
    color: color.TEXT_SECONDARY,
  },
  articleMain: {
    gap: 8,
  },
  articleBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
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
});

export default ArticleCard;
