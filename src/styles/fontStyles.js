import { StyleSheet } from 'react-native';
import color from './colorPalette';

const fontStyles = StyleSheet.create({
  //메인

  title01: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 28,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.56,
  },
  title02: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.4,
  },
  title03: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.36,
  },

  basicFont01: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.32,
  },
  basicFont02: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.28,
  },

  boldFont01: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.32,
  },
  boldFont02: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 14,
    color: color.TEXT_PRIMARY,
    letterSpacing: -0.28,
  },

  //자주 쓰임

  blueTitle01: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 28,
    color: color.BLUE_500,
    letterSpacing: -0.56,
  },
  blueTitle02: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    color: color.BLUE_500,
    letterSpacing: -0.4,
  },
  blueTitle03: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 18,
    color: color.BLUE_500,
    letterSpacing: -0.36,
  },

  blueFont01: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    color: color.BLUE_500,
    letterSpacing: -0.32,
  },
  blueFont02: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: color.BLUE_500,
    letterSpacing: -0.28,
  },

  grayFont01: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    color: color.TEXT_SECONDARY,
    letterSpacing: -0.32,
  },
  grayFont02: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: color.TEXT_SECONDARY,
    letterSpacing: -0.28,
  }, // * 세컨더리 색들은 게시판에서 글내용 미리보기 또는 인풋에서 플레이스 홀더

  //상당히 쓰임

  whiteTitle02: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 20,
    color: color.WHITE,
    letterSpacing: -0.4,
  }, // 파란 버튼에서 글씨로 상당히 쓰임

  navyFont01: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    color: color.BLUE_600,
    letterSpacing: -0.32,
  }, // 계획 등록 페이지 작은글씨 대부분이 이것 (블루600)

  redFont02: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: color.RED_400,
    letterSpacing: -0.28,
  }, // 댓글 아이콘과 함께 댓글수 나타날때 상당히 쓰임
});

export default fontStyles;
