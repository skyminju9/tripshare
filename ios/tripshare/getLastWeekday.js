// src/utils/getLastWeekday.js

/**
 * Check if the given date is a holiday
 * @param {Date} date - The date to check
 * @returns {boolean} - True if the date is a holiday, false otherwise
 */
const isHoliday = date => {
  // Example holidays array (YYYYMMDD format), you can expand this as needed
  const holidays = ['20240101', '20240501', '20240815'];
  const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '');
  return holidays.includes(formattedDate);
};

/**
 * Get the last valid weekday (business day)
 * @returns {string} - The last valid weekday date in 'YYYYMMDD' format
 */
export const getLastWeekday = () => {
  const today = new Date();
  let hours = today.getHours();
  let day = today.getDay(); // 0: Sunday, ..., 6: Saturday

  // Adjust to last business day if today is a holiday
  while (isHoliday(today)) {
    today.setDate(today.getDate() - 1);
    day = today.getDay();
  }

  // If before 11 AM or it's a weekend, adjust to the last business day
  if (hours < 11 || day === 0 || day === 6 || isHoliday(today)) {
    do {
      today.setDate(today.getDate() - 1);
      day = today.getDay();
    } while (day === 0 || day === 6 || isHoliday(today));
  }

  // Format the date to 'YYYYMMDD'
  return today.toISOString().split('T')[0].replace(/-/g, '');
};
