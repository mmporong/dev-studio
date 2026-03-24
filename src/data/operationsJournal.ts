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
    id: '2026-03-24T09:00:00-daily-standup',
    date: '2026-03-24',
    researchTitle: '퍼즐 시장 $121억 성장 전망 + NumLink 200레벨 확장 + 고양이 리듬 블루오션 확인',
    researchSummary:
      '퍼즐 시장 CAGR 9% 성장, 하이브리드 루프+메타 레이어 필수화. 고양이+리듬 조합 대형 경쟁자 부재 블루오션 확인. NumLink 200레벨 확장+타이머+별점 시스템 착수. CI Node 20 EOL 5주 전 업그레이드 시급. Debug.Log 100건+ 가드 미적용 릴리스 리스크.',
    researchItems: [
      {
        title: '퍼즐 시장 $61억→$121억 성장, 하이브리드 캐주얼이 대세',
        description:
          '글로벌 모바일 퍼즐 CAGR 9%. Block Blast 3억6천만 DL, 멀티플레이어 퍼즐 YoY 22% 성장. 코어 루프+메타 레이어(컬렉션/업그레이드) 2중 구조가 표준화. AI 난이도 조정으로 리텐션 40% 향상 사례.',
      },
      {
        title: '고양이+리듬 게임 블루오션 — 대형 경쟁자 부재',
        description:
          'Rhythm Cat(피아노 타일+고양이)만 존재, 차별화된 리듬 메카닉으로 진입 가능. 코지(Cozy) 카테고리 성장 지속. 오리지널 곡+고양이 세계관 음악이 차별화 핵심.',
      },
      {
        title: 'NumLink 200레벨 확장+타이머+별점 시스템 착수',
        description:
          'LevelSelectUI 200레벨 동적 생성, BoardDataGenerator 200레벨 매핑, TimerUI 스크립트 추가. 안정화(DOTween/Animator 해결) 이후 콘텐츠 확장 궤도 진입.',
      },
      {
        title: 'Debug.Log 100건+ 가드 미적용 + 자동화 테스트 전무',
        description:
          'BoardDataLoader 17건, PreGeneratedBoardManager 28건, PuzzleManager 22건 등 릴리스 빌드에 로그 포함. HBSaveLoadManager 평문 JSON 로그 보안 리스크. 두 프로젝트 모두 자동화 테스트 0건.',
      },
      {
        title: 'CI Node 20 EOL 5주 전 + daily_standup 2일째 실패',
        description:
          'Node 20 EOL 2026-04-30, CI 워크플로우 22 LTS 업그레이드 필수. daily_standup exit code 9009(실행 파일 미발견), 작업 스케줄러 태스크 미등록 상태.',
      },
      {
        title: 'iOS 26 Liquid Glass 아이콘 대응 + 마이크로인터랙션 200-500ms 표준',
        description:
          'Apple Liquid Glass 디자인 시스템 도입으로 아이콘 4가지 모드 대응 필요. 멀티센서리 피드백(모션+사운드+햅틱) 3종 세트 설계가 2026 표준. 스타일라이즈드+핸드메이드 비주얼 트렌드.',
      },
      {
        title: 'ASO 전략 고도화 — 첫 2장 스크린샷이 전환율 결정',
        description:
          'AI 기반 키워드 의도 매칭 중심 전환. CPP(Custom Product Pages) 자연 검색 영향 확대. Instagram Reels 주력+YouTube Shorts 병행 권장. 개인정보처리방침 Google Play 3/4 데드라인 경과, 즉시 처리 필요.',
      },
    ],
    meetingTitle: '2026-03-24 일일 진행 회의',
    meetingSummary:
      'NumLink 200레벨 확장 착수로 콘텐츠 블로커 해소 중. 스토어 출시 준비(개인정보처리방침/ASO/스크린샷) 즉시 착수 필요. CI Node 20→22 업그레이드와 daily_standup 장애 복구가 인프라 최우선. Debug.Log 가드 일괄 적용으로 릴리스 품질 확보 시급.',
    meetingItems: [
      { speaker: 'Orchestrator', note: 'NumLink 200레벨 확장+타이머+별점 3커밋 진행. MeowBeat 코드 완료 에셋 대기. Cat Merge Cafe M0 보류. 스토어 출시 파이프라인(개인정보처리방침→AdMob→APK) 즉시 착수 권장.' },
      { speaker: 'Game Designer', note: '퍼즐 시장 CAGR 9%, 하이브리드 루프+메타 레이어 필수. NumLink에 일일 챌린지+리더보드 설계 추가 필요. MeowBeat 피아노 타일 탈피, 고유 리듬 메카닉 정의가 선결 과제.' },
      { speaker: 'Developer', note: 'NumLink TODO 6건 전부 LOW, 출시 블로커 없음. 200레벨 확장(LevelSelectUI+BoardDataGenerator+TimerUI) 진행 중. Unity 6000.3.x 안정 릴리스 유지, 업그레이드 불필요.' },
      { speaker: 'QA Tester', note: 'Debug.Log 100건+ 가드 미적용 MEDIUM 리스크. HBSaveLoadManager 평문 JSON 보안 리스크. 자동화 테스트 전무(HIGH). 보드 생성/검증 유닛 테스트 최소 작성 권장.' },
      { speaker: 'Content Writer', note: '개인정보처리방침 Google Play 3/4 데드라인 경과, 즉시 작성 필요. Instagram Reels 주력+YouTube Shorts 병행. Paid Organic 전략 소액 광고($200) 집행. Discord 커뮤니티 조기 구축 시작.' },
      { speaker: 'DevOps', note: 'daily_standup 2일째 실패(exit 9009), 작업 스케줄러 재등록+PATH 설정 필요. CI Node 20→22 업그레이드 5주 내 필수. 배포 5회 연속 성공, 파이프라인 안정.' },
      { speaker: 'Art Director', note: 'iOS 26 Liquid Glass 아이콘 4모드 대응 필수. 마이크로인터랙션 200-500ms+멀티센서리 피드백 표준. 고양이 테마에 스타일라이즈드+핸드메이드+소프트 웜 팔레트 권장.' },
    ],
    decisions: [
      {
        title: 'NumLink 개인정보처리방침 즉시 작성',
        description: 'Google Play 3/4 데드라인 경과. Termly 등 생성기 활용 후 GitHub Pages 게시. AdMob 등록 선행 조건.',
      },
      {
        title: 'CI Node 20→22 LTS 업그레이드',
        description: 'deploy-pages.yml node-version을 22로 변경. EOL 2026-04-30까지 5주 남음. package.json engines 필드도 추가.',
      },
      {
        title: 'daily_standup 장애 복구',
        description: '작업 스케줄러 DailyStandup 태스크 재등록. PATH 환경변수 명시적 설정으로 9009 에러 해결.',
      },
      {
        title: 'Debug.Log 가드 일괄 적용',
        description: '릴리스 빌드 대상 100건+ 로그에 #if UNITY_EDITOR 가드 적용. HBSaveLoadManager 평문 JSON 로그 즉시 제거.',
      },
      {
        title: 'NumLink 일일 챌린지+메타 레이어 GDD 설계',
        description: '멀티플레이어 퍼즐 YoY 22% 성장 트렌드 반영. 코어 루프 완성 후 일일 챌린지→리더보드→컬렉션 메타 순서로 확장.',
      },
    ],
  },
  {
    id: '2026-03-23T09:00:00-daily-standup',
    date: '2026-03-23',
    researchTitle: '인디 게임 마케팅 전략 + NumLink 안정화 완료 + Google Play 신규 기능',
    researchSummary:
      'NumLink DOTween/Animator 충돌 근본 해결 + Debug.Log 250개 제거로 안정화 완료. ASO 최적화 + Google Play 사전 등록 + 숏폼 콘텐츠가 1인 개발자 핵심 마케팅 전략. Google Play 2026년 3월 게임 트라이얼/커뮤니티 포스트/위시리스트 신규 도입.',
    researchItems: [
      {
        title: 'NumLink 안정화 완료 — 3일간 10커밋, 게임 플로우 버그 전수 수정',
        description:
          'DOTween/Animator scale 충돌 근본 해결(PlayAnim DOTween 교체), 게임오버→레벨선택 복귀 흐름 수정, NumberButton 풀 재사용 상태 초기화, 이미지 리빌 상태 리셋, Debug.Log 250개 일괄 제거. 프로덕션 준비 완료 상태.',
      },
      {
        title: 'ASO가 최우선 — 앱의 50%+가 검색으로 발견됨',
        description:
          '키워드 최적화 + 스크린샷 + 아이콘이 스토어 전환율 결정. title: "NumLink - Number Puzzle", 키워드: numberlink, flow puzzle, connect numbers, number puzzle, 숫자퍼즐, 넘버링크.',
      },
      {
        title: 'Google Play 2026년 3월 신규 기능 — 게임 트라이얼/커뮤니티 포스트/위시리스트',
        description:
          '게임 트라이얼: 설치 없이 체험 가능(퍼즐 게임에 유리). 커뮤니티 포스트: 스토어 내 개발자-유저 소통. 위시리스트: 사전 관심 표시. NumLink 출시에 활용 가능.',
      },
      {
        title: '숏폼 콘텐츠 + 마이크로 인플루언서가 저예산 핵심 전략',
        description:
          'TikTok/YouTube Shorts 주 7~14개 클립 이상적. 개발 과정 공유가 가장 효과적. 마이크로 인플루언서는 소셜 광고 대비 3배 비용 효율. 소프트 런치(필리핀/캐나다) 후 글로벌 확장 권장.',
      },
    ],
    meetingTitle: '2026-03-23 일일 진행 회의',
    meetingSummary:
      'NumLink 안정화 완료(DOTween/Animator 충돌 해결, 프로덕션 로그 정리). 스토어 준비 단계 진입. Google Play 신규 기능(게임 트라이얼) 활용 기회. ASO/스크린샷/개인정보처리방침이 즉시 착수 필요한 Critical 항목.',
    meetingItems: [
      { speaker: 'Orchestrator', note: 'NumLink 3일간 10커밋으로 안정화 완료. 스토어 에셋(스크린샷, 아이콘, 설명문) 미준비가 최대 블로커. 개인정보처리방침 없이 AdMob 앱 등록 불가.' },
      { speaker: 'Game Designer', note: '레벨 60개는 경쟁 앱 대비 1/30 수준. 절차적 생성으로 200+ 확장 필요. Google Play 게임 트라이얼 기능이 퍼즐 게임에 매우 유리.' },
      { speaker: 'Developer', note: 'DOTween/Animator 충돌 근본 해결 완료. Debug.Log 250개 제거로 릴리스 빌드 준비됨. APK 빌드 + 실기기 테스트가 다음 단계.' },
      { speaker: 'Content Writer', note: 'ASO 키워드 초안 완성. 한/영 듀얼 설명문 작성 필요. 숏폼 콘텐츠(개발 타임랩스) 주 3개 목표.' },
      { speaker: 'DevOps', note: 'APK 빌드 파이프라인 미구축. AdMob App ID 설정 → Build → 실기기 테스트 순서. 소프트 런치는 필리핀/태국 권장.' },
    ],
    decisions: [
      {
        title: '개인정보처리방침 작성 + GitHub Pages 배포',
        description: 'mmporong.github.io에 privacy-policy.html 배포. AdMob 데이터 수집 조항 포함. Critical — Play Console 등록 필수.',
      },
      {
        title: '스토어 설명문 + ASO 키워드 초안',
        description: '한국어/영어 dual. title/short description/full description 각각 작성. 스크린샷 5장 제작.',
      },
      {
        title: 'APK 빌드 + 실기기 테스트',
        description: 'AdMob App ID 설정 → Build → 안드로이드 실기기 설치 테스트. UI 레이아웃/터치 입력/광고 SDK 동작 확인.',
      },
      {
        title: '레벨 확장 전략 결정',
        description: 'PuzzleGenerator 코드 기반 절차적 생성 vs 수동 200+ 레벨 추가. 리텐션 직결 문제.',
      },
    ],
  },
  {
    id: '2026-03-22T09:00:00-daily-standup',
    date: '2026-03-22',
    researchTitle: '3/22 결정사항 부분 이행 + Unity 6.4 출시 + Mewgenics 100만장 + Node 20 EOL 임박',
    researchSummary:
      'NumLink push+productName 수정 완료(4건 중 1건 이행). 스토어 준비/MeowBeat M0/daily_standup.bat은 여전히 미착수. Unity 6.4 출시(ECS 코어 통합, Project Auditor 내장). Mewgenics 1주 100만장·$2,500만 달성으로 고양이 IP 폭발적 성장 확인. Node.js 20 EOL 5주 후(agent-office 워크플로우 영향). AI 음악 도구(Beatoven.ai) 비용 80-95% 절감. CatMergeCafe Mint 색상 WCAG 접근성 완전 미달(대비율 1.17:1).',
    researchItems: [
      {
        title: '[Orchestrator] 3/22 결정 4건 중 1건만 이행 — NumLink push+productName 완료, 나머지 3건 미착수',
        description:
          'NumLink: origin/main 동기화 완료, productName "NumLink" 변경 확인. 워킹트리 untracked 6건(DailyChallengeHubPanel 등) 커밋 필요. MeowBeat: meowbeat/main 브랜치 동기화 완료, SPRINT.md P0-003 in-progress/P0-004 todo, GDD.md 파일 자체가 MeowBeat 리포에 부재. daily_standup.bat: 3/22 09:00 실행 시작 후 종료 로그 없이 끊김, 작업 스케줄러 미등록. 스토어 준비(개인정보처리방침/ASO): 전혀 미착수.',
      },
      {
        title: '[Game Designer] Mewgenics 1주 100만장/$2,500만, Royal Match 누적 $50억+, AI 음악 비용 80-95% 절감',
        description:
          'Mewgenics: 메타크리틱 89점, Steam 동시접속 115,428명(로그라이트 신기록), 1주 100만장 판매. 고양이 IP 폭발적 파워 재확인. Royal Match: 광고 없는 IAP 전용 모델로 누적 $50억+ 돌파. UNBEATABLE: 인디 리듬게임 최대 성공작(Steam 92% 긍정), 스토리+아케이드 이중 모드 전략. AI 음악 도구(Beatoven.ai/SOUNDRAW) 활용 시 음원 제작비 80-95% 절감. 2026 핵심: 세션 디자인이 그래픽보다 중요.',
      },
      {
        title: '[Developer] Unity 6.4 출시(ECS 코어 통합) + CoreCLR 6.7 예정 + 규칙 위반 3건 잔존',
        description:
          'Unity 6.4(2026-03-19): ECS 코어 패키지 승격, Project Auditor 내장, DirectStorage API 지원. CoreCLR 로드맵: 6.7 실험적 데스크톱, 6.8 에디터 전환. NumLink(6.3 LTS) 2027년 12월까지 지원, 당장 업그레이드 불필요. 규칙 위반 3건: AutoSetup의 GameObject.Find, NumberManager의 Input.GetKeyDown, PuzzleManager의 FindObjectOfType. cat-merge-cafe C# 0개(문서만 존재).',
      },
      {
        title: '[QA Tester] NumLink TODO 6건 전부 LOW + Debug.Log 가드 밖 잔존 MEDIUM + 자동화 테스트 전무',
        description:
          'NumLink: TODO 6건 전부 LOW. #if UNITY_EDITOR 가드 15개 파일 80건 적용으로 개선됐으나, LevelDataProvider/EndlessModeProvider/DailyPuzzleProvider에 가드 밖 Debug.Log 잔존(MEDIUM). 자동화 테스트 0건(수동 Play Mode 의존). agent-office: ESLint 오류 1건(OfficeContext.tsx react-refresh 위반) 지속, 빌드는 정상(2.52s). QA 38건 체크리스트 여전히 전체 미실행.',
      },
      {
        title: '[Content Writer] "Paid Organic" SNS 전략 부상 + CPP/CSL 전환율 40% 상승 + 개인정보처리방침 3프로젝트 전무',
        description:
          '2026 마케팅 핵심: 오가닉 영상 업로드 후 성과 좋은 영상에만 소액($100-200) 부스팅하는 "Paid Organic" 전략. YouTube Shorts가 TikTok 대비 안정적(크리에이터 85-90%가 Shorts/Reels 선호). CPP/CSL 맞춤 스토어 페이지로 전환율 최대 40% 상승. Discord 출시 12-18개월 전 커뮤니티 구축 권장. NumLink/MeowBeat/CatMergeCafe 3프로젝트 모두 개인정보처리방침 파일 부재.',
      },
      {
        title: '[DevOps] daily_standup.bat 3/22 실행 끊김 + Node 20 EOL 5주 후 + NumLink CI/CD 전무',
        description:
          'daily_standup.bat: claude.cmd 경로 정상 존재, bat 파일에 따옴표 감쌈 확인. 3/21은 Exit code 0 성공, 3/22는 시작만 기록되고 종료 없음(실행 중 끊김). 작업 스케줄러에 standup 태스크 미등록. agent-office 배포 5회 연속 성공(30-40초). Node.js 20 EOL 2026-04-30(5주 후), 워크플로우 node-version:20→22/24 업그레이드 필요. GameCI v4.8.1 안정, NumLink CI/CD 도입 권장.',
      },
      {
        title: '[Art Director] CatMergeCafe Mint 접근성 완전 미달(1.17:1) + 마이크로인터랙션 100ms 기준 + Digital Texture 트렌드 정렬',
        description:
          'CatMergeCafe Mint(#98FB98) 대비율 1.17:1로 WCAG AA(3.0:1)의 26% 수준 — 허브 초록 #6B9E78(4.8:1)로 교체 필수. 야간 골목 팔레트 5쌍 분석: 3쌍 AAA(14.38:1/10.42:1/9.0:1), 1쌍 AA, 1쌍 AA Large. 2026 마이크로인터랙션 표준 100ms 이하(태스크 완료율 +18%). Digital Texture(grain/noise) 트렌드가 "종이접기" 컨셉과 완벽 정렬. Bento Grid 2.0이 레벨 선택/도감 UI 최적 레이아웃.',
      },
    ],
    meetingTitle: '2026-03-22 일일 진행 회의',
    meetingSummary:
      '3/22 결정 4건 중 NumLink push+productName만 이행, 나머지 3건 미착수. Unity 6.4 출시 확인(당장 업그레이드 불필요). Mewgenics 100만장 흥행으로 고양이 IP 가치 재확인. Node 20 EOL 5주 전 워크플로우 업그레이드 시급. 스토어 준비(개인정보처리방침+ASO) 3일째 미착수로 최우선 격상.',
    meetingItems: [
      { speaker: 'Orchestrator', note: '3/22 결정 4건 중 NumLink push+productName 1건만 완료. 스토어 준비/MeowBeat M0/daily_standup 3건 3일째 미착수. NumLink untracked 6건 커밋 필요. 스토어 준비를 오늘 반드시 착수해야 함 — 3일 연속 미이행은 프로젝트 출시 일정에 직접 영향.' },
      { speaker: 'Game Designer', note: 'Mewgenics 1주 100만장·$2,500만으로 고양이 IP 폭발적 파워 확인 — MeowBeat 차별화 전략 재점검 필요. Royal Match 광고 제거+IAP 모델 NumLink에 적용 검토(힌트/되돌리기 유료화). UNBEATABLE 스토리+아케이드 이중 모드를 MeowBeat에 도입 제안. AI 음악(Beatoven.ai) 무료 플랜으로 프로토타입 착수 가능.' },
      { speaker: 'Developer', note: 'Unity 6.4 출시(ECS 코어 통합, Project Auditor 내장) 확인. NumLink은 6.3 LTS(2027/12까지 지원)로 당장 업그레이드 불필요. 규칙 위반 3건(AutoSetup/NumberManager/PuzzleManager) 수정 백로그 유지. CoreCLR 6.7 실험적 데스크톱 예정 — 새 프로젝트부터 고려.' },
      { speaker: 'QA Tester', note: 'NumLink Debug.Log 가드 밖 잔존 3파일(LevelData/Endless/DailyPuzzle) MEDIUM 리스크. 자동화 테스트 전무(3프로젝트 공통). agent-office ESLint 1건 지속(useOffice 훅 분리 필요). QA 38건 체크리스트 코드 부재로 여전히 실행 불가.' },
      { speaker: 'Content Writer', note: '개인정보처리방침 3프로젝트 전무 — NumLink 출시 블로커. "Paid Organic" SNS 전략(오가닉→소액 부스팅) 채택 권장. YouTube Shorts 주 7-14개, Discord 커뮤니티 조기 구축. CPP/CSL 맞춤 스토어 페이지 전환율 40% 상승 데이터.' },
      { speaker: 'DevOps', note: 'Node.js 20 EOL 2026-04-30(5주 후) — agent-office 워크플로우 node-version 22/24 업그레이드 시급. daily_standup.bat 3/22 실행 끊김, 작업 스케줄러 재등록 필요. GameCI v4.8.1로 NumLink CI/CD 도입 우선순위 상향.' },
      { speaker: 'Art Director', note: 'CatMergeCafe Mint(#98FB98) 접근성 완전 미달(1.17:1) — 허브 초록 #6B9E78로 즉시 교체. 야간 골목 팔레트 AAA 접근성 검증 완료. Digital Texture(grain/noise)가 종이접기 컨셉과 완벽 정렬. 마이크로인터랙션 100ms 이하 표준 준수 필요. Bento Grid 2.0으로 레벨 선택 UI 개편 제안.' },
    ],
    decisions: [
      {
        title: 'NumLink 스토어 준비 즉시 착수 (3일째 미이행, 최우선)',
        description: '개인정보처리방침 초안 작성→GitHub Pages 배포. ASO 롱테일 키워드 10-15개 선정. 스토어 설명문 한/영 초안 작성. 3일 연속 미착수이므로 오늘 반드시 1건 이상 완료.',
      },
      {
        title: 'Node.js 20→22 워크플로우 업그레이드 (EOL 5주 전)',
        description: 'agent-office deploy-pages.yml의 node-version: 20→22로 변경. 로컬 개발 환경도 Node 22 LTS로 전환. 4/30 EOL 전 완료 필수.',
      },
      {
        title: 'daily_standup.bat 안정화 + 작업 스케줄러 재등록',
        description: '3/22 실행 끊김 원인 조사(메모리/타임아웃 추정). bat 파일에 타임아웃 설정 추가. Windows 작업 스케줄러에 standup 태스크 재등록.',
      },
      {
        title: 'MeowBeat GDD.md 생성 + AI 음악 프로토타입 착수',
        description: 'MeowBeat 리포에 GDD.md 생성(엔진 버전 Unity 6.3 LTS 명시). Beatoven.ai 무료 플랜으로 프로토타입 트랙 1-2곡 생성 테스트. M0 P0-003/P0-004 마무리.',
      },
    ],
  },
  {
    id: '2026-03-22T09:00:00-daily-standup',
    date: '2026-03-22',
    researchTitle: '3/21 결정사항 미이행 점검 + AI 적응형 난이도 + Unity 6.3 LTS + 스토어 준비 전략',
    researchSummary:
      'NumLink 5커밋 push/productName 수정/MeowBeat 워킹트리 정리 등 3/21 결정사항 전부 미이행 확인. 하이브리드 캐주얼 퍼즐 19개 타이틀 $100만+ 돌파, AI 적응형 난이도 도입 시 71% 수익 증가 데이터 확인. Unity 6.3 LTS IL2CPP 빌드 22% 단축. daily_standup.bat Exit code 9009(명령어 미발견) 원인 파악. Digital Texture/벤토 그리드/Anti-Design 등 2026 UI 신규 트렌드 발굴.',
    researchItems: [
      {
        title: '[Orchestrator] 3/21 결정사항 전부 미이행 — NumLink 5커밋 미push, productName 미수정, MeowBeat 81건 잔존',
        description:
          'NumLink: origin/main 대비 5커밋 ahead 유지(push 안 됨). 미커밋 3파일(GameManager/PuzzleManager/GameOverPanel). productName 여전히 "numberchain". MeowBeat: refactor/ai-friendly 브랜치 미추적 55건+수정 26건=81건으로 오히려 증가. agent-office만 동기화 완료 상태.',
      },
      {
        title: '[Game Designer] 하이브리드 캐주얼 퍼즐 $100만+ 19개, AI 적응형 난이도 71% 수익 증가',
        description:
          '2026년 하이브리드 캐주얼 퍼즐 19개가 각 $100만+ 달성(37% 매출 성장률). AI 적응형 난이도 도입 시 최대 71% 수익 증가, 20% 리텐션 향상. 내러티브 통합 퍼즐 주류화. 리듬게임: Gen Z 45% 선호, 인디 55% 음원 라이선싱 난항. Mewgenics 출시 수시간 내 개발비 회수로 고양이 IP 파워 입증.',
      },
      {
        title: '[Developer] Unity 6.3 LTS 출시 — IL2CPP 빌드 22% 단축, Box2D v3 API 추가',
        description:
          'Unity 6.3 LTS: Box2D v3 저수준 API, Bloom 모바일 최적화, IL2CPP 빌드 22% 단축, HTTP/2 지원. GDD 엔진 버전 "Unity 2022 LTS"→"Unity 6.3 LTS" 갱신 필요(2022 LTS 지원 종료). MeowBeat M0 스프린트 M0-001만 in-progress, Unity 프로젝트 미생성. cat-merge-cafe에 C# 파일 0개.',
      },
      {
        title: '[QA Tester] MeowBeat M0 스프린트 지연 + QA 체크리스트 38건 전체 미실행',
        description:
          'MeowBeat M0 스프린트(3/14~15 예정) 3/22 현재 미완료. QA 체크리스트 38개 항목 전체 미실행. 테스트 인프라 전무. agent-office ESLint 오류 1건(OfficeContext.tsx react-refresh 위반). 업계 80%가 테스트 자동화 채택, AI 보조 QA로 개발 시간 28% 절감 사례.',
      },
      {
        title: '[Content Writer] ASO 의미 기반 탐색 전환 + 개인정보처리방침 공개 URL 필수',
        description:
          'Google Play NLP 의미 분석으로 전환 — 자연스러운 문장 내 롱테일 키워드 배치 필요. 개인정보처리방침: 공개 URL+Data Safety Form 동시 필수(미준수 시 앱 정지). 숏폼 영상 주 7-14개 목표. Discord 6.56억 유저로 인디 게임 커뮤니티 필수 인프라. 마케팅은 제작 단계부터 시작해야 비용 절감.',
      },
      {
        title: '[DevOps] daily_standup.bat Exit code 9009 — claude.cmd 경로 미발견 확인',
        description:
          'daily_standup.log 분석: Exit code 9009(명령어 미발견). claude.cmd 경로 실존 여부 확인 필요. 홈 디렉토리 로그는 시작만 기록되고 종료 없음(행 걸림 추정). agent-office 배포 파이프라인 정상(10회 연속 success). GameCI v4.8.1 안정, NumLink CI/CD 도입 권장.',
      },
      {
        title: '[Art Director] Digital Texture/벤토 그리드/Anti-Design — 독창적 컬러 팔레트 제안',
        description:
          '2026 신규 트렌드: Digital Texture(클레이/젤리 촉감 버튼), 벤토 그리드 레이아웃, Soft UI 2.0, 키네틱 타이포, 햅틱 피드백 동기화. NumLink "종이접기" 팔레트(크래프트 베이지+산호+겨자+청록), MeowBeat "야간 골목" 팔레트(딥 네이비+복숭아+라벤더+앰버) 제안. 다크모드 #121212 기반, 색약 3종 프리셋 필요.',
      },
    ],
    meetingTitle: '2026-03-22 일일 진행 회의',
    meetingSummary:
      '3/21 결정사항(NumLink push, productName 수정, MeowBeat 정리) 전부 미이행으로 오늘 최우선 처리. AI 적응형 난이도 71% 수익 증가 데이터 확인. Unity 6.3 LTS 업그레이드 검토. daily_standup.bat 9009 에러 원인 파악. 스토어 준비(개인정보처리방침, ASO 키워드) 착수 시급.',
    meetingItems: [
      { speaker: 'Orchestrator', note: '3/21 결정사항 3건 전부 미이행. NumLink 5커밋 push + 미커밋 3파일 커밋 + productName 수정이 오늘 1순위. MeowBeat 81건 워킹트리 정리 2순위. agent-office 안정.' },
      { speaker: 'Game Designer', note: '하이브리드 캐주얼 퍼즐 37% 성장, AI 적응형 난이도 71% 수익 증가 입증. NumLink에 적응형 난이도+짧은 시즌제 배틀패스 도입 제안. MeowBeat 음원 라이선싱 리스크 대비 필요. Mewgenics 고양이 IP 파워 참고.' },
      { speaker: 'Developer', note: 'Unity 6.3 LTS 출시 — IL2CPP 22% 빌드 단축, Box2D v3 추가. GDD 엔진 버전 갱신 필요(2022 LTS 지원 종료). MeowBeat C# 코드 0개, M0 Unity 프로젝트 생성 시급. GameObject.Find/Input.GetKey 잔존 코드 전환 필요.' },
      { speaker: 'QA Tester', note: 'MeowBeat M0 스프린트 1주 지연(3/14→3/22). QA 체크리스트 38건 전체 미실행. agent-office ESLint 오류 1건 발견. M1에 EditMode 단위 테스트 태스크 추가 권장. 업계 80% 테스트 자동화 채택.' },
      { speaker: 'Content Writer', note: 'ASO가 키워드→의미 기반으로 전환. 개인정보처리방침 공개 URL+Data Safety Form 필수(미준수 시 앱 정지). 숏폼 영상 주 7-14개. Discord 커뮤니티 조기 구축. 스토어 설명문 초안 착수 시급.' },
      { speaker: 'DevOps', note: 'daily_standup.bat Exit code 9009 — claude.cmd 경로 미발견. 로그 분석 완료, 경로 수정 필요. agent-office 배포 10회 연속 success. GameCI v4.8.1로 NumLink CI/CD 도입 권장. Node 22 LTS 업그레이드 검토.' },
      { speaker: 'Art Director', note: 'Digital Texture(촉감 버튼), 벤토 그리드, Anti-Design이 2026 핵심 트렌드. NumLink "종이접기" 팔레트, MeowBeat "야간 골목" 팔레트 제안. 다크모드 #121212 기반 ThemeData 생성 + ColorVariables 통합 최우선.' },
    ],
    decisions: [
      {
        title: 'NumLink 즉시 push + productName 수정 (3/21 미이행 최우선)',
        description: '5커밋 git push + 미커밋 3파일 커밋. productName "numberchain"→"NumLink" 수정. 이틀째 미이행이므로 오늘 반드시 완료.',
      },
      {
        title: 'daily_standup.bat 9009 에러 수정',
        description: 'claude.cmd 경로 실존 확인 후 bat 파일 수정. npm global 재설치 또는 절대 경로 갱신. 로그 파일 위치 통합.',
      },
      {
        title: '스토어 준비 본격 착수 — 개인정보처리방침 + ASO 키워드',
        description: '게임 전용 생성기로 개인정보처리방침 초안 → GitHub Pages 배포. 롱테일 ASO 키워드 10-15개 선정. 스토어 설명문 한/영 초안 작성.',
      },
      {
        title: 'MeowBeat M0 스프린트 완료 촉진 + GDD 엔진 버전 갱신',
        description: 'Unity 프로젝트 생성(M0-003) 우선 완료. GDD 엔진 "Unity 2022 LTS"→"Unity 6.3 LTS" 갱신. 워킹트리 81건 분류 후 commit 또는 .gitignore 처리.',
      },
    ],
  },
  {
    id: '2026-03-21T09:00:00-daily-standup',
    date: '2026-03-21',
    researchTitle: 'NumLink 게임오버 흐름 수정 + 시장 리서치 + 스토어 준비 점검',
    researchSummary:
      'NumLink 게임오버→레벨선택 복귀 흐름을 ReturnToLevelSelect로 전면 재설계. 퍼즐/리듬 시장 리서치(Block Blast MAU 3억, 리듬게임 $50억 전망), ASO 2026 전략 수립, UI/UX 트렌드 반영 계획. 스토어 등록 준비 상태 점검 결과 설명문/개인정보처리방침/ASO 키워드 미비.',
    researchItems: [
      {
        title: '[Orchestrator] NumLink 5커밋 미push, MeowBeat 워킹트리 대량 정리 필요',
        description:
          'NumLink: main에 5커밋 ahead(push 필요). 미커밋 변경 3파일(GameManager/PuzzleManager/GameOverPanel — 게임오버 흐름 수정). MeowBeat: refactor/ai-friendly 브랜치에 50+개 미추적 파일. agent-office: origin/main 동기화 완료, 안정.',
      },
      {
        title: '[Developer] RestartGame→ReturnToLevelSelect 전면 재설계 + ClearBoardChildren 역순 반복 수정',
        description:
          'GameManager.RestartGame()이 PuzzleManager.ReturnToLevelSelect() 호출하도록 변경. ReturnToLevelSelect: 보드/라인 정리→보드영역 숨기기→NumberManager 리셋→생명UI 숨기기→레벨선택 표시. ClearBoardChildren foreach→역순 for 루프로 ObjectPool Despawn 안정성 확보. GameOverPanel.OnTryAgainClicked 이중호출 방지.',
      },
      {
        title: '[QA Tester] 활성 버그 0건, 기술 부채 7건(LOW), 자동 테스트 전무',
        description:
          '최근 21건 fix 커밋으로 알려진 버그 모두 수정. 미해결 TODO 7건(업적UI, 시드해시, SaveSystem 등 전부 LOW). HintManager 디버그 로그 릴리스 잔존 리스크(MEDIUM). 두 프로젝트 모두 자동화 테스트 0건 — 수동 Play Mode 테스트 의존.',
      },
      {
        title: '[Game Designer] Block Blast MAU 3억, 메타레이어 필수화, 리듬게임 $50억 전망',
        description:
          'NumLink: 이미지 컬렉션 메타레이어 도입 최우선(Royal Match 패턴). Daily Puzzle 소셜 리더보드 추가. 온보딩 3x3 극소 그리드로 즉각 만족감. MeowBeat: 고양이 반응=핵심 게임플레이 피드백 통합. K-pop 비중 50%+. 냥스타그램 UGC 풀콤보 영상 공유.',
      },
      {
        title: '[Content Writer] 스토어 등록 준비 미비 — 설명문/개인정보처리방침/ASO 키워드 부재',
        description:
          'NumLink: 아이콘+스크린샷(QA용 9장) 존재하나 스토어용 정제본 없음. 짧은/긴 설명문, 개인정보처리방침, ASO 키워드 모두 미작성. MeowBeat: 스크린샷/설명문/아이콘 전부 없음. ASO 2026 핵심: 커스텀 제품 페이지(CPP), 숏폼 영상, AI 메타데이터 생성.',
      },
      {
        title: '[DevOps] daily_standup.bat 실행 실패(exit code 1) — 로그 추가 완료',
        description:
          '3/21 오전 9시 Task Scheduler 실행됐으나 exit code 1 실패. claude.cmd 경로는 정상 — 비대화형 환경 문제 추정. bat에 >> daily_standup.log 2>&1 추가하여 다음 실행부터 디버깅 가능. NumLink CI/CD 부재, productName "numberchain" 불일치.',
      },
      {
        title: '[Art Director] 미니멀+깊이감 트렌드, DefaultTheme 1개뿐 — 다크모드/색약 모드 필요',
        description:
          '2026 트렌드: 글래스모피즘, 마이크로 인터랙션, 슬라이드 내비게이션, 접근성. NumLink: ThemeManager 인프라 준비됐으나 DefaultTheme 1개뿐. ColorVariables에 하드코딩 색상이 ThemeData와 중복. 최우선: ColorVariables 통합→다크모드 에셋 추가→패널 전환 애니메이션 통일.',
      },
    ],
    meetingTitle: '2026-03-21 일일 진행 회의',
    meetingSummary:
      'NumLink 게임오버→레벨선택 복귀 흐름 전면 재설계 완료. 시장 리서치 결과 메타레이어/소셜/UGC가 2026 리텐션 삼각형. 스토어 등록 준비 대폭 미비하여 APK 빌드 전 설명문/개인정보처리방침 작성 시급.',
    meetingItems: [
      { speaker: 'Orchestrator', note: 'NumLink 5커밋 미push + 미커밋 3파일(게임오버 수정). MeowBeat 워킹트리 50+ 파일 정리 시급. agent-office 안정. 우선순위: NumLink push → 스토어 준비 → MeowBeat 정리.' },
      { speaker: 'Developer', note: 'RestartGame→ReturnToLevelSelect 전면 재설계. 보드영역 숨기기/복원 패턴 적용. ClearBoardChildren 역순 반복 수정. GameOverPanel 이중호출 방지. 아키텍처 이슈: GameObject.Find, Input.GetKey 직접 사용 잔존.' },
      { speaker: 'QA Tester', note: '활성 버그 0건(21건 수정 완료). 기술 부채 7건 전부 LOW. HintManager 디버그 로그 릴리스 전 제거 필수. 자동 테스트 전무 — 최소 컴파일 체크 CI 권장.' },
      { speaker: 'Game Designer', note: '메타레이어 필수화 트렌드. NumLink: 이미지 컬렉션/앨범 시스템 최우선. Daily Puzzle 소셜 리더보드. MeowBeat: 고양이 반응=게임플레이 피드백. 냥스타그램 UGC 확장.' },
      { speaker: 'Content Writer', note: 'NumLink 스토어 등록 미비: 설명문/개인정보처리방침/ASO 키워드 0건. 스크린샷 정제본 필요. productName "numberchain"→"NumLink" 수정 필요. ASO 2026: CPP + 숏폼 영상 우선.' },
      { speaker: 'DevOps', note: 'daily_standup.bat 오늘 실패(exit code 1). 로그 기록 추가 완료. NumLink CI/CD 부재 — GameCI 워크플로우 추가 권장. agent-office 배포 파이프라인 정상(최근 5회 전부 success).' },
      { speaker: 'Art Director', note: '2026 트렌드: 미니멀+깊이감, 마이크로 인터랙션. NumLink: DefaultTheme만 존재 → 다크모드 ThemeData 추가 필요. ColorVariables-ThemeData 색상 중복 통합. 패널 전환 슬라이드 애니메이션 통일.' },
    ],
    decisions: [
      {
        title: 'NumLink 커밋 push + 스토어 준비 착수',
        description: '로컬 5커밋 즉시 push. 스토어 설명문(한/영), 개인정보처리방침, ASO 키워드 리서치 시작. productName "numberchain"→"NumLink" 수정.',
      },
      {
        title: '게임오버 흐름 수정 검증',
        description: 'ReturnToLevelSelect 방식의 게임오버→레벨선택 복귀가 정상 동작하는지 Play Mode 수동 테스트 필수. 보드영역 숨기기/복원이 모든 레벨에서 작동하는지 확인.',
      },
      {
        title: 'HintManager 디버그 로그 #if UNITY_EDITOR 가드 추가',
        description: 'DEBUG_LOG_INTERVAL 매 180프레임 로그가 릴리스 빌드에 포함되지 않도록 조치.',
      },
      {
        title: 'daily_standup.bat 디버깅',
        description: '내일(3/22) 실행 후 daily_standup.log 확인하여 실패 원인 파악. 필요시 --dangerously-skip-permissions 플래그 추가 검토.',
      },
    ],
  },
  {
    id: '2026-03-20T09:00:00-daily-standup',
    date: '2026-03-20',
    researchTitle: 'NumLink 4-Bug Fix + 버튼/선/게임오버 안정화 + 자동회의 복구',
    researchSummary:
      'NumLink에서 버튼 색상 조기 변경, 하이라이트 중복, 패널 3개 동시 등장, 테마 미반영 등 4가지 버그를 일괄 수정했고, 이후 발견된 선 사라짐/버튼 꺼짐/게임오버 흐름 문제까지 3건 추가 수정 완료. daily_standup.bat PATH 오류로 자동 회의가 실패하고 있었던 문제도 해결. 총 커밋 3건(c29ee15, a9ab430, ec2fa2f).',
    researchItems: [
      {
        title: '[Developer] 4-Bug 일괄 수정 + 선/버튼/게임오버 추가 수정',
        description:
          'BUG1: OnPointerDown에서 SetConnectedColor 제거, OnPointerUp에서 RestoreUnconnectedColor 호출. BUG2: isConnected 가드 추가로 연결된 버튼 하이라이트 방지. BUG3: StageClear/ShowLevelSelectUI 동시 호출 제거, LevelCompletePanel에 보상 애니메이션 이전. BUG4: UIColorPalette에 Background/TextPrimary/ProgressBarBg 추가. 추가: CreateConnectionLine 전 SetConnectedColor 호출로 선 색상 수정, HandleDragEnd/ForceEndDrag에 색상 복원 추가, GameOverPanel에서 레벨 선택 화면 복귀 구현.',
      },
      {
        title: '[Orchestrator] 프로젝트 상태 — NumLink 3커밋 미push, MeowBeat 리팩토링 진행 중',
        description:
          'NumLink: main에 3커밋 앞서 있음(push 필요), 미추적 파일(DailyChallengeHubPanel, _Recovery, Screenshots) 정리 필요. MeowBeat: refactor/ai-friendly 브랜치에서 대규모 리팩토링 중(60+개 새 파일). agent-office: main 동기화 완료, 안정적.',
      },
      {
        title: '[QA Tester] 게임오버 이벤트 흐름 설계 결함 발견',
        description:
          'GameOverPanel.OnEnable이 OnAllLivesLost 이벤트를 기다리지만 GameManager.SetGameOver에서 해당 이벤트를 트리거하지 않음 → Show() 미호출 가능. lineRendererPrefab null 시 선 렌더링 불가. isVibrated 플래그 상태 누수 가능(낮음). 전체 기술 부채 6건(TODO/HACK).',
      },
      {
        title: '[DevOps] daily_standup.bat PATH 오류 수정 + 빌드 환경 정상',
        description:
          'Windows Task Scheduler가 사용자 PATH를 상속하지 않아 claude 명령어를 찾지 못해 매일 실패(LastTaskResult:1). claude → C:\\Users\\LIMMM\\AppData\\Roaming\\npm\\claude.cmd 전체 경로로 수정. Unity 6000.3.5f2, agent-office Vite 7.1.2 + React 19.1.1 정상.',
      },
    ],
    meetingTitle: '2026-03-20 일일 진행 회의',
    meetingSummary:
      'NumLink 게임 핵심 버그 7건 수정 완료(4+3), 자동 회의 시스템 복구, MeowBeat 리팩토링 진행 중. QA에서 게임오버 이벤트 흐름 설계 결함 발견하여 후속 수정 필요.',
    meetingItems: [
      { speaker: 'Orchestrator', note: 'NumLink 3커밋 미push 상태. MeowBeat refactor/ai-friendly 브랜치 60+ 파일 변경 중. agent-office 안정. NumLink push + 미추적 파일 정리 우선.' },
      { speaker: 'Developer', note: '오늘 커밋 3건: 4-bug 일괄 수정(c29ee15), 버튼 사라짐 수정(a9ab430), 선/버튼/게임오버 수정(ec2fa2f). 기술 부채 6건 존재(TODO), 모두 낮은 우선순위.' },
      { speaker: 'QA Tester', note: '게임오버 흐름에서 OnAllLivesLost 이벤트 미트리거 결함 발견(높음). lineRendererPrefab null 시 선 렌더링 불가(높음). isVibrated 상태 누수(낮음). 전반적 품질은 안정화 진행 중.' },
      { speaker: 'DevOps', note: 'daily_standup.bat PATH 오류로 매일 자동 회의 실패하고 있었음. claude.cmd 전체 경로로 수정 완료. 내일(3/21)부터 정상 자동 실행 예상.' },
    ],
    decisions: [
      { title: 'NumLink push 및 정리', description: 'NumLink 3커밋 원격 push + 미추적 파일(DailyChallengeHubPanel, _Recovery, Screenshots) 정리' },
      { title: '게임오버 이벤트 흐름 수정', description: 'GameManager.SetGameOver에서 TriggerAllLivesLost 호출 추가 또는 ShowGameOverScreen에서 직접 Show() 호출로 이벤트-UI 동기화' },
      { title: 'MeowBeat 리팩토링 리뷰', description: 'refactor/ai-friendly 브랜치 60+ 파일 변경 리뷰 후 main 머지 준비' },
    ],
  },
  {
    id: '2026-03-19T09:00:00-daily-standup',
    date: '2026-03-19',
    researchTitle: 'NumLink 게임 로직 버그 수정 + 7개 분야 병렬 리서치',
    researchSummary:
      'NumLink Sprint 5 UI/UX 개선 후 발생한 게임 핵심 로직 3가지 버그(선 미표시, 숫자 사라짐, 클리어 조건 미달)를 수정하고, 7명 에이전트가 각 전문 분야별 중복 없는 병렬 리서치를 수행했다. 퍼즐 시장 $138억→$240억 성장 전망, 글래스모피즘 UI 트렌드 복귀, TikTok 유기적 도달 급락, Unity 6.1 WebGPU 공식 지원 등 핵심 인사이트를 도출했다.',
    researchItems: [
      {
        title: '[Developer] NumLink 게임 로직 버그 3건 수정',
        description:
          'NumberManager.CreateConnectionLine()의 isCleared 가드 제거 → actualConnections 기반 중복 체크로 대체. connectedCount++를 ProcessSuccessfulConnection으로 이동. NumberButton OnEnable/SetDefaultTextColor에 ThemeManager null 체크 추가. AutoSetup ClearActiveButtons를 isNew 블록 내로 이동. 컴파일 에러 0건 확인.',
      },
      {
        title: '[Developer] Unity 6.1 WebGPU 공식 지원 + C# 13 제로 할당 패턴',
        description:
          'Unity 6000.1.0f1에서 WebGPU가 Web Player 공식 그래픽 API로 승격, WebGL 기본 압축이 brotli로 변경. C# 13의 params ReadOnlySpan<T>로 가변 인자 힙 할당 제거 가능 — 게임 루프 GC 압력 직접 감소. DOTween 1.2.825 Unity 6 호환 유지.',
      },
      {
        title: '[Game Designer] 퍼즐 시장 $138억→$240억, 넘버링크는 틈새 블루오션',
        description:
          '퍼즐 게임 시장 CAGR 6.96% 성장 전망. 넘버링크 계열은 주류 차트에 거의 없어 포화도가 낮은 틈새 장르. Block Blast(월 3천만 DL)의 성공 공식은 "단순 조작 + 전략 깊이 분리". 수익화는 리워드 광고 참여율 45-60%, 강제 인터스티셜은 잔존율 직결 훼손.',
      },
      {
        title: '[Art Director] 글래스모피즘 복귀 + AI 에셋 제작 90% 시간 단축',
        description:
          'Apple Liquid Glass 영향으로 반투명+굴절+레이어 깊이감이 2026 핵심 트렌드. 뉴모피즘은 저대비 접근성 이슈로 후퇴, 뉴브루탈리즘이 인디 게임에서 부상. AI 도구로 에셋 제작 시간 최대 90% 단축(Meshy AI: 8시간→60초). 색각 이상 대응은 형태+패턴+아이콘 병용 필수.',
      },
      {
        title: '[Content Writer] TikTok 유기적 도달 급락 + Paid Organic 전략',
        description:
          '2025 하반기부터 TikTok 무료 노출 급감(42만→6천 뷰 사례). 자연 반응 생긴 게시물에만 소액 부스팅하는 Paid Organic이 일반 광고 대비 100배 효율적. 영상 devlog가 텍스트를 대체하며 30-60초 "변화 전후" 비교 영상이 최고 조회수. K-인디게임 글로벌 진출 원년.',
      },
      {
        title: '[QA Tester] 3개 프로젝트 품질 양호 — NumLink TODO 7건 LOW',
        description:
          'NumLink: fix 커밋 10건 활발, TODO 7건 모두 LOW 우선순위, 컴파일 경고는 외부 라이브러리만. MeowBeat: TODO 0건 깔끔, 대량 .meta 미커밋 정리 필요. agent-office: TODO 0건, 완벽 커밋 상태. 모든 프로젝트 게임 로직 관점 안정적.',
      },
      {
        title: '[DevOps] agent-office 배포 정상, npm 13개 패키지 outdated',
        description:
          'GitHub Pages 자동 배포 정상 작동(빌드 1.62초). React 19.2.4, Vite 8.0.0 등 업데이트 가능하나 심각하지 않음. NumLink/MeowBeat 모두 Unity 6000.3.5f2 동일 버전, .gitignore 완벽. 즉시 필요한 Critical 사항 없음.',
      },
    ],
    meetingTitle: '이전 회의 흐름 기반 방향성 + 인사이트 종합 회의',
    meetingSummary:
      '3/14~3/18 회의 흐름(코드 리뷰→Phase 6→수익화→게임 팩토리)을 이어받아, NumLink Sprint 5 버그 수정 완료를 확인하고 APK 빌드 임박 상태를 공유했다. 7개 분야 리서치에서 "넘버링크 틈새 블루오션", "글래스모피즘 UI", "TikTok Paid Organic", "WebGPU 전환 준비" 4가지 핵심 인사이트를 도출하고, NumLink 스토어 출시와 MeowBeat Phase 3 병렬 진행 전략을 확정했다.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '3/17 62건 코드 리뷰 → 3/18 Phase 6 완료 → 오늘 Sprint 5 버그 수정까지 NumLink가 빠르게 안정화되고 있다. 현재 NumLink는 APK 빌드+스토어 등록만 남았고, MeowBeat는 에셋 작업 대기 상태. 두 프로젝트를 병렬로 진행할 시점이다.',
      },
      {
        speaker: 'Developer',
        note: '오늘 수정한 3건의 근본 원인은 모두 isCleared 플래그 남용이었다. actualConnections HashSet 기반 중복 체크로 전환하여 라인 렌더링과 connectedCount가 항상 동기화되도록 했다. 또한 Unity 6.1의 WebGPU 공식 지원이 확정되었으니, NumLink WebGL 빌드 시 brotli 압축 서버 설정을 미리 준비해야 한다.',
      },
      {
        speaker: 'Game Designer',
        note: '넘버링크 계열이 주류 차트에 거의 없다는 건 위험이자 기회다. Block Blast가 증명했듯 "단순 조작 + 전략 깊이"가 2026 퍼즐 승리 공식인데, NumLink의 경로 연결 코어가 정확히 이 구조다. 차별화 포인트는 Daily Puzzle 메타 루프와 이미지 공개 보상 — 이미 구현되어 있으니 스토어에서 테스트할 준비가 됐다.',
      },
      {
        speaker: 'Art Director',
        note: '글래스모피즘이 다시 떠오르고 있지만, NumLink 현재 테라코타 쿼츠 테마는 따뜻한 톤이라 글래스 효과와 잘 어울릴 수 있다. 다만 뉴모피즘의 저대비 실수를 반복하지 않도록 WCAG AA 4.5:1 대비 기준을 반드시 지켜야 한다. AI 에셋 도구(Meshy AI 등)를 MeowBeat 에셋 작업에 활용하면 Owner 부담을 크게 줄일 수 있다.',
      },
      {
        speaker: 'Content Writer',
        note: 'TikTok 유기적 도달이 급락했다는 건 중요한 전략 변화 신호다. NumLink 출시 시 Paid Organic 전략을 써야 한다 — 먼저 devlog 영상을 올리고, 자연 반응이 생긴 것에만 소액 부스팅. "AI 1인 개발 타임랩스"는 여전히 틈새 콘텐츠라 선점 가치가 있고, K-인디게임 글로벌 진출 트렌드와도 맞물린다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink TODO 7건은 모두 LOW라 스토어 출시에 블로커가 아니다. MeowBeat의 대량 미커밋 .meta 파일이 더 시급 — 리팩토링 브랜치에서 정리 후 merge해야 다음 에셋 작업에 충돌이 없다. 오늘 수정한 Sprint 5 버그 3건도 Play Mode에서 에러 0건 확인되었으니 커밋 진행해도 된다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office npm 의존성 13개 outdated지만 Breaking change 없으므로 일괄 업데이트 안전하다. NumLink APK 빌드 파이프라인이 아직 없는데, 3/18 회의에서 결정한 GitHub Actions + Google Play Internal Testing 자동화를 이번 주 안에 구축해야 스토어 출시 일정에 맞출 수 있다.',
      },
    ],
    decisions: [
      {
        title: 'NumLink Sprint 5 버그 수정 완료 → 커밋 + APK 빌드 단계 진입',
        description:
          '선 미표시/숫자 사라짐/클리어 조건 미달 3건 모두 수정, 컴파일 에러 0건, Play Mode 에러 0건 확인. 변경사항 커밋 후 APK 빌드 + AppLovin MAX SDK 통합으로 진행한다.',
      },
      {
        title: '인사이트: 넘버링크 틈새 블루오션 + Daily Puzzle 메타 루프로 차별화',
        description:
          '넘버링크 계열은 퍼즐 시장에서 포화도가 낮은 틈새 장르. "단순 조작 + 전략 깊이" 승리 공식에 부합하며, 이미 구현된 Daily Puzzle + 이미지 공개 보상이 경쟁작 대비 메타 루프 차별화 포인트. 스토어에서 빠르게 시장 반응을 테스트한다.',
      },
      {
        title: '인사이트: TikTok Paid Organic + AI 개발 타임랩스 마케팅',
        description:
          'TikTok 유기적 도달 급락으로 전략 전환 필요. 자연 반응 게시물에 소액 부스팅하는 Paid Organic 방식 채택. "AI 1인 개발 타임랩스"를 K-인디게임 글로벌 진출 트렌드와 결합하여 선점한다.',
      },
      {
        title: '인사이트: WebGPU 전환 준비 + brotli 서버 설정',
        description:
          'Unity 6.1에서 WebGPU가 공식 지원되고 WebGL 기본 압축이 brotli로 변경. agent-office/itch.io 배포 시 Content-Encoding: br 헤더 설정을 미리 준비. 장기적으로 WebGL→WebGPU 전환 로드맵 수립.',
      },
      {
        title: '이번 주 액션: APK 빌드 파이프라인 + MeowBeat .meta 정리',
        description:
          'DevOps: GitHub Actions + Google Play Internal Testing 자동화 구축. QA: MeowBeat 리팩토링 브랜치 .meta 파일 정리 후 merge. DevOps: agent-office npm update 실행. 이상 3건을 이번 주 내 완료.',
      },
    ],
  },
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
      {
        title: 'UI/UX 4개 스트림 병렬 구현',
        description:
          'ScriptableObject 테마 시스템, 게임 플레이 피드백 강화(바운스 1.2x Elastic, 라인 그라데이션, 클리어 웨이브+카메라 셰이크, 콤보/진행률 이벤트), 메뉴 UX 개선(패널 Fade/ScaleBounce/SlideIn 트랜지션, 보상 카운트업, Daily Puzzle 상태 이벤트)',
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
      {
        title: 'UI/UX 개선 완료 — ThemeData SO 기반 색상 통합, 컴파일 0 에러 확인',
        description:
          'ThemeData ScriptableObject 기반 색상 통합, DOTween 피드백 시스템(바운스/라인 그라데이션/클리어 웨이브), 패널 트랜지션(Fade/ScaleBounce/SlideIn) 전체 구현 완료. 컴파일 0 에러 확인.',
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
