import { articleCollection } from '../firebase';

export const addArticle = async data => {
  try {
    await articleCollection.add(data);
    return true;
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

export const getHotArticleTop3 = async () => {
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

export const addComment = async (id, data) => {
  try {
    const res = await articleCollection.doc(id).get();
    const comments = res.data().comments;
    await articleCollection.doc(id).update({
      comments: [...comments, data],
    });
    return true;
  } catch (err) {
    console.error(err);
  }
};
