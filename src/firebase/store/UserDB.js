import { userCollection } from '../firebase';
import { dummy_user } from '../../dummyData';
import { DummyProfileImg } from '../../assets';

const getUserList = async () => {
  try {
    const res = await userCollection.get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};

export const setUserList = async () => {
  const lists = await getUserList();
  lists.map(user => {
    dummy_user.push({
      ...user.data(),
      profileImage: DummyProfileImg,
    });
  });
  return dummy_user;
};
