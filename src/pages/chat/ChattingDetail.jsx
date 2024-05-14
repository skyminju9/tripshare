import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../../styles/colorPalette';
import { WhiteBackArrowIcon } from '../../assets';
import fontStyles from '../../styles/fontStyles';
import { dummy_user } from '../../dummyData';
import { useAuthUser } from '../../contexts/AuthUserContext';
import { formatDate, formatTime } from '../../utils/date';
import CommentInput from '../../components/CommentInput';

const ChattingDetail = ({ route, navigation }) => {
  const [chatList, setChatList] = useState(route.params.chatList.chatList);
  const flatList = React.useRef(null);

  const chatInfo = route.params.chatList;
  const user = useAuthUser();

  const opponentId = function () {
    if (user.id === chatInfo.sendUserId) return chatInfo.receiveUserId;
    return chatInfo.sendUserId;
  };
  const opponentUser = dummy_user.filter(userData => userData.id === opponentId())[0];

  const handleSubmitChat = text => {
    console.log(text);
    setChatList([
      ...chatList,
      {
        id: chatList.at(-1).id + 1,
        userId: user.id,
        text: text,
        createdAt: new Date().getTime(),
        isRead: false,
      },
    ]);
  };

  const renderItem = ({ item, index }) => {
    const beforeDate = chatList[index - 1] ? formatDate(chatList[index - 1]?.createdAt) : null;
    const currDate = formatDate(item.createdAt);
    const isSameDay = beforeDate === currDate;
    const isMyChat = item.userId === user.id;

    const beforeUser = chatList[index - 1]?.userId;
    const currUser = item.userId;
    const isSameUser = beforeUser === currUser;

    return (
      <View>
        {!isSameDay && <Text style={styles.chatDate}>{formatDate(item.createdAt)}</Text>}
        <View style={styles.chatWrapper}>
          {isMyChat ? (
            <View style={styles.myChatWrapper}>
              <Text style={fontStyles.grayFont02}>{formatTime(item.createdAt)}</Text>
              <View style={styles.myTextWrapper}>
                <Text>{item.text}</Text>
              </View>
            </View>
          ) : isSameUser ? (
            <View style={styles.opponentChatWrapper}>
              <Image style={styles.opponentProfileImage} />
              <View style={styles.opponentChatCenterWrapper}>
                <View style={styles.opponentTextWrapper}>
                  <Text style={styles.opponentText}>{item.text}</Text>
                </View>
              </View>
              <View style={styles.opponentChatTimeWrapper}>
                <Text style={styles.opponentChatTime}>{formatTime(item.createdAt)}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.opponentChatWrapper}>
              <Image
                source={opponentUser.profileImage}
                style={styles.opponentProfileImage}
                alt="상대 프로필 사진"
              />
              <View style={styles.opponentChatCenterWrapper}>
                <Text style={fontStyles.basicFont02}>{opponentUser.name}</Text>
                <View style={styles.opponentTextWrapper}>
                  <Text style={styles.opponentText}>{item.text}</Text>
                </View>
              </View>
              <View style={styles.opponentChatTimeWrapper}>
                <Text style={styles.opponentChatTime}>{formatTime(item.createdAt)}</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <WhiteBackArrowIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{opponentUser.name}</Text>
        <View style={{ flex: 1 }} />
      </View>
      <FlatList
        data={chatList}
        ref={flatList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.chatListWrapper}
        onContentSizeChange={() => flatList.current.scrollToEnd()}
      />
      <KeyboardAvoidingView style={styles.chatInputWrapper} behavior="padding">
        <CommentInput chatPlaceHolder="채팅을 입력해주세요" onSubmit={handleSubmitChat} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChattingDetail;

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: color.BLUE_30 },
  headerWrapper: {
    flexDirection: 'row',
    backgroundColor: color.BLUE_500,
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    ...fontStyles.whiteTitle02,
    fontSize: 18,
  },
  chatListWrapper: {
    flex: 1,
    marginBottom: 20,
  },
  chatDate: {
    ...fontStyles.grayFont01,
    fontFamily: 'Pretendard-SemiBold',
    textAlign: 'center',
    marginTop: 20,
  },
  chatWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  myChatWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 8,
  },
  myTextWrapper: {
    maxWidth: '60%',
    backgroundColor: color.WHITE,
    padding: 12,
    borderRadius: 10,
  },
  opponentChatWrapper: {
    flexDirection: 'row',
    gap: 8,
    width: '60%',
  },
  opponentProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  opponentChatCenterWrapper: {
    gap: 8,
  },
  opponentTextWrapper: {
    backgroundColor: color.BLUE_500,
    padding: 12,
    borderRadius: 10,
  },
  opponentText: { ...fontStyles.basicFont02, color: color.WHITE },
  opponentChatTimeWrapper: { justifyContent: 'flex-end' },
  opponentChatTime: {
    ...fontStyles.grayFont02,
  },
  chatInputWrapper: {
    backgroundColor: color.WHITE,
  },
});
