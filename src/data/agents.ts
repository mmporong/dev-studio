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
    taskSummary: '**🟢 12일 무한이월 첫 돌파**: 6/8 "직접 실행하라" 처방을 회의가 이행 — MeowBeat 커밋된 작업분을 `push origin HEAD`로 origin 백업 완료(923c260..657032c·비파괴). **🔧 진단 정정 2건**: ① "NumLink 안전망 5일째"는 오진 — AutoGenTests 실제 **58일째 삭제**(4/12 마지막 생존)=의도적·NumLink는 origin과 **0/0 완전 동기화**로 백업 안전망 양호(회귀 인프라 부재만 문제) ② "백업 73일"은 master(작업중단) 기준 허수·진짜는 feature 브랜치 origin 마지막 4/7=**63일**(그 커밋분은 오늘 백업됨). **🚨 진짜 남은 P0는 GMA 마이그레이션 하나**: 미커밋 37파일 중 GMA v21→v25 4메이저 점프가 8주 미커밋. **✅ agent-office**: 정상. **🎯 메타**: 화요일·D+16·회의가 처음으로 처방을 실행하고 진단을 정정한 날.',
    lastUpdate: '6/9 화요일 스탠드업(🟢 MeowBeat 백업 P0 메인 에이전트 직접 push 실행 완료 923c260..657032c·12일 무한이월 첫 돌파·🔧 진단 정정: NumLink "5일째"는 오진 실제 58일째 의도적 삭제·origin 0/0 동기화로 안전망 양호·"백업 73일"은 master 허수 진짜는 feature 4/7=63일): **✅ P0[완료] MeowBeat 백업 직접 push** + **🚨 P0[신규·최우선] GMA v25 마이그레이션 별도 브랜치 분리+UMP 동의 초기화 확인(EEA 광고 0원 리스크)** + **🔧 P1 NumLink "복구" 처방 폐기·58일 삭제 확정+Tools 3종 신규 복사** + **🛡 P1 두 레포 fastlane 선배치(CI 0→1)** + **🎮📦🎨 P2 FTUE 5분 와우모먼트·스크린샷 A/B·주얼톤 컬러**. 메타: 처방을 실행하고 진단을 정정해 회의가 작동하기 시작한 날.',
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
    taskSummary: '**🆕 시장 신규 1순위(FTUE/D1)**: **캔디크러시 D1 45%**(캐주얼 top25%도 26~28%)·1위작은 두 배·**FTUE 핵심은 "5분 내 와우 모먼트"** — 첫 5분 안에 즉시 클리어 성취 1개 배치, 복잡 규칙은 이후 맥락적 도입. **🆕 신규 2순위**: 하이브리드캐주얼 ARPDAU $0.15~0.50·**D7 18~22%로 하이퍼 대비 2.5배**(메타게임층이 리텐션 견인). **🆕 신규 3순위(곡 전략)**: **Phigros가 무과금+플레이어 자작 차트 UGC로 곡 라이선스 비용 0원** — 라이선스곡은 비용 최고+계약 만료 시 곡 삭제 리스크. **적용 메시지**: NumLink FTUE를 텍스트 튜토리얼 제거→첫 제스처 1회 즉시 첫 퍼즐 클리어로 재설계(D1 40%+ 목표)·MeowBeat 오리지널곡+자작 차트 UGC 곡확보 검토.',
    lastUpdate: '6/9 화요일 리서치(화요일·D+16·캔디크러시 D1 45% 캐주얼 top25%도 26~28%·FTUE 핵심 5분 와우모먼트·하이브리드캐주얼 ARPDAU $0.15~0.50 D7 18~22% 하이퍼 대비 2.5배·Phigros 무과금+커스텀 차트 UGC로 곡 라이선스 비용 0원 신규): **🎮 P2 NumLink FTUE 텍스트 튜토리얼 제거→첫 제스처 1회 즉시 첫 퍼즐 클리어 재설계(5분 와우모먼트·D1 40%+ 목표)**·MeowBeat 라이선스곡 대신 오리지널곡+자작 차트 UGC 곡확보 검토. P0 백업 완료·GMA·안전망 선행. Sources: 캔디크러시 D1 벤치·하이브리드캐주얼 ARPDAU/D7·Phigros UGC 차트.',
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
    taskSummary: '**🚨 코드 분석 최대 리스크**: MeowBeat 미커밋 37파일의 핵심은 곡 음량이 아니라 **GMA(Google Mobile Ads) v21→v25.0.0(4 메이저 점프) 마이그레이션이 8주째 빌드 검증 없이 미커밋 방치**. play-services-ads 25.0.0+UMP(user-messaging-platform) 4.0.0 추가됨. **🆕 GMA/UMP**: `canRequestAds()`는 매 실행 `requestConsentInfoUpdate()` 호출 전까지 항상 false → **동의 초기화 누락 시 EEA/UK 광고 0원+Google 인증 CMP 강제 정책 위반**·requestConsentInfoUpdate가 WebView 생성, 특정 단말(Android 13 MIUI) 크래시 사례. **🔎 부채**: SongManager bgm[1]/bgm[2] 인덱스 직접참조(IndexOutOfRange 위험)+"SongVolume" 매직스트링 중복(CLAUDE.md 위반). **🆕 빌드**: 텍스처 최대 절감점·iOS ASTC/Android ETC2·ASTC 6x6 균형·link.xml로 스트리핑 보존. **메시지**: GMA를 chore/gma-25-migration 별도 브랜치 분리+UMP 동의 초기화 확인 1순위.',
    lastUpdate: '6/9 화요일 리서치(화요일·🚨 MeowBeat GMA v21→v25.0.0 4메이저 점프 마이그레이션 8주째 미커밋 방치·UMP 4.0.0 추가됐으나 동의 초기화 미구현 시 EEA/UK 광고 0원+정책 위반·SongManager bgm 인덱스 직접참조 IndexOutOfRange 위험+SongVolume 매직스트링 중복 신규): **🚨 P0[신규·최우선] GMA v25 마이그레이션 chore/gma-25-migration 별도 브랜치 분리 커밋+UMP 동의 초기화(requestConsentInfoUpdate+canRequestAds 게이트) 구현 여부 먼저 확인**(미구현 시 EEA 광고 0원). 8주 미커밋 해소 1순위. Sources: googleads-mobile-unity releases·UMP SDK Android·Unity 빌드 사이즈 최적화·ARM ASTC.',
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
    taskSummary: '**✅ MeowBeat 검증 3종 ALL PASS(6/9 재실행)**: unity_validate 0 error/0 warning(6.4s)·qa_static 0 error/0 warning·run_regression 2/2 PASS(RT_SIZE_ZERO·YAML_INDENT_M_FATHER)·곡10(audio 누락 0)·known_bugs 6패턴·미해결 버그 0건·**어제 대비 변화 없음(무회귀)**·추가 조치 불필요. **🚨 최대 리스크=NumLink 검증 인프라 완전 부재 재확정**: Tools 폴더 없음(검증 3종 실행 불가)+Assets/Tests/Editor 폴더는 존재하나 **완전히 비어있음(asmdef도 없음·Editor.meta만 잔존)**+AutoGenTests 삭제로 대체 테스트 전무 → **회귀 탐지 메커니즘 0개**·코드 변경 시 리그레션 런타임 잠복. 어제 "Tools 0개"에서 진전 없음·품질 격차 동일 방치.',
    lastUpdate: '6/9 화요일 리서치(화요일·✅ MeowBeat 검증 3종 ALL PASS unity_validate 0err 6.4s·qa_static 0err·run_regression 2/2·곡10·known_bugs 6패턴·버그0 무회귀·🚨 NumLink 검증 인프라 완전 부재 재확정 Tools 0+Assets/Tests/Editor asmdef도 없이 빈 폴더+AutoGenTests 삭제로 회귀탐지 0): **🚨 P1 NumLink에 MeowBeat 템플릿(Tools/unity_validate.py 등 3종+known_bugs.json) 즉시 이식+RT크기/YAML 최소 검증 1종 우선 도입**해 회귀탐지 0 탈출(AutoGenTests 복구와 무관하게 검증 도구는 필요). MeowBeat 안정·조치 불필요. Sources: unity_validate/qa_static/run_regression 실행·Assets/Tests/Editor 스캔·manifest 파싱.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위(스크린샷 A/B)**: **혜택중심 첫 스크린샷 교체만으로 30일내 설치전환 +9%p·앱 프리뷰 영상은 첫 3프레임이 전환의 70%를 좌우**·A/B는 변형당 최소 5,000뷰·14~21일 측정해야 통계 유의(조기 판단 금지)·첫 스크린샷 변경만으로 전환 15~30%↑(6/8 롱테일 ASO·디스코드와 겹치지 않는 신규 토픽). **📦 신규 2순위(ASMR/UGC)**: **캐주얼 ASMR 후크 영상 3초 잔존 65~70%로 업계 평균(30% 미만) 압도·UGC 콘텐츠 전환이 일반 광고의 10.38배**. **⚠️ 주의**: 모두 외부 벤치마크라 자사 기준선 측정 선행 필요. **적용 메시지**: NumLink 첫 스샷 혜택중심+조각 스냅 ASMR로 교체+A/B 1건(5,000뷰·14~21일)·MeowBeat 9:16 무음 후크 영상 UGC 1편.',
    lastUpdate: '6/9 화요일 리서치(화요일·혜택중심 첫 스크린샷 교체→30일내 설치전환 +9%p·영상 첫3프레임이 전환의 70%·A/B 변형당 5,000뷰 14~21일 필요 조기판단 금지·ASMR 후크 3초잔존 65~70% 업계평균 30% 미만·UGC 전환 일반 광고의 10.38배 신규): **🔍 P2 NumLink 첫 스크린샷 "혜택중심 문구+조각 스냅 ASMR 비주얼"로 교체+PPO/SplitMetrics A/B 1건(변형당 5,000뷰·14~21일)+MeowBeat "고양이 박자 만족감" 9:16 무음 후크 영상 UGC 1편**(자사 기준선 측정 선행). P0 백업 완료·GMA·안전망 선행. Sources: SplitMetrics·AppTweak·Apple PPO·Emplifi·MegaDigital.',
    priority: 'high',
    energy: 79,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🛡 CI 현황(실측 6/9)**: NumLink·Feedme 로컬에 `.github` 디렉터리 자체가 없고 원격 GitHub API도 `.github/workflows` 404 → 워크플로 0건 재확정(백업 P0의 구조적 원인)·agent-office는 deploy-pages.yml+weekly-insights.yml 정상·**최근 5회 연속 success(6/4~6/8 매일 19시대 자동)**·오늘 변경 없음. **🆕 신규(fastlane)**: **fastlane는 CI 인프라 없이도 Gemfile+Fastfile만으로 AAB 빌드·Google Play 업로드 자동화 가능**·match로 서명 인증서 공유·Gemfile.lock 버전 고정이 2026 표준 → game-ci 풀세팅보다 진입장벽 낮은 "CI 0→1" 첫 도미노. 시크릿은 처음부터 OIDC 페더레이션 전제. **메시지**: 두 Unity 레포에 fastlane Gemfile+Fastfile 선배치+NumLink 1개 game-ci build.yml 파일럿.',
    lastUpdate: '6/9 화요일 리서치(화요일·🛡 NumLink·Feedme .github 디렉터리 자체 부재 원격 API도 404 CI 0건 재확정·agent-office Pages 최근 5회 연속 success 6/4~6/8 매일 자동·오늘 변경 없음·🆕 fastlane는 CI 없이도 Gemfile+Fastfile만으로 AAB 빌드/Play 업로드 자동화 가능 game-ci 풀세팅보다 진입장벽 낮음 신규): **🛡 P1 두 Unity 레포에 fastlane Gemfile+Fastfile만 먼저 선배치(서명·업로드는 시크릿 준비 후 단계적)+NumLink 1개 game-ci 최소 빌드 워크플로(build.yml) 파일럿+시크릿은 처음부터 OIDC 페더레이션 전제**. CI 0→1이 백업 P0 해소 첫 도미노. Sources: GameCI Deploy to Google Play·Fastlane+GitHub Actions(Calmops)·JumpServer/DigitalApplied 시크릿 관리 2026.',
    priority: 'high',
    energy: 74,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 디자인 신규 1순위(컬러)**: **2026은 "파랑 디폴트=가장 위험한 선택"** — 누구나 쓰는 안전한 파랑 대신 **주얼톤(머스키드 사파이어·머롯·가닛)+듀오톤**으로 NumLink 3테마 차별화하면 AI슬롭(민트+다크·뻔한 그라데이션) 회피. **🎨 신규 2순위(타이포)**: **정적 폰트는 "깨진 폰트" 취급·Variable Font+Condensed Impact가 표준** — 숫자 타일에 tabular variable weight로 잠금/활성 상태 표현해 색 의존 최소화(색맹 안전). **🎨 신규 3순위(리듬 피드백)**: **리듬 노트는 "Perfect/Great 텍스트 판정+글로우 특수노트"로 즉시 피드백**. **검증**: NumLink Layer Lab GUI Pro-MinimalGame 도입 확인. **연결 적용**: NumLink 3테마 주얼톤 듀오톤 확정+숫자 Variable 폰트·MeowBeat 먹이 명중 Perfect 텍스트팝+라이트버스트.',
    lastUpdate: '6/9 화요일 리서치(화요일·2026 컬러 정석 "파랑 디폴트=가장 위험"·주얼톤 머스키드 사파이어·머롯·가닛+듀오톤이 AI슬롭 회피·정적폰트=깨진폰트 Variable+Condensed Impact 표준 숫자 타일 tabular variable weight·리듬 노트 Perfect/Great 텍스트 판정+글로우 특수노트 즉시 피드백 신규): **🎨 P2 NumLink 3테마를 머스키드 사파이어·이글플랜트 퍼플·헌터그린 주얼톤 듀오톤으로 확정(민트+다크 완전 배제)+숫자 Variable Font 단일 파일 교체+MeowBeat 먹이 명중 Perfect 텍스트팝+라이트버스트 결합**. P0 백업 완료·GMA·안전망 선행. Sources: Recursion UI Color 2026·Envato·IK Agency/Creative Bloq Typography·rhythm-games.com.',
    priority: 'high',
    energy: 77,
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
  '🟢 [12일 무한이월 첫 돌파] 6/8이 "회의록에 적으면 또 이월된다 — 메인 에이전트가 직접 실행하라"고 결론냈고, 오늘 회의가 그 처방을 처음으로 자기 손으로 이행. 메인 에이전트가 `git -C C:/Unity/Feedme push origin HEAD`로 커밋된 작업분을 origin 백업 완료(**923c260..657032c**·force 아닌 비파괴 push). 12일간 0이던 실행을 1로 만든 변곡점',
  '🔧 [진단 정정 2건 — Orchestrator 실측] ① "NumLink 안전망 5일째"는 오진 — AutoGenTests 4파일은 4/12 마지막 생존으로 **58일째 삭제**=명백한 의도적 삭제이고, NumLink는 origin과 **0/0 완전 동기화**라 백업 안전망 자체는 양호(회귀 검증 인프라 부재만 실제 문제). ② "백업 73일"은 master(작업중단) 기준 허수·진짜는 feature 브랜치 origin 마지막 **4/7=63일**(그 커밋분은 오늘 백업됨)',
  '🚨 P0 [신규·최우선] MeowBeat GMA v25 마이그레이션 — 미커밋 37파일의 진짜 핵심은 곡 음량이 아니라 **GMA(Google Mobile Ads) v21→v25.0.0(4 메이저 점프)이 8주째 빌드 검증 없이 미커밋 방치**. ① GMA 관련을 별도 브랜치 `chore/gma-25-migration`으로 분리 커밋 ② **UMP(user-messaging-platform 4.0.0) 동의 초기화(`requestConsentInfoUpdate`+`canRequestAds` 게이트) 구현 여부 먼저 확인** — 미구현이면 EEA/UK 광고 0원+Google 인증 CMP 강제 정책 위반',
  '🔧 P1 [진단 종결] NumLink AutoGenTests — 58일째 의도적 삭제로 확정, 12일 반복된 "복구" 처방 **영구 폐기**. ① 삭제 확정을 `git -C C:/Unity/NumLink rm Assets/Tests/Editor/AutoGenTests.* && commit`으로 정리(사용자 yes/no) ② **삭제 의도와 무관하게** MeowBeat 템플릿(unity_validate.py·qa_static.py·run_regression.py·known_bugs.json)을 NumLink/Tools/로 복사+씬 경로 갱신 ③ RT크기/YAML 최소 검증 1종 도입해 회귀탐지 0 탈출',
  '🛡 P1 [CI 0→1 첫 도미노 — DevOps] 두 Unity 레포 .github 디렉터리 자체 부재가 백업 P0의 구조적 뿌리. **fastlane은 CI 인프라 없이도 Gemfile+Fastfile만으로 AAB 빌드·Play 업로드 자동화 가능**하므로 ① 두 레포에 Gemfile+Fastfile만 먼저 선배치(서명·업로드는 시크릿 준비 후 단계적) ② NumLink 1개에 game-ci 최소 빌드 워크플로(build.yml) 파일럿 ③ 시크릿은 처음부터 OIDC 페더레이션 전제',
  '🎮📦🎨 P2 [출시 준비 — 모두 P0 후]: Game Designer — NumLink FTUE 텍스트 튜토리얼 제거→첫 제스처 1회 즉시 첫 퍼즐 클리어(캔디크러시 D1 45% vs 캐주얼 26~28%의 차이=5분 와우모먼트·D1 40%+ 목표)+MeowBeat 오리지널곡+자작 차트 UGC 곡확보(Phigros식 비용 0원). Content Writer — NumLink 첫 스크린샷 혜택중심+ASMR 교체+A/B 1건(변형당 5,000뷰·14~21일·+9%p)+MeowBeat 9:16 무음 후크 영상 UGC. Art Director — NumLink 3테마 주얼톤 듀오톤 확정(민트+다크 배제)+숫자 Variable 폰트+MeowBeat 먹이 명중 Perfect 텍스트팝. **모두 P0 후 착수**',
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
