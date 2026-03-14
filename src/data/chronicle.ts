export interface ChronicleItem {
  title: string
  description: string
}

export interface ChroniclePhase {
  title: string
  summary: string
  implementationDetail: string
  coreLogic: string
  outcomes: ChronicleItem[]
}

export interface SupportAgentRole {
  name: string
  role: string
  detail: string
}

export interface CliAgentGroup {
  title: string
  summary: string
  agents: ChronicleItem[]
}

export const chroniclePhases: ChroniclePhase[] = [
  {
    title: '1. Feedme 분석 + 차별화 전략',
    summary:
      '기존 Feedme가 Like a Dino와 유사하다는 문제를 인식하고, 경쟁작 분석을 통해 5가지 차별화 킥을 도출했다.',
    implementationDetail:
      'Cytus II, Arcaea 등 리듬게임과 Cats & Soup, Neko Atsume 등 고양이 캐주얼 게임을 분석해 리듬+고양이+수집의 교차점을 찾았다. MeowBeat이라는 이름과 5개 킥이 확정됐다.',
    coreLogic:
      '핵심은 리듬 게임의 집중도와 고양이 캐주얼의 힐링감을 하나로 합치는 것이다. 노트를 먹이로, 판정을 고양이 반응으로 치환해 장르 경계를 허물었다.',
    outcomes: [
      { title: '킥 5선 확정', description: '먹이주기, 냥냥합체, AI음악, 냥스타그램, 냥카페가 핵심 차별화 요소로 선정됐다.' },
      { title: 'MVP 컷라인', description: 'Sprint 0-3 + Sprint 5(최소 10곡)가 스토어 차별화 최소 요건으로 정의됐다.' },
    ],
  },
  {
    title: '2. Phase 2 코드 구현 (8 스프린트)',
    summary:
      '데이터 기반 노트 시스템부터 광고 최적화까지 8개 스프린트를 코드 레벨에서 완료했다. 에셋/UI 연결만 남은 상태다.',
    implementationDetail:
      'JSON 기반 동적 곡 로딩, 이벤트 기반 디커플링(GameEvents.cs), 테마 시스템(ThemeConfig SO), 머지 시스템(MergeManager), AI 음악 파이프라인(Python 비트 추출+노트 생성), 냥카페/냥스타그램 코드를 구현했다.',
    coreLogic:
      '모든 시스템은 GameEvents.cs 이벤트 버스를 통해 디커플링됐다. NoteSpawner→판정→RhythmCatController→ScoreManager 흐름이 이벤트로 연결되고, MergeManager와 CafeManager도 같은 이벤트 구독 패턴을 따른다.',
    outcomes: [
      { title: '15+ 신규 스크립트', description: 'SongData, NoteSpawner, MergeManager, CafeManager, PhotoManager, ThemeManager 등 핵심 시스템 파일이 생성됐다.' },
      { title: 'AI 음악 파이프라인', description: 'beat_extractor.py + note_generator.py + pipeline.sh로 Suno 곡을 자동으로 게임 데이터로 변환하는 도구가 완성됐다.' },
    ],
  },
  {
    title: '3. 에셋 정리 + 대시보드 업데이트',
    summary:
      'Cat 폴더 4개 중복을 1개로 통합하고, 서드파티 분리, 컨벤션 정리를 완료했다. Agent Office 대시보드도 MeowBeat 기준으로 전환했다.',
    implementationDetail:
      'git mv로 GUID 보존하며 폴더 구조를 정리했다. Cat→_Legacy/Cat, Cat_2→Cats(번호 제거), 개발 리소스→_Dev, Bolt→ThirdParty, Sounds→Audio 등 925파일이 rename 처리됐다.',
    coreLogic:
      'Unity는 GUID 기반 참조이므로 git mv로 .meta 파일과 함께 이동하면 참조가 유지된다. 코드에서 스프라이트 경로 하드코딩이 없음을 사전 확인한 뒤 실행했다.',
    outcomes: [
      { title: '폴더 구조 정리', description: 'Cats/{Idle,Sleep,Wink,Move,Back,Hand,Run}, _Dev/, ThirdParty/, Audio/ 구조로 정리됐다.' },
      { title: '대시보드 전환', description: 'Agent Office를 Cat Merge Cafe에서 MeowBeat 기준으로 데이터와 마일스톤을 업데이트했다.' },
    ],
  },
]

export const supportAgentRoles: SupportAgentRole[] = [
  {
    name: 'Art Director',
    role: 'Cat_2 픽셀아트 기반 스프라이트/아이콘/배경 방향 조율',
    detail: 'REDESIGN.md 가이드를 기준으로 Midnight Fur/Cream Coat 테마에 맞는 에셋 생성 방향을 잡는 역할이다.',
  },
  {
    name: 'Game Designer',
    role: '이코노미 밸런싱, 난이도 곡선, 수집 동기 설계',
    detail: '먹이주기 포만도, 머지 티어별 확률, 곡 난이도 분포, 카페 성장 곡선 등 수치 설계를 담당한다.',
  },
  {
    name: 'DevOps',
    role: 'CI/CD, Android 빌드, 스토어 배포 파이프라인',
    detail: 'GitHub Actions 워크플로우, 패키지명 변경, 서명 키 관리, 빌드 자동화를 담당한다.',
  },
  {
    name: 'Content Writer',
    role: '스토어 설명, 블로그, SNS 콘텐츠 초안',
    detail: 'MeowBeat 출시 시 필요한 스토어 등록 문구, 개발일지 블로그, 홍보 포스트를 준비하는 역할이다.',
  },
]

export const cliAgentGroups: CliAgentGroup[] = [
  {
    title: '탐색 / 조사',
    summary: '프로젝트 상태, 의존성, 요구사항을 빠르게 파악하고 방향을 세우는 그룹이다.',
    agents: [
      { title: 'explore', description: '코드베이스와 파일 구조를 빠르게 탐색해 현재 상태를 파악한다.' },
      { title: 'analyst', description: '요구사항과 우선순위를 정리해 무엇을 먼저 할지 판단을 돕는다.' },
      { title: 'planner', description: '작업 순서와 의존성을 구조적으로 정리한다.' },
    ],
  },
  {
    title: '구현 / 수정',
    summary: 'Unity C# 코드 변경, UI 수정, 빌드 복구 등 실제 구현 작업에 쓰는 그룹이다.',
    agents: [
      { title: 'executor', description: '주요 기능과 시스템을 직접 구현하는 기본 실행 에이전트다.' },
      { title: 'build-fixer', description: '빌드나 컴파일 오류가 생겼을 때 최소 수정으로 복구한다.' },
      { title: 'designer', description: 'UI 구조와 시각 흐름을 더 읽기 좋게 다듬는다.' },
    ],
  },
  {
    title: '검증 / 리뷰',
    summary: '구현 이후 동작 확인, 회귀 점검, 품질 검토를 분담해 결과물을 안정화하는 그룹이다.',
    agents: [
      { title: 'test-engineer', description: '테스트 전략과 검증 포인트를 잡아 누락을 줄인다.' },
      { title: 'qa-tester', description: '실제 사용 흐름으로 UI/동작 문제를 확인한다.' },
      { title: 'verifier', description: '완료 근거가 충분한지 마지막으로 점검한다.' },
    ],
  },
  {
    title: '문서 / 정리',
    summary: 'SPRINT.md, AGENTS.md, 커밋 정리, 인계 문서 등 기록을 정리하는 그룹이다.',
    agents: [
      { title: 'writer', description: '기술 블로그, README, 인계 문서를 읽기 쉽게 정리한다.' },
      { title: 'document-specialist', description: '외부 문서 기준으로 설명과 레퍼런스를 보강한다.' },
      { title: 'git-master', description: '변경 이력을 정리하고 커밋 흐름을 다듬는다.' },
    ],
  },
]
