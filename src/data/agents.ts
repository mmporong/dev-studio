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
    taskSummary: '**🟡 두 P0의 무게가 갈라졌다(6/28)**: NumLink 5fcac3a(6/2)·**26일째 미커밋**·36파일·검증툴 0개 / MeowBeat 921e0cf(6/21)·**7일째**·NoteSpawner.cs:126 deltaTime 잔존 / agent-office #110 머지 후 열린 PR 0건·CI success. 이월 P0-1(dspTime)·P0-2(NumLink 봉인) 둘 다 미완, #110 완료 확인. **🔑 전환점**: Developer가 NumLink 36파일을 해부해 "위험한 미완성"이 아니라 폰트 .asset 재import+깨진 씬+.omc 캐시 "노이즈"가 실체임을 규명 → 봉인이 .gitignore 정비로 오늘 0파일 청산될 만큼 가벼울 수 있음(26일 전제 흔들림). 반면 dspTime은 8일째 무변화 확정. **메타**: 일요일·D+35.',
    lastUpdate: '6/28 일요일 스탠드업(🟡 한 P0는 가벼워 보이기 시작했고 한 P0는 8일째 무변화 확정 — Developer가 NumLink 26일 미커밋 36파일을 해부해 폰트 .asset 재import+깨진 씬+.omc 캐시 노이즈가 실체임을 규명, 봉인 .gitignore 정비로 오늘 0파일 청산 가능·dspTime은 8일째 1 error 글자 그대로): **🔴 P0[이월] MeowBeat dspTime 8일째 RED 종결(사용자 세션)** + **🟡 P1[재평가] NumLink .gitignore 정비+노이즈 분리 커밋으로 작업트리 청산(봉인 26일 과대평가 가능)** + **🟢 P2 히트스톱·윈스트릭·스크린샷A/B·Dependabot grouping**.',
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
    taskSummary: '**🎮 신규(윈스트릭·복귀 트리거·비동기 경쟁)**: 윈스트릭(연속 클리어 보상↑·패배 시 0 리셋)이 "한 판 더" 후킹 핵심(Emoji Pop 코어 채택)·무료 힌트는 막힘 churn 안전판(레벨은 부스터 없이도 클리어 가능 체감). 7일 무활동 컴백 리워드+다음날 푸시→D7 **16%→20%+**. 친구 비동기 리더보드+순위변동 푸시→D30 **26~31%**(Monopoly GO·Township). 리듬게임 25년 **$4.5B**(음악게임 48.3%)·시즌패스=월 균등매출+데일리로그인 라이브옵스. **적용**: NumLink "윈스트릭+무료 힌트 안전판" 이중 시스템.',
    lastUpdate: '6/28 일요일 리서치(일요일·D+35·윈스트릭="한 판 더" 후킹 Emoji Pop 코어·7일 무활동 컴백 리워드+푸시 D7 16%→20%·친구 비동기 리더보드 D30 26~31%·리듬게임 $4.5B 음악게임 48.3%·시즌패스 라이브옵스 신규): **🟢 P2 NumLink "윈스트릭+무료 힌트 안전판" 이중 시스템 GDD 명문화(연속 클리어 3·5·10판 마일스톤 보상 배율↑·90초 막힘 시 무료 힌트 1회)**. P0 후. Sources: mobilegamedoctor.com·deconstructoroffun.com·pushwoosh.com·maf.ad·liftoff.ai·sensortower.com.',
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
    taskSummary: '**💻 🔑 NumLink 작업트리 해부**: 36파일은 "위험한 미완성"이 아니라 폰트 SDF .asset 재import+_Recovery 깨진 씬+.omc 캐시 **노이즈**가 실체 — 소스 변경 거의 없음. .gitignore에 .omc/·Screenshots/ 추가+폰트 asset 분리 커밋이면 **오늘 0파일 청산** 가능(26일 전제 재검토 근거·어제 "진행 중 리워크"와 보완). **💻 신규(Unity 6.3 LTS)**: 6.2 지원종료·Android SDK36·ANR 진단 대시보드. **💻 16KB page size 2025-11-01 의무화**(API35+ 신규/업데이트 앱 필수). **💻 GC.Alloc** 모바일 1KB/frame 목표·Memory Profiler Compare 모드. **💻 코어**: dspTime=deltaTime 누적이 오디오 클럭 드리프트, AudioSettings.dspTime 절대시각이 근본 해결.',
    lastUpdate: '6/28 일요일 리서치(일요일·NumLink 36파일 해부=폰트 .asset 재import+깨진 씬+.omc 캐시 노이즈가 실체 .gitignore 정비로 오늘 0파일 청산 가능·Unity 6.3 LTS 6.2 지원종료 ANR 대시보드·16KB page size 2025-11 의무화·GC.Alloc 1KB/frame Memory Profiler Compare 신규): **🟡 P1 NumLink .gitignore 정비(.omc/·Screenshots/)+폰트 asset 분리 커밋으로 작업트리 0파일 청산(26일 미커밋 종료)** + **🟡 빌드 타겟 Unity 6.3 LTS+API35(16KB 정렬 검증) 고정**. Sources: unity.com·docs.unity3d.com·developer.android.com·support.google.com·discussions.unity.com.',
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
    taskSummary: '**🔑 dspTime P0 8일째 RED 확정**: qa_static.py 정확히 **`1 error`**(NoteSpawner.cs:126 elapsedTime += Time.deltaTime 그대로·dspTime/PlayScheduled 0건·6/27 이후 커밋 0건). 발견 13일째. 리듬게임 코어 타이밍이 프레임 누적이라 드리프트 시 박자 붕괴 — 출시 차단급 결함 일주일+ 방치. **🔍 NumLink 이중 무방비 확인**: 검증툴 **0개**(Tools 부재)+자동 테스트 **0개**(Assets/Tests 폴더 비어 있음 .cs 0개·[Test]/[UnityTest] 0개)·Domain 순수 C# TDD 대상인데 RED 테스트 0개. **✅ 가드는 건강(대조)**: known_bugs 7개·회귀 **2/2** 통과·agent-office CI 5건 success. **🚨 미해결 P0 1건**.',
    lastUpdate: '6/28 일요일 리서치(일요일·dspTime P0 8일째 RED 확정 — qa_static.py 정확히 1 error·NoteSpawner.cs:126 deltaTime 그대로·6/27 이후 커밋 0건·NumLink Assets/Tests 폴더 비어 있음 .cs 0개로 이중 무방비 확인·Feedme 가드는 건강): **🔴 P0 NoteSpawner.cs:126 AudioSettings.dspTime 절대시각 교체 단일 수술적 픽스(patch 후 qa_static.py 0 error VERIFY)** + **🟡 P2 NumLink.Domain.Tests.asmdef+RED 테스트 1개로 무방비 탈출**. Sources: qa_static.py·run_regression.py·known_bugs.json·NoteSpawner.cs·gh run 실측.',
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
    taskSummary: '**📦 신규 1순위(스크린샷 A/B)**: 스토어 첫 3장 스크린샷 A/B로 전환 **20~35%↑**(검증 평균 10~25%·Rovio 2.5M 추가 설치). 게임은 일반 앱보다 A/B **2배** 빈번(57% vs 34%)·연 2~8회 갱신 상위게임 랭킹 우위. **📦 신규 2순위(숏폼 포맷)**: 틱톡 게임광고 참여율 **5.53%**(릴스 2.35%·쇼츠 1.98%의 2~3배)·단 틱톡 CPI 전년比 15~20%↑·틱톡 60초+ 유통 가산점. **📦 3순위(고양이 바이럴)**: 핵심은 "꾸미기/공유 가능한 결과물"(Cats&Soup)·MeowBeat 콤보·별점 화면 공유 친화 설계. **적용**: "첫 3장 후킹" 원칙+A/B 변형 2종 선제작(비용 0원).',
    lastUpdate: '6/28 일요일 리서치(일요일·스토어 스크린샷 A/B 전환 20~35%↑/게임은 A/B 2배 빈번 57% vs 34%·틱톡 게임광고 참여율 5.53% 릴스/쇼츠의 2~3배·틱톡 60초+ 가산점·고양이게임 바이럴=공유가능 결과물 Cats&Soup 신규): **🟢 P2 두 게임 스토어 "첫 3장=후킹 우선" 원칙 디자인 선반영+출시 후 A/B 변형 2종(게임플레이 vs 결과화면 강조) 선제작·MeowBeat 결과화면 공유 친화 설계**. 비용 0원. Sources: asomobile.net·apptweak.com·splitmetrics.com·verlynk.com·admiral.media·theviralapp.com.',
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
    taskSummary: '**🛡 CI/CD 정상(6/28)**: agent-office CI 최근 6건 전부 success(Deploy 5+Weekly Insights 1)·열린 PR **0건** 유지(Dependabot 신규 없음)·6/26 cancel-in-progress=false 그대로(16행)·재발 0. **🛡 신규(모바일 빌드 CI)**: GameCI(Dockerized Unity·GitHub Actions 무료) 빌드/테스트+Fastlane 배포 분업 정착·Codemagic 부상 — 두 게임 빌드 자동화 비용효율 후보. **🛡 Dependabot 자동머지 2026 권고**: patch만 자동·**GitHub Actions는 patch만**(CI 통과가 안전 보증 안 함)·grouping으로 PR 폭주 방지·Renovate minimumReleaseAge로 typosquatting 완충.',
    lastUpdate: '6/28 일요일 리서치(일요일·CI 6건 전부 success 열린 PR 0건 유지 cancel-in-progress false 그대로·GameCI+Fastlane 모바일 빌드 분업 정착 Codemagic 부상·Dependabot 자동머지 권고 patch만 자동 Actions는 patch만 grouping 신규): **🟢 P2 agent-office Dependabot grouping+선택적 자동머지(patch/minor만·Actions는 patch만) 도입 검토(열린 PR 0건이라 설정 적기)**. CI 자체 이상 없음. Sources: blog.codemagic.io·unity.com·systemshardening.com·lethain.com.',
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
    taskSummary: '**🎨 신규 1순위(공간 연속성 모션)**: 2026 게임 UI 핵심 — 페이지 전환을 끊지 않고 요소가 모핑·이동하며 이어지는 모션이 변화맹(change blindness) 감소·메뉴를 살아있게(NumLink 레벨선택→플레이 직결). **🎨 신규 2순위(엘리베이티드 뉴트럴)**: 순백→샌드·스톤·오트밀 베이지·액션 색은 **1~2개로 한정**(적=흥분·주황=열정·청=신뢰)하는 절제된 적응형 컬러. **🎨 3순위(에코형 주스 절제)**: 히트 이펙트·파티클은 코어 게임플레이 반영할 때만 가치·과장 피드백은 역효과·**히트스톱**이 핵심. **적용**: MeowBeat 노트 히트 "히트스톱+펀치 스케일"(DOTween Punch 보유·에셋 0).',
    lastUpdate: '6/28 일요일 리서치(일요일·물리 기반 공간 연속성 화면전환 변화맹 감소·엘리베이티드 뉴트럴 샌드/스톤/베이지+액션 색 1~2개 한정·에코형 주스 절제 히트스톱 핵심 과장 피드백 역효과 신규): **🟢 P2 MeowBeat 노트 히트 "히트스톱+펀치 스케일"(Perfect 순간 0.06초 1.0→1.25배·DOTween Punch 보유·콤보 텍스트 흔들기·추가 에셋 0)+NumLink 숫자 연결 성공 시 라인 끝점 짧은 펀치 스케일**. Sources: mindinventory.com·tubikstudio.com·uxdesign.cc·gameanalytics.com·gamedeveloper.com·wayline.io.',
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
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — 8일째 RED 강제 종료. qa_static.py가 오늘도 정확히 `1 error`(126행 elapsedTime += Time.deltaTime·dspTime/PlayScheduled 0건·6/27 이후 커밋 0건). detector 완성 8일째·발견 13일째 RED, 리듬게임 코어 타이밍이 프레임 누적이라 드리프트 시 박자 붕괴되는 출시 차단급 결함. songPosition = (float)(AudioSettings.dspTime - dspSongStartTime)로 교체+BGM은 AudioSource.PlayScheduled로 시작 고정+Android 오디오 지연 캘리브레이션 오프셋. 픽스 즉시 qa_static.py가 0 error 반환하는지로 VERIFY. 미커밋 .cs(SongData·GameManager·SongManager·OptionManager)도 단일 커밋 정리',
  '🟡 P1 [신규·재평가·사용자 세션] NumLink .gitignore 정비 + 노이즈 분리 커밋으로 작업트리 청산 — 26일 미커밋 종료. Developer 해부 결과 36파일의 실체는 폰트 SDF .asset 재import+_Recovery 깨진 씬+.omc 캐시 "노이즈"가 다수(진짜 소스 변경은 거의 없음) — "26일 미커밋=위험한 거대 미완성" 전제가 흔들림. ① .gitignore에 .omc/·Screenshots/·_Recovery/ 추가(Layer Lab 스킨은 트래킹) → ② 폰트 asset만 분리 커밋(chore: 폰트 SDF 갱신)+Layer Lab 작업물 분리 커밋(feat: Layer Lab UI 스킨)으로 작업트리 0파일 청산 → ③ Assets/Tests에 NumLink.Domain.Tests.asmdef+RED 테스트 1개라도 추가해 이중 무방비(Tools 0개·테스트 0개) 탈출. 단 Tests 폴더 삭제분·AutoGenTests 4파일 삭제 확정 여부는 사용자 확인 선행',
  '🟡 P1 [신규/이월] Unity 6.3 LTS 전환 + 빌드 타겟 고정: Developer — 두 게임 빌드 타겟을 Unity 6.3 LTS(6000.3.0f1·6.2 지원종료)+Android API 35로 고정하고 16KB page size 정렬(2025-11-01부터 API35+ 의무화) 검증. GC.Alloc 모바일 1KB/frame 목표로 Memory Profiler Compare 모드(스냅샷 차분)로 누수 베이스라인 측정. 봉인 후 진행',
  '🟢 P2 [신규 적재 — 모두 P0/P1 후·추가 에셋 0/비용 0원 우선]: Art Director — MeowBeat 노트 히트 "히트스톱+펀치 스케일"(Perfect 판정 0.06초간 1.0→1.25배·DOTween Punch 보유·콤보 텍스트만 같은 타이밍 흔들기·신규 텍스처/파티클 0)+NumLink 숫자 연결 성공 시 라인 끝점 짧은 펀치 스케일. Game Designer — NumLink GDD에 "윈스트릭+무료 힌트 안전판" 이중 시스템 명문화(연속 클리어 3·5·10판 마일스톤 보상 배율↑·패배 시 0 리셋="한 판 더"·한 레벨 90초+ 막힘 시 무료 힌트 1회 자동·과금 직전 churn 차단). Content Writer — 두 게임 스토어 "첫 3장=후킹 우선" 원칙 디자인 선반영+출시 후 A/B 변형 2종(게임플레이 vs 결과화면 강조) 선제작(전환 20~35%·비용 0원)·MeowBeat 결과화면 공유 친화 설계. DevOps — agent-office Dependabot grouping+선택적 자동머지(patch/minor만·Actions는 patch만) 도입 검토(열린 PR 0건이라 설정 적기)',
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
