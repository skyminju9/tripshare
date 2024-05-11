export const getLongText = (str, length = 5) => {
  let result = '';
  if (str.length > length) {
    result = str.substr(0, 5) + '…';
  } else {
    result = str;
  }
  return result;
};
