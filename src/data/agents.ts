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
    taskSummary: '**🎯 게임 레포 미커밋 2일째 동결(6/14)**: NumLink 36·MeowBeat 37 무변동(5fcac3a/657032c 그대로)·주말 무인 구간 진입·P0(GMA 3커밋·UMP·targetSdk 36)는 사용자 세션 위임 유지. **dev-studio도 오늘 새 커밋 0**(최신 0e5dc99 = 6/13 저널)·**dependabot npm PR 10건 잔존**(#19·21·22·23·24·25·29·30·31·32). 6/13 액션아이템 중 dependabot actions 5건 머지만 완료·나머지 위임/이월. **다음 임무**: QA의 검증 3종 절대경로화를 차기 승인 불필요 실행 큐 1순위로 확정+접근성 제안 묶음. **메타**: 일요일·D+21 — 회의가 자기 진단을 검증한 날.',
    lastUpdate: '6/14 일요일 스탠드업(🔄 QA 자기검증: 6/13 scene_analyzer 미배치 HIGH는 오진·실파일 존재·🚨 진짜 구멍은 검증툴 CWD 의존성·게임 레포 2일째 동결·dependabot npm PR 10건 잔존): **🔄 [정정·종결] scene_analyzer HIGH 오진** + **🔧 P1[차기 큐 1순위] 검증 3종 __file__ 절대경로화** + **🚨 P0[위임+보강] MeowBeat 3커밋+UMP+targetSdk 36+광고 Bidding 전환+엔진 패치** + **🎮🎨📦🛡 P2 접근성 묶음·고양이 도감·ASO 스크린샷·Material 3 버튼·dependabot patch 머지**. 메타: 어제 발자국을 되짚어 오진을 잡아낸 날.',
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
    taskSummary: '**🆕 신규 1순위(메타 레이어 격전지)**: **하이브리드캐주얼 퍼즐 IAP Q1 2025 +67%→Q2 +100% YoY 가속·퍼즐 매출 430% 성장**·ARPDAU 하이퍼캐주얼 대비 4~7배($0.15~0.50 vs $0.03~0.08). 사례: **Hexa Sort 카드 수집·Royal Match 아바타 메타(Q3 2025 engagement +12%)** — 경량 메타 레이어가 D7 견인. **🆕 신규 2순위(리듬게임 접근성)**: **Rhythm Doctor(7th Beat·2025 1.0)** 원버튼+**조절 가능한 판정 윈도우**+TTS 무시야 플레이로 접근성 정점. **🆕 신규 3순위(FTUE)**: 첫 사용자 경험 개선 시 D1 최대 +50%·"learn by doing" 인터랙티브 온보딩. **적용 메시지**: MeowBeat 조절식 판정 윈도우(Lenient/Standard/Strict·별점 분리)+NumLink 고양이 도감 경량 메타(Hexa Sort식·D7 강화).',
    lastUpdate: '6/14 일요일 리서치(일요일·D+21·하이브리드캐주얼 퍼즐 IAP Q2 +100% YoY·퍼즐 매출 430%↑·Hexa Sort 카드수집·Royal Match 아바타 메타 +12%·Rhythm Doctor 조절식 판정윈도우 접근성 신규): **🎮 P2 MeowBeat 조절 가능한 판정 윈도우(Lenient/Standard/Strict) 접근성 옵션 — Art Director 컬러블라인드 건과 "접근성 묶음" 통합·별점 기준은 윈도우와 분리·NumLink 고양이 도감 경량 메타**. P0 커밋·UMP 선행. Sources: Gamigion 하이브리드캐주얼 2026·Game Growth Advisor·Rhythm Doctor 1.0 리뷰/Family Gaming Database 접근성·Medium 온보딩 UX.',
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
    taskSummary: '**💻 실측(ProjectVersion)**: NumLink·MeowBeat **둘 다 Unity 6000.3.5f2**(6.3 LTS 초기 패치·최신 6000.3.16f1과 11패치 차·보안 CVE 3건 미반영). **🚨 신규 1순위(광고 SDK 마감 이미 경과)**: **LevelPlay 구식 Waterfall 중개 종료 2026-01-31(경과)·Unity Ads Legacy 직접연동 성능저하 2026-04-01(경과)** — 둘 다 Bidding(실시간 입찰) 전환해야 정상 eCPM 회복·UMP 묶음에 "광고 Bidding 전환" 항목 추가 필요. **🆕 신규 2순위(장기 로드맵)**: **Unity 6.8서 Mono 완전 제거→CoreCLR(.NET 8)+Code Reload**(Domain Reload 대체) — 2026 점진 적용·차기 메이저 업그레이드 시 스크립팅 백엔드 재검토. **🆕 신규 3순위(6.3 모바일 신기능)**: Bloom Kawase/Dual filtering·xAtlas 라이트맵·Build Profile 셰이더 키워드 제어로 컴파일 단축. **메시지**: P0 묶음에 광고 Bidding 전환+6000.3.16f1 패치 추가.',
    lastUpdate: '6/14 일요일 리서치(일요일·두 프로젝트 Unity 6000.3.5f2 실측·광고 SDK 마감 2건 경과 LevelPlay Waterfall 1/31·Unity Ads Legacy 4/1·Unity 6.8 Mono 제거 CoreCLR 로드맵 신규): **💻 P0 보강 — 복붙 3커밋+UMP+targetSdk 36에 광고 SDK LevelPlay Bidding 전환+엔진 6000.3.16f1 패치 추가해 수익화·컴플라이언스 한 세션 완결**. Sources: ProjectVersion.txt 실측·Unity 6.3 LTS 릴리스 노트·LevelPlay Ads Mediation 문서·Path to CoreCLR 2026 가이드.',
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
    taskSummary: '**🔄 6/13 HIGH 오진 정정(가장 중요)**: 어제 "scene_analyzer 미배치 HIGH"는 오진 — 실파일 재점검 결과 **scene_analyzer.py는 Tools/에 정상 존재**·known_bugs.json의 RT_SIZE_ZERO detector가 calc_size를 정상 참조 중·탐지 경로는 끊긴 적 없음. 검증 시스템 "두 번째 구멍"은 실재하지 않음(종결). **🚨 진짜 신규 구멍(CWD 의존성)**: 검증 3종이 `Tools/known_bugs.json`·`Tools/make_fixtures.py` 등 **하드코딩 상대경로** 사용 — 실행 디렉터리가 Tools/면 전부 거짓 에러·**루트에서만 ALL PASS**(unity_validate·qa_static exit0·run_regression 2/2). 새벽 자동화 스케줄러 CWD 의존성 함정. **회귀 픽스처**: 여전히 2/6(33%·이월). **NumLink**: Tools/ 부재 확정. **메시지**: 세 스크립트 os.path.dirname(__file__) 절대경로화 — 차기 승인 불필요 실행 큐 1순위(어제 인라인화 대체).',
    lastUpdate: '6/14 일요일 리서치(일요일·🔄 scene_analyzer 미배치 HIGH 오진 정정 실파일 존재·🚨 진짜 구멍 검증툴 CWD 의존성 Tools/ 실행 시 거짓 에러·루트에서만 PASS·픽스처 2/6 이월 신규): **🔧 P1[차기 큐 1순위] unity_validate·qa_static·run_regression __file__ 기준 절대경로화 — CWD 무관 동작 보장·자동화 신뢰도 확보·인라인화는 불필요(scene_analyzer 정상)**. Sources: Tools/ 디렉터리 실측·검증 3종 루트/Tools CWD 양쪽 실행·known_bugs.json/scene_analyzer.py 코드 분석.',
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
    taskSummary: '**📦 신규 1순위(스크린샷 진화)**: 2026 ASO는 **첫 스크린샷에 3~5초 영상형 애니메이션**이 CVR 최대 견인 — 정적 설정화면 대신 게임플레이 임팩트 순간을 동적으로·아이콘은 3D→볼드 미니멀 회귀·배경색 A/B로 전환 +5%. **📦 신규 2순위(검색 점유율)**: **검색이 앱스토어 다운로드의 65%** 차지 — 자연어 롱테일이 AI 검색 노출에 유리(6/13 Gemini Ask Play의 정량 근거)·설명문 250자당 키워드 1회 권장. **📦 신규 3순위(숏폼 후킹)**: **완주율 80%가 첫 3초에·가치 인식 65%는 1초에 판가름**·게임 광고 영상 비중 81%·하이브리드캐주얼 D7 20%/D30 10%. **적용 메시지**: 첫 스크린샷을 게임플레이 임팩트로 교체+자연어 롱테일 캡션 A/B 2종.',
    lastUpdate: '6/14 일요일 리서치(일요일·2026 ASO 첫 스크린샷 영상형 애니메이션 CVR 견인·검색이 다운로드 65%·자연어 롱테일 AI검색 유리·숏폼 완주율 80% 첫 3초·게임광고 영상비중 81% 신규): **📦 P2 NumLink·MeowBeat 첫 스토어 스크린샷을 게임플레이 임팩트 순간으로 교체+자연어 롱테일 캡션("짧게 즐기는 숫자 연결 퍼즐"·"고양이와 즐기는 캐주얼 리듬게임") A/B 2종 제작(9:16 세로 클립 1소스 멀티유즈)**. P0 커밋·UMP 선행. Sources: Phiture ASO 트렌드 2026·AppFollow·AppTweak·RevenueCat UGC·Admiral 벤치마크.',
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
    taskSummary: '**🛡 CI 현황(6/14)**: GitHub Pages 배포 정상 — 최근 런 success(6/13 docs 37s)·어제 머지한 actions 5건(deploy-pages 5.0.0 등)으로 새 액션 버전 배포 정상 동작 확인. **잔여 PR**: dependabot deps PR 10건(#19~32)·라벨 없음·mergeState UNKNOWN(미평가)·대부분 dev 의존성(eslint 10 메이저·@anthropic-ai/sdk 0.88·globals 17 포함). **워크플로**: deploy-pages+weekly-insights 2개+dependabot.yml 정상·package.json Vite8/TS6/React19 최신. **🆕 웹(새 각도)**: **Vite 8 + Rolldown으로 빌드 10~30배 가속**(현 레포 vite ^8.0.1 사용 중이나 기본 빌드 경로가 esbuild/rollup일 수 있어 Rolldown 활성화 여지 점검 가치). **메시지**: patch/minor 3건 우선 머지·메이저 3건 분리 검증.',
    lastUpdate: '6/14 일요일 리서치(일요일·Pages 배포 정상·dependabot npm PR 10건 누적 mergeState UNKNOWN·워크플로 2개+dependabot.yml 정상·Vite8 Rolldown 빌드 10~30배 가속 신규): **🛡 patch/minor(react 19.2.5·react-router 7.14·typescript-eslint 8.58.1) 우선 일괄 머지+eslint 10·@eslint/js 10·globals 17 메이저 3건 분리 검증+Vite8 Rolldown 활성화 여지 점검**. Sources: Vite 8 Beta(Rolldown) 공식·The Register Vite8 Rolldown·gh run/pr 실측.',
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
    taskSummary: '**🎨 신규 1순위(모션 디자인)**: **Material 3 Expressive 스프링 모션** — stiffness/damping 물리 기반 살짝 오버슈트 바운스가 2026 표준·버튼 탭에 적용해 미니멀 톤 유지하며 반응성 체감↑. **🎨 신규 2순위(접근성·규제 진입)**: **컬러블라인드 3원칙** — ① 색+아이콘+모양 이중 신호 ② red-green 조합 금지 ③ 그레이스케일 변환 시 구분 자가검증. **EU 접근성법(EAA) 2025-06-28 시행**으로 디지털 제품 접근성 규제 영역 진입 — 글로벌 출시 선제 대응 가치. **🎨 신규 3순위(햅틱)**: 콤보·스와이프마다 짧은 진동 micro-signal로 시청각 보조(Aurion Rhythm 2025). **연결 적용**: NumLink 성공/실패 피드백에 컬러블라인드 이중 신호(체크 아이콘·선 굵기·점선/실선)+버튼 Material 3 스프링 바운스.',
    lastUpdate: '6/14 일요일 리서치(일요일·Material 3 Expressive 스프링 모션·컬러블라인드 3원칙 색+아이콘+모양 이중신호·EU 접근성법 EAA 6/28 시행·햅틱 micro-signal Aurion Rhythm 2025 신규): **🎨 P2 NumLink 숫자 연결 피드백 컬러블라인드 이중 신호 적용(색상만 구분→모양 보조 큐+그레이스케일 자가검증·Game Designer 판정윈도우 건과 접근성 묶음 통합)+버튼 Material 3 Expressive 스프링 바운스**. P0 커밋·UMP 선행. Sources: Tubik UI 트렌드 2026·Material 3 Expressive 공식·rgblind·Filament Games·Maxima 햅틱.',
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
  '✅ [정정·종결] 6/13 "scene_analyzer 미배치 HIGH"는 오진이었다 — QA 실파일 재점검 결과 scene_analyzer.py는 Tools/에 정상 존재하고 known_bugs.json의 RT_SIZE_ZERO detector가 calc_size를 정상 참조 중. 탐지 경로는 끊긴 적 없음. "검증 시스템 두 번째 구멍(HIGH)"은 거짓 경보로 종결하고, 6/13 적재한 scene_analyzer 인라인화는 차기 큐에서 제거',
  '🔧 P1 [승인 불필요·차기 실행 큐 1순위] 검증 3종 __file__ 절대경로화 — 진짜 구멍은 검증툴 CWD 의존성: unity_validate.py·qa_static.py·run_regression.py가 Tools/known_bugs.json 같은 하드코딩 상대경로를 써서 실행 디렉터리가 Tools/면 전부 거짓 에러·루트에서만 ALL PASS. os.path.dirname(__file__) 기준 절대경로로 패치해 새벽 자동화 스케줄러 CWD 무관 동작 보장. 로컬 작업·게임 레포 커밋 불필요라 새벽 실행 가능',
  '🚨 P0 [위임 유지+근거 보강] MeowBeat 복붙 3커밋+UMP+targetSdk 36+광고 Bidding 전환+엔진 패치 — 두 프로젝트 Unity 6000.3.5f2 실측·광고 SDK 마감 2건 이미 경과(LevelPlay Waterfall 1/31·Unity Ads Legacy 4/1)로 Bidding 전환이 수익화 전제. 한 세션 묶음: ① 6/11 복붙 3커밋 ② ConsentInformation.Update→LoadAndShowConsentFormIfRequired ③ Target API 36 상향(8/31) ④ LevelPlay Bidding 전환 ⑤ 6000.3.16f1 패치(CVE 3건)',
  '🔧 P1 [이월] NumLink Tools 3종 이식+고아 Editor.meta·빈 AutoQATests 정리 — 이식 시 위 절대경로화 패치 함께 적용. 회귀탐지 0→가동. 게임 레포 커밋 필요라 사용자 세션 권장',
  '🎮🎨 P2 [접근성 묶음·신규] EU 접근성법(EAA) 2025-06-28 시행 컨텍스트로 통합: Game Designer — MeowBeat 조절식 판정 윈도우(Lenient/Standard/Strict·별점 기준과 분리·Rhythm Doctor 검증 패턴). Art Director — NumLink 컬러블라인드 이중 신호(색+아이콘+모양·그레이스케일 자가검증)+버튼 Material 3 Expressive 스프링 바운스. Game Designer — NumLink 고양이 도감 경량 메타(Hexa Sort식·D7 강화)',
  '📦🛡 P2 [신규 — 모두 P0 후]: Content Writer — 첫 스토어 스크린샷을 게임플레이 임팩트 순간으로 교체+자연어 롱테일 캡션("짧게 즐기는 숫자 연결 퍼즐"·"고양이와 즐기는 캐주얼 리듬게임") A/B 2종(검색이 다운로드 65%·완주율 80% 첫 3초). DevOps — dependabot patch/minor 3건(react·react-router·typescript-eslint) 우선 머지·메이저 3건(eslint 10 계열) 분리 검증·Vite8 Rolldown 활성화 여지 점검',
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
