import type { PublishedGame } from '../types/game'

export const publishedGames: PublishedGame[] = [
  {
    id: 'hefeedmee',
    name: '집사야 밥 줘!',
    description: '리듬에 맞춰 고양이에게 밥을 주세요! 쉽게 시작하고, 점점 빨라지는 중독성',
    genre: '리듬 캐주얼',
    rating: 4.6,
    reviewCount: 42,
    downloads: '4,000+',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.hardboiledexpress.hefeedmee',
    icon: 'games/hefeedmee/icon.png',
    screenshots: [
      'games/hefeedmee/ss1.png',
      'games/hefeedmee/ss2.png',
      'games/hefeedmee/ss3.png',
    ],
    accent: '#f97316',
  },
  {
    id: 'meowsurvivors',
    name: '냥냥 서바이벌',
    description: '자동 발사 무기로 밀려오는 적을 물리치세요!',
    genre: '서바이벌 캐주얼',
    downloads: '100+',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.hardboiledexpress.meowsurvivors',
    icon: 'games/meowsurvivors/icon.png',
    screenshots: [
      'games/meowsurvivors/ss1.png',
      'games/meowsurvivors/ss2.png',
      'games/meowsurvivors/ss3.png',
    ],
    accent: '#10b981',
  },
  {
    id: 'meowpang',
    name: '합칠고양',
    description: '같은 고양이 두 마리를 합쳐 더 큰 고양이로! 수박게임 스타일 퍼즐',
    genre: '퍼즐 캐주얼',
    downloads: '10+',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.hardboiledexpress.meowpang',
    icon: 'games/meowpang/icon.png',
    screenshots: [
      'games/meowpang/ss1.png',
      'games/meowpang/ss2.png',
      'games/meowpang/ss3.png',
    ],
    accent: '#8b5cf6',
  },
]
