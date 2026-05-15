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
    taskSummary: 'NumLink **재동결 1일째 시작** — 어제 b6d7a73 4커밋 발사 종결 후 24시간 만에 폰트 .asset 8개·AutoGenTests 4개 삭제·manifest.json 등 미커밋 재누적·**_Recovery/0(4).unity 또 발생**(어제 0건 회복 후 재발 = 반복 패턴 고착). MeowBeat **34일 신기록 갱신(+1·4주+6일·5/17 5주 임계 돌파 D-1·3자릿수 가속 17일째)** — FarmData·SongData·4 Manager·manifest·AndroidManifest 미커밋·**bak_btn 39일(+1)**·Tools/__pycache__ 신규. agent-office 5/15 5aacc3e 스탠드업 docs 정상(.omc/project-memory.json 1건만 미커밋·인프라 35일째). **22일 연속 결정 실패(3주+1일)** = 5/15 P0 3건(meta 결정+QA 디버깅+bak_btn git rm) **모두 미실행**. **PID 회귀**: 5/13 24→5/14 2→5/16 14개 재증가(자연 감소 패턴 깨짐). 회복 시그널 약화: NumLink 동결 종결 1차 사슬 끊기는 유효하나 24시간만에 재진입·_Recovery 0건도 재발. DailyStandup 04:00 정상 실행이나 **LastResult 267009 2일 차 미해결**.',
    lastUpdate: '5/16 토요일 스탠드업(주말 첫날·BitSummit D-6·5주 임계 D-1): **결정 실패 22일 차단 = P0 단 1건만 결정** — **MeowBeat bak_btn 39일 + meta 3개 + 미커밋 정리 단일 chore(qa) 커밋 묶음 발사**(15분 이내·5주 임계 D-1 차단·23일 진입 차단). 1건 결정으로 축약 = 5/15 P0 3건 모두 미실행 패턴 차단. 동시에 **P1 NumLink `_Recovery/` `.gitignore` 추가 + 백업 4개 일괄 삭제 + 폰트 .asset 8개 selective revert**(반복 패턴 차단) + **P1 비교 카드뉴스 + Premium Sunwashed Soft 시안 + 스토어 스크린샷 3장 동시 발행**(저녁 8시 골든타임·Content×Art 자산 공유) + **P2 NumLink Tools 즉시 복사(27일째 부재 종결) + MeowBeat manifest 정합성 회귀** + **P2 DailyStandup 267009 근본원인 진단**(2일 차).',
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
    taskSummary: '**Arrows – Puzzle Escape 미니멀 논리 퍼즐 Google Play 캐주얼 상위 첫 등장** = NumLink **신규 직접 벤치마크**·**텍스트 없이 시각만으로 첫 30초 룰 학습 가능한 무텍스트 UX**가 핵심 차별점. **Block Blast! 글로벌 캐주얼 1위 유지**(단순 메커닉·즉각 보상 표준). **BitSummit PUNCH 한국팀 4종 셀렉션 재확정 공식 발표**(5/15 invenglobal·Room 502/LOTS·Light Odyssey/SSUN·Rhythm Hotel/SyncArc·Kitchen of Abyss/Pico·Shuhei Yoshida 심사위원). **라스트워 4월 한국 모바일 매출 356억 1위 / WOS 346억 / 메이플 키우기 256억**(모바일인덱스·5/15~16 일간 변동 없음). 어제 Plug & Pulse·SyncArc Rhythm Hotel 직접 경쟁작 2종 첫 등장 후 추적 2일 차.',
    lastUpdate: '5/16 토요일 리서치(주말 첫날·BitSummit D-6): P1 **NumLink GDD에 "Arrows – Puzzle Escape식 미니멀 논리 한 화면 룰" 벤치마크 추가** — 튜토리얼 0~5레벨을 텍스트 없이 시각만으로 규칙 학습 가능하도록 재설계(첫 30초 이탈률 타깃 -15%·NumLink 차별화 키워드 "무텍스트 한글 숫자 모드"로 강화). P1 어제 P1(SyncArc Rhythm Hotel 분석·한국팀 4종 r/IndieGaming 예약·MeowBeat 고양이 IP 단일 키워드 선언) **미실행 만회**(BitSummit D-6 남은 윈도우). P2 Block Blast! 단순 메커닉·즉각 보상 룰 NumLink 적용 가능성 검토. Sources: BitSummit PUNCH 공식·invenglobal·모바일인덱스·AppBrain May 2026.',
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
    taskSummary: '**Unity 6.3 LTS 6000.3.15f1 5/9 정식 출시**(NumLink·MeowBeat 모두 적용 검토 대상·docs 5/14 갱신·후속 6.4 미공개). **Firebase Unity 13.10.0 신규 + Google Mobile Ads UMP Android 4.0.0 GA 승격 5/8**(MeowBeat GMA 통합 영향·developers.google.com docs). **5/15~16 신규 CVE 중 Unity·.NET·GameDev SDK 직접 영향 0건**. **NumLink 재동결 1일째 진입**: 어제 b6d7a73 4커밋 발사 후 24시간만에 폰트 .asset 8개·AutoGenTests 4개 삭제·_Recovery/0(4).unity 또 발생 = **에디터 크래시/자동저장 무한 누적 리스크 패턴 고착**. MeowBeat 657032c 후 **34일째 동결**(+1·미커밋 핵심 4 Manager·SongData·manifest·AndroidManifest·Tools/__pycache__ 신규).',
    lastUpdate: '5/16 토요일 리서치: P1 **NumLink `_Recovery/` 폴더 `.gitignore` 즉시 추가 + 기존 백업 .unity 4개 일괄 삭제 + 폰트 .asset 8개 diff 확인 후 의도된 변경만 선별 커밋(나머지 revert)**(반복 패턴 차단). P1 어제 P1(NumLink 다음 동결 재선언 + .NET 10.0.8 적용 검증) **미실행 만회**·feature/ui-theme-runtime 브랜치 분리 명문화 이월. P2 **Unity 6.3 LTS 6000.3.15f1 적용 검토**(NumLink·MeowBeat 다음 주). P2 Firebase Unity 13.10.0 + GMA UMP Android 4.0.0 GA 영향 모니터링·NumLink UIManager.cs:177-180 빈 OnEvent 정리 이월.',
    priority: 'high',
    energy: 88,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '**MeowBeat 회귀 3일 차 미해결**: unity_validate 0E/1W(manifest 손상) + qa_static 2E/0W(manifest_load + scene_buttons 실패) + run_regression FAIL(make_fixtures.py 경로 오류) — 5/14·5/15·5/16 연속 P0 미실행 누적. **MeowBeat 최우선 신규 리스크**: **manifest.json 변경 + Songs/ 미커밋 동시 발생 = 노트 데이터-매니페스트 불일치 회귀**(빌드 후 노트 로딩 실패 위험). **NumLink Tools 검증도구 27일째 부재**(+1·확인됨·MeowBeat Tools 18종은 정상 작동). **잔재파일 2건 누적**: bak_btn 39일(+1) + _Recovery/0(4).unity 신규 1건(어제 0건 후 또 발생 반복 패턴). NumLink AutoGenTests 4개 삭제(회귀 안전망 손실 누적)·SDF 폰트 8개 동시 수정(+2).',
    lastUpdate: '5/16 토요일: P0 **NumLink에 `C:/Unity/_ProjectTemplate/Tools/` 즉시 복사 + 씬 경로 상수 업데이트 + `python3 Tools/unity_validate.py` baseline 측정**(27일째 부재 종결). P0 **MeowBeat manifest-Songs 정합성 검증부터 회귀 실행**(qa_static.py로 manifest_load 통과 회복 우선·노트 데이터-매니페스트 불일치 차단). 어제 P0(MeowBeat meta 3개+QA 디버깅+bak_btn git rm) **연속 3일 미실행** → 오늘은 Orchestrator P0 단일 결정(bak_btn+meta+미커밋 묶음 발사)에 합류해 디버깅을 단순화. P1 NumLink _Recovery 반복 패턴 차단을 위한 `.gitignore` 추가 검증 동반.',
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
    taskSummary: '**카카오게임즈 가정의달 캠페인 5/27까지 연장**(gametoc 5/15 보도) + **오딘 6/3까지 출석 이벤트 신성소환권 156장 살포** = 5월 잔향이 6월 첫 주까지 이어짐(스승의날 단발 종료 X). **2026 게임 마케팅 키워드 = 팬덤 서사·UGC 공모전**(openads)·**인디크래프트 지원 417개사 역대 최다(전년+90)**·**미드마켓·짧고 다듬어진 싱글 인디가 ASO 핵심 카피**. **NumLink UI 3종 발사 D+1 SNS 0건·MeowBeat 34일째 콘텐츠 0건** = 마케팅 자산 공백 상태. **토요일 트래픽 골든타임 = 저녁 8시 X·스레드**(주말 첫날 가벼운 콘텐츠 소비).',
    lastUpdate: '5/16 토요일 리서치(주말 첫날·저녁 8시 골든타임): P1 **NumLink Kawaii/Premium/Retro 3장 비교 카드뉴스 1건을 오늘 저녁 8시 X·스레드에 "내 취향 골라줘" UGC 투표 포맷으로 발행**(팬덤 서사+UGC 공모전 트렌드 직결·제작 30분 이내·D+1 발사 자산 공백 해소). Art Director Premium 테마 Sunwashed Soft 시안·스토어 스크린샷 3장과 자산 공유. P1 어제 P1 미실행(CPP 70슬롯·마이크로 인플루언서 1건·iOS 26.5 페이월 리프레시·r/IndieGaming 한국팀 4종 예약) 만회 라인업 카드뉴스 발행 후 순차 진행. P2 TikTok 제거·YouTube Shorts·Discord 1차 피벗 등록. Sources: openads 18607·gametoc 108309·indeedseo·megadigital.',
    priority: 'medium',
    energy: 78,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**agent-office Pages 14일째 무중단 success**(5/15 5aacc3e 19:13 KST 스탠드업 커밋 정상·35~42s 배포 시간). **5/15~16 신규 CI/CD 발표 사실상 없음**: Win VS2026 이미지 마이그레이션 6/8~6/15(D-day 영향 없음)·Cloudflare WAW 5/15 정기점검(영향 없음). **DailyStandup_ClaudeCode 5/16 04:00 실행됐으나 LastTaskResult 여전히 267009(비정상) 2일 차 미해결** — 이전 회의에서 지적된 후에도 그대로(0x41301 = ERROR_TASK_RUNNING 잔재 추정). **PID 14개 재증가**(5/14 2→5/16 14·자연 감소 패턴 깨짐). **Node20 actions/runner deprecation 6/2 D-17**(어제 D-18).',
    lastUpdate: '5/16 토요일 리서치: P2 **DailyStandup_ClaudeCode 267009 근본원인 진단 우선순위 상향**(2일 차 미해결) — Task Scheduler 액션의 ① Start in 경로 정확성 ② 로그파일 권한(쓰기 가능 여부) ③ exit code 출처가 Task Scheduler 잔재(Running 상태로 인식)인지 실제 종료코드인지 식별·진단 후 단일 수정 PR로 처리. P2 **Node20 D-17 dry-run은 5/18(D-15) 예약 유지**(deploy-pages.yml + weekly-insights.yml FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true). **CI/CD 이상 여부 = Pages 14일째 무중단 정상**, agent-office .omc/project-memory.json 미커밋 1건 .gitignore 정리 이월.',
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
    taskSummary: '**Behance 2026 Sunwashed Soft 토요무드 팔레트 부상**: 더스티핑크 #E8B4A8 + 초키블루 #B4C5D1 + 뮤티드올리브 #8A8B5C + 페일테라코타 #C97B5C·데시추레이션 강조·주말 무드 활용 차별화. **모바일 퍼즐 게임 Tactile Minimalism 압도적**: 물리적 무게감 있는 표면 + 공간적 명료성. **Royal Match·MONOPOLY Match 5월 신규 메커닉 출시**(Sensor Tower). **NumLink UI 테마 3종(Kawaii/Premium/Retro) 발사 후 잔여**: 스토어 스크린샷 0건·테마 미리보기 GIF 0건 = 마케팅 자산 공백. Awwwards 5/16 SOTD 미발견(주말 발행 지연).',
    lastUpdate: '5/16 토요일 리서치(주말 첫날·토요무드): P1 **NumLink Premium 테마에 Sunwashed Soft 팔레트(#E8B4A8/#B4C5D1/#C97B5C) 오버레이 변형 1종 시안 제작 + Premium 테마 스토어 스크린샷 3장 우선 캡처**(주말 무드 활용 차별화·Content Writer P1 비교 카드뉴스와 자산 공유·저녁 8시 골든타임 직전 완료 타깃). P1 어제 P1 미실행(스승의날 크라프트 한정 테마 + USS 변수 토큰화 리팩토링) → 24시간 한정 윈도우 종료로 크라프트 테마는 내년 5/15 리저브·**USS 토큰화 리팩토링은 P2로 이월**(다음 한정 테마 출시 전 필수). Sources: Behance 239027109·Sensor Tower·AAA Game Art.',
    priority: 'medium',
    energy: 80,
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
  'P0 [MeowBeat 5주 임계 D-1 차단 = bak_btn 39일 + meta 3개 + 미커밋 정리 단일 chore(qa) 커밋 묶음 발사 · 15분 이내 · 22일 연속 결정 실패 차단]: MeowBeat 4/12 657032c 후 34일째 동결·5/17이면 5주 임계 돌파(역대 최장)·bak_btn 39일+meta 3개 삭제+manifest 손상+scene_buttons 2E 누적 = QA 회귀 3일 차 미해결. 22일 연속 결정 실패(5/15 P0 3건 모두 미실행)을 차단하려면 결정 항목 1건으로 축약 → ① `git rm Assets/Scenes/MainScene.unity.bak_btn` ② Input/Item/SaveLoad.meta 3개 = `git checkout HEAD -- Assets/Scripts/Input.meta Item.meta SaveLoad.meta` 복원 ③ FarmData·SongData·manifest·AndroidManifest·4 Manager 미커밋 git stash 후 단계별 검증 ④ 단일 `chore(qa): bak_btn+meta 복원+미커밋 정리(5주 임계 차단)` 커밋. 5/17 5주 임계 + 23일 진입 동시 차단',
  'P1 [NumLink _Recovery `.gitignore` 추가 + 백업 4개 일괄 삭제 + 폰트 .asset 8개 selective revert · 발사→재동결 반복 패턴 차단]: NumLink 어제 b6d7a73 4커밋 발사 종결 후 24시간 만에 `_Recovery/0(4).unity` 또 발생 = 발사→재동결 사이클 반복 패턴. `.gitignore`에 `_Recovery/` 즉시 추가 + 기존 4개 백업 .unity 일괄 삭제·폰트 .asset 8개(Maplestory + TextMesh Pro) diff 확인 후 의도된 변경(UI 테마 부산물)만 선별 커밋, 나머지 revert. AutoGenTests 4개 삭제는 의도성 확인 후 결정. NumLink 재동결 1일째 진입 차단·다음 동결 재선언 시 코어 버그픽스만 룰 명문화·feature/ui-theme-runtime 브랜치 분리',
  'P1 [NumLink 비교 카드뉴스 + Premium Sunwashed Soft 시안 + 스토어 스크린샷 3장 동시 발행 · Content×Art 자산 공유 · 토요일 저녁 8시 골든타임]: NumLink UI 3종(Kawaii/Premium/Retro) 발사 D+1 SNS 0건·MeowBeat 34일째 콘텐츠 0건 = 마케팅 자산 공백. Art Director: Premium 테마에 Sunwashed Soft(#E8B4A8/#B4C5D1/#C97B5C) 오버레이 변형 1종 시안 + Premium 스토어 스크린샷 3장 우선 캡처·Content Writer: 3장 비교 카드뉴스 1건을 오늘 저녁 8시 X·스레드에 "내 취향 골라줘" UGC 투표 포맷으로 발행 — 팬덤 서사+UGC 공모전 트렌드 직결·제작 30분 이내·토요일 트래픽 골든타임',
  'P1 [Game Designer NumLink GDD에 Arrows – Puzzle Escape식 미니멀 논리 한 화면 룰 벤치마크 추가 · 무텍스트 30초 룰 학습 UX · 첫 30초 이탈률 -15% 타깃]: Arrows – Puzzle Escape 미니멀 논리 퍼즐 Google Play 캐주얼 상위 첫 등장 = NumLink 신규 직접 벤치마크·텍스트 없이 시각만으로 첫 30초 룰 학습 가능한 무텍스트 UX가 핵심 차별점. NumLink 튜토리얼 0~5레벨을 텍스트 없이 시각만으로 규칙 학습 가능하도록 재설계·차별화 키워드 "무텍스트 한글 숫자 모드"로 강화. 어제 P1 미실행 만회 라인업(SyncArc Rhythm Hotel 분석·MeowBeat 고양이 IP 단일 키워드 선언·한국팀 4종 r/IndieGaming 예약) 카드뉴스 발행 후 순차 진행',
  'P2 [NumLink에 _ProjectTemplate Tools 즉시 복사 + MeowBeat manifest 정합성 회귀 · 검증도구 27일째 부재 종결 · 회귀 4일 차 차단]: NumLink Tools 검증도구 27일째 부재(+1) = baseline 측정 불가능 누적·MeowBeat unity_validate 18종은 정상 작동. NumLink에 `C:/Unity/_ProjectTemplate/Tools/` 통째 복사 + 씬 경로 상수 업데이트 + `python3 Tools/unity_validate.py` baseline 측정·MeowBeat는 manifest.json + Songs/ 정합성 검증 우선(qa_static.py로 manifest_load 통과 회복 = 노트 데이터-매니페스트 불일치 차단). 4일 차 회귀 누적 차단',
  'P2 [DailyStandup_ClaudeCode 267009 근본원인 진단 · 2일 차 미해결 · 진단 우선순위 상향]: LastResult 267009(0x41301 = ERROR_TASK_RUNNING) 어제 회의 지적 후에도 그대로·2일 차 미해결. Task Scheduler 액션의 ① Start in 경로 정확성 ② 로그파일 권한(쓰기 가능 여부) ③ exit code 출처가 Task Scheduler 잔재(Running 상태로 인식)인지 실제 종료코드인지 식별·진단 후 단일 수정 PR로 한번에 처리(매일 재발 차단). Node20 D-17 dry-run은 5/18(D-15) 예약 유지·agent-office .omc/project-memory.json 미커밋 1건 .gitignore 정리 이월',
  'P2 [Unity 6.3 LTS 6000.3.15f1 적용 검토 + Firebase Unity 13.10.0 + GMA UMP Android 4.0.0 GA 모니터링 · 다음 주 적용]: Unity 6.3 LTS 6000.3.15f1 5/9 정식 출시·NumLink·MeowBeat 모두 적용 검토 대상(docs 5/14 갱신·후속 6.4 미공개). Firebase Unity 13.10.0 신규 + Google Mobile Ads UMP Android 4.0.0 GA 승격 5/8(MeowBeat GMA 통합 영향). 5/15~16 신규 Unity·.NET·GameDev SDK 직접 영향 CVE 0건. 두 프로젝트 모두 다음 주 적용·NumLink UIManager.cs:177-180 빈 OnEvent 정리 이월',
  'P2 [USS 변수 토큰화 리팩토링 다음 한정 테마 출시 전 필수 · 어제 P1 미실행 이월]: NumLink Kawaii/Premium/Retro 3-테마 USS 토큰 변수화 부재(--primary, --bg-card, --text-emphasis) → theme-tokens.uss 디자인 토큰 추출 리팩토링 필요(향후 4번째·5번째 테마 추가 비용 -80% 절감). 어제 스승의날 크라프트 한정 테마는 24시간 윈도우 초과로 내년 5/15 리저브·변수 폰트 Variable Font 스크롤 반응형 NumLink 메인 화면 시범 적용은 USS 토큰화 후 검토. FarmFoodManager 17건 차주 리팩터 후보 등록 이월',
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
