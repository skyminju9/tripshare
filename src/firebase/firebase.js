import firestore from '@react-native-firebase/firestore';

const city = 'Tokyo'; // 현재 위치

export const articleCollection = firestore()
  .collection('community')
  .doc('articles')
  .collection(city);
