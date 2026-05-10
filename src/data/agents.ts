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
    taskSummary: 'NumLink **동결 12일째** — 4/29 b6d7a73 후 5/1~5/11 **11일 연속 0커밋**·_Recovery 16일·Tools 22일 부재. MeowBeat **30일 임계 돌파(3자릿수 진입 임박)** — 4/12 657032c 후 핵심 매니저 4종+manifest+AdMob 3 prefab+AndroidManifest+ProjectSettings 미커밋·bak_btn 30일 잔존·_Recovery/ 신규(NumLink와 양쪽 동시 발생). agent-office 5/10 708876b push 후 5/11 미커밋. **5/10 결정 미실행 = 17일 연속 결정 실패 신기록 갱신 확정**(보름 풀스코어 초과). PID 23→26 +3 누적·Pages 10일 연속 success(역설적 안정).',
    lastUpdate: '5/11 월요일 스탠드업(5/12 패치튜즈데이 D-1): [최소 단위 1건 사슬 끊기 강제] **NumLink `_Recovery/0 (4).unity` git rm + chore(qa) 단일 커밋**(5분 미만). 17일 연속 실패가 18일 진입 시 의사결정 시스템 자체 마비 = #62 회의 PID-26 비상 격상 신호. 동시에 (1) NumLink Tests/Editor D 복구+.meta 누락 동시 처리 P0(D-1 우선순위 1) (2) NumLink Tools 22일 종결(_ProjectTemplate 복사+unity_validate baseline 0E) (3) MeowBeat .meta 3건+5코어 30일 drift 별도 PR (4) daily_standup.bat 첫 줄 taskkill 래퍼 즉시 적용(2분·회귀 0).',
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
    taskSummary: '**NEOWIZ Cats&Soup: Magic Recipe 4/29 글로벌 런칭**(원작 80M DL+ 머지 시퀄·MeowBeat 직접 경쟁군 추가). Hello Kitty Island 5/13 D-2 Gudetama "Month of Meh" 4/30~6/1 무료 이벤트 진행 중. **Hagin 2026 프로야구 GO 사전예약 2,026젬+2,026소환권 = 숫자 앵커 보상 패턴**(digitaltoday). MeowBeat 농장 파트 Cats&Soup Magic Recipe+Spirit Crossing+Wibby Buddy 동시 압박 = 농장 깊이 추가보다 리듬↔농장 인과 루프 차별화 우선.',
    lastUpdate: '5/11 월요일 리서치: P1 **"5/15 = 515 골드 + 5×5 보드 한정 스테이지" 캘린더 이벤트** NumLink 즉시 이식. NumLink 본질=숫자 게임 = 날짜 숫자 직결로 컨셉 적합도 최고·DailyChallenge 매핑 1개 추가·1일 이내 구현·신규 에셋 0. MeowBeat은 5/13 이후 차별화(리듬 코어) 강조 캠페인이 단발 이벤트보다 효과적.',
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
    taskSummary: '**5/12 Patch Tuesday D-1**(6/26 Secure Boot 인증서 만료 직전 마지막 안전 배포창·Bluehammer 후속 RedSun/UnDefend 픽스 예상). **Google Play News/Magazine 자가신고 + 개발자계정 이전 7일 지연 5/27 마감**·**4/15 Contacts/Location 정책 30일 유예 만료 임박**. **Unity Hub 독립 CLI 5월 신규 배포**·**Unity 6.3 툴바 커스터마이즈+LMDB 검색+UI Toolkit 씬 하이러키 로드맵 공개**(Unity blog). D-1 리스크: IDE 재시작 시 .meta 불일치+테스트 누락 동시 폭발 가능성.',
    lastUpdate: '5/11 월요일 리서치(D-1 우선순위 1): P0 **NumLink Tests/Editor D 즉시 복구 + .meta 누락 동시 처리** — (a) `git restore Assets/Tests/Editor/AutoGenTests.*` (b) UIThemeSwitcher.cs.meta + 3개 .uss.meta Unity 재import 자동 생성 (c) `python3 Tools/unity_validate.py` 0 error 확인 → fix(numlink): 테스트 복원·메타 동기화 단일 PR. MeowBeat Input/Item/SaveLoad.meta 복구는 별도 PR(폴더 메타=import 트리 붕괴 위험). 오늘 수술 1건 = 내일 디버깅 3시간 차단.',
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
    taskSummary: '**MeowBeat Tools 4종**(unity_validate.py/qa_static.py/known_bugs.json/run_regression.py) + **부가 9종**(scene_analyzer/note_generator 등) 모두 정상. **NumLink Tools 22일 부재**(매일 갱신·_ProjectTemplate 복사 가능). NumLink AutoGenTests.* 4파일 D + _Recovery 16일 회귀(Unity 자동복구가 정리 사이클 무력화). **MeowBeat Input/Item/SaveLoad.meta 3건 D**(폴더 메타=GUID 손실 위험) + 5개 코어 파일 30일 M(rollback 불가 영역 확대).',
    lastUpdate: '5/11 월요일: P0 **NumLink Tools 부트스트랩 1건 실행** — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 상수 갱신 + `python3 Tools/unity_validate.py` 1회 baseline 0E 확보(22일 누적 부채 즉시 종료). P0 NumLink Tests/Editor D 복구. P0 MeowBeat .meta 3건 별도 PR(5/12 IDE 재기동 전 처리 필수·import 트리 붕괴 위험).',
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
    taskSummary: '**Apple iOS26 SDK 4/28 의무**·**CPP 35→70 keyword 매핑 슬롯 직접 확장**·**Inazuma Eleven Cross 4/10 사전예약 6월 출시 = 등록자 수 기반 누적 보상 캠페인**·**Instagram Reels 게임 카테고리 cozy/horror 장르 share 최적화 3월 4,400만 뷰 기록**(IndieGames). 스승의날 5/15 D-4·Hello Kitty Island 5/13 D-2·부처님오신날 5/25 D-14 잔여 트래픽 흡수 윈도우 가동.',
    lastUpdate: '5/11 월요일 리서치: P1 **NumLink 인앱 메일 "스승의날 감사 이벤트" 5/13~5/17** — 카피 "선생님께 감사 인사를 숫자로 연결해 보세요" + 한정 레벨팩(난이도 별5 3종) + 3일 연속 접속 시 힌트 5개(Inazuma Cross식 누적 보상 미니 적용) + 5/15 푸시 1회 + Instagram Reels용 15초 cozy ASMR(레벨 클리어) 동시 발행 + iOS CPP "Teacher\'s Day Special" 키워드 매핑 슬롯 1개 임시 할당. 부처님오신날 5/25 D-14 슬롯 사전 예약.',
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
    taskSummary: '**claude.exe PID 26개 누적**(5/9 23 → 5/11 26 = +3 추세·**taskkill 래퍼 13일째 미적용**·RAM 압박 임계점 7일 후). **DailyStandup_ClaudeCode 5/11 04:00 정시 Running** 결과 **267009 = 0x41301 TASK_RUNNING 정상 진행 코드**(비정상 아님 확정). **agent-office Pages 5/1~5/10 10일 연속 success**. **Next.js 13개 보안 advisory 일괄 패치 CVE-2026-23870 RSC + CVE-2026-44575 App Router middleware bypass 5/9~5/11**(agent-office Vite 직접 영향 없음).',
    lastUpdate: '5/11 월요일 리서치: P1 **`daily_standup.bat` 사전 taskkill 래퍼 즉시 적용**(13일째 미적용 종결). 첫 줄 `taskkill /F /IM claude.exe /T 2>nul & timeout /t 2 >nul` 1줄 추가(ASCII 인코딩 유지·BOM 금지·Edit/Write 도구 금지). 5/12 04:00 실행분부터 검증. 구현 시간 2분·회귀 위험 0·추가 비용 0. runner v2.333.1 cutoff 이전(2026-03-18)·5/19 rate_limit code_scanning_upload 삭제 D-8.',
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
    taskSummary: '**Awwwards 5/10 SOTD: Simonholm.studio**(스튜디오 포트폴리오 미니멀 모노톤). **Hello Kitty Island Adventure v2.16 Apple Arcade 5/13 출시 = 산리오 파스텔+코너 미니맵 UI 표준화 임박**(NumLink 카와이 테마와 톤 겹침 리스크). **스승의날 5/15 모티프 확장**: 칠판 청록 #2D5F4E + 분필 화이트 #FAFAFA + 한글 자모 ㄱㅅ(감사) 활용(카네이션 5/8 종결 후 차별화 다크톤).',
    lastUpdate: '5/11 월요일 리서치: P1 **NumLink theme-kawaii.uss 한정판 "감사의 칠판" 변형 5/13~5/16 4일간** — 배경 #2D5F4E(칠판 청록) + 텍스트/숫자 #FAFAFA(분필 화이트·텍스처 약간) + 액센트 한글 ㄱㅅ 자모 도형 파티클(산리오 파스텔 회피·AI slop 민트 #88A4FF 금지 원칙 준수) + 레벨 클리어 분필 wipe 0.4s 트랜지션 + Maplestory SDF 유지(한정 타이틀만 손글씨 가중치). Hello Kitty 산리오 파스텔 폭발 임박 → 다크톤으로 의도적 차별화 안전.',
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
  'P0 [최소 단위 1건 사슬 끊기 = 17일 연속 결정 실패 18일 진입 차단]: NumLink `_Recovery/0 (4).unity` 단일 파일 git rm + chore(qa) 단일 커밋(5분 미만). `git rm "Assets/_Recovery/0 (4).unity" "Assets/_Recovery/0 (4).unity.meta"` + `git commit -m "chore(qa): remove _Recovery regression file"` + push. 다중파일·다중단계 결정은 18일째에도 미실행될 가능성 → "한 파일·한 명령" 사슬 끊기 우선. 미실행 시 18일 연속 결정 실패 + #62 PID-26 비상 회의 격상',
  'P0 [5/12 D-1 우선순위 1]: NumLink Tests/Editor D 복구 + .meta 누락 동시 처리 — (a) `git restore Assets/Tests/Editor/AutoGenTests.*` 4파일 (b) UIThemeSwitcher.cs.meta + theme-kawaii/premium/retro.uss.meta Unity 재import 자동 생성 (c) `python3 Tools/unity_validate.py` 0 error 확인 → fix(numlink): 테스트 복원·메타 동기화 단일 PR. 5/12 IDE 재시작 시 .meta 불일치+테스트 누락 동시 폭발 차단(오늘 수술 1건 = 내일 디버깅 3시간 차단)',
  'P0: NumLink Tools 22일 부재 종결 — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 상수 NumLink 메인씬으로 갱신 + `python3 Tools/unity_validate.py` 1회 실행하여 baseline 0E 확보 + chore(qa) 단일 커밋. CLAUDE.md "Unity AI 자율화 파이프라인" 위반 22일 누적 부채 즉시 종결',
  'P0: MeowBeat .meta 3건 + 5코어 파일 30일 drift 복구 (별도 PR) — Input.meta/Item.meta/SaveLoad.meta 3건 D 복구(폴더 메타=GUID 손실 위험·import 트리 붕괴 위험) NumLink와 분리 PR. 5/12 패치튜즈데이 IDE 재기동 전 처리 필수. SongData/GameManager/SongManager/OptionManager/manifest atomic 분할 — (a) feat(song): 매니저 4+manifest (b) chore(deps): GoogleMobileAds 3 prefab+AndroidManifest (c) chore(project): ProjectSettings. 3자릿수 진입 차단',
  'P1: NumLink theme-kawaii.uss 한정판 "감사의 칠판" 5/13~5/16 4일 — 배경 #2D5F4E(칠판 청록) + 텍스트/숫자 #FAFAFA(분필 화이트·텍스처 약간) + ㄱㅅ 자모 도형 파티클(산리오 파스텔 회피) + 레벨 클리어 분필 wipe 0.4s 트랜지션 + Maplestory SDF 유지(한정 타이틀만 손글씨 가중치). Hello Kitty 5/13 산리오 파스텔 폭발 회피 의도적 다크톤 차별화·AI slop 민트 #88A4FF 금지 원칙 준수',
  'P1: NumLink "5/15 = 515 골드 + 5×5 보드 한정 스테이지" 캘린더 이벤트 — Hagin 2026 프로야구 GO "2,026젬+2,026소환권" 숫자 앵커 패턴 이식. NumLink 본질=숫자 게임=날짜 숫자 직결 컨셉 적합도 최고. 기존 DailyChallenge 시스템에 날짜→스테이지 매핑 1개 추가(1일 이내 구현·신규 에셋 0)',
  'P1: NumLink 인앱 메일 "스승의날 감사 이벤트" 5/13~5/17 — 카피 "선생님께 감사 인사를 숫자로 연결해 보세요" + 한정 레벨팩(난이도 별5 3종) + 3일 연속 접속 시 힌트 5개(Inazuma Cross식 누적 보상 미니 적용) + 5/15 푸시 1회 + Instagram Reels용 15초 cozy ASMR 동시 발행 + iOS CPP "Teacher\'s Day Special" 키워드 매핑 슬롯 1개 임시 할당',
  'P1: `daily_standup.bat` 사전 taskkill 래퍼 즉시 적용 (13일째 미적용 종결) — PID 26개 누적(7일 후 RAM 임계 도달 예상). 첫 줄 `taskkill /F /IM claude.exe /T 2>nul & timeout /t 2 >nul` 1줄 추가(ASCII 인코딩 유지·BOM 금지·Edit/Write 도구 금지). 5/12 04:00 실행분부터 검증. 구현 시간 2분·회귀 위험 0·추가 비용 0',
  'P2: NumLink 1~3분 챌린지 모드 GDD 골격 1장 — GameAnalytics 미드코어 D30 5.35%·ROAS 39.5% 최고효율·일일 세션 6~7회 벤치마크 도달 근거. 타이머·스코어·보상 흐름 GDD 1장 작성. 차주 작업 큐',
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
