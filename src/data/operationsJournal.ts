export interface JournalItem {
  title: string
  description: string
}

export interface MeetingItem {
  speaker: string
  note: string
}

export interface JournalEntry {
  id: string
  date: string
  researchTitle: string
  researchSummary: string
  researchItems: JournalItem[]
  meetingTitle: string
  meetingSummary: string
  meetingItems: MeetingItem[]
  decisions: JournalItem[]
}

export const journalStorageKey = 'lim-studio-ops-journal-v1'

export const journalMemoryRules: JournalItem[] = [
  {
    title: '일자별 누적',
    description: '리서치와 회의 기록은 날짜 단위로 쌓이며, 이전 기록을 덮어쓰지 않는 구조를 기본으로 유지한다.',
  },
  {
    title: '웹 메모리 유지',
    description: '사이트에 보이는 운영 기록은 새로고침 후에도 남아 있어야 하므로 브라우저 저장소를 기준으로 보존한다.',
  },
  {
    title: 'SPRINT.md 연동',
    description: '태스크 상태는 SPRINT.md가 진실의 소스이며, 대시보드는 이를 시각화하는 보조 뷰 역할을 한다.',
  },
  {
    title: '회의 중심 정리',
    description: '리서치 결과는 최종적으로 에이전트 회의 결정으로 연결되며, 웹에서는 두 흐름을 함께 보여준다.',
  },
]

export const seedJournalEntries: JournalEntry[] = [
  {
    id: '2026-03-14T18:00:00-asset-restructure',
    date: '2026-03-14',
    researchTitle: 'MeowBeat 에셋 폴더 구조 정리',
    researchSummary:
      'Feedme에서 포크한 상태 그대로인 폴더 구조를 분석해, Cat 폴더 4개 중복, 미사용 서드파티 21MB, PSD/참조 이미지 혼재 문제를 파악하고 정리 계획을 수립했다.',
    researchItems: [
      {
        title: 'GUID 참조 안전성 확인',
        description: '코드에서 스프라이트 경로 하드코딩이 없고, 프리팹은 GUID로 참조하므로 git mv로 안전하게 이동 가능함을 확인했다.',
      },
      {
        title: 'Cat 폴더 중복 분석',
        description: 'Cat, Cat_2, Cats, _Legacy/Cat 4개 폴더의 파일을 비교해 Cat_2와 Cats가 완전히 동일한 중복임을 확인했다.',
      },
      {
        title: '번호 네이밍 개선',
        description: '"1. Cat", "2. SleepingCat" 등 번호 기반 폴더명을 Idle, Sleep, Wink 등 의미 기반으로 변경하기로 결정했다.',
      },
    ],
    meetingTitle: '에셋 폴더 구조 정리 회의',
    meetingSummary:
      '전체 에이전트가 폴더 정리 범위에 합의하고, git mv 기반 이동 → git status 검증 → 커밋 → push 순서로 실행했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'Cat 폴더 통합, 개발 리소스 분리, 서드파티 분리, 컨벤션 정리 4단계로 실행 순서를 확정한다.',
      },
      {
        speaker: 'Executor',
        note: '925파일 rename 완료, git status에서 delete 0건 확인. GUID 참조는 보존됐다.',
      },
      {
        speaker: 'Test Engineer',
        note: 'Unity 에디터에서 Missing Reference 에러 없는지 확인이 필요하다. 각 씬별 스프라이트 표시도 검증해야 한다.',
      },
      {
        speaker: 'ReleaseOps',
        note: 'refactor(assets) 커밋으로 push 완료. 다음은 Agent Office 대시보드 업데이트다.',
      },
    ],
    decisions: [
      {
        title: '폴더 구조 확정',
        description: 'Cats/{Idle,Sleep,...}, _Dev/{CatSave,PSD,RefImage,...}, ThirdParty/BoltJellyFarm, Audio/ 구조로 최종 확정.',
      },
      {
        title: 'untracked 중복 삭제',
        description: 'Cat_2, Sprites/PSD, Sprites/Cat 등 untracked 중복 폴더를 확인 후 안전하게 삭제했다.',
      },
      {
        title: '대시보드 전환',
        description: 'Agent Office를 Cat Merge Cafe에서 MeowBeat 기준으로 전면 업데이트한다.',
      },
    ],
  },
  {
    id: '2026-03-14T12:00:00-phase2-status',
    date: '2026-03-14',
    researchTitle: 'MeowBeat Phase 2 코드 완료 상태 점검',
    researchSummary:
      '8개 스프린트의 코드 구현 상태를 점검하고, 에셋/UI가 필요한 남은 태스크를 정리했다.',
    researchItems: [
      {
        title: '코드 완료 스프린트',
        description: 'Sprint 1(노트시스템), 3(먹이주기 코드), 4(머지 로직), 5(AI파이프라인), 6(카페 코드), 7(포토시스템), 8(광고/이벤트) 코드가 완료됐다.',
      },
      {
        title: '에셋 대기 태스크',
        description: 'S2(폰트/아이콘/스프라이트), S3(HUD), S4(머지UI/이펙트), S5(Suno곡), S6(카페배경), S7(앨범UI) 등이 에셋 의존으로 대기 중이다.',
      },
      {
        title: 'Owner 액션 필요',
        description: 'Suno Pro 가입($10), AI 아트 생성, Unity 에디터 프리팹 배치가 Owner 직접 수행 항목이다.',
      },
    ],
    meetingTitle: 'Phase 2 → Phase 3 전환 계획 회의',
    meetingSummary:
      '코드 완료를 확인하고, 에셋/UI 작업과 빌드 테스트를 중심으로 Phase 3 진입 계획을 수립했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'Phase 2 코드는 완료. 에셋 폴더 정리를 먼저 끝내고, 에셋 연결 → QA → 빌드 순서로 진행한다.',
      },
      {
        speaker: 'Analyst',
        note: 'MVP 컷라인은 Sprint 0-3 + Sprint 5(최소 10곡). 이 범위를 우선 완성하면 스토어 등록 가능하다.',
      },
      {
        speaker: 'Designer',
        note: 'Cat_2 픽셀아트 기반 아트 디렉션이 확정됐다. REDESIGN.md의 컬러 팔레트와 톤을 따른다.',
      },
    ],
    decisions: [
      {
        title: '에셋 폴더 정리 우선',
        description: '에셋 연결 전에 폴더 구조부터 정리해 작업 효율을 높인다.',
      },
      {
        title: 'MVP 집중',
        description: 'Sprint 0-3 + 5를 먼저 완성해 스토어에서 Feedme와 다른 게임으로 인식되게 한다.',
      },
      {
        title: '병렬 작업',
        description: 'Suno 곡 생성과 AI 아트 생성은 코드 작업과 병렬로 진행 가능하다.',
      },
    ],
  },
]
