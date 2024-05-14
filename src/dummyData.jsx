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
    createdAt: new Date('2024-05-12 10:10'),
  },
  {
    id: 2,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요??',
    like: 5,
    userId: 1,
    createdAt: new Date('2024-05-12 10:20'),
  },
  {
    id: 3,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 1,
    createdAt: new Date('2024-05-14 16:20'),
  },
  {
    id: 4,
    name: '도쿄타워',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 1,
    createdAt: new Date('2024-05-14 16:20'),
  },
  {
    id: 5,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-14 16:20'),
  },
  {
    id: 6,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-15 16:20'),
  },
  {
    id: 7,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-16 16:20'),
  },
  {
    id: 8,
    name: '김동영',
    articleId: 1,
    content: '마지막날 일정이 좀 빡빡한 것 같아요???',
    like: 3,
    userId: 5,
    createdAt: new Date('2024-05-17 16:20'),
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
    createAt: new Date().getTime(),
    meetingAt: new Date().getTime(),
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
    createAt: new Date().getTime(),
    meetingAt: new Date().getTime(),
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
    createAt: new Date().getTime(),
    meetingAt: new Date().getTime(),
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
    createAt: new Date().getTime(),
    meetingAt: new Date().getTime(),
  },
];

export const dummy_chat = [
  {
    id: 1,
    sendUserId: 5,
    receiveUserId: 4,
    chatList: [
      {
        id: 1,
        userId: 5,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:20').getTime(),
        isRead: true,
      },
      {
        id: 2,
        userId: 4,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:21').getTime(),
        isRead: true,
      },
      {
        id: 3,
        userId: 5,
        text: '올라온 동행글 보고 연락했어요. 아직도 동행 구하시나요?',
        createdAt: new Date('2024-05-12 10:22').getTime(),
        isRead: true,
      },
      {
        id: 4,
        userId: 4,
        text: '네 아직 못구했어요 ㅠㅠ ',
        createdAt: new Date('2024-05-12 10:23').getTime(),
        isRead: true,
      },
      {
        id: 5,
        userId: 5,
        text: '그럼 저랑 같이 가실래요?',
        createdAt: new Date('2024-05-12 10:24').getTime(),
        isRead: false,
      },
    ],
  },
  {
    id: 2,
    sendUserId: 5,
    receiveUserId: 3,
    chatList: [
      {
        id: 1,
        userId: 5,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:20').getTime(),
        isRead: true,
      },
      {
        id: 2,
        userId: 3,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:21').getTime(),
        isRead: true,
      },
      {
        id: 3,
        userId: 5,
        text: '올라온 동행글 보고 연락했어요. 아직도 동행 구하시나요?',
        createdAt: new Date('2024-05-12 10:22').getTime(),
        isRead: true,
      },
      {
        id: 4,
        userId: 3,
        text: '네 아직 못구했어요 ㅠㅠ ',
        createdAt: new Date('2024-05-12 10:23').getTime(),
        isRead: true,
      },
      {
        id: 5,
        userId: 5,
        text: '그럼 저랑 같이 가실래요?',
        createdAt: new Date('2024-05-12 10:24').getTime(),
        isRead: true,
      },
    ],
  },
  {
    id: 3,
    sendUserId: 5,
    receiveUserId: 2,
    chatList: [
      {
        id: 1,
        userId: 5,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:20').getTime(),
        isRead: true,
      },
      {
        id: 2,
        userId: 2,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:21').getTime(),
        isRead: true,
      },
      {
        id: 3,
        userId: 5,
        text: '올라온 동행글 보고 연락했어요. 아직도 동행 구하시나요?',
        createdAt: new Date('2024-05-12 10:22').getTime(),
        isRead: true,
      },
      {
        id: 4,
        userId: 2,
        text: '네 아직 못구했어요 ㅠㅠ ',
        createdAt: new Date('2024-05-12 10:23').getTime(),
        isRead: true,
      },
      {
        id: 5,
        userId: 5,
        text: '그럼 저랑 같이 가실래요?',
        createdAt: new Date('2024-05-12 10:24').getTime(),
        isRead: true,
      },
      {
        id: 6,
        userId: 2,
        text: '네 좋아요!',
        createdAt: new Date('2024-05-13 10:10').getTime(),
        isRead: true,
      },
      {
        id: 7,
        userId: 2,
        text: '뭔가 긴글이 필요할 것 같아 이렇게 남겨보는 텍스트입니다!',
        createdAt: new Date('2024-05-13 10:10').getTime(),
        isRead: true,
      },
    ],
  },
  {
    id: 4,
    sendUserId: 1,
    receiveUserId: 5,
    chatList: [
      {
        id: 1,
        userId: 1,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:20').getTime(),
        isRead: true,
      },
      {
        id: 2,
        userId: 5,
        text: '안녕하세요',
        createdAt: new Date('2024-05-12 10:21').getTime(),
        isRead: true,
      },
      {
        id: 3,
        userId: 1,
        text: '올라온 동행글 보고 연락했어요. 아직도 동행 구하시나요?',
        createdAt: new Date('2024-05-12 10:22').getTime(),
        isRead: true,
      },
      {
        id: 4,
        userId: 5,
        text: '네 아직 못구했어요 ㅠㅠ ',
        createdAt: new Date('2024-05-12 10:23').getTime(),
        isRead: true,
      },
      {
        id: 5,
        userId: 1,
        text: '그럼 저랑 같이 가실래요?',
        createdAt: new Date('2024-05-12 10:24').getTime(),
        isRead: false,
      },
    ],
  },
];

export const dummy_plans = [
  {
    id: 1,
    title: '싱가포르 여행',
    dates: ['24.05.20', '24.05.28'],
    location: '싱가포르',
    tags: ['싱가포르', '자유여행'],
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
    location: '도쿄, 일본',
    tags: ['도쿄', '디즈니랜드', '맛집탐방'],
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
    location: '마카오, 홍콩',
    tags: ['카지노', '찐맛집'],
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
    location: '마카오, 홍콩',
    tags: ['카지노', '찐맛집'],
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
    coverImage: require('./assets/images/myTrip/basicimage4.jpeg'),
    dDay: -3,
  },
  {
    id: 5,
    title: '홍콩 여행',
    dates: ['24.05.10', '24.05.16'],
    location: '마카오, 홍콩',
    tags: ['카지노', '찐맛집'],
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
    coverImage: require('./assets/images/myTrip/basicimage5.jpeg'),
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

export const dummy_attractions = [
  {
    id: 1,
    placeName: '메이지신궁',
    tag: '명소',
    detail: '도쿄에 위치한 문화 유산으로, 일본의 역사와 전통을 경험할 수 있는 아름다운 장소입니다.',
    coverImage: require('./assets/images/attraction/palace.png'),
    star: 3,
    reviews: [
      {
        id: 1,
        placeId: 1,
        comment: '좋았습니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 2,
        placeId: 1,
        comment: '좋았습니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 3,
        placeId: 1,
        comment: '좋았습니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 4,
        placeId: 1,
        comment: '좋았습니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
    ],
    tel: '00-000-000',
    createAt: new Date().getTime(),
  },
  {
    id: 2,
    placeName: '교파오 롯폰기',
    detail: '롯폰기에 위치한 교자 전문점, 직접 하이볼을 만들어 마실 수 있다.',
    tag: '맛집',
    coverImage: require('./assets/images/attraction/food.jpeg'),
    star: 3,
    reviews: [
      {
        id: 1,
        placeId: 2,
        comment: '맛있었어요. 주인분도 친절해요.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 2,
        placeId: 2,
        comment: '맛있었어요. 주인분도 친절해요.',
        createdAt: new Date().getTime(),
        star: 4,
      },
    ],
    tel: '00-000-000',
    createAt: new Date().getTime(),
  },
  {
    id: 3,
    placeName: '스크럼블 교차로',
    detail: '시부야 역 하치코 출구에서 여러 방향으로 한번에 건널 수 있도록 만들어진 시부야의 현관',
    tag: '명소',
    coverImage: require('./assets/images/attraction/scrumble.jpeg'),
    star: 3,
    reviews: [
      {
        id: 1,
        placeId: 3,
        comment: '사람이 많고 혼잡함.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 2,
        placeId: 3,
        comment: '사람이 많고 혼잡함.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 3,
        placeId: 3,
        comment: '사람이 많고 혼잡함.',
        createdAt: new Date().getTime(),
        star: 4,
      },
    ],
    tel: '00-000-000',
    createAt: new Date().getTime(),
  },
  {
    id: 4,
    placeName: '이치란 시부야점',
    detail: '진하고 부드러운 돈코츠 라멘으로 유명한 체인점',
    tag: '맛집',
    coverImage: require('./assets/images/attraction/food2.jpeg'),
    star: 3,
    reviews: [
      {
        id: 1,
        placeId: 4,
        comment: '웨이팅은 20분정도 해야 합니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 2,
        placeId: 4,
        comment: '웨이팅은 20분정도 해야 합니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
      {
        id: 3,
        placeId: 4,
        comment: '웨이팅은 20분정도 해야 합니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
    ],
    tel: '00-000-000',
    createAt: new Date().getTime(),
  },
  {
    id: 5,
    placeName: '우에노 공원',
    detail: '공원 숲속 아트 삼매경에 빠지고, 봄 벚꽃, 가을 낙엽으로 사계절이 아름다움을 즐기자.',
    tag: '명소',
    coverImage: require('./assets/images/attraction/park.jpeg'),
    star: 3,
    reviews: [
      {
        id: 1,
        placeId: 5,
        comment: '좋았습니다.',
        createdAt: new Date().getTime(),
        star: 4,
      },
    ],
    tel: '00-000-000',
    createAt: new Date().getTime(),
  },
];
