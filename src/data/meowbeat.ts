export type ShellStageId = 'booting' | 'loading' | 'ready' | 'degraded'
export type HealthStatus = 'ready' | 'pending' | 'blocked'

export interface ShellStage {
  id: ShellStageId
  label: string
  headline: string
  description: string
  accent: string
}

export interface StatusItem {
  title: string
  detail: string
  status: HealthStatus
}

export interface BridgeContract {
  direction: 'Wrapper -> Unity' | 'Unity -> Wrapper'
  name: string
  payload: string
  purpose: string
}

export interface MilestoneCard {
  title: string
  summary: string
  deliverables: string[]
}

export interface CollectionPreviewItem {
  tier: string
  name: string
  mood: string
}

export const projectSummary = {
  name: 'MeowBeat (냥비트)',
  tagline: '고양이 리듬 캐주얼 게임 — AI 음악 + 먹이주기 + 머지 + 냥카페',
  platform: 'Android first (WebGL 추후)',
  build: 'Unity 6000.x (C#)',
  focus: '리듬 70 + 수집/성장 30',
}

export const shellStages: ShellStage[] = [
  {
    id: 'booting',
    label: 'Phase 0-1',
    headline: '인프라 + 컨셉 확정',
    description:
      '새 리포/패키지명 설정, 경쟁작 분석, 차별화 킥 5선 확정, AI 음악 파이프라인 설계, 리디자인 가이드 작성.',
    accent: 'mint',
  },
  {
    id: 'loading',
    label: 'Phase 2',
    headline: '코어 시스템 구현 (코드 완료)',
    description:
      '데이터 기반 노트 시스템, 디자인 시스템, 먹이주기, 머지, AI 음악 파이프라인, 냥카페, 냥스타그램, 광고 최적화.',
    accent: 'amber',
  },
  {
    id: 'ready',
    label: 'Phase 3',
    headline: '에셋 연결 + QA + 출시',
    description:
      'AI 아트 생성, Suno 곡 생성, Unity 에디터 프리팹 배치, Android 빌드 테스트, 스토어 등록.',
    accent: 'sky',
  },
  {
    id: 'degraded',
    label: 'Post-Launch',
    headline: '라이브 운영 + 콘텐츠 추가',
    description:
      '유저 피드백 반영, 곡/고양이 추가, WebGL 포팅, 포트폴리오 대시보드 고도화.',
    accent: 'rose',
  },
]

export const readinessChecks: StatusItem[] = [
  {
    title: 'Phase 2 코드',
    detail: '8개 스프린트 코드 구현 완료 — 에셋/UI 연결 대기',
    status: 'ready',
  },
  {
    title: '에셋 폴더 구조',
    detail: 'Cat 폴더 통합, 서드파티 분리, 컨벤션 정리 완료',
    status: 'ready',
  },
  {
    title: 'AI 음악 (Suno)',
    detail: 'Suno Pro 가입 후 곡 30개 생성 필요 — Owner 액션 대기',
    status: 'pending',
  },
  {
    title: 'AI 아트 생성',
    detail: 'Midjourney/DALL-E로 아이콘, 스프라이트, 배경 생성 필요',
    status: 'pending',
  },
  {
    title: 'Unity 에디터 작업',
    detail: '프리팹 배치, NoteSpawner/ThemeManager 연결, 씬 세팅 필요',
    status: 'pending',
  },
  {
    title: '광고 최적화',
    detail: 'AdFreeManager, 리워드 광고 삽입점, GameEvents 전면 연동 완료 (Sprint 8 ✅)',
    status: 'ready',
  },
]

export const bridgeContracts: BridgeContract[] = [
  {
    direction: 'Unity -> Wrapper',
    name: 'GameEvents.OnNoteHit',
    payload: '{ songId, hitType, combo, score }',
    purpose: '노트 판정 결과를 이벤트 기반으로 전파',
  },
  {
    direction: 'Unity -> Wrapper',
    name: 'GameEvents.OnSongComplete',
    payload: '{ songId, score, grade, newBest }',
    purpose: '곡 완료 시 결과를 UI와 저장 시스템에 전달',
  },
  {
    direction: 'Unity -> Wrapper',
    name: 'GameEvents.OnCatMerge',
    payload: '{ fromTier, toTier, catId }',
    purpose: '머지 성공 시 이펙트와 보상 시스템 트리거',
  },
  {
    direction: 'Wrapper -> Unity',
    name: 'AdFreeManager.OnRewardGranted',
    payload: '{ placement, granted, transactionId }',
    purpose: '보상형 광고 결과를 Unity에 전달',
  },
  {
    direction: 'Unity -> Wrapper',
    name: 'PhotoManager.OnCapture',
    payload: '{ photoId, catId, timestamp }',
    purpose: '냥스타그램 사진 캡처 후 앨범 저장',
  },
  {
    direction: 'Unity -> Wrapper',
    name: 'ThemeManager.OnThemeChange',
    payload: '{ themeId, palette }',
    purpose: '테마 변경 시 전체 UI 색상 동기화',
  },
]

export const milestones: MilestoneCard[] = [
  {
    title: 'S1. 데이터 기반 노트 시스템',
    summary: '하드코딩된 4곡 switch문 → JSON 데이터 기반 동적 시스템으로 전환',
    deliverables: ['SongData/Loader', 'NoteSpawner', 'StreamingAssets/Songs'],
  },
  {
    title: 'S2-3. 디자인 + 먹이주기',
    summary: '테마 시스템 교체와 고양이 먹이주기 코어 게임플레이 구현',
    deliverables: ['ThemeConfig', 'RhythmCatController', '콤보 시스템'],
  },
  {
    title: 'S4-5. 머지 + AI 음악',
    summary: '냥냥 합체 시스템과 AI 음악 파이프라인 구축',
    deliverables: ['MergeManager', 'beat_extractor.py', 'note_generator.py'],
  },
  {
    title: 'S6-8. 카페 + 스타그램 + 광고',
    summary: '냥카페 경영, 냥스타그램 포토, 광고 최적화 + GameEvents 연동',
    deliverables: ['CafeManager', 'PhotoManager', 'AdFreeManager', 'RewardAdPoints'],
  },
]

export const launchBlockers = [
  'Suno Pro 곡 생성 미완료 (Owner 액션)',
  'AI 아트 에셋 미생성 (아이콘/스프라이트/배경)',
  'Unity 에디터 프리팹 배치 미완료',
  '머지 그리드 UI + 머지 이펙트 미구현',
  '포토 앨범 UI + SNS 공유 미구현',
  'Android 빌드 테스트 미실행',
]

export const collectionPreview: CollectionPreviewItem[] = [
  { tier: 'Idle', name: '기본 고양이', mood: '평화롭게 앉아있는 기본 포즈' },
  { tier: 'Wink', name: '윙크 고양이', mood: '리듬에 맞춰 윙크하는 반응' },
  { tier: 'Move', name: '움직이는 고양이', mood: '콤보가 쌓이면 신나게 춤추는 모션' },
  { tier: 'Run', name: '달리는 고양이', mood: 'Perfect 연타 시 달려가는 최고 반응' },
]

export const runtimeEvents = [
  'note_hit_perfect',
  'note_hit_good',
  'note_hit_miss',
  'combo_milestone',
  'song_complete',
  'cat_merge_success',
  'cat_tier_unlock',
  'cafe_item_unlock',
  'photo_captured',
  'reward_ad_completed',
]
