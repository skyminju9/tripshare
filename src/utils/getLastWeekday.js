/**
 * Get the last valid weekday (business day) within business hours (11AM - 4PM)
 * @returns {string} - The last valid weekday date in 'YYYYMMDD' format
 */
export const getLastWeekday = () => {
  const today = new Date();
  let hours = today.getHours();
  let day = today.getDay(); // 0: Sunday, ..., 6: Saturday

  // If it's not a weekday or outside of business hours, adjust to the last business day
  while (day === 0 || day === 6 || hours < 11 || hours >= 16) {
    today.setDate(today.getDate() - 1);
    today.setHours(16, 0, 0, 0); // Set time to end of business day
    day = today.getDay();
    hours = today.getHours();
  }

  // Format the date to 'YYYYMMDD'
  return today.toISOString().split('T')[0].replace(/-/g, '');
};
