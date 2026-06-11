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
    taskSummary: '**🎯 복붙 3커밋까지 만들어줘도 실행 0(15일째)**: 6/12 오늘도 두 레포 **오늘 커밋 0건**·MeowBeat 미커밋 37·NumLink 36 동결. **6/11 P0 3종 전부 미착수**: 3커밋 분리=미완(24시간 내 신규 커밋 0)·UMP=미완(`ConsentInformation` grep 0건)·NumLink Tools=미완(`Test-Path` False). 6/7 복붙 1줄→6/11 복붙 3커밋 — **명령 형태를 다듬어도 새벽 무인 구조에서 게임 레포 커밋은 발생하지 않음을 실증**. **✅ agent-office**: 자동화 정상(6/11 저널 ee2cc2e). **🎯 전환**: 승인 필요 P0는 사용자 다음 세션으로 위임, 회의는 **승인 불필요 영역(dev-studio dependabot·회귀 픽스처)에서 실행률 만들기**로 이동. **메타**: 금요일·D+19.',
    lastUpdate: '6/12 금요일 스탠드업(🎯 복붙 3커밋으로도 실행 0 15일째·P0 3종 전부 미착수 재확인·두 레포 오늘 커밋 0·🚨 QA 회귀 픽스처 커버리지 33% 거짓 안심 발견·🛡 DevOps 레포 dev-studio 리네임+dependabot 15건 적체 확인): **🚨 P0[위임 명시] MeowBeat 3커밋+UMP → 사용자 다음 세션 첫 작업** + **🔧 P1[승인 불필요·신규] 회귀 픽스처 2→6 확충+dev-studio actions 메이저 5건 머지** + **🔧 P1[이월+확장] NumLink Tools 이식+고아 메타 정리** + **🎮💻📦🎨 P2 방향 잠금 타일·사전등록 선오픈·리액티브 마스코트·6.3 LTS 유지**. 메타: 실행 무게중심을 승인 불필요 영역으로 이동.',
    priority: 'high',
    energy: 85,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🆕 신규 1순위(화살퍼즐 차트 점령)**: 2026년 5월 다운로드 차트에서 **화살퍼즐 신작 2종 합산 5,240만 DL 1·2위 석권**(Arrows: Puzzle Escape 2,860만·Arrows GO! 2,380만) — 흥행 핵심은 **untangle 순서해소 만족감+무타이머 저압박+7천 레벨 물량전**. **🆕 신규 2순위(수익 구성)**: 하이브리드캐주얼 퍼즐 **IAP:광고 45:55** 장르 표준 정착·하이퍼→하이브리드 전환 스튜디오 36%·플레이어블 광고 전환 2~4배. **🆕 신규 3순위(리듬게임 시장)**: CAGR 9.1%($2.5B→$5.3B)·Rhythm Heaven Groove 7/2 출시. **적용 메시지**: NumLink "방향 잠금 타일" 변형 레벨(화살 타일로 순서 결정 레이어 추가·기존 에셋 재활용·프로토타입 10개).',
    lastUpdate: '6/12 금요일 리서치(금요일·D+19·5월 화살퍼즐 신작 2종 합산 5,240만 DL 1·2위 석권·untangle 순서해소+무타이머 저압박 설계·하이브리드캐주얼 IAP:광고 45:55 표준화·리듬게임 CAGR 9.1% 신규): **🎮 P2 NumLink "방향 잠금 타일" 변형 레벨 타입(특정 방향만 통과 가능한 화살 타일로 경로 탐색에 순서 결정 레이어 추가·레벨 팩 10개 프로토타입→클리어율·재시도율 비교)**. P0 커밋·UMP 선행. Sources: AppMagic 2026.05 차트·MAF 하이브리드캐주얼 퍼즐·Verified Market Reports 리듬게임.',
    priority: 'high',
    energy: 82,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: '**🆕 Unity 6.4 정식 출시(2026.03·비LTS Supported)**: DirectStorage NVMe→GPU 로드 최대 40% 단축·ECS 코어 패키지화·Project Auditor 내장·UI Toolkit 커스텀 셰이더/필터/벡터. **패키지**: Addressables 2.9.1·Input System 1.19·**GMA Unity SDK v11.2.0**(Android 25.3.0/iOS 13.4.0·NativeOverlay — 미커밋 GMA v25 마이그레이션과 직결). **코드 실측**: NumLink 테마 USS 3종 재설계 +171/-169 활발 vs MeowBeat 4/12 이후 2개월 정체. **결론**: **6.3 LTS 유지가 정답**(2027.12 지원·6.4는 비LTS 보류)·6.4 UI Toolkit 신기능은 NumLink UGUI 롤백 확정이라 차기 검토만. **메시지**: SongVolume 이원화 부채 해소 이번 주 착수.',
    lastUpdate: '6/12 금요일 리서치(금요일·🆕 Unity 6.4 정식 출시 2026.03 비LTS Supported·DirectStorage 로드 40% 단축·UI Toolkit 커스텀 셰이더/필터·ECS 코어 패키지화·GMA Unity SDK v11.2.0 Android 25.3.0/iOS 13.4.0·Addressables 2.9.1 신규): **💻 엔진 6.3 LTS 유지 확정(6.4 비LTS 보류)·SongVolume을 OptionManager 단일 소스로 통합하는 부채 해소 이번 주 착수·사용자 P0 커밋 시 GMA SDK v11.2.0 버전 확인 동반**. Sources: CG Channel Unity 6.4·Unity GDC 로드맵·googleads-mobile-unity releases·Addressables 문서.',
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
    taskSummary: '**✅ MeowBeat 검증 3종 ALL PASS(6/12 재실행)**: unity_validate 0err(5.5s)·qa_static 0err·run_regression 2/2. **🚨 오늘의 핵심 발견(검증 시스템 자체의 신뢰도)**: run_regression이 **known_bugs 6건 중 2건만 커버 — 커버리지 33%**. error 등급 YAML_DUPLICATE_FILE_ID·MANIFEST_MISSING_AUDIO는 픽스처가 없어 detector가 망가져도 "2/2 PASS" 계속 출력 — **"ALL PASS"가 알려진 버그의 1/3만 보증하는 거짓 안심**. auto_fix 가능 1건뿐. **🚨 부수 발견**: ① unity_validate 프로젝트 루트 밖 실행 시 known_bugs 상대경로 실패로 조용한 skip(자동화 함정) ② NumLink 고아 Editor.meta+빈 AutoQATests+전체 *Test*.cs 0건. **메시지**: 픽스처 2→6 확충은 승인 불필요 로컬 작업 — 새벽 실행 가능.',
    lastUpdate: '6/12 금요일 리서치(금요일·✅ 검증 3종 ALL PASS 재확인·🚨 회귀 픽스처 커버리지 33% known_bugs 6건 중 2건만 커버·error 등급 2건 무보호·"ALL PASS" 거짓 안심·unity_validate 상대경로 함정·NumLink 고아 Editor.meta+빈 AutoQATests 신규): **🔧 P1[승인 불필요] 회귀 픽스처 2→6 확충 — error 등급 YAML_DUPLICATE_FILE_ID·MANIFEST_MISSING_AUDIO 재현 미니씬 test_fixtures/ 우선 추가+unity_validate.py 절대경로화**. Sources: 검증 3종 실행·known_bugs.json 분석·Test-Path 실측.',
    priority: 'high',
    energy: 68,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**📦 신규 1순위(사전등록)**: **사전등록 보상 명시 시 스토어 전환율 +20%(넥슨 FAITH)** — 구글플레이 사전등록자는 출시 시 자동설치(14일 내 전환 집계)되어 출시일 다운로드 집중→차트 초기 진입 확률 상승. **📦 신규 2순위(소셜프루프)**: **스크린샷에 평점·수상 추가 시 다운로드 +90%**·스토어 체류 약 7초·**첫 3장이 승부처**. **📦 신규 3순위(숏폼)**: 마이크로 크리에이터 수백명 분산 협업이 대세(주 7~14클립 권장)·장르별 CVR 레이싱 20.6%/보드 1.2%. **적용 메시지**: 양 게임 사전등록 페이지 선오픈 — MeowBeat 한정 고양이 스킨+보너스 곡·NumLink 힌트 팩·보상 소구를 1~2번째 스크린샷에 배치.',
    lastUpdate: '6/12 금요일 리서치(금요일·사전등록 보상 명시 시 전환율 +20% 넥슨 FAITH·구글플레이 자동설치 14일 전환 집계·스크린샷 소셜프루프 +90%·체류 7초 첫 3장 법칙·마이크로 크리에이터 주 7~14클립 신규): **📦 P2 양 게임 구글플레이 사전등록 페이지 선오픈+보상 명시형 배너(MeowBeat 한정 고양이 스킨+보너스 곡 1개·NumLink 힌트 팩·보상 소구 1~2번째 스크린샷 배치)**. P0 커밋·UMP 선행. Sources: AppRadar 사전등록·AppLaunchFlow ASO 2026·Business of Apps CVR.',
    priority: 'high',
    energy: 79,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🆕 핵심 발견(6/12 실측)**: 원격 레포 **agent-office→dev-studio 리네임 확인**(API 리다이렉트·로컬 origin도 dev-studio.git·Pages https://mmporong.github.io/dev-studio/ 정상·최근 3런 success). **🚨 dependabot PR 15건 적체** — Pages 배포 직결 **actions 메이저 5건**(checkout v6·deploy-pages v5·configure-pages v6·upload-pages-artifact v4·setup-node v6)+npm 10건. **🆕 웹**: **GitHub windows-latest VS2026 이미지 마이그레이션 6/8~6/15 진행 중**·macos 6/15부터 30일·Copilot 리뷰 6/1부터 Actions 분 과금·**Buildalon**(game-ci 대안 Unity 전용 무료 액션·퍼시스턴트 VM 빌드 50%+ 절감 주장). NumLink·Feedme `.github` 부재 CI 0 변화 없음. **메시지**: actions 메이저 5건 머지는 자체 레포라 새벽 실행 가능 — 승인 불필요 실행의 1순위.',
    lastUpdate: '6/12 금요일 리서치(금요일·🆕 원격 레포 dev-studio 리네임 확인·dependabot PR 15건 적체 actions 메이저 5건 포함·windows-latest VS2026 마이그레이션 6/8~6/15 진행 중·Buildalon Unity 전용 무료 액션 신규): **🔧 P1[승인 불필요] dev-studio dependabot actions 메이저 5건 우선 머지(러너 이미지 마이그레이션 선제 대응)·npm 10건은 배포 확인 후 단계 머지·문서/메모리의 레포 참조 dev-studio로 갱신**. Sources: GitHub Changelog 이미지 마이그레이션·Copilot 과금·Buildalon.',
    priority: 'high',
    energy: 74,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(컨텍스추얼 미니멀리즘 HUD)**: 항상 떠 있는 HUD 대신 **필요한 순간에만 표시** — 리듬게임은 콤보·판정을 이벤트 순간만 강조, 평시 화면은 곡과 캐릭터에 양보. **🎨 신규 2순위(리액티브 마스코트)**: **마스코트가 정적 일러스트→UI 컴포넌트로 진화**(Duolingo·Finch·Yazio 리텐션 검증·Rive 상태머신 구현 확산). **🎨 신규 3순위(햅틱 어휘)**: **10~20ms 짧은 펄스+사운드 동기화를 "어휘"로 설계**(Perfect/Good 구분 패턴). **에셋 실측**: NumLink 활발(Layer Lab·폰트 갱신) vs **MeowBeat 30일간 스프라이트/프리팹 수정 0건 정체**. **연결 적용**: MeowBeat 고양이에 콤보 입력 Animator 상태머신(idle/콤보 상승/미스/풀콤보 환호).',
    lastUpdate: '6/12 금요일 리서치(금요일·컨텍스추얼 미니멀리즘 HUD 필요한 순간만 표시·리액티브 마스코트 UI 컴포넌트화 Duolingo·Finch 검증 Rive 상태머신·햅틱 10~20ms 펄스+사운드 동기화 어휘·MeowBeat 에셋 30일 정체 실측 신규): **🎨 P2 MeowBeat 고양이 마스코트 리액티브 UI화(플레이/결과 화면 고양이에 콤보 수치 입력 Animator 상태머신·씬 사전 배치+SetActive 규칙 준수·후속 판정 햅틱 Perfect/Good 구분)**. P0 커밋·UMP 선행. Sources: Pixune 모바일 게임 UI 2026·IndieRadar 마스코트·Rive 상태머신·Android Haptics.',
    priority: 'high',
    energy: 77,
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
  '🎯 [복붙 3커밋으로도 실행 0 — 15일째] 6/11에 QA가 미커밋 37파일을 3묶음으로 해부하고 복붙 3커밋 명령까지 만들었지만, 6/12 오늘도 두 Unity 레포 **오늘 커밋 0건**·MeowBeat 미커밋 37·NumLink 36 동결. P0 3종(GMA 3커밋·UMP·NumLink Tools) **전부 미착수**(`ConsentInformation` grep 0건·`Test-Path NumLink/Tools` False 재확인). 6/7 복붙 1줄→6/11 복붙 3커밋 — **명령 형태를 다듬어도 새벽 무인 구조에서 게임 레포 커밋은 발생하지 않음을 실증**',
  '🟢 [오늘의 전환 — 실행 무게중심을 "승인 불필요 영역"으로 이동] 승인 필요 P0는 사용자 다음 세션 첫 작업으로 명시 위임하고, 회의는 승인 불필요 영역에서 실행률을 만든다: ① dev-studio(자체 레포) dependabot actions 메이저 5건 머지 ② MeowBeat 회귀 픽스처 2→6 확충(로컬 작업). 진단 0건·실행 2건이 목표',
  '🚨 P0 [이월·위임 명시] MeowBeat 복붙 3커밋+UMP 동의 초기화 — 사용자 다음 세션 첫 작업. 6/11 준비된 명령 그대로 유효: ① `chore(gma): GMA v25 마이그레이션` 5파일 ② `feat(i18n): 곡명 다국어 표시 및 잠금 시각화` 4파일(GameManager +59줄 10주째) ③ `chore: 폰트/패키지/placeholder 정리`. 직후 UMP — `MobileAds.Initialize` 앞 `ConsentInformation.Update`+`canRequestAds` 게이트(출시 차단급·GMA SDK v11.2.0 버전 확인 동반). 검증 3종 오늘도 ALL PASS라 커밋 안전 보증 유지',
  '🔧 P1 [승인 불필요·신규] MeowBeat 회귀 픽스처 2→6 확충 — run_regression 커버리지 33%(known_bugs 6건 중 2건)의 "ALL PASS 거짓 안심" 해소. error 등급인데 픽스처 없는 YAML_DUPLICATE_FILE_ID·MANIFEST_MISSING_AUDIO 재현 미니씬을 test_fixtures/에 우선 추가+unity_validate.py의 known_bugs.json 참조를 스크립트 기준 절대경로로 수정(루트 밖 실행 시 조용한 skip 함정 제거)',
  '🔧 P1 [승인 불필요·신규] dev-studio dependabot actions 메이저 5건 우선 머지 — checkout v6·deploy-pages v5·configure-pages v6·upload-pages-artifact v4·setup-node v6. GitHub 러너 이미지 마이그레이션(windows VS2026 6/8~6/15·macos 6/15~) 선제 대응. npm 10건은 배포 성공 확인 후 단계 머지. 부수: 문서·메모리의 레포 참조를 dev-studio(구 agent-office)로 갱신',
  '🔧 P1 [이월+확장] NumLink 검증 인프라 — MeowBeat Tools 3종+known_bugs.json 이식+씬 경로 갱신(회귀탐지 0→가동)·AutoGenTests git rm 확정·오늘 확장: 고아 Editor.meta+빈 AutoQATests 폴더 정리(임포트 churn 제거). 전부 push 불필요 로컬 작업',
  '🎮💻📦🎨 P2 [출시 품질 신규 — 모두 P0 후]: Game Designer — NumLink "방향 잠금 타일" 변형 레벨 프로토타입 10개(화살퍼즐 합산 5,240만 DL 검증 untangle 메커니즘·기존 에셋 재활용). Developer — 엔진 6.3 LTS 유지 확정(6.4 비LTS 보류)·SongVolume 단일 소스 통합 이번 주 착수. Content Writer — 양 게임 사전등록 페이지 선오픈+보상 명시형 배너(전환 +20%·보상 소구 1~2번째 스크린샷). Art Director — MeowBeat 고양이 마스코트 리액티브 UI화(콤보 입력 Animator 상태머신)+후속 10~20ms 판정 햅틱. **모두 P0 커밋·UMP 후 착수**',
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
