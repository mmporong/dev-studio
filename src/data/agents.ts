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
    taskSummary: '**✅ 3일 연속 P0 실행 — PKM_GBrain_Sync_Daily 비활성화 메인 직접 실행**(State=Disabled·어제 결정 P0 종결): gbrain WASM Aborted() 자동복구 불가로 매일 03:00 4일 연속(5/26~29 LastResult=1) 무의미한 실패 누적을 차단·어제 bak_btn 삭제·UIThemeSwitcher.cs.meta 커밋에 이어 균열 흐름 사흘째 연장. **⚠️ 단 게임 코드 신규 커밋 0건**: NumLink(27d67fe 어제 커밋 마지막·오늘 0)·MeowBeat(657032c 마지막·오늘 0) = 코드 실행 흐름은 사흘째 끊길 위기(인프라 P0만 실행됨). NumLink **미커밋 40파일**(feature/uitoolkit·origin보다 5커밋 앞섬·푸시 미실행·Phase 4·5 거의 완료·Phase 6 킥 미착수). MeowBeat **47일 = 6주+5일**(36파일 미커밋·코어 4파일 SongData/GameManager/SongManager/manifest 잔존·Sprint2/3 blocker). **🚨 NumLink Tools 부재 지속**: 자동 회귀 검증 0건 = 최대 리스크·3번째 회의째 이월된 가장 오래된 P0. **DailyStandup_ClaudeCode** Running(오늘 04:00 = 이 회의). agent-office Pages 배포 5건 success. 오늘 = 금요일·1개월 임계 D+5·인프라 P0는 실행·코드 P0는 위기.',
    lastUpdate: '5/29 금요일 스탠드업(✅ PKM_GBrain_Sync_Daily 비활성화 메인 직접 실행·3일 연속 P0·단 게임 코드 신규 커밋 0건 코드 흐름 사흘째 위기·MeowBeat 47일 NumLink 40파일·NumLink Tools 부재 지속): **✅ [완료] PKM_GBrain_Sync_Daily 비활성화**(어제 P0를 오늘 회의에서 메인 직접 실행·State=Disabled·4일 연속 실패 차단) + **🚨 P0 NumLink Tools 부트스트랩 10m**(자동 회귀 0건 해소·3회째 이월·즉시 처리) + **🚨 P0 사흘째 코드 P0 흐름 유지 = MeowBeat 코어 커밋 또는 NumLink 40파일 커밋·태깅** + **🔐 P1 gh CLI v2.92.0+ 업그레이드**(CVE-2026-45803) + **🔍 P2 NumLink 젤리 바운스·데일리 잭팟·주간 토너먼트 컨셉 메모**.',
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
    taskSummary: '**🚀 시장 신규 1순위**: **Pixel Flow!(소트 슈팅 퍼즐)** — 출시 4개월 누적 **1,170만 다운로드·미국 매출 톱20**·2026-02 **Scopely가 10억$ 밸류로 인수** = 단순 룰의 캐주얼 소트 장르가 메이저 인수 대상으로 검증·**NumLink 같은 룰 기반 캐주얼 퍼즐의 시장 잠재력 시사**. **🚀 시장 신규 2순위**: **2026 IAP 매출의 84%가 라이브옵스 운영 게임에서 발생** — 평탄한 일일보상은 사망·**지수형 연속 출석(스트릭) 보상 곡선이 표준**. **🚀 3순위**: **Rhythm Hive** 다이어리 테마+스티커 꾸미기로 리듬게임에 수집/커스텀 결합(MeowBeat 농장↔리듬 융합 참고). **GDD 통합 메시지**: NumLink "데일리 잭팟"(하루 첫 세션 1분 내 고보상 한정 퍼즐)으로 D1 출석 유도·평탄 출석보상 대신 지수형 곡선.',
    lastUpdate: '5/29 금요일 리서치(금요일·1개월 임계 D+5·Pixel Flow! Scopely 10억$ 인수 신규): **🔥 P1 NumLink "데일리 잭팟" 도입 검토**(하루 첫 세션 1분 내 풀리는 고보상 한정 퍼즐 = D1 출석 유도·평탄 출석보상 대신 지수형 연속 보상 곡선·기존 별점/난이도와 충돌 없이 추가) + **P2 NumLink 스트릭 손실회피 습관화 컨셉 메모**(IAP 84% 라이브옵스 동력) + **P2 MeowBeat 농장↔리듬 수집/커스텀 융합 검토 이월**(Rhythm Hive 참고). Sources: Tech.eu Scopely Pixel Flow $1B·Deconstructor of Fun·Naavik Live Ops Puzzle·Game Growth Advisor Retention 2026.',
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
    taskSummary: '**🚀 기술 신규 1순위**: **Unity Platform Toolkit + 네이티브 IAP 대시보드 얼리액세스 공개(2026)** — 멀티플랫폼 출시 간소화·인앱결제 통합 대시보드(MeowBeat 수익화 시 직접 영향). **🚀 기술 신규 2순위**: **UI Toolkit 런타임 데이터바인딩(Unity.Properties 기반) 6.3서 성숙** — UI Builder에서 C# 속성을 직접 바인딩 = uGUI식 글루코드 제거·문서 4/28 갱신(ListView 키보드/컨트롤러 내비게이션·Addressables UI 로딩 추가)·**NumLink feature/uitoolkit 직접 수혜**. **오디오 동기화**: MeowBeat는 **AudioSource.PlayScheduled + AudioSettings.dspTime 1초 스케줄링 윈도우**로 노트 동기화 정밀도 점검(DSP 버퍼 기본값 유지·변경 시 안드로이드 성능 저하 주의). **MeowBeat 미커밋 핵심**: SongData.cs·manifest.json+10·GameManager.cs·SongManager/OptionManager 코어 4파일 이월 지속(orphan GUID 위험 없음).',
    lastUpdate: '5/29 금요일 리서치(금요일·1개월 임계 D+5·Unity Platform Toolkit+런타임 데이터바인딩 신규): **P2 NumLink HUD(점수·레벨)를 Unity 6.3 런타임 데이터바인딩(Unity.Properties)으로 바인딩 검토**(글루코드 제거) + **P2 MeowBeat 노트 스케줄링을 PlayScheduled+dspTime으로 점검**(현 동기화 정밀도 베이스라인 측정 후 결정·DSP 버퍼 기본값 유지) + **P1 MeowBeat 코어 4파일 단일 PR 분리 커밋 이월 종결**(47일 동결 착수). Sources: Game Developer Unity Platform Toolkit·Unity Manual Runtime data binding 6000.3·Medium UI Toolkit in Unity 6(Mar 2026)·Native Audio dspTime sync.',
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
    taskSummary: '**🚨 NumLink Tools 부재 지속**: `C:/Unity/NumLink/Tools/` 폴더 자체 부재 재확인 = **자동 회귀 검증 0건 = 최대 리스크·3번째 회의째 이월된 가장 오래된 P0**(MeowBeat만 보유). **MeowBeat Tools 정상**: add_song.py·beat_extractor.py·gen_notes.py·hierarchy_dump.py·known_bugs.json(버그 패턴 **6건**) 보유·루트 `C:/Unity/Feedme`에서 실행 시 무결(상대경로 기반·Tools에서 돌리면 manifest 미발견 오탐). **✅ PKM 4일 연속 실패→비활성화 검증**: PKM_GBrain_Sync_Daily 5/26~29 03:00 모두 LastResult=1·오늘 회의에서 비활성화 실행 확인(State=Disabled)·PKM_Daily_Digest·PKM_StudyPush는 LastResult=0 정상 가동.',
    lastUpdate: '5/29 금요일 리서치(금요일·1개월 임계 D+5·NumLink Tools 부재 3회째 이월·PKM 비활성화 검증): **🚨 P0 10m NumLink Tools 부트스트랩**(MeowBeat Tools를 NumLink에 복사 + "01. Scenes/" 공백 경로 1줄 수정 + baseline 0 error·자동 회귀 검증 0건 해소·3회째 이월된 가장 오래된 P0·즉시 처리 최우선) + **P1 .meta git 추적 점검 룰 qa_static 추가**(디스크 존재만이 아닌 `git ls-files` 추적 여부 확인) + **P2 MeowBeat 신곡 manifest 노트 데이터 무결성 재검증**. Sources: NumLink/MeowBeat Tools 재실측·schtasks LastResult 실측·known_bugs.json 카운트.',
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
    taskSummary: '**📦 콘텐츠 1순위**: **iOS 서구권 캐주얼 CPI 전년比 38%↑(퍼즐 iOS $3.00)** — UA 광고비 급등으로 유료 획득 비효율화·오가닉/UGC 의존도 상승 압력. **📦 2순위**: **솔로(개인) 토너먼트가 캐주얼 필수 라이브이벤트로 주류화** — 타 유저와 비동기 경쟁·리텐션과 과금 동반 상승. **📦 3순위**: **Dead As Disco가 플레이어 자작클립 TikTok 3억뷰로 120만 유저 달성** = 리듬게임 UGC 무료 바이럴의 정점 사례. **적용 메시지**: MeowBeat "쉐어 가능한 순간" 훅(연주 클립 자동 녹화·1탭 공유)으로 CPI 38%↑ 대응·Dead As Disco式 UGC 무료 바이럴 확보·NumLink 주간 솔로 토너먼트로 리텐션 강화.',
    lastUpdate: '5/29 금요일 리서치(금요일·iOS 퍼즐 CPI $3.00 38%↑·솔로 토너먼트 주류화·Dead As Disco UGC 3억뷰 신규): **P1 MeowBeat "쉐어 가능한 순간" 훅 1개 우선 구현**(연주 클립 자동 녹화·1탭 공유 = CPI 38%↑ 대응·UGC 무료 바이럴) + **P2 NumLink "주간 솔로 토너먼트" 라이브이벤트**(비동기 랭킹 경쟁으로 리텐션 강화·과금 동반 상승). Sources: 모바일 게임 UA CPI 2026·솔로 토너먼트 라이브옵스 트렌드·Dead As Disco UGC 사례.',
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
    taskSummary: '**🚨 보안 신규 1순위**: **gh CLI CVE-2026-45803(5/19)** — `gh run view --log` 출력에 터미널 이스케이프 시퀀스 주입 가능(악성 로그가 터미널 제어)·**v2.92.0에서 패치**·agent-office 워크플로 로그를 다루는 로컬/CI 환경 영향(데일리 스탠드업이 gh issue/run 매일 사용). **🚨 신규 2순위**: **TeamCity CVE-2026-44413** — On-Prem ~2025.11.4 API 노출·2026.1 수정(우리는 GHA 사용·CI 보안 동향 참고). **빌드 최적화**: **GameCI 빌드는 Library 폴더 actions/cache 적용 시 빌드 50%+ 단축 가능**(Unity CI 도입 시 직접 효과). **agent-office 정상**: GitHub Pages 배포 5건 success·actions SHA 핀으로 워크플로우 주입 견고. **✅ PKM_GBrain_Sync_Daily 비활성화 실행 확인**(State=Disabled·매일 03:00 무의미한 실패 차단).',
    lastUpdate: '5/29 금요일 리서치(금요일·gh CLI CVE-2026-45803 v2.92.0 패치·TeamCity CVE·GameCI Library 캐시 신규): **🚨 P1 agent-office 워크플로 로그를 다루는 로컬/CI 환경의 gh CLI를 v2.92.0+로 즉시 업그레이드**(CVE-2026-45803 대응·gh run view --log 이스케이프 주입) + **P2 향후 Unity GHA 도입 시 Library actions/cache 스텝을 SHA 핀 형태로 추가**(빌드 50%↑) + **P2 weekly-insights.yml contents:write 토큰 회전 이월**(Megalodon 대비). Sources: GitLab Advisories CVE-2026-45803·GitHub CLI v2.92.0 릴리스·JetBrains TeamCity CVE-2026-44413·GameCI Builder docs.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **Gimme Gummy/Squishy UI 촉각 맥시멀리즘** — 젤리·고무 질감 버튼이 눌리면 변형 후 바운스로 복귀(촉각감 강화)·2026 부상 트렌드·캐주얼 게임 인터랙션과 정합. **🎨 2순위**: **Kid Core(키드코어)** — 크레용·스티커·삐뚤빼뚤 손맛 도형의 의도적 불완전미(완벽한 벡터 대신 손맛)·MeowBeat 고양이/농장 코지 톤과 정합. **연결 적용**: NumLink 크림톤에 Gummy 광택+바운스·MeowBeat에 키드코어 스티커 모티프 결합. **AI 슬롭 회피 준수**: 민트+다크/뻔한 그라데이션 배제. **구현 방식**: 연결 성공 시 젤리 변형+바운스 피드백을 Kawaii 테마부터 프로토타입(동일 에셋 슬롯에 머티리얼/스케일 트윈만 적용·동적 Instantiate 금지 준수).',
    lastUpdate: '5/29 금요일 리서치(금요일·Gimme Gummy/Squishy UI·Kid Core 신규): **🔥 P2 NumLink 숫자 타일을 Gimme Gummy 스타일로 전환**(연결 성공 시 젤리 변형+바운스 피드백 = 촉각감 강화·Kawaii 테마부터 프로토타입 적용·민트+다크/뻔한 그라데이션 회피·동적 Instantiate 금지 준수) + **P2 MeowBeat 키드코어 스티커 모티프 검토**(고양이/농장 코지 톤 정합) + **P2 Mulmaru OFL 한글 픽셀 폰트 NumLink 04_Fonts SDF 생성 이월**. Sources: Daily AI World Squishy-Uishy UI 2026·Medium Gummy Aesthetic 2026·Krumzi/Kittl 그래픽 디자인 트렌드 2026 Kid Core.',
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
