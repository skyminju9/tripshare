export function setAgoDays(createdAt) {
  const milliSeconds = new Date().getTime() - createdAt;
  const seconds = milliSeconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (seconds < 60) return '방금 전';
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  if (days < 4) return `${Math.floor(days)}일 전`;

  return formatDate(createdAt);
}

export function toISODate(date) {
  return date.toISOString().split('T')[0];
}

export function formatDate(timestamp) {
  const thisYear = new Date().getFullYear();
  const year = new Date(timestamp).getFullYear();
  const month = new Date(timestamp).getMonth() + 1;
  const day = new Date(timestamp).getDate();

  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  return thisYear === year
    ? `${formattedMonth}월 ${formattedDay}일`
    : `${year}년 ${formattedMonth}월 ${formattedDay}일`;
}

export function formatDayTime(timestamp) {
  const day = new Date(timestamp).getDate();
  const hour = new Date(timestamp).getHours();
  const minute = new Date(timestamp).getMinutes();

  return `${day}일 ${hour}시 ${minute}분`;
}

export function formatTime(timestamp) {
  const hour = ('0' + new Date(timestamp).getHours()).slice(-2);
  const minute = ('0' + new Date(timestamp).getMinutes()).slice(-2);

  return `${hour}:${minute}`;
}
export function clock(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (hours > 12) {
    const shortHours = hours - 12;
    if (minutes < 10) {
      return `오후 ${shortHours}:0${minutes}`;
    } else {
      return `오후 ${shortHours}:${minutes}`;
    }
  } else {
    if (minutes < 10) {
      return `오전 ${hours}:0${minutes}`;
    } else {
      return `오전 ${hours}:${minutes}`;
    }
  }
}
