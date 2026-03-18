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
    id: '2026-03-18T20:00:00-numlink-phase6-qa-monetization',
    date: '2026-03-18',
    researchTitle: 'NumLink Phase 6 완료 + 60레벨 QA + 수익화 기반 구축',
    researchSummary:
      'unity-cli v0.2.26 설치 및 Connector 연동을 시작으로, 게임 로직 CRITICAL 5건 수정·Inspector SerializeField 전수 검증을 완료했다. Phase 6(Daily Puzzle, AdMob SDK, IAP 골격)를 구현하고, 60레벨 전체 보드 QA를 통과시키며 수익화 기반을 확보했다.',
    researchItems: [
      {
        title: 'unity-cli v0.2.26 + Connector 연동',
        description:
          'unity-cli v0.2.26을 설치하고 Connector와 연동하여 AI 에이전트가 Unity Editor를 직접 제어할 수 있는 환경을 구성했다.',
      },
      {
        title: '게임 로직 CRITICAL 5건 수정',
        description:
          'SetGameOver 중복 호출 방지, RestartGame 시 보드 재생성 누락 수정, AutoSetup 중복 방지 로직 추가, AchievementManager null 체크 강화, 관련 초기화 순서 정리. 게임 실행 안정성 확보.',
      },
      {
        title: 'Inspector SerializeField 전수 검증',
        description:
          '9개 매니저 클래스(GameManager, PuzzleManager, NumberManager, SettingManager, AchievementManager, EffectManager, AudioManager, HintManager, UIManager)의 SerializeField를 전수 점검한 결과 문제 0건 확인.',
      },
      {
        title: 'Phase 6 구현: Daily Puzzle + AdMob SDK + IAP 골격',
        description:
          'Daily Puzzle — 날짜 기반 시드로 하루 1퍼즐 + 스트릭 보상 시스템 구현. AdMob SDK — 리워드 광고(힌트용), 인터스티셜(레벨 완료 후), 배너(메인 화면) 연동. IAP 골격 — 힌트팩(소모성), 광고 제거(비소모성) 상품 정의. 패키지명 com.mmporong.numlink으로 리브랜딩.',
      },
      {
        title: '수익화 SDK 비교 리서치 → AppLovin MAX + AdMob 추천',
        description:
          'AdMob 단독, Unity Ads, AppLovin MAX(미디에이션) 3가지를 eCPM, 통합 난이도, 미디에이션 지원 기준으로 비교. AppLovin MAX로 AdMob·Unity Ads·Pangle을 미디에이션하는 조합이 eCPM 최대화에 가장 유리하다고 결론.',
      },
      {
        title: '60레벨 QA: 10개 테스트 중 8 통과 → 누락 보드 36개 생성 후 전체 통과',
        description:
          '자동화 테스트 실행 결과 레벨 25~60 구간에서 보드 데이터 누락 36개 발견. 누락 보드를 생성·검증 후 재실행하여 10/10 통과. 폴백 의존율 0%로 60레벨 전체 보드 데이터 확보.',
      },
      {
        title: '일일 에이전트 회의 시스템 구축',
        description:
          'Windows Task Scheduler로 매일 오전 9시 회의 스크립트를 자동 실행하고, 결과를 GitHub Issues에 자동 기록하는 파이프라인을 구축했다.',
      },
    ],
    meetingTitle: 'Phase 6 완료 + QA + 수익화 방향 확정 회의',
    meetingSummary:
      'Phase 6 구현 완료를 공식 확정하고, AppLovin MAX + AdMob 미디에이션 조합을 수익화 전략으로 채택했다. 60레벨 전체 보드 데이터를 확보하여 폴백 의존 없이 스토어 출시 가능한 상태임을 확인했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '오늘 세 축으로 진행한다. (1) 게임 로직 CRITICAL 수정 + Inspector 전수 검증, (2) Phase 6 구현(Daily Puzzle·AdMob·IAP), (3) 60레벨 QA. 일일 회의 자동화도 병행 구축.',
      },
      {
        speaker: 'Developer',
        note: 'unity-cli v0.2.26 설치 후 Connector 연동 성공. CRITICAL 5건 수정 완료: SetGameOver 이중 호출, RestartGame 보드 재생성 누락, AutoSetup 중복 초기화, AchievementManager null 참조, 초기화 순서 오류. Inspector SerializeField 9개 매니저 전수 점검 결과 미할당 0건.',
      },
      {
        speaker: 'Developer',
        note: 'Phase 6 구현 완료. DailyPuzzleManager — Firebase 없이 날짜 시드만으로 동작, 스트릭 7일 보상 지급. AdMob SDK 연동 — 리워드·인터스티셜·배너 3종. IAP — 힌트팩(5·15·30개 소모성), 광고 제거(비소모성) 정의. 패키지명 com.mmporong.numlink 확정.',
      },
      {
        speaker: 'QA Tester',
        note: '60레벨 자동화 테스트 1차 실행: 8/10 통과, 레벨 25~60 보드 데이터 36개 누락 발견. 누락 보드 생성 후 2차 실행: 10/10 통과. 폴백 의존율 0%. 스토어 제출 가능 상태로 판정.',
      },
      {
        speaker: 'Game Designer',
        note: '수익화 SDK 비교 결과를 검토했다. AppLovin MAX 미디에이션이 AdMob 단독 대비 eCPM 15~30% 높고, 통합 난이도도 관리 가능한 수준. Daily Puzzle 스트릭 7일 보상이 리텐션 루프를 강화해 광고 노출 총량도 늘 것으로 예상.',
      },
      {
        speaker: 'DevOps',
        note: 'Windows Task Scheduler + GitHub Issues 기반 일일 회의 자동화 파이프라인 구성 완료. 매일 오전 9시 자동 실행 → 결과 Issue 자동 생성. 다음 단계는 APK 빌드 파이프라인 구성과 Google Play 내부 테스트 트랙 등록.',
      },
      {
        speaker: 'Orchestrator',
        note: 'Phase 6 완료 확정. 다음 단계: APK 빌드 → Google Play 내부 테스트 → 스토어 등록 준비. AppLovin MAX 미디에이션 연동은 APK 빌드 전에 완료할 것.',
      },
    ],
    decisions: [
      {
        title: 'Phase 6 완료 확정',
        description:
          'Daily Puzzle(스트릭 보상), AdMob SDK(리워드/인터스티셜/배너), IAP 골격(힌트팩/광고제거), 패키지명 com.mmporong.numlink 리브랜딩 모두 완료. 게임 로직 CRITICAL 5건 수정 및 Inspector 전수 검증(문제 0건) 포함.',
      },
      {
        title: '수익화: AppLovin MAX 미디에이션 + AdMob 조합 채택',
        description:
          'AppLovin MAX로 AdMob·Unity Ads·Pangle을 미디에이션하는 전략 채택. AdMob 단독 대비 eCPM 15~30% 향상 기대. APK 빌드 전 MAX SDK 통합 완료 예정.',
      },
      {
        title: '60레벨 전체 보드 데이터 확보 (폴백 의존 0%)',
        description:
          '누락 보드 36개를 생성하고 재검증하여 10/10 테스트 통과. 레벨 1~60 전체를 보드 데이터로 제공하며 폴백 없이 스토어 출시 가능한 상태.',
      },
      {
        title: '다음 단계: APK 빌드 + 스토어 등록 준비',
        description:
          'AppLovin MAX SDK 통합 → APK 빌드 → Google Play 내부 테스트 트랙 제출 → 스토어 등록 준비. DevOps 주도로 CI/CD 파이프라인 구성 병행.',
      },
    ],
  },
  {
    id: '2026-03-17T20:00:00-numlink-full-review',
    date: '2026-03-17',
    researchTitle: 'NumLink 전수 코드 리뷰 + agent-office 멀티프로젝트 전환',
    researchSummary:
      'NumLink 프로젝트의 전체 C# 코드(19개 스크립트)를 성능·기능·구조 3축으로 리뷰하여 62건의 이슈를 발견·수정했다. 동시에 agent-office를 멀티프로젝트 구조로 전환하고 NumLink을 등록·배포했다.',
    researchItems: [
      {
        title: 'CRITICAL 6건 — 게임 실행 불가 수준',
        description:
          '(1) GameOver() 매 프레임 반복 호출로 Resources.Load 무한 실행, (2) Thread.Sleep 500ms로 모바일 ANR 직결, (3) MaxBoardSize=7인데 6x8 레벨 존재로 고급 레벨 동작 불가, (4) ZShape 패턴 비정사각형 보드에서 IndexOutOfRange 크래시, (5) 힌트가 다음 숫자가 아닌 이미 연결된 숫자를 가리키는 핵심 기능 버그, (6) 코인/루비가 음수로 내려갈 수 있는 재화 시스템 오염.',
      },
      {
        title: 'HIGH 17건 — 성능·안정성 저하',
        description:
          'MAX_NUMBERS=25 하드코딩(6x6+ 보드 버그), ObjectPool Spawn→Destroy(풀 고갈), SaveSystem 동기 I/O 캐시 없음, GC.Collect() 호출(프레임 스파이크), 진동 설정 미저장, Camera.main 미캐싱, LRU 캐시 O(n)+키 중복, GetComponentsInChildren 4곳 중복 호출 등.',
      },
      {
        title: 'MEDIUM+LOW 39건 — 품질·유지보수',
        description:
          'Debug.Log 릴리스 빌드 포함(19개 파일), Spiral 패턴이 전체 숫자 숨김, Checkerboard 50% 과다 숨김, DOTween Kill 누락, NumberButton.Number 매번 int.TryParse, 매직 넘버 잔존, LINQ in Update, static 필드 씬 전환 잔존 등.',
      },
      {
        title: 'agent-office 멀티프로젝트 구조 분석',
        description:
          '기존 MeowBeat 전용 구조에서 페이지가 /work, /log, /playground로 재편된 상태. ProjectConfig 공통 타입 + 프로젝트 레지스트리를 도입하고, /work 페이지에 탭 스위처를 추가하는 방식이 기존 사이드바+패널 레이아웃과 가장 자연스럽게 통합됨을 확인.',
      },
    ],
    meetingTitle: 'NumLink 코드 품질 + 멀티프로젝트 전환 회의',
    meetingSummary:
      '62건의 코드 이슈를 3개 병렬 팀(코어 게임 로직, 보드/레벨/패턴, 매니저/시스템)으로 분담하여 전수 수정 완료. agent-office를 ProjectConfig 레지스트리 기반 멀티프로젝트로 전환하고 NumLink을 등록·배포. Unity Editor 통합(SFX 폴백, 프리뷰 동적 생성, AchievementManager 동적 생성)도 완료.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '오늘 3개 작업을 병렬 진행한다. (1) NumLink Unity Editor 통합 — SFX/파티클/프리뷰 에셋 연결 폴백, (2) agent-office 멀티프로젝트 전환 — NumLink 등록, (3) NumLink 전수 코드 리뷰 + 수정. 코드 리뷰는 3개 그룹으로 분할하여 병렬 실행.',
      },
      {
        speaker: 'Developer',
        note: 'Part A(Unity Editor 통합) 완료. EffectManager에 Resources.Load 폴백 추가, PuzzleManager에 inGamePuzzlePreview 동적 생성, GameBootstrapper에 AchievementManager 동적 생성. Inspector 미할당 시에도 코드가 동작하도록 방어적 코딩 적용. Part B를 위해 agent-office 리포를 탐색한 결과 페이지 구조가 대폭 변경되어 있어(ProjectsPage 삭제, WorkPage/LogPage/PlaygroundPage 신설) 새 구조 위에 재작업 필요.',
      },
      {
        speaker: 'Art Director',
        note: 'agent-office에 NumLink 프로젝트 카드를 추가할 때 기존 토스 스타일(#191f28 텍스트, #3182f6 액센트, #f8f9fa 배경)을 유지했다. NumLink의 프로젝트 액센트 컬러를 #3182f6(블루)으로, MeowBeat를 #f97316(오렌지)으로 설정하여 시각적 구분을 확보.',
      },
      {
        speaker: 'QA Tester',
        note: '코드 리뷰에서 가장 심각한 발견: 힌트 시스템이 이미 연결된 숫자를 가리키고 있었다. 이건 게임의 핵심 UX를 망치는 버그다. 또한 Thread.Sleep 500ms는 모바일에서 ANR 직결이고, GameOver 매 프레임 호출은 Resources.Load를 매 프레임 실행시키는 최악 경로. 이 세 가지만 고쳐도 게임 체감이 완전히 달라질 것.',
      },
      {
        speaker: 'Developer',
        note: 'QA Tester가 지적한 3건 + 나머지 CRITICAL/HIGH를 포함해 62건 전수 수정 완료. 주요 패턴 변경: (1) GameOver → SetGameOver 1회 실행, (2) Thread.Sleep → 코루틴 비동기 대기, (3) MAX_NUMBERS 상수 → 동적 보드 크기, (4) List → HashSet(O(1) 조회), (5) NumberButton.Number → 캐시 프로퍼티, (6) SaveSystem 인메모리 캐시 + try-catch, (7) 모든 Debug.Log에 #if UNITY_EDITOR 가드.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office 배포 시 리모트에서 페이지 구조 대폭 변경(ChroniclePage→LogPage, OfficePage→PlaygroundPage, ProjectsPage 삭제)이 있어 merge conflict 발생. rebase 중단 후 새 구조 위에 재작업하여 해결. NumLink 코드 수정은 828ed33 커밋으로 43파일 +1786/-334 라인 변경 후 push 완료.',
      },
      {
        speaker: 'Game Designer',
        note: 'HidePatternApplier 리뷰에서 Spiral 패턴이 보드 전체를 숨기고, Checkerboard가 50%를 숨기는 문제를 발견했다. Spiral은 외곽 1-2겹으로 제한, Checkerboard는 30%로 캡을 설정했다. 패턴별 난이도 밸런스가 개선되어 플레이어 경험이 더 일관될 것.',
      },
      {
        speaker: 'Orchestrator',
        note: '다음 단계를 정리한다. NumLink은 코드가 정비되었으나 Unity Editor에서의 실제 구동 검증이 필수. Owner가 에디터에서 (1) 컴파일 체크, (2) @Managers 하이러키 구성, (3) Inspector SerializeField 연결, (4) APK 빌드를 직접 수행해야 한다. 이후 Phase 6(킥 구현)과 스토어 준비로 진행.',
      },
    ],
    decisions: [
      {
        title: '62건 전수 수정 완료 — 828ed33 커밋',
        description:
          'CRITICAL 6건(GameOver 반복, Thread.Sleep, MaxBoardSize, ZShape, 힌트 버그, 재화 음수) + HIGH 17건 + MEDIUM 25건 + LOW 14건을 3개 병렬 팀으로 분담하여 전수 수정. 19개 스크립트 + 4개 설정 파일, +1786/-334 라인 변경.',
      },
      {
        title: 'agent-office 멀티프로젝트 전환 + 배포 완료',
        description:
          'ProjectConfig 레지스트리 도입, /work 페이지에 MeowBeat/NumLink 탭 스위처 추가, HomePage에 멀티프로젝트 카드 표시. GitHub Pages 자동 배포(f15e828). 향후 프로젝트 추가 시 data/projects/에 파일 생성 + index.ts 등록만 하면 됨.',
      },
      {
        title: 'NumLink Unity Editor 통합 폴백 완료',
        description:
          'EffectManager Resources.Load 폴백, PuzzleManager 프리뷰 동적 생성, GameBootstrapper AchievementManager 동적 생성. Inspector 미할당 상태에서도 코드 레벨 동작 보장.',
      },
      {
        title: '다음 단계: Unity Editor 검증 (Owner 액션)',
        description:
          '(1) Unity 에디터 컴파일 체크 0 errors, (2) MainScene에 @Managers + GameBootstrapper 배치, (3) GameManager/PuzzleManager/NumberManager/SettingManager Inspector SerializeField 연결, (4) APK 빌드 테스트. 이 4단계는 Owner가 Unity 에디터에서 직접 수행해야 함.',
      },
      {
        title: 'Phase 6 킥 후보: Daily Puzzle 추천',
        description:
          'DailyPuzzleProvider가 이미 구현되어 있고(날짜 기반 결정적 시드), 서버 불필요, D7 리텐션 최고 효과. 5개 킥 후보 중 가장 낮은 구현 비용으로 가장 높은 리텐션 임팩트를 기대할 수 있음.',
      },
    ],
  },
  {
    id: '2026-03-16T16:00:00-game-factory-process',
    date: '2026-03-16',
    researchTitle: 'AI 게임 팩토리 프로세스 리서치',
    researchSummary:
      'AI+템플릿 기반 게임 반복 생성 프로세스 정의를 위해 Unity 6 WebGL 호환성, Suno AI API 현황, AI 코딩 도구 게임 개발 사례, GitHub Template Repository 패턴을 조사했다.',
    researchItems: [
      {
        title: 'Unity 6 WebGL — iOS Safari 불안정',
        description:
          'Unity 6.3 LTS에서 웹 성능이 개선됐으나, iOS 18.4 이후 WebGL 로딩 실패와 UI Toolkit 블랙스크린 버그가 미해결. Android Chrome은 정식 지원. PC/Android Chrome을 1차 배포 타겟으로 고정하고, iOS는 선택적 지원이 현실적이다.',
      },
      {
        title: 'Suno AI — 공식 API 미제공, 트랙당 2~5센트',
        description:
          'Suno는 공식 퍼블릭 API가 없고 3rd-party API로 접근해야 한다. Pro 플랜($10/월) 2,500크레딧으로 약 500곡 생성 가능. 음질은 44.1kHz 스테레오로 양호하나, 벤더 리스크 대비 AIVA/Soundful 폴백 필요.',
      },
      {
        title: 'Claude Code + mcp-unity 최적 조합',
        description:
          'mcp-unity로 Unity Editor를 WebSocket 연결하면 Claude Code가 씬/프리팹/컴포넌트를 직접 조작 가능. Claude Code는 개발자 선호 1위(46%). CLAUDE.md에 아키텍처를 명시하면 "작성 1분 = AI 수정 10분 절약" 효과.',
      },
      {
        title: '1인 AI 게임 팩토리 — 2~4주/게임 사이클',
        description:
          'AI 도구 활용 시 프로토타입 수 주→수 일 단축. 6단계 파이프라인(기획→에셋→코딩→오디오→시스템→QA)에 각각 AI 도구 배치. CLAUDE.md에 안티패턴 누적하면 게임 수가 늘수록 AI 오류율 감소하는 복리 효과 발생.',
      },
      {
        title: 'GitHub Template Repository로 즉시 복제',
        description:
          '"Use this template" 한 번으로 4-tier Assembly Def + CLAUDE.md + ServiceLocator + mcp-unity가 포함된 완전한 베이스 생성. 게임별 CLAUDE.md 특화(5분)만 추가하면 AI가 신규 게임 컨텍스트를 즉시 이해.',
      },
    ],
    meetingTitle: '게임 반복 생성 프로세스 정의 회의',
    meetingSummary:
      '_ProjectTemplate의 실제 자산(18개 C# 스크립트, 4-tier Assembly Definition)을 점검하고, MeowBeat과 Cat Merge Cafe 2회 적용 경험을 바탕으로 "2~3주/게임" 반복 생산 프로세스를 정의했다. 템플릿 코드 4대 수정, 2-레이어 CLAUDE.md 구조, 재사용 모듈 3종 추출, 차기작 "Cat Stack"을 확정했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '_ProjectTemplate에 ServiceLocator, GameBootstrapper, EventBus 등 18개 C# 스크립트와 CLAUDE.md 52줄/AGENTS.md 27줄이 있다. 리서치에 따르면 1인 AI 게임 팩토리는 2~4주/게임이 현실적. 이 사이클을 2주 이하로 단축하는 방안을 논의한다.',
      },
      {
        speaker: 'Developer',
        note: '템플릿 코드를 직접 분석한 결과 4가지 문제를 발견했다. (1) ServiceLocator에 Unregister<T>() 메서드 부재로 핫스왑 불가, (2) MCPBridge가 FindAnyObjectByType을 사용해 CLAUDE.md 자체 규칙 위반, (3) GameBootstrapper의 RegisterServices()가 비어있어 매 게임마다 상속 필요, (4) Cat Merge Cafe 적용 시 폴더 구조가 달라 수동 매핑이 필요했음. 이 네 가지를 먼저 수정해야 반복 생산 마찰이 줄어든다.',
      },
      {
        speaker: 'Game Designer',
        note: 'Developer 분석에 동의한다. MeowBeat에서 만든 MergeManager와 CafeManager는 장르 독립적인 "그리드 기반 머지" 로직이다. 재사용 모듈 후보 3가지: (1) MergeSystem — 아이템 등급 SO + 머지 판정, (2) CollectionSystem — 도감 달성률 추적, (3) CurrencySystem — 재화 관리. 머지 장르 YoY +80% 성장이니 머지 모듈을 템플릿에 넣으면 트렌드를 바로 탈 수 있다.',
      },
      {
        speaker: 'QA Tester',
        note: 'Game Designer의 모듈 추출에 찬성하되, 현재 템플릿에 테스트가 0개라는 점을 지적한다. _Game.Domain asmdef이 순수 C#이라 NUnit 테스트를 바로 붙일 수 있는 구조인데 활용을 안 하고 있다. 반복 생산에서 가장 위험한 건 "공유 모듈이 새 게임에서 깨지는 것"이다. _Game.Domain.Tests asmdef + 기본 테스트 5~10개를 템플릿에 포함시키자.',
      },
      {
        speaker: 'Developer',
        note: 'QA Tester 제안에 강하게 동의한다. 추가로 mcp-unity를 통합하면 MCPBridge를 확장해서 씬 하이어라키 조회, 프리팹 인스턴스화, SO 에셋 생성을 Claude Code에서 직접 수행할 수 있다. Claude Code가 개발자 선호 1위(46%)라는 리서치 결과를 감안하면, mcp-unity 연결로 "코드 작성→Unity 테스트" 컨텍스트 스위칭을 제거하는 게 사이클 단축의 핵심이다.',
      },
      {
        speaker: 'DevOps',
        note: 'Developer의 mcp-unity와 연결해서 CI/CD를 논의한다. 표준 파이프라인 제안: (1) GitHub Template Repository 등록으로 원클릭 복제, (2) .github/workflows/build-webgl.yml — GameCI 기반 Unity WebGL 빌드, (3) 빌드 완료 시 itch.io 자동 배포(butler CLI). itch.io WebGL이 37% 전환율이니 WebGL 빌드-배포 자동화가 최우선이다.',
      },
      {
        speaker: 'Content Writer',
        note: 'DevOps의 자동 배포와 연결해서 마케팅도 템플릿화해야 한다. DEVLOG_TEMPLATE.md로 개발 과정 자동 기록, itch.io 페이지 템플릿 표준화, 게임 출시 시 Agent Office 대시보드에 카드 자동 추가. 새 게임 출시 = 포트폴리오 자동 업데이트까지 연결하면 "AI 1인 스튜디오" 내러티브가 자동 축적된다.',
      },
      {
        speaker: 'Art Director',
        note: '에셋 파이프라인 표준화가 필요하다. (1) AI 아트 생성물을 표준 폴더로 자동 정리하는 에디터 스크립트, (2) ThemeConfig.cs의 5개 색상 변수를 SO 프리셋으로 확장해 게임별 테마 교체를 원클릭화, (3) 스프라이트 네이밍 규칙 {category}_{name}_{grade}_{variant}.png 표준 적용. 단, "AI 전형적 디자인(민트+다크) 금지" 원칙은 ThemeConfig 프리셋에서도 배제한다.',
      },
      {
        speaker: 'QA Tester',
        note: 'CLAUDE.md 안티패턴 누적이 복리 효과를 낸다는 리서치가 있었다. 현재 _ProjectTemplate CLAUDE.md에 9개 금지 규칙이 있는데, Cat Merge Cafe에서는 일부가 누락됐다. 템플릿 CLAUDE.md를 fork하지 말고, 공통 규칙은 상속하고 게임별 추가 규칙만 append하는 구조가 필요하다.',
      },
      {
        speaker: 'Developer',
        note: 'QA Tester의 CLAUDE.md 상속 질문에 답하면, Claude Code는 프로젝트 루트와 상위 디렉토리의 CLAUDE.md를 모두 읽는다. 템플릿 CLAUDE.md는 아키텍처 공통 규칙만, 각 게임은 .claude/CLAUDE.md에 게임 특화 규칙만 작성하면 된다. Cat Merge Cafe가 이미 이 패턴을 쓰고 있으니 표준으로 확정하면 된다.',
      },
      {
        speaker: 'Game Designer',
        note: '차기작 관련 보완한다. 첫 팩토리 사이클은 프로세스 검증이 목적이니 기존 고양이 에셋 70%+ 재활용 가능한 "Cat Stack" 물리 퍼즐을 제안한다. 고양이 쌓기+목표 높이 달성+3 스테이지. 목표 2주. 머지+아이들 하이브리드는 2번째 사이클로 보류한다.',
      },
      {
        speaker: 'Orchestrator',
        note: '논의를 종합한다. 프로세스 6단계: (1) Template Fork — "Use this template" 원클릭, (2) Design Sprint — 1~2일, GDD + CLAUDE.md 게임 레이어, (3) Dev Sprint — 7~10일, mcp-unity + Claude Code, (4) Art/Audio Sprint — Dev와 병렬, AI 아트 + Suno, (5) QA + Polish — 2~3일, (6) Deploy — 1일, GameCI + itch.io. 총 사이클: 2~3주.',
      },
    ],
    decisions: [
      {
        title: '템플릿 코드 4대 수정 우선 실행',
        description:
          '(1) ServiceLocator에 Unregister<T>() 추가, (2) MCPBridge의 FindAnyObjectByType을 ServiceLocator.Get으로 교체, (3) _Game.Domain.Tests asmdef + 기본 단위 테스트 5~10개 추가, (4) GameBootstrapper에 서비스 등록 예제 코드 제공. 차기작 시작 전 완료.',
      },
      {
        title: '2-레이어 CLAUDE.md 표준 확정',
        description:
          '템플릿 루트 CLAUDE.md는 아키텍처 공통 규칙(금지 패턴 9개, 네이밍 컨벤션)을 유지하고, 각 게임은 .claude/CLAUDE.md에 게임 특화 규칙만 작성한다. 게임별 안티패턴 발견 시 공통 CLAUDE.md에 역전파한다.',
      },
      {
        title: 'GitHub Template + CI/CD 파이프라인 구축',
        description:
          '_ProjectTemplate을 GitHub Template Repository로 등록. .github/workflows/build-webgl.yml(GameCI)과 itch.io 자동 배포(butler CLI)를 템플릿에 포함. "Use this template" 원클릭으로 전체 인프라가 즉시 가동.',
      },
      {
        title: '재사용 모듈 3종 추출 로드맵',
        description:
          '1순위: CurrencySystem(재화 관리), 2순위: CollectionSystem(도감/달성률), 3순위: MergeSystem(머지 전용). 각 모듈은 _Game.Domain에 인터페이스, _Game.Core에 기본 구현체를 둔다.',
      },
      {
        title: '차기작 "Cat Stack" 하이퍼캐주얼 물리 퍼즐',
        description:
          '첫 팩토리 사이클은 프로세스 검증 목적. 기존 고양이 에셋 70%+ 재활용 가능한 물리 퍼즐(고양이 쌓기+목표 높이+3 스테이지). 목표 2주. 머지+아이들 하이브리드는 2번째 사이클로 보류.',
      },
      {
        title: 'AI 에셋 파이프라인 표준화',
        description:
          'AI 아트 자동 정리 에디터 스크립트, ThemeConfig SO 프리셋 교체로 전체 UI 스타일 변경, 스프라이트 네이밍 규칙 표준화. Suno 오디오는 게임별 BGM 3곡+SFX 10개를 기본 예산으로 책정.',
      },
    ],
  },
  {
    id: '2026-03-16T14:00:00-vision-alignment',
    date: '2026-03-16',
    researchTitle: '프로젝트 비전 및 시장 동향 리서치',
    researchSummary:
      '시장/기술/마케팅 3개 축으로 웹리서치를 수행해 모바일 리듬게임 시장($25억), 머지 장르 폭발 성장(+80% YoY), 고양이 게임 팬베이스, 인디 마케팅 전략을 분석했다.',
    researchItems: [
      {
        title: '리듬게임 시장 $25억, CAGR 8~15%',
        description:
          '2025년 글로벌 모바일 리듬게임 시장 약 25억 달러. 아시아-태평양이 다운로드 58% 차지. 월간 활성 3억 명, 평균 세션 25분. F2P가 수익의 90% 이상이며 소셜/멀티플레이어 기능이 핵심 성장 드라이버.',
      },
      {
        title: '머지 장르 YoY +80% 폭발 성장',
        description:
          '2025년 머지 게임 수익 14억 달러(+80% YoY), 다운로드 5억 700만 건. 퍼즐 하위 장르 중 가장 빠른 성장. 단, 메타 레이어 없는 순수 머지는 성공 가능성 낮음 — 리듬이 곧 메타 레이어 역할 가능.',
      },
      {
        title: '머지+리듬 하이브리드 — 블루오션 공백',
        description:
          'X-Hero(하이퍼캐주얼+아이들 RPG)가 TikTok 바이럴로 1,400만 DL·$52M 수익. 그러나 머지+리듬 직접 결합 사례는 현재 전무. 선점 전략이 유효한 서브장르 공백이다.',
      },
      {
        title: '고양이 게임 견고한 팬베이스',
        description:
          'Cats & Soup: 주간 수익 $70K, MAU 52.5만 명, 누적 $10M. 힐링 감성+방치형 루프가 성공 요인. MeowBeat의 "힐링+능동적 리듬 탭" 결합은 Cats & Soup가 채우지 못한 공백을 정확히 겨냥.',
      },
      {
        title: '하이브리드 수익화 + WebGL 37% 전환율',
        description:
          '상위 100 게임 72%가 하이브리드 수익화(광고+IAP+패스). 리워드 광고가 전체 광고 수익 62% 차지. itch.io WebGL 게임은 뷰어의 37%가 플레이(다운로드 전용은 6%) — 6배 전환율 우위.',
      },
      {
        title: 'TikTok 데브로그 + AI 워크플로우 어필',
        description:
          'Steam 상위 인디 30%가 숏폼 동영상으로 가시성 확보. AI 게임 개발 타임랩스는 아직 틈새. 개발자 커뮤니티에는 AI 워크플로우를 투명 공개하고, 일반 게이머에게는 결과물로만 소통하는 투-트랙 전략이 유효.',
      },
    ],
    meetingTitle: '전체 에이전트 비전 공유 회의',
    meetingSummary:
      'Phase 2 코드 완료 상태에서 3축 리서치를 공유하고, 머지+리듬 결합이 블루오션임을 확인했다. Phase 3의 6개 런치 블로커(Suno 곡, AI 아트, 프리팹 배치, 머지 UI, 포토 앨범 UI, Android 빌드)를 3주 내 해소하는 로드맵과 itch.io WebGL 데모 선행 배포, TikTok 투-트랙 마케팅 전략이 합의되었다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'MeowBeat는 Phase 2 코드 완료 상태이고 6개 런치 블로커가 남아있다. Developer와 Art Director가 priority: high로 대기 중. 3축 리서치 결과를 바탕으로 Phase 3 우선순위를 확정하고, Post-Launch와 차기작 방향까지 논의한다.',
      },
      {
        speaker: 'Game Designer',
        note: '가장 중요한 발견은 "머지+리듬 직접 결합 사례가 전무"하다는 것이다. 리듬게임 $25억 CAGR 8~15%, 머지 YoY +80% — 두 성장 트렌드의 교차점에 MeowBeat가 있다. 블루오션이지만 시장 검증이 안 된 것이기도 하니, MVP(Sprint 0-3+5, 최소 10곡)를 지켜서 리듬 코어 완성도를 먼저 증명해야 한다.',
      },
      {
        speaker: 'Developer',
        note: 'Game Designer에 동의한다. Suno AI 공식 API는 없지만 3rd-party 트랙당 2~5센트면 10곡 $0.50 미만이다. Pro $10/월로 500곡 생성 가능하니 비용은 문제가 아니다. 문제는 Owner가 직접 Suno에서 곡을 생성하고 pipeline.sh로 변환해야 한다는 점. Unity 6 WebGL iOS Safari 불안정(iOS 18.4+)은 MVP가 Android first이니 당장 블로커 아니지만, 포트폴리오 사이트 WebGL 데모에서는 iOS 폴백 처리가 필요하다.',
      },
      {
        speaker: 'Art Director',
        note: 'catrush-cats 폴더에 Cat, BackCat, WinkCat 등 7포즈 16티어 스프라이트가 이미 있다. 기존 Feedme/CatRush 에셋이라 MeowBeat 리디자인 가이드에 맞게 색감/해상도를 조정해야 한다. AI 아트 생성 시 기존 픽셀아트 톤을 유지하되, AI 전형적 디자인(민트+다크, 뻔한 그라데이션) 금지 피드백에 따라 독창적 팔레트로 간다.',
      },
      {
        speaker: 'QA Tester',
        note: 'Art Director의 에셋 교체와 맞물려 Missing Reference 검증이 가장 시급하다. Phase 2에서 15개+ 신규 스크립트가 생성됐고 폴더 구조도 변경됐으니 GUID 참조가 깨졌을 수 있다. itch.io WebGL 37% 전환율은 제대로 로딩될 때 이야기고, 로딩 실패하면 바운스율 90%다. QA 없이 데모 배포는 역효과.',
      },
      {
        speaker: 'Content Writer',
        note: 'QA Tester의 로딩 이야기에서 이어서 — itch.io WebGL이 다운로드 전용 대비 6배 전환율(37% vs 6%)이다. TikTok/Shorts에서 AI 게임 개발 타임랩스는 아직 틈새 콘텐츠라 선점 기회가 있다. 투-트랙: (1) 개발자 커뮤니티 대상 Claude Code 1인 개발 타임랩스, (2) 게이머 대상 고양이+리듬 감성 플레이 영상. "머지+리듬 세계 최초"를 후킹으로 쓸 수 있다.',
      },
      {
        speaker: 'DevOps',
        note: 'Content Writer의 마케팅을 실현하려면 배포 파이프라인 정비가 필요하다. 포트폴리오 사이트 자동 배포는 준비되어 있으나 Android 빌드 파이프라인이 아직 없다. GitHub Actions로 Unity 빌드 + Google Play Internal Testing 자동 제출을 구축해야 한다. Unity 템플릿을 GitHub Template으로 공개하면 개발자 커뮤니티 마케팅 소재가 된다.',
      },
      {
        speaker: 'Game Designer',
        note: 'DevOps의 템플릿 공개 제안이 Content Writer의 투-트랙 중 개발자 트랙과 시너지가 좋다. 수익화는 리서치에서 하이브리드 72% 표준, 리워드 광고가 광고 수익 62%, 배틀패스 전환율 12~18%로 나왔다. RewardAdPoints.cs가 이미 구현되어 있으니 적절하다. iOS 수익 효율이 Android 대비 2.3배이므로 Post-Launch iOS 포팅 우선순위를 올려야 한다.',
      },
      {
        speaker: 'Developer',
        note: 'Game Designer의 iOS 포팅에 보충한다. mcp-unity로 Editor 직접 조작이 가능하니 Phase 3 프리팹 배치를 AI로 자동화할 수 있다. bridgeContracts에 정의된 6개 이벤트 브릿지(OnNoteHit, OnSongComplete, OnCatMerge 등)를 프리팹에 연결하는 작업이 핵심. 1인 AI 개발에서 프로토타입이 수 일로 단축된다는 리서치를 감안하면 Phase 3도 2~3주면 충분하다.',
      },
      {
        speaker: 'QA Tester',
        note: 'Orchestrator의 순서에서 보완한다. Missing Reference 검증은 에셋 교체 "직후" 즉시 해야 한다. 에셋 교체→GUID 검증→프리팹 배치→통합 QA 순서가 맞다. X-Hero가 TikTok 바이럴로 1,400만 DL을 달성한 것처럼, 우리도 데모가 "돌아가는" 상태에서 숏폼을 찍어야 한다.',
      },
      {
        speaker: 'Content Writer',
        note: 'QA Tester 말이 맞다. 데모 품질 보장 후 숏폼 제작. 타이밍: Phase 3 완료→itch.io 데모 배포→플레이 숏폼 촬영→TikTok/Shorts 업로드. 개발 과정 타임랩스는 지금부터 촬영 가능. 게임 개발자 90%가 AI 사용 중이니 "Claude Code로 혼자 게임 만들기" 시리즈는 수요가 확실하다.',
      },
      {
        speaker: 'Orchestrator',
        note: '종합한다. Phase 3 순서: (1) Owner — Suno Pro + 10곡 생성, (2) Art Director — AI 아트(픽셀아트 톤 유지), (3) QA — 에셋 교체 직후 GUID 검증, (4) Developer — 프리팹 배치(mcp-unity), (5) QA — Android 빌드 통합 테스트, (6) itch.io WebGL 데모 배포. 목표 3주. Post-Launch는 iOS 포팅 우선순위 상향, 배틀패스 검토.',
      },
    ],
    decisions: [
      {
        title: 'Phase 3 실행 순서 확정 (목표 3주)',
        description:
          '(1) Owner — Suno Pro 가입+MVP 최소 10곡, (2) Art Director — AI 아트(픽셀아트 톤, AI 전형 디자인 배제), (3) QA — 에셋 교체 직후 GUID/Missing Reference 검증, (4) Developer — 프리팹 배치(mcp-unity), (5) QA — Android 빌드 통합 테스트, (6) itch.io WebGL 데모 배포.',
      },
      {
        title: 'MVP 컷라인 고수 + 순차 공개 전략',
        description:
          'Sprint 0-3+5(리듬 코어)를 MVP로 유지. 머지(S4)/냥카페(S6)/냥스타그램(S7)은 코드 완료 상태이므로 에셋만 연결하면 되지만, MVP에서는 리듬 코어 완성도를 우선 증명. 나머지는 Day-1 패치 또는 v1.1로 순차 공개.',
      },
      {
        title: '마케팅 투-트랙 + "머지+리듬 세계 최초" 후킹',
        description:
          '트랙 A(개발자): Claude Code 1인 개발 타임랩스+Unity AI 템플릿 GitHub 공개. 트랙 B(게이머): itch.io WebGL 데모+고양이 리듬 감성 플레이 영상. "머지+리듬 세계 최초 결합"을 핵심 후킹 메시지로 사용.',
      },
      {
        title: 'Post-Launch iOS 포팅 1순위',
        description:
          'iOS 수익 효율이 Android 대비 2.3배. Post-Launch 1순위로 iOS 네이티브 빌드 진행. WebGL iOS Safari 불안정(iOS 18.4+)은 네이티브로 우회하고 WebGL은 폴백 안내 제공.',
      },
      {
        title: 'Android 빌드 CI/CD + Unity 템플릿 공개',
        description:
          'GitHub Actions 기반 Unity Android 빌드+Google Play Internal Testing 자동 제출 파이프라인 구축. _ProjectTemplate을 GitHub Template Repository로 공개해 개발자 커뮤니티 마케팅 소재로 활용.',
      },
      {
        title: '수익화: 리워드 광고 MVP → 배틀패스 Post-Launch',
        description:
          'MVP는 리워드 광고(RewardAdPoints.cs)+광고 제거 IAP만 적용. 배틀패스(전환율 12~18%)는 Post-Launch에서 데이터 기반 검토. 코스메틱(고양이 코스튬/악기 스킨) 아트 방향은 Phase 3에서 미리 확정.',
      },
    ],
  },
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
