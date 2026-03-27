import type { PublishedGame } from '../types/game'

export const publishedGames: PublishedGame[] = [
  {
    id: 'hefeedmee',
    name: '집사야 밥 줘!',
    description: '점점 빨라지는 리듬 게임으로 고양이에게 쿠키를 먹이세요!',
    genre: '리듬 캐주얼',
    rating: 4.6,
    reviewCount: 42,
    downloads: '1,000+',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.hardboiledexpress.hefeedmee',
    iconSprite: 'catrush-cats/Cat/01.png',
    accent: '#f97316',
  },
  {
    id: 'meowsurvivors',
    name: '냥냥 서바이벌',
    description: '다가오는 적을 물리치며 고양이와 오래 생존하세요!',
    genre: '서바이벌 캐주얼',
    downloads: '100+',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.hardboiledexpress.meowsurvivors',
    iconSprite: 'catrush-cats/Cat/07.png',
    accent: '#10b981',
  },
  {
    id: 'meowpang',
    name: '고양이를 합칠고양',
    description: '고양이들을 뭉쳐서 큰 고양이로 만드는 퍼즐 게임',
    genre: '퍼즐 캐주얼',
    downloads: '10+',
    playStoreUrl:
      'https://play.google.com/store/apps/details?id=com.hardboiledexpress.meowpang',
    iconSprite: 'catrush-cats/Cat/13.png',
    accent: '#8b5cf6',
  },
]
