export const getLastWeekday = () => {
  const holidays = [
    '20240515', // 석가탄신일
    '20240606', // 현충일
    '20240815', // 광복절
    '20240916', // 추석 첫째날
    '20240917', // 추석
    '20240918', // 추석 셋째날
    '20241003', // 개천절
    '20241009', // 한글날
    '20241225', // 성탄절
  ];

  const isHoliday = date => {
    const dateString = date.toISOString().split('T')[0].replace(/-/g, '');
    return holidays.includes(dateString);
  };

  const getLastValidBusinessDay = (date, maxTries = 4) => {
    let tries = 0;
    let validDate = new Date(date);

    while (isHoliday(validDate) && tries < maxTries) {
      validDate.setDate(validDate.getDate() - 1);
      tries += 1;
    }

    return validDate;
  };

  const today = new Date();
  let lastWeekday = new Date(today);

  const hours = today.getHours();
  const day = today.getDay(); //

  // 일요일인 경우
  if (day === 0) {
    lastWeekday.setDate(today.getDate() - 2);
  }
  // 토요일인 경우
  else if (day === 6) {
    lastWeekday.setDate(today.getDate() - 1);
  }
  // 월요일 오전 11시 이전인 경우
  else if (day === 1 && hours < 11) {
    lastWeekday.setDate(today.getDate() - 3);
  }
  // 화요일에서 금요일 오전 11시 이전인 경우
  else if (hours < 11) {
    lastWeekday.setDate(today.getDate() - 1);
  }
  // 그 외의 경우 (영업일)
  else {
    lastWeekday = today;
  }

  lastWeekday = getLastValidBusinessDay(lastWeekday);

  return lastWeekday.toISOString().split('T')[0].replace(/-/g, '');
};
