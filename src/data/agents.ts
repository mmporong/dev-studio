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
    taskSummary: '**🚨 4일 공백 후 재개(6/25)**: 6/22~24 데일리 회의 3일 누락·3개 레포 6/21 이후 커밋 0건(완전 정지). NumLink 23일째 미커밋(6/2 이후·19→23 또 악화)·.gitignore 여전히 미정비. **✅ 6/21 "dspTime 해결" 선언이 착각이었음 확인 — 탐지기는 켜졌으나 NoteSpawner.cs:126은 deltaTime 그대로, qa_static.py 지금도 1 error("잡혔지만 안 고쳐짐")**. **✅ 오늘 자율 실행**: 공백을 끊는 첫 행동으로 agent-office Dependabot #111(npm-minor-patch) 머지(63b59f1)·major #110 보류. **핵심**: 두 P0(코어 패치·봉인) 모두 게임 코드/대량 워킹트리라 무인 미착수 — 회의가 멈추니 추진력도 멈췄다. **메타**: 목요일·D+32.',
    lastUpdate: '6/25 목요일 스탠드업(🔍 "해결됐다"는 착각과 나흘의 침묵 — 6/21 dspTime 탐지기 선언 후 QA가 오늘 qa_static.py 재실행 시 여전히 1 error·NoteSpawner.cs:126 deltaTime 그대로·6/22~24 회의 누락으로 3개 레포 커밋 0건): **✅ [자율완료] agent-office Dependabot #111 머지(63b59f1·4일 공백 끊은 첫 행동)** + **🔴 P0[이월] MeowBeat NoteSpawner dspTime 코어 패치(사용자 세션·탐지기 GREEN 가드 대기 중)** + **🚨 P0[이월] NumLink 23일 미커밋 봉인+검증툴 이식** + **🟡 P1 #110 머지+ubuntu-24.04 핀+targetSdk 36 D-67+LevelPlay** + **🟢 P2 데일리챌린지·앱아이콘 A/B·색맹 듀얼코딩**.',
    priority: 'high',
    energy: 88,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎮 신규(수익화·데일리챌린지·판정)**: 퍼즐 수익화는 광고 **30%**:IAP **70%** 믹스가 표준·보상형광고 참여율 **45~60%**·데일리 챌린지 도입 시 퍼즐 리텐션 **+40%**·첫 결제 중앙값 **1.6일**·스트릭 보너스 채택 스튜디오 **69%**. 리듬 판정은 정확 **20ms**/Perfect **±30~60ms**, 저난도일수록 윈도우 1.5~2배 확대가 접근성 표준(Chunithm식). **적용**: NumLink 데일리 챌린지(고정 시드+스트릭 보상·+40%)+보상형광고 연계, MeowBeat Easy 판정 윈도우 1.5~2배(Perfect ±30→±50ms).',
    lastUpdate: '6/25 목요일 리서치(목요일·D+32·퍼즐 수익화 광고30:IAP70·보상형광고 참여율 45~60%·데일리챌린지 퍼즐 리텐션 +40%·첫결제 1.6일·스트릭 채택 69%·리듬 난이도별 가변 판정 윈도우 신규): **🟢 P2 NumLink 데일리 챌린지(매일 고정 시드 퍼즐+연속 스트릭 보상·+40%)+보상형광고 연계·MeowBeat Easy 판정 윈도우 Normal 대비 1.5~2배 가변 판정(Perfect ±30→±50ms)**. P0 후. Sources: StudioKrew·CAS.ai·Amra&Elma·Mistplay·Native Audio·NamuWiki·donmai Chunithm.',
    priority: 'high',
    energy: 84,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: '**💻 🚨 신규 1순위(미디에이션 시한부 부채)**: 광고 워터폴 미디에이션 단계적 종료·AdMob 워터폴 직접연동 성능 저하 → NumLink/MeowBeat 둘 다 **LevelPlay 인앱비딩 단일 표준화** 필수(매출 직결). **💻 신규 2순위(렌더)**: Unity 6 GPU Resident Drawer(Forward+ 필수·BatchRendererGroup 자동 인스턴싱·드로우콜/CPU 절감). **💻 신규 3순위(메모리)**: Addressables "동시 로드/언로드 묶기"+로컬/리모트 경로 분리. **💻 코어**: NoteSpawner 코어 패치=사용자 세션 P0(탐지기 GREEN 가드 대기·픽스 시 자동 통과). 수익화 코드 전 NumLink 베이스라인 봉인 선행.',
    lastUpdate: '6/25 목요일 리서치(목요일·🚨 광고 미디에이션 시한부 부채 — 워터폴 종료/AdMob 직접연동 성능 저하 → LevelPlay 인앱비딩 표준화 필수·Unity 6 GPU Resident Drawer 자동 인스턴싱·Addressables 그룹 전략 신규): **🟡 P1 두 게임 광고 LevelPlay 단일 미디에이션 표준화(베이스라인 봉인 후 착수)+targetSdk 36 상향(8/31 D-67)** + **🔴 P0 NoteSpawner dspTime 코어 패치(사용자 세션·픽스 시 탐지기 자동 GREEN)**. Sources: unity.com Addressables·docs.unity3d.com URP GPU Resident Drawer·docs.unity.com LevelPlay/AdMob changelog.',
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
    taskSummary: '**🔑 핵심 발견(탐지기-픽스 괴리)**: 6/21 "해결"로 인지된 dspTime P0가 detector만 구현됐을 뿐 코어 미수정 — qa_static.py 지금도 **`1 error`**(NoteSpawner.cs:126 deltaTime 누적·dspTime/PlayScheduled 0건). "잡혔지만 안 고쳐진" 가장 위험한 패턴. **✅ 가드는 건강**: known_bugs **8건** detector 전부 실재 함수 매핑(댕글링 0)·회귀 **2/2** 통과. **🔍 NumLink 신규 리스크(이중 무방비)**: 검증툴 **0개**(Tools 부재)+단위테스트 **0개**(AutoGenTests 삭제 이월·AutoQATests meta만 남은 빈 껍데기·meta untracked 커밋 누락 리스크). **🚨 미해결 P0급 1건**(코어 미수정).',
    lastUpdate: '6/25 목요일 리서치(목요일·🔑 탐지기-픽스 괴리 — 6/21 탐지기는 켜졌으나 코어 미수정·qa_static.py 지금도 1 error NoteSpawner.cs:126·NumLink 검증툴 0개+단위테스트 0개 이중 무방비 신규): **🔴 P0 NoteSpawner.cs:126 dspTime 교체로 코드 종결(detector 자동 GREEN)** + **🚨 P0 NumLink 검증툴 4종 즉시 이식+AutoQATests 빈 껍데기 정리(사용자 세션)**. Sources: qa_static.py 실행·known_bugs.json·NoteSpawner.cs·git status 실측.',
    priority: 'high',
    energy: 72,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**📦 신규 1순위(앱 아이콘 A/B)**: 앱 아이콘 A/B 테스트만으로 전환 **+22.8%**·설치 최대 **+25%**(게임 평균 아이콘 CTR 13.72%). **📦 신규 2순위(사전등록·위시리스트)**: 미출시 사전등록 위시리스트→설치 전환 2026년 **5~10%**·디스코드 등 직접채널 동반 시 **2~4배** 개선. **📦 신규 3순위(디스코드 커뮤니티)**: 친구 1명과 플레이 시 체류시간 중앙값 **6배**·출시 2주 전 WIP 공유로 **500+** 연결 확보. **적용**: 두 게임 출시 전 디스코드+사전등록 위시리스트 동시 구축·앱 아이콘 후보 2~3종 A/B.',
    lastUpdate: '6/25 목요일 리서치(목요일·앱 아이콘 A/B 전환 +22.8%/설치 +25%·미출시 사전등록 위시리스트→설치 전환 5~10% 디스코드 동반 시 2~4배·디스코드 친구 1명 플레이 시 체류 6배·출시 2주 전 WIP 500+ 신규): **🟢 P2 두 게임 출시 전 디스코드 커뮤니티+사전등록 위시리스트 동시 구축(전환 5~10%·디스코드 2~4배)+앱 아이콘 후보 2~3종 A/B(+22.8%)**. Sources: SemNexus·DesignRush·Business of Apps·Immutable·presskit.gg·Discord·GrowthHQ.',
    priority: 'high',
    energy: 81,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🛡 ✅ CI/배포 안정(6/25)**: agent-office gh run 최근 5건 전부 success·실패 0. **오늘 Dependabot #111(npm-minor-patch 2건) 자율 머지(63b59f1)·major #110(actions/checkout v7) 신중 보류**. 워크플로우 2개 모두 액션 full SHA 핀+권한 최소화 양호. **🛡 신규(라벨 전환 리스크)**: ubuntu-26.04 프리뷰 공개(2026-06-11)·ubuntu-22.04 **9/17 deprecation** 시작 → 액션은 SHA 핀하면서 OS만 latest로 둔 비대칭 존재 → runs-on **ubuntu-24.04** 명시 핀 권장(차기 라벨 자동 전환 시 빌드 변동 차단).',
    lastUpdate: '6/25 목요일 리서치(목요일·CI 5건 success/실패 0·Dependabot #111 npm-minor-patch 자율 머지 63b59f1·#110 actions/checkout v7 major 보류·ubuntu-latest 라벨 자동전환 리스크 26.04 프리뷰/22.04 9/17 deprecation 신규): **✅ [자율완료] #111 머지(63b59f1) + 🟡 P1 #110 동작 확인 후 머지+두 워크플로우 runs-on ubuntu-24.04 명시 핀**. Sources: gh run/pr 실측·GitHub Changelog image migrations(2026-05-14)·runner-images #14226.',
    priority: 'high',
    energy: 80,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(어시 워밍 팔레트)**: 2026 캐주얼 컬러는 민트·보라 대신 **클레이/테라코타+세이지(+오커)** 어시 워밍 톤이 주류로 부상(AI 전형 회피+차별화). **🎨 신규 2순위(색맹 듀얼코딩)**: 숫자 퍼즐 컬러 단독 구분은 색각이상자 승률/리텐션/결제율 모두 하락·색맹모드(컬러+고유 형태) 도입 시 유의미 개선(논문 검증). **🎨 신규 3순위(다이제틱 모션)**: 2026 모션은 "연출용→상태 전달용"·HUD가 게임 월드에 녹아드는 다이제틱 방향. **적용**: NumLink 숫자 타일 컬러+고유 형태(코너 노치/도형) 듀얼코딩+테라코타·세이지·오커 리브랜딩.',
    lastUpdate: '6/25 목요일 리서치(목요일·2026 클레이/테라코타+세이지 어시 워밍 팔레트 주류 부상·숫자 퍼즐 컬러 단독 구분 색각이상자 하락/색맹모드 개선 논문 검증·2026 모션 연출용→상태전달용 다이제틱 HUD 신규): **🟢 P2 NumLink 숫자 타일 "컬러+고유 형태(코너 노치/도형) 듀얼코딩"+테라코타·세이지·오커 어시톤 리브랜딩(색맹 접근성+2026 차별화 동시)·다이제틱 HUD 모션**. Sources: AAA Game Art Studio·Envato·Updivision·ToolsJam·Springer·4tech·Pixune.',
    priority: 'high',
    energy: 79,
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
  '✅ [자율완료·4일 공백을 끊은 첫 행동] agent-office Dependabot #111 머지(HEAD 63b59f1) — 6/22~24 데일리 회의 3일 누락으로 3개 레포가 6/21 이후 커밋 0건으로 정지한 뒤, 자율 가능한 agent-office 영역에서 #111(npm-minor-patch 그룹 2건)을 MERGEABLE/CLEAN 확인 후 squash 머지·로컬 동기화(package.json·lock·insights.json만 변경·충돌 0). major인 #110(actions/checkout 6.0.3→7.0.0)은 동작 확인 전 신중 보류. "회의는 결정만 하는 기계가 아니다"를 4일 공백 뒤 첫 행동으로 복원',
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — "감지만 했고 안 고쳤다" 종결. 6/21에 탐지기는 만들었으나 코어는 미수정이라 qa_static.py가 지금도 `1 error`(126행 elapsedTime += Time.deltaTime·dspTime/PlayScheduled 0건)를 외친다. songPosition = (float)(AudioSettings.dspTime - dspSongStartTime)로 교체+BGM은 AudioSource.PlayScheduled(dspStart + leadTime)로 시작 고정+Android 오디오 지연 캘리브레이션 오프셋. 픽스하는 순간 6/21에 만든 탐지기가 자동으로 GREEN으로 전환돼 픽스를 증명한다(탐지기 완성 기준 4일째·발견 기준 9일째)',
  '🚨 P0 [이월·게임 코드·사용자 세션] NumLink 23일 미커밋 봉인 + 검증툴 이식 — 이중 무방비 해소. ① .gitignore에 .omc/·Screenshots/·_Recovery/ 패턴 먼저 추가(Layer Lab 에셋은 트래킹·봇 캐시/복구 씬 제외) → ② 단일 스냅샷으로 23일 공백 봉인(6/2 이후·19→23 악화). 병행해 QA 신규 발견 대응: NumLink/Tools에 검증툴 4종(unity_validate.py·qa_static.py 등) 이식(현재 0개), AutoQATests 빈 껍데기 정리(meta untracked 커밋 누락 리스크), AutoGenTests 4파일 삭제 확정 여부는 사용자 확인 선행(git restore vs 삭제). 봉인만으로는 검증툴/단위테스트 0개가 안 풀린다',
  '🟡 P1 [신규/이월]: DevOps — agent-office #110(actions/checkout v7 major) 동작 확인 후 머지+두 워크플로우 runs-on을 ubuntu-24.04로 명시 핀(26.04 프리뷰·22.04 9/17 deprecation 라벨 자동전환 리스크 차단). Developer — 두 게임 광고를 LevelPlay 인앱비딩 단일 미디에이션으로 표준화(시한부 매출 부채·베이스라인 봉인 후 착수)+targetSdk 36 상향(8/31 의무화 D-67·NumLink 봉인 선행). Unity 6 GPU Resident Drawer·Addressables 그룹 전략 병행 검토',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Game Designer — NumLink 데일리 챌린지(매일 고정 시드 퍼즐+연속 스트릭 보상·퍼즐 리텐션 +40%)+보상형광고 연계·MeowBeat Easy 판정 윈도우 Normal 대비 1.5~2배 가변 판정(Perfect ±30→±50ms). Content Writer — 두 게임 출시 전 디스코드 커뮤니티+사전등록 위시리스트 동시 구축(전환 5~10%·디스코드 동반 시 2~4배)+앱 아이콘 후보 2~3종 A/B(+22.8%). Art Director — NumLink 숫자 타일 "컬러+고유 형태(코너 노치/도형) 듀얼코딩"(색맹 접근성)+테라코타·세이지·오커 어시톤 리브랜딩·다이제틱 HUD 모션',
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
