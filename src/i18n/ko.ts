export const ko = {
  nav: {
    home: 'Home',
    work: 'Work',
    log: 'Log',
    insights: 'Insights',
    playground: 'Playground',
  },
  hero: {
    label: 'cat game studio',
    title: '하드보일드 스튜디오',
    tagline: '고양이를 사랑하는 1인 개발자가 만드는 작고 따뜻한 게임들',
    techStack: '🛠️ Tech Stack',
    contact: '📫 Contact',
  },
  games: {
    title: '출시한 게임들',
    viewAll: 'Google Play에서 전체 보기 →',
    downloads: '다운로드',
    storeLink: 'Google Play →',
    items: {
      hefeedmee: { name: '집사야 밥 줘!', description: '리듬에 맞춰 고양이에게 밥을 주세요! 쉽게 시작하고, 점점 빨라지는 중독성', genre: '리듬 캐주얼' },
      meowsurvivors: { name: '냥냥 서바이벌', description: '자동 발사 무기로 밀려오는 적을 물리치세요!', genre: '서바이벌 캐주얼' },
      meowpang: { name: '합칠고양', description: '같은 고양이 두 마리를 합쳐 더 큰 고양이로! 수박게임 스타일 퍼즐', genre: '퍼즐 캐주얼' },
    },
  },
  projects: {
    title: '만들고 있는 게임',
    viewAll: '개발 과정 보기 →',
    items: {
      meowbeat: { name: 'MeowBeat (냥비트)', tagline: 'AI가 만든 음악으로 고양이에게 밥을 주는 리듬 게임', platform: 'Android first (WebGL 추후)', phase: 'Phase 2 — 에셋/UI 연결 단계' },
      numlink: { name: 'NumLink (넘링크)', tagline: '숫자를 이어 그림을 완성하는 두뇌 퍼즐 200+ 스테이지', platform: 'Android (Google Play)', phase: 'AI 리팩토링 진행 중 (Phase 4-5)' },
    },
  },
  log: {
    title: '개발 일지',
    viewAll: '일지 전체 보기 →',
  },
  footer: {
    copy: '© 2025 Hardboiled Studio · 임주영',
  },
} as const
