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
    taskSummary: '**🟢 13일 "백업 P0" 프레이밍 오진 종결(실행으로)**: `git push -u origin feature/song-ownership-migration` 결과 **"Everything up-to-date"** — 커밋분은 이미 origin 백업돼 있었고 upstream tracking 미설정이 fatal 착시를 만들었을 뿐·어제 "72커밋 미백업"은 추적 메타데이터 부재 착시. 오늘 `-u`로 추적 정상화. **🎯 진짜 P0 재정의**: "백업"이 아니라 **"미커밋 37파일(GMA+다국어+음량)이 8주째 커밋조차 안 됨"** — push로는 안 잡히고 커밋 없으면 백업도 없다. **NumLink**: feature/ugui-layerlab origin 0/0 동기화로 UI 백업 양호·미커밋 36파일·마지막 커밋 6/2·Tools 부재. **측정값**: 두 레포 오늘 커밋 0건·MeowBeat 미커밋 37·NumLink 36·어제 액션(GMA·UMP·Tools·fastlane) 전부 미착수. **🎯 메타**: 수요일·D+17·"백업"을 "커밋"으로 교체한 날.',
    lastUpdate: '6/10 수요일 스탠드업(🟢 "백업 P0" 13일 프레이밍 오진 종결 push -u 결과 Everything up-to-date 커밋분 이미 백업·upstream 미설정이 fatal 착시·진짜 P0는 "백업"이 아니라 미커밋 37파일 8주째 커밋 안 됨·NumLink origin 0/0 동기화 백업 양호): **🚨 P0[재정의] MeowBeat GMA v25 별도 브랜치 분리 커밋(8주 미커밋 해소)** + **🚨 P0[출시 차단] UMP 동의 초기화 구현(Dev+QA 2중 확인)** + **🔧 P1 NumLink Tools 3종 이식+AutoGenTests git rm 확정+cache 빌드 워크플로 선배치** + **🎮💻📦🎨 P2 농장 메타 첫 3~5세션·audio calibration·평점 4.5+ KPI·Soft 3D 마스코트 아이콘**. 메타: "백업"을 "커밋"으로 교체한 날.',
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
    taskSummary: '**🆕 시장 신규 1순위(메타층 LTV)**: **하이브리드캐주얼 D30 8~12%로 하이퍼(1~3%)의 4~5배** — 차이는 농장/빌딩 메타층·ARPDAU $0.15~0.50·D90 LTV $4~12·D30 결제전환 3~5%·**LTV의 90%가 메타층에서 발생**·메타가 3~5세션 내 등장해야 D30 곡선 진입. **🆕 신규 2순위(리워드 광고)**: **리워드 광고 노출 유저는 IAP 4배+평균 결제액 +326%(최대 +500%)**·eCPM iOS $19.63 — 광고가 결제를 촉진. **적용 메시지**: MeowBeat 곡 클리어 보상→농장 건물/고양이 해금 루프를 첫 3~5세션 배치·NumLink는 "레벨 클리어→컬렉션 도감" 메타.',
    lastUpdate: '6/10 수요일 리서치(수요일·D+17·하이브리드캐주얼 D30 8~12% 하이퍼 1~3%의 4~5배·농장 메타 ARPDAU $0.15~0.50 D90 LTV $4~12·LTV 90%가 메타층·메타 3~5세션 내 등장해야 D30 진입·리워드 광고 노출 유저 IAP 4배+평균결제 +326% eCPM iOS $19.63 신규): **🎮 P2 MeowBeat 농장 빌딩 메타 첫 3~5세션 배치(곡 클리어→농장 재화→건물 해금 루프)**·NumLink 레벨 클리어→컬렉션 도감 메타. P0 커밋·UMP 선행. Sources: Game Growth Advisor 하이브리드캐주얼 2026·MAF.ad 리워드 광고·KPI 벤치마크 2026.',
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
    taskSummary: '**🔎 미커밋 실측**: SongData +titleKo·GameManager +59줄(다국어 GetSongDisplayTitle+곡버튼 앵커 0.05~0.95 통일)·SongManager +16줄(곡별 밸런스×음량)·manifest +titleKo. **UMP 상태**: GMA 변경은 Manifest/Resolver만 떠 있고 `ConsentInformation`/`UserMessagingPlatform`/`ConsentForm` grep **0건**·DLL만 import → 동의 흐름 코드 미작성. **🆕 오디오**: `AudioSource.PlayScheduled`+DSP 1초 윈도우 시작 동기화·DSP↔게임시간 선형회귀·**기기별 audio offset calibration 필수(연주자 0.02초 감지)**. **🆕 보안**: Unity 6.3 Package Manager 서명 패키지·2026 Asset Store 암호화 서명 의무(npm Shai-hulud 배경). **메시지**: GMA chore/gma-25-migration 분리 커밋+기기별 calibration UI.',
    lastUpdate: '6/10 수요일 리서치(수요일·미커밋 실측 SongData +titleKo·GameManager +59줄 다국어+앵커·SongManager +16줄 곡별 음량·UMP grep 0건 MobileAds.Initialize 직행·🆕 PlayScheduled+DSP 시작 동기화·기기별 audio offset calibration 필수 연주자 0.02초 감지·Unity 6.3 서명 패키지·2026 Asset Store 암호화 서명 의무 신규): **🚨 P0 GMA chore/gma-25-migration 별도 브랜치 분리 커밋+게임플레이는 별도 feat 커밋** + **P2 기기별 audio offset calibration 슬라이더 UI+PlayScheduled 시작 동기화(판정 정확도=출시 전 체감 품질 최대 레버)**. Sources: exceed7 DSP sync·Rhythm Quest devlog·Unity 2026 roadmap.',
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
    taskSummary: '**✅ MeowBeat 검증 3종 ALL PASS(6/10 재실행)**: unity_validate 0err·qa_static 0err·run_regression 2/2(RT_SIZE_ZERO·YAML_INDENT_M_FATHER)·곡10(audio 누락 0)·known_bugs 6패턴·버그0·**무회귀**·미커밋 37건도 0err 통과. **🚨 출시 차단급 리스크(독립 확인)**: AdMob이 UMP 동의 없이 `MobileAds.Initialize` 직행 = GDPR/구글 정책 위반·Developer grep 0건과 독립적으로 코드 추적 동일 결론(2중 확인)·정적 검증 사각지대. **🚨 NumLink 검증 인프라 0 지속**: Tools 부재+Assets/Tests/Editor 빈 폴더+AutoGenTests 삭제로 회귀탐지 0·어제와 동일·품질 격차 방치.',
    lastUpdate: '6/10 수요일 리서치(수요일·✅ MeowBeat 검증 3종 ALL PASS unity_validate 0err·qa_static 0err·run_regression 2/2·곡10·known_bugs 6패턴·버그0 무회귀·🚨 AdMob UMP 동의 없이 MobileAds.Initialize 직행 GDPR/구글 정책 위반 출시 차단급 Dev grep과 독립 2중 확인·🚨 NumLink 검증 인프라 0 지속 Tools 부재+Editor 빈 폴더 회귀탐지 0): **🚨 P0 MeowBeat UMP 동의 흐름 구현을 출시 차단 게이트로 지정**(미구현 시 스토어 거절/계정 정지)+P1 NumLink Tools 3종 즉시 이식. Sources: unity_validate/qa_static/run_regression 실행·MobileAds.Initialize 호출 추적.',
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
    taskSummary: '**📦 신규 1순위(평점 최신성)**: **2026 ASO 알고리즘이 키워드 매칭→리텐션·평점 최신성 중심으로 이동**·애플 3월 검색광고 추가·**평점 3→4스타 전환 시 설치전환 +89%·4.5+ 평점은 설치 3배**·신규 리뷰 최신성이 랭킹 직접 반영(출시 직후 2주 결정적). **📦 신규 2순위(아이콘 A/B)**: **캐주얼 게임 아이콘 A/B 리프트 4~8%(구글플레이 8~12%)**·친근한 캐릭터형 우위. **적용 메시지**: NumLink·MeowBeat "평점 4.5+ 사수" KPI화+인앱 평점 팝업을 클리어/콤보 직후에만+출시 직후 2주 리뷰 유도+아이콘 A/B(숫자캐릭터·고양이) 출시 전 필수.',
    lastUpdate: '6/10 수요일 리서치(수요일·2026 ASO 알고리즘 키워드→리텐션·평점 최신성 이동·애플 3월 검색광고 추가·평점 3→4스타 설치전환 +89%·4.5+ 설치 3배·캐주얼 아이콘 A/B 리프트 4~8% 구글플레이 8~12% 신규): **📦 P2 NumLink·MeowBeat "평점 4.5+ 사수" KPI화+인앱 평점 팝업을 클리어/콤보 성공 직후에만 노출+출시 직후 2주 리뷰 유도 캠페인+아이콘 A/B(숫자캐릭터·고양이) 출시 전 필수**. P0 커밋·UMP 선행. Sources: Apptweak ASO News 2026·Strataigize·AppFollow App Rating Impact.',
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
    taskSummary: '**🛡 CI 현황(실측 6/10)**: agent-office Pages **최근 5회 전부 success**(마지막 6/9 44초)·NumLink·Feedme .github·fastlane **둘 다 미배치**(어제 P1 진행 0·디렉터리조차 없음). **🆕 신규(증분 빌드)**: **`actions/cache@v4` Library 캐싱만으로 CI 빌드 40~50% 단축**·asmdef 증분 컴파일 70~80%·플랫폼별 Library 분리 전환당 5~10분·실측 15분→5분(일 10회 약 2시간). **메시지**: fastlane은 .github 부재로 진행 불가 → NumLink에 `actions/cache@v4` Library 캐싱 최소 빌드 워크플로(build.yml) 1개 먼저 배치(캐싱 효과 검증 후 fastlane 확장·CI 0→1 첫 도미노).',
    lastUpdate: '6/10 수요일 리서치(수요일·🛡 agent-office Pages 최근 5회 전부 success 마지막 6/9 44초·NumLink·Feedme .github·fastlane 둘 다 미배치 어제 P1 진행 0·🆕 actions/cache@v4 Library 캐싱만으로 CI 빌드 40~50% 단축·asmdef 증분 70~80%·실측 15분→5분 신규): **🛡 P1 NumLink에 actions/cache@v4 Library 캐싱 최소 빌드 워크플로(.github/workflows/build.yml) 1개 먼저 배치**(fastlane은 .github 부재로 진행 불가·캐싱 효과 40~50% 검증 후 fastlane 확장·CI 0→1 첫 도미노). Sources: game-ci/unity-builder #612·DrCodes Build Time 70%·GameCI docs.',
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
    taskSummary: '**🎨 신규 1순위(아이콘)**: **2026 아이콘은 Soft 3D(플러시·파스텔·촉각질감)+Mascot(마이크로캐릭터) 조합이 캐주얼 설치율 +20% 레버**(Duolingo 부엉이式 브랜드 리콜)·MeowBeat는 고양이 마스코트 파스텔 그라데이션+촉각질감·NumLink는 Bold Geometric(굵은 스트로크+펀치 컬러). **🎨 신규 2순위(햅틱)**: **transient(탭)/continuous(텍스처) 분리+sharpness 의미 전달·On/Minimal/Off 3단+단일 HapticService 집중화**. **🎨 신규 3순위(캐릭터)**: **농장 캐릭터 squash-stretch 차등(기쁨=stretch·졸림=squash)**. **연결 적용**: MeowBeat 아이콘 Soft 3D 플러시 마스코트 확정+farm 먹이 squash-stretch 차등 1프레임.',
    lastUpdate: '6/10 수요일 리서치(수요일·2026 아이콘 Soft 3D 플러시+Mascot 캐주얼 설치율 +20% 레버 Duolingo式·햅틱 transient/continuous 분리+sharpness+단일 HapticService·농장 캐릭터 squash-stretch 차등 기쁨=stretch 졸림=squash 신규): **🎨 P2 MeowBeat 앱 아이콘 "Soft 3D 플러시 마스코트" 확정+farm 먹이 애니메이션 squash-stretch 차등(받기 직전 졸린=squash·먹는 순간=stretch 과장 1프레임)+햅틱 단일 HapticService 집중화**. P0 커밋·UMP 선행. Sources: 99designs·Envato icon trends·Newly haptics·CGWire squash-stretch.',
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
  '🟢 ["백업 P0" 13일 프레이밍 오진 종결 — 실행으로] 어제 측정 "MeowBeat 작업브랜치 72커밋 미백업"을 오늘 `git -C C:/Unity/Feedme push -u origin feature/song-ownership-migration`으로 검증 → 결과 **"branch set up to track / Everything up-to-date"**. 즉 커밋분은 이미 origin에 백업돼 있었고, upstream tracking 미설정 때문에 추적이 안 돼 fatal로 보였을 뿐. 오늘 `-u`로 추적 정상화되어 13일짜리 "백업 안 됨" 착시는 영구 종결',
  '🎯 [진짜 P0 재정의 — "백업"이 아니라 "커밋"] 13일간 "백업하라"는 프레이밍이 틀렸다. 정확한 P0는 **"미커밋 37파일(GMA 마이그레이션+곡 한/영 다국어+곡별 음량)이 8주째 커밋조차 안 된 것"** — push로는 절대 안 잡히고, 커밋이 없으면 백업도 없다. NumLink는 feature/ugui-layerlab이 origin과 0/0 동기화로 백업 양호',
  '🚨 P0 [재정의·최우선] MeowBeat GMA v25 별도 브랜치 분리 커밋 — ① GMA 변경(AndroidResolverDependencies·AndroidManifest·Plugins/Android·PlaceholderAds)을 `chore/gma-25-migration`으로 분리 커밋 ② 게임플레이 변경(SongData titleKo·GameManager 다국어+앵커·SongManager 음량)은 별도 feat 커밋 ③ Packages manifest unity-mcp 교체는 별도 chore. 8주 미커밋 해소가 1순위',
  '🚨 P0 [출시 차단 게이트] MeowBeat UMP 동의 초기화 구현 — Developer(grep 0건)와 QA(`MobileAds.Initialize` 직행 추적)가 **UMP 동의 흐름 0건을 독립 2중 확인**. `MobileAds.Initialize` 앞에 `ConsentInformation.Update`+`canRequestAds` 게이트 추가+동의 폼 로드/표시+EEA 디버그 지역 검증. 미구현 시 EEA/UK 광고 0원+Google 인증 CMP 강제 정책 위반(스토어 거절/계정 정지). 정적 검증 사각지대',
  '🔧 P1 [NumLink 검증 인프라] ① AutoGenTests 4파일 `git -C C:/Unity/NumLink rm Assets/Tests/Editor/AutoGenTests.*`로 삭제 확정 커밋(59일째 의도적 삭제 종결) ② MeowBeat 템플릿(unity_validate.py·qa_static.py·run_regression.py·known_bugs.json)을 NumLink/Tools/로 복사+씬 경로 갱신 ③ DevOps: fastlane(.github 부재로 진행 불가) 대신 NumLink에 **`actions/cache@v4` Library 캐싱 최소 빌드 워크플로(.github/workflows/build.yml) 1개 선배치** — 빌드 40~50% 단축 검증 후 fastlane 확장(CI 0→1 첫 도미노)',
  '🎮💻📦🎨 P2 [출시 품질 — 모두 P0 후]: Game Designer — MeowBeat 곡 클리어 보상→농장 건물/고양이 해금 루프를 첫 3~5세션 배치(D30 8~12% 진입·LTV 90%가 메타층). Developer — 기기별 audio offset calibration 슬라이더 UI+`PlayScheduled` 시작 동기화(판정 정확도=출시 전 체감 품질 최대 레버). Content Writer — NumLink·MeowBeat "평점 4.5+ 사수" KPI화+인앱 평점 팝업을 클리어/콤보 직후에만+아이콘 A/B. Art Director — MeowBeat 아이콘 "Soft 3D 플러시 마스코트" 확정+farm 먹이 squash-stretch 차등. **모두 P0 후 착수**',
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
