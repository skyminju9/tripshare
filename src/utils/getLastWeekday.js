export const getLastWeekday = () => {
  const today = new Date();
  let lastWeekday = new Date(today);

  const hours = today.getHours();
  const day = today.getDay(); // 0: Sunday, ..., 6: Saturday

  // 일요일인 경우
  if (day === 0) {
    lastWeekday.setDate(today.getDate() - 2); // Set to last Friday
  }
  // 토요일인 경우
  else if (day === 6) {
    lastWeekday.setDate(today.getDate() - 1); // Set to last Friday
  }
  // 월요일 오전 11시 이전인 경우
  else if (day === 1 && hours < 11) {
    lastWeekday.setDate(today.getDate() - 3); // Set to last Friday
  }
  // 화요일에서 금요일 오전 11시 이전인 경우
  else if (hours < 11) {
    lastWeekday.setDate(today.getDate() - 1); // Set to previous day
  }
  // 그 외의 경우 (영업일)
  else {
    lastWeekday = today; // Use today
  }

  return lastWeekday.toISOString().split('T')[0].replace(/-/g, '');
};
