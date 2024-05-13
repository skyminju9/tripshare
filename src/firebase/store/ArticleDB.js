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
    const res = await articleCollection.orderBy('createdAt', 'desc').get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};

export const getArticleTagList = async tag => {
  try {
    const res = await articleCollection
      .where('tag', '==', `${tag}`)
      .orderBy('createdAt', 'desc')
      .get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};

export const getHotArticleTitle = async () => {
  try {
    const res = await articleCollection.orderBy('liked', 'desc').limit(3).get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};

export const getHotArticleList = async () => {
  try {
    const res = await articleCollection.orderBy('liked', 'desc').limit(10).get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};

export const getSingleArticle = id => {
  try {
    const res = articleCollection.doc(id).onSnapshot();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};
