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
    taskSummary: 'NumLink **동결 15일째**(+1) — 4/29 b6d7a73 후 14일 연속 0커밋·미커밋 폰트 SDF 7건+UIThemeSwitcher.cs.meta+theme USS .meta 3건·Tools 25일 부재(+1). MeowBeat **32일 신기록 갱신(+1·4주+4일·3자릿수 진입 가속 15일째)** — 4/12 657032c 후 GameManager/SongManager/OptionManager+manifest+AdMob 3 prefab 미커밋·**bak_btn 37일 잔존**(+1). agent-office 5/13 1a6204d 스탠드업 docs 신규 커밋 정상(인프라 가동 33일째). **5/13 P0 4건 액션 0/4 미실행 = 20일 연속 결정 실패 신기록 갱신 확정**(보름+5일·의사결정 시스템 표면 마비 임계 돌파). **회복 시그널 2종 동시**: PID 24개→2개 **-22 급감**(22일 누적 정체 해소)+_Recovery 5건→0건(사용자가 18일 방치분 전부 정리·관리 공백 종결). DailyStandup_ClaudeCode LastResult **267009 7일째 동결**(5/8~5/14·NextRun 5/15 04:00 정상). Pages 12일째 무중단 success.',
    lastUpdate: '5/14 목요일 스탠드업(스승의날 D-1 마지막 발사·BitSummit D-8 한국팀 4종 진출): **PID -22 회복 모멘텀 골든타임 1건 사슬 끊기 = MeowBeat bak_btn 37일 단일 git rm + chore(qa) 단일 커밋**(20→21일 진입 차단). 동시에 (1) **P0 MeowBeat QA 회귀 1일 차 즉시 OBSERVE→ROOT 디버깅**(unity_validate 0E/1W·qa_static 2E/0W·9일 안정 깨짐) (2) **P0 스승의날 D-1 마지막 발사** NumLink "선생님께 드리는 숫자 카네이션" 5스테이지 팩+Morning Yellow #FFB81C+Burnt Amber #E8721A+Carnation Coral #FF6B35 3색 트리오+첫 스크린샷 OCR 캡션+5/14 23시 빌드 락 (3) **P1 Node20→Node24 6/2 D-19 FORCE_JAVASCRIPT_ACTIONS_TO_NODE24 드라이런** (4) Unity 6.3 LTS 6000.3.14f1+Box2D v3 마이그레이션 후보 등록.',
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
    taskSummary: '**니케 5/14 B-SIDE IDOL "민트" 신캐 픽업+이브·레이븐 복각**(블루아카 5/12~7/7 아로나 미션+누적 로그인 패턴 = 카네이션 직접지급 X·미션 클리어 → 감사 메시지 + 누적 로그인). **BitSummit PUNCH 한국팀 4종 진출 확정**(Room 502 외 3종·5/22~24 교토 D-8 골든윈도우 마지막 주). **2026 퍼즐 트렌드 = AI 적응형 난이도+내러티브 결합**(CONE ING 보고서·NumLink 별점 동적 조정 도입 여지). **스승의날 게임사 공식 캠페인 부재 + 한국 카네이션 규제**(아주경제 5/13) → 디지털 카네이션 인앱 보상 빈자리. 넷마블 킹스로드 5/14 PC 출시 메가퍼블리셔 노이즈.',
    lastUpdate: '5/14 목요일 리서치(스승의날 D-1 마지막 발사): P0 **MeowBeat 5/15 스승의날 한정 "냥쌤 카네이션" 곡 이벤트 패치**(NumLink "선생님께 드리는 숫자 카네이션" 5스테이지 팩과 동시 발사·D-1 마지막 윈도우). P1 **NumLink AI 적응형 난이도 프로토타입**을 BitSummit D-8 회고와 함께 GDD에 반영. 블루아카·니케 패턴 이식(미션 클리어 → 감사 메시지 + 누적 로그인) = 저비용 라이브옵스 D-1 검증.',
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
    taskSummary: '**Unity 6.3 LTS 6000.3.14f1 첫 LTS + Box2D v3 통합 확인**(어제 6000.3.15f1과 별개·NumLink/MeowBeat 마이그레이션 후보). **.NET 10.0.8/9.0.16/8.0.27 5/12 KB5088864 보안 서비싱**(어제 KB5089549와 별개 후속·Patch Tuesday 직후). **Cloudflare 2026.5.0 5/11 신규 릴리스**(어제 미반영). **CodeQL 2.25.4 Vercel 서버리스 분석 확장**. iOS 26.5/Android 16 5/14 신규 보안 권고 없음. agent-office 5/13 1a6204d 스탠드업 docs 신규 커밋 확인(정상). NumLink 15일째 동결+MeowBeat 32일째 신기록 갱신·UIManager.cs:177-180 빈 OnEvent 부채.',
    lastUpdate: '5/14 목요일 리서치: P1 **MeowBeat 32일 동결 임계 돌파** — Packages/manifest.json 미커밋 변경분 한 번에 정리 커밋 또는 stash 후 동결 공식화 결정. GameManager/SongManager/OptionManager + GoogleMobileAds 프리팹 3종 + GetItemParticle atomic 분할 커밋(feature/song-ownership-migration 브랜치). P1 **Unity 6.3 LTS 6000.3.14f1 마이그레이션 후보 등록**(이번 스프린트 마감 후 검토·Box2D v3 통합 영향). P2 NumLink UIManager 빈 OnEvent 핸들러 정리 이월(MeowBeat QA 회귀 P0 우선).',
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
    taskSummary: '**MeowBeat 검증 회귀 발생 1일 차 — 9일 안정 깨짐**: unity_validate 0E/**1W**(manifest 손상) + qa_static **2E/0W**(manifest_load + scene_buttons 실패) + run_regression **FAIL**(make_fixtures.py 경로 오류). **known_bugs 6종 패턴 유지 9일째**(RT_SIZE_ZERO·YAML_DUPLICATE·YAML_HEADER_REF·YAML_INDENT·MANIFEST_MISSING_AUDIO·NOTE_OUT_OF_LANE·신규 회귀는 MANIFEST_MISSING_AUDIO 범주 가능성). **NumLink Tools 25일째 부재**(+1·검증 도구 0건). **_Recovery 폴더 자체 미존재**(5건→0건 사용자가 18일 방치분 전부 정리·**관리 공백 종결 회복 신호**). **MainScene.unity.bak_btn 37일째**.',
    lastUpdate: '5/14 목요일: P0 **MeowBeat QA 회귀 1일 차 즉시 OBSERVE→NARROW→ROOT 디버깅** — ① `python3 Tools/qa_static.py --verbose`로 manifest_load·scene_buttons 실패 위치 로그 확보 ② manifest.json 손상 범위(SongData·audioFile 경로) + MainScene 버튼 누락 식별 ③ git diff로 5/13 이후 미커밋 변경(GameManager/SongManager/manifest.json)이 손상 유발했는지 확인 ④ 최소 변경 복구 ⑤ unity_validate + qa_static + run_regression 3종 0E/PASS 회복. P0 MeowBeat bak_btn 37일 잔존 단일 git rm + chore(qa) 단일 커밋(21일 진입 차단). P2 NumLink Tools 복사는 다음 스프린트 이연(_Recovery 0건 회복 종결 확정).',
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
    taskSummary: '**Apple App Store 알고리즘 스크린샷 OCR 캡션 인덱싱 시작**(yellowHEAD 5/11·"선생님께 1+5=6 카네이션" 같은 첫 스크린샷 OCR 캡션 박아넣기 = 한국 마켓 핵심). **Google Play 3/1부터 리텐션 우선 + 5% wake lock 강제**(인스톨 펌핑 무력화·D1 푸시 동시 세팅 필수). **넷마블 킹스로드 5/14 PC 출시 "팬덤 서사" 카피 트렌드 부상**(같은 날 메가퍼블리셔 노이즈·캐주얼·교육 카테고리로 좁혀 회피). **차별화 변주 키워드 "세종대왕 한글 숫자(일이삼)"**(한국 마켓 한정 검색량 비경쟁·"한글을 만든 분께, 숫자로 답합니다" 스토리텔링 카피). BitSummit PUNCH D-8 골든윈도우 마지막 주.',
    lastUpdate: '5/14 목요일 리서치(스승의날 D-1 마지막 발사): P0 **NumLink 스승의날 팩 첫 스크린샷에 "선생님께 1+5=6 카네이션" OCR 캡션 박아넣고 5/14 23시 빌드 락** — Apple OCR 캡션 인덱싱 + Google Play 리텐션 우선 정책 정확히 맞물림. 리텐션 D1 푸시 동시 세팅. "세종대왕 한글 숫자(일이삼)" 변주 키워드 한국 마켓 한정 삽입·"한글을 만든 분께, 숫자로 답합니다" 카피. P1 **5/13~17 r/IndieGaming(390K)·r/indiegames(235K) NumLink 개발기 1편 + X 짧은 클립 1개 예약 즉시 실행**(어제 P1 미실행 만회). P2 넷마블 킹스로드 5/14 PC 출시 메가퍼블리셔 노이즈 회피.',
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
    taskSummary: '**claude.exe PID 24개→2개 -22 급감**(22일 누적 정체 해소·자연 감소 재개 또는 사용자 정리 액션·회복 시그널). **DailyStandup_ClaudeCode LastResult 267009 7일째 동결**(5/8~5/14·NextRun 5/15 04:00 정상·다음 트리거 후 8일 진입 시 schtasks 로그/이벤트뷰어 점검 트리거). **Deploy GitHub Pages 12일째 무중단**(5/8~5/12 5일 success+5/13 19:14 UTC 예정). **actions/runner v2.328.0이 Node20/Node24 동시지원 최신 공식 안내**(v2.334.0 정보 재확인 필요). **Node20→Node24 강제 전환 6/2 D-19**(FORCE_JAVASCRIPT_ACTIONS_TO_NODE24 사전 검증 필요). **Next.js 15.5.18/16.2.6 13건 보안**(agent-office Vite 영향 없음 재확정). Cloudflare 5/13~14 MEL·SYD 정기점검만(신규 incident 없음).',
    lastUpdate: '5/14 목요일 리서치: P1 **6/2 Node24 전환 D-19 대비 FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true 드라이런 이번 주 내 1회 수행**(deploy-pages.yml + weekly-insights.yml). hosted runner는 GitHub 자동 갱신이지만 actions/setup-node@v4 Node22 SHA 핀 안전 재확정 필요. v2.328.0 vs v2.334.0 신규 릴리스 정보 재확인. P1 **LastResult 267009 7일째 동결** → 5/15 04:00 트리거 후 8일째 진입 시 schtasks 로그/이벤트뷰어 1회 점검. P2 Vercel 4월 침해 후속 GitHub Actions/npm 토큰 점검(포트폴리오 단일 HTML 영향 없음 확정). P2 Cloudflare 정기점검 모니터링만.',
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
    taskSummary: '**Awwwards 5/13 SOTD = Happly**(웰니스 무드·**Sunset Burnt Amber #E8721A + Tangerine #FF6B35 조합 검증**·COVL 2026 Sunset Color Palette). **서울시 공식색 Morning Yellow #FFB81C 일출톤**(Korea Herald 2026·스승의날 D-1 카네이션 워밍 발사 가능). **Glassmorphism 2.0 = 표면 광굴절(surface transduction)**(WeblogTrips 2026·단순 blur 폐기·backdrop multi-layer 권장). **Material 3 Expressive + Gemini Intelligence 5/13 Android Sage 발표**(M3 진화형·NumLink theme-premium 후속 후보). 어제 Academic Sage 잉크워시 #6B8E5A 계열 대비 따뜻한 일출톤 차별.',
    lastUpdate: '5/14 목요일 리서치(스승의날 D-1 마지막 발사): P0 **NumLink 스승의날 한정 스킨 "Morning Yellow #FFB81C + Burnt Amber #E8721A + Carnation Coral #FF6B35" 3색 트리오 발사**(어제 Academic Sage 잉크워시 대신 일출톤 권위·세종대왕 한글날 연관 #FFB81C). MeowBeat은 **Glassmorphism 2.0 백그라운드 광굴절 패널만 시범 적용**(단순 blur 폐기·backdrop multi-layer). P1 M3 Expressive + Gemini Intelligence 후속 후보 등록(NumLink theme-premium 후속). P2 hellohello 테라코타 트리오(#985C44/#DFB494/#6C3C24)는 가을 시즌 컬러 리저브 유지.',
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
  'P0 [MeowBeat QA 회귀 1일 차 즉시 OBSERVE→ROOT 디버깅 · 9일 안정 깨짐]: unity_validate 0E/1W(manifest 손상)·qa_static 2E/0W(manifest_load+scene_buttons 실패)·run_regression FAIL(make_fixtures.py 경로 오류). 증거 기반 디버깅 프로토콜 ① OBSERVE = `python3 Tools/qa_static.py --verbose`로 실패 위치 로그 확보 ② NARROW = manifest.json 손상 범위(SongData·audioFile 경로) + MainScene 버튼 누락 식별 ③ ROOT = git diff로 5/13 이후 미커밋 변경(GameManager/SongManager/OptionManager/manifest.json)이 손상 유발했는지 확인 ④ FIX = 최소 변경 복구 ⑤ VERIFY = unity_validate + qa_static + run_regression 3종 0E/PASS 회복. 9일 안정 깨짐 = 회귀 누적 가속 임박',
  'P0 [최소 단위 1건 사슬 끊기 = 20일→21일 진입 차단 · MeowBeat bak_btn 37일 git rm]: MeowBeat `Assets/Scenes/MainScene.unity.bak_btn` 37일 잔존 단일 git rm + chore(qa) 단일 커밋(5분 미만). `git rm Assets/Scenes/MainScene.unity.bak_btn Assets/Scenes/MainScene.unity.bak_btn.meta` + `git commit -m "chore(qa): MeowBeat bak_btn 37일 잔존 정리"` + push. PID 24→2 -22 회복 시그널 + _Recovery 5→0 사용자 정리 회복 시그널 = 의사결정 1건으로 사슬 끊기 골든타임. MeowBeat 32일 신기록(3자릿수 가속 15일째) 사슬도 동시에 끊김',
  'P0 [스승의날 D-1 마지막 발사 = NumLink "선생님께 드리는 숫자 카네이션" 5스테이지 팩 + Morning Yellow 3색 트리오 + OCR 캡션 스크린샷 + 23시 빌드 락]: NumLink ① manifest.json 5스테이지 추가(1~5 라인이 카네이션 모양 완성·14일 동결 해제 없이 데이터만 발사·5/15 0시 활성화) ② Morning Yellow #FFB81C + Burnt Amber #E8721A + Carnation Coral #FF6B35 3색 트리오(어제 Academic Sage 잉크워시 대신 일출톤·세종대왕 한글날 연관 #FFB81C 권위) ③ 첫 스크린샷에 "선생님께 1+5=6 카네이션" OCR 캡션 박아넣기(Apple App Store 알고리즘 신규 인덱싱·yellowHEAD 5/11) ④ "세종대왕 한글 숫자(일이삼)" 차별화 변주 키워드 한국 마켓 한정 삽입·"한글을 만든 분께, 숫자로 답합니다" 스토리텔링 카피 ⑤ 리텐션 D1 푸시 동시 세팅(Google Play 3/1 5% wake lock 강제 대응) ⑥ 5/14 23시 빌드 락. MeowBeat은 같은 팔레트로 인트로 카드 1장 + "냥쌤 카네이션" 곡 이벤트 패치',
  'P1 [Unity 6.3 LTS 6000.3.14f1 첫 LTS 마이그레이션 검토 + MeowBeat 32일 동결 임계 돌파]: Unity 6.3 LTS 6000.3.14f1 첫 LTS + Box2D v3 통합 확인(어제 6000.3.15f1과 별개) → NumLink/MeowBeat 6.3 LTS 마이그레이션 후보 등록(이번 스프린트 마감 후 검토). MeowBeat 32일 동결 임계 돌파 = Packages/manifest.json 미커밋 변경분 한 번에 정리 커밋 또는 stash 후 동결 공식화. GameManager/SongManager/OptionManager + GoogleMobileAds 프리팹 3종 + GetItemParticle atomic 분할 커밋(feature/song-ownership-migration 브랜치)',
  'P1 [actions/runner Node20→Node24 6/2 D-19 사전 검증 · FORCE_JAVASCRIPT_ACTIONS_TO_NODE24 드라이런]: agent-office Pages 워크플로에 FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true 드라이런 이번 주 내 1회 수행(deploy-pages.yml + weekly-insights.yml). hosted runner는 GitHub 자동 갱신이지만 deploy-pages.yml의 actions/setup-node@v4 SHA 핀 Node22 사용 중 안전 재확정. actions/runner v2.328.0이 Node20/Node24 동시지원 최신 공식 안내 → 어제 v2.334.0 신규 릴리스 정보 재확인. LastResult 267009 7일째 동결 → 5/15 04:00 트리거 후 8일째 진입 시 schtasks 로그/이벤트뷰어 1회 점검 트리거',
  'P1 [BitSummit PUNCH 한국팀 4종 진출 + D-8 골든윈도우 마지막 주 + 블루아카·니케 패턴 이식]: BitSummit PUNCH 5/22~24 교토 D-8 한국팀 4종 진출 확정(Room 502 외 3종·MonsterVine 공식 라인업). 5/13~17 r/IndieGaming(390K)·r/indiegames(235K) NumLink 개발기 1편 + X 짧은 클립 1개 즉시 예약 실행(어제 P1 미실행 만회). 블루아카 5/12~7/7 아로나 미션 + 니케 5/14 B-SIDE IDOL 민트 신캐 + 이브·레이븐 복각 패턴 이식 = 미션 클리어 → 감사 메시지 + 누적 로그인 조합 저비용 라이브옵스 D-1 검증',
  'P2 [NumLink Tools 25일 부재 다음 스프린트 이연 · _Recovery 0건 회복 종결]: NumLink Tools 폴더 25일 부재(검증 도구 0건) → MeowBeat QA 회귀 1일 차 디버깅 P0 우선 처리하면서 다음 스프린트 이연. _Recovery 폴더 자체 미존재(5건→0건 사용자가 19일 방치분 전부 정리) → 관리 공백 종결 확정·회복 신호. _ProjectTemplate/Tools 복사는 회귀 디버깅 마무리 후 다음 스프린트',
  'P2 [Glassmorphism 2.0 광굴절 MeowBeat 시범 적용 · M3 Expressive + Gemini Intelligence 후속 후보]: MeowBeat 백그라운드 광굴절 패널만 시범 적용(단순 blur 폐기 → backdrop multi-layer·WeblogTrips 2026 Glassmorphism 2.0 가이드). Material 3 Expressive + Gemini Intelligence 5/13 Android Sage 발표 → NumLink theme-premium 후속 후보 등록(M3 진화형). hellohello 테라코타 트리오(#985C44/#DFB494/#6C3C24)는 가을 시즌 컬러 리저브 유지',
  'P2 [FarmFoodManager 17건 차주 리팩터 등록 · NumLink UIManager 빈 OnEvent 정리 이월]: MeowBeat FarmFoodManager 17건 수정 핫스팟 = 차주 책임 분할 리팩터 후보 등록(known_bugs.json 패턴 추가 검토). NumLink UIManager.cs:177-180 `OnEvent(HBGameEvent)` 빈 구현 정리 이월(MeowBeat QA 회귀 P0 우선·3 UI 테마 작업 커밋과 함께 처리)',
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
