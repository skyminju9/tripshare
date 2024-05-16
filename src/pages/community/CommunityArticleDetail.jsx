import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import Modal from 'react-native-modal';

import BasicHeader from '../../components/BasicHeader';
import {
  BookmarkOffIcon,
  BookmarkOnIcon,
  HeartOffIcon,
  HeartOnIcon,
  CommentIcon,
  MenuIcon,
} from '../../assets/index';
import color from '../../styles/colorPalette';
import fontStyles from '../../styles/fontStyles';
import shadowStyles from '../../styles/shadowStyles';
import ArticleCardHeader from '../../components/community/ArticleCardHeader';
import FeedComment from '../../components/FeedComment';
import CommentInput from '../../components/CommentInput';
import { dummy_user } from '../../dummyData';
import { useAuthUser } from '../../contexts/AuthUserContext';
import { APP_WIDTH } from '../../constants';

import { articleCollection } from '../../firebase/firebase';
import { setLiked, setBookmarked, deleteArticle } from '../../firebase/store/ArticleDB';
import { DummyProfileImg } from '../../assets/index';

const CommunityArticleDetail = ({ route }) => {
  const [singleArticle, setSingleArticle] = useState([]);

  const article = route.params.article;
  const users = route.params.users;
  const loginUser = useAuthUser();
  const isPostOwner = singleArticle.authorName === loginUser.name;
  const isMyBookmark = loginUser.bookmarkList.includes(article.id);

  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isNotiVisible, setNotiVisible] = useState(false);

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(isMyBookmark);

  const handleContent = data => {
    const content = data.data();
    if (content !== undefined) {
      const articleUser = users.find(user => user.id === content.creator);
      content.comments = content.comments.map(comment => {
        const user = users.find(du => du.id === comment.creator);
        return {
          ...comment,
          user: {
            name: user.name,
            profileImage: user.profileImage,
          },
        };
      });

      const initialArticle = {
        id: data.id,
        ...content,
        authorName: article.authorName || articleUser.name,
        authorImage: article.authorImage || articleUser.profileImage || DummyProfileImg,
      };

      return initialArticle;
    }
  };

  const handleLiked = async () => {
    if (!isLiked) {
      setIsLiked(true);
      setLiked(article.id, singleArticle.liked, false);
    } else {
      setIsLiked(false);
      setLiked(article.id, singleArticle.liked, true);
    }
  };

  const handleBookmarked = async () => {
    if (!isBookmarked) {
      setIsBookmarked(true);
      setBookmarked(article.id, singleArticle.bookmarked, false);
    } else {
      setIsBookmarked(false);
      setBookmarked(article.id, singleArticle.bookmarked, true);
    }
  };

  const handleDelete = () => {
    navigation.navigate('CommunityFreeBoard');
    deleteArticle(singleArticle.id);
    console.log('Article deleted!');
  };

  useEffect(() => {
    articleCollection.doc(article.id).onSnapshot(snapshot => {
      snapshot && setSingleArticle(handleContent(snapshot));
    });
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <BasicHeader
        title="게시글 상세"
        rightComponent={
          <TouchableOpacity style={styles.menuIcon} onPress={() => setMenuVisible(true)}>
            <MenuIcon />
          </TouchableOpacity>
        }
      />
      <ScrollView style={styles.articleDetailWrapper} showsVerticalScrollIndicator={false}>
        <Shadow {...shadowStyles.smallShadow} stretch>
          <View style={styles.articleContainer}>
            <ArticleCardHeader
              // 이미지 오류
              authorImg={singleArticle.authorImage || article.authorImage}
              authorName={singleArticle.authorName}
              createdAt={singleArticle.createdAt}
            />
            {/* Title & Contents */}
            <View style={styles.articleMain}>
              <Text style={fontStyles.boldFont01}>{singleArticle.title}</Text>
              <Text style={[fontStyles.basicFont02, styles.articleContents]}>
                {singleArticle.contents}
              </Text>
            </View>
            {/* Icon & Tag */}
            <View style={styles.articleBottom}>
              <View>
                {singleArticle.tag ? (
                  <Text style={[styles.basicFont02, styles.tag]}>#{singleArticle.tag}</Text>
                ) : (
                  <></>
                )}
              </View>
              <View style={styles.articleIconContainer}>
                <View style={styles.articleIcon}>
                  <CommentIcon />
                  <Text style={[fontStyles.basicFont02, styles.commentNum]}>
                    {singleArticle.comments && singleArticle.comments.length}
                  </Text>
                </View>
                {!isLiked ? (
                  <TouchableOpacity style={styles.articleIcon} onPress={handleLiked}>
                    <HeartOffIcon />
                    <Text style={[fontStyles.basicFont02, styles.heartNum]}>
                      {singleArticle.liked}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.articleIcon} onPress={handleLiked}>
                    <HeartOnIcon width={21} height={20} />
                    <Text style={[fontStyles.basicFont02, styles.heartNum]}>
                      {singleArticle.liked}
                    </Text>
                  </TouchableOpacity>
                )}
                {!isBookmarked ? (
                  <TouchableOpacity style={styles.articleIcon} onPress={handleBookmarked}>
                    <BookmarkOffIcon />
                    <Text style={[fontStyles.basicFont02, styles.bookmarkNum]}>
                      {singleArticle.bookmarked}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.articleIcon} onPress={handleBookmarked}>
                    <BookmarkOnIcon width={21} height={20} />
                    <Text style={[fontStyles.basicFont02, styles.bookmarkNum]}>
                      {singleArticle.bookmarked}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        </Shadow>
        {/* Comment */}
        <View style={styles.commentsContainer}>
          <Text style={[fontStyles.boldFont01, styles.commentText]}>
            댓글 {singleArticle.comments && singleArticle.comments.length}
          </Text>
          {singleArticle.comments &&
            singleArticle.comments.map((comment, index) => (
              <FeedComment key={index} comment={comment} />
            ))}
        </View>
      </ScrollView>

      <KeyboardAvoidingView behavior="padding">
        <CommentInput
          chatPlaceHolder="댓글을 입력해주세요"
          creator={loginUser.id}
          article={singleArticle}
          comment={true}
        />
      </KeyboardAvoidingView>

      {/* 게시글 메뉴 모달 */}
      <Modal
        isVisible={isMenuVisible}
        backdropOpacity={0}
        onBackdropPress={() => setMenuVisible(false)}
        animationIn="fadeInDown"
        animationOut="fadeOut"
        animationOutTiming={200}>
        <View style={styles.modalContainer}>
          {isPostOwner ? (
            <>
              <TouchableOpacity
                style={styles.modalBtnWrapper}
                onPress={() =>
                  navigation.navigate('CommunityPostPage', { edit: true, data: singleArticle })
                }>
                <Text style={fontStyles.boldFont01}>수정하기</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalBtnWrapper}
                onPress={() => {
                  setMenuVisible(false);
                  setNotiVisible(true);
                }}>
                <Text style={fontStyles.boldFont01}>삭제하기</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.modalBtnWrapper}>
              <Text style={fontStyles.boldFont01}>신고하기</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>

      {/* 삭제 확인 모달 */}
      <Modal
        isVisible={isNotiVisible}
        backdropOpacity={0.3}
        onBackdropPress={() => setNotiVisible(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={styles.notiModalStyle}>
        <View style={styles.notiContainer}>
          <Text style={fontStyles.boldFont01}>정말 삭제하시겠습니까?</Text>
          <View style={styles.notiBtnWrapper}>
            <TouchableOpacity style={styles.notiBtn} onPress={handleDelete}>
              <Text style={fontStyles.boldFont01}>예</Text>
            </TouchableOpacity>
            <View style={styles.notiBtnLine} />
            <TouchableOpacity style={styles.notiBtn} onPress={() => setNotiVisible(false)}>
              <Text style={fontStyles.boldFont01}>아니오</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

  modalContainer: {
    position: 'absolute',
    top: 32,
    right: -12,
    backgroundColor: color.WHITE,
    width: APP_WIDTH / 4,
  },
  modalBtnWrapper: {
    borderWidth: 1,
    borderColor: color.GRAY_50,
    paddingLeft: 20,
    paddingVertical: 10,
  },
  notiModalStyle: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notiContainer: {
    width: APP_WIDTH / 2,
    backgroundColor: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    paddingTop: 16,
    gap: 16,
  },
  notiBtnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notiBtn: {
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: color.GRAY_50,
  },
  notiBtnLine: {
    height: '100%',
    borderWidth: 0.5,
    borderColor: color.GRAY_50,
  },
  menuIcon: {
    paddingRight: 8,
  },
});

export default CommunityArticleDetail;
