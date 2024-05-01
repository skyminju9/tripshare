import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const CommunityMeetingMap = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View>
        <Text>헤더영역</Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default CommunityMeetingMap;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
