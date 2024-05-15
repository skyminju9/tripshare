import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
import { generate } from 'random-words';

const usersCollection = firestore().collection('users');

export const checkUniqueName = async name => {
  const getUsers = await usersCollection.get();
  const users = getUsers.docs.map(doc => doc.data());

  if (users.length) return users.filter(user => user.name === name).length;

  return true;
};

export const checkUniqueEmail = async email => {
  const getUsers = await usersCollection.get();
  const users = getUsers.docs.map(doc => doc.data());

  if (users.length) return users.filter(user => user.email === email).length;

  return true;
};

export const signUp = async ({ email, password }) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    await registerUser({ email });
    console.log('created successfully');
  } catch (e) {
    if (e.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      throw new Error('이미 사용 중인 이메일입니다.');
    }

    if (e.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      throw new Error('이메일 주소가 유효하지 않습니다.');
    }

    throw e;
  }
};

export const signOut = async () => {
  await auth().signOut();
};

export const userLogin = async ({ email, password }) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User account created & signed in!');
  } catch (e) {
    if (e.code === 'auth/invalid-credential') {
      console.log('유효하지 않은 사용자입니다.');
      throw new Error('유효하지 않은 사용자입니다.');
    }

    if (e.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      throw new Error('That email address is invalid!');
    }

    throw e;
  }
};

export const getLoginUserInfo = async email => {
  const querySnapshot = await usersCollection.where('email', '==', email).get();
  const userInfo = querySnapshot.docs.map(doc => doc.data())[0];
  console.log('getLoginUserInfo', userInfo);
  if (!userInfo) return false;

  return userInfo;
};

export const userLogout = async () => {
  try {
    // 1초 delay (show toast)
    await new Promise(resolve => setTimeout(resolve, 1000));
    await auth().signOut();
  } catch (e) {
    throw new Error('로그아웃 실패');
  }
};

export const registerUser = async ({ email }) => {
  try {
    await usersCollection.add({
      id: uuid.v4(),
      name: generate({ minLength: 4 }),
      email,
      bookmarkArticles: [],
      likedArticles: [],
      myCity: [],
      status: 'ACTIVE',
      createdAt: new Date().getTime(),
    });
  } catch (e) {
    throw new Error('사용자 저장에 실패했습니다.');
  }
};

export const changeUserName = async ({ name, email }) => {
  try {
    const querySnapshot = await firestore().collection('users').where('email', '==', email).get();
    const userDocId = querySnapshot.docs[0]?.id;
    if (userDocId)
      await firestore().collection('users').doc(userDocId).update({
        name,
      });
  } catch (e) {
    throw new Error(e);
  }
};

export const updateUser = async ({ email, updateData }) => {
  try {
    const querySnapshot = await firestore().collection('users').where('email', '==', email).get();
    const userDocId = querySnapshot.docs[0]?.id;
    if (userDocId) await firestore().collection('users').doc(userDocId).update(updateData);
  } catch (e) {
    throw new Error(e);
  }
};
