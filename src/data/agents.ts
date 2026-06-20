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
    taskSummary: '**🔍 탐지기의 공백 발견·회의 중 실체화(6/21)**: NumLink 19일째 미커밋(6/2 이후·18→19 또 악화)·.gitignore 여전히 미정비·AutoGenTests 4파일 미복구 이월·Layer Lab 7,662 untracked 안에 .omc 봇 산출물 4건 침투. **✅ QA가 6/20 등록한 P0의 detector(qa_static.check_dsptime_usage)가 실재하지 않는 댕글링 디텍터임을 발견→메인이 회의 중 탐지기 구현·3케이스 검증·회귀 2/2 무손상·선별 커밋(921e0cf)**. 추적기-탐지기-회귀가 처음으로 한 줄로 연결. **핵심**: 두 P0(코어 패치·봉인) 모두 게임 코드/대량 워킹트리라 무인 미착수 — 도구→추적기→탐지기 순으로 가장자리부터 메움. **메타**: 일요일·D+28 — 검증 시스템이 두 겹째 자기 점검한 날.',
    lastUpdate: '6/21 일요일 스탠드업(🔍 등록은 됐는데 잡히질 않았다·QA가 6/20 등록한 P0(TIMING_DSPTIME_UNUSED)의 detector qa_static.check_dsptime_usage가 실재하지 않는 댕글링 디텍터 발견→메인이 회의 중 탐지기 직접 구현·NoteSpawner.cs:126 error 탐지(exit2)·3케이스 검증·회귀 2/2 무손상·선별 커밋 921e0cf): **✅ [실행완료] dspTime 회귀 탐지기 구현 자율 커밋(921e0cf·게임 레포 3번째 도구/데이터 자율 실행)** + **🔴 P0[이월] MeowBeat NoteSpawner dspTime 코어 패치 1건(사용자 세션·픽스 시 탐지기 자동 통과 증명)** + **🚨 P0[이월] NumLink .gitignore 선정비(.omc 봇캐시 침투)→단일 스냅샷 봉인** + **🟡 P1 targetSdk 36 의무화 8/31 D-71** + **🟢 P2 메타진행·트레일러·판정 3단계 피드백**.',
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
    taskSummary: '**🎮 신규(리텐션·메타진행)**: 하이브리드캐주얼 D30 **8~12%** vs 하이퍼캐주얼 **2~4%**(2~3배·2026 스튜디오 36% 전환 중)·메타진행(컬렉션·언락)이 **D30 최대 2배 견인**·온보딩 단계당 이탈 **20% 미만**이 합격선(강한 온보딩 없으면 누적 90% 이탈·D1 평균 28%)·UGC 커뮤니티 보유 시 리텐션 **+38%**. **적용**: NumLink 메타진행 레이어(클리어 누적→보드 테마/숫자 타일 언락)+온보딩 첫 3레벨 단계별 이탈 계측, MeowBeat은 곡 즐겨찾기 경량 의사-UGC부터.',
    lastUpdate: '6/21 일요일 리서치(일요일·D+28·하이브리드캐주얼 D30 8~12% vs 하이퍼 2~4% 2~3배·메타진행 D30 최대 2배 견인·온보딩 단계당 이탈 20% 미만 합격선·UGC 리텐션 +38% 신규): **🟢 P2 NumLink 메타진행 레이어(레벨 클리어 누적→보드 테마 스킨/숫자 타일 컬렉션 언락) 최소 구현+온보딩 첫 3레벨 단계별 이탈 계측 분석 훅(단계당 20% 미만 목표)·MeowBeat 곡 즐겨찾기/플레이리스트 경량 의사-UGC**. P0 후. Sources: Antier·gamegrowthadvisor·userguiding·businessofapps·Naavik.',
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
    taskSummary: '**💻 🚨 신규 1순위(targetSdk 36 마감)**: Google Play targetSdk 36(Android 16) 의무화 **8/31 마감(D-71)**·미대응 시 신규 설치 노출 차단. NumLink/MeowBeat 둘 다 Target API Level 36 선상향+빌드 검증 필요하나 NumLink 19일째 미커밋이라 변경분 누락 위험 → .gitignore 정리+봉인 선행. **💻 신규 2순위**: Unity 6.3 LTS(6000.3) 출시(2027.12 지원·URP Kawase/Dual 블룸)·IL2CPP "Optimize for code size and build time" 빌드크기 절감. **💻 코어**: NoteSpawner는 5일째 미접촉(코어 패치=사용자 세션 P0·이제 탐지기 갖춰짐).',
    lastUpdate: '6/21 일요일 리서치(일요일·🚨 Google Play targetSdk 36 의무화 8/31 마감 D-71 미대응 시 신규 노출 차단·Unity 6.3 LTS 출시 URP 블룸 최적화·IL2CPP 빌드크기 절감 옵션 신규): **🟡 P1 NumLink/MeowBeat 둘 다 Player Settings Target API Level 36 선상향+빌드 검증(NumLink는 미커밋 봉인 선행)** + **🔴 P0 NoteSpawner dspTime 코어 패치(사용자 세션·픽스 시 탐지기 자동 통과)**. Sources: developer.android.com/target-sdk·Stora API36·unity.com 6.3 LTS·docs.unity3d.com WhatsNew62.',
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
    taskSummary: '**🔑 핵심 발견(댕글링 디텍터)**: 6/20 등록한 P0(TIMING_DSPTIME_UNUSED)의 detector `qa_static.check_dsptime_usage`가 실재하지 않음 — 등록은 됐으나 탐지 코드가 비어 회귀를 돌려도 가장 치명적 P0가 영원히 미탐지. **✅ 회의 중 탐지기 구현(NoteSpawner 정적 스캔)·NoteSpawner.cs:126 error 탐지(exit2)·3케이스 검증(픽스본0/누적본1/비누적0)·회귀 2/2 무손상·선별 커밋(921e0cf)**. **🔍 NumLink 신규 리스크**: Layer Lab 7,662 untracked 안에 .omc 봇 산출물 4건 침투(.gitignore 패턴 전무→커밋 오염 위험). **🚨 미해결 P0급 1건**(NoteSpawner 코어 미접촉)·known_bugs 7건.',
    lastUpdate: '6/21 일요일 리서치(일요일·🔑 댕글링 디텍터 발견 — 6/20 등록 P0의 detector qa_static.check_dsptime_usage가 qa_static.py에 실재하지 않아 회귀 영원히 미탐지·NumLink .gitignore에 .omc 봇캐시 4건 침투 신규): **✅ [실행완료] check_dsptime_usage 탐지기 구현·검증·선별 커밋(921e0cf)·추적기-탐지기-회귀 한 줄 연결** + **🚨 P0 NumLink .gitignore 선정비(.omc/Screenshots/_Recovery) 후 단일 봉인(사용자 세션)**. Sources: known_bugs.json·qa_static.py·NoteSpawner.cs·git status 실측.',
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
    taskSummary: '**📦 신규 1순위(트레일러)**: 60초+ 게임 영상 인게이지먼트 **6.70%** vs 15초 미만 **2.95%**·스토어 트레일러 첨부 시 전환 **+30%**(플레이어 70%가 다운 전 시청). **📦 신규 2순위(인디 시딩)**: 출시 14일 플라이트에 마이크로 크리에이터 30~50명+매크로 3~6 스파이크가 인디 표준(월 €500~1,000). **📦 신규 3순위(평점 자동화)**: 성취 직후 인앱 평점 팝업(SKStoreReview·Play In-App Review)으로 평점 **3.68→4.23**·전환 +59% 사례. **적용**: 각 60~90초 런치 트레일러 등재+마이크로 크리에이터 시딩+성취 직후 평점 팝업으로 초기 별점 4.0+.',
    lastUpdate: '6/21 일요일 리서치(일요일·60초+ 영상 인게이지먼트 6.70% vs 15초 미만 2.95%·트레일러 첨부 전환 +30% 플레이어 70% 다운 전 시청·마이크로 크리에이터 시딩 월 €500~1,000·성취 직후 인앱 평점 팝업 별점 3.68→4.23 신규): **🟡 P1 NumLink/MeowBeat 각 60~90초 가로 런치 트레일러 스토어 등재(+30%)+출시 첫 주 마이크로 크리에이터 20~30명 무료 시딩(게임당 50만원 이하)+성취 직후 인앱 평점 팝업 코드 삽입(초기 별점 4.0+)**. Sources: AutoFaceless·game-developers.org·Tomoson·Metricus·Quadral·ASO Maniac.',
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
    taskSummary: '**🛡 ✅ CI/배포 안정(6/21)**: agent-office gh run 최근 5건 전부 success·열린 PR 0건(#104 이후 dependabot 정주기 대기). deploy-pages.yml cache:npm 적용(npm ci 히트율 70~90%·빌드 34s~1m16s 양호). **🛡 신규(공급망 보안)**: GitHub Artifact Attestations(Sigstore/SLSA provenance·10분 수명 임시 인증서+변조불가 로그)가 2026 public repo 기본값 전환 중·Immutable Releases 2025-10-28 GA. 정적 Pages엔 비해당이나 NumLink/MeowBeat APK/WebGL 빌드에 `actions/attest-build-provenance` 변조 검증 효익. **확인**: 메인의 dspTime 탐지기 자율 커밋(921e0cf) 검증.',
    lastUpdate: '6/21 일요일 리서치(일요일·agent-office CI 5건 success/열린 PR 0건 안정·deploy-pages cache:npm 히트율 70~90%·GitHub Artifact Attestations Sigstore/SLSA가 2026 public repo 기본값 전환 중·Immutable Releases 2025-10-28 GA 신규): **agent-office 이상 없음(P2) + 🟢 P2 Unity 빌드 워크플로우 신설 시 Artifact Attestations(attest-build-provenance) 함께 반영 권고**. Sources: gh run/pr 실측·GitHub Changelog immutable releases·Tenki/SLSA·buildmvpfast 하드닝.',
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
    taskSummary: '**🎨 신규 1순위(엄지존)**: 2026 하단 1/3 "radical reachability"·주요액션 바텀바 통합·터치타겟 44×44pt 필수·FAB 퇴조. **🎨 신규 2순위(빈 상태)**: 온보딩 빈 상태(empty state)를 일러스트+단일 CTA로 설계 시 활성화율 **+30~40%**. **🎨 신규 3순위(리듬 주스)**: 입력 즉시 차등 시각보상이 도파민 루프 핵심·20콤보당 파티클+점수보너스·판정(Perfect 골드폭발/Great 시안/Good 화이트) 차등. **적용**: MeowBeat 판정 3단계 차등 비주얼+20콤보 증폭(판정선 하단 1/3 유지), 대안 NumLink 첫 진입 빈 보드 단일 CTA+손가락 일러스트.',
    lastUpdate: '6/21 일요일 리서치(일요일·2026 엄지존 하단 1/3 radical reachability·터치타겟 44×44pt·빈 상태 디자인 활성화율 +30~40%·리듬 주스 20콤보당 파티클+판정 Perfect/Great/Good 차등 신규): **🟡 P1 MeowBeat 판정 피드백 3단계 차등 비주얼(Perfect 골드폭발+미세쉐이크/Great 시안/Good 화이트·20콤보 증폭·판정선 하단 1/3 유지)** + **🟢 P2 NumLink 첫 진입 빈 보드 "숫자를 길게 눌러 연결" 단일 CTA+손가락 일러스트 오버레이**. Sources: Muzli·Parachute·UXPin·Sanjay Dey·Native Audio.',
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
  '✅ [실행완료·게임 레포 세 번째 도구/데이터 자율 실행] MeowBeat qa_static.py에 dspTime 회귀 탐지기 구현(HEAD 921e0cf) — QA가 "6/20 등록한 P0(TIMING_DSPTIME_UNUSED)의 detector가 가리키는 qa_static.check_dsptime_usage 함수가 정작 qa_static.py에 존재하지 않는 댕글링 디텍터라, 등록은 됐어도 회귀를 돌리면 가장 치명적 P0가 영원히 미탐지된다"는 한 겹 더 깊은 갭을 발견하자, 회의 중 메인이 NOTESPAWNER_PATH 상수와 check_dsptime_usage 함수를 추가(NoteSpawner.cs 정적 스캔: `+= Time.deltaTime` 누적이 있고 `AudioSettings.dspTime`가 없으면 error·dspTime 도입 시 자동 통과하는 회귀 가드·단순 deltaTime 사용은 오탐 제외). 실프로젝트 NoteSpawner.cs:126 error 탐지(exit 2)+임시 3케이스(dspTime 픽스본=0·deltaTime 누적본=1·비누적=0)+기존 회귀 2/2 무손상 검증 후 도구 파일만 선별 커밋(49줄 추가·게임 코드 .cs 37개 미접촉). 6/17 절대경로화·6/20 추적기 등록에 이은 세 번째. 추적기-탐지기-회귀가 처음으로 한 줄로 연결',
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — 6일 묵은 출시 차단급 P0를 코어 패치 1건으로 종결. elapsedTime += Time.deltaTime를 songPosition = (float)(AudioSettings.dspTime - dspSongStartTime)로 교체+BGM은 AudioSource.PlayScheduled(dspStart + leadTime)로 시작 고정·DSP↔프레임 매핑 선형회귀 평활화·Android 오디오 지연 0.01~0.2s는 탭 테스트 캘리브레이션 오프셋으로 흡수. 추적기 등록(a7588c7)·탐지기 구현(921e0cf)·해법 설계 모두 끝나 남은 건 코어 패치뿐 — 이제 픽스하면 오늘 만든 탐지기가 자동으로 통과를 증명한다',
  '🚨 P0 [이월·게임 코드·사용자 세션] NumLink 안전망 복구를 단일 스냅샷 커밋으로 봉인 — 19일째 미커밋 종료. ⚠️ 선행 조건 추가: Layer Lab 7,662 untracked 안에 .omc 봇 산출물(agent-replay·mission-state 등) 4건이 침투해 있어, ① .gitignore에 .omc/·Screenshots/·_Recovery/ 패턴을 먼저 추가(Layer Lab 에셋 자체는 트래킹·봇 캐시·복구 씬은 제외)한 뒤 → ② 삭제된 AutoGenTests 4파일 git restore로 [Test] 15케이스(DailyPuzzleProvider 시드/보드크기/패턴·EndlessMode 레벨별 경계 0~9=5×5·10~24=6×6·25+=7×7) 부활 여부 사용자 확인 → ③ Layer Lab 리스킨 실작업분을 단일 스냅샷 커밋으로 봉인. 병행해 _ProjectTemplate 검증툴 3종 이식(정적QA 0%→복구)',
  '🟡 P1 [신규] targetSdk 36(Android 16) 선상향 — Google Play 의무화 8/31 마감(D-71·미대응 시 신규 설치 노출 차단). NumLink/MeowBeat 둘 다 Player Settings Target API Level 36 상향+빌드 검증. NumLink는 미커밋 봉인이 선행 조건(변경분 누락 위험). Unity 6.3 LTS·IL2CPP "Optimize for code size and build time" 빌드크기 옵션 병행 검토',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Game Designer — NumLink 메타진행 레이어(레벨 클리어 누적→보드 테마 스킨/숫자 타일 컬렉션 언락) 최소 구현+온보딩 첫 3레벨 단계별 이탈 계측 분석 훅(단계당 20% 미만 목표)·MeowBeat 곡 즐겨찾기/플레이리스트 경량 의사-UGC. Content Writer — NumLink/MeowBeat 각 60~90초 가로 런치 트레일러 스토어 등재(전환 +30%)+출시 첫 주 마이크로 크리에이터 20~30명 무료 시딩(게임당 50만원 이하)+성취 직후 인앱 평점 팝업 코드 삽입(초기 별점 4.0+). Art Director — MeowBeat 판정 피드백 3단계 차등 비주얼(Perfect 골드폭발+미세쉐이크/Great 시안/Good 화이트·20콤보 증폭·판정선 하단 1/3 유지). DevOps — Unity 빌드 워크플로우 신설 시 Artifact Attestations(attest-build-provenance) 반영',
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
