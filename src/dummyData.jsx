export const dummy_user = [
  {
    id: 1,
    name: '이가연',
    nickname: '테디베어1',
    profileImage: require('./assets/images/dummy/dummyProfile_1.png'),
    email: 'test1@test.com',
    password: 'password',
    bookmarkList: [2, 3, 5, 6, 7],
    interestArea: 'japan',
  },
  {
    id: 2,
    name: '오정혁',
    nickname: '테디베어2',
    profileImage: require('./assets/images/dummy/dummyProfile_2.png'),
    email: 'test2@test.com',
    password: 'password',
    bookmarkList: [2, 3, 5, 6, 7],
    interestArea: 'japan',
  },
  {
    id: 3,
    name: '우예인',
    nickname: '테디베어3',
    profileImage: require('./assets/images/dummy/dummyProfile_3.png'),
    email: 'test3@test.com',
    password: 'password',
    bookmarkList: [2, 3, 5, 6, 7],
    interestArea: 'japan',
  },
  {
    id: 4,
    name: '한서흔',
    nickname: '테디베어4',
    profileImage: require('./assets/images/dummy/dummyProfile_4.png'),
    email: 'test4@test.com',
    password: 'password',
    bookmarkList: [2, 3, 5, 6, 7],
    interestArea: 'japan',
  },
  {
    id: 5,
    name: '김동영',
    nickname: '테디베어8',
    profileImage: require('./assets/images/dummy/dummyProfile_5.png'),
    email: 'test5@test.com',
    password: 'password',
    bookmarkList: [2, 3, 5, 6, 7],
    interestArea: 'japan',
  },
];

export const dummy_article = [
  {
    id: 1,
    title: '도쿄 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요? 안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요? 안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?안녕하세요! 제가 다음 달에 처음으로 도쿄에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들',
    createdAt: new Date().getTime(),
    like: 1,
    bookmark: 1,
    userId: 5,
    tag: '질문',
  },
  {
    id: 2,
    title: '프랑스 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 프랑스에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-05-03 10:20').getTime(),
    like: 2,
    bookmark: 2,
    userId: 2,
    tag: '잡담',
  },
  {
    id: 3,
    title: '미국 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 미국에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-05-02 10:20').getTime(),
    like: 3,
    bookmark: 3,
    userId: 4,
    tag: '질문',
  },
  {
    id: 4,
    title: '독일 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 독일에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-05-01 10:20').getTime(),
    like: 4,
    bookmark: 4,
    userId: 3,
    tag: '질문',
  },
  {
    id: 5,
    title: '호주 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 호주에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-04-15 10:20').getTime(),
    like: 5,
    bookmark: 5,
    userId: 4,
    tag: '질문',
  },
  {
    id: 6,
    title: '호주 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 호주에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-04-21 10:20'),
    like: 5,
    bookmark: 5,
    userId: 5,
    tag: '질문',
  },
  {
    id: 7,
    title: '호주 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 호주에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-04-20 10:20'),
    like: 5,
    bookmark: 6,
    userId: 5,
    tag: '질문',
  },
  {
    id: 8,
    title: '호주 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 호주에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-04-20 10:20'),
    like: 5,
    bookmark: 6,
    userId: 5,
    tag: '질문',
  },
  {
    id: 9,
    title: '호주 3박 4일 계획표 평가 부탁드려요!',
    content:
      '안녕하세요! 제가 다음 달에 처음으로 호주에 가게 되었는데요.. 첫 해외여행이라 너무 떨립니다 ㅎㅎ 고수님들의 계획표 조언 부탁드려도 될까요?',
    createdAt: new Date('2024-04-20 10:20'),
    like: 5,
    bookmark: 6,
    userId: 5,
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
    userId: 1,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요??',
    like: 5,
    userId: 1,
    createdAt: new Date('2024-05-18 10:20'),
  },
  {
    id: 3,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 1,
    createdAt: new Date('2024-05-20 16:20'),
  },
  {
    id: 4,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 1,
    createdAt: new Date('2024-05-20 16:20'),
  },
  {
    id: 5,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-20 16:20'),
  },
  {
    id: 6,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-20 16:20'),
  },
  {
    id: 7,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-10 16:20'),
  },
  {
    id: 8,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-10 16:20'),
  },
];

export const dummy_meet = [
  {
    id: 1,
    location: { latitude: 37.78827, longitude: -122.4322 },
    address: '도쿄타워',
    title: '도쿄타워 같이 가실 분',
    content: '도쿄타워 야경 보고 같이 저녁 먹을 한국인 분들 구해요!',
    name: '도쿄최고',
    userId: 4,
    profileImage: require('./assets/images/dummy/dummyProfile_1.png'),
    category: 'impromptu',
    createAt: new Date(),
    meetingAt: new Date(),
  },
  {
    id: 2,
    location: { latitude: 37.78825, longitude: -122.4324 },
    address: '도쿄타워',
    title: '도쿄타워 같이 가실 분',
    content: '도쿄타워 야경 보고 같이 저녁 먹을 한국인 분들 구해요!',
    name: '도쿄최고',
    profileImage: require('./assets/images/dummy/dummyProfile_2.png'),
    category: 'impromptu',
    createAt: new Date(),
    meetingAt: new Date(),
  },
  {
    id: 3,
    location: { latitude: 37.7883, longitude: -122.432 },
    address: '도쿄타워',
    title: '도쿄타워 같이 가실 분',
    content: '도쿄타워 야경 보고 같이 저녁 먹을 한국인 분들 구해요!',
    userId: 4,
    profileImage: require('./assets/images/dummy/dummyProfile_3.png'),
    name: '도쿄최고',
    category: 'accompany',
    createAt: new Date(),
    meetingAt: new Date(),
  },
  {
    id: 4,
    location: { latitude: 37.78815, longitude: -122.4318 },
    address: '도쿄타워',
    title: '도쿄타워 같이 가실 분',
    content: '도쿄타워 야경 보고 같이 저녁 먹을 한국인 분들 구해요!',
    name: '도쿄최고',
    userId: 4,
    profileImage: require('./assets/images/dummy/dummyProfile_4.png'),
    category: 'impromptu',
    createAt: new Date(),
    meetingAt: new Date(),
  },
];

export const dummy_plans = [
  {
    id: 1,
    title: '싱가포르 여행',
    dates: ['24.05.20', '24.05.28'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('./assets/images/myTrip/basicimage1.jpeg'),
    dDay: 3,
  },
  {
    id: 2,
    title: '도쿄 여행',
    dates: ['24.05.17', '24.05.20'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
    ],
    coverImage: require('./assets/images/myTrip/basicimage2.jpeg'),
    dDay: 0,
  },
  {
    id: 3,
    title: '홍콩 여행',
    dates: ['24.05.10', '24.05.16'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('./assets/images/myTrip/basicimage3.jpeg'),
    dDay: -1,
  },
  {
    id: 4,
    title: '홍콩 여행',
    dates: ['24.05.10', '24.05.16'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('./assets/images/myTrip/basicimage3.jpeg'),
    dDay: -3,
  },
  {
    id: 5,
    title: '홍콩 여행',
    dates: ['24.05.10', '24.05.16'],
    friendList: [
      {
        friendId: 1,
        name: '오정혁',
      },
      {
        friendId: 2,
        name: '우예인',
      },
      {
        friendId: 3,
        name: '한서흔',
      },
    ],
    coverImage: require('./assets/images/myTrip/basicimage3.jpeg'),
    dDay: -10,
  },
];

export const dummy_locations = [
  {
    locationId: 1,
    locationName: '도쿄 타워',
    locationAddress: '4-chome 2-8, Shibakoen, Minato 105-0011 Tokyo Prefecture',
    isFavorite: true,
  },
  {
    locationId: 2,
    locationName: '도쿄 디즈니랜드',
    locationAddress: '4-chome 2-8, Shibakoen, Minato 105-0011 Tokyo Prefecture',
    isFavorite: true,
  },
  {
    locationId: 3,
    locationName: '이치란 라멘',
    locationAddress: '4-chome 2-8, Shibakoen, Minato 105-0011 Tokyo Prefecture',
    isFavorite: false,
  },
  {
    locationId: 4,
    locationName: '타코야키',
    locationAddress: '4-chome 2-8, Shibakoen, Minato 105-0011 Tokyo Prefecture',
    isFavorite: true,
  },
  {
    locationId: 5,
    locationName: '디즈니스토어',
    locationAddress: '4-chome 2-8, Shibakoen, Minato 105-0011 Tokyo Prefecture',
    isFavorite: false,
  },
  {
    locationId: 6,
    locationName: '닌텐도 스토어',
    locationAddress: '4-chome 2-8, Shibakoen, Minato 105-0011 Tokyo Prefecture',
    isFavorite: false,
  },
];

export const dummy_schedules = [
  {
    id: 1,
    date: '2024-05-20',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '이치란 라멘',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '쇼핑',
      },
      {
        scheduleId: 4,
        time: '오후 2:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 5,
        time: '오후 3:00',
        location: '이치란 라멘',
      },
      {
        scheduleId: 6,
        time: '오후 6:00',
        location: '쇼핑',
      },
      {
        scheduleId: 7,
        time: '오후 9:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 8,
        time: '오후 11:00',
        location: '이치란 라멘',
      },
    ],
  },
  {
    id: 2,
    date: '2024-05-21',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '도쿄타워',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '푸딩 먹으러 가기',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '다음 장소로 이동',
      },
    ],
  },
  {
    id: 3,
    date: '2024-05-22',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '신주쿠역에서 출발',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '타코야키 맛집',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '치이카와 팝업스토어',
      },
    ],
  },
  {
    id: 4,
    date: '2024-05-23',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '이치란 라멘',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '쇼핑',
      },
    ],
  },
  {
    id: 5,
    date: '2024-05-24',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '이치란 라멘',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '쇼핑',
      },
    ],
  },
  {
    id: 6,
    date: '2024-05-25',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '이치란 라멘',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '쇼핑',
      },
    ],
  },
  {
    id: 7,
    date: '2024-05-26',
    schedule: [
      {
        scheduleId: 1,
        time: '오전 09:00',
        location: '도쿄 디즈니랜드',
      },
      {
        scheduleId: 2,
        time: '오전 11:00',
        location: '이치란 라멘',
      },
      {
        scheduleId: 3,
        time: '오후 1:00',
        location: '쇼핑',
      },
    ],
  },
];
