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
