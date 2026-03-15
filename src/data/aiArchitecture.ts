export interface PageMeta {
  title: string
  subtitle: string
  role: string
  techStack: string[]
}

export interface Problem {
  num: number
  title: string
  symptom: string
}

export interface MetricRow {
  label: string
  value: string
}

export interface Strategy {
  id: string
  title: string
  description: string
  code: string[]
  metrics: MetricRow[]
}

export interface CaseStudy {
  name: string
  genre: string
  highlights: string[]
}

export interface Result {
  effect: string
  detail: string
}

export const pageMeta: PageMeta = {
  title: 'Unity × AI 코딩 도구 협업 최적화 아키텍처',
  subtitle: 'AI가 아키텍처를 이해하도록 프로젝트 구조 자체를 설계하다',
  role: '1인 개발 — 설계, 구현, AI 협업 워크플로우 전체',
  techStack: [
    'Unity 6000.x',
    'C# 9',
    'Assembly Definition',
    'ScriptableObject',
    'Claude Code',
    'Cursor',
    'GitHub Template Repository',
  ],
}

export const problems: Problem[] = [
  {
    num: 1,
    title: '컨텍스트 유실',
    symptom: 'AI가 매 대화마다 프로젝트 구조를 잊음. 같은 설명을 반복해야 함',
  },
  {
    num: 2,
    title: 'Unity 안티패턴 생성',
    symptom:
      'GameObject.Find(), legacy Input.GetKey(), 매직 넘버 등 AI가 안티패턴 코드를 생성',
  },
  {
    num: 3,
    title: '레이어 경계 무시',
    symptom:
      'AI가 Domain 레이어에 UnityEngine 참조를 넣거나, 순환 의존을 만듦',
  },
  {
    num: 4,
    title: '.meta 파일 누락',
    symptom:
      'AI가 외부에서 .cs 파일 생성 시 .meta를 빠뜨려 에셋 참조가 깨짐',
  },
  {
    num: 5,
    title: '하드코딩 습관',
    symptom:
      'ScriptableObject 기반 설정을 모르고 값을 코드에 직접 삽입',
  },
]

export const antiPatterns: string[] = [
  'DO NOT use GameObject.Find() — use ServiceLocator',
  'DO NOT use FindObjectOfType() — only in GameBootstrapper',
  'DO NOT store game state in MonoBehaviour fields',
  'DO NOT use Input.GetKey() — use InputAction',
  'DO NOT create new Singleton classes — use ServiceLocator',
  'DO NOT modify .unity scene files directly — corruption risk',
  'DO NOT use magic numbers — use GameConstants or ScriptableObject',
  'DO NOT chain references like manager.X.Y.Z',
  'DO NOT put business logic in MonoBehaviour — use Domain layer',
  'DO NOT create .cs without .meta — asset reference breaks',
]

export const strategies: Strategy[] = [
  {
    id: 'claude-md',
    title: 'CLAUDE.md — AI 컨텍스트 자동 주입',
    description:
      'AI 도구가 프로젝트를 열 때 CLAUDE.md를 자동으로 읽는다. 이 파일에 아키텍처, 규칙, 명령어를 집약하여 매 대화마다 컨텍스트를 자동 전달한다.',
    code: [
      'CLAUDE.md',
      '├── Commands        — 빌드, 테스트, 리컴파일 명령어',
      '├── Stack           — Unity 버전, C# 버전, 사용 패키지',
      '├── Architecture    — ServiceLocator, SO Events, Domain 레이어 요약',
      '├── NEVER           — 10개 Anti-Pattern 규칙 ("DO NOT" 형식)',
      '└── Conventions     — 네이밍, 커밋, 파일 구조 규칙',
    ],
    metrics: [
      { label: 'Cat Merge Cafe CLAUDE.md', value: '132줄' },
      { label: '에이전트 역할 정의', value: '6개' },
      { label: 'Anti-Pattern 규칙', value: '10개' },
    ],
  },
  {
    id: 'asmdef',
    title: 'Assembly Definition 4-tier — 컴파일러가 AI 실수를 잡는다',
    description:
      'Assembly Definition으로 4개 레이어를 정의하고 단방향 의존성을 강제했다. AI가 잘못된 레이어에 코드를 넣으면 컴파일 에러로 즉시 피드백된다.',
    code: [
      '[Editor]     _Game.Editor         ← 빌드 제외, 에디터 전용',
      '                  ↓ 참조',
      '[Runtime]    _Game.Runtime        ← MonoBehaviour, UI, 게임 로직',
      '                  ↓ 참조',
      '[Core]       _Game.Core           ← ServiceLocator, Bootstrapper, 이벤트',
      '                  ↓ 참조',
      '[Domain]     _Game.Domain         ← 순수 C#, noEngineReferences: true',
    ],
    metrics: [
      { label: 'Assembly Definition', value: '4개' },
      { label: '네임스페이스', value: '8개' },
      { label: 'C# 소스 파일', value: '18개' },
      { label: '총 LOC', value: '942줄' },
      { label: '.meta 파일', value: '44개 (전수 생성)' },
    ],
  },
  {
    id: 'scriptable-object',
    title: 'ScriptableObject 기반 설계 — 데이터를 코드에서 분리',
    description:
      'AI가 값을 하드코딩하는 문제를 ScriptableObject(SO)로 해결했다. 설정값, 이벤트, 공유 변수를 모두 SO 에셋으로 분리하여 Inspector에서 추적 가능하게 만들었다.',
    code: [
      '// 패턴 A: SO 이벤트 (Inspector 연결)',
      '[CreateAssetMenu(menuName = "Game/Events/Game Event")]',
      'public class GameEvent : ScriptableObject { /* Raise/Listen */ }',
      '',
      '// 패턴 B: SO Variable (공유 상태)',
      '[CreateAssetMenu(menuName = "Game/Variables/Float")]',
      'public class FloatVariable : ScriptableObject { public float Value; }',
      '',
      '// 패턴 C: SO Config (설정 분리)',
      '[CreateAssetMenu(menuName = "Game/Config/Theme")]',
      'public class ThemeConfig : ScriptableObject { /* 테마 설정 */ }',
    ],
    metrics: [
      { label: 'SO 패턴', value: '3가지 (Event / Variable / Config)' },
      { label: 'CreateAssetMenu 등록', value: '4개' },
    ],
  },
  {
    id: 'service-locator',
    title: 'ServiceLocator 패턴 — AI의 참조 체인 문제 해결',
    description:
      'AI가 서비스를 찾기 위해 GameObject.Find()나 manager.X.Y.Z 체인을 생성하는 문제를 ServiceLocator 단일 접근점으로 해결했다.',
    code: [
      '// 등록 — GameBootstrapper에서만 (1곳)',
      'ServiceLocator.Register<IScoreService>(new ScoreService());',
      '',
      '// 조회 — 어디서든 (동일 패턴)',
      'var score = ServiceLocator.Get<IScoreService>();',
    ],
    metrics: [
      { label: 'MeowBeat 등록 서비스', value: '17개' },
      { label: 'GameEvents 정적 이벤트', value: '15개' },
      { label: '씬 매니저', value: '11개' },
    ],
  },
]

export const caseStudies: CaseStudy[] = [
  {
    name: 'MeowBeat (리듬게임)',
    genre: '리듬',
    highlights: [
      'ServiceLocator 등록 서비스 17개',
      'GameEvents 정적 이벤트 15개',
      'Enum 7개, SO Config 3개',
      '씬 @Managers 하위 매니저 11개',
      '템플릿 아키텍처를 전면 적용한 첫 번째 프로젝트',
    ],
  },
  {
    name: 'Cat Merge Cafe (머지게임)',
    genre: '머지',
    highlights: [
      'CLAUDE.md 132줄 — 에이전트 역할 매핑, 커밋 규칙, 폴더 구조 포함',
      'AGENTS.md — 6개 에이전트 역할 정의',
      '멀티 AI 협업: Claude Code(OMC) + Gemini 동시 운용',
      '동일 아키텍처로 템플릿 범용성 검증',
    ],
  },
]

export const results: Result[] = [
  {
    effect: '프로젝트 즉시 시작',
    detail:
      'GitHub Template Repository로 Use this template 버튼 클릭 → 동일 아키텍처의 새 프로젝트 즉시 생성',
  },
  {
    effect: 'AI 컨텍스트 자동 전달',
    detail:
      'CLAUDE.md로 AI 도구가 프로젝트를 열 때마다 아키텍처, 규칙, 명령어를 자동 인식. 반복 설명 제거',
  },
  {
    effect: '컴파일 타임 레이어 보호',
    detail:
      'Assembly Definition + noEngineReferences로 잘못된 레이어 참조 시 빌드 실패. 런타임 버그를 컴파일 타임으로 이동',
  },
  {
    effect: 'AI 안티패턴 사전 차단',
    detail:
      '10개 "DO NOT" 규칙으로 GameObject.Find(), legacy Input, 매직 넘버 등 Unity 안티패턴 코드 생성 방지',
  },
  {
    effect: '2개 프로젝트 동일 적용',
    detail:
      'MeowBeat(리듬)과 Cat Merge Cafe(머지)에 동일 아키텍처 적용. 장르가 달라도 구조가 동일하게 작동',
  },
  {
    effect: '멀티 에이전트 확장',
    detail:
      'AGENTS.md를 통해 단일 AI 어시스턴트에서 6개 역할의 멀티 에이전트 협업으로 확장',
  },
]

export const tierLayers = [
  { tag: 'Editor', name: '_Game.Editor', desc: '빌드 제외, 에디터 전용' },
  { tag: 'Runtime', name: '_Game.Runtime', desc: 'MonoBehaviour, UI, 게임 로직' },
  { tag: 'Core', name: '_Game.Core', desc: 'ServiceLocator, Bootstrapper, 이벤트' },
  { tag: 'Domain', name: '_Game.Domain', desc: '순수 C#, noEngineReferences: true' },
]
