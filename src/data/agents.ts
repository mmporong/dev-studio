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
    taskSummary: '**🔴 6/6 액션아이템 4건 전부 미완료 확정**: ① MeowBeat 백업 ② NumLink 안전망 ③ 두 레포 CI ④ 곡선택 분리 커밋 — 전부 미실행. **🚨 MeowBeat 백업 P0 11일째**: feature/song-ownership-migration upstream 미설정(fatal)·로컬 6커밋 ahead·미커밋 37파일·tip 04-12·56일 미백업·meowbeat/main ahead 37 유지. **🚨 NumLink 안전망 4일째**: AutoGenTests 4파일 삭제(D)·Tools 0개·미커밋 36파일·단 본진 feature/ugui-layerlab은 origin 동기화 양호. **✅ agent-office**: .omc/project-memory.json만 변경·정상. **🎯 진짜 병목 규명**: 11일간 진단은 완벽한데 실행이 0인 이유 = 새벽 무인 실행이라 게임 레포 push 승인을 못 받고, 긴 회의록은 실행 명령이 아니다. 오늘 = 일요일·1개월 임계 D+14·재측정 멈추고 복붙 1줄 명령으로 전환·push 불필요한 NumLink 안전망부터.',
    lastUpdate: '6/7 일요일 스탠드업(🔴 6/6 액션아이템 4건 전부 미완료·진단 11일 실행 0의 정체=새벽 무인 실행이라 게임 레포 push 승인 불가·🚨 MeowBeat 백업 P0 11일째 upstream 미설정 6커밋+미커밋 37파일·🚨 NumLink 안전망 4일째 AutoGenTests 4파일 삭제 D·단 git checkout으로 push 없이 복구 가능): **🚨 P0[복붙] MeowBeat 백업**(미커밋 커밋 후 `git -C C:/Unity/Feedme push -u meowbeat feature/song-ownership-migration`·사용자 아침 1줄 실행) + **🚨 P0[push불필요·우선] NumLink 안전망 복구**(AutoGenTests 4파일 git checkout+_ProjectTemplate Tools 3종 복사·로컬 완결·삭제 의도성 1회 확인) + **🛡 P1 Android 타겟 API 36 백로그(8/31 마감)+CI 골격 Unity Build Automation 무료 Mac 100분 PoC** + **🔍 P2 NumLink 60초 온보딩·앱 프리뷰 영상·엘리베이티드 뉴트럴 컬러**. 메타: 처방이 아니라 처방의 전달 형태(복붙 명령)를 바꾸는 날.',
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
    taskSummary: '**🚀 시장 신규 1순위**: **최적 온보딩 시 리텐션 최대 50%↑·핵심 게임루프 진입은 다운로드 후 60초 내 필수**·캐주얼/매치 퍼즐 우수작 D1 35~45%·D7 ~20%·D30 ~10%·**텍스트 튜토리얼→learn-by-doing(따라 하며 배우기)·gamified 온보딩으로 전환이 표준**(Game Growth Advisor·Antidote FTUE). **🚀 신규 2순위**: 모바일 리듬게임 시장 $2.5B(2024)→$5.3B(2033)·CAGR 9.1%·상위 매출작 45%가 IAP+광고+패스 결합·"쉽게 배우는 접근성"이 시장 확장 핵심. **🚀 신규 3순위**: 2026 PC 신작 Stip(Metroidbrainia=규칙 발견형)이 숫자퍼즐 차별화 사례 — NumLink 후반 "숨은 규칙 발견형" 변주 검토 여지. **적용 메시지**: NumLink "60초 룰 온보딩" — 설정/계정/텍스트 패널 없이 고스트핸드로 첫 연결 유도·성공 시 즉시 보상·텍스트 설명 전면 제거(D1 35%+ 목표).',
    lastUpdate: '6/7 일요일 리서치(일요일·1개월 임계 D+14·최적 온보딩 리텐션 최대 50%↑·핵심루프 60초 내 진입 필수·캐주얼/매치 퍼즐 우수작 D1 35~45%·텍스트 튜토리얼→learn-by-doing 전환 표준·모바일 리듬게임 시장 $2.5B→$5.3B CAGR 9.1%·Stip Metroidbrainia 규칙발견형 신규): **🎮 P2 NumLink "60초 룰 온보딩" — 다운로드 직후 고스트핸드 가이드로 숫자 2개 직접 연결·성공 시 즉시 코인/별 보상·텍스트 설명 전면 제거**(D1 35%+ 목표). P0 백업·안전망 선행. Sources: Game Growth Advisor·Antidote·Verified Market Reports·Bleeding Cool(Stip).',
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
    taskSummary: '**🆕 기술 신규 1순위**: **Google Play 2026-08-31부터 타겟 API 36(Android 16) 강제**(2025-08-31 API 35 강제에 이어·Wear OS/TV는 35)·MeowBeat 현 35에서 상향 필요. **🆕 신규 2순위**: 빌드크기 2026 권고=ASTC 8x8 블록(4x4=8bpp 고품질 vs 12x12=0.89bpp 저용량)+Addressables Brotli/Gzip 번들 압축으로 초기 다운로드 절반 절감·리듬게임 오디오는 DSP time 동기화 핵심·FMOD($200K 미만 무료) vs Wwise(메모리 제어 우수). **🔎 코드 분석**: MeowBeat 미커밋은 곡 음량 슬라이더(OptionManager 0~1 Clamp·PlayerPrefs "SongVolume"·ApplyVolume로 AudioSource 반영·+110줄)+GameManager 59줄/SongManager 16줄 연동+manifest 신곡 1곡·부수 unity-cli→CoplayDev unity-mcp(beta) 교체. NumLink 미커밋은 AutoGenTests 삭제+폰트 SDF 재임포트 위주·기능 변경 아님. **메시지**: 음량 슬라이더를 feat(songselect) 단일 커밋으로 마무리(P0 백업 일부)+API 36 백로그 등록(8/31 마감)+NumLink chore 분리 커밋.',
    lastUpdate: '6/7 일요일 리서치(일요일·🆕 Google Play 2026-08-31 타겟 API 36 Android 16 강제 MeowBeat 현 35 상향 필요·빌드크기 ASTC 8x8+Addressables Brotli/Gzip 초기 다운로드 절반 절감·리듬 오디오 DSP time FMOD vs Wwise·🔎 MeowBeat 미커밋 곡 음량 슬라이더 OptionManager PlayerPrefs+AudioSource +110줄+manifest 신곡 1곡 신규): **🔧 P1 MeowBeat 음량 슬라이더 feat(songselect) 단일 커밋으로 마무리(P0 백업 일부)+Android 타겟 API 36을 2026-08-31 마감 백로그 등록+NumLink AutoGenTests 삭제·폰트 재임포트 chore 분리 커밋**. P0 백업·안전망 선행. Sources: Google Play target API 정책·Unity 빌드 최적화 ASTC/Addressables·FMOD vs Wwise.',
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
    taskSummary: '**✅ MeowBeat 검증 3종 ALL PASS**: unity_validate 0 error/0 warning(5.0s)·qa_static 0 error/0 warning(**6/6 상대경로 cwd 거짓 error 2건 해소·개선**)·run_regression 2/2 PASS(RT_SIZE_ZERO·YAML_INDENT_M_FATHER)·곡10(audio 누락 0)·known_bugs 6패턴·미해결 버그 0건·.meta 3종(Input/Item/SaveLoad) 삭제는 GUID 참조 0이라 안전. **🚨 최대 리스크=안전망 비대칭**: NumLink는 Tools 폴더 부재(검증툴 4종 전부 없음)+Assets/Tests/Editor 비어있음(AutoGenTests 4파일 D)+테스트 .cs 0개 → 회귀 무방비 4일째·MeowBeat만 안전망 보유. **⚠️ 잠재 악화**: 양 프로젝트 미커밋 누적(MeowBeat 37·NumLink 36)+?? _Recovery/·AutoQATests/·MainScene.unity.bak_btn 잔존 리뷰 사각지대.',
    lastUpdate: '6/7 일요일 리서치(일요일·✅ MeowBeat 검증 3종 ALL PASS unity_validate 0err·qa_static 0err(6/6 거짓에러 2건 해소)·run_regression 2/2·곡10·known_bugs 6패턴·버그0·.meta 3종 삭제 GUID 참조 0 안전·🚨 안전망 비대칭 NumLink Tools 부재+AutoGenTests 4파일 D 회귀 무방비 4일째 신규): **🚨 P0 NumLink 안전망 복구 — AutoGenTests 4파일 git checkout + _ProjectTemplate Tools 3종 복사 후 unity_validate 베이스라인 0-error 확보**(push 불필요·로컬 완결·오늘 처리 가능한 유일 P0·단 삭제 의도성 1회 확인). MeowBeat 안정·추가 조치 불필요. Sources: unity_validate/qa_static/run_regression 실행·git status·manifest 파싱.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **앱스토어 앱 프리뷰 영상 15~30초·첫 3초 후크 → 스크린샷 단독 대비 전환율 +20~35%**·다수 무음 시청이라 자막/캡션 필수·0~5초 후크/5~20초 핵심기능/20~30초 앱명+CTA 구조(6/5 첫 스크린샷 A/B·6/6 인앱이벤트와 겹치지 않는 신규 토픽). **📦 신규 2순위**: **캐주얼 게임 아이콘 A/B는 구글플레이 중앙값 +8~12%로 스크린샷보다 우위**(iOS는 스크린샷 첫 3프레임 +10~25%)·친근한 캐릭터 단독 노출 설치 +21.5%·강한 2색 대비가 홈스크린 탭률 개선·대규모 변경은 12~18개월 주기. **적용 메시지**: NumLink/MeowBeat 출시 전 15~30초 앱 프리뷰 영상(첫3초 후크·무음 자막)+아이콘 A/B(MeowBeat 고양이 클로즈업·NumLink 2색 고대비 숫자 연결).',
    lastUpdate: '6/7 일요일 리서치(일요일·앱 프리뷰 영상 15~30초 첫3초 후크 설치율 +20~35% 무음 자막 필수·캐주얼 아이콘 A/B 구글플레이 +8~12% 스크린샷보다 우위·친근한 캐릭터 단독 노출 +21.5%·대규모 변경 12~18개월 주기 신규): **🔍 P2 NumLink/MeowBeat 출시 전 15~30초 앱 프리뷰 영상(첫3초 후크·무음 자막)+구글플레이 우선 아이콘 A/B** — MeowBeat 고양이 클로즈업·NumLink 2색 고대비 숫자 연결 모션을 후보 아이콘으로 준비. P0 백업·안전망 선행 후. Sources: 앱 프리뷰 영상 최적화 2026·아이콘 A/B 벤치마크(구글플레이/iOS).',
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
    taskSummary: '**🛡 CI 현황(실측 6/7)**: NumLink·MeowBeat 둘 다 `.github/workflows/` 없음(둘 다 `.git` 로컬 저장소는 존재→원격 푸시·CI 연결만 추가하면 됨)·11일째 동일·agent-office는 deploy-pages.yml+weekly-insights.yml 정상·**최근 배포 3회 전부 completed success(36/50/40초)**·오늘 CI/CD 변경 없음. **🆕 신규**: **Unity Build Automation/Unity DevOps 2026-03-01부터 무료티어 확대** — Windows 200분+**Mac(Standard) 100분+Linux 100분/월**·**iOS·macOS 빌드 신규 무료 허용**·스토리지 5GB→25GB·이그레스 100GB 무료. **메시지**: MeowBeat 모바일 Mac/iOS 빌드를 GitHub Actions Mac 러너($0.08/min)+라이선스 활성화 대신 Unity Build Automation 무료 Mac 100분 PoC로 우선 검토.',
    lastUpdate: '6/7 일요일 리서치(일요일·🛡 두 Unity 레포 .github 부재 11일째 동일 CI 전무·agent-office GitHub Pages 최근 3회 success 36~50초·오늘 CI/CD 변경 없음·🆕 Unity Build Automation 2026-03-01 무료티어 확대 Windows 200분+Mac 100분+Linux 100분/월 iOS·macOS 빌드 신규 무료 허용 스토리지 5GB→25GB 신규): **🛡 P1 MeowBeat CI 골격 추가 시 GitHub Actions+라이선스 활성화보다 Unity Build Automation 무료 Mac 100분 PoC 우선 검토**(모바일 Mac/iOS 빌드 무비용 검증·라이선스 Unity 내장 처리·단 무료 100분 소진 빠르니 빌드 빈도 통제). P0 백업·안전망 선행 후. Sources: Unity DevOps 신규 가격(2026-03-01)·Build Automation 가격·Unity Pricing Updates.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **2026 캐주얼 컬러 정석은 "엘리베이티드 뉴트럴"** — 웜샌드 #E8DFD0~뮤티드클레이 #C9A88A 베이스+레벨당 단일 비비드 액센트(네온코랄·애시드옐로·비비드틸 중 1색)만·**민트+다크 그라데이션은 전형적 AI슬롭이라 회피**(Envato·Updivision·6/6 스프링 피직스/tabular figures와 겹치지 않는 신규 토픽). **🎨 신규 2순위**: 타이포 타이틀만 굵은 버블 디스플레이+숫자/본문 가독성 산세리프 이원화=개성+가독성(Letterhend). **🎨 신규 3순위**: 펫게임 "코지 데스크탑펫 르네상스"(2D 핸드드로운 마스코트)·모바일 콘페티 50개 이하 60fps·주스는 순간 이벤트에 집중·결과화면 콘페티는 절제. **연결 적용**: NumLink 컬러를 엘리베이티드 뉴트럴 베이스+단일 비비드 액센트("calm base+bold accent")로 재정의·CTA·완성 라인에만 비비드.',
    lastUpdate: '6/7 일요일 리서치(일요일·2026 컬러 정석 엘리베이티드 뉴트럴 웜샌드~뮤티드클레이 베이스+단일 비비드 액센트·민트+다크 그라데이션은 AI슬롭이라 회피·타이포 타이틀 버블 디스플레이+본문 가독성 산세리프 이원화·펫게임 코지 데스크탑펫 르네상스 2D 핸드드로운·모바일 콘페티 50개 이하 60fps 신규): **🎨 P2 NumLink 테마 컬러를 민트/다크→엘리베이티드 뉴트럴 베이스(웜샌드~뮤티드클레이)+레벨당 단일 비비드 액센트로 재정의**(Layer Lab 9-slice도 CTA 버튼·완성 라인에만 비비드 몰아주는 calm base+bold accent·타이틀만 버블 디스플레이·본문 가독성 산세리프). P0 백업·안전망 선행 후. Sources: Envato·Updivision·Letterhend·AAA Game Art·RetroStyle·PC Gamer·GameAnalytics.',
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
  '🔴 [진단 11일·실행 0의 정체 규명] 6/6 액션아이템 4건(MeowBeat 백업·NumLink 안전망·두 레포 CI·곡선택 분리 커밋)을 전수 대조한 결과 **전부 미완료**. 11일간 진단은 완벽한데 실행이 0인 진짜 이유 = **이 회의가 새벽 무인 자동실행이라 게임 레포 push 승인을 받을 수 없고, 아침에 보는 긴 회의록은 "실행 명령"이 아니다.** 오늘은 재측정을 멈추고 처방의 전달 형태를 "복붙 1줄 명령"으로 전환',
  '✅ [QA 안전망 비대칭 확인] MeowBeat 검증 3종 ALL PASS(unity_validate 0err·qa_static 0err=6/6 거짓에러 2건 해소·run_regression 2/2·곡10·버그0). 반면 NumLink는 Tools 부재+AutoGenTests 4파일 삭제(D)로 회귀 무방비 4일째. ✅ agent-office는 .omc/project-memory.json만 변경·정상',
  '🚨 P0 [복붙 명령] MeowBeat 백업 — 11일째 이월·사용자 아침 1줄 실행: 미커밋 37파일(곡 음량 슬라이더 단일 작업)을 ① `git -C C:/Unity/Feedme add -A` ② `git -C C:/Unity/Feedme commit -m "feat(songselect): 곡 음량 옵션 및 한국어 제목 추가"` ③ `git -C C:/Unity/Feedme push -u meowbeat feature/song-ownership-migration`로 6커밋+신커밋 일괄 백업. tip 04-12·56일 미백업. **새벽 무인이라 게임 레포 push는 사용자 아침 승인 후**',
  '🚨 P0 [push 불필요·우선] NumLink 회귀 안전망 복구 — 4일째·로컬에서 완결: push 승인이 필요 없는 유일 P0이라 최우선. ① `git -C C:/Unity/NumLink checkout -- "Assets/Tests/Editor/AutoGenTests.cs" "...AutoGenTests.cs.meta" "...AutoGenTests.asmdef" "...AutoGenTests.asmdef.meta"`로 4파일 복구 ② `C:\\Unity\\_ProjectTemplate\\Tools\\`에서 unity_validate.py·qa_static.py·run_regression.py·known_bugs.json 복사+씬 경로 상수 갱신 ③ unity_validate 베이스라인 0-error. **단 AutoGenTests 삭제가 의도적이었는지 사용자 1회 확인**(6/6도 복구 안 함→의도 가능성)',
  '🛡 P1 [Android 타겟 API 36 백로그 + CI 골격 — Developer·DevOps]: Google Play가 2026-08-31부터 타겟 API 36(Android 16)을 강제하므로 MeowBeat(현 35)를 8/31 마감 백로그 등록. CI 골격은 GitHub Actions+라이선스 활성화보다 2026-03-01 확대된 **Unity Build Automation 무료 Mac 100분/월 PoC**를 우선 검토(모바일 Mac/iOS 빌드 무비용 검증). MeowBeat 음량 슬라이더는 feat(songselect) 단일 커밋으로 분리(P0 백업과 자연 연결)',
  '🔍 P2 [출시 준비 — 모두 P0 백업·안전망 후]: Game Designer — NumLink "60초 룰 온보딩"(설정/계정/텍스트 패널 없이 고스트핸드로 첫 연결·성공 시 즉시 보상·텍스트 설명 전면 제거·D1 35%+ 목표). Content Writer — 출시 전 15~30초 앱 프리뷰 영상(첫3초 후크·무음 자막·+20~35% 설치율)+아이콘 A/B(MeowBeat 고양이 클로즈업·NumLink 2색 고대비). Art Director — NumLink 컬러를 엘리베이티드 뉴트럴 베이스+단일 비비드 액센트로 재정의(민트+다크 AI슬롭 회피). **모두 P0 후 착수**',
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
