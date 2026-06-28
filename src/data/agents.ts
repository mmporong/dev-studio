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
    taskSummary: '**🟠 P0가 무변화→처방전 완성으로 바뀐 날(6/29)**: NumLink 5fcac3a(6/2)·**27일째 미커밋**·36파일·Tools 0개 / MeowBeat 921e0cf(6/21)·**8일째**·NoteSpawner.cs:126 deltaTime 잔존·dspTime **9일째 RED** / agent-office Dependabot PR #116(npm-minor-patch 6건) **회의 중 자율 머지**(9f047ff)·열린 PR 0건·CI success. 이월 P0(dspTime)·P1(NumLink 봉인) 둘 다 미완. **🔑 전환점**: Developer가 NoteSpawner.cs:126을 직접 열어 수정 코드 완성(PlayScheduled+dspTime 절대차분·필드2개+2줄) → 9일간 "손도 안 댄 P0"가 "코드는 책상 위에 있고 에디터만 열리면 닫히는 P0"로 성격 변화. **메타**: 월요일·D+36.',
    lastUpdate: '6/29 월요일 스탠드업(🟠 P0가 무변화에서 처방전 완성으로 바뀐 날 — QA가 dspTime 9일째 정확히 1 error 재확인하자 Developer가 NoteSpawner.cs:126 직접 열어 PlayScheduled+dspTime 절대차분 최소 수술 코드 완성·자율 칼끝은 Dependabot PR #116 자율 머지(9f047ff)로 전진·DevOps 배포 후 헬스체크 부재 새 갭 발견): **🔴 P0[이월·처방완성] MeowBeat NoteSpawner.cs:126 dspTime 전환(사용자 세션)** + **🟡 P1[이월] NumLink .gitignore 정비+노이즈 분리 커밋+EditMode 테스트 1개로 이중 무방비 탈출(27일 미커밋 종료)** + **🟢 P2 PR #116 자율 머지 완료+톱니난이도·tabular-nums·ASO 무드키워드·배포 헬스체크**.',
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
    taskSummary: '**🎮 신규(톱니 난이도·리듬 캘리브·광고 빈도)**: 퍼즐 난이도는 단조 상승이 아닌 "톱니(saw)곡선" — 신규 기믹 도입 레벨은 직전 대비 밀도 **30~40%↓** 휴식밸리·5~6레벨마다 의도적 밸리(L1~20 쉬움→L20~30 스파이크→L50+ 점진). 리듬 캘리브 2단계 분리(영상/오디오→화면 안 보고 강박만 듣고 탭). 퍼즐 인터스티셜 매 레벨 노출 시 첫세션 **15~25% 이탈**→세션당 1~2회 캡. 퍼즐 ARPDAU **$0.08**·색맹 이중인코딩(컬러+심볼) CVD 승률 **+1.4%**(NumLink는 숫자라 유리). **적용**: NumLink 톱니형 난이도 곡선 GDD 명문화.',
    lastUpdate: '6/29 월요일 리서치(월요일·D+36·톱니형 난이도 곡선 신규기믹 레벨 밀도 30~40%↓ 휴식밸리·리듬 2단계 캘리브 영상/오디오→탭테스트·퍼즐 인터스티셜 매레벨 시 첫세션 15~25% 이탈 세션당 1~2회 캡·퍼즐 ARPDAU $0.08·색맹 이중인코딩 CVD 승률+1.4% 신규): **🟢 P2 NumLink 신규 기믹 레벨 밀도 30~40%↓ 휴식밸리+5~6레벨마다 밸리 톱니형 곡선 GDD 명문화+인터스티셜 세션당 1~2회 캡**. P0 후. Sources: mobilegamedoctor.com·gamedeveloper.com·gamigion.com·arxiv.org/2401.17436·ddrkirbyisq·maf.ad·cas.ai·accessible.games.',
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
    taskSummary: '**💻 🔑 dspTime P0 처방 완성**: NoteSpawner.cs:126 elapsedTime += Time.deltaTime이 드리프트 근본원인임을 실코드로 확정+최소 수술 코드 제시 — ① 필드 dspSongStartTime(double)+musicSource 추가, ② musicSource.PlayScheduled(AudioSettings.dspTime+0.1 리드타임)로 오디오 시작 DSP 타임라인 고정(Play() 대신), ③ 126행을 elapsedTime=(float)(AudioSettings.dspTime - dspSongStartTime) **절대차분**으로 교체. deltaTime 누적=부동소수 드리프트, dspTime 차분=프레임 독립. **💻 신규(발열/배터리)**: Adaptive Performance ADPF(Android12+)+targetFrameRate 자동제어. **💻 회귀방어**: EditMode 테스트(순수 C# Domain·[Test]+.asmdef)로 dspTime/NumLink 동시 방어.',
    lastUpdate: '6/29 월요일 리서치(월요일·dspTime P0 처방 완성 — NoteSpawner.cs:126 실코드 확인 후 PlayScheduled(dspTime+0.1)+elapsedTime=(float)(dspTime - dspSongStartTime) 절대차분 최소 수술 코드 제시·필드2개+2줄 교체·Adaptive Performance ADPF Android12+ 발열/배터리·EditMode 테스트 회귀방어 신규): **🔴 P0 NoteSpawner.cs:126 dspTime 전환 오늘 즉시 수정(코드 완성·에디터 적용+qa_static.py 0 error VERIFY만 남음)** + **🟡 EditMode 테스트로 회귀방어 동반**. Sources: gamedeveloper.com·docs.unity3d.com·christianfloisand·developer.android.com·unity.com.',
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
    taskSummary: '**🔑 dspTime P0 9일째 RED 확정**: qa_static.py 정확히 **`1 error`**(NoteSpawner.cs:126 elapsedTime += Time.deltaTime 그대로·dspTime/PlayScheduled 0건·deltaTime 노트 사용처 NoteSpawner126·HitEffect135/162·RhythmCat183/194/215·코어는 126번). 일수만 +1(8→9), 코드측 진척 0. 리듬게임 코어 타이밍이 프레임 누적이라 드리프트 시 박자 붕괴 — 출시 차단급. **🔍 NumLink 이중 무방비 무변화**: Tools **0개**+[Test]/[UnityTest] **0건**(BoardDataTester.cs는 Editor 유틸일 뿐)·자동화 검증 0%. **✅ 가드는 건강(대조)**: known_bugs 7개·회귀 **2/2** 통과·agent-office CI 5건 success. **🚨 미해결 P0 1건**.',
    lastUpdate: '6/29 월요일 리서치(월요일·dspTime P0 9일째 RED 확정 — qa_static.py 정확히 1 error·NoteSpawner.cs:126 deltaTime 그대로·dspTime/PlayScheduled 0건·deltaTime 노트 사용처 6곳 중 코어는 126번·NumLink Tools 0개+[Test] 0건 BoardDataTester.cs는 Editor 유틸 이중 무방비 무변화·Feedme 가드 건강 회귀 2/2): **🔴 P0 NoteSpawner.cs:126 dspTime 절대시간 교체 오늘 단일 스프린트 최우선(patch 후 qa_static.py 0 error+run_regression VERIFY)** + **🟡 NumLink EditMode 테스트 1개로 무방비 탈출**. Sources: qa_static.py·run_regression.py·known_bugs.json·NoteSpawner.cs·gh run 실측.',
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
    taskSummary: '**📦 신규 1순위(ASO 키워드)**: 게임은 "game/gaming" 자동 색인 → 100자 키워드는 장르·기믹·무드 롱테일("no wifi"·"offline puzzle"·"cat rhythm tap music")에만 써야 효율↑. **📦 신규 2순위(CPP 확대)**: 커스텀 제품페이지 키워드 2025-07부터 오가닉 검색 노출·앱당 **70개** 확대(장르별 페이지 분리 공략). **📦 3순위(소프트런치)**: 출시 목표국 회피·경제유사국(필리핀/덴마크/호주) 검증·전통 합격선 D1 40%이나 **26년 중앙값 D1 22%**가 현실 컷라인. **적용**: NumLink "no wifi puzzle"·MeowBeat "cat rhythm tap music" 부제목 키워드+필리핀/호주 소프트런치 D1 22% 컷.',
    lastUpdate: '6/29 월요일 리서치(월요일·ASO game/gaming 자동색인이라 100자 키워드는 무드/기믹 롱테일에만·CPP 키워드 2025-07부터 오가닉 노출 앱당 70개 확대·소프트런치 경제유사국 필리핀/호주 검증 26년 중앙값 D1 22% 컷라인 신규): **🟢 P2 NumLink 부제목 "no wifi puzzle·offline brain"+MeowBeat "cat rhythm tap music" 무드/기믹 키워드 배치+7월 출시 전 필리핀/호주 소프트런치 D1 22%+ 컷라인 검증**. Sources: blog.udonis.co·asomobile.net·gamebizconsulting.com·splitmetrics.com·gameanalytics.com·gamegrowthadvisor.com·apptweak.com.',
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
    taskSummary: '**🛡 CI/CD 정상(6/29)**: agent-office CI 최근 8건 전부 success·열린 PR 1건이던 #116(npm-minor-patch 6건) **회의 중 자율 머지**(9f047ff)→열린 PR 0건·모든 액션 **SHA pin 완료**(checkout@9c091bb 등)·concurrency=pages·cancel-in-progress=false 유지(6/26 수정분 회귀 0). **🛡 실측 갭(신규)**: deploy job이 deploy-pages 직후 끝나고 **배포 후 사이트 200 확인 헬스체크 부재**(page_url 출력만 있고 미사용) → GitHub Pages 전파 지연 무성 실패 못 잡음. **🛡 2025 모범사례**: curl -fsSI ${page_url} 200 확인이 첫 방어선·비용 거의 0·실패 시 워크플로 red 즉시 인지.',
    lastUpdate: '6/29 월요일 리서치(월요일·CI 8건 전부 success·Dependabot PR #116 npm-minor-patch 6건 회의 중 자율 머지 9f047ff 열린 PR 0건·모든 액션 SHA pin 완료·cancel-in-progress false 유지 회귀 0·배포 후 page_url 200 헬스체크 부재 새 갭 발견): **🟢 P2 deploy-pages 직후 curl -fsSI page_url 200 헬스체크 스텝 1줄 추가(전파 지연 대비 retry/타임아웃 설계 선행·무성 실패 방어)**. CI 자체 이상 없음. Sources: devopstraininginstitute.com·smartscope.blog·oneuptime.com·github.com/actions/deploy-pages·loadfocus.com.',
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
    taskSummary: '**🎨 신규 1순위(고정폭 숫자)**: 숫자 UI는 tabular-nums(고정폭·font-variant-numeric)로 자릿수마다 폭 흔들림 제거해야 정렬 가독성 산다 — NumLink 숫자가 코어라 직결(타이머·점수·레벨 번호). **🎨 신규 2순위(무텍스트 온보딩)**: 게임 온보딩 표준은 "핑거/핸드 아이콘+하이라이트 글로우+경로 화살표" 무텍스트 가이드 → 다국어 출시 시 **번역 비용 0**·첫 레벨 이탈 방지. **🎨 3순위(멀티센서리 동기)**: 시각 애니 피크·햅틱·사운드를 **200~400ms** 안에 동시 트리거해야 "한 사건"으로 느껴짐·하나라도 지연 시 역효과. **적용**: NumLink tabular-nums+무텍스트 핑거 온보딩(번역비 0).',
    lastUpdate: '6/29 월요일 리서치(월요일·tabular-nums 고정폭 숫자로 자릿수 흔들림 제거 NumLink 가독성 직결·무텍스트 핑거 온보딩 핑거아이콘+하이라이트 글로우+화살표 다국어 무번역·멀티센서리 동기 피드백 시각/햅틱/사운드 200~400ms 동시 신규): **🟢 P2 NumLink 숫자 폰트 tabular-nums 적용+첫 레벨 무텍스트 핑거 온보딩 전환(번역비 0)+MeowBeat 비트 레티클 예고 글로우+주파수대역별 파티클 버스트 비트 시각화**. Sources: medium(amol346bhalerao·saropa-contacts)·supersonic.com·numberanalytics.com·dev.to(alanwest)·interactiveimmersive.io.',
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
  '🔴 P0 [이월·9일째 RED·처방전 완성·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — 코드는 책상 위에 있다. qa_static.py가 오늘도 정확히 `1 error`(126행 elapsedTime += Time.deltaTime·dspTime/PlayScheduled 0건·detector 완성 9일째 RED). Developer가 수정 코드를 완성: ① 필드 추가 dspSongStartTime(double)+musicSource(AudioSource) → ② 곡 시작 시 musicSource.PlayScheduled(AudioSettings.dspTime + 0.1)로 오디오 시작을 DSP 타임라인 고정(Play() 대신) → ③ 126행을 elapsedTime = (float)(AudioSettings.dspTime - dspSongStartTime) 절대차분으로 교체(+= deltaTime 제거). deltaTime 누적은 부동소수 드리프트, dspTime 차분은 프레임 독립. 9일째 RED는 코드 미수정이 유일 원인이었고 이제 코드 완성 — Unity 에디터 적용+qa_static.py 0 error+run_regression 통과 VERIFY만 남음. EditMode 테스트로 회귀 방어 동반 권장',
  '🟡 P1 [이월·27일 미커밋·사용자 세션] NumLink .gitignore 정비 + 노이즈 분리 커밋 + EditMode 테스트 1개로 이중 무방비 탈출 — 27일 미커밋 종료. 36파일의 실체는 폰트 SDF .asset 재import+_Recovery 깨진 씬+.omc 캐시 "노이즈"가 다수(진짜 소스 변경 거의 없음). ① .gitignore에 .omc/·Screenshots/·_Recovery/ 추가(Layer Lab 스킨은 트래킹) → ② 폰트 asset 분리 커밋(chore: 폰트 SDF 갱신)+Layer Lab 작업물 분리 커밋(feat: Layer Lab UI 스킨)으로 작업트리 0파일 청산 → ③ Assets/Tests에 NumLink.Domain.Tests.asmdef+[Test] RED 테스트 1개 추가해 Tools 0개·테스트 0개 이중 무방비 탈출. 단 AutoGenTests 4파일 삭제 확정 여부는 사용자 확인 선행',
  '🟢 P2 [자율 완료 ✅] agent-office Dependabot PR #116(npm-minor-patch 6건) 회의 중 자율 머지 완료(9f047ff·열린 PR 0건·CI green). 어제 #110 checkout v7에 이어 자율 칼끝 또 한 칸 전진',
  '🟢 P2 [신규 적재 — 모두 P0/P1 후·번역비 0/추가 에셋 0 우선]: Game Designer — NumLink 톱니형 난이도 곡선 GDD 명문화(신규 기믹 도입 레벨은 직전 대비 밀도 30~40%↓ 휴식밸리·5~6레벨마다 의도적 밸리·L1~20 쉬움→L20~30 스파이크→L50+ 점진)+인터스티셜 매 레벨 금지·스테이지 클리어에서 세션당 1~2회 캡(매레벨 시 첫세션 15~25% 이탈). Art Director — NumLink 숫자 폰트 tabular-nums(고정폭) 적용+첫 레벨 무텍스트 핑거 온보딩(핑거 아이콘+하이라이트 글로우+화살표·번역비 0)+멀티센서리 동기 피드백(시각·햅틱·사운드 200~400ms). Content Writer — ASO 부제목 무드/기믹 롱테일 키워드(NumLink "no wifi puzzle·offline brain"·MeowBeat "cat rhythm tap music")+7월 출시 전 필리핀/호주 소프트런치 D1 22%+(26년 중앙값) 컷라인 검증. DevOps — deploy-pages 직후 curl -fsSI page_url 200 헬스체크 스텝 1줄 추가(전파 지연 대비 retry/타임아웃 설계 선행·무성 실패 방어)',
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
