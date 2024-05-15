//src/apis/timeDifference/index.js

import { getTimezoneUrl } from './endpoints';

/**
 *
 * @param {number} lat - 위도
 * @param {number} lon - 경도
 * @returns {Promise<string>} - 시차 문자열을 반환
 */
export const fetchTimeDifference = async (lat, lon) => {
  try {
    const response = await fetch(getTimezoneUrl(lat, lon));
    const data = await response.json();

    const koreaOffset = 9 * 3600; // 한국은 UTC+9
    const localOffset = data.gmtOffset;

    const timeDifference = (localOffset - koreaOffset) / 3600; // 초 단위를 시간 단위로 변환

    if (timeDifference === 0) {
      return '시차 없음';
    }

    const hours = Math.floor(Math.abs(timeDifference));
    const minutes = Math.round((Math.abs(timeDifference) - hours) * 60);

    const isFaster = timeDifference > 0;
    const formattedDiff = `${hours}시간 ${minutes > 0 ? `${minutes}분 ` : ''}${
      isFaster ? '빠름' : '느림'
    }`;
    return formattedDiff;
  } catch (error) {
    console.error('Error fetching time difference:', error);
    return 'N/A'; // 에러 발생 시 기본 값 반환
  }
};
