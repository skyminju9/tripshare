import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import color from '../../styles/colorPalette';
import { WhiteAlertIcon, WhiteLogoIcon } from '../../assets';
import { useAuthUser } from '../../contexts/AuthUserContext';
import { dummy_chat, dummy_user } from '../../dummyData';
import { setAgoDays } from '../../utils/date';
import fontStyles from '../../styles/fontStyles';

const ChattingHome = ({ navigation }) => {
  const [chatList, setChatList] = useState();
  const user = useAuthUser();

  useEffect(() => {
    setChatInit();
  }, []);

  const setChatInit = () => {
    const chatData = [];
    dummy_chat.map(item =>
      user.id === item.sendUserId || user.id === item.receiveUserId ? chatData.push(item) : '',
    );
    setChatList(chatData);
  };

  const handleChatClick = chatData => {
    navigation.navigate('ChattingDetail', { chatList: chatData });
  };

  const renderItem = ({ item: chatData }) => {
    const opponentId = function () {
      if (user.id === chatData.sendUserId) return chatData.receiveUserId;
      return chatData.sendUserId;
    };
    const userData = dummy_user.filter(userData => userData.id === opponentId())[0];
    const lastChat = chatData.chatList.at(-1);
    const isRead = lastChat.isRead || lastChat.userId === user.id;
    return (
      <TouchableOpacity style={styles.chatWrapper} onPress={() => handleChatClick(chatData)}>
        <Image source={userData.profileImage} style={styles.profileImage} alt="프로필 이미지" />
        <View style={styles.chatContainer}>
          <View style={styles.chatTopWrapper}>
            <Text style={fontStyles.boldFont01}>{userData.name}</Text>
            {!isRead && <View style={styles.readDot} />}
          </View>
          <View style={styles.chatBottomWrapper}>
            {isRead ? (
              <>
                <Text style={styles.readChatText} numberOfLines={1} ellipsizeMode="tail">
                  {chatData.chatList.at(-1).text}
                </Text>
                <Text style={fontStyles.grayFont02}>
                  {setAgoDays(chatData.chatList.at(-1).createdAt)}
                </Text>
              </>
            ) : (
              <>
                <Text style={styles.notReadChatText} numberOfLines={1} ellipsizeMode="tail">
                  {chatData.chatList.at(-1).text}
                </Text>
                <Text style={fontStyles.boldFont02}>
                  {setAgoDays(chatData.chatList.at(-1).createdAt)}
                </Text>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.chatHeader}>
        <View style={{ flex: 1 }} />
        <Text style={fontStyles.whiteTitle02}>채팅목록</Text>
        {/* <WhiteLogoIcon /> */}
        <TouchableOpacity style={styles.chatHeaderRightWrapper}>
          <WhiteAlertIcon />
        </TouchableOpacity>
      </View>
      <FlatList
        data={chatList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={<View style={styles.chatSeperator} />}
        style={styles.chatListWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: color.BLUE_30,
  },
  chatHeader: {
    backgroundColor: color.BLUE_500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  chatHeaderRightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  chatListWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  chatSeperator: {
    width: '100%',
    height: 1,
    backgroundColor: color.GRAY_200,
  },
  chatWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 16,
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  chatTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  readDot: {
    width: 8,
    height: 8,
    backgroundColor: color.RED_400,
    borderRadius: 8,
  },
  chatBottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  readChatText: {
    ...fontStyles.grayFont02,
    flex: 1,
    paddingRight: 12,
  },
  notReadChatText: {
    ...fontStyles.boldFont02,
    flex: 1,
    paddingRight: 12,
  },
});

export default ChattingHome;
