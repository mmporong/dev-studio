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
    taskSummary: '**🐛 추적기의 메타-갭 발견·회의 중 교정(6/20)**: NumLink 18일째 미커밋(6/2 이후·17→18 또 악화)·.gitignore 여전히 .gstack/ 한 줄(핵심 3종 미정비)·AutoGenTests 4파일 6/19 발견 후 미복구 이월·Layer Lab untracked 7,663파일+UGUI .cs 12개 워킹트리 오염 가속. **✅ QA가 6일째 P0(dspTime)가 known_bugs.json에 미등록(runtime_timing 카테고리 부재) 메타-갭 발견→메인이 회의 중 등록·선별 커밋(a7588c7)**. **핵심**: 두 P0 모두 "코어 패치 1건/git restore 한 줄"인데 게임 코드라 새벽 무인 미착수 — 자율로 닿는 가장자리(추적기)부터 메움. **메타**: 토요일·D+27 — 검증 시스템이 자기 자신을 점검한 날.',
    lastUpdate: '6/20 토요일 스탠드업(🐛 추적기에 정작 가장 중요한 버그가 없었다·QA가 6일째 P0(NoteSpawner dspTime)의 known_bugs.json 미등록 메타-갭 발견→메인이 회의 중 TIMING_DSPTIME_UNUSED 등록·runtime_timing 신설·선별 커밋 a7588c7·Developer가 같은 버그 dspTime+PlayScheduled 픽스 제시): **✅ [실행완료] known_bugs.json P0 등록 자율 커밋(a7588c7·게임 레포 2번째 데이터/도구 자율 실행)** + **🔴 P0[이월] MeowBeat NoteSpawner dspTime 코어 패치 1건(사용자 세션)** + **🚨 P0[이월] NumLink AutoGenTests git restore 복구→.gitignore 4종→Layer Lab 단일 스냅샷 커밋** + **🟢 P2 마일스톤 LTO·스프링 물리 모션·CPP/CSL 로컬라이제이션**.',
    priority: 'high',
    energy: 88,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎮 신규(결제·라이브옵스)**: 퍼즐 최초결제 전 장르 최단(**안드 1.6일·iOS 1.7일**)·라이브옵스-스토어 동기화 시 **D7 +18%·browse→install +23%**·LTO가 고정 24h세일→마일스톤 트리거(연속 실패=컴백 키트·연승=챔피언 부스터)로 진화. 리듬 차트는 Easy→Hard 3단계 NPS 스프레드+"플로우(ergonomic)"가 핵심. **적용**: NumLink 데일리퍼즐 streak 카운터+마일스톤 컴백 키트, MeowBeat 곡별 NPS 기준표 manifest 명문화(Easy 1~2·Normal 2~4·Hard 4+).',
    lastUpdate: '6/20 토요일 리서치(토요일·D+27·퍼즐 최초결제 안드 1.6일/iOS 1.7일 전 장르 최단·라이브옵스-스토어 동기화 D7 +18%/설치전환 +23%·LTO 마일스톤 트리거 진화·리듬 차트 Easy→Hard 3단계 NPS 스프레드 신규): **🟢 P2 NumLink 데일리퍼즐 streak 카운터 노출+연속 실패 시 마일스톤 컴백 키트 자동 발동(고정 세일 대신·손실회피)+MeowBeat 곡별 NPS 기준표 manifest 명문화**. P0 후. Sources: Mistplay·PocketGamer.biz·rhythm-games.com 차팅 가이드.',
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
    taskSummary: '**💻 5일째 P0 픽스 설계 완료**: NoteSpawner.cs:126 `elapsedTime += Time.deltaTime`를 `songPosition = (AudioSettings.dspTime - dspStart)`로 교체+BGM은 `PlayScheduled`로 시작 고정·DSP↔프레임 선형회귀 평활화·Android 지연 0.01~0.2s 캘리브레이션 오프셋. **💻 diff 실측**: MeowBeat 미커밋 .cs는 GameManager+59/OptionManager+42/SongManager/SongData 4개뿐·타이밍 코어 NoteSpawner는 diff에 없음(5일째 미수정). **💻 신규**: Unity 6.2 Burst/Job 스케줄러 개선으로 핫패스 프레임 코드변경 0으로 수%↑.',
    lastUpdate: '6/20 토요일 리서치(토요일·5일째 P0 dspTime 픽스 설계 완료 dspTime+PlayScheduled+선형회귀 평활화+Android 캘리브레이션·diff 실측 NoteSpawner 양쪽 미변경 재확인·Unity 6.2 Burst/Job 핫패스 자동 개선 신규): **🔴 P0 NoteSpawner를 dspTime+PlayScheduled로 교체해 5일 묵은 출시 차단급 P0를 코어 패치 1건으로 종결(사용자 세션)+미커밋 .cs 4종 WIP 백업**. Sources: Rhythm Quest Devlog 4·Unity dspTime API·Unity 6.2 LTS Performance·diff --stat 실측.',
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
    taskSummary: '**🔑 핵심 발견(추적기 메타-갭)**: 6일째 미해결 P0(NoteSpawner dspTime)가 known_bugs.json에 미등록 — 등록 6건이 전부 씬/YAML/에셋·리듬데이터라 **runtime_timing 카테고리 자체 부재**·정적QA가 가장 치명적 결함을 구조적으로 못 잡음. test_fixtures 0개(회귀 픽스처 부재). NumLink AutoGenTests는 [Test] 15케이스(DailyPuzzle 시드·Endless 보드크기 경계)인데 6/19 발견 후 미복구 이월. **🚨 미해결 버그 7건**. **✅ 회의 중 P0 등록 자율 커밋 완료(a7588c7)**.',
    lastUpdate: '6/20 토요일 리서치(토요일·🔑 추적기 메타-갭 발견 — 6일째 P0 dspTime이 known_bugs.json 미등록·runtime_timing 카테고리 자체 없어 정적QA가 가장 치명적 결함 구조적 미탐지·test_fixtures 0개·NumLink AutoGenTests 15케이스 미복구 이월 신규): **✅ [실행완료] P0 dspTime을 TIMING_DSPTIME_UNUSED로 known_bugs.json 등록·메인 선별 커밋(a7588c7)** + **🚨 P0 NumLink AutoGenTests git restore로 15케이스 복구(사용자 세션)**. Sources: known_bugs.json·git status·AutoGenTests 내용 실측.',
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
    taskSummary: '**📦 신규 1순위(커스텀 스토어 페이지)**: iOS CPP·Android CSL이 전환율 **최대 +40%**·채널별(숏폼 vs 검색) 메시지 분리 무기. **📦 신규 2순위(로컬라이제이션 ROI)**: 일본어+한국어만 추가해도 캐주얼 다운로드 **2~3배**(남은 최고 ROI·스크린샷·리뷰까지 현지화). **📦 신규 3순위(사전등록·UGC)**: 구글 웨이팅 리스트로 출시일 오가닉·D1 선점·UGC 광고 CTR iOS 4.27%/안드 3.34%(저CPI). **적용**: 출시 전 일본어·영어 CPP/CSL 2종 선제작+사전등록 보상으로 웨이팅 리스트 확보.',
    lastUpdate: '6/20 토요일 리서치(토요일·커스텀 스토어 페이지 CPP/CSL 전환 +40%·일본어+한국어 로컬라이제이션 다운로드 2~3배 남은 최고 ROI·구글 사전등록 웨이팅 리스트·UGC 광고 CTR iOS 4.27%/안드 3.34% 신규): **🟢 P2 NumLink/MeowBeat 출시 전 일본어·영어 CPP/CSL 2종 선제작(채널별 메시지 분리)+사전등록 페이지 보상 1건으로 웨이팅 리스트 확보+일본어+한국어 로컬라이제이션 우선**. P0 후. Sources: megadigital·udonis ASO 2026·apptweak·Google Ads Help.',
    priority: 'high',
    energy: 81,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🛡 ✅ CI/배포 안정(6/20)**: agent-office gh run 최근 5건 전부 success·열린 PR 0건(#104 이후 dependabot 정주기 대기). deploy-pages는 이미 upload-pages-artifact@v5·deploy-pages@v5·SHA핀이라 2025-01 artifact v3 전면 폐기와 무관. **🛡 신규(Unity CI 라이선스)**: game-ci/unity-builder@v4부터 personal 라이선스 수동 활성화(ULF) 없이 공식 CI 구축 가능·`unity-license-activate`로 매 실행 활성화. NumLink/MeowBeat CI 미구축이라 도입 시 v4 기준 권장. **확인**: 메인의 known_bugs 자율 커밋(a7588c7) 검증.',
    lastUpdate: '6/20 토요일 리서치(토요일·agent-office CI 5건 success/열린 PR 0건 안정·deploy-pages 이미 artifact v5+SHA핀이라 v3 전면 폐기 무관·Unity CI는 game-ci/unity-builder@v4로 수동 라이선스 활성화 없이 공식 구축 가능 신규): **agent-office 이상 없음 + 🟢 P2 Unity 게임 CI는 game-ci/unity-builder@v4 채택 검토 권고(수동 라이선스 활성화 워크어라운드 불필요)**. Sources: gh run/pr 실측·GitHub Changelog artifact v3 폐기·game.ci/docs activation.',
    priority: 'high',
    energy: 80,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(스프링 물리 모션)**: 2026 모션이 듀레이션 트윈→스프링 물리(stiffness/damping/mass 3파라미터)로 격상·snappy=stiffness 300·gentle=stiffness50/damping20. **🎨 신규 2순위(마이크로인터랙션)**: 200~300ms sweet spot+커스텀 이징(선형은 로봇틱 금지). **🎨 신규 3순위(가변폰트)**: 1파일=정적 6~8개 대체+APCA/WCAG3.0·iOS Dynamic Type이 동적 텍스트 접근성 표준. **적용**: NumLink 숫자 연결 성공 피드백을 스프링 물리 트윈(mass1.0·stiffness300·damping18)+숫자 폰트 가변폰트 1종 교체.',
    lastUpdate: '6/20 토요일 리서치(토요일·모션 듀레이션 트윈→스프링 물리 stiffness/damping/mass 격상·마이크로인터랙션 200~300ms+커스텀 이징·가변폰트 1파일=정적 6~8개 대체+APCA/WCAG3.0 동적 텍스트 표준 신규): **🟢 P2 NumLink "숫자 연결 성공" 피드백을 스프링 물리 트윈(mass1.0·stiffness300·damping18)으로 전환+버튼 탭 250ms 커스텀 이징 통일+숫자 폰트 가변폰트 1종 교체(동적 텍스트 접근성)**. P0 후. Sources: Motion·Josh Comeau·Primotech·Lounge Lizard/DesignMonks.',
    priority: 'high',
    energy: 79,
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
  '✅ [실행완료·게임 레포 두 번째 데이터/도구 자율 실행] MeowBeat known_bugs.json에 P0 타이밍 버그 등록(HEAD a7588c7) — QA가 "6일째 미해결 P0(NoteSpawner.cs:126 deltaTime 누적)가 알려진 버그 단일 진실 소스에 미등록·런타임 타이밍 카테고리 자체가 없어 정적QA가 가장 치명적 결함을 구조적으로 못 잡는다"는 메타-갭을 발견하자, 회의 중 메인이 TIMING_DSPTIME_UNUSED(severity error·detector qa_static.check_dsptime_usage)를 등록하고 runtime_timing 카테고리를 신설, escalation에 Developer 픽스 경로(dspTime+PlayScheduled+Android 캘리브레이션)까지 박은 뒤 known_bugs.json만 선별 커밋(11줄 추가·다른 37개 미커밋 파일 미접촉·JSON 유효성 검증 완료). 6/17 검증툴 절대경로화에 이은 두 번째',
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — 5일 묵은 출시 차단급 P0를 코어 패치 1건으로 종결. Developer 설계 확정: elapsedTime += Time.deltaTime를 songPosition = (float)(AudioSettings.dspTime - dspSongStartTime)로 교체+BGM은 AudioSource.PlayScheduled(dspStart + leadTime)로 시작 고정·DSP↔프레임 매핑 선형회귀 평활화·Android 오디오 지연 0.01~0.2s는 탭 테스트 캘리브레이션 오프셋으로 흡수. diff 실측상 NoteSpawner는 양쪽 레포 미변경(5일째). 추적기 등록(a7588c7)·해법 설계 모두 끝나 남은 건 코어 패치뿐. 병행해 미커밋 .cs 4종(GameManager/OptionManager/SongManager/SongData·다국어+볼륨 세이브) WIP 백업',
  '🚨 P0 [이월·게임 코드·사용자 세션] NumLink 안전망 복구를 단일 스냅샷 커밋으로 봉인 — 18일째 미커밋 종료. ① 삭제된 AutoGenTests 4파일을 git restore Assets/Tests/Editor/로 복구해 [Test] 15케이스(DailyPuzzleProvider 시드/보드크기/패턴 결정성·EndlessMode 레벨별 보드크기 경계 0~9=5×5·10~24=6×6·25+=7×7) 부활(삭제가 사용자 의도였는지 확인 선행) → ② .gitignore에 .omc/·state/·Screenshots/·_Recovery/ 4종 일괄 추가(노이즈 제거) → ③ Layer Lab 리스킨+UGUI .cs 12개(ComboPopup/DailyChallengeHub/GameOver/TimerUI 등) 실작업분을 단일 스냅샷 커밋으로 봉인. 병행해 _ProjectTemplate 검증툴 3종 이식(정적QA 0%→복구)',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Game Designer — NumLink 데일리퍼즐 streak 카운터 노출+어려운 레벨 연속 실패 시 마일스톤 트리거 컴백 키트 자동 발동(고정 세일 대신·손실회피)·MeowBeat 곡별 NPS 기준표 manifest 명문화(Easy 1~2·Normal 2~4·Hard 4+). Art Director — NumLink "숫자 연결 성공" 피드백을 스프링 물리 트윈(mass 1.0·stiffness 300·damping 18)으로 전환+버튼 탭 250ms 커스텀 이징 통일+숫자 폰트 가변폰트 1종 교체(동적 텍스트 접근성). Content Writer — 출시 전 일본어·영어 CPP/CSL 2종 선제작(전환 +40%)+사전등록 보상으로 웨이팅 리스트 확보·일본어+한국어 로컬라이제이션(다운로드 2~3배) 우선. DevOps — Unity 게임 CI는 game-ci/unity-builder@v4 채택 검토(수동 라이선스 활성화 불필요)',
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
