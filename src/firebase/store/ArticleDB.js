import { articleCollection } from '../firebase';

export const addArticle = async data => {
  try {
    await articleCollection.add(data);
    return true;
  } catch (err) {
    console.error(err);
  }
};

export const editArticle = async (id, data) => {
  try {
    await articleCollection.doc(id).update(data);
    return true;
  } catch (err) {
    console.error(err);
  }
};

export const deleteArticle = async id => {
  try {
    await articleCollection.doc(id).delete();
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

export const addComment = async (id, comments, data) => {
  try {
    await articleCollection.doc(id).update({
      comments: [...comments, data],
    });
    return true;
  } catch (err) {
    console.error(err);
  }
};

export const setLiked = async (id, liked, isLiked) => {
  try {
    await articleCollection.doc(id).update(!isLiked ? { liked: liked + 1 } : { liked: liked - 1 });
    return true;
  } catch (err) {
    console.error(err);
  }
};

export const setBookmarked = async (id, bookmarked, isBookmarked) => {
  try {
    await articleCollection
      .doc(id)
      .update(!isBookmarked ? { bookmarked: bookmarked + 1 } : { bookmarked: bookmarked - 1 });
    return true;
  } catch (err) {
    console.error(err);
  }
};

export const getMyBookmarkedList = async list => {
  try {
    const res = await articleCollection.orderBy('createdAt', 'desc').get();
    const sameList = res.docs.map(item => {
      if (list.some(id => id === item.id)) {
        return { id: item.id, ...item };
      }
    });
    const result = sameList.filter(item => item !== undefined);
    return result;
  } catch (err) {
    console.error(err);
  }
};

export const getMyArticleList = async creator => {
  try {
    const res = await articleCollection
      .where('creator', '==', creator)
      .orderBy('createdAt', 'desc')
      .get();
    return res.docs;
  } catch (err) {
    console.error(err);
  }
};
