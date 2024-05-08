export const getHotArticle = (list, max) => {
  const article = [...list];
  article.sort((a, b) => b.like - a.like);
  const result = article.slice(0, max);
  return result;
};
