export function setAgoDays(createdAt) {
  const milliSeconds = new Date().getTime() - createdAt;
  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (seconds < 60) return '방금 전';
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  if (days < 3) return `${Math.floor(days)}일 전`;

  return formatDate(new Date(createdAt));
}

export function toISODate(date) {
  return date.toISOString().split('T')[0];
}

export function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return `${year}년 ${formattedMonth}월 ${formattedDay}일`;
}