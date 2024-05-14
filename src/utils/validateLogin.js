export const validateEmail = email => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!regex.test(email)) throw new Error('이메일 형식에 맞지 않습니다.');

  return true;
};

export const validatePassword = password => {
  const regex = /[^\w\s]/g;

  if (password.length < 10) throw new Error('비밀번호를 10자 이상 입력해 주세요.');
  if (!regex.test(password)) throw new Error('특수문자는 1개 이상 포함되어야 합니다.');

  return true;
};
