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
    taskSummary: '**🎯 진단 완료 후 첫날, 실행 여전히 0**: 6/10에 "백업→커밋" 재정의로 진단 완성했으나 6/11 오늘 두 레포 **오늘 커밋 0건**·MeowBeat 미커밋 37·NumLink 36 그대로. **6/10 P0 3종 전부 미착수**: GMA 분리 커밋=미완(`gma-25-migration` 브랜치 부재)·UMP=미완(코드 작업트리에도 0건)·NumLink Tools=미완(디렉터리 여전히 부재). **결론**: 6/7~6/8이 규명한 "새벽 무인 실행이라 게임 레포 승인 못 받아 영구 이월"의 재확인 — 부족한 건 진단이 아니라 **실행 트리거 하나**. **✅ agent-office** Pages 최근 3런 success. **🎯 전환**: 회의 임무를 "진단"→"막막함 제거(복붙 3커밋 명령)"로 이동. **메타**: 목요일·D+18·진단으로 보탤 게 없음을 인정한 날.',
    lastUpdate: '6/11 목요일 스탠드업(🎯 진단은 6/10에 끝났는데 6/11 오늘도 두 레포 0커밋·미커밋 그대로 37·36·6/10 P0 3종 GMA분리·UMP·Tools 전부 미착수·부족한 건 진단 아닌 실행 트리거 하나·🟢 QA가 미커밋 37파일을 분리 가능한 3묶음 해부 GMA5+i18n4(GameManager +59줄 9주 미커밋)+폰트/패키지): **🚨 P0[실행 환원] MeowBeat 미커밋 → 복붙 3커밋 분리(chore(gma)/feat(i18n)/chore)** + **🚨 P0[출시 차단·후속] UMP 동의 초기화** + **🔧 P1 NumLink Tools 3종 이식(push 불필요·새벽 가능)** + **🎮💻📦🎨 P2 Auto-Fit 난이도·In-App Event·Unity 6.3 Bloom·M3 스프링**. 메타: 회의 임무를 진단→막막함 제거로 이동.',
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
    taskSummary: '**🆕 신규 1순위(조절식 난이도)**: **조절식 난이도 모드 제공 시 D30 충성도 +22%** — 리듬게임 이탈 1위가 "난이도 벽". **🆕 신규 2순위(온보딩)**: 점진적 온보딩+즉시 피드백으로 **1세션 잔존 18%→41%(2.3배)**. **🆕 신규 3순위(라이브옵스)**: 일일미션 우수운영사 월 6~10개(평균 2~4개)·게이미피케이션 D30 30~40% vs 비적용 15~25%·Royal Match 매치3 D30 16.5% 1위·캐주얼 2026 D1 40%+/D7 8%+/D30 5~9%·라이브옵스 게임이 IAP 매출 84%. **적용 메시지**: MeowBeat "Auto-Fit" 모드(직전 3회 정확도 기반 노트 밀도 ±1단계·클리어 보상 동일)·NumLink 일일미션 3개 동시 노출.',
    lastUpdate: '6/11 목요일 리서치(목요일·D+18·조절식 난이도 모드 D30 충성도 +22%·점진적 온보딩+즉시피드백 1세션 잔존 18%→41% 2.3배·일일미션 우수운영사 월 6~10개 평균 2~4개·게이미피케이션 D30 30~40% vs 비적용 15~25%·Royal Match 매치3 D30 16.5% 1위 신규): **🎮 P2 MeowBeat "Auto-Fit 조절식 난이도" 모드(직전 3회 정확도 기반 노트 밀도 ±1단계 자동 조정·오토핏 클리어도 동일 보상으로 패배-이탈 루프 차단)**·NumLink 일일미션 3개 동시 노출. P0 커밋·UMP 선행. Sources: Game Growth Advisor 2026 KPI·Naavik 퍼즐 라이브옵스·Xtremepush 게이미피케이션 2026·MoldStud 난이도-잔존.',
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
    taskSummary: '**🆕 Unity 6.3 LTS(6000.3·25.12 출시·27.12 지원)**: 모바일 전용 Bloom 필터 Kawase(저해상도 최速)·Dual 추가로 리듬게임 비트/노트 히트 이펙트 GPU 부하 절감·Burst+IL2CPP 빌드시간 최대 -22%·HTTP/2 기본화로 안드로 CPU -15~20%(manifest.json CDN 로딩 직접 이득). **🆕 신규 부채(실측)**: SongManager.cs가 `PlayerPrefs.GetFloat("SongVolume")`를 두 곳에서 직접 read+OptionManager `CurrentVolume` static까지 별도 보유 → **음량 소스 이원화 동기화 누락 위험**·매직키 `"SongVolume"` 두 파일 하드코딩(GameConstants 미적용). **메시지**: 6.3 업그레이드+노트 Bloom Kawase 전환·선결로 SongVolume OptionManager 단일 소스 통합+키 상수화.',
    lastUpdate: '6/11 목요일 리서치(목요일·🆕 Unity 6.3 LTS 6000.3 25.12 출시 27.12 지원·모바일 Bloom Kawase/Dual 필터 노트 이펙트 GPU 절감·Burst+IL2CPP 빌드 -22%·HTTP/2 기본화 안드로 CPU -15~20%·🆕 신규 부채 SongVolume 음량 소스 이원화 SongManager 2곳 직접 read+OptionManager static·매직키 두 파일 하드코딩 신규): **💻 P2 MeowBeat Unity 6.3 LTS 업그레이드+노트 히트 Bloom Kawase 필터 전환(모바일 GPU 절감)·선결로 SongVolume을 OptionManager 단일 소스(static 프로퍼티)로 통합+키 상수화**. P0 커밋·UMP 선행. Sources: Unity 6.3 LTS 블로그·6000.3 Whats New·Gamigion 6.3 모바일·URP Bloom.',
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
    taskSummary: '**✅ MeowBeat 검증 4종 ALL PASS(6/11 재실행)**: unity_validate 0err(4.6s)·qa_static 0err·run_regression 2/2(RT_SIZE_ZERO·YAML_INDENT_M_FATHER)·곡10 정합 100%·known_bugs 6패턴·**무회귀**·미커밋 37건도 0err 통과(커밋해도 안전). **🟢 오늘 기여(미커밋 해부)**: 37파일=분리 가능한 3묶음 — GMA 5+i18n 4(GameManager +59줄 9주 미커밋)+폰트/패키지 → 복붙 3커밋으로 환원 가능. **🚨 신규 사각지대**: qa_static이 audioFile/note lane/scene button은 검증하나 **titleKo 누락·RectTransform 앵커(0.05~0.95) 미검증**·곡명 길이 오버플로 정적 검증 불가 → known_bugs에 "titleKo 누락" 패턴 추가 권장. **🚨 NumLink**: Tools 부재+AutoGenTests 삭제로 회귀탐지 0 지속.',
    lastUpdate: '6/11 목요일 리서치(목요일·✅ MeowBeat 검증 4종 ALL PASS unity_validate 0err 4.6s·qa_static 0err·run_regression 2/2·곡10 정합 100%·known_bugs 6패턴·무회귀·🟢 미커밋 37파일을 분리 가능한 3묶음 해부 GMA5+i18n4 GameManager +59줄 9주 미커밋+폰트/패키지·🚨 신규 사각지대 qa_static이 titleKo 누락/RectTransform 앵커 미검증): **🚨 P0 i18n 4파일을 feat(i18n) 단일 커밋으로 9주 회귀 위험 차단**+P1 NumLink Tools 3종 즉시 이식+P2 known_bugs에 titleKo 패턴 추가. Sources: 검증 4종 실행·미커밋 diff 분석.',
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
    taskSummary: '**📦 신규 1순위(인앱 이벤트 매출)**: **애플 In-App Events 종료 후 7일 매출 +20%(Royal Match)·막판 3일 +11%(Candy Crush)** — 신규 설치+휴면 재활성 동시. **📦 신규 2순위(운영 한도/노출면)**: 앱당 승인 15개/동시 노출 10개/최장 31일/14일 전 사전노출·검색·추천탭·제품페이지(인디 무료)·구글 프로모션 콘텐츠 28일 권장·**클릭 후 즉시 딥링크 연결이 전환 핵심**. **적용 메시지**: NumLink·MeowBeat 분기 상시 In-App Event 1개(MeowBeat "주말 더블 보상"·NumLink "한정 챌린지")·콘텐츠 업데이트마다 이벤트 카드 동봉·KPI는 카드 탭→딥링크 진입 전환율.',
    lastUpdate: '6/11 목요일 리서치(목요일·애플 In-App Events 종료 후 7일 +20% Royal Match·막판 3일 +11% Candy Crush·앱당 승인 15개/동시 10개/최장 31일/14일 전 사전노출·노출면 검색·추천탭·제품페이지 인디 무료·구글 프로모션 콘텐츠 28일 권장·딥링크 즉시연결이 전환 핵심 신규): **📦 P2 NumLink·MeowBeat 분기 상시 In-App Event 1개 운영+콘텐츠 업데이트마다 동일 시점 이벤트 카드 동봉(무료 검색·추천 노출+휴면 재활성)·KPI는 이벤트 카드 탭→딥링크 진입 전환율**. P0 커밋·UMP 선행. Sources: Sensor Tower In-App Events·MobileAction IAE/프로모션 가이드 2026·Liftoff 2025 캐주얼.',
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
    taskSummary: '**🛡 CI 현황(실측 6/11)**: agent-office Pages **최근 3런 전부 success**(6/9 56초·6/8 44초·Weekly 35초)·NumLink·Feedme `.github` **둘 다 부재 → CI 0 재확정**. **🆕 신규(매니지드 러너)**: **Blacksmith(무료 3000분)/Namespace(Unity 빌드 적합)가 GitHub 호스티드 대비 2배+ 속도·50%+ 비용절감·`runs-on` YAML 한 줄 마이그레이션**·베어메탈(Tenki) 약 30% 빠름·NVMe Docker 레이어 영속화 최대 40배·GitHub 2026.03 가격 인상으로 대안 매력 증가. **메시지**: 게임 레포 CI 도입 시 GitHub 호스티드 대신 매니지드 러너(Blacksmith/Namespace)를 처음부터 검토·Library 캐싱 결합 시 대폭 단축·초기 비용 거의 0.',
    lastUpdate: '6/11 목요일 리서치(목요일·🛡 agent-office Pages 최근 3런 전부 success 6/9 56초·NumLink·Feedme .github 둘 다 부재 CI 0 재확정·🆕 매니지드 러너 Blacksmith 무료 3000분/Namespace Unity 빌드 적합 GitHub 호스티드 대비 2배+ 속도 50%+ 비용절감 runs-on YAML 한 줄 마이그레이션·베어메탈 Tenki 약 30% 빠름·GitHub 2026.03 가격 인상 신규): **🛡 P2 게임 레포 CI 도입 시점에 GitHub 호스티드 대신 매니지드 러너(Blacksmith/Namespace) 처음부터 검토(Library 캐싱 결합 시 대폭 단축·한 줄 마이그레이션)**. P0 커밋·P1 NumLink CI 선행. Sources: Tenki Runner Showdown 2026·GitHub Engineering larger-runners·GitHub Docs hosted runners.',
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
    taskSummary: '**🎨 신규 1순위(M3 Expressive 스프링)**: 스프링을 spatial(위치·크기·회전)/effects(색·투명도)로 분리·damping 0.6~0.8 오버슈트·**60/30/10 분배 룰(워크호스 ease-out 60%·보조 30%·스프링 10%)**. **🎨 신규 2순위(비대칭 이징)**: 입장 ease-out `cubic-bezier(0,0,0.2,1)`/퇴장 ease-in·토글 sharp·마이크로 인터랙션 100~200ms. **🎨 신규 3순위(브루탈리스트 인터랙티비티)**: 의식적 조작+강한 햅틱/사운드로 "매력적 불완전함". **연결 적용**: NumLink 숫자 타일 "연결 확정" 순간만 spatial 스프링(stiffness 380·damping 0.8)·시작 ease-out/클리어 ease-in 비대칭·<200ms 유지.',
    lastUpdate: '6/11 목요일 리서치(목요일·M3 Expressive 스프링 spatial/effects 분리 damping 0.6~0.8 오버슈트·60/30/10 분배 룰 워크호스 ease-out 60% 보조 30% 스프링 10%·비대칭 이징 입장 ease-out 퇴장 ease-in 토글 sharp 마이크로 인터랙션 100~200ms·브루탈리스트 인터랙티비티 신규): **🎨 P2 NumLink 숫자 타일 M3 Expressive 스프링 도입(연결 확정 순간만 spatial 스프링·시작 ease-out/클리어 ease-in 비대칭·3테마 전환 sharp·전체 <200ms·바운스는 연결 확정 단 한 곳·DOTween Ease.OutBack·View 트윈만 Domain 불변·매직넘버 GameConstants)**. P0 커밋·UMP 선행. Sources: Material Design 3 Motion·M3 Expressive·baraa.app 이징·Primotech 2026.',
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
  '🎯 [진단은 6/10에 끝났다 — 6/11 오늘도 실행 0] 6/10에 "백업→커밋" 재정의로 진단을 완성했으나, 오늘 두 Unity 레포 모두 **오늘 커밋 0건**·MeowBeat 미커밋 37파일·NumLink 36파일 그대로. 6/10 P0 3종(GMA 분리·UMP·NumLink Tools) **전부 미착수**(`gma-25-migration` 브랜치 부재·UMP 코드 작업트리에도 0건·NumLink Tools 디렉터리 여전히 없음). **결론: 부족한 건 "왜"가 아니라 "실행 트리거" 하나** — 6/7~6/8이 규명한 "새벽 무인 실행이라 게임 레포 승인 못 받아 영구 이월"의 재확인',
  '🟢 [오늘의 전환 — 회의 임무를 "진단"에서 "막막함 제거"로] QA가 미커밋 37파일을 분리 가능한 3묶음으로 해부: ① GMA v25 5파일 ② i18n 4파일(GameManager +59줄 9주 미커밋된 게임플레이 핵심) ③ 폰트/패키지/placeholder. 검증 4종 ALL PASS·무회귀라 지금 커밋해도 100% 안전 → "커밋하라"는 추상 명령을 복붙 가능한 3개 git 커밋 명령으로 환원',
  '🚨 P0 [실행 환원·최우선] MeowBeat 미커밋 37파일 → 복붙 3커밋 분리 — ① `chore(gma): GMA v25 마이그레이션`(ADAPTIVE.prefab·768x1024×2·AndroidManifest·AndroidResolverDependencies 5파일) ② `feat(i18n): 곡명 다국어 표시 및 잠금 시각화`(SongData·GameManager +59줄·SongManager·manifest 4파일·9주 미커밋 해소) ③ `chore: 폰트/패키지/placeholder 정리`. 게임 레포라 새벽 무인 불가 → 사용자 승인 1회로 완료',
  '🚨 P0 [출시 차단·후속] MeowBeat UMP 동의 초기화 구현 — GMA 커밋 직후 `MobileAds.Initialize` 앞에 `ConsentInformation.Update`+`canRequestAds` 게이트+동의 폼 로드/표시+EEA 디버그 지역 검증. 미구현 시 EEA/UK 광고 0원+Google 인증 CMP 강제 정책 위반(스토어 거절/계정 정지)·정적 검증 사각지대(Dev grep 0건+QA MobileAds.Initialize 직행 추적 2중 확인)',
  '🔧 P1 [NumLink 검증 인프라 — push 불필요·새벽 가능] ① MeowBeat 템플릿(unity_validate.py·qa_static.py·run_regression.py·known_bugs.json)을 `C:/Unity/NumLink/Tools/`로 복사+씬 경로 갱신(회귀탐지 0→가동) ② AutoGenTests 4파일 `git rm`으로 삭제 확정(59일째 의도적 삭제 종결). 로컬 파일 작업이라 승인 불필요 → 다음 세션 최우선(단 본 회의 워크플로 범위 밖, 별도 세션 처리)',
  '🎮💻📦🎨 P2 [출시 품질 신규 — 모두 P0 후]: Game Designer — MeowBeat "Auto-Fit 조절식 난이도" 모드(직전 3회 정확도 기반 노트 밀도 ±1단계·D30 +22%)+NumLink 일일미션 3개 동시 노출. Developer — Unity 6.3 LTS 업그레이드+노트 Bloom Kawase 전환·선결로 SongVolume OptionManager 단일 소스 통합. Content Writer — NumLink·MeowBeat 분기 상시 In-App Event 1개(종료 후 +11~20%·딥링크 즉시연결). Art Director — NumLink 숫자 타일 M3 Expressive 스프링(연결 확정 순간만·60/30/10 절제·<200ms). QA — known_bugs에 "titleKo 누락" 패턴 추가. **모두 P0 커밋·UMP 후 착수**',
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
