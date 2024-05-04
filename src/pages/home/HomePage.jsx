import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import fontStyles from '../../styles/fontStyles';
import color from '../../styles/colorPalette';
import shadowStyles from '../../styles/shadowStyles';
import LogoHeader from '../../components/LogoHeader';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <LogoHeader location="도쿄" />
      <View style={styles.container}>
        <View style={styles.welcomeMessage}>
          <Text style={[fontStyles.title01, styles.welcomeText]}>
            김민주 님,
            {'\n'}
            지금<Text style={{ color: color.BLUE_500 }}> 도쿄</Text>에 계시는군요!
          </Text>
        </View>
        <View style={styles.infoArea}>
          <View style={styles.infoTop}>
            <View style={styles.box1}></View>
            <View style={styles.box1}></View>
          </View>
          <View style={styles.infoBottom}>
            <View style={styles.box2}></View>
            <View style={styles.box2}></View>
            <View style={styles.box2}></View>
          </View>
        </View>
        <View style={styles.postArea}>
          <Text style={[fontStyles.title03, styles.postAreaText]}>다가오는 여행 일정</Text>
          <View style={[styles.postBox, shadowStyles.smallShadow]}></View>
          <View style={[styles.postBox, shadowStyles.smallShadow]}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  infoArea: {
    marginVertical: 20,
  },
  infoTop: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  infoBottom: {
    flexDirection: 'row',
    gap: 6,
  },
  box1: {
    width: 166,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
  },
  box2: {
    width: 110,
    height: 88,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
  },
  postAreaText: {
    marginVertical: 14,
  },
  postBox: {
    width: 342,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 16,
    marginBottom: 12,
  },
});

export default HomePage;
