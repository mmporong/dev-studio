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
      '7개 에이전트가 기존 템플릿 자산을 점검하고, "템플릿 복사→CLAUDE.md 특화→AI 스프린트→프로토타입→검증→출시" 프로세스를 확정했다. mcp-unity 도입, 차기작 후보, 재사용 모듈 확장 방향을 결정했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '오늘 회의의 목표는 "게임 팩토리" 프로세스를 확정하는 것이다. 템플릿 현황 점검 → 프로세스 정의 → 차기작 후보 순서로 진행한다.',
      },
      {
        speaker: 'Game Designer',
        note: '차기작 후보로 ① 캐주얼 퍼즐(머지 변형), ② 방치형 시뮬레이션, ③ 미니게임 컬렉션을 제안한다. 머지 장르가 YoY +80% 성장 중이므로 MeowBeat의 머지 모듈을 재활용하는 방향이 ROI가 높다.',
      },
      {
        speaker: 'Developer',
        note: 'mcp-unity를 템플릿에 사전 설치하면 코드→씬 설정까지 AI가 처리하는 완전 자동화가 가능하다. 현재 4-tier Assembly Def 구조는 유지하되, 공통 패키지(SaveLoad, EventBus, UI Framework)를 UPM 사설 레지스트리로 분리해 게임 간 의존성을 깔끔하게 관리하자.',
      },
      {
        speaker: 'QA Tester',
        note: 'WebGL 빌드 자동 테스트를 CI에 포함시켜야 한다. Unity Test Framework + GitHub Actions로 빌드 성공/실패를 자동 검증하고, iOS Safari 이슈는 BrowserStack으로 크로스 브라우저 체크를 추가하자.',
      },
      {
        speaker: 'Content Writer',
        note: '각 게임의 개발 과정을 데브로그로 기록하면 itch.io SEO + 커뮤니티 형성에 유리하다. "AI가 게임 만드는 타임랩스" 포맷의 TikTok/Shorts 영상은 개발자와 게이머 양쪽에 어필 가능한 틈새다.',
      },
      {
        speaker: 'DevOps',
        note: 'GitHub Template → "Use this template" → Actions CI/CD 자동 설정까지 원클릭 파이프라인을 구축하자. WebGL 빌드 → itch.io 자동 배포(butler CLI)까지 포함하면 게임당 배포 오버헤드가 거의 0이 된다.',
      },
      {
        speaker: 'Art Director',
        note: '에셋 파이프라인에서 AI 아트(Midjourney/DALL-E)를 큐레이션하는 "AI Art Director" 역할이 핵심이다. 게임별 스타일 가이드를 ScriptableObject로 정의하고, 생성된 에셋의 컬러/톤 일관성을 자동 검증하는 프리프로세서를 템플릿에 포함시키자.',
      },
    ],
    decisions: [
      {
        title: '게임 팩토리 6단계 프로세스 확정',
        description:
          'GitHub Template 복사(1분) → CLAUDE.md 게임별 특화(5분) → Claude Code+mcp-unity 코어 게임플레이 개발 → Suno 3rd-party API 배경음악 생성 → WebGL 빌드+itch.io 배포 → 다음 게임 반복.',
      },
      {
        title: 'mcp-unity 템플릿 사전 설치',
        description:
          'C:/Unity/_ProjectTemplate/에 mcp-unity를 기본 포함시켜 모든 신규 게임에서 Claude Code가 Unity Editor를 직접 조작할 수 있게 한다.',
      },
      {
        title: '공통 모듈 UPM 분리',
        description:
          'SaveLoad, EventBus, UI Framework, ServiceLocator를 UPM 사설 레지스트리로 분리해 게임 간 코드 중복을 제거하고 독립 업데이트를 가능하게 한다.',
      },
      {
        title: '차기작: MeowBeat 머지 모듈 재활용 게임 우선',
        description:
          '머지 장르 +80% YoY 성장세를 활용해, MeowBeat의 MergeManager 코드를 재활용하는 머지 변형 게임을 차기작 1순위로 검토한다.',
      },
      {
        title: '배포 파이프라인 자동화',
        description:
          'GitHub Actions + itch.io butler CLI로 WebGL 빌드→배포를 자동화하고, 게임당 배포 오버헤드를 최소화한다.',
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
      '7개 에이전트가 시장/기술/마케팅 리서치 결과를 공유하고, MeowBeat Phase 3 우선순위·마케팅 방향·포트폴리오 전략·차기작 로드맵을 논의해 핵심 결정 5건을 도출했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '3개 축 리서치가 모두 동일한 결론을 가리킨다. 머지+리듬+고양이는 블루오션이며, WebGL+itch.io 배포와 TikTok 데브로그가 최소 비용 UA 전략이다. Phase 3를 이 방향으로 집중 실행한다.',
      },
      {
        speaker: 'Game Designer',
        note: '머지 장르 +80% 성장과 리듬게임 CAGR 8~15%가 교차하는 지점에 MeowBeat가 있다. 직접 경쟁자가 없는 서브장르 공백을 선점하려면 MVP를 빠르게 WebGL로 공개해 시장 반응을 먼저 확인해야 한다. 세션 25분 기준으로 머지 루프+리듬 3곡 플레이를 하나의 세션에 구성하자.',
      },
      {
        speaker: 'Developer',
        note: 'iOS Safari WebGL 불안정 이슈가 확인됐다. UI Toolkit 대신 Canvas 계열을 사용하고, 1차 타겟을 PC/Android Chrome으로 고정한다. CLAUDE.md에 "WebGL 빌드 시 UI Toolkit 사용 금지" 안티패턴을 추가해야 한다. Phase 3에서 에셋 연결+빌드 테스트가 핵심이다.',
      },
      {
        speaker: 'QA Tester',
        note: 'WebGL 빌드를 GitHub Actions CI에 포함시키고, BrowserStack으로 크로스 브라우저 자동 테스트를 추가하자. MVP 범위(Sprint 0-3+5)의 기능 테스트 체크리스트를 먼저 확정하고, 에셋 연결 후 바로 QA 스프린트에 돌입한다.',
      },
      {
        speaker: 'Content Writer',
        note: 'itch.io에 WebGL 데모를 무료 공개해 37% 전환율을 활용하고, 동시에 TikTok/Shorts에 "AI 에이전트가 게임 만드는 과정" 60초 타임랩스를 올리자. 개발자 커뮤니티(r/gamedev, r/ClaudeAI)에는 Agent Office 대시보드와 AI 워크플로우를 공개하고, 게이머에게는 게임 자체로 소통하는 투-트랙 전략이다.',
      },
      {
        speaker: 'DevOps',
        note: 'unity-webgl-wrapper 포트폴리오 사이트를 스튜디오 허브로, 각 itch.io 페이지를 발견 채널로 분리 운영한다. itch.io→포트폴리오 역링크로 트래픽 순환 구조를 만들고, butler CLI 자동 배포 파이프라인을 구축한다.',
      },
      {
        speaker: 'Art Director',
        note: '수익화는 MVP 단계에서 리워드 광고 중심으로 시작하고, 성장기에 시즌패스(고양이 코스튬/악기 스킨)를 도입한다. 아트 에셋은 Cat_2 픽셀아트 기반으로 통일하고, AI 생성 에셋은 REDESIGN.md 컬러 팔레트로 일관성을 검증한다.',
      },
    ],
    decisions: [
      {
        title: 'Phase 3 최우선: MVP WebGL 빌드 공개',
        description:
          'Sprint 0-3+5 범위의 에셋 연결→QA→WebGL 빌드를 최우선으로 완료하고, itch.io에 무료 데모로 공개해 시장 반응을 확인한다.',
      },
      {
        title: '배포 타겟: PC/Android Chrome 우선',
        description:
          'iOS Safari WebGL 불안정 이슈로 인해 1차 타겟을 PC/Android Chrome으로 고정하고, iOS는 네이티브 앱 출시 시점에 지원한다.',
      },
      {
        title: '마케팅: TikTok 데브로그 + itch.io 투-트랙',
        description:
          'TikTok/Shorts에 AI 게임 개발 타임랩스 60초 영상을 정기 업로드하고, itch.io 데브로그로 커뮤니티를 형성한다. 포트폴리오 사이트는 스튜디오 허브로 기능한다.',
      },
      {
        title: '수익화: 리워드 광고→시즌패스 단계적 도입',
        description:
          'MVP에서는 리워드 광고+광고 제거 IAP만 적용. MAU 안정화 후 시즌패스(코스메틱)를 도입해 하이브리드 수익화로 전환한다.',
      },
      {
        title: '포지셔닝: "AI Agent-Powered Game Studio"',
        description:
          'LIM Studio를 "1인 개발자+AI 에이전트팀=스튜디오급 반복 생산 능력"으로 포지셔닝한다. Agent Office 대시보드를 개발자 커뮤니티 대상 쇼케이스로 활용한다.',
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
