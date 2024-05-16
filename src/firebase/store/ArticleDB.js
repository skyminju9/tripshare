import { articleCollection, userCollection } from '../firebase';
import uuid from 'react-native-uuid';

export const addArticle = async data => {
  try {
    const id = uuid.v4();
    await articleCollection.doc(id).set({ ...data, id });
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

export const getArticleAndAuthorList = async () => {
  try {
    const getArticles = await articleCollection.orderBy('createdAt', 'desc').get();
    const articles = getArticles.docs.map(doc => doc.data());

    let newArticles = [];

    for (let i = 0; i < articles.length; i++) {
      const getUser = await userCollection.where('id', '==', articles[i].creator).get();
      if (getUser) {
        const userInfo = getUser.docs.map(doc => doc.data())[0];
        newArticles.push({ ...articles[i], author: userInfo });
      } else newArticles.push(articles[i]);
    }

    return newArticles;
  } catch (err) {
    console.error(err);
  }
};

export const getSearchArticleList = async keyword => {
  try {
    // const searchTitleQuery = await articleCollection
    //   .where('title', '>=', keyword)
    //   .where('title', '<', keyword + '\uf8ff')
    //   .get();
    // const searchContentQuery = await articleCollection
    //   .where('contents', '>=', keyword)
    //   .where('contents', '<', keyword + '\uf8ff')
    //   .get();

    const getArticlesQuery = await articleCollection.orderBy('createdAt', 'desc').get();
    const articles = getArticlesQuery.docs
      .map(doc => doc.data())
      .filter(article => article.title.includes(keyword) || article.contents.includes(keyword));

    let res = [];
    for (let i = 0; i < articles.length; i++) {
      const getUser = await userCollection.where('id', '==', articles[i].creator).get();
      if (getUser) {
        const userInfo = getUser.docs.map(doc => doc.data())[0];
        res.push({ ...articles[i], authorName: userInfo.name, authorImage: '' });
      } else res.push(articles[i]);
    }
    console.log(res, res.length);
    return res;
  } catch (e) {
    console.error(e);
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
