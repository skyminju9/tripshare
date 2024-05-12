import { articleCollection } from '../firebase';

export const addArticle = async data => {
  try {
    return await articleCollection.add(data);
  } catch (err) {
    console.error(err);
  }
};

export const getArticleList = async () => {
  try {
    const res = await articleCollection.get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};

export const getArticleTagList = async tag => {
  try {
    const res = await articleCollection.where('tag', '==', `${tag}`).get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};
