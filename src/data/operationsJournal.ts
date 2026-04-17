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
    id: '2026-04-18T04:00:00-daily-standup',
    date: '2026-04-18',
    researchTitle:
      '📊 4/18 데일리 스탠드업 — Unity7폐기·CoreCLR로드맵·MeowBeatFindObjectOfType12연타·QA4일째이월·UGC리듬생존조건·Steam프리런칭·색약이중화',
    researchSummary:
      '7명 에이전트 병렬 리서치(제6회). 두 프로젝트 모두 최근 1일 커밋 0건, 미커밋 이월 4일째 지속. MeowBeat Sprint 3 87% blocked(S3-06 FarmScene 파란화면), Sprint 4/6/7 연쇄 차단. NumLink Phase 5 완료지만 Tools/ 여전히 부재. Unity 7 공식 폐기 발표 — 2026 로드맵은 6.x+CoreCLR 집중(6.7 LTS 데스크톱 실험 플레이어). Addressables for Android 신규. Poki SDK 초기 다운로드 8MB 제한. MeowBeat GameManager.cs 94-105줄 FindObjectOfType 12연타 + ButtonController GameObject.Find 6회 + Player Input.GetKeyDown 루프 신규 발견. 2026 라이브옵스 트렌드는 월 20→100 이벤트 플로우+배틀패스 3중 태스크(일/주/시즌). Fortnite Festival 드럼/보컬 추가·RedOctane Stage Tour 2026 가을 복귀. UGC 에디터가 리듬게임 수명 2배. Steam 프리런칭 12-18개월+Google Play Games on PC 140국 노출. Keymailer/Woovit 무료 인플루언서 접근. 2026 UI는 키네틱 타입·Plush3D 런처·4D Vibration 햅틱. 다크모드 #000금지 #121212 권장. 색약 8% 대응 아이콘+패턴+라벨 3중화 필수.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink Phase5 완료·MeowBeat Sprint3 87% blocked·이월4일째',
        description:
          'NumLink Phase 5 10/10 완료(Phase 6 킥 구현 미착수), MeowBeat Sprint 3 87%(S3-06 FarmScene 파란화면 blocker), Sprint 4/6/7 연쇄 차단. 전체 진행률 양 프로젝트 모두 약 62%. 이월 P0 4일째: 미커밋 정리·QA인프라·Unity업그레이드. 가장 시급한 1건은 FarmScene 렌더링 복구로 Sprint 3 마감 → Sprint 4 착수 언블록.',
      },
      {
        title: '🎮 Game Designer — 라이브옵스월20→100이벤트·배틀패스3중태스크·UGC리듬생존조건·Fortnite Festival드럼추가',
        description:
          '2026 라이브옵스: 이벤트 cadence 월 73→89건, 템플릿화+AI 라이브옵스 표준. Gossip Harbor 월 20→100 이벤트 연속 플로우. 배틀패스 일/주/시즌 3중 태스크가 리텐션 핵심 엔진. Fortnite Festival 2026.4 드럼/보컬 추가로 서구 확장, RedOctane Stage Tour 2026 가을 기타히어로 부활. 소셜/길드 탑재 리텐션 +40%. Beatstar·Beat Saber UGC 에디터 생태계가 수명 2배. Synesthesia e스포츠·KAC/BPL 경쟁씬 확장. GaaS-lite($30+시즌$10-20) 중소 스튜디오 신표준. MeowBeat 길드 챌린지+노트 에디터 MVP 제안, NumLink 데일리 퍼즐 팩+시즌패스 템플릿화 제안.',
      },
      {
        title: '💻 Developer — Unity7폐기·CoreCLR6.7LTS·Addressables for Android·MeowBeat FindObjectOfType12연타 신규발견',
        description:
          'Unity 7 공식 폐기, 2026 로드맵은 6.x+CoreCLR 집중. 6.7 LTS부터 데스크톱 CoreCLR 실험 플레이어 도입, 6.3 LTS 지원 2027.12까지, 6.0은 2026.10 만료. Addressables for Android 패키지로 PAD·텍스처 자동 선택. Poki SDK 초기 다운로드 8MB 이하+gameplayStart 필수. 신규 발견: MeowBeat GameManager.cs 94-105줄 FindObjectOfType 12개 연속, ButtonController.cs 347-402줄 GameObject.Find("ItemUI") 6회 반복, Player.cs 23-60줄 Input.GetKeyDown 루프+Find 중첩, LevelSystem.cs 163줄 타이머(2.5f-0.5f*i) 매직 넘버. NumLink LevelSelectUI.cs 437-447줄 보드 크기 40/100/160 하드코딩 중복.',
      },
      {
        title: '🔍 QA Tester — NumLink Tools/4일째부재·MeowBeat QA인프라완비·Tests/Editor 공각상태·.meta 누락 0건',
        description:
          'MeowBeat Tools/ 완비 확인 — unity_validate.py·qa_static.py·known_bugs.json·run_regression.py·test_fixtures 모두 존재. AutoQATests/Editor/AutoGenTests.cs 실존(tracked). NumLink Tools/ 여전히 부재 — 4일째 이월, _ProjectTemplate 복사 미실행. Assets/Tests/Editor/ 빈 디렉토리(AutoGenTests 삭제 후 껍데기만). .cs↔.meta 누락 양 프로젝트 0건. MeowBeat 루트에 "C:UnityFeedme/" 잘못된 경로명 폴더 유령 존재(경로 구분자 파싱 실수 잔재).',
      },
      {
        title: '📢 Content Writer — Steam프리런칭12-18개월·GPG on PC 140국·Keymailer/Woovit무료·마이크로스트리머+20%',
        description:
          'Steam 위시리스트 벨로시티 5K-10K 론칭 전 목표, 프리런칭 12-18개월 마케팅 표준. Google Play Games on PC 140+국가 기본 노출 — 모바일 게임 PC 확장 무료. Very Big Indie Pitch 런던 5분 6회전 상위3 PR 확보. Keymailer 월 10키 무료·Woovit 무료 무제한 인플루언서 접근. 마이크로스트리머(100-2K뷰) 전환율 +20%. 한국 2026 "설치 중심 종료" 리텐션·팬덤 중심 전환, 원스토어 배틀패스·시즌패스 신뢰형 BM 주류화. itch.io 태그 세분화(puzzle→logic-puzzle) 발견성 핵심. 스크린샷 상위 2장+아이콘이 전환율 20-35% 좌우.',
      },
      {
        title: '⚙️ DevOps — agent-office GHA 10회정상·두프로젝트 워크플로우부재·장기분기리스크·Unity CloudBuild→Build Automation',
        description:
          'agent-office GitHub Actions 10회 전부 성공(cancelled 1회만). NumLink/MeowBeat 모두 .github/workflows/ 부재 — CI/CD 공백 지속. NumLink feature/uitoolkit → main 동기화 지연, MeowBeat feature/song-ownership-migration 장기 분기+dirty 상태(Google Ads/manifest 미커밋). Unity Cloud Build → Build Automation 리브랜딩(3/1 가격 개편). 장기 분기 리스크 제거 필요 — 머지 후 삭제 or rebase 복구.',
      },
      {
        title: '🎨 Art Director — 키네틱타입·Plush3D런처·4D Vibration햅틱·색약8%이중화·다크#121212·Maplestory평가',
        description:
          '2026 키네틱 히어로 타입(모션화 문자) 부상. Gumdrop·Kawaii 라운드체가 모바일 게임 표준. Maplestory 폰트: 귀여움+가독성 합격, 단 Kinetic 부족 — Bold 웨이트 추가 권장. rlottie(Unity Job System)+DOTween 병행 트렌드, Jitter 프리셋으로 1프레임 반응. 4D Vibration 리듬게임 필살기. Plush 3D+Mascot 캐릭터 아이콘 급상승, "미니 포스터" 런처 원칙. 다크모드 80%+ 선호, #000 금지 #121212 권장. 색약 8% 대응 아이콘+패턴+라벨 3중화 필수. NumLink 15색 팔레트가 색약에 치명적(점선/실선/이중선 테두리 패턴 필요), MeowBeat 노트에 발바닥 아이콘 중첩 필요.',
      },
    ],
    meetingTitle:
      '🏢 4/18 데일리 스탠드업 — FarmScene언블록·FindObjectOfType12연타리팩터·NumLink Tools복사·Steam프리런칭·색약이중화·장기분기정리',
    meetingSummary:
      'MeowBeat Sprint 3 S3-06 FarmScene 파란화면이 Sprint 4/6/7 연쇄 차단 — 오늘 최우선 언블록. NumLink Tools/ 4일째 이월 지속, 바로 복사 실행(CLAUDE.md 지침). MeowBeat GameManager FindObjectOfType 12연타 신규 발견 — ServiceLocator 일괄 전환으로 기동 비용+테스트성 동시 해결. Unity 7 폐기·Poki 8MB 제한 등 로드맵 점검. 2026 라이브옵스 트렌드는 이벤트 cadence·배틀패스·UGC — MeowBeat 노트 에디터 MVP 사전 검토. Steam 프리런칭·GPG on PC 노출 채비. NumLink 15색 팔레트 색약 8% 대응 이중화(패턴 테두리+Bold 폰트). 장기 분기 dirty 상태 제거 필수.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '어제 두 프로젝트 모두 커밋 0건으로 P0가 4일째 이월됐습니다. 진짜 블로커는 MeowBeat S3-06 FarmScene 파란화면입니다. Sprint 3 87%→100% 마감이 Sprint 4/6/7 전진의 전제입니다. FarmFoodManager 렌더링 복구+디버그로그 5개 제거 후 feature/song-ownership-migration에 원자적 커밋이 오늘 최우선입니다. NumLink Tools/ 4일째 부재는 Phase 6 진입 전까지 즉시 블로커는 아니나 오늘 해결 가능하니 병행합니다.',
      },
      {
        speaker: 'Game Designer',
        note: '2026 라이브옵스는 이벤트 cadence 월 73→89건으로 템플릿화+AI 운영이 표준입니다. Gossip Harbor는 월 20에서 100 이벤트로 연속 플로우 구축, 배틀패스 일/주/시즌 3중 태스크가 리텐션 엔진입니다. 서구권에선 Fortnite Festival 4월 드럼/보컬 추가·RedOctane Stage Tour 가을 복귀로 리듬 장르 재부흥입니다. UGC 에디터는 Beatstar·Beat Saber에서 수명 2배 증명. MeowBeat에 "노트 간격·밀도만 조정" 커스텀 난이도 에디터 MVP를 다음 스프린트에 편입 제안합니다. NumLink는 데일리 퍼즐 팩+시즌패스 템플릿화가 우선입니다.',
      },
      {
        speaker: 'Developer',
        note: 'Unity 7 공식 폐기됐습니다. 2026 로드맵은 6.x+CoreCLR(6.7 LTS 데스크톱 실험 플레이어). 6.3 LTS가 2027.12까지 지원되므로 다음 스프린트 플래닝 안건으로 사전 검토 필요합니다. Poki SDK는 초기 다운로드 8MB 이하 제한—MeowBeat 현재 빌드 크기 측정 항목 회귀 체크 추가. 오늘 실시 가능한 신규 기술 부채: MeowBeat GameManager.cs 94-105줄 FindObjectOfType 12개 연속 구간을 ServiceLocator 일괄 등록으로 1커밋 리팩터 제안합니다. 기동 비용과 테스트성을 동시 개선합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'MeowBeat는 unity_validate.py·qa_static.py·known_bugs.json·run_regression.py 전부 있고 AutoQATests도 tracked 상태로 양호합니다. NumLink Tools/는 4일째 부재이고 Assets/Tests/Editor는 AutoGenTests 삭제 후 빈 껍데기입니다. CLAUDE.md 지침대로 _ProjectTemplate/Tools/를 NumLink에 바로 복사하고 Tests/Editor 공각 상태 처리 커밋 의도를 확인해야 합니다. MeowBeat 루트에 "C:UnityFeedme/" 라는 잘못된 경로명 폴더 1개가 유령으로 남아 있으니 제거해야 합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'Steam 프리런칭은 12-18개월 리드타임이 표준이고 Google Play Games on PC가 140국 기본 노출을 무료 확장합니다. Keymailer 월 10키+Woovit 무제한 무료가 인플루언서 접근 비용을 0원으로 낮췄고, 마이크로스트리머(100-2K뷰) 구간 전환율이 +20%입니다. 한국은 2026년 설치 중심에서 리텐션·팬덤 중심으로 전환, 원스토어 시즌패스가 주류입니다. NumLink Steam 프리런칭 페이지 등록을 오늘 착수해 12개월 리드타임을 확보하고, MeowBeat 스토어 스크린샷 1-2번 슬롯을 고양이 리액션+BPM 숫자 오버레이로 재디자인(전환율 20-35% 좌우) 제안합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office GHA는 10회 전부 성공으로 안정적입니다. NumLink·MeowBeat 모두 .github/workflows/가 없어 CI/CD 공백입니다. 더 시급한 문제는 MeowBeat feature/song-ownership-migration의 장기 분기+dirty 상태입니다. Google Ads·manifest 미커밋을 오늘 안에 정리(커밋 or stash)하고 master에 머지 후 브랜치 삭제해야 폭탄을 제거할 수 있습니다. NumLink feature/uitoolkit은 main 기준 rebase로 동기화 복구가 필요합니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026 UI 트렌드는 키네틱 히어로 타입(모션화 문자)·Plush 3D+Mascot 런처 아이콘·4D Vibration 햅틱이 핵심입니다. Maplestory 폰트는 귀여움+가독성 합격이지만 Kinetic 요소 부족하니 Bold 웨이트 추가 권장합니다. 다크모드는 80% 이상 사용자가 선호하며 순흑(#000) 금지, #121212 권장입니다. 접근성 측면에서 NumLink 15색 팔레트는 색약 8%에 치명적이니 숫자 폰트 Bold+테두리 패턴(점선/실선/이중선)으로 이중화해야 합니다. MeowBeat는 Perfect/Good/Miss 판정에 UIImpactFeedbackGenerator(iOS)+VibrationEffect(Android) 차등 햅틱을 적용하면 4D Vibration 트렌드 선점과 시각장애 접근성을 동시 해결합니다.',
      },
    ],
    decisions: [
      {
        title: '[P0] MeowBeat S3-06 FarmScene 렌더링 복구 — Sprint 3 마감 언블록',
        description:
          'FarmFoodManager 씬 파란화면 근본 원인 진단+디버그로그 5개 제거. feature/song-ownership-migration에 원자적 커밋. Sprint 4(S4-02 머지 그리드 UI)·Sprint 6·Sprint 7 연쇄 언블록 전제. 디버그는 Debug.Log 삽입→mcp__UnityMCP__read_console OBSERVE-NARROW-ROOT 증거 기반 프로토콜 준수.',
      },
      {
        title: '[P0] NumLink Tools/ 일괄 복사 — 4일째 이월 종결',
        description:
          'C:/Unity/_ProjectTemplate/Tools/ 전체(unity_validate.py·qa_static.py·known_bugs.json·run_regression.py·test_fixtures)를 C:/Unity/NumLink/Tools/ 로 복사. 씬 경로 상수 NumLink 기준으로 업데이트. CLAUDE.md 지침에 따라 묻지 않고 바로 실행. Assets/Tests/Editor 공각 상태(AutoGenTests 삭제 후 껍데기) 커밋 정리.',
      },
      {
        title: '[P1] MeowBeat GameManager FindObjectOfType 12연타 ServiceLocator 일괄 전환',
        description:
          'GameManager.cs 94-105줄 FindObjectOfType 12개 연속을 GameBootstrapper.Awake 시점 ServiceLocator 등록으로 일괄 리팩터. 기동 비용 감소+테스트성 향상 동시 해결. 1커밋 원자 변경. 신규 발견된 ButtonController GameObject.Find 6회·Player Input.GetKeyDown 루프도 차순 태스크로 등록.',
      },
      {
        title: '[P1] MeowBeat 장기 분기 정리 — Google Ads/manifest 미커밋 해소 + 브랜치 머지',
        description:
          'feature/song-ownership-migration의 Google Ads 프리팹·AndroidManifest·manifest·ProjectSettings·AutoQATests·_Recovery 미커밋/미추적 일괄 정리(의미 단위 커밋 or .gitignore). Sprint 3 마감 후 master에 머지 후 브랜치 삭제. NumLink feature/uitoolkit도 main 기준 rebase 동기화.',
      },
      {
        title: '[P1] NumLink Steam 프리런칭 페이지 등록 착수',
        description:
          'Steam 프리런칭 12-18개월 리드타임 표준에 맞춰 오늘 등록 착수. Google Play Games on PC 140국 기본 노출 활용. 냥이 퍼즐 세계관 컨셉+키 비주얼 1종 준비. 위시리스트 벨로시티 5K-10K 론칭 전 목표. itch.io "logic-puzzle" 세분화 태그 병행 배포 검토.',
      },
      {
        title: '[P1] NumLink 색약 이중화 + Maplestory Bold 웨이트 적용',
        description:
          '15색 팔레트가 색약 8%에 치명적 — 숫자 폰트 Bold 웨이트 추가+테두리 패턴(점선/실선/이중선) 3중화로 1-15 구분 가능하게 개선. Maplestory 폰트는 유지하되 키네틱 타입 트렌드 흡수. 다크모드는 순흑 금지 #121212 기준 적용.',
      },
      {
        title: '[P2] MeowBeat 커스텀 난이도 에디터 MVP 스펙 편입',
        description:
          'UGC 에디터는 2026 서구권 리듬게임 생존 조건. 기존 manifest.json 구조상 구현 난이도 중하. "노트 간격·밀도만 조정" 최소 MVP로 Sprint 다음 차수에 편입. Beatstar·Beat Saber UGC 생태계 사례 벤치마크.',
      },
      {
        title: '[P2] MeowBeat 햅틱 리듬 레이어 — 4D Vibration 트렌드 선점',
        description:
          'Perfect/Good/Miss 판정에 iOS UIImpactFeedbackGenerator+Android VibrationEffect 차등 적용(Heavy/Medium/Light). DOTween으로 노트 히트 시 0.15초 스케일 펀치(1.0→1.2→1.0) 마이크로 인터랙션 추가. 2026 트렌드 선점+시각장애 접근성 동시 해결.',
      },
      {
        title: '[P2] Pocket Gamer Big Indie Pitch 런던 접수 + Woovit 계정 개설',
        description:
          'Big Indie Pitch 런던 접수(무료, 5분 6회전 상위 3에 편집부 커버리지). Woovit 무료 계정 개설 후 트위치 마이크로스트리머(100-2K뷰 구간) 30명 큐레이션 리스트업. Keymailer 월 10키 무료 병행.',
      },
      {
        title: '[P3] Unity 6.3 LTS 업그레이드 사전 검토 (CoreCLR 대비)',
        description:
          'Unity 7 폐기 확정. 6.3 LTS 지원 2027.12까지, 6.0은 2026.10 만료. 현재 6000.3.5 → 6.3 LTS 업그레이드는 다음 스프린트 플래닝 안건. 6.7 LTS CoreCLR 데스크톱 실험 플레이어 로드맵 인지. 즉시 착수 아님.',
      },
    ],
  },
  {
    id: '2026-04-17T04:00:00-daily-standup',
    date: '2026-04-17',
    researchTitle:
      '📊 4/17 데일리 스탠드업 — 퍼즐14%성장·하이브리드캐주얼전환·리듬CAGR9.1%·Unity6패치뒤처짐·NumLink QA전무·핸드크래프트반란',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료(제5회). NumLink feature/uitoolkit 미커밋 다수(폰트·manifest·삭제된 AutoGenTests), MeowBeat feature/song-ownership-migration 미커밋 다수(AdMob·manifest·ProjectSettings). 퍼즐 장르 매출 14% 성장, 하이브리드 캐주얼(퍼즐+메타)이 새로운 표준. 리듬게임 $2.5B→$5.3B(CAGR 9.1%), 30일 리텐션 35%로 모바일 평균(21%) 상회. Unity 6000.3.5→6000.3.11f1 6패치 뒤처짐. NumLink QA 인프라 전무(Tools/ 없음, 테스트 0건). MeowBeat Debug.Log 100건+GetComponent 과다(GM 30건). ASO가 설치수→리텐션/안정성 중심 전환. 2026 디자인 핵심은 핸드크래프트 반란 — AI 광택 거부, 질감+불완전함이 진정성 신호.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink·MeowBeat 미커밋 쌓임·agent-office 클린·정리 커밋 시급',
        description:
          'NumLink feature/uitoolkit 브랜치, 미커밋 변경 다수(폰트 에셋, manifest, 삭제된 AutoGenTests 등). MeowBeat feature/song-ownership-migration 브랜치, 미커밋 변경 다수(AdMob 프리팹, manifest, ProjectSettings). agent-office main 클린(어제 데일리 스탠드업 커밋 1건). 이전 P0 액션아이템 여전히 미완료 — 본격 작업 전 워킹 디렉토리 정리 커밋 필수.',
      },
      {
        title: '🎮 Game Designer — 퍼즐14%성장·하이브리드캐주얼=새표준·리듬CAGR9.1%·일본형 캐릭터+스토리 공식',
        description:
          '퍼즐 장르 매출 14% 성장, 하이브리드 캐주얼(캐주얼 코어+미드코어 메타)이 새로운 표준. Block Blast 누적 7.68억 DL. 리듬게임 $2.5B→$5.3B(CAGR 9.1%), 30일 리텐션 35%. 일본 시장은 캐릭터+스토리가 성공 공식(Project Sekai), 시장 규모 미국의 39배. MeowBeat은 고양이 수집+육성 메타를 리듬 코어에 결합하는 일본형 전략 채택 검토.',
      },
      {
        title: '💻 Developer — Unity6패치뒤처짐·MeowBeat farm revert반복·Debug.Log100건·GetComponent과다',
        description:
          '두 프로젝트 Unity 6000.3.5→최신 6000.3.11f1로 6패치 뒤처짐(빌드 시간 22% 단축 포함). MeowBeat 먹이 시스템 revert 반복 — 레이어/스프라이트 설계 불안정. Debug.Log 100건(20파일), GetComponent 과다(GameManager 30건). NumLink 업적 팝업 UI 미구현(TODO), ObjectManager→UIManager 통합 미완.',
      },
      {
        title: '🔍 QA Tester — NumLink QA인프라 전무(Tools/없음·테스트0건)·MeowBeat known_bugs6건·커버리지 극저',
        description:
          'NumLink: Tools/ 폴더 없음, known_bugs.json 전무, NUnit 테스트 0건 — QA 인프라 자체 부재. MeowBeat: known_bugs 6건(error 4, warning 2), unity_validate.py 정상(0 error, 1 warning), qa_static.py CWD 의존 문제, AutoGenTests 1개만 존재. NumLink QA 파이프라인 구축이 최우선.',
      },
      {
        title: '📢 Content Writer — ASO 리텐션중심전환·TikTok Paid Organic·Discord 커뮤니티=핵심자산',
        description:
          'Google Play 알고리즘이 설치수→리텐션/안정성/업데이트 빈도 중심으로 전환. Apple CPP 한도 70개 확대. TikTok 유기적 도달 급감 → Paid Organic 모델($200 부스팅)이 필수. 평점 4.0 미만 앱은 검색 노출되어도 무시(77%). Discord 커뮤니티가 광고 독립적 트래픽 핵심 자산.',
      },
      {
        title: '⚙️ DevOps — agent-office 배포정상·MeowBeat productName "hefeedmee"·Gamma색공간·자동화정상',
        description:
          'agent-office GitHub Pages 자동배포 정상(deploy-pages.yml). MeowBeat productName이 "hefeedmee"(임시명 그대로), 색공간 Gamma(0) — Linear 교정 필요. NumLink 정상(Linear, WebGL). DailyStandup_ClaudeCode, JobResearch_ClaudeCode 모두 Running. run_build.bat이 구 경로(unity-webgl-wrapper) 참조 — 경로 불일치.',
      },
      {
        title: '🎨 Art Director — 핸드크래프트반란·15색제한팔레트·환경통합형HUD·크래프트지톤 제안',
        description:
          '2026년 핵심 "핸드크래프트 반란" — AI 광택 거부, 질감+불완전함이 진정성 신호. 퍼즐 게임은 15색 이하 제한 팔레트+음의 공간이 몰입/가독성 극대화(Monument Valley 사례). 리듬 게임은 즉각적 시각 피드백+환경 통합형 HUD가 대세. 크래프트지 베이지(#E8D5B7)+잉크 블랙(#1A1A2E)+주홍(#E63946) 3색 축 제안.',
      },
    ],
    meetingTitle:
      '🏢 4/17 데일리 스탠드업 — 미커밋정리·하이브리드캐주얼전략·Unity업그레이드·QA인프라·핸드크래프트비주얼',
    meetingSummary:
      '첫 GitHub Issue 트래킹 회의. NumLink/MeowBeat 모두 미커밋 방치 지속 — 정리 커밋 최우선. 퍼즐 14% 성장+하이브리드 캐주얼 전환 흐름에 맞춰 메타 요소 결합 필요. 리듬게임 CAGR 9.1%, 일본형 캐릭터+스토리 공식이 MeowBeat에 적합. Unity 6패치 뒤처짐 업그레이드 필요. NumLink QA 인프라 전무 해결 시급. MeowBeat productName/색공간 정리 필요. 디자인은 핸드크래프트 반란 트렌드 — 크래프트지 톤 3색 축 채택 검토.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink·MeowBeat 모두 미커밋 변경이 쌓여 있습니다. 이전 P0 액션아이템도 여전히 미완료 상태입니다. 본격 작업 전에 두 프로젝트의 워킹 디렉토리 정리 커밋을 오늘 반드시 진행해야 합니다. agent-office는 클린 상태로 정상입니다.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 장르 매출 14% 성장, 하이브리드 캐주얼이 새로운 표준이 됐습니다. Block Blast 7.68억 DL이 증명합니다. 리듬게임은 CAGR 9.1%로 성장 중이고, 30일 리텐션 35%는 모바일 평균(21%)을 크게 상회합니다. MeowBeat은 일본 시장의 캐릭터+수집+육성 공식(Project Sekai 모델)을 채택하면 리텐션과 수익화 동시 달성이 가능합니다.',
      },
      {
        speaker: 'Developer',
        note: '두 프로젝트 모두 Unity 6000.3.11f1로 6패치 업그레이드가 필요합니다. 빌드 시간 22% 단축 효과가 있습니다. MeowBeat은 farm 먹이 시스템이 revert 반복 중이라 설계 재검토가 필요하고, Debug.Log 100건과 GetComponent 과다(GameManager 30건)는 릴리스 전 반드시 정리해야 합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink에 QA 인프라가 전혀 없습니다. Tools/ 폴더, known_bugs.json, 자동화 테스트 모두 부재 — _ProjectTemplate에서 즉시 복사해야 합니다. MeowBeat은 known_bugs 6건(error 4건) 등록되어 있고 unity_validate.py 정상 동작하지만, qa_static.py의 CWD 의존 문제와 run_regression.py 경로 오류를 수정해야 합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO 환경이 크게 바뀌었습니다. Google Play 알고리즘이 설치수 대신 리텐션/안정성 중심으로 전환됐고, 평점 4.0 미만은 노출되어도 무시됩니다. TikTok 유기적 도달 급감으로 Paid Organic 모델(자연 트랙션 영상에 $200 부스팅)이 필수입니다. NumLink/MeowBeat 공용 Discord 서버 개설을 제안합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office 배포 파이프라인 정상입니다. MeowBeat productName이 "hefeedmee"(임시명)로 남아있고 색공간이 Gamma(0)입니다 — Linear로 교정 필요. DailyStandup과 JobResearch 자동화 모두 Running 상태. run_build.bat의 구 경로(unity-webgl-wrapper) 참조도 수정이 필요합니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026년 디자인 핵심은 "핸드크래프트 반란"입니다. AI의 매끈한 미학에 대한 반발로 손으로 만든 질감(종이/잉크/스탬프)이 새로운 진정성 기준입니다. NumLink는 15색 이하 제한 팔레트로 가독성을 극대화하고, MeowBeat은 환경 통합형 HUD로 고양이 테마를 UI에 녹여야 합니다. 두 게임 모두 크래프트지 베이지+잉크 블랙+주홍 3색 축을 기반으로 따뜻한 비주얼 아이덴티티를 확립하길 제안합니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: 미커밋 정리 + 워킹 디렉토리 클린업 (NumLink·MeowBeat)',
        description:
          'NumLink feature/uitoolkit 미커밋(폰트·manifest 등), MeowBeat feature/song-ownership-migration 미커밋(AdMob·ProjectSettings 등) 모두 정리 커밋. .gitignore 업데이트 포함. 이전 회의부터 계속 이월 중 — 오늘 반드시 완료.',
      },
      {
        title: 'P0: NumLink QA 인프라 구축 (_ProjectTemplate/Tools/ 복사)',
        description:
          'NumLink에 Tools/ 폴더, known_bugs.json, unity_validate.py, qa_static.py 전무. 테스트 0건으로 회귀 방지 불가. C:/Unity/_ProjectTemplate/Tools/에서 즉시 복사 후 씬 경로 상수 업데이트.',
      },
      {
        title: 'P0: Unity 6000.3.5→6000.3.11f1 LTS 업그레이드',
        description:
          '두 프로젝트 모두 6패치 뒤처짐. 빌드 시간 22% 단축 + 보안/안정성 수정 반영. MeowBeat은 동시에 productName "hefeedmee"→"MeowBeat" 변경 및 색공간 Gamma→Linear 교정도 진행.',
      },
      {
        title: 'P1: MeowBeat 하이브리드 전략 — 고양이 수집+육성 메타 결합 검토',
        description:
          '리듬 코어에 캐릭터 수집/육성 메타를 결합하는 일본형 전략(Project Sekai 모델). 퍼즐 14% 성장의 하이브리드 캐주얼 트렌드와도 일치. GDD 수준 스코프 검토 필요.',
      },
      {
        title: 'P1: 핸드크래프트 비주얼 아이덴티티 — 크래프트지 톤 3색 축 채택 검토',
        description:
          '2026 "핸드크래프트 반란" 트렌드. 크래프트지 베이지(#E8D5B7)+잉크 블랙(#1A1A2E)+주홍(#E63946) 3색 축. NumLink 15색 제한 팔레트, MeowBeat 환경 통합형 HUD 적용.',
      },
      {
        title: 'P2: Discord 서버 개설 + TikTok 숏폼 파이프라인 구축',
        description:
          'ASO 리텐션 중심 전환 시대. Discord 커뮤니티=광고 독립적 트래픽 핵심 자산. TikTok Paid Organic($200 부스팅) + 주 7~14개 숏폼 클립 제작 체계 수립.',
      },
    ],
  },
  {
    id: '2026-04-16T04:00:00-daily-standup',
    date: '2026-04-16',
    researchTitle:
      '📊 4/16 데일리 스탠드업 — 니치퍼즐 222%성장·리듬게임 $5.3B·FarmFood 디버그잔존·QA인프라 전무·UI 분리 시급·ASO 스크린샷 혁명',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료(제4회, 첫 GitHub Issue 트래킹). NumLink feature/uitoolkit 미추적 파일 다수(.gitignore 정리 필요), MeowBeat feature/song-ownership-migration unstaged 15건 방치 지속. 니치 퍼즐 서브장르(Block/Sort/Screw) 222% 폭발 성장, Royal Match $1.46B 무광고 모델. 리듬게임 $2.5B→$5.3B(CAGR 9.1%), Hololive Dreams 2026 직접 경쟁자 등장. MeowBeat FarmFoodManager 디버그로그 5개 잔존+farm 3커밋 반복수정. NumLink QA 인프라 전무(테스트 0건). Apple AI 태그로 ASO 스크린샷이 검색순위 직접 결정. MeowBeat UI가 NumLink과 동일 세트 공유 — 브랜드 차별화 불가. Unity 6.4 출시(4/14)됐으나 현재 8패치 뒤처진 6000.3.5 유지 중.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink .gitignore 정리 필요·MeowBeat unstaged 15건 방치·P0 4일째 이월',
        description:
          'NumLink feature/uitoolkit 브랜치, 미추적 파일 다수(Scripts/Library, Logs 등 불필요 폴더). MeowBeat feature/song-ownership-migration 브랜치, unstaged 변경 15건 방치(먹이 애니메이션 작업 중단). agent-office main 어제(4/15) 데일리 스탠드업 커밋 1건. 4/13 P0 액션아이템 전부 미완료 — 4일째 이월.',
      },
      {
        title: '🎮 Game Designer — 니치퍼즐 222%성장·Royal Match $1.46B·리듬 $5.3B·Hololive Dreams 직접 경쟁',
        description:
          '니치 퍼즐 서브장르(Block +2900% 매출, Sort +176%, Screw +100%) 222% 폭발 성장. Royal Match $1.46B 무광고 IAP 모델. Flow Free 누적 1억+ 다운로드이나 10년 구작 → 현대적 재해석 여지. 리듬게임 $2.5B→$5.3B(CAGR 9.1%), Beatstar Tour Pass 도입 후 ARPDAU 37% 증가. Hololive Dreams 2026 글로벌 출시 예정 — MeowBeat 직접 경쟁자(캐릭터+리듬 조합). NumLink에 데일리 퍼즐 모드 추가 제안(Wordle식 D30 리텐션 2~3배 향상).',
      },
      {
        title: '💻 Developer — FarmFood 디버그로그 5개 잔존·farm 3커밋 반복수정·Unity 6.4 출시·TODO 5+2건',
        description:
          'MeowBeat FarmFoodManager 디버그로그 5개 프로덕션 코드에 잔존. 최근 3커밋 모두 farm 먹이 버그 수정 반복(revert 포함) — 안정화 미완. NumLink TODO 5건(시드함수 교체, 업적UI 팝업, ObjectManager 통합). MeowBeat Debug.Log 127건(30파일). Unity 6000.3.5→6000.3.13f1 8패치 뒤처짐. Unity 6.4 ECS Core 통합(4/14 출시).',
      },
      {
        title: '🔍 QA Tester — NumLink QA인프라 전무(테스트 0건)·MeowBeat Farm 고위험·커버리지 0%/3.4%',
        description:
          'NumLink: 프로젝트 테스트 0건, Tools/ 부재, known_bugs.json 없음 — QA 인프라 전무 4일째. MeowBeat: AutoGenTests 22건 있으나 Farm 모듈 fix 7연속 고위험. NumLink input 모듈 드래그 회귀 3건, UI 보드 렌더링 fix 5건 연속. 테스트 커버리지 NumLink 0%, MeowBeat ~3.4%.',
      },
      {
        title: '📢 Content Writer — Apple AI 태그=스크린샷 검색순위·틱톡 숏폼+마이크로 인플루언서·퍼즐 유럽 +$706M',
        description:
          'Apple AI 태그가 스크린샷에서 자동 생성되어 노출 결정 → 첫 2장 스크린샷이 곧 검색순위. 분기별 A/B 테스트 시 전환율 20-30% 상승. 게이머 87% SNS 일일 사용, #WishlistWednesday 해시태그 캠페인. 퍼즐 유럽 YoY +$706M 매출 강세. 리듬게임 아시아 주도 연 $5B 규모.',
      },
      {
        title: '⚙️ DevOps — Unity CI/CD 전무 지속·agent-office 배포 정상·MeowBeat 색공간 Gamma 문제',
        description:
          'NumLink/MeowBeat CI/CD 파이프라인 전혀 없음(.github/workflows 부재). agent-office GitHub Pages 자동배포 정상(최근 5회 success). MeowBeat 색공간 Gamma(0) — NumLink는 Linear(1) 정상, MeowBeat 모바일 출시 시 색상 품질 이슈 가능. GameCI 기반 GitHub Actions 도입 권장.',
      },
      {
        title: '🎨 Art Director — "의도적 미니멀리즘"+어스톤 부상·MeowBeat UI=NumLink 동일·노트 2종 부족·에셋 오류',
        description:
          '2026 트렌드: 의도적 미니멀리즘+따뜻한 중성톤(샌드/클레이) 부상, 민트+다크 퇴조. MeowBeat UI가 NumLink 1115폴더와 동일 세트 공유 → 브랜드 차별화 불가, 고양이 테마 전용 UI 킷 필요. 노트 2종(BrownNote/WhiteNote) 부족 → 최소 5종 확장(발바닥/생선/실뭉치/방울/별). .png.meta.png 확장자 오류 2건, ㅡㅡㅡ.png 플레이스홀더 미정리.',
      },
    ],
    meetingTitle:
      '🏢 4/16 데일리 스탠드업 — P0 4일째 이월·FarmFood 디버그 정리·QA인프라 구축·UI 분리·데일리퍼즐 검토',
    meetingSummary:
      '4/13부터 P0 액션아이템 4일째 이월 — 심각한 실행 정체. MeowBeat FarmFoodManager 디버그로그 잔존+farm 안정화 미완이 새 P0로 추가. NumLink QA 인프라 전무 4일째. Game Designer가 NumLink 데일리 퍼즐 모드(Flow Free 차별화)를 제안, Art Director가 MeowBeat UI 완전 분리(고양이 테마 전용 UI 킷)를 제안. Content Writer는 Apple AI 태그 시대 ASO 스크린샷 전략 전환을 강조. DevOps는 MeowBeat 색공간 Gamma→Linear 교정 필요 보고.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'P0 4일째 이월입니다. NumLink .gitignore에 IDE 생성 폴더(Scripts/Library, Logs) 추가가 시급하고, MeowBeat unstaged 15건이 방치 중입니다. 오늘은 "완료 0건" 상태를 반드시 깨야 합니다. FarmFood 디버그로그 정리처럼 30분 내 끝나는 P0부터 닫겠습니다.',
      },
      {
        speaker: 'Game Designer',
        note: '니치 퍼즐 서브장르가 222% 폭발 성장 중이고, Block Blast가 월 3000만 다운로드로 세계 1위입니다. NumLink의 직접 경쟁작 Flow Free는 10년 구작이라 현대적 재해석 여지가 큽니다. 데일리 퍼즐 모드를 MVP 스코프에 추가하면 D30 리텐션 2~3배 향상 + Flow Free 차별화가 동시에 달성됩니다.',
      },
      {
        speaker: 'Developer',
        note: 'MeowBeat FarmFoodManager에 디버그로그 5개가 프로덕션 코드에 남아 있고, farm 먹이 시스템이 3커밋 연속 revert→재수정 중이라 안정화가 필요합니다. Unity 6.4가 4/14에 출시됐지만, 현재 LTS 패치(6000.3.13f1)로 먼저 올리는 게 안전합니다. NumLink Debug.Log도 자체 코드에서 26건 산재합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink QA 인프라 전무 4일째입니다. 프로젝트 테스트 0건, known_bugs.json도 없어 회귀 방지가 불가능합니다. input 모듈 드래그 회귀 3건, UI 보드 렌더링 fix 5건이 반복되는 건 테스트 부재가 직접 원인입니다. _ProjectTemplate/Tools/ 복사를 오늘 반드시 실행해야 합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'Apple AI 태그가 스크린샷에서 자동 생성되어 검색 노출을 직접 결정하는 시대가 됐습니다. 첫 2장 스크린샷을 "기능 나열"이 아닌 "핵심 게임플레이 순간 + 명확한 CTA"로 제작하는 것이 이번 주 최우선 마케팅 태스크입니다. 분기별 A/B 테스트로 전환율 20-30% 향상 가능합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office GitHub Pages 배포 정상, 최근 5회 워크플로우 모두 success 확인했습니다. MeowBeat 색공간이 Gamma(0)로 설정되어 있어 모바일 출시 시 색상 품질 이슈가 발생할 수 있습니다. NumLink는 Linear(1)로 정상입니다. Unity CI/CD는 GameCI 기반 도입을 NumLink부터 시작하겠습니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026 트렌드는 의도적 미니멀리즘과 따뜻한 어스톤(샌드/클레이)입니다. 가장 시급한 문제는 MeowBeat UI가 NumLink과 1115폴더 동일 세트를 공유하고 있어 브랜드 차별화가 불가능하다는 점입니다. 고양이귀 모양 패널, 발바닥 아이콘 버튼 등 테마 전용 UI 킷을 새로 제작해야 합니다. .png.meta.png 확장자 오류 2건도 즉시 수정 필요합니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: 4일째 이월 — 미커밋 정리·.gitignore 업데이트 (오늘 반드시 완료)',
        description:
          '4/13부터 4일째 이월. NumLink .gitignore에 IDE 폴더(Scripts/Library, Logs) 추가, MeowBeat unstaged 15건 정리(.gitignore 재검토 포함). 더 이상 미룰 수 없음 — 30분 내 완료 가능한 작업부터 닫을 것.',
      },
      {
        title: 'P0: MeowBeat FarmFoodManager 디버그로그 5개 제거 + farm 안정화',
        description:
          'FarmFoodManager.cs에 디버그로그 5줄 프로덕션 잔존. 최근 3커밋이 farm revert→재수정 반복 — 안정화 필요. Debug.Log 127건(30파일) 중 farm 영역부터 정리.',
      },
      {
        title: 'P0: NumLink QA 인프라 구축 (_ProjectTemplate/Tools/ 복사) — 4일째 이월',
        description:
          'NumLink 프로젝트 테스트 0건, known_bugs.json 없음, Tools/ 부재. input 드래그 회귀 3건·UI 렌더링 fix 5건 반복의 근본 원인. _ProjectTemplate/Tools/에서 unity_validate.py, qa_static.py, known_bugs.json 복사.',
      },
      {
        title: 'P1: MeowBeat UI를 NumLink에서 완전 분리 — 고양이 테마 전용 UI 킷 제작',
        description:
          '현재 두 프로젝트가 1115폴더 동일 UI 공유 → 브랜드 차별화 불가. 2026 트렌드 "UI가 게임 세계관 일부"에 정면 위배. 고양이귀 패널·발바닥 버튼·코튼핑크+크림+라벤더 팔레트로 MeowBeat 고유 아이덴티티 확립.',
      },
      {
        title: 'P1: NumLink 데일리 퍼즐 모드 MVP 스코프 추가 검토',
        description:
          'Flow Free(10년 구작)에 없는 기능으로 즉각 차별화. 데일리 퍼즐은 D30 리텐션 2~3배 향상 검증(Wordle/NYT). 구현 비용 낮음(기존 생성기+날짜 시드+공유 기능). Game Designer 제안.',
      },
      {
        title: 'P2: ASO 스크린샷 전략 수립 — Apple AI 태그 시대 대응',
        description:
          'Apple AI 태그가 스크린샷에서 자동 생성 → 첫 2장이 검색순위 직접 결정. "기능 나열"→"핵심 게임플레이 순간+CTA" 전환. 분기별 A/B 테스트로 전환율 20-30% 향상 가능. 두 게임 모두 스크린샷 시안 제작 착수.',
      },
    ],
  },
  {
    id: '2026-04-15T04:00:00-daily-standup',
    date: '2026-04-15',
    researchTitle:
      '📊 4/15 데일리 스탠드업 — 미커밋 축소(30→10/25→12)·퍼즐 $12.2B·MeowBeat 노트 2종 부족·Discord 프리런치·린트 3건',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료(제3회). NumLink 미커밋 30→10개 축소(폰트 SDF·테스트 삭제 진행), MeowBeat 미커밋 25→12개+미추적 15개(QA·기획문서 산재). 퍼즐 시장 $12.2B, 로직퍼즐 YoY +19%. 리듬게임 CAGR 12.8%, 아태 41% 점유, 2033년 $18.2B 전망. MeowBeat NoteSpawner에 GameObject.Find 규칙위반 발견. 노트 스프라이트 2종(BrownNote/WhiteNote)만 존재 — 테마 연계 3종 추가 필요. Unity 6000.3.5→13f1 여전히 8패치 뒤처짐. 인디 성공 공식: 출시 12~18개월 전 Discord 커뮤니티+ASO 롱테일 키워드 선행 필수. agent-office 빌드 OK, React 린트 에러 3건.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink 미커밋 10개·MeowBeat 미커밋 12+미추적 15개·agent-office 안정',
        description:
          'NumLink feature/uitoolkit 브랜치, 미커밋 10개(폰트 SDF·Tests 삭제 진행중). MeowBeat feature/song-ownership-migration, 미커밋 12개+미추적 15개(QA테스트·Recovery·기획문서). agent-office main 최신 c520a8c(4/14). 4/14 P0 액션아이템(미커밋 정리, FindObjectOfType 전환, Tools 복사, Unity 업그레이드) 모두 미완료 — 3일째 이월.',
      },
      {
        title: '🎮 Game Designer — 퍼즐 $12.2B·로직퍼즐 +19%·리듬 CAGR 12.8%·Discord 프리런치 필수',
        description:
          '퍼즐 시장 $12.2B(3위 장르), 모바일 게이머 65% 이상 플레이, 로직퍼즐 YoY +19%. 리듬게임 CAGR 12.8%, 2033년 $18.2B, 아태 41% 점유. 인디 성공 공식: 출시 12~18개월 전 Discord 커뮤니티 빌딩 + ASO 최적화. 앱 발견율 50% 이상 ASO 의존.',
      },
      {
        title: '💻 Developer — Unity 8패치 뒤처짐·MeowBeat GameObject.Find 위반·NumLink TODO 4건',
        description:
          'Unity 6000.3.5→13f1 8패치 누적(UIToolkit 터치 버그+빌드 22% 단축). MeowBeat NoteSpawner.cs:52 GameObject.Find("Note") CLAUDE.md 위반 — ServiceLocator/SerializeField 전환 필요. NumLink AchievementManager 업적UI 미구현, ObjectManager→UIManager 통합 검토. MeowBeat ButtonController 구매저장 미구현.',
      },
      {
        title: '🔍 QA Tester — NumLink QA인프라 여전히 부재·MeowBeat known_bugs 6건·agent-office 린트 3건',
        description:
          'NumLink known_bugs.json·test_fixtures 부재 3일째. MeowBeat known_bugs 6패턴+회귀픽스처 2개 정비됨. NumLink TODO 5건·MeowBeat TODO 2건(테스트기기ID·구매저장). agent-office 빌드 성공이나 LanguageContext/OfficeContext fast refresh 위반 2건+청크 사이즈 경고.',
      },
      {
        title: '📢 Content Writer — ASO 리텐션 중심 전환·TikTok 도달 계속 하락·Discord+Reddit 12개월 전 착수',
        description:
          'ASO 2026: 구글 알고리즘이 설치량→리텐션 중심 전환, 롱테일 키워드(3단어 이상) 집중, 3~6주 주기 업데이트 필수. TikTok 유기적 도달 지속 하락, YouTube Shorts/Reels 주 7~14개 클립 목표. 버그·실패·만족 순간 컷이 트레일러보다 효과적. Discord "게임의 연장선" 운영 시 이탈률 최소화.',
      },
      {
        title: '⚙️ DevOps — agent-office 배포 정상·Daily Standup 04:00 정상·Unity CI 여전히 부재',
        description:
          'agent-office GitHub Pages 자동배포(Node 22+npm ci→build). Daily Standup 04:00·Job Research 04:00 Task Scheduler 정상 운영(exit 0). Weekly Insights Telegram 시크릿 설정 검증 필요. NumLink/Feedme CI/CD 미구성 상태 지속.',
      },
      {
        title: '🎨 Art Director — 손그림+미니멀HUD 트렌드·MeowBeat 노트 2종만·에셋 네이밍 혼란 지속',
        description:
          '2026 트렌드: 손그림 감성+미니멀 HUD+스케우오모피즘 부활(소프트 그림자·텍스처). NumLink 배경 7종 있으나 ㅡㅡㅡ.png 등 임시 에셋 다수. MeowBeat 노트 BrownNote/WhiteNote 2종만 존재 — 리듬게임 핵심 비주얼 빈약. 고양이 캐릭터(Choonsik·DotCat·CircleCat) 다양하나 노트에 테마 미반영.',
      },
    ],
    meetingTitle:
      '🏢 4/15 데일리 스탠드업 — P0 3일째 이월·GameObject.Find 위반 추가·노트 에셋 확장·Discord 프리런치 착수',
    meetingSummary:
      '4/13부터 P0 액션아이템(미커밋 정리, FindObjectOfType 전환, Tools 복사)이 3일째 이월 중. MeowBeat NoteSpawner에서 새로운 GameObject.Find 규칙위반 발견. 노트 스프라이트 2종은 리듬게임으로 빈약하여 테마 연계 3종 추가 필요. Game Designer와 Content Writer 모두 Discord 프리런치 커뮤니티 즉시 착수를 제안. Unity 8패치 업그레이드 여전히 미완료.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'P0 3일째 이월입니다. NumLink 미커밋이 30→10개로 줄었지만 MeowBeat는 미추적 파일 15개가 새로 쌓였습니다. 4/13 이후 한 건도 완료되지 않은 P0를 오늘은 반드시 1건 이상 닫아야 합니다. MeowBeat 미추적 파일 정리를 가장 먼저 실행합니다.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 시장 $12.2B, 로직퍼즐 YoY +19%로 NumLink 장르 선택이 유효합니다. 리듬게임 CAGR 12.8%, 아태 41% 점유로 MeowBeat 타이밍도 적절합니다. 핵심은 출시 12~18개월 전 Discord 커뮤니티 — 지금 시작하지 않으면 론칭 후 유저 획득 비용이 3~5배 증가합니다.',
      },
      {
        speaker: 'Developer',
        note: 'MeowBeat NoteSpawner.cs 52번 라인에서 GameObject.Find("Note")를 발견했습니다. CLAUDE.md 규칙 위반이고 씬 구조 변경 시 null 크래시 위험입니다. SerializeField 주입으로 교체해야 합니다. Unity 8패치 업그레이드도 3일째 밀리고 있어 UIToolkit 터치 버그가 계속 영향줍니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink QA 인프라 부재 3일째입니다. known_bugs.json과 test_fixtures가 없어 회귀 방지가 불가능합니다. MeowBeat는 6패턴 등록+픽스처 2개로 정비되어 있어 대조적입니다. agent-office는 빌드 OK이나 React fast refresh 위반 2건과 청크 사이즈 경고를 정리해야 합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO 알고리즘이 설치량→리텐션 중심으로 전환됐습니다. 롱테일 키워드(3단어 이상)와 3~6주 주기 업데이트가 핵심입니다. Game Designer와 동일하게 Discord 즉시 개설을 제안하며, 게임별 ASO 키워드 초안 10개씩 작성을 착수합시다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office GitHub Pages 배포 정상, Daily Standup 04:00 정상 운영 확인됐습니다. Weekly Insights Telegram 시크릿 설정 여부가 아직 불명확합니다. NumLink/Feedme CI/CD 부재 상태가 지속 중이며, GameCI 도입은 Unity 업그레이드 완료 후 순차 진행 방침 유지합니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026 트렌드는 손그림 감성+미니멀 HUD+스케우오모피즘 부활입니다. MeowBeat 노트가 BrownNote/WhiteNote 2종뿐이라 리듬게임 핵심 비주얼이 빈약합니다. 고양이 발바닥(Perfect)·생선뼈(Good)·물음표(Miss) 등 테마 연계 노트 3종 추가를 우선 제안합니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: 3일째 이월 — 미커밋 정리·FindObjectOfType 전환·Tools 복사 (반드시 완료)',
        description:
          '4/13부터 3일째 이월. NumLink 미커밋 10개 정리, MeowBeat 미커밋 12개+미추적 15개 정리(.gitignore 재검토 포함), MeowBeat FindObjectOfType→ServiceLocator, NumLink Tools/ 복사를 오늘 중 최소 1건 완료 필수.',
      },
      {
        title: 'P0: MeowBeat NoteSpawner.cs GameObject.Find 제거',
        description:
          'NoteSpawner.cs:52 GameObject.Find("Note") CLAUDE.md 규칙 위반. [SerializeField]로 NoteContainer 부모를 Inspector 주입 방식으로 교체. 씬 구조 변경 시 런타임 null 크래시 방지.',
      },
      {
        title: 'P0: Unity 6000.3.5→6000.3.13f1 업그레이드 (3일째)',
        description:
          '8패치 누적. UIToolkit 터치 스크롤 버그(UUM-135398)+오디오 메인스레드 분리+빌드 22% 단축. NumLink UIToolkit 브랜치와 MeowBeat 리듬게임 모두에 직접 영향. 3일째 미완료.',
      },
      {
        title: 'P1: MeowBeat 테마 연계 노트 스프라이트 3종 추가',
        description:
          '현재 BrownNote/WhiteNote 2종은 리듬게임 비주얼로 빈약. 고양이 발바닥(Perfect)·생선뼈(Good)·물음표(Miss) 등 테마 연계 노트 3종 추가. 에셋 투자 대비 게임성 체감 향상이 가장 큰 작업.',
      },
      {
        title: 'P1: Discord 프리런치 커뮤니티 개설 착수',
        description:
          'Game Designer+Content Writer 동시 제안. 인디 성공 공식: 출시 12~18개월 전 커뮤니티 빌딩 필수. 미착수 시 론칭 후 유저 획득 비용 3~5배 증가. NumLink 또는 MeowBeat 중 1개 우선 개설+데브로그 주 1회.',
      },
      {
        title: 'P2: ASO 롱테일 키워드 초안 작성 (게임별 10개)',
        description:
          'ASO 알고리즘 리텐션 중심 전환 대응. 롱테일 키워드(3단어 이상) 게임별 10개 초안. MeowBeat "cat rhythm game" 변형, NumLink "number connect puzzle" 변형 중심. YouTube Shorts 15초 클립 전략 병행.',
      },
    ],
  },

  {
    id: '2026-04-14T20:00:00-threads-insight',
    date: '2026-04-14',
    researchTitle: 'AI 기반 개발 및 지식 관리의 고도화, 실전 적용 및 생태계 확장',
    researchSummary: '최근 트렌드는 AI를 단순한 도구 사용을 넘어, 시스템 설계, 자동화된 검증 로직 구축, 그리고 실제 서비스(앱, 게임, 로봇)에 깊숙이 통합하는 방향으로 진화하고 있습니다. 개발자들은 LLM Wiki 구축, Agent Skills 활용, 그리고 로봇 시뮬레이션 등 구체적인 기술 스택을 통해 생산성을 극대화하고 있으며, 이는 교육 및 경력 개발 측면에서도 \'AI 활용 능력\'을 핵심 역량으로 요구하고 있습니다. 또한, 시장은 인디/스타트업 중심의 변화와 함께, 최신 모델(Gemma 4, Claude Code 등)의 로컬 구동 및 최적화에 대한 관심이 높아지고 있습니다.',
    researchItems: [
      { title: 'AI 기반 개발 및 시스템 설계의 심화', description: 'AI는 단순 코딩을 넘어, 시스템 규칙 발견(실수 기반 검증 로직), 에이전트 스킬팩(19가지 시니어 작업), 그리고 LLM Wiki 구축을 통해 지식 관리 및 시스템 안정화 단계까지 관여하고 있습니다. 개발자들은 이를 활용하여 복잡한 워크플로우를 자동화하고, 3D 공간 좌표 변환(Boxer 모델)과 같은 고도화된 기술 구현에 활용하고 있습니다.' },
      { title: '실전 프로젝트 및 산업 적용 사례 증가', description: 'AI 기술은 로봇공학(Isaac 플랫폼 시뮬레이션), 게임 개발(AI 에이전트 축구 리그 \'ClawFC\'), 그리고 앱 개발(CLI 툴 제작) 등 다양한 분야에 실시간으로 적용되고 있습니다. 특히, 소스 코드 부활 사례나 9일 만에 수익을 낸 게임 제작 사례는 AI의 실질적인 상업적 가치를 입증합니다.' },
      { title: '개발자 역량 재정의 및 학습 방법론 변화', description: '채용 시장(무신사)은 개발자를 \'AI를 잘 쓰는 사람\'으로 재정의하고 있으며, 개발자들은 프롬프팅, 파이프라이닝, 시스템 설계 능력을 핵심 역량으로 강조하고 있습니다. 학습 측면에서는 Anthropic의 무료 강의나 대학교 강의를 활용하여 AI 전문가로 성장하는 커리큘럼을 따르는 것이 중요합니다.' },
      { title: '지식 관리 및 생산성 도구의 고도화', description: 'Obsidian과 같은 도구를 활용한 지식 관리부터, 복잡한 워크플로우 자동화에 이르기까지, AI를 활용한 지식 구조화가 핵심 트렌드입니다. 특히, \'문서화\'와 \'연결\'을 통해 지식을 체계화하는 방식이 강조됩니다.' },
    ],
    meetingTitle: 'AI 시대의 기술적 깊이와 실전 적용 능력 강화',
    meetingSummary: 'AI 기술의 발전은 개발자에게 단순한 사용 능력을 넘어, 시스템 설계, 구체적인 기술적 기여, 그리고 최신 모델에 대한 깊은 이해를 요구하고 있습니다. 성공적인 결과물 도출을 위해서는 다양한 도구와 방법론을 조합하여 자동화 및 검증 프로세스를 구축하는 것이 핵심입니다.',
    meetingItems: [
      { speaker: 'AI 도구', note: 'LLM Wiki 구축 시 단순 검색(RAG)을 넘어 AI가 직접 위키를 만들고 유지관리하는 메커니즘과 잘못된 지식 축적 방지 장치가 필수적입니다. 또한, 최신 AI 모델(Codex, Claude Code 등)의 능력을 이해하는 것이 중요합니다.' },
      { speaker: '개발 트렌드', note: '로봇공학 분야에서는 시뮬레이션(Isaac 플랫폼 등)을 통한 사전 테스트로 개발 속도와 비용을 절감하는 것이 중요하며, 2D 객체를 3D 공간 좌표로 변환하는 모델(Boxer) 같은 기술이 실시간 AR 구현에 활용됩니다.' },
      { speaker: '생산성', note: '지식 관리는 Obsidian과 같은 도구를 활용하여 문서 입구(PDF, 워드 등)를 Markdown으로 통일하고, 세션 간 지식/기억을 자동으로 축적하는 시스템 구축이 중요합니다. 또한, 여러 AI 모델을 병렬로 사용 후 결과를 통합하는 방식으로 효율을 높일 수 있습니다.' },
      { speaker: '커리어', note: '개발자는 AI 활용 경험을 이력서에 녹일 때, \'AI 사용\' 언급 대신 \'Context 최소화 및 Prompt Caching 전략 적용\'과 같이 구체적인 기술적 기여와 도메인을 결합하여 비용 절감 및 성능 향상을 강조해야 합니다. 무신사 등 기업들은 AI 활용 능력을 핵심 역량으로 재정의하고 있습니다.' },
      { speaker: '비즈니스', note: '게임 산업은 구조조정 및 성장 정체 국면에 놓여있으며, 시장은 인디 및 스타트업 중심의 시대로 변화하고 있습니다. 또한, AI 에이전트들이 실시간 의사결정을 통해 가상 스포츠 리그를 운영하는 등 새로운 엔터테인먼트 산업의 진화가 관찰됩니다.' },
    ],
    decisions: [
      { title: 'AI 활용 경험의 구체화', description: '이력서 작성 시, AI 사용 경험을 \'어떤 기술적 문제(Context)를 해결하기 위해\', \'어떤 방식으로(How)\', \'어떤 성과를 냈는지(Result)\'를 구체적으로 명시한다.' },
    ],
  },

  {
    id: '2026-04-14T04:00:00-daily-standup',
    date: '2026-04-14',
    researchTitle:
      '📊 4/14 데일리 스탠드업 — Unity 8패치 업그레이드 필요·하이브리드 캐주얼 +911%·Poki 월 1억 유저·코지 UI 트렌드·Duet Cats 시장검증·GameCI v4 도입 준비',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료(제2회). NumLink·MeowBeat 모두 Unity 6000.3.5→13f1 8패치 뒤처짐(UIToolkit 터치 버그 수정 포함). 블록퍼즐 +911% 성장, Poki 월 1억 유저·직접유입 수익 100%. 리듬 게임 CAGR 12.8%, Duet Cats 고양이+리듬 글로벌 1위 시장검증. MeowBeat Farm fix 커밋 반복 패턴(레이어/스프라이트 7건). NumLink TODO 5건 누적. TikTok 유기적 도달 85~90% 하락→YouTube Shorts/Reels 대안. 2026 코지 미학·내러티브 UI 트렌드. 양 프로젝트 에셋 네이밍 혼란(한글·숫자 파일명 산재). GameCI v4 안정, Weekly Insights 워크플로우 실패 이력.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink 미커밋 30개·MeowBeat 미커밋 25개·4/13 액션아이템 미완료',
        description:
          'NumLink feature/uitoolkit 브랜치, 폰트·UI 5커밋 완료. 미커밋 30개(AutoGenTests 삭제 미스테이지 HIGH). MeowBeat feature/song-ownership-migration, 먹기 애니메이션 5커밋 완료. 미커밋 25개(GoogleMobileAds 설정 미정리). agent-office main 최신 fix(ci) 4/14. 4/13 P0 액션아이템(미커밋 정리, FindObjectOfType 전환, Tools 복사) 모두 미완료 상태.',
      },
      {
        title: '🎮 Game Designer — 하이브리드 캐주얼 +911%·Poki 월 1억 유저·리듬 CAGR 12.8%·AR 15%',
        description:
          '하이브리드 캐주얼(퍼즐+메타레이어) 급성장, 블록퍼즐 +911%. AI 동적 난이도 조절 핵심 차별화. 리듬 게임 CAGR 12.8%, AR 리듬 15% 점유, 아시아태평양 41% 최대 시장. Poki 월 1억 유저, 직접유입 수익 100%, 상위 개발자 연 100만 유로. 로직 퍼즐 다운로드 YoY +19%.',
      },
      {
        title: '💻 Developer — Unity 8패치 뒤처짐·MeowBeat fix 반복·NumLink TODO 5건',
        description:
          '두 프로젝트 Unity 6000.3.5→13f1 8패치 뒤처짐. UIToolkit 터치 스크롤 버그(UUM-135398) 수정 포함. 오디오 메인스레드 분리(리듬게임 히치 방지). Burst+IL2CPP 빌드 22% 단축. MeowBeat Farm fix 커밋 7건 반복(레이어/스프라이트 시행착오). NumLink 매니저 통합 부채 5건(UIManager 이벤트, ObjectManager 통합 등).',
      },
      {
        title: '🔍 QA Tester — NumLink Tools 부재·MeowBeat known_bugs 6건·에러핸들링 격차 33배',
        description:
          'NumLink Tools/ 완전 부재(unity_validate.py, qa_static.py, known_bugs.json 없음). MeowBeat Tools 완비, known_bugs 6건 등록(4개 error), 회귀테스트 픽스처 미완성. 에러핸들링: NumLink 15파일 689회 분산 vs MeowBeat 9파일 21회 집중(33배 격차).',
      },
      {
        title: '📢 Content Writer — ASO 롱테일·TikTok -90%·Duet Cats 고양이+리듬 1위',
        description:
          'ASO: 앱스토어 설치 65% 검색유입, 롱테일 키워드 전환율 우수. TikTok 유기적 도달 85~90% 하락(42.5만→6천 사례), YouTube Shorts/Instagram Reels 대안 부상. Duet Cats(고양이+리듬) 글로벌 1위, 18~34세 여성층 강력 흡인. MeowBeat 정통 리듬게임 포지셔닝으로 차별화 가능.',
      },
      {
        title: '⚙️ DevOps — Unity CI 부재·GameCI v4 안정·Weekly Insights 실패 이력',
        description:
          'NumLink·MeowBeat .github/workflows 없음. agent-office 2개 워크플로우 정상(deploy-pages, weekly-insights). Weekly Insights 직전 실행 cancelled/failure 이력. GameCI v4 안정(Ubuntu 22.04, Windows 경로 공백 해결). 동일 Unity 버전으로 Docker 이미지 공유 가능.',
      },
      {
        title: '🎨 Art Director — 코지 내러티브 UI·UIToolkit 108파일·에셋 네이밍 혼란',
        description:
          '2026 트렌드: 코지 미학+스토리텔링 통합 UI+부드러운 모션 주류. NumLink UIToolkit 108파일 대규모 작업(USS 7개+UXML 6개). 양 프로젝트 에셋 네이밍 혼란 심각(한글 파일명, 숫자만 파일, PSD 원본 혼재). 고양이 세계관=코지 트렌드 정확히 부합.',
      },
    ],
    meetingTitle: '🏢 4/14 데일리 스탠드업 — Unity 패치 업그레이드·Poki 출시 검토·에셋 네이밍 정리·4/13 P0 미완료 이월',
    meetingSummary:
      '4/13 P0 액션아이템 3건(미커밋 정리, FindObjectOfType 전환, Tools 복사) 모두 미완료로 이월. Unity 6000.3.13f1 업그레이드가 UIToolkit 터치 버그+오디오 최적화 포함하여 새 P0로 부상. NumLink Poki 웹 플랫폼 출시가 시장 데이터(월 1억 유저, 수익 100%)로 뒷받침됨. 에셋 네이밍 혼란이 UIToolkit 전환 완료 전 정리 필요.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '4/13 P0 액션아이템 3건이 모두 미완료입니다. 미커밋 정리(NumLink 30개, MeowBeat 25개), FindObjectOfType 전환, Tools 복사 — 이번에는 반드시 완료해야 합니다. 이월 항목을 오늘 P0 최우선으로 재지정합니다.',
      },
      {
        speaker: 'Game Designer',
        note: '블록퍼즐 +911% 성장과 Poki 월 1억 유저 데이터가 나왔습니다. NumLink은 Poki 웹 출시를 검토할 만합니다 — 직접유입 수익 100%이고 로직 퍼즐 다운로드가 YoY +19%입니다. MeowBeat는 Duet Cats가 고양이+리듬으로 글로벌 1위를 찍었으니 정통 리듬게임으로 포지셔닝해서 차별화합시다.',
      },
      {
        speaker: 'Developer',
        note: 'Unity 6000.3.5에서 13f1까지 8패치가 밀려 있습니다. UIToolkit 터치 스크롤 버그 수정(UUM-135398)이 포함돼 있어 NumLink UIToolkit 브랜치에 직접 영향입니다. 오디오 메인스레드 분리도 MeowBeat 리듬게임에 중요합니다. MeowBeat Farm 기능에서 fix 커밋이 7건 반복됐는데, 레이어/스프라이트 설계를 한번 재검토해야 합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink Tools 부재가 이틀째입니다. 4/13에도 P0이었는데 아직 복사 안 됐습니다. 에러핸들링 격차도 심각합니다 — NumLink 689회 분산 vs MeowBeat 21회 집중, 33배 차이입니다. MeowBeat known_bugs 6건 중 4건이 error 등급이고 회귀테스트 픽스처가 아직 미완성입니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'TikTok 도달이 85~90% 하락했습니다. YouTube Shorts와 Instagram Reels로 전환해야 합니다. Duet Cats가 시장을 검증해줬으니 MeowBeat ASO 키워드를 "cat rhythm game" 롱테일 변형으로 미리 세팅하고, 출시 전 15초 게임플레이 클립 전략을 준비합시다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office 배포 정상이지만 Weekly Insights 워크플로우가 실패/취소 이력이 있습니다. 원인 조사 필요합니다. Unity 두 프로젝트 CI/CD 부재가 이틀째인데 GameCI v4가 안정화돼 있고 동일 버전이라 Docker 이미지 공유가 가능합니다. 오늘은 Weekly Insights 실패 원인부터 잡겠습니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026 트렌드가 코지 미학+내러티브 UI입니다. 고양이 세계관이 정확히 부합하니 방향은 맞습니다. 다만 에셋 네이밍이 양 프로젝트 모두 혼란입니다 — 30.png, ㅡㅡㅡ.png, 레이어 20.png 같은 파일이 산재해 있어요. UIToolkit USS 연동 전에 {기능}_{크기}_{상태}.png 형식으로 통일해야 합니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: 4/13 미완료 이월 — 미커밋 정리·FindObjectOfType 전환·Tools 복사',
        description:
          '4/13 P0 3건 모두 미완료. NumLink 미커밋 30개(AutoGenTests git rm), MeowBeat 미커밋 25개(GoogleMobileAds 정리), MeowBeat FindObjectOfType 14회→ServiceLocator, NumLink Tools/ 복사를 오늘 반드시 완료.',
      },
      {
        title: 'P0: Unity 6000.3.5→6000.3.13f1 동시 업그레이드',
        description:
          '8패치 누적. UIToolkit 터치 스크롤 버그(UUM-135398) 수정 + 오디오 메인스레드 분리 + Burst+IL2CPP 빌드 22% 단축. NumLink UIToolkit 브랜치와 MeowBeat 리듬게임 모두에 직접 영향.',
      },
      {
        title: 'P1: NumLink Poki 웹 플랫폼 출시 전략 수립',
        description:
          'Poki 월 1억 유저, 직접유입 수익 100%, 상위 개발자 연 100만 유로. 로직 퍼즐 다운로드 YoY +19%. WebGL 빌드 테스트 + Poki SDK 연동 검토 시작.',
      },
      {
        title: 'P1: 에셋 네이밍 컨벤션 통일 (양 프로젝트)',
        description:
          '한글/숫자 파일명·PSD 원본 혼재 정리. {기능}_{크기}_{상태}.png 형식 통일. UIToolkit USS 스타일시트 연동과 협업 효율성 확보. 코지 모듈형 디자인 시스템 기반.',
      },
      {
        title: 'P2: MeowBeat ASO 키워드 사전 세팅 + YouTube Shorts 전략',
        description:
          'Duet Cats 시장검증 활용, "cat rhythm game" 롱테일 키워드 세팅. TikTok 도달 하락 대비 YouTube Shorts/Reels 15초 클립 전략. 출시 6~8주 전 시작.',
      },
      {
        title: 'P2: DevOps Weekly Insights 워크플로우 실패 원인 조사',
        description:
          'agent-office weekly-insights.yml 직전 실행 failure→cancelled 이력. 원인 파악 후 수정. GameCI 도입은 Tools 복사·Unity 업그레이드 완료 후 순차 진행.',
      },
    ],
  },
  {
    id: '2026-04-13T04:00:00-daily-standup',
    date: '2026-04-13',
    researchTitle:
      '📊 4/13 데일리 스탠드업 — NumLink 폰트·UI 5커밋·MeowBeat 먹기 애니메이션 5커밋·퍼즐 시장 $12.2B·Unity 6.4 ECS 코어 편입·GameCI 빌드 자동화·Diegetic UI 트렌드',
    researchSummary:
      '7명 에이전트 첫 병렬 리서치 완료(최초 회의). NumLink 오늘 5커밋(README, 폰트, asmdef 빌드 픽스, 세계관 UI 강화) — 미커밋 약 30개(AutoGenTests 삭제·폰트 에셋 변경 포함). MeowBeat 오늘 5커밋(먹기 애니메이션 흔들기→즉시제거 fix, feedIcon 교체) — 미커밋 약 25개(GoogleMobileAds 미커밋·삭제파일 3개 미스테이지). agent-office 오늘 1커밋(4/12 스탠드업). 퍼즐 게임 시장 $12.2B(3위), IAP 수익 +14%. 리듬 게임 $2.5B→$5.3B(CAGR 9.1%), MeowBeat 고양이 테마 메이저 공백 확인. Unity 6.4 ECS 코어 편입 예정, Mono→CoreCLR 마이그레이션(6.7). MeowBeat GameManager FindObjectOfType 14회 호출(기술부채 HIGH). NumLink 테스트 커버리지 0%. GameCI로 Unity CI 구축 가능. ASO 2026 지속적 실험 사이클 전략, TikTok 유기적 도달 급락→멀티플랫폼 필수. Diegetic UI + 캐릭터 연동 파티클 트렌드.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink 5커밋·미커밋 30개·MeowBeat 5커밋·미커밋 25개',
        description:
          'NumLink 오늘 커밋: README 추가, Maplestory SDF 폰트 적용, asmdef 빌드 픽스, 세계관 UI 스타일 강화(총 5개). 미커밋: 폰트 에셋 변경·AutoGenTests 삭제 미스테이지·.omc 파일 다수. MeowBeat 오늘 커밋: 먹기 애니메이션 fix(흔들기→즉시제거), 1초 흔들기 구현, catfood.meta, foodSprite revert, feedIcon 교체(총 5개). 미커밋: GoogleMobileAds prefab/Manifest, Input·Item·SaveLoad 메타 삭제 미스테이지. agent-office 4/12 스탠드업 1커밋. package-lock.json 변경 의도 확인 필요.',
      },
      {
        title: '🎮 Game Designer — 퍼즐 $12.2B·IAP+14%·리듬 CAGR 9.1%·Block Blast 2810만 다운로드',
        description:
          '퍼즐 게임 전체 매출 약 $12.2B(3위), IAP 수익 YoY +14% 성장. Numberlink 장르 대형 경쟁작 없음 — 블루오션 확인. 리듬 게임 $2.5B→$5.3B(CAGR 9.1%), MeowBeat 고양이 테마 메이저 타이틀 공백 확인. Block Blast 2026-01 다운로드 1위(2810만). Phigros식 무선 판정선·Rotaeno 자이로 메카닉 트렌드. Day 30 리텐션 공략 위한 데일리 챌린지+스트릭 시스템 권장.',
      },
      {
        title: '💻 Developer — Unity 6.4 ECS 편입·6.7 CoreCLR·MeowBeat FindObjectOfType 14회 기술부채',
        description:
          'Unity 6.4 ECS 코어 패키지 편입, GameObject+ECS 통합 트랜스폼 지원 예정. Unity 6.7(2026 LTS) Mono→CoreCLR 마이그레이션. MeowBeat GameManager.cs Start()에서 FindObjectOfType 14회 연속(규칙 위반 HIGH). PlayerController.cs Input.GetKeyDown 직접 사용(규칙 위반). Runtime 동적 GameObject 생성(씬 배치 원칙 위반). Debug.Log 80개+ 미제거. NumLink 아키텍처는 ServiceLocator 정석 구현으로 ECS 하이브리드 전환 유리.',
      },
      {
        title: '🔍 QA Tester — NumLink 테스트 0%·known_bugs 없음·MeowBeat 회귀 2/2 PASS',
        description:
          'NumLink Tools/ 폴더 없음 — known_bugs.json·unity_validate.py·qa_static.py 전무. 프로젝트 테스트 파일(*Test*.cs) 0개. MeowBeat known_bugs.json 6건 등록(RT_SIZE_ZERO·YAML_DUPLICATE·MANIFEST_MISSING_AUDIO 등). 회귀 테스트 2/2 PASS. AutoGenTests.cs 37개 케이스(HitEffect·Note·NoteSpawner 커버). 게임플레이 로직(판정 타이밍·점수 계산) 테스트 없음.',
      },
      {
        title: '📢 Content Writer — ASO 지속적 실험 사이클·TikTok 도달 급락·Discord 소유 채널 필수',
        description:
          'ASO 2026: Apple App Store Tags AI 도입, Google Play Level Up 참여도 반영. 첫 2장 스크린샷이 전환율 최대 변수. TikTok 유기적 도달 급락(42.5만→6천 사례)→멀티플랫폼+Discord 소유 채널 병행 필수. 퍼즐 주타겟 25~44세 여성(75%), 리듬 아시아 집중. "공유 가능한 순간" 의도적 설계로 UGC 바이럴 유도 권장.',
      },
      {
        title: '⚙️ DevOps — agent-office CI 정상·Unity CI 없음·GameCI 표준·Vercel 전환 검토',
        description:
          'agent-office deploy-pages.yml(Node22+Vite8) 정상 운영, SHA 고정 보안 양호. weekly-insights.yml 매주 월 09:00 자동 실행. NumLink·MeowBeat .github/workflows 없음. GameCI(game-ci/unity-actions) 2026 표준 — Library 캐싱으로 빌드 시간 단축. IL2CPP Android 빌드 ubuntu-latest 필요. agent-office GitHub Pages→Vercel 전환 시 PR 프리뷰 배포 이점.',
      },
      {
        title: '🎨 Art Director — Diegetic UI·볼류메트릭 파티클·캐릭터 연동 비주얼 피드백 트렌드',
        description:
          '2026 Diegetic UI 주류 — 버튼/아이콘이 세계관에 녹아드는 Dynamic Icons. 퍼즐 접근성: 색상+심볼 이중 구분·흔들림 힌트·접근성 설정 세분화. 리듬: 볼류메트릭 파티클+씬 전체 BPM 동기화가 표준. MeowBeat PERFECT 콤보 시 고양이 픽셀아트 캐릭터 연동 비주얼 피드백 제안. NumLink 오답 연결 흔들림 피드백 추가 권장.',
      },
    ],
    meetingTitle: '🏢 4/13 데일리 스탠드업 — MeowBeat 기술부채 긴급 정리·NumLink QA 인프라 구축·GameCI 도입',
    meetingSummary:
      'MeowBeat GameManager.cs FindObjectOfType 14회 호출이 오늘 가장 큰 기술부채로 부상. NumLink는 테스트 커버리지 0%에 Tools/ 인프라 전무 상태. 먹기 애니메이션 5커밋이 완료됐으나 GoogleMobileAds 미커밋·삭제파일 미스테이지가 정리 시급. Unity 6.4/6.7 로드맵으로 현재 아키텍처 점검 필요. GameCI 도입으로 두 프로젝트 CI 자동화 가능. ASO와 커뮤니티 빌딩을 지금부터 시작해야 출시 대비 가능.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink가 오늘 폰트와 UI 작업으로 5커밋 들어왔습니다. 미커밋 30개 중 AutoGenTests 삭제 파일이 스테이지 안 된 게 위험합니다. MeowBeat는 먹기 애니메이션 5커밋 완료됐지만 GoogleMobileAds 설정이 아직 미커밋입니다. 두 프로젝트 모두 미커밋 정리를 오늘 P0으로 잡겠습니다.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 시장 IAP가 14% 성장 중이고, Numberlink 장르에 폴리시된 대형 경쟁작이 없습니다. NumLink에 Daily Challenge + 스트릭 시스템이 Day 30 리텐션 핵심입니다. MeowBeat는 고양이 테마 메이저 리듬 게임 공백이 확인됐으니 지금이 출시 타이밍입니다. Phigros식 판정선 이동 방식 레퍼런스 검토를 제안합니다.',
      },
      {
        speaker: 'Developer',
        note: 'MeowBeat GameManager.cs가 Start()에서 FindObjectOfType를 14번 부릅니다. 스타트업 시간도 문제지만 CLAUDE.md 규칙 위반입니다. PlayerController도 Input.GetKeyDown 직접 사용 중이고, Runtime에서 GameObject를 동적 생성하는 곳도 있습니다. 이 세 가지가 오늘 기술부채 P0입니다. Unity 6.7에서 CoreCLR 전환이 예정돼 있어 지금 아키텍처 점검이 필요합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink에 테스트 파일이 단 하나도 없습니다. Tools/ 인프라도 없고요. Sprint 1-4 완료, 62건 코드리뷰 수정했는데 회귀 보호망이 전무입니다. 오늘 _ProjectTemplate에서 복사해야 합니다. MeowBeat는 회귀 2/2 PASS지만 게임플레이 로직 테스트가 없어서 판정 타이밍·점수 계산이 무방비 상태입니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'Apple이 App Store Tags를 AI로 자동 생성하기 시작했습니다. 스크린샷에서 메타데이터를 추출하니 비주얼 품질이 곧 검색 노출입니다. TikTok 유기적 도달이 급락하고 있어서 Discord 소유 채널을 지금 열어야 합니다. 출시 6~8주 전에 사전 등록 페이지와 devlog 콘텐츠를 시작하는 게 공식입니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office CI/CD는 이상 없습니다. 문제는 NumLink·MeowBeat 둘 다 GitHub Actions가 없다는 겁니다. GameCI가 2026 표준이고, Library 캐싱으로 빌드 시간을 많이 줄일 수 있습니다. NumLink EditMode 테스트 CI부터 추가하고, MeowBeat는 Android AAB 자동 빌드 순으로 구축 제안합니다.',
      },
      {
        speaker: 'Art Director',
        note: 'MeowBeat PERFECT 콤보 때 고양이 캐릭터가 반응하는 비주얼 피드백을 추가하면 경쟁 차별점이 됩니다. 볼류메트릭 대신 픽셀아트 스타일 파티클로 세계관 일관성 유지하는 방향입니다. NumLink는 오답 연결 시 흔들림 피드백 5줄이면 됩니다. agent-office 게임 카드 hover도 장르별 border-left 컬러로 개선하면 스캔 가독성이 좋아집니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: MeowBeat GameManager.cs FindObjectOfType 14회 → SerializeField/ServiceLocator 전환',
        description:
          'C:/Unity/Feedme/Assets/Scripts/Manager/GameManager.cs Start()에서 FindObjectOfType 14회 호출 제거. SerializeField 직접 참조 또는 ServiceLocator 패턴으로 전환. CLAUDE.md 규칙 준수 + 스타트업 시간 단축.',
      },
      {
        title: 'P0: NumLink Tools/ QA 인프라 구축 (_ProjectTemplate에서 즉시 복사)',
        description:
          'C:/Unity/_ProjectTemplate/Tools/에서 unity_validate.py, qa_static.py, known_bugs.json, run_regression.py 복사 후 NumLink 씬 경로 상수 업데이트. 테스트 커버리지 0% 상태에서 Unity Editor 통합 진입 전 최소 방어선 구축.',
      },
      {
        title: 'P0: MeowBeat 미커밋 25개 정리 (GoogleMobileAds·삭제 파일 스테이지 포함)',
        description:
          'GoogleMobileAds prefab/Manifest, Input·Item·SaveLoad 메타 삭제 파일, feedIcon_0327.png 등 분류 후 커밋. MainScene.unity.bak_btn 삭제. 먹기 애니메이션 작업 완료분 포함.',
      },
      {
        title: 'P1: MeowBeat PlayerController.cs Input.GetKeyDown → InputAction 전환',
        description:
          'C:/Unity/Feedme/Assets/Scripts/Player/PlayerController.cs L52~53 Input.GetKeyDown → InputAction 마이그레이션. CLAUDE.md 규칙 준수.',
      },
      {
        title: 'P1: NumLink GameCI 기반 Unity CI 추가 (.github/workflows/unity-test.yml)',
        description:
          'GameCI(game-ci/unity-actions) + Library 캐싱 + EditMode 테스트 자동 실행. PR 머지 전 회귀 검증 기반 마련. MeowBeat Android AAB 자동 빌드 CI는 후속.',
      },
      {
        title: 'P2: NumLink Daily Challenge + 스트릭 시스템 GDD 추가',
        description:
          'Day 30 리텐션 공략을 위한 소셜 루프 최소 설계. Numberlink 장르 경쟁작 없는 블루오션 — 데일리 랭킹 1줄 MVP 포함 여부 GDD에 항목 추가.',
      },
    ],
  },

  {
    id: '2026-04-12T04:00:00-daily-standup',
    date: '2026-04-12',
    researchTitle:
      '📊 4/12 데일리 스탠드업 — NumLink SaveData 버전관리 커밋·MeowBeat 미커밋 25개·퍼즐 시장 YoY +19%·NumLink QA 인프라 전무·오디오 반응형 파티클 리듬 트렌드',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. NumLink 오늘 2개 커밋 확인(SaveData 버전관리+BM광고 필드, HUD 폰트 2배) — 미커밋 17개 잔존. MeowBeat FarmObject 레이어 수정 커밋 후 25개 미커밋 누적. 로직/숫자 퍼즐 YoY +19% 성장, 퍼즐 시장 $13.87B→$23.99B(CAGR 6.96%), 멀티플레이 리듬 DAU +40%. NumLink Tools/ QA 인프라 완전 미구축(회귀 테스트 불가, 위험도 高). ASO 2026: 첫 스크린샷 3초 내 게임플레이 노출 시 전환율 25~40% 상승, 시리즈형 숏폼이 SNS 승리공식. agent-office Node.js 20 deprecated 경고(2026-09-16 제거 예정). 리듬 게임 UI: 오디오 반응형 절차적 파티클+스타일라이즈드 하이브리드가 2026 주류.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink 2커밋·미커밋 17개·MeowBeat 1커밋·미커밋 25개·agent-office 5커밋',
        description:
          'NumLink 오늘 커밋: df1aea1(SaveData 버전관리+BM광고 필드), 0273e1f(HUD 하단버튼 폰트 2배). MeowBeat 오늘 커밋: cf673cf(먹이 오브젝트 FarmObject 레이어 변경). agent-office 최근: f242f1c(Lyria 3 전환), f3bb888(NumLink·MeowBeat 상태 동기화). NumLink SaveData 구조 변경으로 구버전 호환성 테스트 시급.',
      },
      {
        title: '🎮 Game Designer — 퍼즐 YoY +19%·시장 $13.87B·리듬 CAGR 9.1%·멀티플레이 DAU +40%',
        description:
          '로직/숫자 퍼즐 다운로드 YoY +19%, 25~44세가 전체의 47% 차지 — 두뇌 훈련 수요 견고. 퍼즐 시장 2024 $13.87B→2033 $23.99B(CAGR 6.96%). 리듬 게임 $2.5B→$5.3B(CAGR 9.1%), 멀티플레이 앱은 DAU +40% 더 높음. Google Play 신규 계정 14일 12명 테스터 의무화 — 사전 베타 플레이어 확보 필수.',
      },
      {
        title: '💻 Developer — 웹 리서치 도구 미지원·로컬 분석 한정·NumLink SaveData 호환성 이슈 확인',
        description:
          'Developer 에이전트(Scientist) 외부 웹 리서치 도구 미지원 — Orchestrator 결과로 대체. NumLink SaveData 버전관리 커밋(df1aea1)은 데이터 구조 변경 포함 — 구버전 세이브 로드 시 마이그레이션 성공 여부 확인 필요. MeowBeat 미커밋 25개 중 GoogleMobileAds 설정 파일 포함.',
      },
      {
        title: '🔍 QA Tester — NumLink QA 인프라 전무·MeowBeat known_bugs 6건·_ProjectTemplate 복사 즉시 가능',
        description:
          'NumLink Tools/ 디렉토리 자체가 없음 — known_bugs.json, unity_validate.py, qa_static.py 전부 미구축. MeowBeat Tools/ 완비: known_bugs.json 6건, QA 도구 14개 정상 운영. C:/Unity/_ProjectTemplate/Tools/가 존재하므로 NumLink에 즉시 복사 가능. 현재 NumLink는 회귀 테스트 수단이 전혀 없는 상태.',
      },
      {
        title: '📢 Content Writer — ASO AI 태그 전환·스크린샷 3초 룰·시리즈형 숏폼·전환율 25~40%↑',
        description:
          'ASO 2026: AI 태그+참여율 알고리즘 — 첫 스크린샷 3초 내 핵심 게임플레이 노출 필수. 밝고 선명한 아이콘+프리뷰 영상 첫 3초 실제 플레이 → 전환율 25~40% 상승. SNS: 단발 클립 아닌 시리즈 형식 숏폼이 2026 승리공식, 3~5개 플랫폼 동시 운영. Apple AI가 스크린샷에서 메타데이터 자동 추출 — 비주얼 품질=검색 노출.',
      },
      {
        title: '⚙️ DevOps — GitHub Pages 24초 배포 정상·Node.js 20 deprecated·weekly-insights 자동화 정상',
        description:
          'agent-office 자동배포 정상(build 14초+deploy 10초). weekly-insights.yml 매주 월요일 09:00 KST 자동 실행. Dependabot npm+Actions 주간 자동 PR. Node.js 20 Actions 6건 deprecated 경고(2026-09-16 제거 예정) — Node.js 24 마이그레이션 선행 필요. 보안: GitHub Actions SHA 고정으로 공급망 공격 방어 중.',
      },
      {
        title: '🎨 Art Director — Diegetic UI 표준화·오디오 반응형 파티클 주류·색맹 모드 기본값',
        description:
          '2026 모바일 게임: Diegetic UI(HUD 최소화+세계관 통합) 표준화. 퍼즐 UI: 색맹 모드 기본값, 고대비 미제공 시 스토어 리뷰 직접 지적 수준. 보상 순간에만 채도 높은 액센트 컬러 집중. 리듬 게임: 오디오 반응형 절차적 파티클+스타일라이즈드 하이브리드 주류 — MeowBeat 노트 히트 이펙트 교체 검토 시점.',
      },
    ],
    meetingTitle: '🏢 4/12 데일리 스탠드업 — NumLink QA 인프라 긴급 구축·SaveData 마이그레이션 검증·소셜 루프 MVP',
    meetingSummary:
      'NumLink에 QA 인프라가 전혀 없는 상태에서 SaveData 구조 변경 커밋이 들어온 것이 오늘의 핵심 리스크. _ProjectTemplate에서 Tools/ 즉시 복사로 회귀 테스트 기반 마련이 P0. MeowBeat는 미커밋 25개 누적 정리가 시급. 퍼즐/리듬 시장 모두 소셜 기능이 리텐션 핵심으로 부상 — 데일리 랭킹 MVP 포함 여부 결정 필요. Node.js 24 마이그레이션은 2026-09 deadline 전 여유 있게 처리.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink 오늘 SaveData 버전관리 커밋이 들어왔는데 미커밋이 아직 17개입니다. MeowBeat는 25개가 쌓여 있고요. SaveData 구조 변경은 기존 세이브 파일 호환성이 깨질 수 있어서 마이그레이션 테스트를 오늘 P0으로 잡겠습니다.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 시장이 YoY +19% 성장 중입니다. 그런데 멀티플레이 기능이 DAU를 40% 끌어올린다는 데이터가 나왔습니다. NumLink에 데일리 랭킹 1줄이라도 MVP에 넣을지 오늘 결정해야 합니다. 안 넣으면 D30 리텐션에서 불리합니다.',
      },
      {
        speaker: 'Developer',
        note: 'SaveData 버전관리 변경(df1aea1)이 BM 광고 필드 추가를 포함합니다. 구버전 세이브를 로드할 때 null 필드가 생기면 크래시 위험이 있습니다. 마이그레이션 로직이 제대로 구현됐는지 확인이 필요합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink에 Tools/ 디렉토리가 아예 없습니다. known_bugs.json도, unity_validate.py도 없어요. 회귀 테스트를 전혀 할 수 없는 상태인데 SaveData 구조까지 바뀌었습니다. _ProjectTemplate에서 복사하는 건 10분이면 되니까 지금 당장 해야 합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO 알고리즘이 AI 태그 기반으로 바뀌었습니다. 스크린샷 첫 3초에 실제 게임플레이가 나와야 전환율이 25~40% 올라갑니다. NumLink와 MeowBeat 모두 스토어 등록 전에 비주얼 에셋 점검이 필요합니다. 시리즈형 숏폼도 지금부터 준비해야 합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office 배포 파이프라인은 이상 없습니다. 다만 Node.js 20 Actions 경고가 6건 있고 2026년 9월에 제거됩니다. 여유 있을 때 Node.js 24로 올려두는 게 낫습니다. NumLink·MeowBeat CI/CD는 여전히 없는 상태입니다.',
      },
      {
        speaker: 'Art Director',
        note: 'MeowBeat 노트 히트 이펙트를 오디오 반응형 버스트로 교체하면 타격감이 크게 달라집니다. 2026 리듬 게임 트렌드 정중앙이고 구현 복잡도도 낮습니다. NumLink는 색맹 모드를 MVP 스코프에 넣어야 합니다. 스토어 리뷰에서 직접 지적받는 수준입니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: NumLink Tools/ QA 인프라 구축 (_ProjectTemplate에서 즉시 복사)',
        description:
          'C:/Unity/_ProjectTemplate/Tools/에서 unity_validate.py, qa_static.py, known_bugs.json, run_regression.py 복사 후 씬 경로 상수 업데이트. SaveData 변경 이후 회귀 테스트 기반 마련이 시급.',
      },
      {
        title: 'P0: NumLink SaveData 마이그레이션 호환성 검증',
        description:
          'df1aea1 커밋(SaveData 버전관리+BM광고 필드) 반영 후 구버전 세이브 파일 로드 시 null 필드 크래시 여부 확인. 마이그레이션 로직 존재 확인 필수.',
      },
      {
        title: 'P0: MeowBeat 미커밋 25개 정리',
        description:
          'GoogleMobileAds 설정, 프리팹, 씬 파일 등 25개 미커밋 파일 분류 후 커밋. FarmObject 레이어 변경 작업 완료분 포함.',
      },
      {
        title: 'P1: NumLink 데일리 랭킹 MVP 포함 여부 결정',
        description:
          '멀티플레이 기능이 DAU +40%를 기록한 시장 데이터 기반 — 최소 기능으로 데일리 랭킹 1줄 표시 스프린트 추가 검토. GDD 문서에 소셜 루프 항목 추가.',
      },
      {
        title: 'P1: agent-office Node.js 24 마이그레이션',
        description:
          'Node.js 20 Actions 6건 deprecated 경고, 2026-09-16 제거 예정. deploy-pages.yml Actions 버전 v4→v5 업데이트 + Node.js 24 호환성 테스트. deadline 전 여유 있게 처리.',
      },
      {
        title: 'P2: MeowBeat 노트 히트 이펙트 오디오 반응형 버스트 교체 검토',
        description:
          '2026 리듬 게임 트렌드: 정적 파티클 루프 → 비트 타이밍 동기화 오디오 반응형 버스트. 타격감 체감 향상 직결. Unity 파티클 시스템 오디오 데이터 연동 구현 검토.',
      },
    ],
  },

  {
    id: '2026-04-07T04:00:00-daily-standup',
    date: '2026-04-07',
    researchTitle:
      '📊 4/7 데일리 스탠드업 리서치 — NumLink/MeowBeat 미커밋 17/21개·Unity 6.3 LTS 출시·MeowBeat IAP 저장 로직 블로커·하이브리드 캐주얼 88% 급성장·TikTok 숏폼 인디 핵심 채널',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. NumLink 미커밋 17개(Phase 5 Singleton→ServiceLocator 전환 진행 중), MeowBeat 미커밋 21개(타이틀 난이도 버튼 런타임 생성 미커밋). Unity 6.3 LTS 출시(Unity AI Beta 포함, 2027.12까지 지원). MeowBeat ButtonController.cs:315 IAP 저장 로직 불완성이 HIGH 리스크로 확인됨. 하이브리드 캐주얼 시장 88% YoY 급성장 — 두 게임 모두 소셜 루프/메타 레이어 추가 검토 필요. 인디 게임 ASO 핵심: iOS 첫 3장 스크린샷 CTR 결정, 한국 게이머 66% 리뷰 작성. NumLink/MeowBeat CI/CD 파이프라인 부재. MeowBeat 고양이 캐릭터 픽셀아트+굵은 외곽선 하이브리드가 2025 트렌드 정중앙.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink 미커밋 17개·MeowBeat 미커밋 21개·agent-office 6개',
        description:
          'NumLink 최근 커밋: fix(ui): UIToolkit 하트 감소 누락 및 마스터 대각선 이동 수정(3434539). MeowBeat 최근 커밋: feat(ui): 타이틀 화면 난이도 버튼 런타임 자동 생성(1bcacf2). agent-office 최근: chore(standup): 4/6 스탠드업 회의 기록(b41f026). 세 프로젝트 모두 미커밋 파일 누적 — NumLink·MeowBeat 즉시 정리 필요.',
      },
      {
        title: '🎮 Game Designer — 퍼즐 다운로드 -7%·리듬 CAGR 9.1%·하이브리드 캐주얼 88% 급성장',
        description:
          '2025년 전체 모바일 게임 다운로드 -7.2%, 퍼즐 장르 수익 집중(Royal Match 단달 $7,800만). 리듬 게임 $2.5B → $5.3B 전망(CAGR 9.1%), AI 난이도 적응이 신규 표준. 하이브리드 캐주얼 수익 88% YoY 급성장 — NumLink 비동기 친구 대결 MVP 포함 여부 결정 시점.',
      },
      {
        title: '💻 Developer — Unity 6.3 LTS·C# 14 AOT 40%↑·NumLink Phase 5 P1-003 블록',
        description:
          'Unity 6.3 LTS 출시(Unity AI Beta 포함, 2027.12 지원). C# 14/.NET 10 AOT 컴파일 개선 → 기동 40% 단축. NumLink Phase 5 Singleton→ServiceLocator 마이그레이션(P5-001~003) 진행 중, P1-003 킥 후보 Owner 승인 미완료로 Phase 6 전체 블록 상태.',
      },
      {
        title: '🔍 QA Tester — NumLink 6건·MeowBeat IAP 저장 불완성 HIGH·음악 파이프라인 미구현',
        description:
          'NumLink: UGUI 미사용 컴포넌트 DisableAllUgui()로만 비활성화(미삭제), 아키텍처 미결 의문 11건. MeowBeat: ButtonController.cs:315 IAP 저장 로직 불완성(구매 데이터 손실 위험 🔴HIGH), AdmobManager 테스트 디바이스 ID 미등록, AI 음악 파이프라인(Lyria 3) MVP 필수 미착수.',
      },
      {
        title: '📢 Content Writer — iOS 첫 3장 CTR 결정·한국 66% 리뷰·TikTok 숏폼 인디 1위 채널',
        description:
          'App Store 다운로드 60%가 검색 경유, 피처링 앱 90%가 평점 4.0 이상. 한국 게이머 66% 리뷰 작성 → 출시 첫 주 리뷰 집중 유도 전략 필수. TikTok "플레이 과정 공개+챌린지" 형식이 퍼즐·리듬 장르 바이럴 최적. Discord 커뮤니티 서버로 얼리 플레이어 리뷰 집중 확보 전략.',
      },
      {
        title: '⚙️ DevOps — agent-office 자동배포 정상·NumLink/MeowBeat CI/CD 미구성',
        description:
          'agent-office GitHub Actions 2개 워크플로우 정상 운영(deploy-pages.yml, weekly-insights.yml). NumLink·MeowBeat .github/workflows 디렉토리 없음 — 수동 빌드만 가능. Unity 태그 푸시 시 Android APK 자동 빌드+itch.io 배포 파이프라인 설계 필요(우선순위: NumLink > MeowBeat).',
      },
      {
        title: '🎨 Art Director — 퍼즐 UI 미니멀 극한·고양이 픽셀+Arcane 하이브리드·EU 접근성 법적 의무',
        description:
          'Diegetic UI(세계관 내 UI) 표준화 — 퍼즐 게임은 타일+연결선 외 전부 제거. MeowBeat 고양이 캐릭터: 픽셀 실루엣+Arcane식 굵은 외곽선+파스텔 플랫 색채 하이브리드가 2025 트렌드 정중앙. EU 접근성법 2025.06.28 발효 — 색약 팔레트·햅틱 커스터마이징·44px 터치 타깃이 법적 의무.',
      },
    ],
    meetingTitle: '🏢 4/7 데일리 스탠드업 — MeowBeat IAP 블로커·Phase 5 P1-003 언블록·Unity CI/CD 자동화',
    meetingSummary:
      'NumLink/MeowBeat 미커밋 파일 누적이 3일 이상 지속되는 가운데, MeowBeat IAP 저장 로직 불완성이 새로운 HIGH 리스크로 확인됨. Unity 6.3 LTS 출시와 C# 14 AOT 개선은 중장기 업그레이드 후보. NumLink Phase 6은 P1-003 킥 후보 Owner 승인 한 건으로 전체가 블록된 상태 — 오늘 즉시 해소 필요. 두 Unity 프로젝트 모두 CI/CD 파이프라인 부재로 스토어 출시 대비 자동화 설계 시급.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink 17개, MeowBeat 21개 미커밋 파일이 또 누적됐습니다. 특히 MeowBeat는 타이틀 난이도 버튼 런타임 생성 작업이 미커밋 상태입니다. 오늘 안에 두 프로젝트 모두 커밋 정리를 P0으로 잡아야 합니다.',
      },
      {
        speaker: 'Game Designer',
        note: '하이브리드 캐주얼이 88% YoY 성장했습니다. 순수 퍼즐 메커닉만으로는 D30 리텐션이 어렵습니다. NumLink에 비동기 친구 대결을 MVP에 넣을지 오늘 결정해야 합니다. 리듬 게임은 AI 적응 난이도가 MeowBeat의 차별점이 될 수 있습니다.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink Phase 6 전체가 P1-003 킥 후보 Owner 승인 하나로 블록돼 있습니다. docs/GAME_DESIGN.md에서 킥 후보 확인하고 오늘 승인 결정만 내리면 Phase 5 Singleton 전환과 Phase 6을 병렬로 착수할 수 있습니다. Unity 6.3 LTS는 중장기 업그레이드 후보로 모니터링합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'MeowBeat ButtonController.cs:315 IAP 저장 로직이 불완성입니다. 구매 후 저장이 안 되면 유저 데이터 손실로 스토어 리뷰 폭탄 맞습니다. 이게 오늘 P0입니다. NumLink UGUI 미사용 컴포넌트도 DisableAllUgui()로만 숨겨진 상태라 코드 부채 정리 병행 필요합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'iOS 출시 때 첫 3장 스크린샷이 CTR을 결정합니다. A/B 테스트 없이 출시하면 기회를 날리는 겁니다. 한국 게이머 66%가 리뷰를 쓰니까 출시 첫 주에 Discord+얼리 플레이어 리뷰 유도 캠페인을 동시에 시작해야 합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'NumLink와 MeowBeat 둘 다 GitHub Actions가 없습니다. 지금은 수동 빌드인데 스토어 출시가 가까워지면 자동화 없이는 릴리즈 품질을 보장할 수 없습니다. NumLink 먼저 태그 푸시 → Android APK 자동 빌드 파이프라인을 이번 주 설계해야 합니다.',
      },
      {
        speaker: 'Art Director',
        note: 'MeowBeat 캐릭터 아트 방향을 오늘 확정해야 합니다. 픽셀 실루엣에 Arcane식 굵은 외곽선과 파스텔 플랫 색채를 섞은 하이브리드가 2025 트렌드 정중앙입니다. 그리고 EU 접근성법이 6월 28일 발효됩니다. 색약 팔레트를 지금 MVP 스코프에 넣지 않으면 유럽 출시 때 법적 문제가 생깁니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: MeowBeat IAP 저장 로직 완성 (ButtonController.cs:315)',
        description:
          '구매 완료 후 저장이 안 되는 버그 — 유저 데이터 손실 위험. ButtonController.cs:315 TODO 구현 완료 + AdmobManager 테스트 디바이스 ID 등록. 스토어 출시 전 반드시 해소.',
      },
      {
        title: 'P0: NumLink/MeowBeat 미커밋 파일 정리 (각 17개/21개)',
        description:
          'NumLink: Phase 5 Singleton→ServiceLocator 작업 분 커밋. MeowBeat: 타이틀 난이도 버튼 런타임 생성 작업 커밋. 두 프로젝트 모두 오늘 안에 clean status 확보.',
      },
      {
        title: 'P1: NumLink P1-003 킥 후보 Owner 승인 처리 (Phase 6 언블록)',
        description:
          'docs/GAME_DESIGN.md 킥 후보 검토 후 승인/수정 결정 → Phase 5 P5-001~003(Singleton 전환)과 Phase 6 병렬 착수 가능. Phase 6 전체 블록 해소.',
      },
      {
        title: 'P1: NumLink GitHub Actions CI/CD 파이프라인 설계',
        description:
          '태그 푸시 트리거 → Android APK 자동 빌드 → itch.io 자동 배포. Unity 빌드 자동화 워크플로우 초안 작성. MeowBeat는 NumLink 완료 후 동일 템플릿 적용.',
      },
      {
        title: 'P2: MeowBeat 캐릭터 아트 방향 확정 + 색약 모드 MVP 포함',
        description:
          '픽셀 실루엣 + Arcane식 굵은 외곽선 + 파스텔 플랫 색채 하이브리드 방향 확정. EU 접근성법 2025.06.28 발효 대비 — Deuteranopia 대응 팔레트 MVP 스코프 포함 여부 결정.',
      },
    ],
  },

  {
    id: '2026-04-06T09:00:00-daily-standup',
    date: '2026-04-06',
    researchTitle:
      '📊 4/6 데일리 스탠드업 리서치 — MeowBeat 곡 시스템 완성·NumLink Debug.Log 65건 릴리즈 위험·Unity 6.4 Project Auditor 내장·퍼즐 다운로드 -7.2%·YouTube Shorts 141%↑',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. MeowBeat 4/6 새벽 곡 연동 완료 — 30개 .meta 파일 staged 상태로 단일 커밋 정리 필요. NumLink 세팅 UI 작업 중(10개 파일 수정), Debug.Log 65건이 릴리즈 빌드 노출 위험. Unity 6.4 Project Auditor 기본 탑재로 별도 설치 없이 기술 부채 분석 가능. 퍼즐 게임 다운로드 -7.2%(시장 포화), 리텐션 메커닉 차별화가 생존 조건. YouTube Shorts 141% 성장으로 TikTok 대체 확정. agent-office 번들 519KB 경고(500KB 임계값 초과).',
    researchItems: [
      {
        title: '🎯 Orchestrator — MeowBeat 곡 시스템 완성·NumLink Settings UI 작업 중·agent-office .omc 미커밋',
        description:
          'MeowBeat 마지막 커밋 4/6 새벽: 다곡 지원 시스템 완성, 30개 .meta 파일 staged 대기 중 — 단일 커밋 즉시 정리 필요. NumLink 마지막 커밋 4/1, 현재 10개 .cs/.unity 파일 수정 중(Settings UI 작업). agent-office 마지막 커밋 4/5, .omc 상태 파일 2건 미커밋(무시 가능).',
      },
      {
        title: '🎮 Game Designer — 퍼즐 시장 다운로드 -7.2%·리듬게임 $2.5B·Royal Match $1.46B 리텐션 공식',
        description:
          '퍼즐 게임 2025년 다운로드 전년比 -7.2% 감소(시장 포화 신호) — 신규 획득보다 기존 유저 리텐션 ROI 우위. 리듬 게임 시장 $2.5B(CAGR 15%), 지역별 성공 공식 상이(일본: 캐릭터 가챠, 미국: 음악 라이선스). Royal Match $1.46B 달성 공식: 미니게임+적응형 난이도+IAP 전용. NumLink에 데일리 챌린지+적응 난이도 GDD 항목 추가 시급.',
      },
      {
        title: '💻 Developer — Unity 6.4 Project Auditor 내장·Next.js 16.2.2 출시·NumLink UI 버그 수정 위주',
        description:
          'Unity 6.4 출시: ECS Core 통합 + Project Auditor 에디터 기본 탑재(별도 설치 불필요) — 기술 부채/성능 분석 즉시 활용 가능. Next.js 16.2.2 출시(Turbopack 캐시 안정화, React 19 필수). NumLink 최근 10커밋 전부 fix/feat — 세팅패널·폰트·스프라이트 UI 버그 수정 위주, 아키텍처 문서화 완료 상태.',
      },
      {
        title: '🔍 QA Tester — NumLink Debug.Log 65건 릴리즈 노출·ResourceManager 테스트값 블로커·MeowBeat 22건 미완료',
        description:
          'NumLink: Debug.Log 145건 중 65건이 #if UNITY_EDITOR 가드 밖 — 릴리즈 빌드 노출 시 Google Play 리뷰 거부 가능성. ResourceManager 테스트값(99999 코인/루비) 릴리즈 포함 시 게임 밸런스 파괴(Critical). MeowBeat: Phase 2 코드 완료, art-director 의존성 22건 미완료. 전 프로젝트 자동화 테스트 0건.',
      },
      {
        title: '📢 Content Writer — AI ASO 롱테일+행동신호 중심·YouTube Shorts 141%↑·TikTok 유기 도달 소멸',
        description:
          'ASO 2026: AI 기반 알고리즘 전환 — 정확한 키워드보다 롱테일+행동 신호(세션 길이·리텐션) 순위 결정, 스크린샷 연 2~8회 교체가 상위권 기준. YouTube Shorts 조회수 141% 성장 — TikTok 유기 도달 소멸로 Shorts가 인디 핵심 채널로 확정. 퍼즐 키워드: "offline puzzle·relaxing·no ads", 리듬: "tap to beat·piano·rhythm challenge" 첫 스크린샷 텍스트 오버레이 권고.',
      },
      {
        title: '⚙️ DevOps — agent-office 배포 정상(Node22)·번들 519KB 경고·NumLink CI/CD 부재',
        description:
          'agent-office GitHub Pages v4 배포 정상, Node.js 22(2026년 6월 Node24 전환까지 여유). Vite 빌드 시 청크 519KB > 500KB 임계값 경고 — manualChunks 분리 권고. NumLink GitHub Actions 자동화 없음(수동 빌드) — 스토어 출시 전 자동화 설계 필요. GitHub Actions 셀프호스팅 가격 인상(분당 $0.002) 모니터링 필요.',
      },
      {
        title: '🎨 Art Director — 미니멀 HUD+환경통합 UI 주류·크리스탈-글로시 팔레트·프로젝트별 액센트 컬러 제안',
        description:
          '2025-2026 모바일 게임 UI 주류: 미니멀 HUD + 환경 통합 UI(Sky: Children of Light 방식). 퍼즐/리듬 게임 컬러: 크리스탈-글로시 팔레트 부상, 따뜻한 어스톤+채도 높은 액센트 조합. agent-office 현재 토스 화이트+#3182f6 블루 체계. NumLink(쿨톤 #5a9fd4)·MeowBeat(웜팝 #f97316) 프로젝트 카드 장르별 액센트 컬러 분리 제안.',
      },
    ],
    meetingTitle: '🏢 4/6 데일리 스탠드업 회의 — MeowBeat 곡 시스템 완성 커밋·NumLink Debug.Log P0·ASO 롱테일 전략',
    meetingSummary:
      'MeowBeat 곡 연동 완성 이후 30개 .meta 파일이 staged로 남아 있어 즉시 커밋 필요. NumLink Debug.Log 65건 가드 밖 노출이 릴리즈 전 P0 처리 대상으로 부상. Unity 6.4 Project Auditor 내장으로 기술 부채 분석 즉시 활용 가능. ASO 알고리즘 변화로 스크린샷 텍스트 오버레이 전략 수립 필요.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'MeowBeat 4/6 새벽에 곡 시스템 완성됐습니다. 30개 .meta 파일이 staged 상태인데 오늘 단일 커밋으로 정리해야 합니다. NumLink는 10개 파일 수정 중이고 Settings UI 작업 마무리 단계입니다. agent-office .omc 파일 2건은 무시 가능합니다.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 시장 다운로드가 -7.2% 떨어졌습니다. 이제 신규 설치보다 리텐션이 핵심입니다. Royal Match가 $1.46B을 번 공식이 미니게임+적응 난이도인데, NumLink GDD에 데일리 챌린지 항목을 이번 스프린트에 넣어야 합니다.',
      },
      {
        speaker: 'Developer',
        note: 'Unity 6.4 Project Auditor가 에디터에 기본 탑재됐습니다. 별도 설치 없이 바로 기술 부채 분석 가능합니다. NumLink 업그레이드 타이밍을 스토어 출시 후로 잡되, 현재 코드 정리와 병행 검토 권장합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink Debug.Log 65건이 릴리즈 빌드에 노출됩니다. Google Play 리뷰에서 걸릴 수 있어 Phase 5 시작 전 반드시 정리해야 합니다. ResourceManager 테스트값 99999도 릴리즈 블로커입니다. 두 건 모두 P0입니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO가 AI 기반으로 바뀌면서 롱테일 키워드와 행동 신호가 순위를 결정합니다. YouTube Shorts가 141% 성장으로 TikTok을 완전히 대체했습니다. 스크린샷 첫 번째 이미지에 "offline puzzle·no ads" 텍스트 오버레이 A/B 테스트를 준비해야 합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office 배포는 정상입니다. 다만 번들이 519KB로 임계값 500KB를 넘었습니다. vite.config.ts에 manualChunks 추가로 30분 내 해결 가능합니다. NumLink 스토어 출시 전 GitHub Actions 자동화 설계도 일정에 넣어야 합니다.',
      },
      {
        speaker: 'Art Director',
        note: '모바일 게임 UI는 미니멀 HUD + 환경 통합 방향으로 가고 있습니다. agent-office 프로젝트 카드에 NumLink는 쿨톤 #5a9fd4, MeowBeat는 웜팝 #f97316으로 액센트 컬러를 분리하면 장르 인식성이 높아집니다. tokens.css 변수 2개 추가로 수술적 적용 가능합니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: MeowBeat .meta 30개 단일 커밋 정리 (오늘 오전)',
        description:
          '4/6 곡 시스템 완성 staged 파일 30개를 feat(song): 곡 시스템 안정화 및 에셋 메타 통합 커밋으로 정리. 완료 후 agent-office journal 동기화.',
      },
      {
        title: 'P0: NumLink Debug.Log 65건 가드 밖 정리 (Phase 5 시작 전)',
        description:
          'grep -r "Debug.Log" Assets/02.Scripts/ | grep -v "UNITY_EDITOR" 검증 후 수정 커밋. ResourceManager 테스트값(99999 코인/루비) 제거 포함. 릴리즈 빌드 블로커 해소.',
      },
      {
        title: 'P1: NumLink GDD에 데일리 챌린지 + 적응형 난이도 항목 추가',
        description:
          'Royal Match $1.46B 검증 공식 — 미니게임+적응 난이도+IAP 전용. 퍼즐 시장 다운로드 감소 대응. 이번 스프린트 GDD 문서에 항목 추가.',
      },
      {
        title: 'P1: agent-office Vite 번들 청크 분할 (519KB→300KB+200KB)',
        description:
          'vite.config.ts에 rollupOptions.output.manualChunks 추가 — index(~300KB) + vendor(~200KB) 분리. 작업시간 30분 이내.',
      },
      {
        title: 'P2: 스토어 스크린샷 ASO 텍스트 오버레이 A/B 초안 제작',
        description:
          'NumLink 첫 스크린샷: "offline puzzle·relaxing·no ads" 캡션 오버레이. MeowBeat: "tap to beat·piano·rhythm challenge". YouTube Shorts 티저 10초 GIF 동시 제작.',
      },
    ],
  },

  {
    id: '2026-04-05T20:00:00-threads-insight',
    date: '2026-04-05',
    researchTitle: '📊 Threads 인사이트 — 에이전트 워크플로우 구축 및 LLM API 최적화',
    researchSummary: '최근 AI 트렌드는 단순한 챗봇 활용을 넘어, Claude Code와 같은 전문 도구를 활용한 복잡한 에이전트 워크플로우 구축에 집중되고 있습니다. 특히, API 레벨에서 구조화된 출력(Structured Outputs)과 캐시 제어 등 고도화된 개발 기법을 적용하는 것이 핵심 경쟁력으로 부상하고 있습니다.',
    researchItems: [
      { title: '🥇 Claude Code 기반 에이전트 시스템 구축', description: 'Claude Code는 PM 스킬 학습부터 올인원 툴킷 구성까지, AI 에이전트의 개발 및 시각화 과정을 포괄합니다. 이를 통해 사용자는 복잡한 워크플로우를 체계적으로 설계하고 구현할 수 있습니다.' },
      { title: '🥈 Claude API 실전 활용 및 최적화 기법', description: '단순 호출을 넘어, Cache Control, Structured Outputs, Batch API 등의 고급 기법을 활용하여 API 사용의 효율성과 안정성을 극대화하는 것이 중요합니다. 이는 실제 상용 서비스 구현의 핵심 역량입니다.' },
      { title: '🥉 전문 AI 도구의 생태계화 (PageEcho 등)', description: 'PageEcho와 같은 전문 도구들은 특정 기능을 고도화하고 주간 우승을 통해 생태계 내에서 입지를 다지고 있습니다. 이는 AI가 범용성을 넘어 전문 분야별 솔루션으로 진화하고 있음을 보여줍니다.' },
    ],
    meetingTitle: 'AI 개발 역량의 \'구현\' 및 \'최적화\' 단계 진입',
    meetingSummary: 'AI 활용의 초점이 \'무엇을 할 수 있는가\'에서 \'어떻게 안정적이고 효율적으로 구현할 수 있는가\'로 이동하고 있습니다. 따라서 개발자 관점의 시스템 설계 능력과 API 최적화가 필수적입니다.',
    meetingItems: [
      { speaker: '뜨는 것', note: '단일 LLM 호출이 아닌, 여러 단계의 추론, 외부 도구 연동, 그리고 피드백 루프(Self-Growth Loop)를 포함하는 복합적인 시스템 설계가 핵심입니다.' },
      { speaker: '실행 포인트', note: 'JSON 스키마 강제화, 캐싱 전략 도입, 그리고 배치 처리 API를 활용하여 시스템의 견고함과 확장성을 확보해야 합니다.' },
    ],
    decisions: [
      { title: 'Claude Code 기반의 개인 에이전트 툴킷 구축', description: 'Awesome Claude Code Toolkit을 참고하여, 개인의 업무 흐름(PM 스킬, 분석, 보고)에 최적화된 \'올인원\' 에이전트 툴킷을 직접 구축하고 테스트한다.' },
      { title: 'API 최적화 PoC 진행', description: '실제 사용 시나리오를 설정하고, 단순 API 호출 대신 Structured Outputs와 Cache Control을 적용한 프로토타입(PoC)을 개발하여 성능 개선을 검증한다.' },
    ],
  },

  {
    id: '2026-04-05T09:00:00-daily-standup',
    date: '2026-04-05',
    researchTitle:
      '📊 4/5 데일리 스탠드업 리서치 — NumLink/MeowBeat 미커밋 3일 연속·Unity 6.4 출시·Liquid Glass 차세대 트렌드·YouTube Shorts 2000억 뷰·ASO 리텐션 중심 전환',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. NumLink 어제 P0 부분 이행(5개 커밋 생성) 확인, 하지만 MainScene.unity·Manager 4개 포함 미커밋 잔재 지속 — 3일 연속 미이행. MeowBeat .meta 3개 삭제 처리 3일째 미이행. Unity 6.4 정식 출시(ECS Core 통합·Project Auditor 내장·Graph Toolkit 내장화). NEKOPARA는 가챠+경영 장르 확인 → MeowBeat(리듬)과 직접 충돌 낮음. ASO 알고리즘 리텐션 중심 전환(평점 4.0 미만 피처드 90% 탈락). YouTube Shorts 일 2,000억 뷰 돌파·팔로워 무관 신규 도달 80%. Neo-Brutalism 다음 "Liquid Glass" 트렌드(애플 선도). agent-office 파이프라인 정상.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink P0 부분 이행, MeowBeat .meta 3일 미이행',
        description:
          '어제(4/4) P0 NumLink 커밋 부분 이행 — 5개 커밋 생성(44465ac~61c99da). 하지만 MainScene.unity·Manager 4개·GameOverController·StageClearController 등 여전히 미커밋. MeowBeat Input/Item/SaveLoad .meta 삭제 3일째 미처리. .omc/ 자동생성 파일·Screenshots/ untracked 잔재. 오늘: 두 프로젝트 미커밋 즉시 정리 + .gitignore 강화 P0.',
      },
      {
        title: '🎮 Game Designer — NEKOPARA 가챠+경영 장르 확인, 퍼즐 시장 262.5억 달러',
        description:
          'NEKOPARA Sekai Connect 장르 재확인: 가챠+카페경영 샌드박스 — MeowBeat(리듬 전문) 직접 충돌 낮음, 포지셔닝 충돌 없음. 퍼즐 시장 2026년 262.5억 달러(+16.7%). 리워드 광고+IAP 하이브리드 수익화 최적(리워드 광고 수익 50~70%). Poki 월 1억 명·연 6.25억 명, NumLink WebGL 출시 타이밍 유효. 4/14 출시 후 1주 반응 모니터링 후 차별화 문구 확정 권고.',
      },
      {
        title: '💻 Developer — Unity 6.4 출시(ECS Core 통합)·기술 부채 처리 후 커밋 권장',
        description:
          'Unity 6.4 정식 출시(2026년 3월) — ECS Core 통합, Project Auditor 내장, Graph Toolkit 내장화로 에디터 설정 단순화. UI Toolkit 6.7 LTS까지 분기별 업데이트 예정(월드스페이스 UI, 커스텀 셰이더 추가). NumLink 세팅 패널 구현 완료 → Input.GetKeyDown 2곳(#if UNITY_EDITOR 가드, 30분) + GameObject.Find 3곳(ServiceLocator 대체) 기술 부채 처리 후 일괄 커밋 권장.',
      },
      {
        title: '🔍 QA Tester — MainScene.unity 4일 미커밋 고위험·TMP 자동변환 안전',
        description:
          'MainScene.unity 722줄 변경 4일 미커밋 — YAML 머지 충돌 시 스크립트 참조 일괄 손상 고위험(LevelSelectUI 신규 GameObject+TMP 폰트 기능). TMP 에셋 4개 변경은 Unity 버전업 자동 변환(serializedVersion 3→4) — 안전, 무시 가능. Manager 4개(GameManager/NumberManager/PuzzleManager/ResourceManager) 설정 변경 분 즉시 커밋 필요.',
      },
      {
        title: '📢 Content Writer — ASO 리텐션 중심 전환·YouTube Shorts 2000억 뷰·Reddit 무예산 유효',
        description:
          'ASO 2026 핵심 변화: 구글 플레이 알고리즘 설치수→리텐션 중심 전환, 평점 4.0 미만 피처드 90% 탈락. YouTube Shorts 일 2,000억 뷰 돌파(전년比 3배), 팔로워 무관 신규 도달 80% → TikTok 대체 채널 확정. 무예산 마케팅: Reddit 단일 게시물로 수천 위시리스트 가능, 10초 GIF가 텍스트 대비 압도적 성과 — NumLink 출시 전 Reddit+Shorts 동시 배포 권고.',
      },
      {
        title: '⚙️ DevOps — agent-office 정상(8cb9ade)·GitHub Actions OIDC 업데이트·privacy-policy 미존재',
        description:
          'agent-office 최신 커밋 8cb9ade(Dev Studio 리네임), 미커밋 .omc/state/ HUD 파일 2개만 존재(무시 가능). GitHub Actions 4월 업데이트: OIDC 커스텀 프로퍼티 클레임 추가, VNET 페일오버 지원. NumLink docs/privacy-policy.html 미존재 확인 — AdMob 심사 블로킹 요소, 정적 HTML 1개 + GitHub Pages /docs 설정으로 1~2시간 내 해소 가능.',
      },
      {
        title: '🎨 Art Director — Liquid Glass 차세대 트렌드·AI 워크플로우 3단계·레트로퓨처리즘 아이콘',
        description:
          'Neo-Brutalism 다음 트렌드: "Liquid Glass"(유동적 투명도+깊이감) — 애플이 선도 중, 인디 적용 타이밍 1~2분기 내. AI 에셋 워크플로우 2026 표준: Midjourney(컨셉/무드보드) → Stable Diffusion(스프라이트/텍스처) → Photoshop 후처리 하이브리드. 앱 아이콘 2026 키워드: 레트로퓨처리즘(네온+크롬) + 캐릭터 마스코트 단일 포커스 — NumLink 아이콘 방향으로 Midjourney 초안 3종 제안.',
      },
    ],
    meetingTitle: '🏢 4/5 데일리 스탠드업 회의 — 미커밋 3일 연속 긴급·Unity 6.4 적용 검토·Liquid Glass 주시',
    meetingSummary:
      'NumLink·MeowBeat 미커밋이 3일 연속 지속 — 오늘 반드시 완료해야 할 임계점. NEKOPARA 직접 충돌 낮음 확인으로 MeowBeat 전략 재조정. Unity 6.4 출시로 에디터 업그레이드 검토 필요. ASO 리텐션 중심 전환으로 출시 품질 기준 상향. Liquid Glass 차세대 트렌드 모니터링 시작.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink 어제 5개 커밋 생성했으나 MainScene.unity+Manager 4개 여전히 미커밋입니다. MeowBeat .meta 처리도 3일째 미이행. 오늘은 반드시 두 프로젝트 완전 정리해야 합니다. .gitignore에 .omc/ 추가도 함께.',
      },
      {
        speaker: 'Game Designer',
        note: 'NEKOPARA 장르를 재확인했습니다 — 가챠+경영이라 MeowBeat 리듬 게임과 직접 충돌 없습니다. 경쟁 위협 강도가 낮아졌으니 MeowBeat 차별화 전략은 4/14 출시 후 반응 보고 수정하면 됩니다.',
      },
      {
        speaker: 'Developer',
        note: 'Unity 6.4가 출시됐습니다. ECS Core 통합·Project Auditor 내장 — 스토어 출시 후 업그레이드 검토 권장. 당장은 커밋 정리 우선. Input.GetKeyDown + GameObject.Find 기술 부채 처리 후 일괄 커밋하면 스토어 전 클린업 완료됩니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'TMP 에셋 4개는 Unity 자동 변환으로 안전합니다 — 커밋해도 무방합니다. MainScene.unity 722줄 변경이 4일째 방치 중 — 더 이상 미룰 수 없습니다. 오늘 git commit이 모든 QA 리스크의 출발점입니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO 알고리즘이 리텐션 중심으로 바뀌었습니다. 평점 4.0 미만이면 피처드 기회 90% 사라집니다. 출시 품질 기준을 높게 잡아야 합니다. YouTube Shorts는 팔로워 없어도 신규 도달 80% — 출시 전 10초 GIF 티저 준비 권고합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'agent-office 파이프라인 정상입니다. NumLink docs/privacy-policy가 없습니다 — AdMob 심사 블로킹 요소. 정적 HTML 1개 만들고 GitHub Pages /docs 설정하면 오늘 P2로 완료 가능합니다.',
      },
      {
        speaker: 'Art Director',
        note: 'Neo-Brutalism 다음은 Liquid Glass 트렌드입니다 — 아직 인디에서 보편화 전이니 당장 적용 불필요. 앱 아이콘은 레트로퓨처리즘+마스코트 단일 포커스 방향으로 Midjourney 초안 3종 제작 권고합니다.',
      },
    ],
    decisions: [
      {
        title: 'P0: NumLink 미커밋 완전 정리 (오늘 오전, 기술 부채 처리 포함)',
        description:
          'MainScene.unity·Manager 4개·GameOverController·StageClearController 일괄 커밋. Input.GetKeyDown 2곳 #if UNITY_EDITOR 가드 + GameObject.Find 3곳 처리 후 커밋하면 스토어 전 클린업 완료. TMP 에셋 4개는 자동변환이므로 함께 커밋.',
      },
      {
        title: 'P0: MeowBeat .meta 3개 삭제 처리 (오늘 오전, 3일째 미이행)',
        description:
          'Input/Item/SaveLoad .meta 삭제 — 의도적이면 커밋, 아니면 복원. 동시에 untracked 새 스크립트 .meta 파일들·Songs/ 정리. .gitignore에 .omc/ 추가.',
      },
      {
        title: 'P1: NumLink docs/privacy-policy GitHub Pages 배포',
        description:
          'docs/index.html 개인정보처리방침 생성 → GitHub Pages /docs 설정 → mmporong.github.io/NumLink/ 배포. AdMob 심사 블로킹 요소 해소. 1~2시간 내 완료 가능.',
      },
      {
        title: 'P1: NEKOPARA 4/14 출시 반응 1주일 모니터링 계획 수립',
        description:
          '장르 확인(가챠+경영) — MeowBeat(리듬) 직접 충돌 낮음. 출시 후 리뷰·다운로드 반응 1주 관찰 후 MeowBeat 차별화 포지셔닝 확정. 당장 전략 변경 불필요.',
      },
      {
        title: 'P2: NumLink 앱 아이콘 Midjourney 초안 제작',
        description:
          '레트로퓨처리즘(네온+크롬) + 캐릭터 마스코트 단일 포커스 방향. Midjourney로 초안 3종 생성 후 선택. Neo-Brutalism 굵은 테두리 유지.',
      },
      {
        title: 'P2: NumLink 출시 전 Reddit + YouTube Shorts 10초 GIF 티저 준비',
        description:
          '무예산 마케팅 최고 효율 채널. Reddit r/indiegaming + YouTube Shorts 동시 배포. 팔로워 없어도 신규 도달 80% 가능.',
      },
    ],
  },
  {
    id: '2026-04-04T09:00:00-daily-standup',
    date: '2026-04-04',
    researchTitle:
      '📊 4/4 데일리 스탠드업 리서치 — NumLink 미커밋 폭증·NEKOPARA 직접 경쟁·TikTok 도달률 붕괴·Play 신원인증 의무화·Neo-Brutalism 확정',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. NumLink 미커밋 12파일(+944줄) 위험 급증 — MainScene.unity +722줄 포함, 씬 파일 corruption 리스크 9/10. NEKOPARA Sekai Connect 4/14 출시(MeowBeat 직접 경쟁). TikTok 유기 도달률 -98.6% 붕괴로 YouTube Shorts·Reels 크로스포스팅 전략 전환 필요. Google Play 개발자 신원인증 2026년 9월 의무화 — 즉시 완료 요구. Unity 6.8 CoreCLR 출시 전 스토어 출시 시 마이그레이션 불필요. Neo-Brutalism 2025-2026 주류 확정으로 NumLink 디자인 방향 유효.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink 미커밋 12파일 폭증, MeowBeat .meta 삭제 리스크',
        description:
          '어제(4/3) P0 NumLink 커밋 미완료 → 오히려 12파일(+944줄)로 증가. MainScene.unity +722줄 수정 포함. MeowBeat meowbeat/main에 .meta 파일 3개(Input/Item/SaveLoad) 삭제 상태 방치 — Unity 참조 오류·빌드 실패 가능. 어제 P1(콤보·보상 QA, MeowBeat 빌드 확인) 모두 미이행 확인. 오늘 절대 우선순위: NumLink 커밋 → MeowBeat .meta 처리 → QA 이행.',
      },
      {
        title: '🎮 Game Designer — NEKOPARA 4/14 직접 경쟁·Poki 공유유도 공식·리워드광고 62%',
        description:
          'NEKOPARA Sekai Connect(고양이+리듬+카페) 4월 14일 출시 — IP 700만 장 보유, MeowBeat 최근접 직접 경쟁작. 대응: 퍼즐 비중 강화·캐주얼 진입장벽 낮춤. Poki 성공 공식: 스트레스 완화형 + 정답 공유 버튼으로 바이럴 루프 설계. 리워드 광고 전체 수익 62%, 참여율 45~60% — 막힌 레벨 힌트 리워드 광고가 최적 배치.',
      },
      {
        title: '💻 Developer — UI 폴리싱 단계 확정·Input.GetKeyDown 2곳·Unity 6.8 CoreCLR 예정',
        description:
          '최근 10커밋 중 80% UI 관련 → UI 폴리싱 단계 확정. Input.GetKeyDown 2곳(NumberManager.cs:194,199), GameObject.Find 3곳(AutoSetup·ObjectPoolManager·UIToolkitManager) — 스토어 전 처리 필요. Unity 6.5 Android thin LTO(앱 시작 단축), 6.8 CoreCLR 정식 전환(Mono 대체) 예정 — 현재 출시 시 CoreCLR 마이그레이션 불필요.',
      },
      {
        title: '🔍 QA Tester — MainScene.unity corruption 리스크 9/10·EditMode 테스트 30분 착수 가능',
        description:
          'MainScene.unity 미커밋 리스크 9/10 — Unity 씬 파일 YAML 특성상 merge conflict 시 스크립트 참조 일괄 손상. Manager 4개 의존 체인 미커밋 리스크 7/10. 오늘 30분 투자: git commit + EditMode 테스트 3개로 4일간 반복 지적 기술 부채 절반 해소 가능. 1인 개발자 최소 기준: Domain EditMode 3건 + PlayMode 스모크 1건 + 실기기 2종.',
      },
      {
        title: '📢 Content Writer — TikTok 도달률 -98.6%·Play 신원인증 9월 의무화·Poki 20MB 제한',
        description:
          'TikTok 유기적 도달률 사실상 소멸(-98.6% 실사례) → YouTube Shorts + Instagram Reels 크로스포스팅 전략으로 전환 필수. Google Play 개발자 신원인증 2026년 9월 의무화 — 미완료 시 앱 설치 불가, 즉시 Play Console에서 완료 필요. Poki WebGL 초기 로드 20MB 이하 기술 요건 필수. AdMob 데이터 수집 항목 Play Console 데이터 안전 공시란 정확 기재 필요.',
      },
      {
        title: '⚙️ DevOps — GameCI+fastlane 표준·privacy-policy docs/ 배포·dev-studio 파이프라인 건전',
        description:
          'Unity Android 빌드 자동화 표준: GameCI(ubuntu-latest) + fastlane supply → Play Store internal track. 최초 1회 수동 업로드 후 자동화 가능. NumLink 개인정보처리방침: docs/ 폴더 → mmporong.github.io/numlink/privacy-policy (설정 1시간). dev-studio 배포 파이프라인 건전 — 필수 수정 없음(OIDC 기반, npm ci, concurrency 설정 정상).',
      },
      {
        title: '🎨 Art Director — 마스코트 아이콘 전환율 +25%·AI 3단계 워크플로·Neo-Brutalism 확정',
        description:
          '마스코트 중심 아이콘 최적화만으로 전환율 최대 25% 상승 확인. AI 에셋 생성 3단계 워크플로: Midjourney v7(컨셉/무드보드) → Leonardo AI(스프라이트 반복 생산) → Adobe Firefly(스토어 제출 저작권 안전). Neo-Brutalism 2025-2026 디지털 주류 확정 — NumLink 방향 유효. MeowBeat HUD: 고양이 표정 5단계 상태 표현, Duet Cats·Beat Cats 레퍼런스.',
      },
    ],
    meetingTitle: '🏢 4/4 데일리 스탠드업 회의 — NumLink 커밋 P0 즉시·NEKOPARA 경쟁 대응·Play 신원인증 즉시',
    meetingSummary:
      'NumLink 미커밋이 12파일로 폭증 — MainScene.unity corruption 리스크 긴급. NEKOPARA Sekai Connect 4/14 출시로 MeowBeat 직접 경쟁 현실화. TikTok 도달률 붕괴로 숏폼 전략 전환 필요. Google Play 신원인증 9월 전 즉시 완료 요구. Unity 6.8 CoreCLR 전 출시하면 마이그레이션 불필요 — 출시 속도가 곧 기술 리스크 절감.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink 미커밋 12파일은 오늘 즉시 커밋해야 합니다. 씬 파일 포함 상태로 방치 중 — 작업 손실 리스크. MeowBeat .meta 3개 삭제도 오늘 처리. 어제 P0/P1 모두 미이행 — 오늘은 반드시 커밋 완료.',
      },
      {
        speaker: 'Game Designer',
        note: 'NEKOPARA Sekai Connect 4/14 출시는 MeowBeat에 최대 위협입니다. 대응 전략: 퍼즐 비중 강화로 차별화. Poki NumLink에 "정답 공유" 기능 추가 시 유기 바이럴 가능. 리워드 광고 막힌 레벨 힌트 배치 수익화 검토.',
      },
      {
        speaker: 'Developer',
        note: 'Input.GetKeyDown 디버그 키 2곳은 #if UNITY_EDITOR 가드로 30분 내 처리 가능. GameObject.Find 3곳 중 ObjectPoolManager는 에디터 가드로 해결, AutoSetup·UIToolkitManager는 ServiceLocator 대체 필요. 현재 버전으로 스토어 출시 시 Unity 6.8 CoreCLR 마이그레이션 불필요.',
      },
      {
        speaker: 'QA Tester',
        note: '오늘 우선순위: git commit 5분 + EditMode 테스트 3개 30분 = 35분으로 4일 부채 해소. MainScene.unity를 하루 더 방치하면 corruption 리스크가 현실화됩니다. 더 이상 미룰 수 없습니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'Google Play 개발자 신원인증 지금 바로 Play Console에서 완료해야 합니다. 9월 마감이지만 인증 처리에 수 주 걸릴 수 있음. TikTok 유기 마케팅 전략은 폐기, YouTube Shorts 중심으로 전환 권고.',
      },
      {
        speaker: 'DevOps',
        note: 'NumLink 개인정보처리방침 GitHub Pages 배포가 Google Play 등록 최초 블로커. docs/ 폴더 방식으로 1~2시간 내 완료 가능. dev-studio 파이프라인은 건전 — 오늘 배포 이후 추가 작업 불필요.',
      },
      {
        speaker: 'Art Director',
        note: 'NumLink 아이콘 Brutalist 마스코트 방향 확정 권고. 스토어 아이콘 교체만으로 전환율 25% 기대. MeowBeat 에셋 생산은 Midjourney v7 → Leonardo AI → Firefly 3단계 워크플로 활용. NEKOPARA 출시 전 MeowBeat 스토어 페이지 선등록 검토.',
      },
    ],
    decisions: [
      {
        title: 'P0: NumLink 미커밋 12파일 즉시 커밋 (오늘 오전)',
        description:
          'MainScene.unity +722줄 포함 corruption 리스크 9/10. TMP 에셋 변경 의도 확인 후 논리 단위 분할 커밋. SettingsPanel.uxml.meta, settings.uss.meta 신규 파일 포함.',
      },
      {
        title: 'P0: MeowBeat .meta 파일 3개 삭제 처리 (오늘 오전)',
        description:
          'meowbeat/main에 Input/Item/SaveLoad .meta 삭제 상태 — 의도적 삭제면 커밋, 아니면 복원. 방치 시 빌드 실패 리스크.',
      },
      {
        title: 'P1: NumLink EditMode 테스트 3개 착수 (오늘 오후, 30분)',
        description:
          'git commit 완료 직후 PuzzleValidator·ScoreCalculator 등 Domain 레이어 EditMode 테스트 3개 작성. 4일 연속 지적 TDD 부채 즉시 착수.',
      },
      {
        title: 'P1: Google Play 개발자 신원인증 즉시 완료',
        description:
          '2026년 9월 의무화 — 인증 처리 수 주 소요 가능. Play Console에서 즉시 시작. 미완료 시 앱 설치 불가.',
      },
      {
        title: 'P2: NumLink 개인정보처리방침 GitHub Pages 배포',
        description:
          'docs/ 폴더 방식 → mmporong.github.io/numlink/privacy-policy. AdMob 필수 요건. 1~2시간 내 완료 가능.',
      },
      {
        title: 'P2: NEKOPARA 출시 대응 — MeowBeat 퍼즐 비중 강화·스토어 선등록 검토',
        description:
          '4/14 직접 경쟁 출시. MeowBeat 퍼즐 요소 강화로 차별화. 스토어 페이지 선등록 검토(마케팅 선점).',
      },
    ],
  },
  {
    id: '2026-04-03T09:00:00-daily-standup',
    date: '2026-04-03',
    researchTitle:
      '📊 4/3 데일리 스탠드업 리서치 — Unity HDRP 유지보수 전환·Mewgenics 100만장·GitHub Actions 보안 강화·퍼즐 로직장르 19%↑',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. Unity HDRP 유지보수 모드 전환으로 개발자 이탈 가속(1000+명 Godot 전환), URP 집중 전략 확인 — NumLink/MeowBeat는 URP 사용으로 영향 없음. Mewgenics(고양이 전술 로그라이크) 6시간 만에 15만장, 1주 100만장 판매로 2026 첫 대형 인디 히트. GitHub Actions 2026 보안 로드맵 발표(이그레스 방화벽, npm 토큰 90일 수명 제한). 퍼즐 로직 장르 다운로드 19% YoY 증가, AI 적응형 난이도가 차별화 핵심. 인디 게임 시장 48.5억→55.4억 달러(CAGR 14.3%). Self-healing 테스트 자동화 트렌드 부상.',
    researchItems: [
      {
        title: '🎯 Orchestrator — 프로젝트 현황 점검, NumLink/MeowBeat 로컬 부재',
        description:
          'NumLink·MeowBeat 로컬 디렉토리 현재 부재 — 클론 또는 경로 확인 필요(P0). dev-studio만 정상 가동 중(최근 커밋: 4/2 데일리 스탠드업). 어제 결정사항 P0(NumLink 미커밋 6파일)·P1(콤보·보상 QA)·P1(MeowBeat 빌드 확인) 진행 상태 미확인. .omc 상태 파일 변경 감지(세션 파일 4개 신규).',
      },
      {
        title: '🎮 Game Designer — 로직 퍼즐 19%↑, Mewgenics 고양이 게임 100만장 돌파',
        description:
          '로직 퍼즐 다운로드 YoY 19% 증가, 두뇌 훈련·IQ 향상 수요 급증. 직소 퍼즐도 21%↑(힐링 트렌드). Mewgenics(고양이 전술 로그라이크) 2/10 출시 후 1주 100만장, OpenCritic 89점 Must-Play — 고양이 테마 게임 시장 검증. AI 적응형 난이도가 리텐션 핵심 차별화 요소. Royal Match 월 1.23억 달러로 퍼즐 1위 유지, 하이브리드 수익화(광고+IAP) ARPU 28% 우위 지속.',
      },
      {
        title: '💻 Developer — Unity HDRP 유지보수 전환, 1000+명 Godot 이탈',
        description:
          'Unity HDRP 2/25 유지보수 모드 선언 — 신기능 중단, 버그 수정만. 2023 Runtime Fee 후유증과 합쳐 1000+명 개발자 이탈(Godot 4.4 대안 부상). URP가 Unity 유일 활성 렌더 파이프라인으로 집중. NumLink/MeowBeat은 URP 기반으로 직접 영향 없으나, Unity 생태계 축소 리스크 모니터링 필요. Unity Vector AI 광고 플랫폼 매출 YoY 72%↑, 주가는 56% 하락.',
      },
      {
        title: '🔍 QA Tester — Self-healing 테스트 자동화, AI 플레이테스팅 트렌드',
        description:
          'AI 기반 self-healing 테스트 자동화 부상 — 앱 변경 시 테스트 스크립트 자동 수정. AI 플레이테스팅이 사람 테스터 보완(이상 탐지, 자동 회귀 테스트). 클라우드 게임 테스팅 시장 105억 달러. 게임 QA 아웃소싱 시장 25억 달러(CAGR 15%). NumLink/MeowBeat 자동화 테스트 전무 상태 지속 — 최소 Domain 레이어 유닛 테스트 도입 시급.',
      },
      {
        title: '📢 Content Writer — 인디 시장 55.4억$, 비주얼 아이덴티티 통일 필수',
        description:
          '인디 게임 시장 2025년 48.5억→2026년 55.4억 달러(+14.3%). Steam 위시리스트 속도가 노출 트리거 — 출시 12~18개월 전 마케팅 시작 권장. 스토어 캡슐·트위터 헤더·디스코드 배너·트레일러 썸네일 비주얼 통일이 핵심. "클립 가능한 순간"(유머·실패·긴장) 최적화가 숏폼 마케팅 성공 열쇠. ASO는 필수이나 차별화 불가 — 외부 트래픽 유입이 관건.',
      },
      {
        title: '⚙️ DevOps — GitHub Actions 이그레스 방화벽, npm 토큰 90일 제한',
        description:
          'GitHub Actions 2026 보안 로드맵: 러너 이그레스 방화벽(L7, VM 외부 작동), Actions Data Stream 관측성, 보안 기본값 강화. npm 보안: 클래식 토큰 신규 생성 불가, 세분화 토큰 90일 수명 제한, 쓰기 토큰 2FA 기본 요구. Trusted Publishing(OIDC) + Provenance Attestation 자동 생성. Spring 2026 OSS 공급망 공격(tj-actions, Nx, trivy-action) 교훈으로 CI/CD 자체가 공격 타겟 인식 확산.',
      },
      {
        title: '🎨 Art Director — 스토리텔링 UI, 환경 통합 인터페이스, 3D 몰입감',
        description:
          '2026 모바일 게임 UI/UX 핵심 트렌드: UI가 스토리텔링 매체로 진화(메뉴↔게임플레이 매끄러운 전환). 환경 통합 인터페이스(UI가 게임 세계에 녹아듦). 고급 제스처·모션(스와이프=장애물 제거, 핀치=3D 시점 조절). 다이나믹 아이콘·타이포그래피. 폴더블/태블릿 크로스 디바이스 반응형 필수. AI 개인화 적응형 레이아웃. 3D 요소로 몰입감·리텐션 강화.',
      },
    ],
    meetingTitle: '🏢 4/3 데일리 스탠드업 회의 — 프로젝트 로컬 복구 P0, Unity 생태계 모니터링, 테스트 자동화 도입',
    meetingSummary:
      'NumLink·MeowBeat 로컬 디렉토리 부재 확인 — 클론/경로 복구 P0. Unity HDRP 유지보수 전환으로 URP 집중 확정, 프로젝트 직접 영향 없으나 생태계 리스크 모니터링. Mewgenics 100만장 성공으로 고양이 테마 시장 검증. GitHub Actions 보안 강화·npm 토큰 정책 변경 대응 필요. 자동화 테스트 도입 재촉구.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink·MeowBeat 로컬 디렉토리 부재 — 클론 또는 경로 재설정 P0. 어제 결정사항(미커밋 6파일, 콤보 QA, MeowBeat 빌드) 진행 확인 불가. dev-studio 정상 가동. 오늘 핵심: 프로젝트 로컬 복구 후 어제 P0/P1 이행 상태 점검.',
      },
      {
        speaker: 'Game Designer',
        note: '로직 퍼즐 다운로드 19% 성장 — NumLink 시장 타이밍 양호. Mewgenics 100만장 돌파로 "고양이+전략" 조합 시장 검증 완료 — MeowBeat "고양이+리듬" 조합도 유효. AI 적응형 난이도를 NumLink MVP 이후 우선 검토 권고.',
      },
      {
        speaker: 'Developer',
        note: 'Unity HDRP 유지보수 전환, URP 유일 활성 파이프라인 확정. NumLink/MeowBeat URP 기반이라 직접 영향 없으나 Unity 주가 56% 하락·개발자 이탈 등 장기 생태계 리스크 존재. Godot 4.4 대안으로 급부상 중 — 차기 프로젝트 엔진 선택 시 비교 검토 필요.',
      },
      {
        speaker: 'QA Tester',
        note: '자동화 테스트 전무 상태 3일째 지적. AI self-healing 테스트·자동 플레이테스팅 트렌드에도 불구하고 기본 유닛 테스트조차 없음. 프로젝트 로컬 복구 후 Domain 레이어 TDD 즉시 시작 촉구. Debug.Log 280건 정리도 미진행.',
      },
      {
        speaker: 'Content Writer',
        note: '인디 시장 55.4억 달러(+14.3%) 성장세. Steam 위시리스트 속도>총량 재확인. 비주얼 아이덴티티 통일(스토어·SNS·배너 일관성)이 인디 마케팅 핵심. NumLink·MeowBeat 각각 비주얼 DNA 확립 후 프리론치 마케팅 파이프라인 구축 시작 권고.',
      },
      {
        speaker: 'DevOps',
        note: 'GitHub Actions 이그레스 방화벽·npm 토큰 90일 제한 정책 대응 필요. dev-studio CI/CD에 Trusted Publishing(OIDC) 전환 검토. Spring 2026 OSS 공급망 공격 교훈 — 의존성 lockfile 검증, 액션 SHA 고정 강화. 빌드 정상 유지 중.',
      },
      {
        speaker: 'Art Director',
        note: '2026 UI 트렌드: 스토리텔링 UI·환경 통합·3D 몰입감. NumLink Brutalist + 환경 통합 UI로 차별화 가능. MeowBeat은 고양이 캐릭터를 UI에 자연스럽게 녹이는 "내러티브 UI" 적용 제안. 폴더블 대응 반응형 레이아웃도 고려.',
      },
    ],
    decisions: [
      {
        title: 'P0: NumLink·MeowBeat 로컬 디렉토리 복구',
        description:
          'GitHub에서 클론하거나 경로 재설정하여 두 프로젝트 로컬 환경 복구. 어제 P0/P1 결정사항 이행 상태 즉시 점검.',
      },
      {
        title: 'P1: Unity 생태계 리스크 모니터링 체계 수립',
        description:
          'HDRP 유지보수 전환·개발자 이탈·주가 하락 등 Unity 리스크 정기 모니터링. URP 로드맵 추적, 차기 프로젝트 Godot 4.4 비교 검토 시작.',
      },
      {
        title: 'P1: Domain 레이어 TDD 도입 착수',
        description:
          '프로젝트 복구 후 NumLink Domain 레이어 유닛 테스트 TDD 방식으로 즉시 시작. AI self-healing 테스트 파이프라인은 중기 로드맵.',
      },
      {
        title: 'P2: GitHub Actions 보안 정책 대응',
        description:
          'npm 토큰 90일 제한·Trusted Publishing 전환 검토. 액션 SHA 고정 강화, lockfile 검증 프로세스 도입.',
      },
      {
        title: 'P2: 비주얼 아이덴티티 통일 작업 시작',
        description:
          'NumLink(Retrofuturist/Brutalist)·MeowBeat(Soft 3D/내러티브 UI) 각각 비주얼 DNA 확립. 스토어·SNS·배너 일관성 확보.',
      },
      {
        title: 'P3: AI 적응형 난이도 GDD 검토',
        description:
          'NumLink MVP 완료 후 AI 기반 동적 난이도 조절 시스템 GDD 검토 착수. 로직 퍼즐 리텐션 핵심 차별화 요소.',
      },
    ],
  },
  {
    id: '2026-04-02T09:00:00-daily-standup',
    date: '2026-04-02',
    researchTitle:
      '📊 4/2 데일리 스탠드업 리서치 — NumLink MVP 70%·MeowBeat 미커밋 해소·Debug.Log 280건·axios 공급망 공격',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. NumLink 세팅 패널·콤보 시스템·보상 계산 신규 구현으로 MVP 70% 달성. MeowBeat 미커밋 34파일 P0 이슈 해소(status clean), GameObject.Find 23건 전량 제거. Debug.Log 총 280건(NumLink 209↑, MeowBeat 71↓). axios npm 공급망 공격 발생(영향 없음). 퍼즐 시장 블루오션 유지, 데스크톱 펫 르네상스 트렌드, ASO 리텐션 기반 알고리즘 전환.',
    researchItems: [
      {
        title: '🎯 Orchestrator — NumLink MVP 70%, MeowBeat P0 해소',
        description:
          'NumLink: Settings 패널 생성, 진동 토글, 스프라이트 교체, dead trigger 이벤트 연결 등 다수 커밋. 핵심 매니저 6파일 미커밋 상태(P0). MVP 65%→70%. MeowBeat: 4일 방치 미커밋 34파일 문제 해소(status clean), Packages 삭제 커밋 확인. MVP 40% 유지. dev-studio: 안정, 코드 변경 없음.',
      },
      {
        title: '🎮 Game Designer — 데스크톱 펫 르네상스, 하이브리드 수익화 45%',
        description:
          '넘버/연결 퍼즐 직접 경쟁작 미발견, 블루오션 유효. 하이브리드 수익화(광고+IAP+구독) 상위 리듬게임 45% 차지. BeatSync AR+AI 난이도 조절로 DAU 35%↑ 사례. 데스크톱 펫 르네상스가 코지 장르 핵심 트렌드 — MeowBeat "리듬+고양이 힐링" 정확히 부합. 솔로 토너먼트 캐주얼 필수 기능 부상.',
      },
      {
        title: '💻 Developer — 콤보 시스템·보상 계산 신규, Unity ECS 코어 승격',
        description:
          'NumLink 6파일 변경(+66/-19): 별점 계산 단순화(생명 기반), 콤보 시스템 신규(스트릭 추적), CalculateLevelReward 난이도별 코인 차등, StageClear에 콤보/경과시간 카운트업 애니메이션. TODO 5건 잔존(긴급 없음). Unity 6.4 ECS 코어 승격, Rider 2026.1 출시, CoreCLR 로드맵 발표, Unity Agentic AI 도구 공개.',
      },
      {
        title: '🔍 QA Tester — Debug.Log 280건, MeowBeat 대폭 개선',
        description:
          'NumLink Debug.Log 154→209(+55 증가, 개발 중 로그), MeowBeat 119→71(-48 감소). GameObject.Find: MeowBeat 23→0 전량 제거(대폭 개선), NumLink 3건 유지. Input.GetKey NumLink 9건 신규 감지(규칙 위반). 미추적 .meta 2건. 자동화 테스트 여전히 전무. 총 Debug.Log 273→280건.',
      },
      {
        title: '📢 Content Writer — ASO 리텐션 기반 전환, K-인디 글로벌 도약의 해',
        description:
          'Apple AI 생성 태그가 스크린샷 텍스트까지 분석 — 비주얼 메타데이터 최적화 필수. Google Play 리텐션 기반 알고리즘 전환(설치 수→유지율). 한국 퍼즐 매출 14% 성장, 2026년 "K-인디 글로벌 도약의 해" 평가. 위시리스트 속도>총량, 소프트 론치 필수. TikTok "버그 실패 영상" 숏폼이 트레일러보다 효과적.',
      },
      {
        title: '⚙️ DevOps — axios 공급망 공격 경보, ESLint 10 대기',
        description:
          '빌드 정상(2.49s/483KB, +12KB). axios 1.14.1/0.30.4 RAT 백도어 삽입 공급망 공격 발생(3/31) — dev-studio 직접 영향 없으나 간접 의존성 확인 권장. ESLint 10.1.0+react-hooks 7.x 메이저 업데이트 대기. GitHub Actions Node 24 전환 6/2 확정, 사전 테스트 가능. outdated 6개(메이저 4개).',
      },
      {
        title: '🎨 Art Director — 불완전함의 미학, Midjourney v8 Style Creator',
        description:
          'Canva 2026 트렌드 "Imperfect by Design" — AI 광택 반동으로 수작업 느낌 프리미엄 가치. NumLink Brutalist 방향 강화 근거. 미니멀 맥시멀리즘 하이브리드 부상, 블루-그린 계열 지배. Midjourney v8 Style Creator로 비주얼 DNA 저장+일관성 유지 파이프라인 가능. 앱 아이콘 Soft 3D 트렌드, 설치 최대 25%↑ 사례.',
      },
    ],
    meetingTitle: '🏢 4/2 데일리 스탠드업 회의 — NumLink 콤보 시스템 검증, MeowBeat 빌드 확인',
    meetingSummary:
      'NumLink MVP 70% 달성, 콤보·보상 시스템 QA 필요. MeowBeat P0 해소 확인, 빌드 검증 우선. Debug.Log 총 280건 정리 계획. axios 공급망 공격 간접 의존성 점검. ASO 리텐션 기반 전략 수립 시작.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink MVP 70% 달성. 미커밋 매니저 6파일 즉시 커밋 P0. MeowBeat 미커밋 해소 확인됐으나 Packages 삭제 후 빌드 정상 여부 검증 필요. 오늘 핵심: NumLink 커밋+Settings 마무리, MeowBeat 빌드 확인.',
      },
      {
        speaker: 'Game Designer',
        note: '넘버/연결 퍼즐 경쟁작 여전히 부재, 블루오션 유효. MeowBeat에 적응형 난이도+데스크톱 펫 아이들 요소 GDD 검토 제안. NumLink 솔로 토너먼트 모드 장기 로드맵에 추가 권고.',
      },
      {
        speaker: 'Developer',
        note: '콤보 시스템과 보상 계산이 신규 구현됨 — QA 검증 시급. 별점 계산이 타이머→생명 기반으로 단순화되어 밸런스 재확인 필요. CalculateLevelReward 코인 범위(Easy 10~25, Master 50~65) 밸런스 검증 권장.',
      },
      {
        speaker: 'QA Tester',
        note: 'MeowBeat 대폭 개선(GameObject.Find 전량 제거, Debug.Log 48건 삭감). 반면 NumLink Debug.Log 55건 증가, Input.GetKey 9건 규칙 위반 신규 감지. 자동화 테스트 전무 상태 지속 — Domain 레이어 TDD 시작 촉구.',
      },
      {
        speaker: 'Content Writer',
        note: 'Google Play 리텐션 기반 알고리즘 전환 — NumLink 튜토리얼 완료율이 ASO에 직결. 한국 퍼즐 매출 14% 성장, K-인디 글로벌 도약 환경 조성. 소프트 론치 전략과 TikTok 개발과정 숏폼 파이프라인 구축 권고.',
      },
      {
        speaker: 'DevOps',
        note: '빌드 정상, 번들 12KB 증가 모니터링. axios 공급망 공격(3/31) 간접 의존성 확인 필요. ESLint 10 마이그레이션과 GitHub Actions Node 24 사전 테스트 이번 주 내 진행 권장.',
      },
      {
        speaker: 'Art Director',
        note: '"불완전함의 미학" 트렌드가 NumLink Brutalist 방향 강화 근거. Midjourney v8 Style Creator로 프로젝트별 비주얼 DNA 고정 파이프라인 구축 제안. 앱 아이콘 MeowBeat=Soft 3D, NumLink=Retrofuturist 방향.',
      },
    ],
    decisions: [
      {
        title: 'P0: NumLink 미커밋 6파일 즉시 커밋',
        description:
          'GameManager, NumberManager, PuzzleManager, ResourceManager, GameOverController, StageClearController 커밋하여 작업 유실 방지.',
      },
      {
        title: 'P1: NumLink 콤보·보상 시스템 QA 검증',
        description:
          '콤보 리셋 타이밍, CalculateLevelReward 코인 밸런스, 별점 계산 변경사항 테스트.',
      },
      {
        title: 'P1: MeowBeat 빌드 정상 여부 확인',
        description:
          'Packages 디렉토리 삭제 후 Unity 빌드가 정상 동작하는지 검증.',
      },
      {
        title: 'P2: axios 간접 의존성 점검',
        description:
          'npm ls axios로 dev-studio 간접 의존성 확인, 공급망 공격 영향 배제.',
      },
      {
        title: 'P2: Debug.Log 정리 계획 수립',
        description:
          'NumLink 209건 + MeowBeat 71건 = 280건. #if UNITY_EDITOR 래핑 또는 커스텀 로거 전환 계획.',
      },
      {
        title: 'P3: ESLint 10 마이그레이션 가이드 검토',
        description:
          'ESLint 10.1.0 + react-hooks 7.x + globals 17.x 메이저 업데이트 마이그레이션 계획.',
      },
    ],
  },
  {
    id: '2026-04-01T09:00:00-daily-standup',
    date: '2026-04-01',
    researchTitle:
      '📊 4/1 데일리 스탠드업 리서치 — 퍼즐 시장 122억$·리듬 게임 CAGR 9.1%·MeowBeat 미커밋 긴급',
    researchSummary:
      '7명 에이전트 병렬 리서치 완료. NumLink UI Toolkit 전환 마무리 단계(오늘 아침 버그 3건 수정). MeowBeat 미커밋 34파일 4일째 방치 — 빌드 깨짐 위험. 퍼즐 시장 122억 달러 중 넘버/연결 퍼즐은 블루오션. 리듬 게임 25억→53억 달러 성장 예측(CAGR 9.1%). Poki 월간 1억 플레이어로 웹 게임 부활. ASO가 의도 기반 매칭으로 전환. Unity 6.4 출시, 6.0 LTS 10월 종료 예정. Debug.Log 273건 프로덕션 위험.',
    researchItems: [
      {
        title: '🎯 Orchestrator — 프로젝트 상태 긴급 점검',
        description:
          'NumLink: feature/uitoolkit 브랜치에서 레벨선택 UI 버그 3건 수정 완료(오늘 08:38). main 머지 시점 판단 필요. MeowBeat: 마지막 커밋 3/28, 미커밋 34파일(수정 14+미추적 20) 4일째 방치 — .meta 19건 포함으로 빌드 깨짐 확정적. dev-studio: Hardboiled Studio 리브랜딩 완료, 빌드/배포 정상.',
      },
      {
        title: '🎮 Game Designer — 퍼즐 122억$, 리듬 CAGR 9.1%, 하이브리드 수익화 표준',
        description:
          '퍼즐 게임 매출 122억 달러, 매칭 퍼즐이 42% 지배하나 넘버/연결 퍼즐은 블루오션. 직소 퍼즐 다운로드 21%↑(힐링 트렌드). 리듬 게임 25억→53억 달러(2033), 소셜 기능 탑재 시 DAU 40%↑. Poki 월간 1억 명, 웹 게임 78억 달러 시장. 하이브리드 수익화(광고+IAP) ARPU 28% 우위. 고양이 테마 지속 인기, 리듬+힐링펫 매시업은 시장 공백.',
      },
      {
        title: '💻 Developer — Unity 6.4 출시, TODO 3건, PrimeTween 대안 부상',
        description:
          'NumLink 최근 3커밋(+51/-15) UI Toolkit 전환 중. MeowBeat 3커밋(+1423/-1392) AdMob v11+IAP 대규모 업데이트. TODO: NumLink 0건, MeowBeat 3건(구매 저장 로직 미구현). Unity 6.4 출시(ECS 코어 통합, Project Auditor 내장). Unity 6.0 LTS 2026.10 종료 예정. PrimeTween(제로 할당) DOTween 대안으로 부상. C# 14 Extension Members 활용 가능.',
      },
      {
        title: '🔍 QA Tester — Debug.Log 273건, GameObject.Find 23건, 테스트 전무',
        description:
          'Debug.Log: NumLink 154건 + MeowBeat 119건 = 273건(프로덕션 위험). MeowBeat GameObject.Find 20건(CRITICAL), Input.GetKey 6건. NumLink GameObject.Find 3건, Input.GetKey 2건. 미커밋 .meta: MeowBeat 19건(빌드 깨짐 확정). 테스트: NumLink 1건(BoardDataTester), MeowBeat 0건. 자동화 테스트 전무.',
      },
      {
        title: '📢 Content Writer — ASO 의도 기반 전환, Poki 8MB 제한, 숏폼 주 7-14개',
        description:
          'Google Play Indie Games Accelerator 37개국 확대. ASO가 키워드 매칭에서 의미론적(의도 기반) 매칭으로 전환 — "number puzzle" 대신 "relaxing brain game" 식 롱테일 필요. Poki 초기 다운로드 8MB 이하 필수, SDK 이벤트 통합 필수. TikTok 참여율 3.15%로 숏폼 1순위 채널, 주 7-14개 클립 권장. 출시 12-18개월 전 커뮤니티 빌딩 시작 권장.',
      },
      {
        title: '⚙️ DevOps — 빌드 정상, Node 20 EOL 대응 완료, ESLint v10 대기',
        description:
          'dev-studio 빌드 성공(284ms, JS 471KB). 핵심 의존성(React 19, Vite 8, TS 6) 최신 유지. Node.js 20 EOL 4/30이나 CI v22로 대응 완료. ESLint v10 메이저 업데이트 출시 — 분기 내 마이그레이션 계획 권장. GitHub Actions 6/2 Node 24 강제 전환 예정, 서드파티 액션 호환성 사전 점검 필요.',
      },
      {
        title: '🎨 Art Director — Raw 미학 트렌드, 코지 게임 675%↑, AI 에셋 도구 다양화',
        description:
          '2026 UI 트렌드: Raw/Brutalist 미학(NumLink에 적합), 목적 있는 모션, 환경 통합형 UI. 코지 게임 Steam 태그 675% 성장(MeowBeat 기회). 앱 아이콘: 32px 인식성, 요소 1-2개 제한, A/B 테스트 필수. 스크린샷 첫 3장이 전환율 결정(최대 40% 향상). AI 에셋 도구: Scenario(스타일 학습), PixelLab(픽셀아트), Ludo.ai(애니메이션 스프라이트).',
      },
    ],
    meetingTitle: '4/1 데일리 스탠드업 회의 — MeowBeat 긴급 커밋 + NumLink 머지 판단 + 출시 전략',
    meetingSummary:
      '7명 에이전트 종합 회의. MeowBeat 미커밋 34파일 즉시 커밋이 최우선 과제. NumLink UI Toolkit 브랜치 머지 시점 확정 필요. 퍼즐 시장 블루오션 확인, 하이브리드 수익화 전략 채택. Debug.Log 273건 정리 + MeowBeat 코딩규칙 위반 20건 해소 계획 수립.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'MeowBeat 미커밋 34파일이 4일째 방치 중입니다. .meta 19건 포함으로 다른 환경에서 빌드 실패 확정적입니다. 오늘 최우선으로 커밋 정리해야 합니다. NumLink는 UI Toolkit 전환이 마무리 단계이고 오늘 아침 버그 3건을 수정했습니다. feature/uitoolkit → main 머지 시점을 이번 주 내로 확정하길 권고합니다. dev-studio는 Hardboiled Studio 리브랜딩 완료로 안정 상태입니다.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 시장 122억 달러 중 넘버/연결 퍼즐은 블루오션입니다. 직소 퍼즐이 힐링 트렌드로 21% 성장한 점을 참고해 NumLink도 "릴랙싱 퍼즐"로 포지셔닝하는 것을 권고합니다. MeowBeat의 리듬+힐링펫 매시업은 시장에서 독보적 포지션이며, 소셜 기능 강화 시 DAU 40% 증가 레퍼런스가 있습니다. 하이브리드 수익화(광고+IAP)가 업계 표준으로 ARPU 28% 우위를 보입니다.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink UI Toolkit 전환은 UXML/USS 기반 4화면이 완성됐고 레벨선택 버그 3건까지 수정 완료했습니다. MeowBeat는 AdMob v11+IAP 대규모 업데이트 커밋 후 미커밋 파일이 누적됐습니다. TODO 3건(구매 저장 로직) 처리가 필요합니다. Unity 6.4가 출시됐고 6.0 LTS가 10월 종료되므로 6.3 LTS 마이그레이션을 분기 내 검토해야 합니다. PrimeTween이 DOTween 대비 제로 할당으로 안전성 우위입니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'Debug.Log 273건이 프로덕션 빌드에서 성능 저하를 유발합니다. #if UNITY_EDITOR 래핑 또는 커스텀 Logger 도입이 시급합니다. MeowBeat의 GameObject.Find 20건은 CRITICAL — ServiceLocator 전환이 필수입니다. Input.GetKey 6건은 모바일에서 작동 불가하므로 InputAction 전환 필요합니다. 양 프로젝트 모두 자동화 테스트가 사실상 전무하여 핵심 Domain 로직 단위테스트 추가를 강력 권고합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO가 의도 기반 매칭으로 전환됐습니다. NumLink는 "number puzzle" 대신 "시간 때우기 좋은 퍼즐", "머리 쓰는 게임" 같은 의도 기반 롱테일 키워드로 재설계해야 합니다. Poki 제출 시 8MB 빌드 제한과 SDK 이벤트 통합이 필수입니다. 숏폼 마케팅은 TikTok 참여율 3.15%로 1순위 채널이며, 퍼즐 타임랩스/챌린지 영상을 주 7개 이상 발행하는 파이프라인 구축을 권고합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'dev-studio 인프라 상태 양호합니다. 빌드 284ms, 번들 471KB, CI 4회 연속 성공. Node.js 20 EOL이 이달 말(4/30)이지만 CI v22로 사전 대응 완료했습니다. ESLint v10 메이저 업데이트가 출시됐으나 급하지 않고 분기 내 계획 수립하면 됩니다. 6/2 GitHub Actions Node 24 강제 전환에 대비해 서드파티 액션 호환성 사전 테스트를 권장합니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026년 Raw/Brutalist 미학 트렌드가 NumLink의 미니멀 퍼즐에 최적입니다. 그리드 기반 레이아웃과 기하학적 서체로 장식 없이 구조로 말하는 인터페이스를 권고합니다. MeowBeat는 코지 게임 675% 성장 트렌드에 맞춰 코랄/피치/크림 따뜻한 팔레트를 유지하고, Scenario AI로 아트 바이블 기반 일관된 고양이 캐릭터 변형을 생성하는 것을 추천합니다. 앱 아이콘은 32px 인식성과 A/B 테스트가 필수입니다.',
      },
    ],
    decisions: [
      {
        title: '[P0] MeowBeat 미커밋 34파일 즉시 커밋',
        description:
          '.meta 19건 포함 34파일이 4일째 미커밋 상태. 다른 환경에서 빌드 실패 확정적이므로 오늘 최우선으로 커밋 정리 필요.',
      },
      {
        title: '[P1] NumLink UI Toolkit 브랜치 → main 머지 확정',
        description:
          'feature/uitoolkit 브랜치에서 UXML/USS 4화면 전환 완료, 버그 3건 수정. 이번 주 내 main 머지 시점 확정 후 진행.',
      },
      {
        title: '[P1] Debug.Log 273건 프로덕션 정리',
        description:
          'NumLink 154건 + MeowBeat 119건. #if UNITY_EDITOR 래핑 또는 커스텀 ConditionalLogger 도입으로 프로덕션 빌드에서 제거.',
      },
      {
        title: '[P2] MeowBeat 코딩규칙 위반 해소',
        description:
          'GameObject.Find 20건 → ServiceLocator 전환. Input.GetKey 6건 → InputAction 전환. 모바일 빌드 안정성 확보.',
      },
      {
        title: '[P2] ASO 의도 기반 키워드 재설계',
        description:
          '스토어 검색이 의미론적 매칭으로 전환됨. NumLink 키워드를 "relaxing brain game", "시간 때우기 퍼즐" 등 의도 기반 롱테일로 재설계.',
      },
      {
        title: '[P3] Unity 6.0→6.3 LTS 마이그레이션 검토',
        description:
          'Unity 6.0 LTS 2026.10 종료 예정. 6.3 LTS(2027.12까지 지원)로의 마이그레이션을 분기 내 검토 착수.',
      },
    ],
  },
  {
    id: '2026-03-31T21:00:00-threads-insight-techblog-w14',
    date: '2026-03-31',
    researchTitle:
      '📊 기술 블로그 인사이트 W14 — 크래프톤 게임 AI 전방위 투자 + 엔씨 VLM 한국어 1위 + 토스 Metric Review',
    researchSummary:
      '27개 국내 기술 블로그 자동 수집 첫 회차. 16건 신규 아티클 분석. 크래프톤이 CPC(Co-Playable Character)·KIRA AI 비서·프롬 스크래치 모델·CAIO 직책 신설까지 게임 AI 전방위 투자. 엔씨소프트 NC Research는 VARCO-VISION(한국어 VLM 1위)·멀티모달 검색·번역 평가 등 언어/비전 AI 연구 가속. 토스는 Metric Review로 데이터 기반 실행 문화 공유. 1인 인디 개발자 관점에서 CPC 기술의 캐주얼 게임 적용 가능성, 한국어 AI 모델 활용, 데이터 기반 밸런싱 전략 도출.',
    researchItems: [
      {
        title: '🥇 크래프톤 게임 AI 전방위 투자 — CPC·KIRA·프롬 스크래치 모델·CAIO 신설',
        description:
          'PUBG Ally로 세계 최초 CPC(Co-Playable Character) 공개 — AI가 실시간으로 유저와 함께 플레이하는 새로운 게임 패러다임. 개인용 AI 비서 KIRA + AI 에이전트 개선 터미너스 키라 기술 연달아 공개. GTC 2026에서 GPU 확보 후 자체 파운데이션 모델 "프롬 스크래치" 개발 선언. 이강욱 신임 CAIO(Chief AI Officer) 선임으로 AI 퍼스트 전환 가속. 게임사가 단순 AI 도구 사용을 넘어 자체 AI 모델/에이전트를 개발하는 단계로 진입.',
      },
      {
        title: '🥈 엔씨소프트 AI 연구 — VARCO-VISION 한국어 1위 + 멀티모달 검색 + 평가 기술',
        description:
          'NC Research에서 VARCO-VISION-14B 공개: 동급 오픈소스 VLM 중 한국어 성능 1위(HuggingFace 기준). 멀티모달 정보 검색(MMIR) 기술 트렌드 정리 — 텍스트+이미지 통합 검색이 게임 에셋 관리에 적용 가능. 기계 번역 품질 자동 평가 연구(게임 로컬라이제이션 품질 검증에 활용 가능). OffsetBias로 LLM 평가모델의 편향 문제 해결(EMNLP 2024). LLM 벤치마크 데이터셋 가이드로 모델 선택 시 참고 가치 높음.',
      },
      {
        title: '🥉 게임 IP 다각화 전략 — 하나의 IP에서 스핀오프·모바일·AI 캐릭터로 확장',
        description:
          'PUBG: 블라인드스팟(스팀 체험판) — 기존 IP에서 신작 스핀오프. PUBG Ally — 같은 IP에 AI CPC 캐릭터 추가. Dungeon Dive: 다크앤다커 모바일 — PC IP의 모바일 확장. 크래프톤 정글 게임랩 2기에서 스팀 6개 게임 정식 출시 — 대기업이 인디 팀을 육성하여 IP 다양성 확보. 1인 개발자도 하나의 핵심 게임 메커닉(NumberLink 퍼즐)을 다양한 플랫폼/모드로 확장하는 전략 참고.',
      },
      {
        title: '4️⃣ 토스 Metric Review — 데이터 기반 실행 문화',
        description:
          '토스 테크에서 "Metric Review, 실행을 이끌다" 공개. 핵심 지표를 정의하고 주기적 리뷰를 통해 팀 전체가 같은 방향으로 실행하는 문화. 게임 개발에 적용: DAU/세션길이/레벨클리어율/광고시청률 등 핵심 지표를 정의하고, 주간 데이터 리뷰로 밸런싱/UX 개선 의사결정. NumLink 출시 후 Google Play Console 데이터를 기반으로 Metric Review 체계 구축 필요.',
      },
      {
        title: '5️⃣ 수집 시스템 현황 — 27개 블로그 중 3개 소스 정상 수집',
        description:
          '첫 수집 결과: 크래프톤 블로그(5건), 크래프톤 AI(5건), NC Research(5건), 토스 테크(1건) = 총 16건. RSS 피드 기반 블로그(토스)가 가장 안정적. 스크래핑 기반 소스는 사이트 구조에 따라 성공률 편차 큼. 넷마블·데브시스터즈·카카오·네이버 등 RSS 피드가 있는 블로그의 selector 튜닝 필요. 다음 주까지 수집 성공률 50% 이상 목표.',
      },
    ],
    meetingTitle: '기술 블로그 주간 인사이트 W14 — 게임 AI 투자 급증 & 1인 개발자 시사점',
    meetingSummary:
      '국내 대기업 기술 블로그에서 게임 AI 투자가 폭발적으로 증가. 크래프톤은 AI를 게임플레이 핵심(CPC)에 통합하고 자체 모델까지 개발. 엔씨소프트는 한국어 특화 AI 모델로 차별화. 1인 인디 개발자도 이 흐름에서 실행 가능한 전략을 추출해야 함.',
    meetingItems: [
      { speaker: '📈 뜨거운 것', note: '게임 AI CPC(크래프톤 PUBG Ally), 한국어 VLM(엔씨 VARCO-VISION), 게임사 자체 파운데이션 모델 개발, AI 에이전트(KIRA)' },
      { speaker: '📉 식어가는 것', note: '단순 AI 도구 도입 단계 → 이제는 자체 모델 구축/게임플레이 통합 단계로 진화' },
      { speaker: '🆕 새로 떠오르는 것', note: 'CPC(AI가 유저와 함께 플레이), 멀티모달 검색(MMIR), CAIO 직책, 프롬 스크래치 게임 AI 모델' },
      { speaker: '🎯 1인 개발자 시사점', note: 'CPC 기술이 캐주얼까지 내려올 시점 주시 / VARCO-VISION으로 한국어 콘텐츠 자동 생성 검토 / Metric Review 체계를 NumLink 출시 후 구축' },
    ],
    decisions: [
      {
        title: 'CPC 기술 캐주얼 게임 적용 가능성 모니터링',
        description:
          '크래프톤의 CPC는 현재 PUBG급 대형 게임에 적용되었지만, 기술이 경량화되면 캐주얼/퍼즐에도 AI 동반자 시스템 도입 가능. Unity용 CPC SDK나 오픈소스 구현체 등장 시 MeowBeat에 테스트.',
      },
      {
        title: 'VARCO-VISION 한국어 게임 콘텐츠 생성 테스트',
        description:
          '엔씨소프트의 VARCO-VISION-14B가 한국어 VLM 1위. 게임 스크린샷 설명 자동 생성, 스토어 설명문 한국어 최적화, 유저 리뷰 분석 등에 활용 가능. HuggingFace에서 무료 접근 가능하므로 사이드 테스트 진행.',
      },
      {
        title: 'NumLink 출시 후 Metric Review 체계 구축',
        description:
          '토스의 Metric Review 방법론을 참고하여 NumLink 핵심 지표 정의: 일일 퍼즐 완료율, 평균 세션 시간, 레벨별 이탈률, 광고 시청률, 리텐션 D1/D7/D30. Google Play Console + Firebase Analytics 기반 주간 리뷰 루틴 설계.',
      },
      {
        title: 'RSS 수집 스크립트 selector 튜닝 — 수집률 50% 달성',
        description:
          '현재 27개 소스 중 4개만 정상 수집. 다음 주까지 넷마블(RSS), 데브시스터즈(RSS), 카카오(RSS), 네이버 D2(Atom), 우아한형제들(RSS) 등 RSS 피드 보유 블로그 우선 튜닝하여 수집 성공률 50% 이상 달성.',
      },
    ],
  },
  {
    id: '2026-03-31T09:00:00-daily-standup',
    date: '2026-03-31',
    researchTitle:
      'Pair 퍼즐 매출 363% 성장 + Vite 8 & TS 6 출시 + Google Play 수수료 인하 확정',
    researchSummary:
      '7명 에이전트 병렬 리서치 종합. MeowBeat 16일간 커밋 없이 64건 .meta 미커밋으로 빌드 깨짐 위험 긴급. NumLink feature/uitoolkit 3일 정체. Pair(연결) 퍼즐 서브장르 매출 363% 폭증으로 NumLink 장르 선택 적중. Vite 8.0(Rolldown 10-30x)·TypeScript 6.0 출시, Node.js 20 EOL D-30. Google Play 수수료 20% 인하(6/30 시행)+개발자 인증 필수화(9월). Plushcore/Soft 3D 아이콘 트렌드, SpriteFlow 등 AI 에셋 도구 신규 등장.',
    researchItems: [
      {
        title: 'MeowBeat 16일 커밋 공백+64건 .meta 미커밋, NumLink 3일 정체 — 미커밋 정리 최우선',
        description:
          'MeowBeat은 3/15 이후 16일간 커밋 없이 수정 27건+미추적 50건(총 64건 .meta 포함) 방치. MainScene.unity 씬 파일 미커밋으로 corruption 위험 매우 높음. NumLink은 feature/uitoolkit 브랜치에서 수정 4건+UIToolkit 폴더가 3일째 미커밋. dev-studio만 활발(어제 6커밋). NumLink MVP 약 60%, MeowBeat MVP 약 40%.',
      },
      {
        title: 'Pair(연결) 퍼즐 매출 363%↑ + Block Blast MAU 3억 + DDA 플러그인 Unity 통합 가능',
        description:
          'Pair(연결/매칭) 서브장르가 퍼즐 내 유일하게 다운로드+매출 동시 성장(매출 +47%, 하이브리드 캐주얼 내 363%↑). Block Blast DAU 7천만·MAU 3억·일매출 $584K. Poki MAU 1억, 연결 퍼즐 경쟁 공백 지속. DDA_Plugin_Unity(퍼지 로직/ONNX) 등 Unity용 적응형 난이도 플러그인 바로 적용 가능. Duet Cats 주간 매출 $470만 피크, 100곡+ 라이브러리.',
      },
      {
        title: 'NumLink UI Toolkit 전환 진행 중 + MeowBeat 코드 완료/에셋 미완 + Unity 6.4 ECS 코어 통합',
        description:
          'NumLink은 UGUI→UI Toolkit 전환 활발(GameManager/HUDManager/PuzzleManager에 UITK 우선 분기 추가). MeowBeat은 AdMob v11+IAP 구현 완료, 씬/에셋 정리 단계. TODO 기술부채 NumLink 5건, MeowBeat 0건. Unity 6.4 출시(ECS 코어 통합, Project Auditor 내장). Unity CoreCLR 6.8 목표.',
      },
      {
        title: 'Debug.Log 202건 + 코딩 규칙 위반 6건 + MeowBeat .meta 64건 미커밋 — 품질 리스크 상',
        description:
          'NumLink Debug.Log 149건(23파일), MeowBeat 53건(22파일). NumLink 코딩 규칙 위반 5건(Input.GetKeyDown 2건, FindObjectOfType 1건, GameObject.Find 2건), MeowBeat 1건. MeowBeat .meta 64건 미커밋으로 다른 환경에서 Missing Reference 대량 발생 위험. 양 프로젝트 자동화 테스트 전무.',
      },
      {
        title: 'Google Play 수수료 20% 인하(6/30)+개발자 인증 필수화(9월) + 숏폼 74% 비디오 마케팅',
        description:
          'Google Play 수수료 20%로 인하(한국/일본 12/31 시행). 개발자 인증 9월부터 필수. AAB 크기 150→200MB 증가. 게임 마케팅 크리에이티브 74.1%가 비디오, 58%가 30초 미만 숏폼. Paid Organic 모델(오가닉 게시→$200 부스팅). Poki WebGL 초기 다운로드 8MB 이하 목표, 웹 독점권 요구.',
      },
      {
        title: 'Vite 8.0(Rolldown)+TS 6.0 출시 + Node.js 20 EOL D-30 + CI Node 버전 불일치',
        description:
          'Vite 8.0.3 출시(3/12, Rolldown 빌드 10-30x). TypeScript 6.0.2 출시(3/24, strict 기본 활성화). Node.js 20 EOL 4/30(D-30), CI가 node-version:20 고정으로 즉시 전환 필요. 로컬은 Node 24, CI만 불일치. outdated 패키지 14개(메이저 7개). 빌드 정상(2.2초, 440KB JS).',
      },
      {
        title: 'Plushcore/Soft 3D 아이콘 트렌드 + AI 에셋 도구(SpriteFlow/PixelLab) 신규 등장',
        description:
          'Soft 3D+Plushcore(파스텔+통통한 질감)가 2026 앱 아이콘 주류. 마스코트 아이콘+Variable Icon(다크/라이트 변환) 트렌드. SpriteFlow(레퍼런스 1장→무한 변형), PixelLab(컨셉→방향별 회전 뷰 자동생성) 등 AI 스프라이트 도구 신규. 스토어 스크린샷 첫 3장이 전환율 결정. Cozy Game 시장 675% 성장.',
      },
    ],
    meetingTitle: '2026-03-31 데일리 스탠드업: MeowBeat 미커밋 긴급 + Pair 퍼즐 블루오션 확인 + Vite 8/TS 6 메이저 출시',
    meetingSummary:
      'MeowBeat 16일간 커밋 공백+64건 .meta 미커밋으로 빌드 깨짐 위험 최우선 해결. NumLink feature/uitoolkit 3일 정체도 커밋 필요. Pair 퍼즐 서브장르 매출 363%↑로 NumLink 장르 선택 적중 재확인. Vite 8.0+TS 6.0 출시로 메이저 업그레이드 검토 시작, Node.js 20 EOL D-30 CI 전환 시급. Google Play 수수료 20% 인하+개발자 인증 필수화 대응. Plushcore 스타일 아이콘+AI 에셋 파이프라인 구축 착수.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'MeowBeat이 3/15 이후 16일간 커밋 없이 64건 파일이 미커밋 상태입니다. MainScene.unity 씬 파일 포함으로 corruption 위험이 극도로 높습니다. NumLink도 feature/uitoolkit 브랜치에서 3일 정체 중입니다. MeowBeat MVP 40%, NumLink MVP 60%로 양쪽 모두 에셋/UI 작업이 병목입니다. 오늘 반드시 양 프로젝트 미커밋 파일을 분할 커밋해야 합니다.',
      },
      {
        speaker: 'Game Designer',
        note: 'Pair(연결) 퍼즐 서브장르가 하이브리드 캐주얼 내 매출 363% 폭증하며 퍼즐 시장에서 가장 성장성 높은 카테고리로 확인되었습니다. NumLink의 장르 선택이 정확히 적중했습니다. Block Blast MAU 3억은 단순 코어 루프의 힘을 증명하므로 NumLink도 복잡도를 높이지 말아야 합니다. DDA_Plugin_Unity 등 Unity용 적응형 난이도 플러그인이 바로 적용 가능하며, MVP 이후 도입을 권장합니다.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink은 UI Toolkit 전환이 활발하게 진행 중이며, GameManager/HUDManager/PuzzleManager에 UITK 우선+UGUI 폴백 패턴을 적용했습니다. 미커밋 4파일(+65줄)이 3일째 방치 중이라 즉시 커밋 필요합니다. MeowBeat은 AdMob v11+IAP 구현이 완료되어 코드는 거의 끝났고 에셋/UI가 남았습니다. Unity 6.4가 출시되어 ECS 코어 통합+Project Auditor 내장이 포함되었고, CoreCLR은 6.8 목표입니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'MeowBeat .meta 64건 미커밋이 가장 심각합니다. 다른 환경에서 프로젝트를 열면 Missing Reference가 대량 발생합니다. Debug.Log가 NumLink 149건+MeowBeat 53건=총 202건 잔존합니다. NumLink에서 Input.GetKeyDown 2건(모바일 빌드 시 동작 불가), FindObjectOfType/GameObject.Find 3건의 코딩 규칙 위반이 있습니다. 양 프로젝트 자동화 테스트가 전무한 상태입니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'Google Play 수수료가 20%로 인하되며 6/30 시행, 한국/일본은 12/31입니다. 개발자 인증이 9월부터 필수화되므로 즉시 확인이 필요합니다. 게임 마케팅의 74%가 비디오, 58%가 30초 미만 숏폼입니다. Poki는 WebGL 8MB 이하+웹 독점권을 요구하며, Playtest 기능으로 실제 유저 피드백을 빠르게 수집할 수 있습니다. ASO는 롱테일 키워드("number link", "connect numbers") 차별화가 필수입니다.',
      },
      {
        speaker: 'DevOps',
        note: 'Node.js 20 EOL이 D-30(4/30)으로 CI의 node-version:20을 22 이상으로 즉시 전환해야 합니다. 로컬은 이미 Node 24입니다. Vite 8.0.3(Rolldown 10-30x)과 TypeScript 6.0.2가 출시되었으나 breaking changes가 있어 별도 브랜치 테스트가 필요합니다. outdated 패키지 14개 중 마이너/패치 7개는 안전하게 적용 가능합니다. 현재 빌드는 정상(2.2초, JS 440KB/gzip 139KB)입니다.',
      },
      {
        speaker: 'Art Director',
        note: 'Plushcore(파스텔+통통한 질감)와 Soft 3D가 2026 앱 아이콘 주류입니다. NumLink은 Soft 3D+Bold Geometric 하이브리드로 숫자를 부드러운 3D로, 연결선은 기하학적 대비로 표현하면 좋겠습니다. MeowBeat은 마스코트+Plushcore 스타일로 코랄/피치 컬러를 사용합니다. SpriteFlow와 PixelLab 등 AI 에셋 도구가 새로 등장하여 레퍼런스 1장에서 무한 스프라이트 변형이 가능합니다. Cozy Game 시장이 675% 성장하여 MeowBeat의 방향성이 시장과 부합합니다.',
      },
    ],
    decisions: [
      {
        title: '[긴급] MeowBeat 64건 + NumLink 미커밋 즉시 분할 커밋',
        description:
          'MeowBeat 64건(.meta 44건+수정 15건+삭제 5건) 16일째 방치로 빌드 깨짐 위험. NumLink UI Toolkit 전환 4파일 3일째 미커밋. 양쪽 모두 오늘 의미 단위 분할 커밋으로 안전장치 확보.',
      },
      {
        title: '[긴급] CI Node.js 20→22 전환 (EOL D-30)',
        description:
          'Node.js 20 EOL 4/30까지 30일. deploy-pages.yml의 node-version을 20에서 22 LTS로 변경. 로컬(Node 24)과 CI 버전 불일치도 해소.',
      },
      {
        title: 'Pair 퍼즐 매출 363%↑ 확인 — NumLink Poki WebGL 출시 가속',
        description:
          'Pair(연결) 퍼즐이 하이브리드 캐주얼 내 매출 363% 폭증. Poki에 연결 퍼즐 경쟁 공백 지속. Phase 5 완료 후 Phase 6(킥 구현)→Phase 7(Poki 배포) 최단 경로로 진행.',
      },
      {
        title: 'Vite 8/TS 6 메이저 업그레이드는 별도 스프린트에서 진행',
        description:
          'Vite 8.0(Rolldown)+TS 6.0 출시되었으나 breaking changes 있음. 마이너/패치(React 19.2.4, react-router-dom 등)는 이번 주 안전 적용, 메이저는 별도 브랜치 테스트 후 진행.',
      },
      {
        title: 'MeowBeat AI 에셋 파이프라인 구축 착수',
        description:
          'MeowBeat MVP 병목이 에셋/UI(Sprint 2 디자인 17%). SpriteFlow/PixelLab 등 AI 에셋 도구+Plushcore 스타일로 고양이 캐릭터 파이프라인 구축. Midjourney 컨셉→LoRA 학습→대량 생산 3단계.',
      },
      {
        title: 'Google Play 개발자 인증 상태 즉시 확인',
        description:
          '9월부터 미인증 개발자 앱 설치 제한. 수수료 20% 인하(한국 12/31)를 반영한 가격 전략도 수립 필요.',
      },
    ],
  },
  {
    id: '2026-03-30T09:00:00-daily-standup',
    date: '2026-03-30',
    researchTitle:
      'Poki MAU 1억 돌파 블루오션 + Google Play Game Trials 도입 + Unity 6.4 출시',
    researchSummary:
      '7명 에이전트 병렬 리서치 종합. NumLink·MeowBeat 양쪽 2일간 커밋 0건으로 미커밋 파일 누적 심각(MeowBeat 34개, NumLink 12개). Poki MAU 1억 돌파+연결 퍼즐 공백으로 NumLink WebGL 블루오션 기회 지속. Google Play Game Trials 기능 신규 도입으로 체험판 내장 가능. AI 적응형 난이도 도입 시 리텐션 15-25% 개선 데이터. Node.js 20 EOL 4/30 임박(31일). Unity 6.4 출시(ECS 코어 통합). Debug.Log 285건 잔존(NumLink 149+MeowBeat 136). Leonardo AI Phoenix 2.0으로 캐릭터 에셋 파이프라인 효율화 가능.',
    researchItems: [
      {
        title: '3개 프로젝트 Git 상태: NumLink·MeowBeat 2일간 커밋 0건, MeowBeat 34파일 미커밋 3일째',
        description:
          'NumLink은 feature/uitoolkit 브랜치에서 4개 수정+8개 미추적 파일 미커밋. MeowBeat은 14개 수정/삭제+20개 미추적=34파일 미커밋 3일째 방치로 데이터 손실 위험 긴급. dev-studio만 15건 커밋으로 활발. NumLink Phase 5 Singleton→ServiceLocator 3건 todo, MeowBeat Sprint 2(디자인) 17%로 MVP 병목.',
      },
      {
        title: 'Block Blast DAU 7천만 독주 + Poki MAU 1억 돌파 + AI 적응형 난이도 리텐션 15-25%↑',
        description:
          '퍼즐 시장 Block Blast DAU 7천만·일 매출 $584K 독주. AI 적응형 난이도 도입 시 매출 71%↑, 리텐션 15-25%↑ 데이터. Poki MAU 1억 돌파, 2026년 3월 역대 최강 월. 연결/링크 퍼즐 경쟁 공백으로 NumLink 진입 기회. Duet Cats(리듬+고양이+먹이주기)가 MeowBeat 직접 경쟁작.',
      },
      {
        title: 'NumLink UI 리디자인+스테이지 시스템 완료 + UI Toolkit UXML 5개 준비 + Unity 6.4 ECS 코어 통합',
        description:
          'NumLink 지난 주 25커밋으로 레벨선택 UI 스테이지 시스템 전면 개편. UI Toolkit UXML 레이아웃 5개+컨트롤러 6개 준비되어 있으나 UGUI와 병행 운영 중. TODO 기술부채 5건. Unity 6.4 출시로 ECS 코어 패키지 승격, Project Auditor 기본 탑재, URP 커스텀 렌더 패스 지원.',
      },
      {
        title: 'Debug.Log 285건 잔존 + MeowBeat .meta 삭제 3건 방치 + 자동화 테스트 전무',
        description:
          'NumLink 23파일 149건, MeowBeat 35파일 136건 Debug.Log 잔존으로 릴리스 빌드 성능 영향. MeowBeat Input/Item/SaveLoad .meta 삭제 상태 git 방치로 클론 시 임포트 에러 유발. PuzzleManager FindObjectOfType+GameObject.Find 3건 코딩 규칙 위반. 양 프로젝트 자동화 테스트 전무.',
      },
      {
        title: 'Google Play 수수료 20% 인하 + Game Trials 도입 + 숏폼 Paid Organic 모델 + CSL 활용',
        description:
          'Google Play 수수료 20% 인하(6/30 시행)+Game Trials 체험판 내장 기능 신규 도입. 숏폼 주 7-14개 클립+자연 반응 좋은 영상에 $100-200 부스팅하는 Paid Organic 모델이 인디 표준. Custom Store Listings으로 타겟별 스토어 페이지 차별화. ASO는 AI 기반 사용자 의도 분석으로 진화.',
      },
      {
        title: 'Node.js 20 EOL 4/30 임박 + GitHub Actions v4→v6 + Vite 8/TS 6/ESLint 10 메이저 대기',
        description:
          'Node.js 20 EOL까지 31일, Node 22 LTS 전환 시급. actions/checkout v4→v5/v6+6/2 Node 24 강제 전환. Vite 7→8(Rolldown 빌드 10-30x), TypeScript 5→6(Go 기반 7.0 준비), ESLint 9→10 메이저 업그레이드 대기. React 19.1.1 최신.',
      },
      {
        title: 'Soft 3D/Plushcore 아이콘 + Leonardo AI Phoenix 2.0 캐릭터 파이프라인 + 세로형 스크린샷 96%',
        description:
          '2026 앱 아이콘: Soft 3D/Plushcore+단일 오브젝트 집중이 주류. Leonardo AI Phoenix 2.0 LoRA+Consistent Character Engine으로 MeowBeat 고양이 캐릭터 일관된 포즈 일괄 생성 가능(기존 Midjourney→SD 대비 효율↑). 스크린샷 세로형 96% 표준, 처음 3장이 전환율 90% 결정. Liquid Glass+Modern Skeuomorphism UI 트렌드.',
      },
    ],
    meetingTitle: '2026-03-30 데일리 스탠드업: 미커밋 긴급 정리 + Poki 블루오션 선점 + Node.js EOL 대응',
    meetingSummary:
      'MeowBeat 34파일 미커밋 3일째 방치로 즉시 정리 최우선. NumLink UI Toolkit 전환 안정화 후 UGUI 제거 일정 확정 필요. Poki MAU 1억 돌파+연결 퍼즐 공백으로 NumLink WebGL 우선 출시 전략 재확인. Google Play Game Trials+수수료 20% 인하로 출시 환경 개선. Node.js 20 EOL 31일 남아 즉시 전환. Debug.Log 285건 릴리스 전 정리. Leonardo AI Phoenix 2.0으로 MeowBeat 에셋 파이프라인 전환 검토.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '2일간 NumLink과 MeowBeat 양쪽 커밋이 0건입니다. dev-studio만 15건으로 웹사이트 작업에 집중되었습니다. MeowBeat은 34개 미커밋 파일이 3일째 방치 중이고 MainScene.unity 손실 시 복구 불가하므로 오늘 반드시 분할 커밋해야 합니다. NumLink은 Phase 5 Singleton→ServiceLocator 전환 3건이 남았고, MeowBeat Sprint 2(디자인)가 17%로 MVP 컷라인의 병목입니다.',
      },
      {
        speaker: 'Game Designer',
        note: 'Poki가 MAU 1억을 돌파하며 2026년 3월이 역대 최강 월로 평가됩니다. 연결/링크 퍼즐이 여전히 경쟁 공백이므로 NumLink WebGL 출시 우선순위를 유지해야 합니다. AI 적응형 난이도가 리텐션 15-25% 개선 데이터를 보여주고 있어 MVP 이후 반드시 도입해야 합니다. Duet Cats(리듬+고양이+먹이주기)가 MeowBeat 직접 경쟁작으로 확인되었고, 카페경영+캣스타그램 메타게임 깊이에서 차별화해야 합니다.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink에서 지난 주 25커밋으로 레벨선택 UI 스테이지 시스템을 전면 개편했고, UI Toolkit UXML 5개+컨트롤러 6개가 준비되어 있으나 UGUI와 병행 운영 중입니다. 전환 완료 시점을 이번 스프린트 내 결정해야 합니다. Unity 6.4가 출시되어 ECS 코어 통합, Project Auditor 기본 탑재가 포함되었습니다. MeowBeat은 AdMob v11+IAP 통합 후 빌드 안정성 실기기 검증이 필요합니다.',
      },
      {
        speaker: 'QA Tester',
        note: '심각한 컴파일 에러는 없으나 품질 부채가 누적 중입니다. Debug.Log가 NumLink 149건+MeowBeat 136건=총 285건 잔존하여 릴리스 빌드 성능에 영향을 줍니다. MeowBeat의 Input/Item/SaveLoad .meta 3건이 삭제 상태로 git에 방치되어 클론 시 임포트 에러를 유발합니다. PuzzleManager의 FindObjectOfType과 GameObject.Find 3건은 코딩 규칙 위반이며, 양 프로젝트 자동화 테스트가 전무한 상태입니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'Google Play가 Game Trials 기능을 새로 도입하여 유료 게임 체험판 내장이 가능해졌습니다. 숏폼 마케팅은 주 7-14개 클립 제작 후 자연 반응 좋은 영상에 $100-200 부스팅하는 Paid Organic 모델이 인디 표준입니다. Custom Store Listings으로 타겟별 스토어 페이지 최소 3개 변형을 준비해야 하며, ASO는 키워드 나열에서 자연스러운 문장형 설명으로 전환해야 합니다.',
      },
      {
        speaker: 'DevOps',
        note: 'Node.js 20 EOL이 4월 30일로 31일 남았습니다. dev-studio 워크플로우의 node-version을 20에서 22 LTS로 즉시 전환해야 합니다. actions/checkout v4→v5/v6 업그레이드도 필요하며, 6월 2일부터 GitHub Actions가 Node 24를 강제합니다. 빌드 도구는 Vite 8(Rolldown 10-30x 빠름), TypeScript 6, ESLint 10 메이저 업그레이드가 대기 중이나 별도 브랜치 테스트가 필요합니다.',
      },
      {
        speaker: 'Art Director',
        note: 'NumLink 앱 아이콘은 Soft 3D/Plushcore 스타일로 숫자 하나를 부드럽고 촉감 있는 질감으로 표현하면 2026년 트렌드와 정확히 부합합니다. MeowBeat 고양이 캐릭터는 Leonardo AI Phoenix 2.0의 LoRA+Consistent Character Engine으로 전환하면 참조 이미지 15-20장에서 수십 장의 일관된 포즈를 한 번에 생성할 수 있어 기존 파이프라인 대비 대폭 효율화됩니다. 스크린샷은 세로형으로 Apple은 감성형, Google Play는 기능 시연형으로 차별화해야 합니다.',
      },
    ],
    decisions: [
      {
        title: '[긴급] MeowBeat 34파일 + NumLink 12파일 미커밋 즉시 정리',
        description:
          'MeowBeat 34개 파일 3일째 방치로 MainScene.unity 손실 위험. NumLink UI Toolkit 전환 관련 12파일도 미커밋. 양쪽 모두 의미 단위 분할 커밋으로 오늘 반드시 안전장치 확보. .meta 삭제 3건은 git rm으로 정식 제거.',
      },
      {
        title: 'NumLink Poki WebGL 우선 출시 전략 유지 — MAU 1억 블루오션 선점',
        description:
          'Poki MAU 1억 돌파, 2026년 3월 역대 최강 월. 연결/링크 퍼즐 경쟁 공백 지속 확인. WebGL 빌드 테스트 후 Poki 제출 준비. AI 적응형 난이도는 MVP 이후 D1 리텐션 31.85% 벤치마크 목표로 스펙 초안 작성.',
      },
      {
        title: 'Node.js 20→22 LTS 전환 + GitHub Actions v6 업그레이드 — EOL 31일',
        description:
          'Node.js 20 EOL 4/30 임박. dev-studio deploy-pages.yml node-version 20→22, actions/checkout v4→v6 업그레이드. Vite 8/TS 6은 별도 브랜치 테스트 후 진행.',
      },
      {
        title: 'Debug.Log 285건 정리 스프린트 + 코딩 규칙 위반 수정',
        description:
          'NumLink PuzzleManager(23건), PreGeneratedBoardManager(26건) 우선 정리. 최소 Conditional attribute 또는 로그 래퍼 전환. FindObjectOfType/GameObject.Find 코딩 규칙 위반 수정. 릴리스 전 필수.',
      },
      {
        title: 'MeowBeat AI 에셋 파이프라인 Leonardo Phoenix 2.0 전환 검토',
        description:
          'Leonardo AI Phoenix 2.0 LoRA+Consistent Character Engine으로 고양이 캐릭터 스타일 고정 후 포즈/표정 일괄 생성. 기존 Midjourney→SD+ControlNet 대비 효율↑. NumLink 앱 아이콘은 Soft 3D/Plushcore 스타일로 착수.',
      },
    ],
  },
  {
    id: '2026-03-29T09:00:00-daily-standup',
    date: '2026-03-29',
    researchTitle:
      'NumLink UI Toolkit 전환 착수 + Poki 블루오션 분석 + GitHub Actions v6',
    researchSummary:
      '7명 에이전트 병렬 리서치 종합. NumLink에서 UGUI→UI Toolkit 전환 작업이 본격 시작되어 6개 신규 파일 생성, 이중 경로(UIToolkit 우선+UGUI 폴백) 패턴 적용. Poki WebGL 플랫폼에 넘버링크/플로우 계열 퍼즐 부재로 블루오션 기회 확인. Google Play가 Epic 합의로 수수료 20%로 인하(6/30 적용). GitHub Actions checkout/setup-node v6 출시, Node 24 강제 전환 6/2 확정. 퍼즐 시장 CAGR 6.02% 성장, 일일 스트릭 상위 69% 채택. YouTube Shorts 참여율 5.91%로 숏폼 선두. 소프트 3D/플러시코어 아이콘 트렌드 주류화.',
    researchItems: [
      {
        title: 'NumLink UI Toolkit 전환 착수 — 6파일 신규, 이중 경로 패턴 적용',
        description:
          'NumLink에서 UGUI→UI Toolkit 전환이 본격 시작. UIToolkitManager, GameOverController, StageClearController, InGameHUDController, LevelSelectController, UIScreenBase 6개 파일 신규 생성. GameManager/HUDManager/PuzzleManager/AutoSetup 4개 파일에 "UIToolkit 우선, UGUI 폴백" 이중 경로 패턴 적용. Phase 5 진행률 70%.',
      },
      {
        title: '퍼즐 시장 CAGR 6.02% + Poki 넘버링크 블루오션 + Duet Ducks 경쟁작 분석',
        description:
          '퍼즐 게임 시장 2024년 $62.8B→2033년 $98.6B 전망. 상위 퍼즐 69%가 일일 스트릭 채택, 멀티플레이어 퍼즐 YoY 22% 성장. Poki 상위권에 넘버링크/플로우 계열 부재로 NumLink 블루오션 기회. Duet Ducks(Mobirix, 리듬+오리수집, 120곡)가 MeowBeat 직접 경쟁작이나 메타게임 깊이에서 차별화 가능.',
      },
      {
        title: 'Unity 6.3 UI Toolkit 강화 + Vite 8.0.3 + TypeScript 6.0 출시',
        description:
          'Unity 6.3 LTS에서 UI Toolkit 커스텀 셰이더/포스트프로세싱/SVG 지원 강화. Vite 8.0.3 Rolldown 번들러 통합(빌드 10-30x). TypeScript 6.0.2, ESLint 10.1.0 메이저 업데이트 가능. React 19.2.4 마이너 업데이트 안전.',
      },
      {
        title: 'UIToolkit/UGUI 이중 구조 회귀 리스크 + MeowBeat .meta 삭제 3건 + 자동화 테스트 0건',
        description:
          'NumLink UIToolkit/UGUI 이중 구조에서 한쪽만 초기화되는 엣지 케이스 가능. LevelSelectUI cachedCleared null 시 전 스테이지 잠금 리스크. MeowBeat Input.meta/Item.meta/SaveLoad.meta 삭제로 참조 깨짐 가능. _Recovery 씬 백업 4개(2MB) 정리 필요. 양 프로젝트 자동화 테스트 전무.',
      },
      {
        title: 'Google Play 수수료 20% 인하(Epic 합의) + ASO 롱테일 키워드 + YouTube Shorts 참여율 선두',
        description:
          'Google Play가 Epic 합의로 수수료 20%로 인하, 6/30부터 적용. 대체 결제 허용 + 서드파티 스토어 등록 프로그램 도입. ASO는 롱테일 키워드+메타데이터 최적화가 핵심. YouTube Shorts 참여율 5.91%(일 2000억 뷰)로 숏폼 선두, Instagram Reels 도달률 30.81%.',
      },
      {
        title: 'GitHub Actions checkout/setup-node v6 출시 + Node 24 강제 6/2 + React/Vite 메이저 업데이트',
        description:
          'actions/checkout v6, actions/setup-node v6 출시. Node.js 20 EOL 2026년 4월, 6/2부터 Node 24 강제 전환. dev-studio deploy-pages.yml v4→v6 업그레이드 필요. Vite 7→8, TypeScript 5→6, ESLint 9→10 메이저 업데이트 가능하나 별도 브랜치 테스트 권장.',
      },
      {
        title: '소프트 3D/플러시코어 아이콘 트렌드 + AI 에셋 워크플로우(Midjourney→SD→Real-ESRGAN)',
        description:
          '2026 앱 아이콘: 마스코트 중심 + 소프트 3D/플러시코어 스타일 주류. 아이콘 리디자인만으로 설치 21.5% 증가 사례. 인디 에셋 제작: Midjourney 컨셉→Stable Diffusion+ControlNet 일관성→Real-ESRGAN 업스케일 워크플로우 2026 표준. 스토어 스크린샷 처음 3장이 전환율 90% 결정.',
      },
    ],
    meetingTitle: '2026-03-29 데일리 스탠드업: NumLink UI Toolkit 전환 + Poki 블루오션 + Google Play 수수료 인하',
    meetingSummary:
      'NumLink UGUI→UI Toolkit 전환 6파일 신규 확인, 이중 경로 안정화 후 UGUI 폴백 제거 필요. Poki에 넘버링크 계열 부재로 블루오션 기회, WebGL 우선 출시 검토 결정. Google Play 수수료 20% 인하(6/30)로 수익 구조 개선. GitHub Actions v6+Node 24 이번 주 업그레이드. MeowBeat 미커밋 파일 지속 — 즉시 정리 재권고. 소프트 3D 아이콘+AI 에셋 워크플로우로 에셋 제작 착수 권장.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink는 Phase 5(아키텍처 마이그레이션) 70% 진행 중이며, UI Toolkit 전환이 본격 시작되었습니다. 4개 핵심 매니저 파일 수정이 미커밋 상태로 데이터 손실 위험이 있어 즉시 커밋이 필요합니다. MeowBeat도 ~34개 파일 미커밋 지속 중. 우선순위: NumLink UI Toolkit 안정화 > 미커밋 정리 > Poki WebGL 출시 검토.',
      },
      {
        speaker: 'Game Designer',
        note: 'Poki WebGL 상위권에 넘버링크/플로우 계열 퍼즐이 전무하여 NumLink에게 블루오션 기회입니다. 일일 스트릭(상위 69% 채택)+멀티플레이어(YoY 22% 성장)가 리텐션 핵심이므로 MVP 이후 반드시 도입해야 합니다. Duet Ducks(리듬+오리수집)가 MeowBeat 직접 경쟁작이나, 카페경영+캣스타그램 메타게임 깊이에서 2단계 우위 확보 가능합니다.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink에서 UGUI→UI Toolkit 전환이 시작되어 UIToolkitManager 외 5개 컨트롤러가 신규 생성되었습니다. "UIToolkit 우선, UGUI 폴백" 이중 경로 패턴으로 안전하게 전환 중이나, 안정화 후 UGUI 폴백 코드 일괄 제거가 필요합니다. Unity 6.3 LTS에서 UI Toolkit이 대폭 강화(커스텀 셰이더, SVG 지원)되어 전환 타이밍이 적절합니다. Undo 기능 미구현(Debug.Log만 존재)이 중간 우선순위 기술 부채입니다.',
      },
      {
        speaker: 'QA Tester',
        note: '컴파일 블로킹 이슈는 없으나, UIToolkit/UGUI 이중 구조에서 한쪽만 초기화되는 엣지 케이스가 회귀 리스크입니다. LevelSelectUI에서 첫 플레이 시 cachedCleared null이면 전 스테이지가 잠길 수 있어 수동 QA 필요합니다. MeowBeat는 삭제된 .meta 3건(Input/Item/SaveLoad)의 대응 폴더 확인이 P0입니다. 양 프로젝트 자동화 테스트 전무 상태 지속.',
      },
      {
        speaker: 'Content Writer',
        note: 'Google Play가 Epic 합의로 수수료를 30%에서 20%로 인하하여 인디 개발자 수익 구조가 개선됩니다(6/30 적용). ASO는 롱테일 키워드 3개 이상 조합이 전환율 핵심이며, 스크린샷 A/B 테스트는 상위 57%가 실행 중입니다. 숏폼 마케팅은 YouTube Shorts(참여율 5.91%, 일 2000억 뷰)가 선두이며, 15-35초 길이에 70% 이상 완주율이 핵심 지표입니다.',
      },
      {
        speaker: 'DevOps',
        note: 'GitHub Actions checkout v6, setup-node v6이 출시되었고 Node.js 24 강제 전환이 6/2로 확정되었습니다. dev-studio deploy-pages.yml에서 v4→v6 업그레이드가 시급합니다. 의존성 현황: Vite 8.0.3, TypeScript 6.0.2, ESLint 10.1.0 메이저 업데이트 가능하나 별도 브랜치 테스트 필요. React 19.2.4, react-router-dom 7.13.2는 안전한 마이너/패치 업데이트입니다.',
      },
      {
        speaker: 'Art Director',
        note: '2026 앱 아이콘 트렌드는 마스코트 중심 + 소프트 3D/플러시코어이며, 아이콘 리디자인만으로 설치 21.5% 증가 사례가 있습니다. NumLink는 미니멀+높은 대비로 숫자 연결 메카닉을 즉시 전달하는 아이콘이 필요합니다. MeowBeat 에셋은 Midjourney 컨셉→SD+ControlNet 일관성→Real-ESRGAN 업스케일 워크플로우를 권장합니다. 스토어 스크린샷 처음 3장이 전환율의 90%를 결정하므로 NumLink 5장 구성안 즉시 착수해야 합니다.',
      },
    ],
    decisions: [
      {
        title: 'NumLink UI Toolkit 전환 안정화 — UGUI 폴백 코드 관리 계획 수립',
        description:
          '이중 경로 패턴으로 안전하게 전환 중이나, 안정화 기준(전 화면 UIToolkit 정상 동작 확인) 충족 후 UGUI 폴백 코드 일괄 제거 예정. Undo 기능 구현도 병행.',
      },
      {
        title: 'NumLink Poki WebGL 우선 출시 검토 — 블루오션 선점',
        description:
          'Poki 상위권에 넘버링크/플로우 계열 부재 확인. WebGL 빌드 테스트 후 Poki 제출 가능성 평가. 보상형 비디오 광고 기반 수익화.',
      },
      {
        title: 'MeowBeat 미커밋 파일 즉시 정리 + NumLink 4파일 커밋',
        description:
          'MeowBeat ~34개 파일, NumLink 핵심 매니저 4개 + UIToolkit 6파일 미커밋. 양쪽 모두 분할 커밋으로 즉시 안전장치 확보.',
      },
      {
        title: 'dev-studio GitHub Actions v6 + Node 24 업그레이드 — 6/2 데드라인',
        description:
          'checkout v4→v6, setup-node v4→v6, node-version 20→24 업그레이드. React 19.2.4 마이너 업데이트 동시 진행. Vite 8/TS 6은 별도 브랜치.',
      },
      {
        title: 'NumLink 스토어 에셋 제작 착수 — 스크린샷 5장 + 앱 아이콘',
        description:
          '처음 3장이 전환율 90% 결정. 1장 게임플레이, 2장 클리어 보상, 3장 난이도 선택 구성. 미니멀+높은 대비 아이콘. Google Play 수수료 20% 인하(6/30) 전 출시 목표.',
      },
    ],
  },
  {
    id: '2026-03-28T09:00:00-daily-standup',
    date: '2026-03-28',
    researchTitle:
      'NumLink 스테이지 시스템 개선 + deploy-pages v5 출시 + Vite 8 정식 릴리즈',
    researchSummary:
      '7명 에이전트 병렬 리서치 종합. NumLink 스테이지 시스템 도입·UI 수정 10커밋 완료, LevelSelectUI 5커밋 집중으로 회귀 리스크. MeowBeat 84파일(56개 미추적) 유실 위험 긴급. 퍼즐 시장 일일 챌린지 리텐션 40% 증가·동적 리더보드 표준화. 리듬 게임 CAGR 9.1% 성장, Duck Town 경쟁작 주목. Vite 8.0 Rolldown 정식 출시(3/12). deploy-pages v5+checkout v5 Node 24 대응 완료(3/25). TikTok 도달 급락으로 Reels·Shorts 전환 필수. Raw Aesthetic·Brutalist UI 트렌드 주류화.',
    researchItems: [
      {
        title: 'NumLink 스테이지 시스템 10커밋 완료 — 비코드 출시 작업 6건 잔존',
        description:
          'NumLink Sprint 1-5 + 게임 흐름 버그 수정 완료, 코드 측면 출시 준비 상태. 남은 6건(개인정보처리방침, 스토어 설명문, 스크린샷, AdMob 설정, APK 빌드, 레벨 확장)은 전부 비코드 작업. MeowBeat Phase 2 코드 완료이나 에셋(Suno 곡, AI 아트, 프리팹)이 전면 블로커. NumLink 출시 우선 집중 결정.',
      },
      {
        title: '2026 퍼즐/리듬 게임 시장: 일일 챌린지 리텐션 40% 증가 + Duck Town 경쟁작',
        description:
          '캐주얼 퍼즐은 일일 챌린지(리텐션 40%↑), AI 적응형 난이도, 동적 리더보드가 핵심 트렌드. 리듬 게임 CAGR 9.1% 성장, 광고+IAP+구독 하이브리드 수익화 표준. Duck Town(리듬+펫 육성)이 MeowBeat 직접 경쟁작. Flow Free 2.2억 DL 지배적이나 NumberLink 계열 소셜/일일 챌린지 부재로 차별화 가능.',
      },
      {
        title: 'Vite 8.0 정식 출시(3/12) + Unity 6.3 LTS 패치 + Debug.Log 69건 정리 필요',
        description:
          'Vite 8.0 Rolldown 정식 릴리즈, 빌드 10-30x 향상. dev-studio 7.1.2→8.0 업그레이드 가능, 기존 플러그인 호환 확인. Unity 6.3 LTS Box2D v3+레이트레이싱 API+Enhanced Audio. NumLink Debug.Log 69건/16파일, _Recovery 씬 백업 4개 미추적 정리 필요.',
      },
      {
        title: 'NumLink UI 회귀 + MeowBeat 84파일 미커밋 — 품질 리스크 긴급',
        description:
          'NumLink 10커밋 중 LevelSelectUI 5건 집중, 스크롤-BackButton-스테이지 전환 회귀 리스크. MainScene.unity 미커밋으로 코드-씬 불일치 가능. MeowBeat 84파일(56개 미추적, AdMob·CafeManager 수익화 코드 포함) 유실 위험 매우 높음. 자동화 테스트 0건 지속.',
      },
      {
        title: '2026 인디게임 숏폼 마케팅·ASO: TikTok 급락, Reels·Shorts 전환 필수',
        description:
          'TikTok 유기적 도달 급락(42.5만→6천 사례). Reels·Shorts 중심 멀티플랫폼 전환 필수. Apple CPP 70개 확대+키워드 연결, Google 숏폼 비디오 발견 도입(3/2). 퍼즐 게임 롱테일 키워드+스크린샷 A/B 테스트(상위 57% 실행)가 전환율 핵심.',
      },
      {
        title: 'GitHub Actions deploy-pages v5 + checkout v5 출시 — Node 24 대응 완료',
        description:
          'deploy-pages v5.0.0(3/25), checkout v5.0.0 출시로 Node 24 런타임 대응 완료. Node 24 기본 전환 6/2 확정. dev-studio deploy-pages.yml에서 v4→v5 업그레이드 필요. FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true로 사전 테스트 가능. Unity 빌드 파이프라인 breaking change 없음.',
      },
      {
        title: '2026 모바일 게임 UI: Raw Aesthetic·Brutalist UI + AI 하이브리드 에셋 워크플로우',
        description:
          'AI 전형적 디자인(민트+다크) 거부하는 Raw Aesthetic/Brutalist UI 주류화. 볼드 타이포, 가시적 그리드, 의도적 마이크로인터랙션 핵심. 캐주얼 퍼즐은 Lo-Fi 미니멀+클린 스타일라이즈드 대세. 인디 에셋은 AI 생성+Aseprite 수동 정제 하이브리드 워크플로우가 2026 표준.',
      },
    ],
    meetingTitle: '2026-03-28 데일리 스탠드업: MeowBeat 미커밋 긴급 + NumLink 출시 마무리 + CI 액션 업그레이드',
    meetingSummary:
      'MeowBeat 84파일(56개 미추적) 유실 리스크 긴급 해소 결정. NumLink 코드 완료 확인, 비코드 출시 작업 6건 이번 주 집중. LevelSelectUI 5커밋 집중 회귀 테스트 필수. deploy-pages v5+checkout v5 이번 주 업그레이드. Vite 8.0 정식 출시 확인, 별도 PR 진행. TikTok 급락으로 Reels·Shorts 멀티플랫폼 마케팅 전환. Raw Aesthetic UI 트렌드 NumLink 방향성 부합 확인.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink는 코드 완료 상태이며, 남은 6건(개인정보처리방침, 스토어 설명문, 스크린샷, AdMob, APK 빌드, 레벨 확장)은 전부 비코드 작업이므로 이번 주 집중하면 Google Play 내부 테스트 진입 가능합니다. MeowBeat는 에셋(Suno 곡, AI 아트, 프리팹)이 전면 블로커로 Owner 액션 선행 필요. 우선순위: NumLink 출시 마무리 > MeowBeat 미커밋 해소 > dev-studio 인프라 업그레이드.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 게임 시장에서 일일 챌린지(리텐션 40% 증가)와 동적 리더보드가 핵심 레버로 자리잡았고, NumLink에 도입하면 Flow Free 대비 확실한 차별점을 확보할 수 있습니다. MeowBeat 쪽은 Duck Town(리듬+펫 육성, 2025.08 출시)이 직접 경쟁 레퍼런스이며, 리듬 게임 수익화는 광고+소액 IAP+구독 하이브리드 모델이 업계 표준입니다. MVP 이후 소셜 레이어 추가를 GDD 로드맵에 반영할 것을 권장합니다.',
      },
      {
        speaker: 'Developer',
        note: 'Vite 8.0이 3/12 정식 출시되었고 Rolldown 번들러로 빌드 10-30배 향상 확인, dev-studio 7.1.2→8.0 업그레이드 준비 완료. Unity 6.3 LTS 안정적 패치 진행 중. NumLink Debug.Log 69건/16파일 잔존하며 _Recovery 폴더에 씬 백업 4개가 미추적 상태로 남아 있어 정리 필요합니다.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink 최근 10커밋 중 LevelSelectUI에 5건이 집중되어 스크롤-BackButton-스테이지 전환 회귀 리스크가 높습니다. MeowBeat는 84파일(56개 미추적, AdMob·CafeManager 수익화 코드 포함) 유실 위험이 매우 높아 즉시 커밋이 필요합니다. 양 프로젝트 자동화 테스트 0건으로, 최소 게임 흐름 happy path 테스트 1건 추가를 권장합니다.',
      },
      {
        speaker: 'Content Writer',
        note: 'TikTok 유기적 도달이 크게 하락(42.5만→6천 사례)하면서 Instagram Reels와 YouTube Shorts가 인디 게임 마케팅 핵심 채널로 부상했습니다. Apple CPP 70개 확대+유기 검색 연결, Google Play 숏폼 비디오 발견 도입(3/2)으로 NumLink 출시 시 적극 활용해야 합니다. 스크린샷 A/B 테스트(상위 57% 실행)와 롱테일 키워드 조합이 전환율에 가장 큰 영향을 줍니다.',
      },
      {
        speaker: 'DevOps',
        note: 'deploy-pages v5.0.0(3/25)과 checkout v5.0.0이 Node 24 대응 완료 상태로 출시되었습니다. dev-studio deploy-pages.yml에서 deploy-pages v4→v5, checkout v4→v5로 업그레이드 필요하며, 전환 전 FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true로 사전 테스트 가능합니다. Node 24 기본 전환일 6/2 확정, Unity 빌드 파이프라인은 breaking change 없이 GameCI 안정 유지.',
      },
      {
        speaker: 'Art Director',
        note: '2026년 UI 트렌드 핵심은 Raw Aesthetic — AI 전형적 민트+다크 그라데이션을 거부하고 볼드 타이포·가시적 그리드·의도적 마이크로인터랙션이 주류입니다. NumLink UI 리디자인 Phase 2(3열 레이아웃, 난이도 색상 체계)는 클린 스타일라이즈드 트렌드에 잘 부합합니다. MeowBeat 에셋 제작 시 AI 생성+Aseprite 수동 정제 하이브리드 워크플로우를 권장합니다.',
      },
    ],
    decisions: [
      {
        title: 'MeowBeat 84파일 미커밋 즉시 해소 — 유실 리스크 긴급',
        description:
          '56개 미추적 파일(AdMob, CafeManager 등 수익화 코드 포함)이 복구 불가 상태. 분할 커밋으로 즉시 안전장치 확보. 에셋 작업 전 코드 베이스라인 확정.',
      },
      {
        title: 'NumLink _Recovery 폴더 정리 + MainScene.unity 커밋',
        description:
          '_Recovery 씬 백업 4개 검증 후 삭제 또는 .gitignore 추가. MainScene.unity 미커밋 해소하여 코드-씬 일치 보장.',
      },
      {
        title: 'NumLink 레벨선택 UI 회귀 테스트 실시',
        description:
          'LevelSelectUI 5커밋 집중 변경으로 스크롤·BackButton·스테이지 전환 회귀 리스크. 수동 회귀 테스트 우선, happy path 자동화 테스트 1건 추가 검토.',
      },
      {
        title: 'deploy-pages v5 + checkout v5 이번 주 업그레이드',
        description:
          '3/25 출시된 deploy-pages v5.0.0과 checkout v5.0.0으로 Node 24 대응. FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true 사전 테스트 후 전환.',
      },
      {
        title: 'Vite 8.0 Rolldown 업그레이드 별도 PR 진행',
        description:
          'Vite 8.0 정식 출시 확인(3/12). dev-studio 7.1.2→8.0 전환으로 빌드 10-30x 향상. 플러그인 호환성 확인 후 단독 PR.',
      },
      {
        title: 'NumLink 출시 비코드 작업 6건 이번 주 집중',
        description:
          '개인정보처리방침, 스토어 설명문+ASO 키워드, 스크린샷 5장, AdMob 설정, APK 빌드, 레벨 확장. 완료 시 Google Play 내부 테스트 진입.',
      },
    ],
  },
  {
    id: '2026-03-29T20:00:00-threads-insight',
    date: '2026-03-29',
    researchTitle: '📊 Threads 인사이트 — AI 수익화 자동화, 트레이딩 봇, 생산성 도구 실전기',
    researchSummary:
      '47개 수집 노트 중 이전 인사이트(3/21) 미포함 영역 분석. 바이브 코딩 기반 제휴 마케팅 자동화가 실제 수익으로 이어지는 사례 다수 발견. 크립토 트레이딩 봇(GRVT 142% 수익·터틀수프 전략)이 개인 개발자 사이에서 확산. Claude for Excel(Cowork)·HWP 자동 변환 등 AI 생산성 도구가 실무 침투 가속. Unity 6.8 CoreCLR 전환 확정으로 게임 개발 생태계 대전환 예고.',
    researchItems: [
      {
        title: '🥇 AI 수익화 & 마케팅 자동화 — "만들고 끝"이 아닌 "만들어서 돈 버는" 시대',
        description:
          '바이브 코딩으로 제휴 마케팅 사이트 구축 사례 등장: Claude Code + Google Antigravity → 네이버 SEO + IndexNow 연동 → 자동 트래픽 유입. 크몽 시장 분석 결과 트레이딩뷰 지표(873건)·애드센스 승인(780건)·매크로 자동화(661건)가 3대 메가 히트. AI 서비스는 일반 개발 대비 2~4배 프리미엄. 숏폼 수익화 12단계 공식(1년 3억, 월 1억+ 조회수) 공유 — 레드오션 진입 + 구조 분석이 핵심.',
      },
      {
        title: '🥈 트레이딩 봇 & AI 퀀트 — 개인 개발자의 금융 자동화',
        description:
          'GRVT 고성능 전략: 1년 142.82% 수익, MDD 7.74%, PF 3.025(손익비 3:1), 승률 69.93%. 구정 연휴부터 새벽 3~4시까지 개발. 터틀수프 전략 봇: 유동성 스윕 기반 역추세 매매, BTC/ETH/XRP/SOL 멀티코인 확장, 시각화 대시보드까지 구축. Perplexity AI 실전 투자 프롬프트 7선 — 유동성 방향 감지 엔진 등 기관급 분석을 개인이 AI로 수행하는 흐름.',
      },
      {
        title: '🥉 AI 생산성 도구 실전 침투 — Excel부터 HWP까지',
        description:
          'Claude for Excel(Cowork): =GPT() 셀 함수가 아닌 워크북 전체를 읽는 사이드바. 탭·수식·셀 의존 관계를 모두 파악 후 모델 감사/변환/생성. MS Copilot이 수식 가속이라면 Claude는 모델 이해. HWP→HWPX 변환 자동화: 한컴 공식 변환기 + Claude Code 연동으로 레거시 공공문서 일괄 처리. component.gallery: UI 컴포넌트 용어 라이브러리로 비개발자 바이브 코딩 시 디자인 요청 정확도 향상.',
      },
      {
        title: '4️⃣ 게임 기술 대전환 — Unity 6.8 CoreCLR & AI 게임 생성',
        description:
          'Unity 6.8에서 Mono → CoreCLR 완전 전환 확정. .NET 10 최신 문법 사용 가능, C# 컴파일 시간 대폭 단축. GDC 2026에서 공식 발표. CodeWisp: 게임 엔진 없이 텍스트 설명만으로 웹게임 자동 생성하는 AI 플랫폼 — 프로토타이핑 용도로 주목. GPT-5.4가 Minecraft 클론·3D 공간을 원샷 생성하며 코딩 벤치마크에서 Claude Opus 4.6을 넘었다는 평가 등장.',
      },
      {
        title: '5️⃣ 부동산·금융 버티컬 AI 앱 등장',
        description:
          '재개발뷰: 바이브 코딩으로 만든 공동주택 공시가격 조회 앱. "본업은 아니지만 이 계정의 최종 존재이유"라는 개발자 코멘트가 인상적 — 사이드프로젝트가 버티컬 SaaS로 진화하는 패턴. Perplexity 기반 유동성 방향 감지·밸류에이션 분석 프롬프트가 개인 투자자 사이에서 공유되며 "AI로 기관을 이길 수 없지만 게임을 바꿀 수 있다"는 공감대 형성.',
      },
    ],
    meetingTitle: 'Threads 커뮤니티 수익화 & 실전 도구 트렌드',
    meetingSummary:
      '3/21 인사이트가 "AI 도구 선택"에 집중했다면, 이번에는 "선택한 도구로 실제 돈을 버는 방법"으로 커뮤니티 관심이 이동. 트레이딩·마케팅·생산성 영역에서 구체적 수익 데이터가 공유되는 단계.',
    meetingItems: [
      { speaker: '📈 뜨거운 것', note: '바이브 코딩 수익화(제휴 마케팅·숏폼), 크립토 트레이딩 봇(터틀수프·GRVT), Claude for Excel, Unity CoreCLR' },
      { speaker: '📉 식어가는 것', note: '단순 AI 도구 소개 콘텐츠 (이제는 "써봤다" 수준을 넘어 "얼마 벌었다"를 원함)' },
      { speaker: '🆕 새로 떠오르는 것', note: 'AI 제휴 마케팅 자동화, CodeWisp(엔진리스 게임), HWP AI 처리, 부동산 버티컬 앱' },
      { speaker: '💰 수익 데이터', note: '숏폼 1년 3억 / GRVT 142% 연수익 / 크몽 AI 프리미엄 2~4배 / 트레이딩뷰 지표 873건 수요' },
    ],
    decisions: [
      {
        title: '크몽 AI 서비스 시장 분석 → 트레이딩 시스템 수익화 검토',
        description: '트레이딩뷰 지표가 크몽 최다 서비스(873건). OpenClaw 트레이딩 시스템의 지표/전략을 크몽·Fiverr에서 판매 가능성 검토. AI 프리미엄(2~4배) 적용 시 단가 경쟁력 확보.',
      },
      {
        title: 'Claude for Excel(Cowork) 실무 테스트',
        description: '워크북 전체를 이해하는 AI 사이드바 — 트레이딩 리포트 자동 감사, 데이터 변환에 적용 테스트. MS Copilot과 비교 평가.',
      },
      {
        title: 'Unity 6.8 CoreCLR 마이그레이션 준비',
        description: 'MeowBeat 프로젝트의 .NET 버전 및 Mono 의존성 체크. CoreCLR 전환 시 컴파일 시간 단축 효과 사전 확인. 6.8 프리뷰 나오면 즉시 테스트.',
      },
      {
        title: '바이브 코딩 제휴 마케팅 파이프라인 레퍼런스 저장',
        description: 'Claude Code + Antigravity + Naver IndexNow 조합의 SEO 자동화 워크플로우를 PKM에 레퍼런스로 보관. 향후 사이드프로젝트 수익화 시 참고.',
      },
    ],
  },
  {
    id: '2026-03-27T09:00:00-daily-standup-v2',
    date: '2026-03-27',
    researchTitle:
      '로직 퍼즐 다운로드 YoY +19% 성장 + Vite 8 Rolldown 10~30배 빌드 + NumLink 6커밋 push 완료 — 출시 준비 가속',
    researchSummary:
      '7명 에이전트 병렬 리서치 종합. NumLink 대규모 세션 완료: 게임 흐름 버그 9건 수정, DFS 보드 생성 3건 수정, 안드로이드 빌드 최적화(패키지 9개 제거), UI 리디자인 Phase 1-2 완료. 로직 퍼즐 장르 다운로드 YoY +19% 성장 확인 — NumberLink 틈새 포지셔닝 유리. Vite 8.0 Rolldown 번들러 10~30배 빌드 향상 출시. React 19.2.4 보안 패치(CVE-2026-23864). Unity 6.4 Hub GitHub/GitLab 통합. Node 20 EOL 33일 후(4/30) — deploy-pages.yml 전환 필수.',
    researchItems: [
      {
        title: 'NumLink 대규모 세션 완료 — 버그 12건 수정 + UI 리디자인 + 빌드 최적화',
        description:
          '게임 흐름 버그 9건(StageClearPanel, DOTween/Animator 충돌, 타이머, ForceEndDrag), DFS 보드 생성 로직 3건 수정. 안드로이드 빌드 최적화로 불필요 패키지 9개 제거 + Physics2D 최적화. UI 리디자인 Phase 1(레벨선택 3열+난이도 색상+타이머바) + Phase 2(StageClearPanel 별점 팝 애니메이션+클리어 시간) 완료. 6커밋 origin/main 대비 미푸시 상태.',
      },
      {
        title: '로직 퍼즐 다운로드 YoY +19% 성장 — NumberLink 틈새 장르 포지셔닝 최적',
        description:
          'Business of Apps 2026 리포트: 로직 퍼즐 다운로드 YoY +19% 증가, 직소 퍼즐 +21%. 매칭 퍼즐이 전체 퍼즐 수익 42% 차지하나 포화. NumberLink는 Match-3 대비 경쟁 밀도 낮은 로직 퍼즐 틈새에 위치하여 차별화 유리. 퍼즐 시장 CAGR 6.96%(2026~2033) 안정 성장.',
      },
      {
        title: 'Vite 8.0 Rolldown 출시(3/12) — Rust 기반 통합 번들러 10~30배 빌드 향상',
        description:
          'Vite 8.0 Rolldown 번들러로 esbuild+Rollup 이원화 해소. Rust 기반 10~30배 빌드 속도 향상. DevTools 내장 + Wasm SSR 지원. dev-studio 현재 Vite 7.1.2 → 8.x 업그레이드 시 빌드 1.54초에서 추가 단축 기대. plugin registry(registry.vite.dev) 호환성 확인 후 전환 권장.',
      },
      {
        title: 'React 19.2.4 보안 패치(1/26) + npm 공급망 공격 경고(3월)',
        description:
          'React 19.2.4 CVE-2026-23864 DoS 취약점 패치. dev-studio 현재 React 19.1.1 → 19.1.5+ 업그레이드 권장. React Native 인기 패키지 악성 릴리스 탐지(3월) — npm 공급망 보안 주의. dev-studio CSR 앱이라 Server Components RCE(CVE-2025-55182)는 직접 영향 없음.',
      },
      {
        title: 'Unity 6.4 Hub GitHub/GitLab 통합 + DevOps 가격 변경',
        description:
          'Unity Hub 신규 프로젝트 생성 시 GitHub/GitLab 리포 자동 연결 기능 추가. Unity DevOps Version Control 시트 과금 제거(3/1). Unity 6.4 ECS Core 패키지 통합 + Project Auditor 기본 내장 유지. NumLink/MeowBeat 즉시 전환 불필요하나 Hub 업데이트 적용 권장.',
      },
      {
        title: 'Node 20 EOL 33일(4/30) + GitHub Actions 6/2 Node 24 기본 전환',
        description:
          'deploy-pages.yml node-version: 20 → 24 전환 필수. upload-pages-artifact v3→v4, actions/checkout v4→v5 업그레이드 권장. FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true로 사전 테스트 가능. .nvmrc 생성하여 로컬/CI 버전 일치 보장 필요.',
      },
      {
        title: '모바일 게임 UI 2026: 내러티브 UI + 미니멀 HUD + 커스텀 손그림 일러스트',
        description:
          'UI가 스토리텔링 역할 수행하는 내러티브 UI 트렌드 주류화. 미니멀 HUD + 제스처 숨김으로 몰입 극대화. 커스텀 손그림 일러스트가 스톡 이미지 대체 — Anti-AI 슬롭과 연결. 3D 인터랙티브 요소 + AI 적응형 레이아웃 도입 가속. 폴더블/태블릿 대응 반응형 UI 필수.',
      },
      {
        title: 'ASO 2026: 12~18개월 사전 마케팅 + 스크린샷 3~5초 결정 + 숏폼 에피소드 필수',
        description:
          '인디 게임 마케팅 출시 12~18개월 전 시작이 표준. 유저 3~5초 내 스크린샷으로 설치 결정. 광고 크리에이티브가 스케일링 핵심 요소. Discord/Steam 커뮤니티 조기 구축이 유기적 성장 기반. 숏폼(TikTok/Shorts) 에피소드형 시리즈가 알고리즘 선호.',
      },
    ],
    meetingTitle: '2026-03-27 데일리 스탠드업: NumLink 대규모 세션 리뷰 + 출시 준비 로드맵',
    meetingSummary:
      'NumLink 게임 흐름 버그 12건 수정 + UI 리디자인 Phase 1-2 + 안드로이드 빌드 최적화 완료 리뷰. 6커밋 미푸시 즉시 해소 결정. 로직 퍼즐 +19% 성장으로 NumberLink 포지셔닝 재확인. Vite 8 Rolldown + React 19.2.4 보안 패치 업그레이드 이번 주 진행. Input.GetKeyDown 2건 + Debug.Log 145건 릴리스 전 정리 필수. 커스텀 스킬/훅 5+3개 구현으로 AI 개발 파이프라인 고도화.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink 이번 세션에서 대규모 작업 완료: 버그 12건 수정, UI 리디자인 2단계, 빌드 최적화, 커스텀 스킬 5개+훅 3개 구현. 6커밋 미푸시 상태 지속 — 오늘 즉시 push 필수. MeowBeat 이번 세션 작업 없음, 130+파일 미커밋 여전히 리스크. dev-studio PKM 동기화 setup.sh 확장 완료.',
      },
      {
        speaker: 'Game Designer',
        note: '로직 퍼즐 다운로드 YoY +19% 성장은 NumLink에 호재. 매칭 퍼즐(42% 수익)은 Block Blast/Royal Match가 지배하나 NumberLink 계열은 경쟁 밀도 낮음. 퍼즐 시장 CAGR 6.96% 안정 성장 전망. 일일 챌린지+결과 공유 카드 패턴이 캐주얼 퍼즐 리텐션 표준 — NumLink 200레벨 이후 일일 모드 도입 검토. 브레인 트레이닝/마인드풀니스 프레이밍이 ASO에 유리.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink 코드 품질 점검: Input.GetKeyDown 2건(NumberManager.cs:188,193) CLAUDE.md 위반 즉시 수정. Debug.Log 145건 잔존 — #if UNITY_EDITOR 가드 일괄 적용 필요. TODO 5건(모두 LOW, 향후 리팩토링). GameManager UI 로직 집중 SRP 위반은 Phase 5에서 해소 예정. mcp-unity 포트 충돌 해결 완료. claude/gemini CLI PATH 수정 완료.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink 게임 흐름 버그 9건 수정 검증 필요: StageClearPanel 표시, DOTween/Animator scale 충돌, ForceEndDrag 성공 라인 보존, LineRenderer sortingOrder. DFS 보드 생성 3건 수정도 회귀 테스트 대상. Debug.Log 145건은 릴리스 빌드 성능 영향 — 정리 우선순위 상향. 자동화 테스트 0건 상태 지속.',
      },
      {
        speaker: 'Content Writer',
        note: 'ASO 2026: 유저 3~5초 내 스크린샷으로 설치 결정. NumLink UI 리디자인 Phase 2 완료로 스크린샷용 비주얼 확보. 인디 게임 12~18개월 사전 마케팅 표준 — 개발일지 숏폼 즉시 시작 재확인. 브레인 트레이닝 키워드 + 로직 퍼즐 카테고리 ASO 최적화 필요. 광고 크리에이티브가 UA 스케일링 핵심.',
      },
      {
        speaker: 'DevOps',
        note: 'Node 20 EOL 33일(4/30). deploy-pages.yml node-version 20→24 + upload-pages-artifact v3→v4 + checkout v4→v5 이번 주 일괄 전환. .nvmrc 24 생성 필수. NumLink 6커밋 push + MeowBeat 분할 커밋 오늘 진행. dev-studio npm audit: ajv ReDoS(moderate) + brace-expansion DoS(moderate) 잔존. Vite 7→8 업그레이드는 Rolldown 호환성 확인 후 별도 PR.',
      },
      {
        speaker: 'Art Director',
        note: '내러티브 UI 트렌드: UI가 게임 세계관의 일부로 작동. NumLink 레벨선택 3열 리디자인 + StageClearPanel 별점 팝 애니메이션은 방향성 적절. 미니멀 HUD 트렌드에 맞춰 게임 중 점수 한 줄 압축 유지. 커스텀 손그림 일러스트가 스톡 이미지 대체 주류화 — Anti-AI 슬롭 디자인 원칙 계속 준수. 폴더블/태블릿 반응형 UI 대응 중기 과제.',
      },
    ],
    decisions: [
      {
        title: 'NumLink 6커밋 origin/main push 즉시 실행',
        description:
          '별점 UI, StageClearPanel, 레벨선택 리디자인, 안드로이드 빌드 최적화 등 6커밋 미푸시 해소. 유실 리스크 제거.',
      },
      {
        title: 'Input.GetKeyDown 2건 + Debug.Log 145건 이번 주 정리',
        description:
          'NumberManager.cs:188,193 Input.GetKeyDown → InputAction 전환. Debug.Log 145건 #if UNITY_EDITOR 가드 적용. 릴리스 빌드 품질 확보.',
      },
      {
        title: 'Node 20→24 + CI 액션 버전 일괄 업그레이드 이번 주',
        description:
          'deploy-pages.yml node-version 24 + upload-pages-artifact v4 + checkout v5 + .nvmrc 생성. EOL 33일 전 선제 전환.',
      },
      {
        title: 'React 19.1.1→19.1.5+ 보안 패치 즉시 적용',
        description:
          'CVE-2026-23864 DoS 취약점 패치. CSR 앱이라 Server Components RCE는 무관하나 보안 최신화 필수.',
      },
      {
        title: 'Vite 8 Rolldown 업그레이드 별도 PR 진행',
        description:
          'Vite 7.1.2→8.x Rolldown 번들러 전환. 10~30배 빌드 향상. plugin 호환성 확인 후 단독 PR로 진행.',
      },
      {
        title: 'NumLink 일일 챌린지 모드 설계 시작',
        description:
          '로직 퍼즐 +19% 성장 + Wordle식 일일 챌린지 표준 정착. 200레벨 완료 후 일일 모드 + 결과 공유 카드 기능 설계.',
      },
    ],
  },
  {
    id: '2026-03-27T10:00:00-threads-insight-industry-reports',
    date: '2026-03-27',
    researchTitle:
      '한국 게임산업 23.8조 세계 4위 + Unity AI 채택 95% — 인디 개발자 기회 분석',
    researchSummary:
      'KOCCA 2025 대한민국 게임백서 + Unity Gaming Report 2건 교차 분석. 한국 게임시장 23.8조(+3.9%) 세계 4위, 모바일 59% 비중 유지. Unity 개발자 95%가 AI 도입하여 개발시간 77% 단축. 멀티플레이어 83% 성장 속 싱글플레이어 인디 차별화 기회. Play Store 수수료 20% 인하로 소규모 팀 수익 환경 개선. 1인 인디 개발자(MeowBeat+NumLink) 관점에서 실행 가능한 전략 도출.',
    researchItems: [
      {
        title: '한국 게임시장 23.8조(+3.9%), 세계 4위 유지 — 모바일 59%, 콘솔 +4.8% 최고 성장',
        description:
          'KOCCA 2025 게임백서 기준 한국 게임산업 규모 23.8조 원(전년 대비 +3.9%), 글로벌 4위. 모바일 게임이 전체의 59%로 압도적 비중. 콘솔 시장 +4.8%로 가장 높은 성장률 기록. PC 온라인 비중은 점진적 감소 추세. 인디 개발자에게 모바일 우선 전략이 시장 규모 측면에서 가장 합리적.',
      },
      {
        title: '수출 85억 달러 — 북미 비중 +4.7%p 확대, 글로벌 진출 기회',
        description:
          'KOCCA 기준 한국 게임 수출액 85억 달러. 북미 시장 비중이 전년 대비 +4.7%p 확대되며 중국 의존도 분산 가속. 동남아·중남미 등 신흥시장도 성장세. NumLink/MeowBeat 글로벌 출시 시 북미 시장 우선 타겟이 수출 트렌드와 부합.',
      },
      {
        title: 'Unity 개발자 95% AI 도입, 개발시간 77% 단축 — 1인 개발 생산성 극대화 근거',
        description:
          'Unity Gaming Report 기준 개발자 95%가 AI 도구를 워크플로우에 도입. AI 활용 시 개발시간 평균 77% 단축 보고. 코드 생성·에셋 제작·테스트 자동화 등 전 영역 적용. 1인 개발자에게 AI는 팀 규모 한계를 극복하는 핵심 레버리지.',
      },
      {
        title: '멀티플레이어 83% + 라이브서비스 42% 성장 예측 — 싱글플레이어 인디 차별화 포인트',
        description:
          'Unity 리포트에서 멀티플레이어 게임 83%, 라이브서비스 모델 42% 성장 전망. 대형 스튜디오가 멀티플레이어·라이브서비스에 집중할수록, 잘 만든 싱글플레이어 경험은 희소가치 상승. NumLink의 오프라인 퍼즐, MeowBeat의 싱글 리듬 경험이 차별화 요소.',
      },
      {
        title: '모바일 90% 출시 + 수익화 IAP 57% 주류 — NumLink/MeowBeat 모바일 우선 전략 검증',
        description:
          'Unity 리포트 기준 신규 게임의 90%가 모바일 플랫폼 출시. 수익화 모델은 IAP 57%로 주류, 광고 기반 32%, 프리미엄 11%. NumLink 광고+IAP 하이브리드, MeowBeat IAP 중심 수익 모델이 시장 트렌드에 부합.',
      },
      {
        title: 'Play Store 수수료 20% 인하 + 소규모 팀 부상 17% — 인디 수익 환경 개선',
        description:
          'KOCCA 기준 Google Play 수수료 30%→20% 인하(한국 12/31 적용). Unity 리포트에서 소규모 팀(1~5인) 비중 17%로 증가 추세. 플랫폼 수수료 인하와 AI 생산성 향상이 겹치면서 1인 인디 개발자의 경제적 생존 가능성 역대 최고 수준.',
      },
      {
        title: '신흥시장 라틴아메리카 55%, 동남아 24% 성장 — 다국어 지원 우선순위 참고',
        description:
          'Unity 리포트 기준 라틴아메리카 55%, 동남아 24% 모바일 게임 시장 성장률. 기존 북미·유럽 외 신흥시장 확대 가속. NumLink/MeowBeat 다국어 지원 시 스페인어·포르투갈어·태국어·베트남어 우선 고려. 텍스트 최소 퍼즐 게임 특성상 로컬라이제이션 비용 낮음.',
      },
    ],
    meetingTitle: '2026-03-27 인사이트 리뷰: 산업 리포트 기반 전략 점검',
    meetingSummary:
      'KOCCA 게임백서 + Unity Gaming Report 교차 분석 결과를 MeowBeat·NumLink 프로젝트에 적용. 모바일 우선 전략 재확인, AI 파이프라인 고도화 근거 확보, 글로벌 출시 북미 우선 타겟 설정, Play Store 수수료 인하 반영 수익 모델 재계산 합의.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'KOCCA 23.8조 시장 규모 + Unity AI 95% 채택 데이터가 우리 1인 개발 전략을 정량적으로 뒷받침한다. 모바일 59% 비중은 NumLink/MeowBeat 모바일 퍼스트를 재확인. 멀티플레이어 83% 성장은 역설적으로 싱글플레이어 인디의 포지셔닝 기회. 두 리포트 모두 소규모 팀의 생존 환경이 개선되고 있음을 시사.',
      },
      {
        speaker: 'Game Designer',
        note: '모바일 퍼즐 시장 59% + 하이브리드 캐주얼 트렌드에서 NumLink는 "깔끔한 싱글플레이어 퍼즐"로 차별화 가능. IAP 57% 주류이나 퍼즐 장르는 광고+IAP 하이브리드가 최적. 라이브서비스 42% 성장은 일일 챌린지 도입 근거 추가. MeowBeat은 리듬+고양이 니치로 레드오션 회피.',
      },
      {
        speaker: 'Developer',
        note: 'AI 도입 95% + 개발시간 77% 단축은 현재 Claude Code + Unity 워크플로우가 업계 선도적 수준임을 확인. 에셋 생성·테스트 자동화·코드 리뷰까지 AI 커버리지 확대하면 1인이 3~5인 팀 생산성 달성 가능. dev-studio 자체가 AI 파이프라인 데모 케이스.',
      },
      {
        speaker: 'Content Writer',
        note: '북미 수출 +4.7%p 확대는 ASO 영어 키워드 최적화 우선순위 상향 근거. 스페인어·포르투갈어 다음 우선. NumLink는 텍스트 최소라 로컬라이제이션 비용 극저. 스토어 설명·스크린샷 현지화가 핵심. TikTok UGC "매일 퍼즐 챌린지" 글로벌 캠페인 연계 가능.',
      },
      {
        speaker: 'QA Tester',
        note: '빌드 크기 평균 167MB 증가 추세(Unity 리포트) 대비, NumLink 현재 APK 경량 유지 중이나 200레벨 확장 시 에셋 사이즈 모니터링 필요. 신흥시장 타겟 시 저사양 디바이스 테스트 매트릭스 확장 고려. MeowBeat 오디오 에셋이 빌드 크기 주요 변수.',
      },
      {
        speaker: 'Art Director',
        note: '콘솔 +4.8% 최고 성장이지만 인디 1인 개발자는 모바일 비주얼 최적화에 집중이 현실적. 신흥시장 진출 시 문화권별 색채 선호도 차이 고려(라틴 아메리카: 고채도·따뜻한 톤, 동남아: 골드+레드 선호). NumLink 미니멀 스타일은 문화 중립적이라 글로벌 확장에 유리.',
      },
    ],
    decisions: [
      {
        title: 'NumLink/MeowBeat 모바일 우선 전략 유지 확정',
        description:
          '모바일 시장 59% 비중 + 신규 게임 90% 모바일 출시 데이터로 모바일 퍼스트 전략 재검증 완료. 콘솔 포팅은 모바일 성과 확인 후 검토.',
      },
      {
        title: 'AI 도구 파이프라인 고도화 — 95% 채택 + 77% 시간 단축 레버리지',
        description:
          'Claude Code 중심 현재 워크플로우에 에셋 생성 AI·테스트 자동화·ASO 키워드 분석 추가. 1인 개발자가 3~5인 팀 생산성 달성하는 것이 목표.',
      },
      {
        title: '글로벌 출시 시 북미 시장 우선 타겟',
        description:
          '수출 북미 비중 +4.7%p 확대 트렌드 반영. ASO 영어 키워드 최적화 우선, 이후 스페인어·포르투갈어 순서로 다국어 확장. NumLink 텍스트 최소 특성 활용.',
      },
      {
        title: 'Play Store 수수료 인하 반영 수익 모델 재계산',
        description:
          'Google Play 수수료 30%→20% 인하(한국 12/31 적용) 반영하여 NumLink/MeowBeat 수익 시뮬레이션 업데이트. 인디 개발자 순수익 약 14% 개선 효과.',
      },
    ],
  },
  {
    id: '2026-03-26T09:00:00-daily-standup',
    date: '2026-03-26',
    researchTitle: 'NumLink 안정화 마무리 + Wordle형 일일 챌린지 트렌드 분석',
    researchSummary:
      'NumLink 버그 수정 안정화 단계 진입, 워킹 디렉토리 3파일 미커밋. MeowBeat refactor/ai-friendly 브랜치 50+ 미커밋 파일·리모트 미푸시로 유실 위험 최고. Apple 프로모코드 오늘부로 폐지→Offer Code 전환 필수. 퍼즐 시장 $56억→$121억(CAGR 9%), Wordle형 일일 챌린지가 리텐션 핵심(DAU 12M). Debug.Log NumLink 114건·MeowBeat 48건 가드 미적용 지속. CI Node 20→24 전환 마감 4/30. Vite 8.0 Rolldown 빌드 10~30배 향상 업그레이드 권장.',
    researchItems: [
      {
        title: 'MeowBeat 미커밋 50+파일·리모트 미푸시 — 작업 유실 위험 최고',
        description:
          'refactor/ai-friendly 브랜치에 대량 미커밋(삭제 5개, 수정 20개, 미추적 50+개). origin에 푸시되지 않아 백업 부재. Scene 파일 수정 포함으로 충돌 위험. 즉시 정리+푸시 최우선.',
      },
      {
        title: 'NumLink 안정화 마무리 단계 — 워킹 디렉토리 3파일 미커밋',
        description:
          '200레벨 확장 후 버그 수정 5커밋 완료. GameManager·PuzzleManager·UIManager 수정 상태로 남아 있음. _Recovery 폴더 정리 필요. 스토어 에셋(개인정보처리방침/스크린샷/ASO) 여전히 유일 블로커.',
      },
      {
        title: 'Wordle형 일일 챌린지 = 2026 캐주얼 리텐션 필수 — DAU 12M·$148M 증명',
        description:
          '퍼즐 시장 $56억(2024)→$121억(2033, CAGR 9%). Wordle 월 1,073만 DAU·$1.48억 수익. "매일 돌아오는 루틴" 설계가 핵심. NumLink 일일 챌린지+공유 결과 카드 도입 필수. 리듬 게임 시장 $25억→$53억, 인디 아티스트 협업 참여율 28% 향상.',
      },
      {
        title: 'Debug.Log 가드 미적용 NumLink 114건·MeowBeat 48건 — 릴리스 빌드 포함',
        description:
          'NumLink: PreGeneratedBoardManager 26건, PuzzleManager 23건, BoardDataLoader 16건 최심각. MeowBeat: SaveSystem 저장경로 노출 6건, CafeManager 코인금액 노출 2건. 자동화 테스트 3프로젝트 모두 0건 변화 없음.',
      },
      {
        title: 'Apple 프로모코드 오늘 폐지 + Play Store 수수료 20% 인하 한국 12/31 적용',
        description:
          'iOS 프로모코드 2026-03-26 생성 불가→Offer Code 전환 필수. App Store 제출 4월부터 iOS 26 SDK 필수. Google Play 수수료 30%→20%(미국 6/30, 한국 12/31). 개인정보처리방침 KISA 자동생성 서비스 활용 가능.',
      },
      {
        title: 'CI Node 20→24 전환 마감 4/30 + Vite 8.0 Rolldown 빌드 10~30배 향상',
        description:
          'GitHub Actions Node 20 EOL 2026-04-30. deploy-pages.yml 아직 node-version: 20. Vite 8.0 Rolldown 단일 번들러 전환, Oxc 트랜스파일링. dev-studio Vite 7→8 업그레이드로 빌드 성능 대폭 개선 가능.',
      },
      {
        title: '마스코트 아이콘+미니멀 HUD 트렌드 — 스토어 첫 2장 스크린샷이 전환율 결정',
        description:
          '2026 앱 아이콘 마스코트 트렌드 정점(MeowBeat 고양이 직결). 퍼즐 게임 "방해하지 않는 UI" 원칙. 스크린샷 첫 2장이 전환율 90% 결정, A/B 테스트로 24.3% 향상 가능. 분기별 테스트 앱은 연간 대비 20~30% 전환율 높음.',
      },
    ],
    meetingTitle: '2026-03-26 데일리 스탠드업: MeowBeat 백업 긴급 + NumLink 출시 준비 가속',
    meetingSummary:
      'MeowBeat 미커밋 유실 위험 즉시 해소, NumLink 스토어 에셋 준비 병행, Debug.Log 일괄 가드 적용, CI Node 24 전환, Apple Offer Code 전환 결정.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: 'NumLink 안정화 마무리 단계, 워킹 디렉토리 3파일 커밋 필요. MeowBeat 50+파일 미커밋·리모트 미푸시로 유실 위험 최고 — 오늘 최우선 해소. dev-studio 정상 운영.',
      },
      {
        speaker: 'Game Designer',
        note: '퍼즐 시장 $56억→$121억. Wordle DAU 12M이 증명한 일일 챌린지 모델 NumLink 도입 필수. 리듬 게임 인디 아티스트 협업 참여율 28% 향상 — MeowBeat 독립 뮤지션 파트너십 우선. Match-3 포화 속 NumberLink 장르는 차별화 공간 존재.',
      },
      {
        speaker: 'Developer',
        note: 'NumLink/MeowBeat 프로젝트 디렉토리 C:\\Unity 하위 확인. dev-studio 최근 5커밋 +430줄 정상. 소스 코드 기술 부채 실질 0건. Vite 8.0 Rolldown 빌드 10~30배 향상, dev-studio 업그레이드 권장. Unity 6.4 업그레이드는 선택적.',
      },
      {
        speaker: 'QA Tester',
        note: 'NumLink Debug.Log 145건 중 114건 가드 미적용(PreGeneratedBoardManager 26건·PuzzleManager 23건 최심각). MeowBeat 53건 중 48건 미가드(SaveSystem 경로노출·CafeManager 코인금액 노출). 자동화 테스트 3프로젝트 모두 0건. dev-studio 빌드 정상, ESLint 1건만 잔존.',
      },
      {
        speaker: 'Content Writer',
        note: 'Apple 프로모코드 오늘 폐지→Offer Code 전환 필수. ASO 2026: AI 기반 검색으로 키워드 나열 무효화, 첫 2장 스크린샷이 전환율 핵심. 개인정보처리방침 KISA 자동생성 활용 가능. TikTok UGC "하루 퍼즐 챌린지" 시리즈 제안.',
      },
      {
        speaker: 'DevOps',
        note: 'CI 파이프라인 정상(최근 4회 모두 성공). deploy-pages.yml Node 20→24 전환 필요(EOL 4/30). DailyStandup 스케줄러 여전히 미등록. package.json engines 필드 미설정, .nvmrc 파일 없음.',
      },
      {
        speaker: 'Art Director',
        note: '2026 퍼즐 UI "방해하지 않는 미니멀 HUD" 원칙. 마스코트 아이콘 트렌드 정점 — MeowBeat 고양이 캐릭터 직결. 리듬 게임 키네틱 타이포+음악 비주얼라이저 통합 트렌드. 스토어 스크린샷 첫 2장 최적화로 전환율 24.3% 향상 가능. 안티-리퀴드글라스 철학 대두.',
      },
    ],
    decisions: [
      {
        title: '[긴급] MeowBeat 미커밋 정리 + 리모트 푸시',
        description:
          'refactor/ai-friendly 브랜치 50+파일 미커밋·리모트 미푸시 상태. 오늘 중 정리하고 origin에 푸시하여 유실 위험 해소.',
      },
      {
        title: '[긴급] NumLink 워킹 디렉토리 커밋 + _Recovery 정리',
        description:
          'GameManager·PuzzleManager·UIManager 수정분 커밋 여부 결정. _Recovery 폴더 확인 후 정리.',
      },
      {
        title: 'Debug.Log 일괄 가드 적용 — NumLink 114건·MeowBeat 48건',
        description:
          '[Conditional("UNITY_EDITOR")] 어트리뷰트 활용 커스텀 Logger 클래스 도입. 출시 전 반드시 완료.',
      },
      {
        title: 'CI Node 20→24 전환 + engines 필드 추가',
        description:
          'deploy-pages.yml node-version: 24로 변경, package.json engines ">=24" 추가, .nvmrc 생성. 마감: 4/30 EOL 전.',
      },
      {
        title: 'NumLink 일일 챌린지 + 공유 결과 카드 설계',
        description:
          'Wordle 모델 기반 매일 1개 퍼즐 + 풀이시간/힌트 사용 결과 카드 SNS 공유. GDD에 메타 레이어 최소 사양으로 추가.',
      },
      {
        title: 'Apple Offer Code 전환 + 개인정보처리방침 초안 작성',
        description:
          '프로모코드 폐지 대응. KISA 자동생성 서비스 활용해 개인정보처리방침 초안 작성 시작.',
      },
    ],
  },
  {
    id: '2026-03-25T09:00:00-daily-standup',
    date: '2026-03-25',
    researchTitle: 'NumLink 출시 준비 + 하이브리드 캐주얼 메타 레이어 트렌드',
    researchSummary:
      'NumLink 코드 완료·200레벨 확장 진행 중, 스토어 에셋(개인정보처리방침/스크린샷/ASO) 준비가 출시 유일 블로커. CI Node 20 EOL 임박으로 24 직접 전환 긴급. Vite 8.0 Rolldown 기반 10~30배 빌드 속도 향상 업그레이드 권장. 퍼즐 시장 하이브리드 캐주얼 $42억, 일일 챌린지+메타 레이어 없는 퍼즐은 리텐션 한계. iOS 26.4 Liquid Glass 커스터마이징 옵션 추가, 아이콘 4모드 대응 유지. Google Play 수수료 30%→20% 인하+자체 결제 허용.',
    researchItems: [
      {
        title: 'NumLink 출시에 가장 가까운 프로젝트 — 스토어 에셋만 남음',
        description:
          '200레벨 확장(LevelSelectUI+BoardDataGenerator+TimerUI) 3커밋 진행 중. TODO 6건 전부 LOW. 코드 블로커 0건. 개인정보처리방침·스크린샷·ASO 키워드·AdMob 설정·APK 빌드가 출시 전 남은 작업.',
      },
      {
        title: '하이브리드 캐주얼 $42억 — 메타 레이어 없는 퍼즐은 리텐션 한계',
        description:
          '퍼즐 시장 CAGR 9%, 다운로드는 3% 감소하며 유저당 지출 증가 구조로 전환. Royal Match 단월 $1억. 상위 20개 하이브리드 캐주얼 중 9개가 소셜 클랜, 4개가 데코 메타 도입. NumLink에 일일 챌린지+테마 해금 시스템 설계 필수.',
      },
      {
        title: 'hololive Dreams 글로벌 사전 등록 — MeowBeat 직접 경쟁 아님',
        description:
          'Cover Corp × QualiArts 6레인 판정 리듬+가챠 150곡+50캐릭터. MeowBeat의 원터치 먹이주기 메카닉과 포지션 불일치. "Rhythm Cat" ASO 혼동 방지를 위해 독자 키워드 선점 필요.',
      },
      {
        title: 'Debug.Log 가드 미적용 86건+ 잔존 — 릴리스 빌드 포함',
        description:
          '이전 250건 제거 후에도 PuzzleManager 23건, PreGeneratedBoardManager 26건 등 86건+ 가드 없이 릴리스 빌드 노출. HBSaveLoadManager 평문 JSON+Debug.Log(json) 전체 출력 유지. 자동화 테스트 3프로젝트 모두 0건 변화 없음.',
      },
      {
        title: 'CI Node 20→24 직접 전환 긴급 + Vite 8.0 Rolldown 출시',
        description:
          'GitHub Actions Node 20 EOL 2026-04-30, Node 22 건너뛰고 24로 직접 이동(2026-06-02 기본 적용). 로컬 이미 v24.12.0. Vite 8.0(2026-03-12) Rolldown 단일 번들러로 빌드 10~30배 속도 향상. DailyStandup 스케줄러 태스크 여전히 미등록.',
      },
      {
        title: 'Google Play 수수료 20% 인하 + iOS 26.4 Liquid Glass 커스터마이징 확대',
        description:
          'Epic 합의로 Play Store 수수료 30%→20%, 자체 결제 허용(2026-06-30까지 순차 적용). 개발자 본인 인증 2026 Q3 의무화. iOS 26.4 Liquid Glass "Reduce Bright Effects" 옵션 추가, 아이콘 4모드(Light/Dark/Tinted/Clear) 대응 유지.',
      },
      {
        title: 'ASO 롱테일 키워드 + UGC 스타일 숏폼이 저예산 핵심 전략',
        description:
          '광의 키워드 경쟁 과다, "number connect puzzle", "number puzzle offline no ads" 등 롱테일 타겟. 첫 2장 스크린샷이 CVR 결정. TikTok UGC 스타일 콘텐츠 CPI 최저, 허위 광고 플랫폼 전면 차단 중.',
      },
    ],
    meetingTitle: '2026-03-25 일일 진행 회의',
    meetingSummary:
      'NumLink 출시 최근접 상태로 스토어 에셋 준비 집중. CI Node 24 전환+DailyStandup 복구 인프라 긴급. Debug.Log 86건+ 릴리스 포함 해결 시급. 하이브리드 캐주얼 메타 레이어(일일 챌린지+테마 해금) GDD 설계 착수. MeowBeat 에셋 대기 중 온보딩 플로우 GDD 보강.',
    meetingItems: [
      { speaker: 'Orchestrator', note: 'NumLink 코드 완료+200레벨 확장 중, 스토어 에셋(개인정보처리방침/스크린샷/ASO/AdMob)이 유일 블로커. MeowBeat 코드 완료 에셋 대기. Cat Merge Cafe M0 14% 진행. NumLink 우선 출시 집중 권장.' },
      { speaker: 'Game Designer', note: '퍼즐 시장 하이브리드 캐주얼 $42억, 메타 레이어 필수. Number Link 2000+ 레벨 수 경쟁 불리 — "엄선된 200개" 포지셔닝 전환. 일일 챌린지+테마 해금이 최소 비용 메타 레이어. MeowBeat 온보딩 플로우 GDD 공백 긴급.' },
      { speaker: 'Developer', note: 'NumLink TODO 6건 전부 LOW, 출시 블로커 없음. Unity 6.4 ECS 코어 통합+Project Auditor 내장 출시. Vite 8.0 Rolldown 기반 빌드 10~30배 향상, dev-studio 업그레이드 권장. cat-merge-cafe C# 코드 아직 0건.' },
      { speaker: 'QA Tester', note: 'Debug.Log 가드 미적용 86건+ 릴리스 빌드 포함(PuzzleManager 23건, PreGeneratedBoardManager 26건 최심각). HBSaveLoadManager 평문 JSON+로그 출력 유지. SaveSystem<T> 코인/루비 변조 가능. 3프로젝트 자동화 테스트 0건 변화 없음.' },
      { speaker: 'Content Writer', note: '개인정보처리방침 여전히 미작성 — 출시 차단. Play 수수료 20% 인하+자체 결제 허용 확인. 개발자 본인 인증 Q3 의무화. ASO 롱테일 키워드 타겟 + UGC 스타일 숏폼 콘텐츠가 저예산 핵심. 허위 광고 플랫폼 차단 중.' },
      { speaker: 'DevOps', note: 'CI Node 20→24 직접 전환 긴급(EOL 5주, GitHub Actions Node 22 건너뜀). 로컬 v24.12.0 정상. DailyStandup 스케줄러 태스크 여전히 미등록 — 3일째 장애. package.json engines 필드 미설정. 배포 파이프라인 자체는 안정.' },
      { speaker: 'Art Director', note: 'iOS 26.4 Liquid Glass "Reduce Bright Effects" 옵션 추가, 아이콘 4모드 대응 유지. 소프트 3D 플러시 텍스처+마스코트 아이콘 트렌드. 마이크로인터랙션 200-500ms+120fps 표준. NumLink 아이콘 고대비 마이크로 일러스트, MeowBeat 소프트 웜 팔레트(크림+복숭아+웜 라벤더) 권장.' },
    ],
    decisions: [
      {
        title: 'NumLink 스토어 출시 준비 집중',
        description: '개인정보처리방침 즉시 작성(Termly 활용 → GitHub Pages 게시). ASO 롱테일 키워드 메타데이터 작성. 스크린샷 첫 2장 CVR 최적화. AdMob App ID 설정 → APK 빌드 → 내부 테스트.',
      },
      {
        title: 'CI Node 20→24 전환 + DailyStandup 복구',
        description: 'deploy-pages.yml node-version 24로 변경. package.json engines ">=24" 추가. DailyStandup 스케줄러 태스크 재등록(schtasks /create)으로 3일째 장애 복구.',
      },
      {
        title: 'Debug.Log 가드 2차 일괄 적용',
        description: 'PuzzleManager 23건, PreGeneratedBoardManager 26건 우선 적용. HBSaveLoadManager Debug.Log(json) 즉시 제거. 릴리스 빌드 대상 86건+ 전수 처리.',
      },
      {
        title: 'NumLink 일일 챌린지+테마 해금 GDD 설계',
        description: '하이브리드 캐주얼 메타 레이어 최소 도입. 절차적 생성 기반 일일 퍼즐 + 색상 팔레트/그리드 스킨 해금 시스템. "엄선된 200개" 포지셔닝으로 레벨 수 경쟁 탈피.',
      },
      {
        title: 'Vite 7→8 + plugin-react 5→6 업그레이드',
        description: 'dev-studio Rolldown 기반 빌드 10~30배 속도 향상. Node 24 호환 확인 후 진행.',
      },
    ],
  },
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
    researchTitle: 'Unity 6.4 출시 + Mewgenics 100만장 달성 + 스프린트 결정사항 이행',
    researchSummary:
      'NumLink push+productName 수정 완료(4건 중 1건 이행). 스토어 준비/MeowBeat M0/daily_standup.bat은 여전히 미착수. Unity 6.4 출시(ECS 코어 통합, Project Auditor 내장). Mewgenics 1주 100만장·$2,500만 달성으로 고양이 IP 폭발적 성장 확인. Node.js 20 EOL 5주 후(dev-studio 워크플로우 영향). AI 음악 도구(Beatoven.ai) 비용 80-95% 절감. CatMergeCafe Mint 색상 WCAG 접근성 완전 미달(대비율 1.17:1).',
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
          'NumLink: TODO 6건 전부 LOW. #if UNITY_EDITOR 가드 15개 파일 80건 적용으로 개선됐으나, LevelDataProvider/EndlessModeProvider/DailyPuzzleProvider에 가드 밖 Debug.Log 잔존(MEDIUM). 자동화 테스트 0건(수동 Play Mode 의존). dev-studio: ESLint 오류 1건(OfficeContext.tsx react-refresh 위반) 지속, 빌드는 정상(2.52s). QA 38건 체크리스트 여전히 전체 미실행.',
      },
      {
        title: '[Content Writer] "Paid Organic" SNS 전략 부상 + CPP/CSL 전환율 40% 상승 + 개인정보처리방침 3프로젝트 전무',
        description:
          '2026 마케팅 핵심: 오가닉 영상 업로드 후 성과 좋은 영상에만 소액($100-200) 부스팅하는 "Paid Organic" 전략. YouTube Shorts가 TikTok 대비 안정적(크리에이터 85-90%가 Shorts/Reels 선호). CPP/CSL 맞춤 스토어 페이지로 전환율 최대 40% 상승. Discord 출시 12-18개월 전 커뮤니티 구축 권장. NumLink/MeowBeat/CatMergeCafe 3프로젝트 모두 개인정보처리방침 파일 부재.',
      },
      {
        title: '[DevOps] daily_standup.bat 3/22 실행 끊김 + Node 20 EOL 5주 후 + NumLink CI/CD 전무',
        description:
          'daily_standup.bat: claude.cmd 경로 정상 존재, bat 파일에 따옴표 감쌈 확인. 3/21은 Exit code 0 성공, 3/22는 시작만 기록되고 종료 없음(실행 중 끊김). 작업 스케줄러에 standup 태스크 미등록. dev-studio 배포 5회 연속 성공(30-40초). Node.js 20 EOL 2026-04-30(5주 후), 워크플로우 node-version:20→22/24 업그레이드 필요. GameCI v4.8.1 안정, NumLink CI/CD 도입 권장.',
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
      { speaker: 'QA Tester', note: 'NumLink Debug.Log 가드 밖 잔존 3파일(LevelData/Endless/DailyPuzzle) MEDIUM 리스크. 자동화 테스트 전무(3프로젝트 공통). dev-studio ESLint 1건 지속(useOffice 훅 분리 필요). QA 38건 체크리스트 코드 부재로 여전히 실행 불가.' },
      { speaker: 'Content Writer', note: '개인정보처리방침 3프로젝트 전무 — NumLink 출시 블로커. "Paid Organic" SNS 전략(오가닉→소액 부스팅) 채택 권장. YouTube Shorts 주 7-14개, Discord 커뮤니티 조기 구축. CPP/CSL 맞춤 스토어 페이지 전환율 40% 상승 데이터.' },
      { speaker: 'DevOps', note: 'Node.js 20 EOL 2026-04-30(5주 후) — dev-studio 워크플로우 node-version 22/24 업그레이드 시급. daily_standup.bat 3/22 실행 끊김, 작업 스케줄러 재등록 필요. GameCI v4.8.1로 NumLink CI/CD 도입 우선순위 상향.' },
      { speaker: 'Art Director', note: 'CatMergeCafe Mint(#98FB98) 접근성 완전 미달(1.17:1) — 허브 초록 #6B9E78로 즉시 교체. 야간 골목 팔레트 AAA 접근성 검증 완료. Digital Texture(grain/noise)가 종이접기 컨셉과 완벽 정렬. 마이크로인터랙션 100ms 이하 표준 준수 필요. Bento Grid 2.0으로 레벨 선택 UI 개편 제안.' },
    ],
    decisions: [
      {
        title: 'NumLink 스토어 준비 즉시 착수 (3일째 미이행, 최우선)',
        description: '개인정보처리방침 초안 작성→GitHub Pages 배포. ASO 롱테일 키워드 10-15개 선정. 스토어 설명문 한/영 초안 작성. 3일 연속 미착수이므로 오늘 반드시 1건 이상 완료.',
      },
      {
        title: 'Node.js 20→22 워크플로우 업그레이드 (EOL 5주 전)',
        description: 'dev-studio deploy-pages.yml의 node-version: 20→22로 변경. 로컬 개발 환경도 Node 22 LTS로 전환. 4/30 EOL 전 완료 필수.',
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
    researchTitle: 'AI 적응형 난이도 연구 + Unity 6.3 LTS + 스토어 출시 전략',
    researchSummary:
      'NumLink 5커밋 push/productName 수정/MeowBeat 워킹트리 정리 등 3/21 결정사항 전부 미이행 확인. 하이브리드 캐주얼 퍼즐 19개 타이틀 $100만+ 돌파, AI 적응형 난이도 도입 시 71% 수익 증가 데이터 확인. Unity 6.3 LTS IL2CPP 빌드 22% 단축. daily_standup.bat Exit code 9009(명령어 미발견) 원인 파악. Digital Texture/벤토 그리드/Anti-Design 등 2026 UI 신규 트렌드 발굴.',
    researchItems: [
      {
        title: '[Orchestrator] 3/21 결정사항 전부 미이행 — NumLink 5커밋 미push, productName 미수정, MeowBeat 81건 잔존',
        description:
          'NumLink: origin/main 대비 5커밋 ahead 유지(push 안 됨). 미커밋 3파일(GameManager/PuzzleManager/GameOverPanel). productName 여전히 "numberchain". MeowBeat: refactor/ai-friendly 브랜치 미추적 55건+수정 26건=81건으로 오히려 증가. dev-studio만 동기화 완료 상태.',
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
          'MeowBeat M0 스프린트(3/14~15 예정) 3/22 현재 미완료. QA 체크리스트 38개 항목 전체 미실행. 테스트 인프라 전무. dev-studio ESLint 오류 1건(OfficeContext.tsx react-refresh 위반). 업계 80%가 테스트 자동화 채택, AI 보조 QA로 개발 시간 28% 절감 사례.',
      },
      {
        title: '[Content Writer] ASO 의미 기반 탐색 전환 + 개인정보처리방침 공개 URL 필수',
        description:
          'Google Play NLP 의미 분석으로 전환 — 자연스러운 문장 내 롱테일 키워드 배치 필요. 개인정보처리방침: 공개 URL+Data Safety Form 동시 필수(미준수 시 앱 정지). 숏폼 영상 주 7-14개 목표. Discord 6.56억 유저로 인디 게임 커뮤니티 필수 인프라. 마케팅은 제작 단계부터 시작해야 비용 절감.',
      },
      {
        title: '[DevOps] daily_standup.bat Exit code 9009 — claude.cmd 경로 미발견 확인',
        description:
          'daily_standup.log 분석: Exit code 9009(명령어 미발견). claude.cmd 경로 실존 여부 확인 필요. 홈 디렉토리 로그는 시작만 기록되고 종료 없음(행 걸림 추정). dev-studio 배포 파이프라인 정상(10회 연속 success). GameCI v4.8.1 안정, NumLink CI/CD 도입 권장.',
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
      { speaker: 'Orchestrator', note: '3/21 결정사항 3건 전부 미이행. NumLink 5커밋 push + 미커밋 3파일 커밋 + productName 수정이 오늘 1순위. MeowBeat 81건 워킹트리 정리 2순위. dev-studio 안정.' },
      { speaker: 'Game Designer', note: '하이브리드 캐주얼 퍼즐 37% 성장, AI 적응형 난이도 71% 수익 증가 입증. NumLink에 적응형 난이도+짧은 시즌제 배틀패스 도입 제안. MeowBeat 음원 라이선싱 리스크 대비 필요. Mewgenics 고양이 IP 파워 참고.' },
      { speaker: 'Developer', note: 'Unity 6.3 LTS 출시 — IL2CPP 22% 빌드 단축, Box2D v3 추가. GDD 엔진 버전 갱신 필요(2022 LTS 지원 종료). MeowBeat C# 코드 0개, M0 Unity 프로젝트 생성 시급. GameObject.Find/Input.GetKey 잔존 코드 전환 필요.' },
      { speaker: 'QA Tester', note: 'MeowBeat M0 스프린트 1주 지연(3/14→3/22). QA 체크리스트 38건 전체 미실행. dev-studio ESLint 오류 1건 발견. M1에 EditMode 단위 테스트 태스크 추가 권장. 업계 80% 테스트 자동화 채택.' },
      { speaker: 'Content Writer', note: 'ASO가 키워드→의미 기반으로 전환. 개인정보처리방침 공개 URL+Data Safety Form 필수(미준수 시 앱 정지). 숏폼 영상 주 7-14개. Discord 커뮤니티 조기 구축. 스토어 설명문 초안 착수 시급.' },
      { speaker: 'DevOps', note: 'daily_standup.bat Exit code 9009 — claude.cmd 경로 미발견. 로그 분석 완료, 경로 수정 필요. dev-studio 배포 10회 연속 success. GameCI v4.8.1로 NumLink CI/CD 도입 권장. Node 22 LTS 업그레이드 검토.' },
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
          'NumLink: main에 5커밋 ahead(push 필요). 미커밋 변경 3파일(GameManager/PuzzleManager/GameOverPanel — 게임오버 흐름 수정). MeowBeat: refactor/ai-friendly 브랜치에 50+개 미추적 파일. dev-studio: origin/main 동기화 완료, 안정.',
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
      { speaker: 'Orchestrator', note: 'NumLink 5커밋 미push + 미커밋 3파일(게임오버 수정). MeowBeat 워킹트리 50+ 파일 정리 시급. dev-studio 안정. 우선순위: NumLink push → 스토어 준비 → MeowBeat 정리.' },
      { speaker: 'Developer', note: 'RestartGame→ReturnToLevelSelect 전면 재설계. 보드영역 숨기기/복원 패턴 적용. ClearBoardChildren 역순 반복 수정. GameOverPanel 이중호출 방지. 아키텍처 이슈: GameObject.Find, Input.GetKey 직접 사용 잔존.' },
      { speaker: 'QA Tester', note: '활성 버그 0건(21건 수정 완료). 기술 부채 7건 전부 LOW. HintManager 디버그 로그 릴리스 전 제거 필수. 자동 테스트 전무 — 최소 컴파일 체크 CI 권장.' },
      { speaker: 'Game Designer', note: '메타레이어 필수화 트렌드. NumLink: 이미지 컬렉션/앨범 시스템 최우선. Daily Puzzle 소셜 리더보드. MeowBeat: 고양이 반응=게임플레이 피드백. 냥스타그램 UGC 확장.' },
      { speaker: 'Content Writer', note: 'NumLink 스토어 등록 미비: 설명문/개인정보처리방침/ASO 키워드 0건. 스크린샷 정제본 필요. productName "numberchain"→"NumLink" 수정 필요. ASO 2026: CPP + 숏폼 영상 우선.' },
      { speaker: 'DevOps', note: 'daily_standup.bat 오늘 실패(exit code 1). 로그 기록 추가 완료. NumLink CI/CD 부재 — GameCI 워크플로우 추가 권장. dev-studio 배포 파이프라인 정상(최근 5회 전부 success).' },
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
    researchTitle: 'NumLink 4건 버그 수정 + 버튼/선/게임오버 안정화',
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
          'NumLink: main에 3커밋 앞서 있음(push 필요), 미추적 파일(DailyChallengeHubPanel, _Recovery, Screenshots) 정리 필요. MeowBeat: refactor/ai-friendly 브랜치에서 대규모 리팩토링 중(60+개 새 파일). dev-studio: main 동기화 완료, 안정적.',
      },
      {
        title: '[QA Tester] 게임오버 이벤트 흐름 설계 결함 발견',
        description:
          'GameOverPanel.OnEnable이 OnAllLivesLost 이벤트를 기다리지만 GameManager.SetGameOver에서 해당 이벤트를 트리거하지 않음 → Show() 미호출 가능. lineRendererPrefab null 시 선 렌더링 불가. isVibrated 플래그 상태 누수 가능(낮음). 전체 기술 부채 6건(TODO/HACK).',
      },
      {
        title: '[DevOps] daily_standup.bat PATH 오류 수정 + 빌드 환경 정상',
        description:
          'Windows Task Scheduler가 사용자 PATH를 상속하지 않아 claude 명령어를 찾지 못해 매일 실패(LastTaskResult:1). claude → C:\\Users\\LIMMM\\AppData\\Roaming\\npm\\claude.cmd 전체 경로로 수정. Unity 6000.3.5f2, dev-studio Vite 7.1.2 + React 19.1.1 정상.',
      },
    ],
    meetingTitle: '2026-03-20 일일 진행 회의',
    meetingSummary:
      'NumLink 게임 핵심 버그 7건 수정 완료(4+3), 자동 회의 시스템 복구, MeowBeat 리팩토링 진행 중. QA에서 게임오버 이벤트 흐름 설계 결함 발견하여 후속 수정 필요.',
    meetingItems: [
      { speaker: 'Orchestrator', note: 'NumLink 3커밋 미push 상태. MeowBeat refactor/ai-friendly 브랜치 60+ 파일 변경 중. dev-studio 안정. NumLink push + 미추적 파일 정리 우선.' },
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
          'NumLink: fix 커밋 10건 활발, TODO 7건 모두 LOW 우선순위, 컴파일 경고는 외부 라이브러리만. MeowBeat: TODO 0건 깔끔, 대량 .meta 미커밋 정리 필요. dev-studio: TODO 0건, 완벽 커밋 상태. 모든 프로젝트 게임 로직 관점 안정적.',
      },
      {
        title: '[DevOps] dev-studio 배포 정상, npm 13개 패키지 outdated',
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
        note: 'dev-studio npm 의존성 13개 outdated지만 Breaking change 없으므로 일괄 업데이트 안전하다. NumLink APK 빌드 파이프라인이 아직 없는데, 3/18 회의에서 결정한 GitHub Actions + Google Play Internal Testing 자동화를 이번 주 안에 구축해야 스토어 출시 일정에 맞출 수 있다.',
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
          'Unity 6.1에서 WebGPU가 공식 지원되고 WebGL 기본 압축이 brotli로 변경. dev-studio/itch.io 배포 시 Content-Encoding: br 헤더 설정을 미리 준비. 장기적으로 WebGL→WebGPU 전환 로드맵 수립.',
      },
      {
        title: '이번 주 액션: APK 빌드 파이프라인 + MeowBeat .meta 정리',
        description:
          'DevOps: GitHub Actions + Google Play Internal Testing 자동화 구축. QA: MeowBeat 리팩토링 브랜치 .meta 파일 정리 후 merge. DevOps: dev-studio npm update 실행. 이상 3건을 이번 주 내 완료.',
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
    researchTitle: 'NumLink 전수 코드 리뷰 + dev-studio 멀티프로젝트 전환',
    researchSummary:
      'NumLink 프로젝트의 전체 C# 코드(19개 스크립트)를 성능·기능·구조 3축으로 리뷰하여 62건의 이슈를 발견·수정했다. 동시에 dev-studio를 멀티프로젝트 구조로 전환하고 NumLink을 등록·배포했다.',
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
        title: 'dev-studio 멀티프로젝트 구조 분석',
        description:
          '기존 MeowBeat 전용 구조에서 페이지가 /work, /log, /playground로 재편된 상태. ProjectConfig 공통 타입 + 프로젝트 레지스트리를 도입하고, /work 페이지에 탭 스위처를 추가하는 방식이 기존 사이드바+패널 레이아웃과 가장 자연스럽게 통합됨을 확인.',
      },
    ],
    meetingTitle: 'NumLink 코드 품질 + 멀티프로젝트 전환 회의',
    meetingSummary:
      '62건의 코드 이슈를 3개 병렬 팀(코어 게임 로직, 보드/레벨/패턴, 매니저/시스템)으로 분담하여 전수 수정 완료. dev-studio를 ProjectConfig 레지스트리 기반 멀티프로젝트로 전환하고 NumLink을 등록·배포. Unity Editor 통합(SFX 폴백, 프리뷰 동적 생성, AchievementManager 동적 생성)도 완료.',
    meetingItems: [
      {
        speaker: 'Orchestrator',
        note: '오늘 3개 작업을 병렬 진행한다. (1) NumLink Unity Editor 통합 — SFX/파티클/프리뷰 에셋 연결 폴백, (2) dev-studio 멀티프로젝트 전환 — NumLink 등록, (3) NumLink 전수 코드 리뷰 + 수정. 코드 리뷰는 3개 그룹으로 분할하여 병렬 실행.',
      },
      {
        speaker: 'Developer',
        note: 'Part A(Unity Editor 통합) 완료. EffectManager에 Resources.Load 폴백 추가, PuzzleManager에 inGamePuzzlePreview 동적 생성, GameBootstrapper에 AchievementManager 동적 생성. Inspector 미할당 시에도 코드가 동작하도록 방어적 코딩 적용. Part B를 위해 dev-studio 리포를 탐색한 결과 페이지 구조가 대폭 변경되어 있어(ProjectsPage 삭제, WorkPage/LogPage/PlaygroundPage 신설) 새 구조 위에 재작업 필요.',
      },
      {
        speaker: 'Art Director',
        note: 'dev-studio에 NumLink 프로젝트 카드를 추가할 때 기존 토스 스타일(#191f28 텍스트, #3182f6 액센트, #f8f9fa 배경)을 유지했다. NumLink의 프로젝트 액센트 컬러를 #3182f6(블루)으로, MeowBeat를 #f97316(오렌지)으로 설정하여 시각적 구분을 확보.',
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
        note: 'dev-studio 배포 시 리모트에서 페이지 구조 대폭 변경(ChroniclePage→LogPage, OfficePage→PlaygroundPage, ProjectsPage 삭제)이 있어 merge conflict 발생. rebase 중단 후 새 구조 위에 재작업하여 해결. NumLink 코드 수정은 828ed33 커밋으로 43파일 +1786/-334 라인 변경 후 push 완료.',
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
        title: 'dev-studio 멀티프로젝트 전환 + 배포 완료',
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
        note: 'DevOps의 자동 배포와 연결해서 마케팅도 템플릿화해야 한다. DEVLOG_TEMPLATE.md로 개발 과정 자동 기록, itch.io 페이지 템플릿 표준화, 게임 출시 시 Dev Studio 대시보드에 카드 자동 추가. 새 게임 출시 = 포트폴리오 자동 업데이트까지 연결하면 "AI 1인 스튜디오" 내러티브가 자동 축적된다.',
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
        note: 'refactor(assets) 커밋으로 push 완료. 다음은 Dev Studio 대시보드 업데이트다.',
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
        description: 'Dev Studio를 Cat Merge Cafe에서 MeowBeat 기준으로 전면 업데이트한다.',
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
