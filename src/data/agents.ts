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
    taskSummary: 'NumLink **재동결 12일째**(어제 11→12·4/29 b6d7a73 이후 28일 0커밋·한 달 D-2·41파일 미커밋). MeowBeat **45일 = 6주+3일 임계 초과**(쌍 신기록 갱신·어제 44→45·4/12 657032c 이후·36파일 미커밋). **🚨 어제 5/26 P0 3건 13일 연속 모두 미실행 = 인프라 리셋 출발점 0/3 실행**: bak_btn git rm 0건·NumLink Tools 부트스트랩 0건·CF 검증 0건. **🚨 33일 연속 결정 실패 1개월 임계 +3일 역대 최장 신기록 갱신**(4주+5일·13일째 결정 마비 고착). **🔍 검증 충돌 정정**: **UIThemeSwitcher.cs.meta 메인 `git ls-files` 직접 검증 = .cs 추적/.meta 미추적(`??`) = GUID a9f063 휘발 위험 확정**(Developer 정답·QA "쌍 정상"은 디스크 존재만 본 오판·30초 git add 해결 진짜 P0·어제 bak_btn 충돌과 동일 패턴). **bak_btn D+50 돌파**: `ls -la` 직접 확인 = 1,598,524 bytes 잔존 확정. **DailyStandup 스케줄러 정상**: 다음 5/28 04:00·Status=Running·LastResult=267009. **🚨 PKM_GBrain_Sync 이틀 연속 LastResult=1 실패**(GBrain 동기화 정지·신규 인프라 블로커). agent-office Pages 배포 정상(Deploy 3건 success). **마감 카운트다운**: Steam Next Fest 자산 6/3 D-7·Imagen EOL 6/24 D-28·GHA Node24 6/16 D-20·WWDC D-12(6/8). 오늘 = 수요일 평일 셋째날 + 인프라 리셋 출발점 0/3 실행 직후.',
    lastUpdate: '5/27 수요일 스탠드업(🚨 33일 연속 결정 실패 1개월 +3일 역대 최장 신기록·MeowBeat 45일 6주+3일·NumLink 28일/재동결 12일·어제 P0 3건 13일 연속 0/3 실행·bak_btn D+50 돌파·UIThemeSwitcher 검증 충돌 정정): **🚨 검증완료 2건만 강제 실행 합의**: **🚨 P0 30s bak_btn git rm 1줄 강제 실행**(D+50 잔존 확정·13일 연속 미실행 차단·인프라 리셋 출발점·`git -C C:/Unity/Feedme rm "Assets/Scenes/MainScene.unity.bak_btn" "Assets/Scenes/MainScene.unity.bak_btn.meta"` + commit) + **🚨 P0 30s NumLink UIThemeSwitcher.cs.meta git add**(메인 `git ls-files` 검증완료 진짜 P0·.meta 미추적 = GUID 휘발 차단·CLAUDE.md 위반) + **🚨 P0 30m PKM_GBrain_Sync 이틀 연속 실패 복구 진단**(신규 인프라 블로커·로그 확인) + **🔥 P1 NumLink Tools 부트스트랩 10m + Kawaii 클레이모피즘 1차 적용 1h** + **🔧 P1 MeowBeat 리듬↔농장 단일 루프 설계 + 코어 4파일 분리 커밋 14일 이월 종결** + **🔍 P2 CPP 초안·UA Android 집중·GHA 액션 SHA 핀·Play Games v1 영향 평가**(새 P0 적재 중단·검증된 2건 강제 후 단계 진행).',
    priority: 'high',
    energy: 80,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🚀 시장 신규 1순위**: **Nom Nom: Cozy Forest Café**(Steam·솔로 개발) — **박자에 맞춰 요리하는 리듬 + 카페 운영 결합 루프**·리듬 입력 성과를 카페 운영 보상에 직결해 코지 장르에 안착·**MeowBeat 직접 차용 = 리듬 콤보 성과 → 농장 수확·고양이 보상으로 이어지는 단일 루프로 두 핵심(리듬+농장)을 한 화면에 묶는 설계**. **🚀 시장 신규 2순위**: **블록블래스트 21일 우주로켓 라이브옵스 마라톤**(MAF·일매출 $584K·DAU 7000만) — 장기 테마 이벤트 + 일일 수집 보상 리텐션 견인·**NumLink 21일 테마 시즌 라이브옵스 + 일일 퍼즐 수집 보상 모델 적용**. **🚀 시장 신규 3순위**: **MONOPOLY Match**(Sensor Tower 4월 톱10) — 매치3 클리어 → 주사위 보드 이동·**장르 크로스오버 + 메타 진행 레이어**(NumLink 퍼즐 클리어 → 맵 진행 메타 차용 여지). **GDD 핵심 통합 메시지**: **MeowBeat = Nom Nom식 리듬↔보상 단일 루프 + "농장 사이클이 비트" 카피**(어제 합의 유지·Rhythm Animal Café Q1 2026 정면 충돌 회피).',
    lastUpdate: '5/27 수요일 리서치(평일 셋째날·1개월 임계 D+3): **🔥 P1 30m MeowBeat 리듬↔농장 단일 루프 1차 설계**(Nom Nom 코지숲카페 차용·곡 클리어 콤보 등급 → 농장 수확량/고양이 보상 결정적 매핑·리듬+농장을 한 화면 단일 루프로 묶기) + **P2 30m NumLink 21일 시즌 라이브옵스 + 일일 수집 보상 컨셉 메모**(블록블래스트 우주로켓 마라톤 차용·$584K/일 리텐션 모델) + **P2 30m MONOPOLY Match 매치3→보드 메타 진행 레이어 NumLink 적용 검토**(퍼즐 클리어 → 맵 진행 크로스오버) + **P3 MeowBeat 차별화 1줄 카피 픽스 유지**("농장 사이클이 비트가 되는 코지 리듬게임"·어제 합의 유지). Sources: Nom Nom Cozy Forest Café(Steam)·블록블래스트 MAF·Sensor Tower April 2026·ASO World May 2026 Preview·PCGamer Cozy Games May 2026.',
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
    taskSummary: '**🔍 검증 충돌 정정**: **UIThemeSwitcher.cs.meta = 메인 `git ls-files` 직접 검증으로 Developer 분석 정답 확정** — `.cs`는 git 추적 중·`.meta`는 미추적(git status `??`)·**즉 .cs 본체는 이미 커밋됐는데 .meta는 미커밋 = GUID a9f0639068e8d1e499c8a73d60fd54be가 로컬 디스크에만 존재 = 다른 머신 pull 시 Unity가 새 GUID 재생성 → 씬/프리팹 {fileID} 참조 전면 파손**·**QA "쌍 정상" 결론은 디스크 존재만 본 오판**·CLAUDE.md "새 .cs 시 .meta 함께 커밋" 위반·**30초 `git add` + commit으로 해결 가능한 진짜 P0 확정**. **🚀 기술 신규 1순위**: **Google Play Games v1 SDK 2026-05부터 제거 시작**(deprecated·I/O 2026)·**MeowBeat GMA/Play Games 연동 코드 마이그레이션 영향도 사전 점검**. **🚀 기술 신규 2순위**: **Unity Input System 1.15.0 신규 배포**(NumLink/MeowBeat InputAction 기반 = 업그레이드 호환성 검토). **MeowBeat 미커밋 핵심**: SongData.cs+1(신곡)·manifest.json+10·GameManager.cs 59줄·SongManager/OptionManager·AndroidManifest+20(광고)·**14일 연속 이월**(orphan GUID 위험 없음 = NumLink 대비 안전).',
    lastUpdate: '5/27 수요일 리서치(평일 셋째날·1개월 임계 D+3·UIThemeSwitcher 검증 충돌 정정): **🚨 P0 30s NumLink orphan .meta 짝지어 즉시 커밋**(UIThemeSwitcher.cs.meta 포함 미추적 .meta 일괄 `git add` + commit·메인 git ls-files 검증완료·GUID 휘발 막는 최우선 부채·CLAUDE.md 위반·30초 해결 진짜 P0) + **🔥 P1 1h MeowBeat 코어 4파일 리팩토링 단일 PR 분리 커밋**(14일 이월 종결·`refactor(rhythm): 곡 카드+옵션 매니저 정리`) + **P1 30m MeowBeat 리듬↔농장 단일 루프 설계**(Nom Nom 차용·Game Designer 합의 분담) + **P2 30m Google Play Games v1 SDK 제거 마이그레이션 영향 평가**(5월 deprecated·MeowBeat GMA 연동 코드) + **P2 30m Unity Input System 1.15.0 호환성 검토**(InputAction 기반 영향). Sources: 메인 git ls-files 직접 검증·Unity Input System 1.15.0 릴리스 노트·I/O 2026 What\'s new in Google Play.',
    priority: 'high',
    energy: 85,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '**MeowBeat Tools 재실측 정상 가동**: `unity_validate.py`·`qa_static.py` 모두 **0 error 0 warning**·manifest 곡 10개 모두 easy/normal/hard 노트 보유 무결성 정상. **삭제 .meta orphan 평가**: MeowBeat(Input/Item/SaveLoad.meta)·NumLink(AutoGenTests 4파일) 모두 대상 파일이 함께 삭제됨 = **orphan 위험 없음(안전)**. **미해결 버그 0건**(어제 3건 중 bak_btn은 결정 미실행 항목·NumLink AutoGenTests는 의도 삭제 확인). **🚨 NumLink Tools 부재 지속**: `C:/Unity/NumLink/Tools/` 폴더 자체 미생성·검증 도구 0개 = **자동 회귀 검증 0건 무방비 = 최대 리스크**. **⚠️ 검증 오판 정정**: QA가 UIThemeSwitcher를 ".cs/.meta 쌍 존재 = 정상"으로 보고했으나 **메인 `git ls-files` 직접 검증 = .meta 미추적 = GUID 휘발 위험 진짜 P0**·QA는 디스크 존재만 보고 git 추적 상태를 확인 못함·**향후 .meta 점검 시 `git ls-files`로 추적 여부까지 확인 프로토콜 추가 필요**.',
    lastUpdate: '5/27 수요일 리서치(평일 셋째날·1개월 임계 D+3·UIThemeSwitcher .meta git 추적 오판 정정): **🚨 P0 10m NumLink Tools 부트스트랩**(`_ProjectTemplate/Tools/` → `NumLink/Tools/` 복사 + "01. Scenes/" 공백 경로 1줄 수정 + baseline 0 error·자동 회귀 검증 확보·부재 지속 종결) + **P1 30m .meta git 추적 점검 프로토콜 추가**(qa_static에 미추적 .meta 탐지 룰·디스크 존재만이 아닌 `git ls-files` 추적 여부 확인) + **P2 30m NumLink AutoGenTests 4파일 의도 확인 후 결정**(D 상태 = 의도된 제거 vs 미커밋) + **P2 MeowBeat 신곡 manifest +10 노트 데이터 무결성 재검증**(신규 곡 레인/audioFile 존재). Sources: MeowBeat unity_validate/qa_static 재실측 0err 0warn·메인 git ls-files 검증.',
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
    taskSummary: '**🚀 콘텐츠 1순위**: **Custom Product Page(CPP) 게임 카테고리 채택률 26%뿐·사용 시 전환율 +8.6%**(ASO World 2026) — 대부분 게임이 CPP를 안 써서 차별화 여지 큼·**NumLink 난이도별(Easy/Normal/Hard) + MeowBeat "고양이 농장 데코" 테마별 CPP 제작**·각 CPP를 의도 키워드와 링킹해 오가닉 노출 + 전환 동시 노림. **🚀 콘텐츠 2순위**: **YouTube Shorts 평균 인게이지먼트 5.91%로 숏폼 1위**(TikTok·Reels 상회)·**40초+ 콘텐츠는 인게이지먼트 +33%**·**기존 TikTok/Reels 채널을 Shorts로 확장**. **🚀 콘텐츠 3순위**: **Android 캐주얼 게임 CPI $0.63 vs iOS $2.23·시뮬레이션 장르 최저 $0.59** — **UA 초기 예산을 CPI 1/3.5 수준인 Android에 집중 배분**(MeowBeat/NumLink 둘 다 Android 우선 UA). **Steam Next Fest 자산 6/3 마감 D-7**·미결정 시 자동 미등록. **NumLink 등록 우선순위 낮음 유지**(PC 데모 제작 비용 高).',
    lastUpdate: '5/27 수요일 리서치(평일 셋째날·Steam Next Fest 자산 6/3 마감 D-7): **🔥 P1 1h NumLink 난이도별·MeowBeat 테마별 Custom Product Page 초안 제작**(CPP 채택률 26%뿐·전환 +8.6%·각 CPP 의도 키워드 링킹으로 오가닉 노출 + 전환 동시 노림·차별화 여지 큼) + **P1 30m YouTube Shorts 채널 확장 캘린더**(인게이지먼트 5.91% 숏폼 1위·40초+ +33%·기존 TikTok/Reels 자산 재활용) + **P2 30m UA 초기 예산 Android 집중 배분 전략 메모**(CPI $0.63 vs iOS $2.23·시뮬레이션 $0.59·1/3.5 효율) + **P2 30m MeowBeat Steam Next Fest 6월 등록 가부 결단**(D-7 가속·미결정 시 자동 미등록). Sources: ASO World Custom Product Page 2026·YouTube Shorts Engagement 2026·Mobile Game CPI Benchmark 2026.',
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
    taskSummary: '**agent-office GitHub Pages 정상**: `gh run list` 최근 Deploy 3건 전부 success(5/26 스탠드업 커밋 32s 성공)·CI/CD 변경 없음. **🚨 인프라 블로커 신규**: **PKM_GBrain_Sync_Daily LastResult=1 이틀 연속 실패**(5/26~27 03:00 실행 모두 실패)·**GBrain 동기화 정지 = PKM 검색 인덱스 노후화 누적**·작업 로그 확인 후 원인 진단·복구 필요. **DailyStandup/JobResearch는 Running**(LastResult=267009=실행 중 코드 정상). **🚨 보안 신규 2종**: ① **actions-cool/issues-helper·maintain-one-comment 공급망 공격** — 공격자가 릴리스 태그를 임포스터 커밋으로 이동·v3 등 태그 참조 워크플로가 다음 실행 시 악성 코드 자동 pull·**모든 GHA 액션 full commit SHA 핀 고정 + 크리덴셜 재발급 권고** ② **TanStack Mini Shai-Hulud** — npm trusted publisher 레포 전체 신뢰 악용·6분 내 84개 패키지 악성 배포. **agent-office 미커밋**: `.omc/project-memory.json` 1건(저영향 캐시). **GHA 트리플 마이그(VS2026·macOS26·Node24) D-12~D-51 윈도우 유지**.',
    lastUpdate: '5/27 수요일 리서치(평일 셋째날·PKM_GBrain 이틀 연속 실패 신규 발견·actions-cool 공급망 공격): **🚨 P0 30m PKM_GBrain_Sync 이틀 연속 LastResult=1 실패 복구 진단**(작업 로그 확인·GBrain 동기화 정지·PKM 인덱스 노후화 차단·신규 인프라 블로커·13일 결정 마비와 별개의 실제 작동 블로커) + **🔥 P1 30m agent-office 워크플로 액션 SHA 핀 고정 점검**(actions-cool류 공급망 공격 대비·v3 태그 참조 → full commit SHA 전환) + **P1 30m GHA 트리플 마이그 사전 PR 유지**(setup-node matrix + windows-2025/macos-14 핀고정·D-12~D-51 충돌 윈도우 회피) + **P2 npm trusted publisher 워크플로 스코프 점검**(TanStack Mini Shai-Hulud 대비·레포 전체 신뢰 → 특정 워크플로 한정) + **P3 schtasks 코드 해석 표 작성**(0x41301=267009=실행 중). Sources: GitHub Actions 2026 Security Roadmap·TheHackerNews GHA Supply Chain·sec-news.ai CI/CD Credentials·gh run list mmporong/agent-office.',
    priority: 'high',
    energy: 75,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 디자인 신규 1순위**: **클레이모피즘(Claymorphism) 부상** — **점토질 푹신 버튼·16~24px 라운드·soft inner-shadow**·터치/게임 UI 1순위 재질·**NumLink 신규 3테마 중 Kawaii를 "클레이모피즘"으로 차별화**(숫자 타일·연결선·버튼을 점토질로 재질화·따뜻한 배경). **🎨 디자인 신규 2순위**: **AI 적응형 레이아웃 재배치**(사용 패턴 따라 홈 셸프 자동 재배치 Spotify식·MeowBeat 농장 UI 자주 쓰는 기능 우선 노출 검토). **🎨 디자인 신규 3순위**: **리소그래프/모노크롬 일러스트**(거친 질감·2색 인쇄톤·코지 차별화 무기·NumLink Premium=플랫+모노크롬 리소톤·Retro=거친 2색 인쇄 질감). **AI 슬롭 회피 준수**: 민트+다크/뻔한 그라데이션 배제·**3테마 "재질 대비" 명확화**(Kawaii 점토 vs Premium 리소 모노 vs Retro 2색 인쇄). **구현 방식**: 동일 레이아웃·동일 에셋 슬롯에 머티리얼 프리셋만 스왑(CLAUDE.md 동적 Instantiate 금지 준수).',
    lastUpdate: '5/27 수요일 리서치(평일 셋째날·클레이모피즘/AI 적응형 레이아웃/리소그래프 모노크롬 신규): **🔥 P1 1h NumLink Kawaii 테마 클레이모피즘 1차 적용**(숫자 타일·버튼 soft inner-shadow + 20px 라운드 + 따뜻한 배경·머티리얼 프리셋 스왑·동적 Instantiate 금지 준수) + **P1 30m 3테마 재질 대비 컨셉 메모**(Kawaii 점토 vs Premium 플랫+모노크롬 리소톤 vs Retro 거친 2색 인쇄 질감) + **P2 30m MeowBeat 농장 UI AI 적응형 레이아웃 검토**(자주 쓰는 기능 우선 노출 Spotify식 셸프 재배치) + **P2 1h Mulmaru OFL 한글 픽셀 폰트 NumLink 04_Fonts 도입 1차 SDF 생성 이월**(Maplestory 라이선스 회색지대 대체) + **P3 30m MeowBeat Assets/Prefabs/Icon/ 디렉토리 신설 + 네이밍 규칙 이월**(농장 아이콘 시작점). Sources: Claymorphism vs Glassmorphism 2026 Battle·Muz.li Mobile App Design 2026·CreativeBloq Monochrome Indie Puzzle.',
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
  '🚨 P0 [bak_btn git rm 1줄 30s · D+50 돌파 · 13일 연속 미실행 차단 최소 행동]: bak_btn D+50·`ls -la` 직접 확인 = 1,598,524 bytes 잔존 확정. `git -C C:/Unity/Feedme rm "Assets/Scenes/MainScene.unity.bak_btn" "Assets/Scenes/MainScene.unity.bak_btn.meta" && git -C C:/Unity/Feedme commit -m "chore: bak_btn D+50 정리"`. **13일 연속 미실행 차단 가장 작은 단위 1건 = 인프라 리셋 출발점**. 새 P0 적재 중단·검증된 2건만 강제',
  '🚨 P0 [NumLink UIThemeSwitcher.cs.meta git add 30s · 메인 git ls-files 검증완료 GUID 휘발 차단 진짜 P0]: 메인 `git ls-files` 직접 검증 = .cs 추적 중·.meta 미추적(`??`) = **.cs만 커밋되고 .meta 미커밋 = GUID a9f0639068e8d1e499c8a73d60fd54be 휘발 위험 = 협업/CI 시 씬·프리팹 참조 전면 파손**. `git -C C:/Unity/NumLink add` 미추적 .meta 일괄 + commit. **QA "쌍 정상" 오판 정정·CLAUDE.md 위반·30초 해결**(어제 bak_btn 검증 충돌과 동일 패턴)',
  '🚨 P0 [PKM_GBrain_Sync 이틀 연속 LastResult=1 실패 복구 진단 30m · 신규 인프라 블로커]: PKM_GBrain_Sync_Daily가 5/26~27 03:00 실행 모두 LastResult=1 실패·**GBrain 동기화 정지 = PKM 검색 인덱스 노후화 누적**. 작업 로그 확인 후 원인 진단·복구. DevOps 신규 발견 = 13일 결정 마비와 별개의 실제 작동 블로커',
  '🔥 P1 [NumLink Tools 부트스트랩 10m + Kawaii 클레이모피즘 1차 적용 1h · 검증 자동화 + 테마 차별화]: NumLink Tools 부재 자동 회귀 검증 0건 무방비·`_ProjectTemplate/Tools/` → `NumLink/Tools/` 복사 + "01. Scenes/" 공백 경로 1줄 수정 + baseline 0 error. NumLink Kawaii 테마를 클레이모피즘(점토질 soft inner-shadow + 20px 라운드 + 따뜻한 배경)으로 차별화·머티리얼 프리셋 스왑 방식(동적 Instantiate 금지 준수)·Premium 리소 모노톤·Retro 2색 인쇄 3테마 재질 대비',
  '🔧 P1 [MeowBeat 리듬↔농장 단일 루프 설계 + 코어 4파일 분리 커밋 1~1.5h · 14일 이월 종결]: Nom Nom 코지숲카페 차용 = 곡 클리어 콤보 등급 → 농장 수확량/고양이 보상 결정적 매핑(리듬+농장 단일 루프). MeowBeat 미커밋 4파일(SongData/SongManager/GameManager/OptionManager) + 신곡 manifest 단일 PR 분리 커밋으로 14일 이월 종결',
  '🔍 P2 [Custom Product Page 초안 + UA Android 집중 + GHA 액션 SHA 핀 + Play Games v1 영향 평가 · 여유 시 처리]: NumLink 난이도별·MeowBeat 테마별 CPP 초안(채택률 26%뿐·전환 +8.6%)·UA 초기 예산 Android 집중(CPI $0.63 vs iOS $2.23·1/3.5 효율). agent-office 워크플로 액션 full commit SHA 핀 고정(actions-cool류 공급망 공격 대비). Google Play Games v1 SDK 제거 마이그레이션 영향 평가·Unity Input System 1.15.0 호환성 검토',
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
