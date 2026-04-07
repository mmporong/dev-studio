export const en = {
  nav: {
    home: 'Home',
    work: 'Work',
    log: 'Log',
    insights: 'Insights',
    playground: 'Playground',
  },
  hero: {
    label: 'cat game studio',
    title: 'Hardboiled Studio',
    tagline: 'Small, warm games made by a solo developer who loves cats',
    techStack: '🛠️ Tech Stack',
    contact: '📫 Contact',
  },
  games: {
    title: 'Published Games',
    viewAll: 'View all on Google Play →',
    downloads: 'downloads',
    storeLink: 'Google Play →',
    items: {
      hefeedmee: { name: 'Feed Me!', description: 'Feed your cat to the rhythm! Easy to start, addictively fast-paced', genre: 'Rhythm Casual' },
      meowsurvivors: { name: 'Meow Survivors', description: 'Defeat waves of enemies with auto-firing weapons!', genre: 'Survival Casual' },
      meowpang: { name: 'MeowPang', description: 'Merge two same cats into a bigger one! Suika-style puzzle', genre: 'Puzzle Casual' },
    },
  },
  projects: {
    title: 'Games in Progress',
    viewAll: 'View dev process →',
    items: {
      meowbeat: { name: 'MeowBeat', tagline: 'A rhythm game where you feed cats to AI-generated music', platform: 'Android first (WebGL later)', phase: 'Phase 2 — Asset/UI Integration' },
      numlink: { name: 'NumLink', tagline: 'Connect numbers to complete pictures — 200+ brain puzzles', platform: 'Android (Google Play)', phase: 'AI Refactoring in Progress (Phase 4-5)' },
    },
  },
  log: {
    title: 'Dev Log',
    viewAll: 'View all logs →',
  },
  footer: {
    copy: '© 2025 Hardboiled Studio · Juyoung Lim',
  },
} as const
