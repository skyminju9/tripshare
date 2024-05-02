// 랜덤 날짜 생성
const getRandomDate = () => {
  const startDate = new Date(2024, 0, 1);
  const endDate = new Date(2024, 11, 31);

  const start = startDate.getTime();
  const end = endDate.getTime();

  return new Date(start + Math.random() * (end - start));
};
const getNextWeek = date => {
  const nextDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7);

  return nextDate.getTime();
};
const DATE = getRandomDate();

export const dummy_user = [
  {
    id: 1,
    name: '이가연',
    profileImage: require('./assets/images/dummy/dummyProfile_1.png'),
    email: 'test1@test.com',
    password: 'password',
    bookmarkList: [],
    interestArea: 'japan',
  },
  {
    id: 2,
    name: '오정혁',
    profileImage: require('./assets/images/dummy/dummyProfile_2.png'),
    email: 'test2@test.com',
    password: 'password',
    bookmarkList: [],
    interestArea: 'japan',
  },
  {
    id: 3,
    name: '우예인',
    profileImage: require('./assets/images/dummy/dummyProfile_3.png'),
    email: 'test3@test.com',
    password: 'password',
    bookmarkList: [],
    interestArea: 'japan',
  },
  {
    id: 4,
    name: '한서흔',
    profileImage: require('./assets/images/dummy/dummyProfile_4.png'),
    email: 'test4@test.com',
    password: 'password',
    bookmarkList: [],
    interestArea: 'japan',
  },
  {
    id: 5,
    name: '김동영',
    profileImage: require('./assets/images/dummy/dummyProfile_5.png'),
    email: 'test5@test.com',
    password: 'password',
    bookmarkList: [],
    interestArea: 'japan',
  },
];

export const dummy_article = [
  {
    id: 1,
    title: '도쿄 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: getRandomDate(),
    like: 1,
    bookmark: 1,
    tag: '질문',
  },
  {
    id: 2,
    title: '프랑스 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 프랑스에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: getRandomDate(),
    like: 2,
    bookmark: 2,
    tag: '질문',
  },
  {
    id: 3,
    title: '미국 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 미국에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: getRandomDate(),
    like: 3,
    bookmark: 3,
    tag: '질문',
  },
  {
    id: 4,
    title: '독일 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 독일에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: getRandomDate(),
    like: 4,
    bookmark: 4,
    tag: '질문',
  },
  {
    id: 5,
    title: '호주 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 호주에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: getRandomDate(),
    like: 5,
    bookmark: 5,
    tag: '질문',
  },
];

export const dummy_comment = [
  {
    id: 1,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요?',
    like: 1,
    createdAt: getRandomDate(),
  },
  {
    id: 2,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요??',
    like: 5,
    createdAt: getRandomDate(),
  },
  {
    id: 3,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    createdAt: getRandomDate(),
  },
];

export const dummy_meet = [
  {
    id: 1,
    location: '',
    title: '도쿄 타워 같이 가실 분',
    content: '도쿄타워 야경 보고 같이 저녁 먹을 한국인 분들 구해요!',
    userId: '일본만열번',
    category: 'ACCOMPANY',
    createdAt: getRandomDate(),
    meetingAt: getRandomDate(),
  },
  {
    id: 2,
    location: '',
    title: '도쿄 타워 같이 가실 분',
    content: '지금 도쿄타워인데 야경 같이 구경하실 분들 구해요!',
    userId: '일본만열번',
    category: 'IMPROMPTU',
    createdAt: getRandomDate(),
    meetingAt: getRandomDate(),
  },
];

export const dummy_plan = [
  {
    planId: 1,
    title: '싱가포르 여행',
    dates: [DATE, getNextWeek(DATE)],
    location: '',
    friendList: ['우예인, 오정혁, 한서흔, 이가연'],
    coverImage: require('./assets/images/dummy/dummyPlan.png'),
  },
];

export const dummy_plan_detail = [
  {
    planId: 1,
    title: '싱가포르 여행',
    dates: [DATE, getNextWeek(DATE)],
    location: '',
    friendList: ['우예인, 오정혁, 한서흔, 이가연'],
    coverImage: require('./assets/images/dummy/dummyPlan.png'),
    placesMarked: [],
    schedules: [
      // 추가 필요
    ],
    ckecklist: [
      {
        id: 1,
        content: '비자 발급',
        checked: false,
      },
      {
        id: 2,
        content: '여권 챙기기',
        checked: false,
      },
    ],
    isOpen: false,
    like: 1,
    bookmark: 1,
  },
];

export const dummy_record = [
  {
    userId: '김민주',
    isOpen: false,
    images: require('./assets/images/dummy/dummyRecord.png'),
    title: '오사카 마지막 날!',
    content: '이번 여행도 즐거웠다!',
    like: 1,
    bookmark: 1,
  },
];
