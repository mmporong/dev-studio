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
    taskSummary: 'NumLink **동결 13일째** — 4/29 b6d7a73 후 5/1~5/12 **12일 연속 0커밋**·_Recovery 17일(`0 (4).unity` + 누적 5건)·Tools 23일 부재. MeowBeat **4주 임계 돌파 31일째(3자릿수 진입 가속)** — 4/12 657032c 후 핵심 매니저 4종+manifest+AdMob 3 prefab+AndroidManifest+ProjectSettings 미커밋·bak_btn 31일 잔존·5코어 30일+ M drift. agent-office 5/11 3ebbcb0 정상 push(미커밋 .omc/project-memory.json 1개). **5/11 P0 4건 액션 0/4 미실행 = 18일 연속 결정 실패 신기록 갱신 확정**(보름+3일). PID 26→24 **-2 미세 개선**(taskkill 14일째 미적용 자연 감소)·Pages 11일 연속 success(역설적 안정 지속).',
    lastUpdate: '5/12 화요일 스탠드업(5/12 패치튜즈데이 D-day): [최소 단위 1건 사슬 끊기 강제·19일 진입 차단] **NumLink `_Recovery/0 (4).unity` git rm + chore(qa) 단일 커밋**(5분 미만). 18일 연속 실패가 19일 진입 시 의사결정 시스템 자체 마비 확정 = #63 PID-24 비상 회의 격상 임박. 동시에 (1) SharpCompress CVE-2026-44788 NuGet 의존 즉시 검증 P0(D-day 우선순위 1) (2) NumLink Tools 23일 종결(_ProjectTemplate 복사+unity_validate baseline 0E) (3) MeowBeat .meta 3건+5코어 31일 drift 별도 PR(IDE 재기동 전 필수) (4) daily_standup.bat 첫 줄 taskkill 래퍼 14일째 미적용 종결(2분·회귀 0).',
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
    taskSummary: '**ClearIt Crystal Collection 5/8 글로벌 = 가장자리 발사형 매치3**(그리드 스왑 탈피·한 손 조작·NumLink 입력 변형 후보 1순위). **Apple Arcade 5/7 4종 추가**(Good Pizza+/Nick Jr.·iOS 무광고 모델 강세). **캐주얼 BM 표준화 = IAP 40~60% + 짧고 게이미파이드 광고 + 시즌패스**(StudioKrew). Hello Kitty Island Adventure 5/13 D-1 직접경쟁 임박·Cats&Soup Magic Recipe(4/29) + Dead as Disco(5/5) + Rhythm Heaven Groove(7/2) 트라이앵글 = MeowBeat 농장 깊이보다 리듬↔농장 인과 루프 차별화 우선.',
    lastUpdate: '5/12 화요일 리서치: P1 **NumLink 가장자리 발사형 보너스 모드 1주 프로토타입화 + Kawaii 디폴트 락인**(라인드로우 차별화 한 손 조작 컷·Premium/Retro 잠금해제식 전환·동시 3종 QA 부담을 메타 진행감으로 치환). 시즌패스 트랙(월 단위 광고 제거+레벨팩) MVP 직후 도입 검토. MeowBeat은 5월 업데이트 훅으로 "짧고 스킵 가능한 게이미파이드 광고 보상"(고양이 코스튬 1회권) 적용 → 캐주얼 광고 CTR 30~40% 트렌드 정렬.',
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
    taskSummary: '**5/12 Patch Tuesday Bluehammer/RedSun/UnDefend 픽스 KB 공개 D-day**(6/26 Secure Boot 인증서 만료 직전 마지막 안전 배포창 가동 당일). **SharpCompress CVE-2026-44788 zip-slip 5/8 공개**(NuGet 의존 점검 필요). **Unity 6000.3 LTS 5/9 빌드 정체**(5월 둘째주 신규 패치 없음). **NumLink 4/29 UI 테마 +402 LOC**(USS 격리로 부채 낮음·SaveSystem 테마 ID 마이그레이션 필요)·**MeowBeat 4/12 farm catfood fileID 4연쇄 .meta YAML 야크쉐이빙**(CLAUDE.md 충돌 경계·FarmFoodManager 17건 핫스팟).',
    lastUpdate: '5/12 화요일 리서치(D-day 우선순위 1): P0 **NumLink/MeowBeat NuGet 매니페스트 SharpCompress 의존 즉시 검증**(zip-slip CVE-2026-44788 영향 여부 1분 확인·`Packages/manifest.json` grep)·**5/12 보안 패치 빌드머신 자동 적용 1주 보류**(IDE 재시작 시 .meta 불일치+테스트 누락 동시 폭발 차단·KB 공개 안정성 관찰). NumLink Tests/Editor D 복구 + .meta 누락 동시 처리(별도 PR). MeowBeat .meta 3건 별도 PR(IDE 재기동 전 필수). FarmFoodManager 차주 책임 분할 리팩터 후보 등록.',
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
    taskSummary: '**MeowBeat Tools 19개 파일 풀세트 정상**(unity_validate/qa_static/known_bugs/run_regression+부가 15종). **NumLink Tools 23일 부재**(매일 갱신·검증 도구 0건·_ProjectTemplate 복사 가능 상태 유지). **NumLink _Recovery 5건 누적**(`0.unity`, `0 (1)~(4).unity`·Unity 자동복구가 정리 사이클 무력화). **MeowBeat _Recovery `0.unity` 1건만 잔존**(관리 양호 비교군). **MainScene.unity.bak_btn 25일째**. MeowBeat farm 음식 애니메이션(657032c/36c5400/a5229db) `run_regression.py` 미실행 잠재 회귀.',
    lastUpdate: '5/12 화요일: P0 **NumLink Tools 부트스트랩 1건 실행** — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 상수 NumLink 메인씬으로 갱신 + `python3 Tools/unity_validate.py` 1회 baseline 0E 확보(23일 누적 부채 즉시 종료·CLAUDE.md "Unity AI 자율화 파이프라인" 위반 종결). P0 NumLink `_Recovery/0 (4).unity` git rm 단일 커밋(19일 진입 차단). P0 MeowBeat .meta 3건 별도 PR(5/12 IDE 재기동 전 처리 필수·import 트리 붕괴 위험). MeowBeat bak_btn 25일 삭제 후 `run_regression.py` 1회 회귀 확인.',
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
    taskSummary: '**Apple Search Ads 5/4 신규 데일리버짓 + 추천 페이지 가동**(캐주얼 UA 적기). **플레이어블 광고 CTR 30~40% 우위**(캐주얼 1초 훅 영상 핵심 KPI·Udonis/iLogos). **NumLink/MeowBeat 둘 다 MARKETING.md·STORE_LISTING.md 부재**(docs/엔 GAME_BRIEF.md/REDESIGN.md만 = 출시 자산 0). **카카오 5월 가정의 달 행사 진행 중**(스승의날 5/15 D-3 인접). **Stepico 2026 모바일 마케팅 = 짧은 훅+1초 결정+게이미파이드+시즌패스 표준화**.',
    lastUpdate: '5/12 화요일 리서치: P1 **NumLink "선생님께 숫자로 ㄱㅅ" 6초 세로 훅 즉시 제작** — 첫 1초 칠판 ㄱㅅ 등장 → 숫자 연결 플레이 3초 → CTA 2초·TikTok/Reels용 1편. 동시 **NumLink/MeowBeat docs/STORE_LISTING.md 골격 오늘 신설**(타이틀/숏디스크립션/스크린샷 5컷 카피·출시 자산 0 종결). 한글 캘리그라피(세종대왕 생일 5/15) 차별화 모티프 활용·AI slop 민트 #88A4FF 금지 원칙 준수. 부처님오신날 5/25 D-13 슬롯 사전 예약 유지.',
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
    taskSummary: '**claude.exe PID 24개**(5/11 26 → 5/12 24 = **-2 미세 개선**·누적 증가세 일단 멈춤·**taskkill 래퍼 14일째 미적용**·자연 감소). **DailyStandup_ClaudeCode Running 5/13 04:00 정상**. **agent-office Pages 5/1~5/11 11일 연속 success**. **Cloudflare WAF 5/7 긴급 룰 = Next.js 미들웨어 우회 CVE-2026-44575 + ActiveMQ RCE**(agent-office Vite·Cloudflare 미사용 직접 영향 없음). **GitHub 5/8 Commit Comments REST/GraphQL 차단 + Copilot Agents 전용 시크릿/변수 신설**. **Node.js 5월 패치튜즈데이 침묵**(3/24 이후 신규 보안 릴리스 없음).',
    lastUpdate: '5/12 화요일 리서치: P1 **`daily_standup.bat` 사전 taskkill 래퍼 14일째 미적용 종결**. 첫 줄 `taskkill /F /IM claude.exe /T 2>nul & timeout /t 2 >nul` 1줄 추가(ASCII 인코딩 유지·BOM 금지·Edit/Write 도구 금지·notepad 직접 편집). 5/13 04:00 실행분부터 검증. 구현 시간 2분·회귀 위험 0·추가 비용 0. PID 24개 모니터링 유지(5/13 자동화 직후 재카운트). Cloudflare 5/12 YUL 데이터센터 점검(05:00~13:00 UTC) 직접 영향 없음.',
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
    taskSummary: '**Awwwards 5/12 SOTD 미발표**(KST 23시 발표 예정·5/11 Outfit by ++hellohello 최신·내일 회의 분석). **2026 UI 트렌드 = 텍스처+질감 레이어 / 타이포 그래픽화 / 컬러 회귀**(Tubik). **모바일 UI 핵심 = 촉각적 미니멀리즘+하단 시트+모션이 명령어**(Muzli). **한글 폰트 신작 눈누 6월 등록 위주**(5월 빅뉴스 없음). **스승의날 5/15 = 세종대왕 생일 동일 = 한글 캘리그라피·붓터치·먹 번짐 차별화 모티프**(AI slop 회피 적합). NumLink 4/29 테마 3종 동시 운영 QA 비용 폭증 경고·MeowBeat 1초 흔들기 리듬 윈도우 대비 길다.',
    lastUpdate: '5/12 화요일 리서치: P1 **NumLink Kawaii 테마 디폴트 락인 + Premium/Retro 일정 레벨 클리어 후 잠금해제 보상 전환**(동시 3종 QA·일관성 부담을 메타 진행감으로 치환·다음 스프린트 우선순위 1). 동시 **MeowBeat 1초 흔들기 → 0.4~0.5초 단축**(리듬게임 타이밍 윈도우 정렬·애니메이션이 명령어 트렌드 일치). 스승의날 5/15 칠판 청록 #2D5F4E+#FAFAFA+ㄱㅅ 자모 한정판 변형 5/13~5/16 4일간(Hello Kitty 산리오 파스텔 5/13 폭발 회피 의도적 다크톤). Awwwards 5/12 SOTD 23시 발표 후 내일 분석.',
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
  'P0 [최소 단위 1건 사슬 끊기 = 18일→19일 진입 차단 · #63 PID-24 비상 회의 격상 임박]: NumLink `_Recovery/0 (4).unity` 단일 파일 git rm + chore(qa) 단일 커밋(5분 미만). `git rm "Assets/_Recovery/0 (4).unity" "Assets/_Recovery/0 (4).unity.meta"` + `git commit -m "chore(qa): remove _Recovery regression file"` + push. 다중파일·다중단계 결정은 19일째에도 미실행 가능 → "한 파일·한 명령" 사슬 끊기 우선. 미실행 시 19일 연속 결정 실패 + 의사결정 시스템 자체 마비 확정',
  'P0 [5/12 D-day 우선순위 1 = SharpCompress CVE-2026-44788 zip-slip 의존 즉시 검증]: NumLink/MeowBeat NuGet 매니페스트(`Packages/manifest.json`) SharpCompress 의존 1분 grep 확인. 영향 시 즉시 안전 버전 업데이트 + `5/12 보안 패치 자동 적용 1주 보류`(IDE 재시작 .meta 불일치+테스트 누락 동시 폭발 차단·KB 공개 안정성 관찰). 영향 없을 시 인지 처리 후 종결',
  'P0: NumLink Tools 23일 부재 종결 — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 상수 NumLink 메인씬으로 갱신 + `python3 Tools/unity_validate.py` 1회 실행하여 baseline 0E 확보 + chore(qa) 단일 커밋. CLAUDE.md "Unity AI 자율화 파이프라인" 위반 23일 누적 부채 즉시 종결. 동시에 NumLink Tests/Editor D 4파일 복구 별도 PR',
  'P0: MeowBeat .meta 3건 + 5코어 파일 31일 drift 복구 (별도 PR · 3자릿수 진입 가속 차단) — Input.meta/Item.meta/SaveLoad.meta 3건 D 복구(폴더 메타=GUID 손실 위험·import 트리 붕괴 위험) NumLink와 분리 PR. 5/12 패치튜즈데이 IDE 재기동 전 처리 필수. SongData/GameManager/SongManager/OptionManager/manifest atomic 분할 — (a) feat(song): 매니저 4+manifest (b) chore(deps): GoogleMobileAds 3 prefab+AndroidManifest (c) chore(project): ProjectSettings',
  'P1 [NumLink 가장자리 발사형 보너스 모드 1주 프로토타입 + Kawaii 디폴트 락인]: ClearIt Crystal 5/8 입력 변형(가장자리 발사형) 라인드로우 차별화 컷으로 1주 프로토타입화. 동시 NumLink Kawaii 테마 디폴트 락인 + Premium/Retro 일정 레벨 클리어 후 잠금해제 보상 전환(동시 3종 QA·일관성 부담을 메타 진행감으로 치환). 시즌패스 트랙(월 단위 광고 제거+레벨팩) MVP 직후 도입 검토',
  'P1 [NumLink/MeowBeat docs/STORE_LISTING.md 골격 오늘 신설 + "선생님께 숫자로 ㄱㅅ" 6초 세로 훅 즉시 제작]: 두 프로젝트 docs/STORE_LISTING.md 골격(타이틀/숏디스크립션/스크린샷 5컷 카피) 신설 → 출시 자산 0 종결. NumLink 스승의날 D-3 6초 세로 훅 1편 제작(첫 1초 칠판 ㄱㅅ → 숫자 연결 플레이 3초 → CTA 2초·TikTok/Reels). 한글 캘리그라피(세종대왕 생일 5/15 동일) 차별화 모티프·AI slop #88A4FF 금지',
  'P1 [MeowBeat 1초 흔들기 → 0.4~0.5초 단축 · 스킵 가능 게이미파이드 광고 적용]: MeowBeat farm 음식 1초 흔들기를 0.4~0.5초로 단축(리듬게임 타이밍 윈도우 정렬·애니메이션이 명령어 트렌드). 동시 5월 업데이트 훅으로 "짧고 스킵 가능한 게이미파이드 광고 보상"(고양이 코스튬 1회권) 적용 → 캐주얼 광고 CTR 30~40% 우위 트렌드 정렬',
  'P1: `daily_standup.bat` 사전 taskkill 래퍼 14일째 미적용 종결 — PID 26→24개 -2 미세 개선(자연 감소). 첫 줄 `taskkill /F /IM claude.exe /T 2>nul & timeout /t 2 >nul` 1줄 추가(ASCII 인코딩 유지·BOM 금지·Edit/Write 도구 금지·notepad 직접 편집). 5/13 04:00 실행분부터 검증. 구현 시간 2분·회귀 위험 0·추가 비용 0',
  'P2: FarmFoodManager 17건 핫스팟 차주 책임 분할 리팩터 등록 + MainScene.unity.bak_btn 25일 정리 — MeowBeat known_bugs.json에 패턴 추가 검토. bak_btn 삭제 후 `run_regression.py` 1회 실행 회귀 확인(farm 음식 애니메이션 657032c/36c5400/a5229db 기준)',
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
