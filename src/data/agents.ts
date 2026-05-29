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
    taskSummary: '**🚨 게임 코드 단절 신기록**: NumLink 마지막 게임코드 커밋 **2026-04-29 → 31일째 단절**(27d67fe 05-28은 .meta 인프라 커밋이라 코드 흐름 아님)·MeowBeat 마지막 커밋 **2026-04-12 → 48일째 단절**(어제 47일서 +1). 어제 PKM 비활성화로 인프라 P0는 실행됐으나 양 프로젝트 코어 신규 커밋 0건 = 코드 흐름 **나흘째** 끊길 위기. NumLink **미커밋 40+파일**(feature/uitoolkit·origin보다 5커밋 앞섬·최신 27d67fe만 05-28·나머지 4커밋 04-23~29 묶음 한 달+ 미정리). MeowBeat **song-ownership-migration 최근 5커밋 전부 04-12 동일자**(4/12 이후 이 브랜치 작업 0·37~42파일 미커밋). **🚨 NumLink Tools 부재 4회째 이월 확정**: 폴더 자체 부재·자동 회귀 0건 = 가장 오래된 P0. **MeowBeat Tools 완비**(18개)라 복사하면 즉시 해소. **DailyStandup_ClaudeCode** Running(오늘 04:00 = 이 회의)·agent-office Pages 정상. 오늘 = 토요일·1개월 임계 D+6·인프라 P0는 실행·코드 P0는 나흘째 위기.',
    lastUpdate: '5/30 토요일 스탠드업(🚨 게임 코드 단절 신기록 NumLink 31일·MeowBeat 48일·나흘째 위기·🆕 MeowBeat 브랜치 upstream 미설정 유실위험 최고+NumLink 테스트 삭제 사고 의심·NumLink Tools 4회째 이월): **🚨 P0 MeowBeat 브랜치 upstream 설정+커밋·푸시**(유실 위험 최고 차단·QA·DevOps·Orchestrator 3인 동일 지적) + **🚨 P0 NumLink AutoGenTests git checkout 복구**(사고 의심·5분·회귀 안전망) + **🚨 P0 NumLink Tools 부트스트랩**(4회째 이월·MeowBeat Tools 복사) + **🔐 P1 Play Billing Library 8.0 점검**(마감 경과) + **🔍 P2 지수형 출석 스트릭·스포트라이트 온보딩·App Store Tags 캡션**. 메타: 한 달+ 5분짜리 P0조차 미실행 = 분석 단계 종료·실행 1건 필요.',
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
    taskSummary: '**🚀 시장 신규 1순위**: **하이브리드캐주얼 IAP가 2026 상반기 3.45억$·전년比 100% 성장** — 순수 광고형 하이퍼캐주얼은 단독 히트 소멸·**IAP+광고 혼합 모델이 표준**(NumLink/MeowBeat 양쪽 수익화 설계 시사). **🚀 신규 2순위**: **리듬게임 D30 리텐션 35%로 캐주얼 평균 21%를 압도·평균 세션 25분** = MeowBeat 장르가 장기 리텐션·롱세션 강점 영역. **🚀 3순위**: **DAU 유지에 월 89개 라이브옵스 이벤트 필요**(2023년 73개서 증가)·D7 업계 10%·상위권 20%+·Day7 보상을 Day1~6 합보다 크게 주는 지수형 곡선이 최고 성과. **GDD 통합 메시지**: MeowBeat "지수형 7일 출석 스트릭"(Day7=고양이 스킨/농장 프리미엄 작물을 Day1~6 누적보다 크게·노트 보상↔농장 자원 연결 데일리 루프)으로 D7 20%+ 상위권 목표.',
    lastUpdate: '5/30 토요일 리서치(토요일·1개월 임계 D+6·하이브리드캐주얼 IAP +100%·리듬게임 D30 35% 신규): **🔥 P1 MeowBeat "지수형 7일 출석 스트릭" 적용**(Day7 보상을 Day1~6 누적보다 크게 설계·노트 플레이 보상을 농장 성장 자원으로 연결하는 데일리 루프를 핵심 메타로·D7 20%+ 상위권 목표·25분 롱세션·D30 35% 장르 강점과 정합) + **P2 NumLink 동일 지수형 스트릭 컨셉 메모**(IAP +100% 하이브리드캐주얼 동력) + **P2 코드 흐름 복구 후 착수**. Sources: 하이브리드캐주얼 IAP 2026 H1·리듬게임 리텐션 벤치마크·라이브옵스 이벤트 빈도 2026.',
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
    taskSummary: '**🚀 기술 신규 1순위**: **Play Billing Library 8.0 마이그레이션 — 기존 앱 의무화 마감 2026-02 종료**(v7 신규 빌드 업로드는 8/31까지)·**IAP를 쓰면 즉시 점검 필요**(마감 이미 경과). **🚀 신규 2순위**: **Unity CoreCLR 전환 본격화** — 6.7 기술프리뷰 백엔드·**6.8서 Mono 완전 제거(.NET 10/C# 14·도메인 리로드 소멸)** = 중장기 마이그레이션 로드맵 영향. **🚀 신규 3순위**: **URP 2026 — on-tile 포스트프로세싱·실시간 GI 모바일 지원 예고**·SRP Batcher+Store Action Discard가 NumLink 드로우콜 핵심. **🆕 기술부채**: NumLink feature/uitoolkit AutoGenTests 4파일 삭제 = 직전 1358503서 빌드 수정 직후 삭제·UI Toolkit 전환 중 회귀 안전망 손실 = 푸시 전 복구/사유 명시 필요.',
    lastUpdate: '5/30 토요일 리서치(토요일·1개월 임계 D+6·Play Billing 8.0 마감 경과·Unity CoreCLR 6.8 Mono 제거 신규): **🔐 P1 NumLink/MeowBeat IAP 사용 여부 확인 후 Billing Library 8.0 적용 상태 이번 주 내 점검**(마감 경과) + **🚨 P1 feature/uitoolkit 5커밋 푸시 전 삭제된 AutoGenTests 복구 여부 결정**(회귀 안전망) + **P2 Unity CoreCLR 6.8 Mono 제거 중장기 마이그레이션 영향 모니터링**. Sources: unity.com Unity 6.3 LTS·unity.com URP 2026 전략·digitalproduction.com Unity 2026 로드맵 CoreCLR·developer.android.com Billing deprecation FAQ.',
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
    taskSummary: '**🆕 신규 리스크 1 (최고 심각도)**: **MeowBeat `feature/song-ownership-migration` 브랜치 upstream 미설정 = push 원천 불가**(원격 추적 없음)·37파일 미커밋이 로컬에만 존재 = **유실 위험 최고**(CI 부재로 백업 0). **🆕 신규 리스크 2**: **NumLink AutoGenTests 4파일 D(deleted) 상태** — 직전 1358503/4debe05서 asmdef 빌드 수정·추적 추가 직후 곧바로 삭제 = **사고 의심**·`git checkout`으로 5분 복구 가능. **신규 리스크 3**: NumLink `Assets/AutoQATests/` 빈 폴더·Tools/known_bugs 부재 = QA 자동화 미구축. **MeowBeat 대조**: Tools+known_bugs.json 정상(버그 패턴 6종·미해결 5종). **미해결 리스크 3건 / 가장 심각 = MeowBeat 36파일이 upstream 없는 로컬 브랜치에 갇혀 유실.**',
    lastUpdate: '5/30 토요일 리서치(토요일·1개월 임계 D+6·🆕 MeowBeat 브랜치 upstream 미설정·NumLink 테스트 삭제 사고 의심 신규): **🚨 P0 MeowBeat 브랜치 `--set-upstream` 지정 후 커밋·푸시**(유실 위험 최고 차단·최우선) + **🚨 P0 NumLink AutoGenTests `git checkout` 즉시 복구 여부 확정**(5분·회귀 안전망·파일 4개만 타깃) + **P1 NumLink Tools/known_bugs 부트스트랩**(QA 자동화 미구축 해소·MeowBeat 복사). Sources: NumLink/MeowBeat git 워킹트리·branch -vv·Tools 폴더 실측.',
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
    taskSummary: '**📦 콘텐츠 1순위**: **애플 App Store Tags** — 스크린샷·설명을 AI가 라벨화해 브라우즈 노출을 좌우·**키워드 스터핑 무력화**·캡션 텍스트가 메타데이터로 색인되므로 출시 전 캡션 카피 리라이트가 ASO 핵심. **📦 2순위**: **Meta 소셜게임 노출점유 54%→69% 급등·TikTok 21%→12.7% 반토막** = UA 채널 재편·출시 초기 Meta 비중 확대 권장. **📦 3순위**: **리워드 광고 유저는 D7 리텐션 +15~30%·IAP 전환 4배·결제액 평균 +326%** = 리텐션 주도 성장의 핵심 레버. **적용 메시지**: NumLink/MeowBeat 스토어 캡션에 핵심 검색어 의도적 삽입(App Store Tags 대응)·출시 초기 UA는 Meta 비중 확대+리워드 광고(오퍼월) 1차 테스트 채널.',
    lastUpdate: '5/30 토요일 리서치(토요일·애플 App Store Tags AI 라벨화·Meta 노출 69%·리워드 광고 결제액 +326% 신규): **P1 NumLink·MeowBeat 스토어 스크린샷 캡션에 핵심 검색어 의도적 삽입**(App Store Tags 대응·출시 체크리스트에 캡션 리라이트 추가) + **P1 출시 초기 UA는 Meta 비중 확대 + 리워드 광고(오퍼월)를 1차 테스트 채널로 편성** + **P2 캡션 카피 A/B 테스트 컨셉 메모**. Sources: phiture.com ASO Trends 2026·cas.ai ASO 2026·businessofapps 모바일 게이밍 마케팅 2026·maf.ad 리워드 광고 통계·gamelight.io 리워드 UA 2026.',
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
    taskSummary: '**CI/CD 상태**: **NumLink/MeowBeat 둘 다 GitHub Actions 워크플로우 없음**(`.github/workflows` 부재) = Unity 빌드 CI 자체가 없어 "장애"는 아니나 자동화 공백. **agent-office 정상**: deploy-pages.yml(push→main 자동 Pages 배포) 이상 없음·미푸시 0. **🚨 미푸시 적체**: NumLink 5커밋·**MeowBeat 42커밋(meowbeat/main이 원격 대비 ahead 42)** — CI 부재라 배포 영향은 없으나 **백업·협업 리스크 최대 단일 항목**. **스케줄**: DailyStandup_ClaudeCode=Running(오늘 04:00=이 회의 정상)·PKM_GBrain_Sync_Daily=Disabled(어제 비활성화대로 유지). **결론**: CI/CD 자체 이상은 없음(agent-office 정상)·게임 레포는 CI 미구축+미푸시 적체가 핵심 리스크.',
    lastUpdate: '5/30 토요일 리서치(토요일·게임 레포 GitHub Actions 부재·MeowBeat 42커밋 적체·agent-office 정상): **🚨 P0 MeowBeat 42커밋 적체가 가장 큰 단일 리스크 — 오늘 중 `git push meowbeat`로 미푸시 해소(또는 백업 확보) 우선 처리** + **P2 CI 신설은 별도 안건으로 분리**(Unity GHA는 빌드 시간·러너 비용 고려) + **P2 NumLink 5커밋 푸시 병행**. CI/CD 자체 이상 없음(agent-office 배포 파이프라인 정상·미푸시 0).',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **모션이 장식이 아닌 "안내 언어"로 전환 — 스포트라이트 온보딩**(배경 블러+디밍, 한 번에 하나의 히어로 모션만 강조해 튜토리얼 인지부하 감소). **🎨 2순위**: **어시(earthy) 컬러 — 테라코타·클레이·오커 + 보석톤 액센트**·뻔한 그라데이션 탈피(전역 규칙 "민트+다크/AI 전형 디자인 금지"와 정합). **🎨 3순위**: **햅틱/감각 피드백이 리텐션 무기로 격상**(로얄매치式 카드뽑기 촉감). **연결 적용**: MeowBeat 신곡 첫 진입 스포트라이트 온보딩(고양이 발바닥 탭 가이드 1개만)+노트 판정 햅틱(완벽=더블탭·굿=싱글)·NumLink 크림톤에 어시 테라코타 톤을 라인 연결 성공 피드백 컬러로 추가. **AI 슬롭 회피 준수**: 민트+다크/뻔한 그라데이션 배제.',
    lastUpdate: '5/30 토요일 리서치(토요일·스포트라이트 온보딩·어시 컬러+보석톤·햅틱 리텐션 신규): **🔥 P2 MeowBeat 신곡 첫 진입 "스포트라이트 온보딩" 적용**(첫 노트 도달 시 배경 블러+디밍·고양이 발바닥 탭 가이드 1개만 강조) + **P2 노트 판정 순간 햅틱 레이어링**(완벽=더블탭 진동·굿=싱글) + **P2 NumLink 크림톤 베이스에 어시 테라코타 톤을 라인 연결 성공 피드백 컬러로 추가**(민트·뻔한 그라데이션 회피·동적 Instantiate 금지 준수). Sources: pixune.com 모바일 게임 UI 2026·ripplix.com UI 애니메이션 가이드 2026·lummi.ai/wannathis 2026 컬러 트렌드·hitem3d.ai 게임 디자인 트렌드 2026.',
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
  '✅ [완료] PKM_GBrain_Sync_Daily 비활성화 — 메인 직접 실행(State=Disabled): 어제 결정 P0를 오늘 회의에서 메인이 직접 실행(`Disable-ScheduledTask`). 근본원인 = gbrain CLI WASM Aborted()(embeddinggemma 임베딩)로 자동복구 불가·매일 03:00 4일 연속(5/26~29 LastResult=1) 무의미한 실패 누적 차단. **어제 bak_btn 삭제·UIThemeSwitcher.cs.meta 커밋에 이어 3일 연속 P0 실행 = 결정 마비 균열 흐름 사흘째 연장**. WASM 코드 패치는 별도 P1(자동화 비활성이라 긴급도 하락)',
  '🚨 P0 [NumLink Tools 부트스트랩 10m · 자동 회귀 검증 0건 해소 · 3회째 이월]: NumLink는 Tools 폴더 자체가 없어 자동 회귀 검증 0건 = 최대 리스크·3번째 회의째 이월된 가장 오래된 P0. MeowBeat Tools(add_song/beat_extractor/gen_notes/known_bugs)를 NumLink에 복사하고 씬 경로 상수("01. Scenes/" 공백 경로 포함)만 수정 후 baseline 0 error 확인. **코드 실행 흐름을 사흘째로 잇는 최소·검증된 작업 = 즉시 처리 권고**',
  '🚨 P0 [사흘째 코드 P0 흐름 유지 — MeowBeat 코어 커밋 또는 NumLink 40파일 커밋·태깅]: PKM 비활성화로 인프라 P0는 실행됐으나 게임 코드 신규 커밋 0건 = 코드 흐름 사흘째 끊길 위기. MeowBeat 코어 4파일(SongData/GameManager/SongManager/manifest) 단일 PR 분리 커밋(47일 동결 종결 착수) 또는 NumLink 미커밋 40파일 커밋·태깅(롤백 안전망·origin 푸시까지). **둘 중 하나만 실행해도 균열이 코드 레벨까지 연장**',
  '🔐 P1 [gh CLI v2.92.0+ 업그레이드 · CVE-2026-45803 대응]: gh CLI CVE-2026-45803(5/19·gh run view --log 터미널 이스케이프 시퀀스 주입)이 v2.92.0에서 패치됨. agent-office 워크플로 로그를 다루는 로컬/CI 환경의 gh CLI를 v2.92.0 이상으로 즉시 업그레이드. **데일리 스탠드업이 gh issue/run을 매일 사용하므로 직접 노출 영역**',
  '🔍 P2 [신규 리서치 적용 — NumLink 젤리 바운스·데일리 잭팟·주간 토너먼트, MeowBeat 연주클립 공유]: Art Director — NumLink 숫자 타일 Gimme Gummy 젤리 바운스(Kawaii 테마부터). Game Designer — NumLink 데일리 잭팟(첫 세션 고보상 한정 퍼즐). Content Writer — MeowBeat 연주클립 1탭 공유 훅(UGC 바이럴)·NumLink 주간 솔로 토너먼트. Developer — NumLink HUD 런타임 데이터바인딩·MeowBeat PlayScheduled+dspTime 점검',
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
