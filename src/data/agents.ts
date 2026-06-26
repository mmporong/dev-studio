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
    taskSummary: '**🟢 검증이 보류를 닫았다(6/27)**: 6/26 자율수정한 cancel-in-progress=false가 6/26 배포+#110 트리거 배포 둘 다 success로 2중 검증되자, 30일 묵은 #110(checkout v7 major)을 회의 중 자율 머지 종결(열린 PR 0건). **🔑 NumLink 정체 규명**: 25일 미커밋은 "방치"가 아니라 진행 중 UI 리워크(커밋 히스토리 revert!:UIToolkit 롤백→feat:Layer Lab 9-slice 스킨이 증거·작업트리 Layer Lab/·UGUI.meta는 능동 작업물)·단 검증툴 0개+25일 미봉인이라 위험은 오히려 증대. **🚨 두 P0 무인 미착수**: MeowBeat dspTime 7일째 RED·NumLink 봉인 25일째. 둘 다 사용자 세션. **메타**: 토요일·D+34.',
    lastUpdate: '6/27 토요일 스탠드업(🟢 어제 고친 cancel-in-progress가 6/26 배포+#110 트리거 배포 2중 success로 검증되자 30일 묵은 #110 자율 머지 종결·NumLink 25일 공백이 진행 중 UI 리워크임을 커밋 히스토리로 규명·두 P0는 여전히 사용자 세션): **✅ [자율완료] #110 checkout v7 major 자율 머지(checkout v7 첫 배포 무사고 실증)** + **🔴 P0[이월] MeowBeat dspTime 7일째 RED 종결(사용자 세션)** + **🚨 P0[이월] NumLink 25일 봉인+검증툴(진행 중 리워크라 더 시급·분리 커밋)** + **🟡 P1 CoreCLR 6.8 대비+Addressables TCFT 베이스라인** + **🟢 P2 FTUE 명문화·평점 방어·클레이모피즘 리워크**.',
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
    taskSummary: '**🎮 신규(하이브리드캐주얼·리듬시장·FTUE)**: 하이브리드캐주얼 D7 리텐션 **18~22%**(하이퍼 6~9%의 **2.5배**)·LTV **3~5배**·ARPDAU $0.15~0.50·퍼즐은 광고/IAP **50/50** 최적. **경고**: 망가진 코어에 메타 얹어도 ARPDAU 불변 — D1 30%+ 선결. 모바일 리듬게임 25년 **$2.5B**→33년 **$7B**(CAGR 9~12%·아시아 주도). 톱30 캐주얼 FTUE 표준: 튜토리얼 **4레벨**·첫 부스터 **lv7**·첫 30분 ~100% 승률·첫 광고 **20분** 후·FTUE 광고 **0개**. **적용**: NumLink "첫 30분 무패 온보딩" GDD 명문화.',
    lastUpdate: '6/27 토요일 리서치(토요일·D+34·하이브리드캐주얼 D7 18~22% 하이퍼 2.5배·LTV 3~5배·리듬게임 $2.5B→$7B·톱30 FTUE 튜토리얼 4레벨/첫부스터 lv7/첫광고 20분/FTUE 광고 0개 신규): **🟢 P2 NumLink GDD에 "첫 30분 무패 온보딩+광고 20분 유예" FTUE 규칙 명문화(lv1~15 승률 ~100%·첫 전면광고 20분 후 하드코딩)**. P0 후. Sources: gamegrowthadvisor.com·antier.com·cognitivemarketresearch.com·gamigion.com·keewano.com·crazylabs.com.',
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
    taskSummary: '**💻 신규 1순위(Unity CoreCLR 6.8 알파)**: Unity가 8년 만에 Mono 폐기·Microsoft CoreCLR로 교체 — 6.8 알파(2026년 내)에서 .NET10/C#14 기반·돔 리로드 제거·동일 코드 Mono 100s→CoreCLR 38s(**약 2.6배**). 모바일은 IL2CPP 경로 수혜·코드를 .NET 표준/C#14 문법 정리 시 전환비 최소화. **💻 신규 2순위**: Addressables for Android 1.0.10 **TCFT**(텍스처 압축 포맷 타게팅)→기기 GPU별 미사용 포맷 미설치·설치용량 자동 절감(2D 스프라이트 직결). **💻 3순위**: Input System EnhancedTouch로 NumLink 드래그 경로 정밀화. **💻 코어**: NoteSpawner dspTime=사용자 세션 P0(7일째 GREEN 대기).',
    lastUpdate: '6/27 토요일 리서치(토요일·Unity CoreCLR 6.8 알파 Mono 폐기 2.6배·Addressables Android TCFT 텍스처 압축 타게팅 설치용량 절감·Input System EnhancedTouch 드래그 정밀화 신규): **🔴 P0 NoteSpawner dspTime 코어 패치+4개 .cs 단일 커밋(사용자 세션·픽스 시 탐지기 자동 GREEN)** + **🟡 P1 NumLink 분리 커밋(feat Layer Lab/chore 폰트 SDF)+봉인 후 Addressables TCFT·2D 스프라이트 프로파일 베이스라인+CoreCLR 대비 C#14 정리**. Sources: discussions.unity.com·byteiota.com·docs.unity3d.com·developer.android.com·github.com/Unity-Technologies/InputSystem.',
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
    taskSummary: '**🔑 dspTime P0 7일째 RED·완전 무변화**: qa_static.py 여전히 정확히 **`1 error`**(NoteSpawner.cs:126 elapsedTime += Time.deltaTime 그대로·dspTime/PlayScheduled 0건·6/26 이후 커밋 0건·detector 이레째 빨간불). 발견 12일째. "탐지만 하고 안 고친다" 괴리가 최대 리스크. **✅ 가드는 건강**: known_bugs detector 실재 함수 6/6 매핑(댕글링 0)·회귀 **2/2** 통과 — 픽스 기다리는 GREEN 대기. **🔍 NumLink 이중 무방비 무변화**: 검증툴 **0개**(Tools 부재)+자동 테스트 **0개**(AutoQATests 빈 폴더·BoardDataTester는 EditorWindow 수동 도구). 진행 중 리워크라 더 시급. **🚨 미해결 P0 1건**.',
    lastUpdate: '6/27 토요일 리서치(토요일·dspTime P0 7일째 RED 완전 무변화 — qa_static.py 여전히 정확히 1 error·6/26 이후 커밋 0건·detector 이레째 빨간불·NumLink 무방비 무변화·진행 중 리워크라 더 위험): **🔴 P0 NoteSpawner.cs:126 PlayScheduled+dspTime 교체 단일 PR 착수(detector 자동 GREEN)** + **🚨 P0 NumLink 검증툴 4종 이식+AutoQATests 빈 껍데기 정리(사용자 세션)**. Sources: qa_static.py·run_regression.py 실행·known_bugs.json·NoteSpawner.cs·BoardDataTester.cs·git log 실측.',
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
    taskSummary: '**📦 신규 1순위(인앱 이벤트)**: Apple In-App Events/Google Play 프로모션 콘텐츠는 출시 후 무료 노출 슬롯 — Google 2천 타이틀 6천건 분석 중앙값 전환 **+106%**. MeowBeat 신곡·NumLink 시즌 챌린지를 "이벤트"로 포장. **📦 신규 2순위(평점→CPI)**: Google Play 0.3별↓→14일 내 블렌디드 CPI **+19%**·4.5별↑ 탭→설치 **50%** vs 3.5별↓ 30%·리뷰 답변률 30~50% 앱 평점 3.77. **📦 3순위(UGC)**: 마이크로크리에이터 정제광고 대비 CPI **20~40%↓**·1개월 ROI 200~400%. **적용**: 비용 0원 레버(인앱 평점 요청 트리거+리뷰 답변 SOP) 출시 전 백로그 선등록.',
    lastUpdate: '6/27 토요일 리서치(토요일·인앱 이벤트 중앙값 전환 +106%/Google 6천건 분석·평점 0.3별↓→14일 내 CPI +19%/4.5별 탭→설치 50% vs 3.5별 30%·UGC 마이크로크리에이터 CPI 20~40%↓ 신규): **🟢 P2 출시 직후 평점 4.1~4.5 방어 시스템(인앱 평점 요청 트리거+리뷰 답변 SOP) 출시 전 백로그 선등록+인앱 이벤트화 콘텐츠 캘린더**. 봉인 후 자산 제작. Sources: mobileaction.co·developer.apple.com·appfollow.io·coinis.com·adapty.io·rocketshiphq.com·appsflyer.com.',
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
    taskSummary: '**🛡 ✅ 6/26 자율수정 2중 검증 통과(6/27)**: cancel-in-progress=false가 6/26 데일리 배포(build 14s/deploy 8s)+#110 트리거 배포 둘 다 success·취소 흔적 0. **🛡 ✅ #110 자율 머지 종결**: checkout 6.0.3→7.0.0 major가 30일째 CLEAN·6개 배포 무사고로 리스크 낮아 회의 중 squash 머지(열린 PR 0건)·checkout v7 첫 배포 무사고 실증. CI 최근 6건 전부 success·실패 0. **🔭 동향**: Artifact Attestations 기본화(SLSA Build Level 2·attest-build-provenance 차후 검토).',
    lastUpdate: '6/27 토요일 리서치(토요일·6/26 cancel-in-progress 수정이 6/26 배포+#110 트리거 배포 2중 success로 검증·#110 checkout v7 major 자율 머지 종결 열린 PR 0건·Artifact Attestations 기본화 동향 신규): **✅ [자율완료] #110 자율 머지(major 무사고 실증) + 🟡 P1 차후 actions/attest-build-provenance(SLSA L2) 도입 검토**. Sources: gh run/pr 실측·github.blog supply-chain·docs.github.com artifact-attestations·tenki.cloud SLSA.',
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
    taskSummary: '**🎨 신규 1순위(클레이모피즘 표준화)**: 2026 캐주얼 퍼즐 비주얼 표준 — 둥근 16~24px·이중 그림자·spring overshoot 물성. 핵심은 회색 그림자 대신 **"오브젝트 색 동계열 컬러드 섀도우"**(핑크 셀→진핑크 그림자)라야 평면이 입체 토이로 보임. **🎨 신규 2순위(다크퍼스트)**: 유저 **80%+** 다크모드 상시 → 다크 먼저 설계·라이트 파생·OLED는 elevation으로 위계(#000 남발 금지). **🎨 3순위**: 엄지영역(하단 1/3)+보텀시트 한손 조작 표준. **적용**: NumLink 셀 컬러드 섀도우 클레이모피즘 리워크(Layer Lab 스킨 활용·머티리얼만).',
    lastUpdate: '6/27 토요일 리서치(토요일·클레이모피즘 캐주얼 퍼즐 표준화 컬러드 섀도우+spring overshoot·다크퍼스트 유저 80% 다크모드·엄지영역+보텀시트 한손 조작 신규): **🟢 P2 NumLink 셀 컬러드 섀도우 클레이모피즘 리워크(18px 라운드+동계열 진한 드롭섀도우+inner highlight+연결 시 1.08배 spring overshoot·머티리얼만·색맹 듀얼코딩 충돌 0)+레벨선택/일시정지 보텀시트화**. Sources: hype4.academy·hashbuilds.com·midrocket.com·natively.dev·muz.li·pixune.com·pantone.com.',
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
  '✅ [자율완료·자율 칼끝 한 칸 전진] agent-office #110(actions/checkout 6.0.3→7.0.0 major) 회의 중 자율 머지 종결 — 6/26 자율수정한 cancel-in-progress=false가 6/26 데일리 배포(build 14s/deploy 8s)와 #110 트리거 배포 둘 다 success로 2중 검증되자 "major라 신중 보류"의 마지막 명분이 소멸. DevOps·Orchestrator가 독립적으로 30일째 CLEAN/MERGEABLE·6개 배포 무사고·리스크 낮음에 동의 → 메인이 squash 머지로 종결(열린 PR 0건). checkout v7로 도는 첫 배포가 success라 major 업그레이드 무사고를 실증. 자율 칼끝: 6/25 의존성 머지(#111) → 6/26 배포 결함 수정 → 6/27 검증된 자신감으로 30일 묵은 major PR 종결',
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — 7일째 RED 종결. qa_static.py가 오늘도 정확히 `1 error`(126행 elapsedTime += Time.deltaTime·dspTime/PlayScheduled 0건·6/26 이후 커밋 0건). detector 완성 7일째·발견 12일째 RED, "탐지만 하고 안 고친다" 괴리가 최대 리스크. songPosition = (float)(AudioSettings.dspTime - dspSongStartTime)로 교체+BGM은 AudioSource.PlayScheduled로 시작 고정+Android 오디오 지연 캘리브레이션 오프셋. 픽스 즉시 detector 자동 GREEN으로 픽스 증명. 4개 미커밋 .cs(SongData·GameManager·SongManager·OptionManager)도 단일 커밋 정리',
  '🚨 P0 [이월·게임 코드·사용자 세션] NumLink 25일 미커밋 봉인 + 검증툴 이식 — "진행 중 리워크"라 오히려 더 시급. Orchestrator 규명: 25일 공백은 방치가 아니라 진행 중 UI 리워크(커밋 히스토리 revert!: UI Toolkit 롤백→feat: Layer Lab 9-slice 스킨). 단 QA 확인 이중 무방비(Tools 0개·AutoQATests 빈 폴더·자동 테스트 0개)와 겹쳐 복원 불가능한 단일 거대 미커밋 리스크로 악화. ① .gitignore에 .omc/·Screenshots/·_Recovery/ 추가(Layer Lab은 트래킹) → ② Developer 제안대로 feat: Layer Lab UI 스킨 / chore: 폰트 SDF 갱신으로 분리 커밋해 봉인 → ③ NumLink/Tools에 검증툴 4종 이식(현재 0개)+AutoQATests 빈 껍데기 정리. AutoGenTests 4파일 삭제 확정 여부는 사용자 확인 선행',
  '🟡 P1 [신규/이월] Unity 6.x 전환 대비 + 베이스라인 측정 (봉인 후): Developer — 베이스라인 봉인 후 Unity 6.5 2D 스프라이트 프로파일+Addressables for Android TCFT(텍스처 압축 포맷 타게팅)로 두 게임 모바일 설치용량/메모리 베이스라인 측정. CoreCLR 6.8 알파(Mono 폐기·2.6배) 대비 코드를 .NET 표준 API·C#14 문법에 맞춰 정리. NumLink 드래그는 Input System EnhancedTouch로 전환(CLAUDE.md Input.GetKey 금지 정합). DevOps — 차후 actions/attest-build-provenance(SLSA Build Level 2) 도입 검토',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Game Designer — NumLink GDD에 "첫 30분 무패 온보딩+광고 20분 유예" FTUE 규칙 명문화(튜토리얼 4레벨·lv1~15 승률 ~100%·첫 부스터 lv7·첫 전면광고 20분 후 하드코딩·FTUE 광고 0개·하이브리드캐주얼 D7 18~22%·메타 전 D1 30% 선결). Content Writer — 출시 직후 평점 4.1~4.5 방어 시스템(인앱 평점 요청 트리거+리뷰 답변 SOP) 출시 전 백로그 선등록(평점 0.3별=CPI 19%·비용 0원)+인앱 이벤트화 콘텐츠 캘린더(전환 +106%). Art Director — NumLink 셀을 컬러드 섀도우 클레이모피즘으로 리워크(18px 라운드+동계열 진한 드롭섀도우+inner highlight+연결 시 1.08배 spring overshoot·머티리얼 설정만·색맹 듀얼코딩 충돌 0)+레벨선택/일시정지를 보텀시트로(한손 도달성·유저 80% 다크모드)',
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
