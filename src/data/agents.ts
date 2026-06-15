import type { OfficeAgent, OfficeZone } from '../types/office'

export const officeZones: OfficeZone[] = [
  {
    id: 'pm-desk',
    name: 'PM 책상',
    description: '기획과 우선순위를 잠그는 구역',
    accent: 'gold',
  },
  {
    id: 'research-lab',
    name: '리서치 룸',
    description: '시장, 자료, 리스크를 조사하는 구역',
    accent: 'mint',
  },
  {
    id: 'dev-desk',
    name: '개발 책상',
    description: '실제 기능을 구현하는 구역',
    accent: 'violet',
  },
  {
    id: 'qa-zone',
    name: 'QA 존',
    description: '검증, 회귀, 브라우저 확인 구역',
    accent: 'sky',
  },
  {
    id: 'debug-corner',
    name: '디버그 코너',
    description: '막힘과 오류를 정리하는 구역',
    accent: 'rose',
  },
  {
    id: 'briefing-board',
    name: '브리핑 보드',
    description: '회의, 보고, 동기화 구역',
    accent: 'amber',
  },
  {
    id: 'lounge',
    name: '라운지',
    description: '대기와 재정비를 위한 구역',
    accent: 'slate',
  },
]

export const agents: OfficeAgent[] = [
  {
    id: 'orchestrator',
    name: 'Orchestrator',
    role: '스프린트 계획 / 태스크 라우팅 / 핸드오프 총괄',
    status: 'planning',
    zone: 'pm-desk',
    taskSummary: '**🎯 게임 레포 동결 4일째(6/16)**: NumLink 5fcac3a·MeowBeat 657032c 해시 6/15 대비 변동 0·미커밋 NumLink 36/MeowBeat 37·새벽 무인 구간·P0는 사용자 세션 위임. **6/15 액션 4종 판정**: ① weekly-insights 권한 격하 = **완료**(60f87b2) ② 검증 절대경로화 = **미완** ③ NumLink Tools 이식 = **미완** ④ MeowBeat P0 = **미완**. **🆕 진행 신호**: NumLink는 죽지 않음 — Layer Lab UI 에셋킷 실제 추가(미커밋)·AutoGenTests 4파일 삭제로 리스킨 작업 진행 중. **dependabot 13건**(npm 10·actions 3). **다음 임무**: 게임 레포 P0는 위임, 자율 실행 가능한 자체 레포에서 dependabot grouping 회의 중 직접 실행·신규 발견 노트-오디오 동기화 P0를 사용자 세션 1순위로 격상. **메타**: 화요일·D+23 — 코드와 시장 두 길이 같은 출시 차단급 결함으로 수렴한 날.',
    lastUpdate: '6/16 화요일 스탠드업(🎵 리듬게임의 심장이 빠져 있었다·Developer+Game Designer가 MeowBeat 노트-오디오 동기화 부재를 코드/시장 두 각도로 동시 지목·동결 4일째): **✅ [실행완료·회의 중 커밋] dependabot.yml groups 설정(npm·actions 각 minor/patch·major 4그룹·13건→묶음 PR·3번째 자율 실행)** + **🚨 P0[신규·출시 차단급] MeowBeat 노트-오디오 동기화 재설계(dspTime+PlayScheduled+5초 캘리브레이션+판정 윈도우 3단계)** + **🚨 P0[이월] MeowBeat UMP+targetSdk 36+광고 Bidding+엔진 패치** + **🔧 P1[악화] 미커밋 .cs 4건 2개월 미백업 즉시 커밋+검증 절대경로화 5일째** + **🎨📦 P2 NumLink tabular figures+뉴트럴+비비드 1액센트·MeowBeat D-60 사전등록+Discord+첫3초 숏폼**. 메타: 회의 7개 시점이 서로 검증 장치로 작동.',
    priority: 'high',
    energy: 86,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🚨 신규 1순위(Developer와 독립 수렴·출시 차단급)**: 모바일 오디오 지연 기기별 **0.01~0.2s(최대 200ms)** → 캘리브레이션 없으면 정확히 친 노트도 Miss로 D0 즉시 이탈("정확히 쳤는데 왜 안 맞지?"=리듬게임 최대 이탈 원인)·풀스코어 판정 윈도우 경쟁작 ±20ms·캐주얼 ±40~50ms. **🆕 2순위(온보딩)**: 하캐 D1 38~40%·절반이 온보딩서 이탈·60초 내 코어루프 진입 관건. **적용 메시지**: MeowBeat 첫 곡 전 고양이 4비트 탭 5초 캘리브레이션(Skip 가능·PlayerPrefs)+판정 윈도우 Easy±60/Normal±50/Hard±35ms 3단계·Lyria 자체음원이라 BPM/오프셋 정확해 기준 비트 신뢰성 구성 가능(강점). NumLink는 첫 60초 손가락 가이드 시연.',
    lastUpdate: '6/16 화요일 리서치(화요일·D+23·모바일 오디오 지연 0.01~0.2s 캘리브레이션 부재가 D0 최대 이탈·판정 윈도우 경쟁작 ±20ms/캐주얼 ±40~50ms·하캐 D1 38~40% 온보딩 이탈 신규·Developer 코드 dspTime 부재와 독립 수렴): **🚨 P0 MeowBeat 첫 곡 전 5초 오디오 캘리브레이션(고양이 4비트 탭·Skip·PlayerPrefs)+판정 윈도우 3단계(±60/±50/±35ms) — Developer dspTime 전환과 한 묶음 처리·출시 차단급**. Sources: businessofapps.com·gamegrowthadvisor.com·Medium/Native Audio 리듬게임 레이턴시·NamuWiki 판정.',
    priority: 'high',
    energy: 83,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: '**🚨 코드 실측(출시 차단급)**: MeowBeat 노트 스폰 타이밍이 `AudioSettings.dspTime`(오디오 하드웨어 클럭)이 아니라 `Time.deltaTime` 프레임 델타 누적 기반(**NoteSpawner.cs:126**)·프로젝트 전체 `dspTime`/`PlayScheduled` **0건**·BGM은 단순 `bgmPlayer.Play()`(**SongManager.cs:91**) → 프레임 드랍/모바일 가변 프레임레이트 시 노트·음악 누적 드리프트로 판정 붕괴(리듬게임 치명). **🆕 2순위(풀링 부재)**: 곡당 수백 노트 `Instantiate`(NoteSpawner.cs:171)/`Destroy`(Note.cs:45) → GC 스파이크가 타이밍 흔들림 악화. **메시지**: BGM PlayScheduled 예약 시작+노트 타이밍 dspTime 기반 전환(프레임레이트 독립)·풀링은 후속. Game Designer 캘리브레이션과 한 묶음.',
    lastUpdate: '6/16 화요일 리서치(화요일·MeowBeat 노트 타이밍 Time.deltaTime 누적 NoteSpawner.cs:126·dspTime/PlayScheduled 0건·BGM 단순 .Play() SongManager.cs:91·노트 풀링 부재 신규·Game Designer 캘리브레이션과 독립 수렴): **🚨 P0 MeowBeat 노트 타이밍 dspTime 기반 전환+BGM PlayScheduled 예약 시작 — 프레임레이트 독립 동기화 확보(출시 차단급·노트 풀링은 후속 백로그)**. Sources: NoteSpawner.cs/SongManager.cs/Note.cs 코드 실측·Medium 리듬게임 레이턴시 동기화·Native Audio 가이드·Unity Android 오디오 레이턴시 문서.',
    priority: 'high',
    energy: 84,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '**🚨 백업 리스크 악화(실측)**: 미커밋 핵심 .cs 4건(**SongData/GameManager/SongManager/OptionManager**)이 **4/23 수정인데 마지막 커밋 4/12 → 약 2개월 미백업**·게임 로직 유실 리스크 누적·전체 미커밋 37건. **검증 절대경로화 5일째 미착수**: unity_validate.py:24 `Path(\'Tools/known_bugs.json\')` 상대경로 변화 없음·루트 실행 0err 정상 vs **Tools/ CWD 실행 시 1 warning 발생하지만 exit 0이라 무증상 통과**(검증이 거짓 안심 줌·더 위험). NumLink Tools/ 여전히 미존재(검증 인프라 0건). **회귀**: test_fixtures/ 폴더 부재로 0/6(불가). 게임데이터 무결성 양호(곡 10·audioFile 10/10 일치·누락 0). **메시지**: 미커밋 .cs 4건 우선 커밋·푸시로 2개월 유실 리스크 차단.',
    lastUpdate: '6/16 화요일 리서치(화요일·미커밋 핵심 .cs 4건 4/23 수정·마지막 커밋 4/12 약 2개월 미백업 악화·절대경로화 5일째 미착수 Tools/ CWD 1 warning이 exit 0 무증상 통과·test_fixtures 부재 회귀 0/6·manifest 10곡 정상 신규): **🔧 P1[악화] 미커밋 핵심 .cs 4건 즉시 커밋·푸시로 백업 확보(2개월 유실 차단)+unity_validate.py 3개 Path __file__ 절대경로화 — 둘 다 게임 레포 커밋 필요라 사용자 세션 1순위**. Sources: unity_validate.py 코드·루트/Tools CWD 양쪽 실행·git status 타임스탬프·manifest/ogg 대조.',
    priority: 'high',
    energy: 64,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**📦 신규 1순위(숏폼 후킹)**: TikTok/Reels/Shorts **첫 3초가 시청 지속의 71% 결정**·바이럴 완주율 기준 70% — 가장 임팩트 있는 리듬 타격 순간을 0~3초 배치·60초 이내·트렌딩 사운드 위 BGM 싱크. **📦 신규 2순위(사전등록)**: 사전등록 **출시 2~3개월 전 시작·게임 스토어 전환율 3~5%대**(상위 F2P)·출시 전 위시리스트/대기자 축적. **📦 신규 3순위(Discord)**: Discord 데모 사전공개가 인디 펀딩 성공률 3배·**가입 30일 잔존이 핵심 지표**. **적용 메시지**: MeowBeat D-60 사전등록 랜딩+Discord 동시 오픈+고양이 비트반응 첫3초 후킹 숏폼 1편(완주율 70% 목표)·NumLink 사전등록 위시리스트 축적.',
    lastUpdate: '6/16 화요일 리서치(화요일·숏폼 첫 3초가 시청 지속 71% 결정·완주율 70%·사전등록 출시 2~3개월 전 전환율 3~5%·Discord 데모 사전공개 인디 펀딩 3배·30일 잔존 핵심 신규): **📦 P2 MeowBeat 출시 D-60부터 사전등록 랜딩+Discord 채널 동시 오픈·고양이 비트반응 "첫 3초 후킹" 숏폼 1편(0~3초 임팩트 타격·완주율 70% 목표)+NumLink 사전등록 위시리스트 축적**. P0 후 착수. Sources: businessofapps.com·maf.ad·mobileaction.co·opus.pro/cloutboost.com·growthhq.io/marketingagent.blog.',
    priority: 'high',
    energy: 80,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🛡 ✅ 회의 중 실행 완료**: dependabot.yml에 `groups` 미설정으로 13건이 개별 PR 누적됨을 발견 → **npm·github-actions 각각 `update-types` 기반 minor/patch 묶음+major 묶음으로 분리(npm 2그룹+actions 2그룹) 직접 수정·커밋**. 다음 주 월요일부터 개별 PR이 묶음 PR로 축소·머지 부담 경감·메이저(eslint 10·@eslint/js 10·react-hooks 7·upload-pages-artifact 5)는 별도 묶음 격리로 lint/빌드 깨짐 위험 분리 검증. 6/13 dependabot 머지·6/15 weekly-insights 권한 격하에 이은 **3번째 자율 실행**. **🛡 CI 현황**: gh run 최근 6건 전부 success(Deploy Pages·Weekly Insights·Dependabot Updates)·워크플로 2종 SHA 핀+최소권한+OIDC. **게임 레포 CI**: 둘 다 없음·NumLink Tools/ 부재·MeowBeat만 Python 검증 스크립트 보유(grouping 우선). **메시지**: 다음 사이클부터 묶음 PR로 patch/minor 일괄·major 분리 검증.',
    lastUpdate: '6/16 화요일 리서치(화요일·✅ dependabot.yml groups 설정 회의 중 커밋·CI 최근 6건 전부 success·게임 레포 CI 무 MeowBeat만 Python 스크립트·6/15에 이은 3번째 자율 실행 신규): **🛡 ✅ dependabot grouping 실행완료(npm·actions 각 minor/patch·major 4그룹·13건→묶음 PR·메이저 격리) — 다음 머지 사이클부터 묶음 PR로 patch/minor 일괄·major 분리 검증**. Sources: gh run/pr 실측·dependabot.yml 코드·게임 레포 Tools/ glob.',
    priority: 'high',
    energy: 78,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(숫자 타이포)**: **가변폰트의 tabular figures(고정폭 숫자)+optical sizing이 숫자 가독성 2026 표준** — 숫자 정렬 안 흔들리고 작은 크기에서도 또렷·NumLink 숫자 퍼즐 직결·1·7 혼동 글리프 구분 강화 필수. **🎨 신규 2순위(조용한 모션)**: 모션은 화려함보다 cause-and-effect 명료성 우선·"조용한 마이크로인터랙션"이 2026 대세. **🎨 신규 3순위(AI 슬롭 회피 컬러)**: **muted 뉴트럴 베이스 + 머스타드·코랄 같은 의외의 비비드 1액센트**가 독창성 확보법(민트+다크 그라데이션 AI 전형 회피). **연결 적용**: NumLink 숫자 타일 tabular figures 가변폰트+1·7 구분, Layer Lab 다크 뉴트럴 유지+정답 순간만 단일 비비드 액센트(머스타드/코랄) "조용한 글로우+바운스".',
    lastUpdate: '6/16 화요일 리서치(화요일·가변폰트 tabular figures+optical sizing 숫자 가독성 2026 표준·조용한 마이크로인터랙션·AI 슬롭 회피 muted 뉴트럴+의외 비비드 1액센트 머스타드/코랄 신규): **🎨 P2 NumLink 숫자 타일 tabular figures 가변폰트 적용+1·7 혼동 글리프 구분 강화·Layer Lab 다크 뉴트럴 베이스 유지+정답 연결 순간만 단일 비비드 액센트를 "조용한 글로우+살짝 바운스"로 입혀 cause-and-effect 피드백(뉴트럴 위 단색 액센트 1개 원칙·AI 전형 회피)**. P0 후. Sources: muz.li·designmonks.co·medium·recursion.software/bigbashstudio.com.',
    priority: 'high',
    energy: 78,
    characterKey: 'bloom',
  },
]

import { projects } from './projects'

export const currentProject = {
  name: projects[0]?.name ?? 'LIM Studio',
  phase: projects[0]?.phase ?? '',
  risk: projects[0]?.risk ?? '',
}

export const todayGoals = [
  '✅ [실행완료·회의 중 직접 커밋] dependabot.yml groups 설정 — DevOps가 `groups` 미설정으로 의존성 13건(npm 10·actions 3)이 전부 개별 PR로 누적됨을 발견. npm·github-actions 각각 `update-types` 기반 minor/patch 묶음+major 묶음으로 분리(npm 2그룹+actions 2그룹) 직접 수정·커밋. 다음 주 월요일부터 개별 PR이 묶음 PR로 축소돼 머지 부담 경감·메이저(eslint 10·@eslint/js 10·react-hooks 7·upload-pages-artifact 5)는 별도 묶음 격리로 lint/빌드 깨짐 위험 분리 검증. 6/13 dependabot 머지·6/15 weekly-insights 권한 격하에 이은 자체 레포 3번째 자율 실행',
  '🚨 P0 [신규·출시 차단급·사용자 세션] MeowBeat 노트-오디오 동기화 재설계 — Developer 코드 실측+Game Designer 시장 데이터 독립 수렴. ① 노트 타이밍을 Time.deltaTime 누적(NoteSpawner.cs:126)에서 AudioSettings.dspTime 기반으로 전환·BGM을 PlayScheduled(dspTime+delay)로 예약 시작(SongManager.cs:91)해 프레임레이트 독립 동기화 ② 첫 곡 진입 전 고양이 4비트 탭 5초 오디오 캘리브레이션(Skip 가능·PlayerPrefs) ③ 판정 윈도우 Easy±60/Normal±50/Hard±35ms 3단계. 근거: 모바일 오디오 지연 기기별 0.01~0.2s(최대 200ms)·캘리브레이션 없으면 정확히 친 노트도 Miss로 D0 이탈. 그동안 P0(UMP·광고)는 출시 "허가"·이건 출시 "가치" 문제로 더 본질적. 노트 풀링은 후속 백로그',
  '🚨 P0 [이월·동결 4일째·사용자 세션] MeowBeat UMP+targetSdk 36+광고 Bidding 전환+엔진 6000.3.16f1 패치 — 한 세션 묶음: ① 6/11 복붙 3커밋 ② ConsentInformation.Update→LoadAndShowConsentFormIfRequired(2024-01-16부터 시행 중) ③ Target API 36 상향(8/31) ④ LevelPlay Bidding 전환(Waterfall 1/31·Unity Ads Legacy 4/1 경과) ⑤ 6000.3.16f1 패치(CVE 3건). 새벽 무인이라 게임 레포 push 승인 불가 — 신규 발견 노트-오디오 동기화 P0와 같은 세션에서 묶어 처리 권장',
  '🔧 P1 [악화·사용자 세션] 미커밋 핵심 .cs 4건 2개월 미백업 즉시 커밋·푸시(SongData/GameManager/SongManager/OptionManager)+검증 3종 절대경로화(5일째 미착수) — QA 실측: .cs 4건 4/23 수정인데 마지막 커밋 4/12 → 약 2개월 미백업·게임 로직 유실 리스크 누적. 동시에 unity_validate.py:24 `Path(\'Tools/known_bugs.json\')` 상대경로·Tools/ CWD 실행 시 1 warning이 exit 0이라 무증상 통과(거짓 안심). SCRIPT_DIR=Path(__file__).resolve().parent·ROOT=SCRIPT_DIR.parent 정의 후 절대경로 교체. test_fixtures/ 부재로 회귀 0/6 — 픽스처 확충 이월. dependabot 묶음 PR은 다음 사이클부터 patch/minor 일괄·major 분리 검증',
  '🎨📦 P2 [신규 — 모두 P0 후]: Art Director — NumLink 숫자 타일 tabular figures(고정폭 숫자) 가변폰트+optical sizing 적용·1·7 혼동 글리프 구분 강화, Layer Lab 킷 다크 뉴트럴 베이스 유지+정답 연결 순간에만 단일 비비드 액센트(머스타드/코랄)를 "조용한 글로우+살짝 바운스"로 입혀 cause-and-effect 피드백(AI 전형 민트+다크 회피·뉴트럴 위 단색 액센트 1개 원칙). Content Writer — MeowBeat 출시 D-60부터 사전등록 랜딩+Discord 채널 동시 오픈(전환율 3~5%·Discord 펀딩 3배)·고양이 비트반응 "첫 3초 후킹" 숏폼 1편(0~3초 임팩트 타격·완주율 70% 목표)·NumLink 사전등록 위시리스트 축적',
]

export const upcomingTasks = [
  'S2: 폰트 교체 (Fredoka/Nunito/Orbitron)',
  'S2: 앱 아이콘/스플래시 교체',
  'S2: UI 프리팹 교체',
  'S3: 고양이 캐릭터 HUD 배치',
  'S4: 머지 그리드 UI + 이펙트',
  'S5: Suno Pro 곡 30개 생성 → 20개 선별',
  'S7: 포토 앨범 UI + SNS 공유',
  'Android 빌드 테스트',
]
