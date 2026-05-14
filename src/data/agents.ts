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
    taskSummary: 'NumLink **16일 동결 종결 4커밋 발사** — 오늘 b6d7a73 feat(ui): 3개 UI 테마 Kawaii/Premium/Retro+설정 패널 런타임 스위처 + cf7c897 feat(hint): 힌트 즉시 공개+신규 1개 기본 + 78da36a style(ui): 퍼즐 셀 크림 톤+HUD 하단 버튼 확대 + 00d9190 fix(ui): 레벨선택 탭 active 색 오염 방지·**1차 사슬 끊기 확정**. MeowBeat **33일 신기록 갱신(+1·4주+5일·3자릿수 진입 가속 16일째)** — 4/12 657032c 후 FarmData/SongData/GameManager/SongManager/OptionManager+manifest+AndroidManifest+AdMob 3 prefab 미커밋·**Scripts/Input·Item·SaveLoad.meta 3개 삭제 추가**(GUID 참조 끊김 위험)·**bak_btn 38일(+1)**. agent-office 5/14 60b0126 스탠드업 docs 정상(.omc/project-memory.json 1건만 미커밋·인프라 가동 34일째). **21일 연속 결정 실패 신기록 갱신**(3주 임계 돌파·보름+6일)이나 5/14 P0 3건 중 NumLink UI 작업 1건 실행 = **부분 회복**·핵심 P0(OCR 캡션+카네이션 5스테이지 팩+QA 디버깅) 0건. **회복 시그널 3종 동시 유지**: PID 2개 2일째 안착(자연 감소 정상 패턴 회복) + NumLink 동결 종결(15→16일 진입 차단) + _Recovery 0건 유지. DailyStandup 04:00 정상 실행. Pages 13일째 무중단 success.',
    lastUpdate: '5/15 금요일 스탠드업(스승의날 D-day 학교 휴교일 트래픽 피크·BitSummit D-7 한국팀 4종+Shuhei Yoshida 심사위원): **회복 모멘텀 가속 = 21→22일 진입 차단 P0 3건 묶음 발사** — (1) **P0 MeowBeat meta 3개 삭제 GUID dangling 즉시 해결**(Input/Item/SaveLoad.meta 복원 또는 .cs 동반 삭제 결정) (2) **P0 MeowBeat QA 회귀 2일 차 OBSERVE→ROOT 디버깅**(5/14 P0 미실행 만회·unity_validate 1W+qa_static 2E+run_regression FAIL) (3) **P0 MeowBeat bak_btn 38일 git rm**(위 2건과 단일 chore(qa) 커밋 묶음·15분 이내). 동시에 **P1 Plug & Pulse 200+레벨 + SyncArc Rhythm Hotel 직접 경쟁작 2종 첫 등장 MVP 차별화 GDD** + **P1 NumLink 4번째 한정 테마 "스승의날 크라프트"+USS 토큰화 리팩토링** + **P1 CPP 70슬롯 "스승의날 한정 페이지" 등록**. NumLink 카네이션 5스테이지 팩은 D-1 마지막 발사 윈도우 초과 → 5/16 이월·내년 어버이날 5/8 리저브.',
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
    taskSummary: '**Plug & Pulse: Link Puzzle 5/9 업데이트 200+레벨 월간 콘텐츠** = NumLink 숫자 연결 퍼즐 **직접 경쟁작 첫 등장**(즉시 견제). **BitSummit PUNCH 한국팀 4종 상세 공개**: Room 502(LOTS)·Light Odyssey(SSUN GAMES)·**Rhythm Hotel(SyncArc) 리듬+호텔 운영 = MeowBeat 직접 경쟁작 첫 등장**·Kitchen of Abyss(Pico)·**Shuhei Yoshida 심사위원 합류**(PlayStation 인디 게임 전 대표·노출 가치 +30%). **Pokémon GO 한국·일본 Growing Time + 서울 성수동 30주년 스탬프랠리 5/1~31**(스승의날 학교 휴교일 트래픽 피크). 5/15 D-day 학교 휴교일 트래픽 피크 활용 빈자리 존재.',
    lastUpdate: '5/15 금요일 리서치(스승의날 D-day·BitSummit D-7): P0 **SyncArc Rhythm Hotel을 MeowBeat MVP 차별화 벤치마크로 즉시 분석**(고양이 키우기 메타 vs 호텔 운영 메타 비교)·**MeowBeat 고양이 IP를 BitSummit D-7 차별화 단일 키워드로 선언**. P1 **Plug & Pulse: Link Puzzle 200+레벨 분석**(NumLink 5스테이지 팩 발사보다 경쟁 차별화 GDD 우선·차별화 키워드 1개 도출: 한글 숫자 모드·고양이 캐릭터 통합·세종대왕 IP). P1 **한국팀 4종 보도 r/IndieGaming(390K)·r/indiegames(235K) 5/13~17 예약 즉시 실행**(어제 P1 미실행 만회·Shuhei Yoshida 합류 노출 가치 활용). P2 스승의날 D-day 카네이션 모티브 1회성 무료 보상 캠페인 단발 푸시(이미 늦었으나 학교 휴교 트래픽 피크 활용).',
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
    taskSummary: '**.NET 10.0.8 보안 패치 5/12 출시**(어제 KB5088864 후속 servicing·Unity Mono 백포팅 영향 모니터링). **Dirty Frag 리눅스 LPE 액티브 익스플로잇 CVE-2026-43284(esp4/esp6)+CVE-2026-43500(rxrpc)**(CI 러너 호스트 영향 검토). **ERPNext CVE-2026-44442 CVSS 9.9 5/13 공개**. **Google Play 뉴스·매거진 5/27 자가선언 마감, AdMob 광고 파트너 셋 6/5 갱신, 위치권한 정책 5/15 시행 30일차**. **NumLink 동결 해제 평가**: UI 테마·힌트 4커밋(b6d7a73 등)은 폴리시 영역으로 동결 취지(코어 안정화) 위배는 아니나 **b6d7a73 런타임 스위처는 스코프 크리프**(별도 브랜치가 옳음). MeowBeat 657032c 후 33일째 동결(+1)+Scripts/Input·Item·SaveLoad meta 3개 삭제 미커밋 추가.',
    lastUpdate: '5/15 금요일 리서치: P0 **MeowBeat MainScene.unity.bak_btn 38일 파일 즉시 삭제 + 미커밋 정리**(P0 [01] meta 3건 결정·[02] QA 디버깅과 묶음 단일 chore(qa) 커밋). P1 **NumLink 다음 동결 재선언 후 코어 버그픽스만**(스코프 크리프 차단 명문화·feature/ui-theme-runtime 브랜치 분리). P1 **.NET 10.0.8 5/12 적용 검증**(Unity Mono 백포팅 영향). P2 **Dirty Frag CVE-2026-43284/43500 CI 러너 영향 검토**(GHA windows-2025 영향 없음 재확정). P2 **Google Play 위치권한 5/15 시행 30일차 SDK·매니페스트 점검**. P2 NumLink UIManager.cs:177-180 빈 OnEvent 핸들러 이월.',
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
    taskSummary: '**MeowBeat 검증 회귀 2일 차 미해결**: unity_validate 0E/**1W**(manifest 손상) + qa_static **2E/0W**(manifest_load + scene_buttons 실패) + run_regression **FAIL**(make_fixtures.py 경로 오류). **NumLink 신규 리스크 4종**: AutoGenTests 4파일 삭제(회귀 안전망 손실)+SDF 폰트 6개 동시 수정(GUID 검증 부재)+_Recovery/0(4).unity 1건 재등장+Screenshots/ 폴더 등장+theme USS .meta 3건. **MeowBeat 신규 리스크**: **Scripts/Input·Item·SaveLoad.meta 3개 삭제 = GUID 참조 끊김**(Scripts 본체 살아있어 missing reference 폭탄)+AndroidManifest+manifest+핵심 4 Manager 동시 미커밋·AutoQATests 폴더 신규 등장·**MainScene.unity.bak_btn 38일째**(+1). **NumLink Tools 검증 도구 26일째 부재**(+1).',
    lastUpdate: '5/15 금요일: P0 **MeowBeat meta 3개 삭제 GUID dangling 즉시 해결** — ① OBSERVE = `git diff -- Assets/Scripts/Input.meta Item.meta SaveLoad.meta`로 삭제 시점 확인 ② NARROW = .cs 파일 실존 여부 확인 ③ ROOT = 의도적 삭제인지·Unity 자동 생성 폴더 meta가 삭제된 건지 식별 ④ FIX = (a) .cs 살아있으면 `git checkout HEAD -- meta` 복원 / (b) 동반 삭제 의도였으면 `git rm` 추가 ⑤ VERIFY = Unity Editor missing reference 없음 + qa_static 통과. **bak_btn 38일 git rm 동일 커밋 묶음**. P0 **MeowBeat QA 회귀 2일 차 OBSERVE→ROOT 디버깅 만회**(5/14 P0 미실행·9일 안정 깨진 후 2일 차 = 회귀 누적 가속 임박). P0 **NumLink Tools 부재 확인됨 → _ProjectTemplate에서 즉시 복사 후 baseline 측정**.',
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
    taskSummary: '**iOS 26.5 App Store 12개월 약정 구독 모델 신설**(게임 페이월·스크린샷 카피에 월할 가격 강조 ASO 리프레시). **Apple Custom Product Pages 한도 35→70 2배 확장(2025-10-29) + CPP에 키워드 직접 할당해 오가닉 검색 노출 가능** — 5월 50+ 신작 키워드 압박 대응 카드. **인도 Online Gaming Rules 2026 5/1 발효, OGAI 90일 분류 절차 신설**(글로벌 퍼블리시 캘린더 영향). **TikTok 오가닉 리치 붕괴 → YouTube Shorts·Discord·마이크로 인플루언서(1k~10k CCV) 피벗이 인디 표준**. 스승의날 출석 이벤트 한국 게임사 미발견(설 중심·우회로 CPP 70슬롯 활용).',
    lastUpdate: '5/15 금요일 리서치(스승의날 D-day 학교 휴교 트래픽 피크): P1 **CPP 70슬롯 활용한 "스승의날 한정 페이지" 즉시 등록**(키워드 직접 할당 = 오가닉 검색 노출·NumLink/MeowBeat 동시). P1 **마이크로 인플루언서 1건 테스트로 시그널 측정**(1k~10k CCV·TikTok 오가닉 붕괴 대응). P1 **iOS 26.5 12개월 약정 구독 카피 페이월 리프레시**(월할 가격 강조 ASO). P1 **r/IndieGaming(390K)·r/indiegames(235K) 한국팀 4종+Shuhei Yoshida 합류 5/13~17 예약 즉시 실행**(어제 P1 미실행 만회). P2 TikTok 제거하고 YouTube Shorts·Discord 채널 인디 1차 피벗 등록.',
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
    taskSummary: '**GitHub Actions windows-2025 이미지 VS2026 GA 통합 5/4 + Copilot 클라우드 에이전트 전용 Secrets 신설**(기존 워크플로 영향 적음). **Vercel Fluid Compute 2월 GA로 45B 주간 요청 95% 비용절감 안착**, Netlify는 25/9 크레딧 빌링 전환 유지. **claude.exe PID 2개 안정 2일째 유지**(5/13 24→5/14 2 -22 급감 안착·자연 감소 정상 패턴 회복). **DailyStandup 04:00 정상 실행**. **agent-office 60b0126 5/14 배포 정상·Pages 13일째 무중단**. **이상 없음 유지**. Node20 actions/runner deprecation **6/2 D-18**.',
    lastUpdate: '5/15 금요일 리서치: P2 **agent-office .omc/project-memory.json 미커밋 1건은 .gitignore 추가 또는 chore 커밋으로 정리**. P2 **Node20 D-18 dry-run은 5/18(D-15) 예약 실행**(deploy-pages.yml + weekly-insights.yml FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true). **CI/CD 이상 여부 = 이상 없음 유지**: DailyStandup 04:00 정상·PID 2개 안정 2일째·agent-office 5/14 60b0126 배포 정상·Pages 13일째 무중단. **GHA windows-2025 VS2026 GA 통합 + Vercel Fluid Compute 45B 95% 비용절감 안착**(기존 워크플로 영향 적음). Cloudflare 정기점검 모니터링만.',
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
    taskSummary: '**2026년은 고채도의 해** — 클레이브라운(#985C44)·올리브그린(#6B8E23)·샌드스톤베이지(#D4B896)·뮤티드테라코타(#C8755A) 자연 톤이 모바일 UI 주류, **변수 폰트(Variable Font)가 스크롤·호버 반응형으로 진화**. **카네이션 단일 모티프 대신 "감사 편지지 질감" UI 오버레이**(크라프트지 #E8DCC4 + 잉크 #2A2A2A)가 5/15 스승의날 이벤트 차별화 포인트. **NumLink 3-테마 시스템 평가**: Kawaii/Premium/Retro 분기는 정석이나 **USS 토큰 변수화(--primary, --bg-card) 없으면 신규 테마 추가 비용 폭증 → 디자인 토큰 추출 필수**. Awwwards 5/15 SOTD 미공개(5/14 Floema 기록).',
    lastUpdate: '5/15 금요일 리서치(스승의날 D-day): P1 **NumLink 4번째 한정 테마 "스승의날 크라프트(#E8DCC4 + #6B8E23 + #C8755A)" 24시간 한정 출시**(감사 편지지 모티프·2026 고채도 트렌드 합치·5/15 0시~5/16 0시). P1 **USS 변수 토큰화 리팩토링(theme-tokens.uss) 동시 진행**(--primary, --bg-card, --text-emphasis 변수화·향후 4번째·5번째 테마 추가 비용 -80% 절감). 어제 발사 못한 Morning Yellow 3색 트리오(#FFB81C+#E8721A+#FF6B35)는 내년 어버이날 5/8 리저브로 보존. P2 변수 폰트 스크롤 반응형 NumLink 메인 화면 시범 적용은 USS 토큰화 후 검토.',
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
  'P0 [MeowBeat meta 3개 삭제 GUID dangling 즉시 해결 · Input/Item/SaveLoad.meta 복원 또는 .cs 동반 삭제 결정]: MeowBeat Working Tree에서 Scripts/Input.meta·Item.meta·SaveLoad.meta 3개 삭제 = GUID 참조 끊김(Scripts 본체는 살아있어 missing reference 폭탄). ① OBSERVE = `git diff -- Assets/Scripts/Input.meta Item.meta SaveLoad.meta`로 삭제 시점 확인 ② NARROW = .cs 파일 실존 여부 확인 ③ ROOT = 의도적 폴더 삭제인데 .cs 파일들이 안 따라간 것인지·Unity가 자동 생성한 폴더 meta인데 삭제된 건지 식별 ④ FIX = (a) .cs 살아있으면 `git checkout HEAD -- meta` 복원 / (b) 동반 삭제 의도였으면 `git rm` 추가 ⑤ VERIFY = Unity Editor 실행해서 missing reference 없음 확인 + qa_static.py 통과. bak_btn 38일 git rm도 동일 커밋에 묶음',
  'P0 [MeowBeat QA 회귀 2일 차 OBSERVE→ROOT 디버깅 · 5/14 P0 미실행 만회 즉시 실행]: unity_validate 0E/1W(manifest 손상)·qa_static 2E/0W(manifest_load+scene_buttons 실패)·run_regression FAIL(make_fixtures.py 경로 오류) 2일 차 미해결. 5/14 P0 미실행 만회 즉시 실행 ① OBSERVE = `python3 Tools/qa_static.py --verbose`로 실패 위치 로그 확보 ② NARROW = manifest.json 손상 범위(SongData·audioFile 경로) + MainScene.unity 버튼 누락 식별 ③ ROOT = git diff로 5/13 이후 미커밋 변경(GameManager/SongManager/OptionManager/SongData/manifest.json/AndroidManifest)이 손상 유발했는지 확인 ④ FIX = 최소 변경 복구 ⑤ VERIFY = unity_validate + qa_static + run_regression 3종 0E/PASS 회복. P0 [01] meta 3건과 묶어서 단일 chore(qa) 커밋으로 정리',
  'P0 [회복 모멘텀 가속 = 21일→22일 진입 차단 · MeowBeat bak_btn 38일 git rm + 위 P0 2건 묶음 발사]: NumLink 16일 동결 종결(1차 사슬 끊기) + PID 2개 2일째 안착 + _Recovery 0건 유지 = 회복 시그널 3종 동시 유지 골든타임. 21일 연속 결정 실패 신기록 갱신(3주 임계 돌파)이나 부분 회복 → 위 P0 [01] meta 3개 결정 + [02] QA 회귀 디버깅 + bak_btn 38일 git rm 단일 chore(qa) 커밋으로 묶음 발사(15분 이내·5/14 P0 미실행 3건 만회 = 22일 진입 차단). NumLink 카네이션 5스테이지 팩은 D-1 마지막 발사 윈도우 초과 → 5/16 이월·내년 어버이날 5/8 또는 한글날 10/9 리저브로 보존',
  'P1 [Plug & Pulse: Link Puzzle 200+레벨 NumLink 직접 경쟁작 첫 등장 + SyncArc Rhythm Hotel MeowBeat 직접 경쟁작 첫 등장 → MVP 차별화 GDD 최우선]: Plug & Pulse: Link Puzzle 5/9 200+레벨 월간 콘텐츠 = NumLink 직접 경쟁작 첫 등장 → 분석 후 NumLink 차별화 키워드 1개 도출(한글 숫자 모드·고양이 캐릭터 통합·세종대왕 IP). SyncArc Rhythm Hotel BitSummit PUNCH 진출 = MeowBeat 리듬+고양이 키우기와 직접 경쟁작 첫 등장 → 고양이 IP를 BitSummit D-7 차별화 단일 키워드로 선언. Shuhei Yoshida 심사위원 합류 노출 가치 +30% → 한국팀 4종 보도 r/IndieGaming(390K)·r/indiegames(235K) 5/13~17 예약(어제 P1 미실행 만회)',
  'P1 [NumLink 4번째 한정 테마 "스승의날 크라프트" 24시간 한정 + USS 변수 토큰화 리팩토링 theme-tokens.uss 동시 진행]: NumLink Kawaii/Premium/Retro 3-테마 시스템 USS 토큰 변수화 부재 → theme-tokens.uss 디자인 토큰 추출 리팩토링 필수(--primary, --bg-card, --text-emphasis 변수화·향후 4번째·5번째 테마 추가 비용 -80% 절감). 동시에 스승의날 크라프트 한정 테마(#E8DCC4 + #6B8E23 + #C8755A) 24시간 한정 출시(감사 편지지 모티프·2026 고채도 트렌드 합치·5/15 0시~5/16 0시). 어제 발사 못한 Morning Yellow 3색 트리오(#FFB81C+#E8721A+#FF6B35)는 내년 어버이날 5/8 리저브로 보존',
  'P1 [Content CPP 70슬롯 "스승의날 한정 페이지" 즉시 등록 + 마이크로 인플루언서 1건 테스트 + iOS 26.5 12개월 약정 페이월 리프레시]: Apple CPP 한도 35→70 2배 확장 + 키워드 직접 할당 오가닉 노출 → NumLink/MeowBeat "스승의날 한정 페이지" CPP 70슬롯 즉시 등록(5/15 학교 휴교 트래픽 피크 활용). iOS 26.5 12개월 약정 구독 모델 신설 → NumLink/MeowBeat 페이월·스크린샷 카피에 월할 가격 강조 ASO 리프레시. TikTok 오가닉 리치 붕괴 → YouTube Shorts·Discord·마이크로 인플루언서 1k~10k CCV 1건 테스트로 시그널 측정(어제 P1 r/IndieGaming 예약 만회와 동시 진행)',
  'P2 [NumLink 동결 재선언 + 코어 버그픽스만 + 스코프 크리프 차단 + .NET 10.0.8 적용 검증]: NumLink b6d7a73 런타임 스위처는 폴리시 OK가 아닌 스코프 크리프(별도 브랜치가 옳음) → 다음 동결 재선언 후 코어 버그픽스만 허용 룰 명문화·feature/ui-theme-runtime 브랜치로 분리. .NET 10.0.8 5/12 보안 패치 Unity Mono 백포팅 영향 모니터링·Dirty Frag 리눅스 LPE CVE-2026-43284/43500 CI 러너 호스트 영향 검토(GHA windows-2025 영향 없음 재확정). ERPNext CVE-2026-44442 9.9 영향 없음(사용 안 함). Google Play 위치권한 정책 5/15 시행 30일차 SDK·매니페스트 점검',
  'P2 [DevOps Node20 D-18 dry-run 5/18(D-15) 예약 + .omc/project-memory.json 미커밋 정리 + Pages 13일째 무중단]: Node20 actions/runner deprecation 6/2 D-18 → 5/18(D-15) FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true dry-run 예약(deploy-pages.yml + weekly-insights.yml). agent-office .omc/project-memory.json 미커밋 1건은 .gitignore 추가 또는 chore 커밋으로 정리. GHA windows-2025 VS2026 GA 통합 5/4 + Copilot Secrets 신설 기존 워크플로 영향 적음. Vercel Fluid Compute 45B 95% 비용절감 안착(agent-office GitHub Pages 영향 없음·참고만). DailyStandup·PID 2개·배포 모두 정상 = 이상 없음 유지',
  'P2 [FarmFoodManager 17건 차주 리팩터 등록 · NumLink UIManager 빈 OnEvent 정리 이월 · 변수 폰트 스크롤 반응형 시범]: MeowBeat FarmFoodManager 17건 수정 핫스팟 = 차주 책임 분할 리팩터 후보 등록(known_bugs.json 패턴 추가 검토). NumLink UIManager.cs:177-180 `OnEvent(HBGameEvent)` 빈 구현 정리 이월(P0 3건 묶음 처리 우선). 변수 폰트 Variable Font 스크롤·호버 반응형 NumLink 메인 화면 시범 적용은 USS 토큰화 리팩토링 후 검토. Pokémon GO 한국·일본 Growing Time + 서울 성수동 30주년 스탬프랠리 5/1~31 모니터링(스승의날 학교 휴교 트래픽 피크 활용)',
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
