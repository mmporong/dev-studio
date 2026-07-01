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
    taskSummary: '**🟢 어제 요약이 오늘 해부로 뒤집힌 날(7/2)**: NumLink 오늘 커밋 **0건**·29일 침묵 깬 유일 최근은 07-01 e536009(코인 부활) 1건·UI 리워크 묶음은 **전부 6/02자**("오늘 5커밋"은 오인) / MeowBeat 오늘 커밋 0건·최근 921e0cf(dspTime detector)·작업트리는 dspTime 아닌 별개 기능(P0 미착수) / agent-office 9f0ffa4(7/1 저널)·**열린 PR 0건**. **🔑 메타**: 목요일·D+39·게임 양측(NumLink 폰트·MeowBeat dspTime)에서 겉보기 진행이 근본 미착수를 가린다 확정·근본은 사용자 세션 대기.',
    lastUpdate: '7/2 목요일 스탠드업(🟢 어제 "노이즈 22개" 요약이 오늘 폰트 붕괴 지뢰로 뒤집힘·NumLink 오늘 커밋 0건·"5커밋"은 06-02자 오인·07-01 코인부활 e536009 1건뿐·MeowBeat 오늘 커밋 0건 P0 미착수·열린 PR 0건): **🟡 P1[신규·긴급] NumLink 붕괴 폰트 5종 git checkout 복구(커밋 시 전 텍스트 깨짐·스테이징 금지)** + **🔴 P0[이월] NoteSpawner.cs:126 dspTime 앵커링(SyncWithAudio 우회 롤백·사용자 세션)** + **🟢 P2[자율 완료✅] CI 헬스체크 Actions 요약 가시화**.',
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
    taskSummary: '**🎮 신규(온보딩 5분 컷·리듬 리텐션·데일리 스트릭)**: 퍼즐 D7 리텐션 **전 장르 1위**이나 첫 **5~15분**에 가치 전달 실패 시 이탈(2026 GameAnalytics)·리듬게임 30일 리텐션 **35%**로 모바일 평균 21% 압도(월 3억 MAU·세션 25분)·데일리 스트릭+리마인더가 D30 리텐션 **15~30%↑** 최고 효율 습관 메커닉(신규 콘텐츠 0). **적용**: NumLink·MeowBeat 공통 데일리 스트릭+온보딩 5분 가치 컷 GDD.',
    lastUpdate: '7/2 목요일 리서치(목요일·D+39·퍼즐 D7 리텐션 전 장르 1위이나 첫 5~15분 가치전달 실패 시 이탈 GameAnalytics·리듬게임 30일 리텐션 35% 모바일 평균 21% 압도 월 3억 MAU 세션 25분·데일리 스트릭+리마인더 D30 15~30%↑ 신규): **🟢 P2 NumLink·MeowBeat 공통 "데일리 스트릭+온보딩 5분 가치 컷" GDD 신설(스트릭 카운터+깨짐 비용 메인 배치·NumLink 첫 5분 성취/다음목표·MeowBeat 데일리 곡 스트릭 연결·신규 콘텐츠 0)**. P0/P1 후. Sources: GameAnalytics·AppAgent·Supersonic·MarketReportsWorld.',
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
    taskSummary: '**💻 🔑 "노이즈 22개" 요약을 뒤집음(폰트 붕괴 지뢰)**: NumLink 미커밋 폰트 SDF **5종**(Maplestory Bold/Light·Cafe24 등)이 아틀라스 잃고 **1x1로 붕괴**(m_Width 2048→1·image data 4194304→1) → 커밋 시 게임 내 **전 텍스트 렌더 깨짐**(git checkout 복구 필수·스테이징 금지). **e536009 실체**: 코인 이어하기·무료 다시하기 둘 다 RestartCurrentLevel()이던 걸 **GameManager.Revive()** 신설로 분리한 진짜 픽스(나머지 4건 USS/UXML). **웹**: manifest AdMob **11.2.0**(Android SDK 25.3.0) 자동 승격+MCP CoplayDev/unity-mcp#beta 교체.',
    lastUpdate: '7/2 목요일 리서치(목요일·🔑 어제 "노이즈 22개" 요약 뒤집음 — NumLink 미커밋 폰트 SDF 5종 아틀라스 잃고 1x1 붕괴 m_Width 2048→1 커밋 시 전 텍스트 깨지는 지뢰·e536009는 코인부활 둘 다 RestartCurrentLevel()이던 걸 GameManager.Revive() 분리한 진짜 픽스·manifest AdMob 11.2.0 Android SDK 25.3.0 자동 승격+MCP CoplayDev 교체 신규): **🟡 P1[긴급] 붕괴 폰트 5종 즉시 git checkout 복구(스테이징 금지)+Layer Lab 7,663파일 별도 커밋 분리** + **🟢 출시 빌드 Unity 6.3 LTS+AdMob 11.2.0 검토**. Sources: git show/diff·docs.unity3d.com·googleads-mobile-unity releases 실측.',
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
    taskSummary: '**🔑 두 전제 정정·보강(7/2)**: NumLink "오늘 5커밋"은 **06-02자 오인**·오늘(07-02) 커밋 0건(07-01 코인부활 1건뿐) / MeowBeat dspTime 코어 라인126 elapsedTime += Time.deltaTime **9일째 그대로**인데 **SyncWithAudio 우회 동기화 커밋(39e3399)만 얹혀** 우회 땜빵 증가("속도 8건"+"우회") / 🚨 **신규 리스크**: AutoGenTests 4파일 삭제(D) 미커밋 → 테스트 커버리지 공백 / NumLink Tools 폴더 여전히 부재·검증 0%.',
    lastUpdate: '7/2 목요일 리서치(목요일·🔑 두 전제 정정 — "오늘 NumLink 5커밋"은 06-02자 오인 오늘 커밋 0건·MeowBeat dspTime 코어 라인126 9일째 그대로인데 SyncWithAudio 우회 커밋 39e3399만 얹혀 우회 땜빵 증가·🚨 AutoGenTests 4파일 삭제 D 미커밋 테스트 커버리지 공백 신규 리스크 신규): **🔴 P0 MeowBeat SyncWithAudio 우회 롤백+라인126 dspTime 절대차분 교체(코어픽스)** + **🟡 P1 NumLink 착수 전 AutoGenTests 삭제 커밋 정리로 회귀 기준선 확보**. Sources: qa_static.py·NoteSpawner.cs·git log/status 실측.',
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
    taskSummary: '**📦 신규 1순위(Spark Ads 유기형 부스팅)**: TikTok Spark Ads(기존 유기 게시물 부스팅)가 표준 인피드 대비 CTR **2.4배**·CVR **44%↑**(2026)·폴리시 광고보다 손가락 실플레이 UGC 톤이 캐주얼에 강함. **📦 2순위(첫 1.7초 룰)**: 캐주얼 광고 CVR 임계값 **2%**·첫 **1.7초** 안에 가치제안(킥) 노출 필수. **📦 3순위(첫 3장)**: 앱스토어 첫 3장 스크린샷이 전환 변수의 **80%** 결정(유저 90%가 3장 이상 안 넘김). **적용**: 유기형 UGC 선검증 후 Spark Ads 부스팅.',
    lastUpdate: '7/2 목요일 리서치(목요일·TikTok Spark Ads 유기형 부스팅 표준 인피드 대비 CTR 2.4배 CVR 44%↑·캐주얼 광고 CVR 임계값 2% 첫 1.7초 안에 가치제안 킥 노출 필수·앱스토어 첫 3장 스크린샷 전환 변수 80% 결정 유저 90%가 3장 이상 안 넘김 신규): **🟢 P2 숏폼을 "폴리시 광고" 대신 "유기형 UGC를 Spark Ads로 부스팅"(9~15초 UGC 톤·첫 1.7초 킥·유기 선검증 후 성과 클립만 부스팅)+앱스토어 첫 3장 스크린샷 A/B 우선**. 7/1 Apple CPP·소셜프루프와 상호보완. Sources: appfollow·businessofapps·digitalapplied·semnexus.',
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
    taskSummary: '**🛡 🔑 헬스체크 가시화 자율 완료(7/2)**: 헬스체크가 HTTP 코드를 **로그로만** 남겨 매일 자율머지 파이프라인 성공/실패를 로그 스크롤 없인 확인 불가 → deploy-pages 헬스체크에 **$GITHUB_STEP_SUMMARY** 배포 리포트(URL·HTTP상태·시도횟수) 추가·**weekly-insights.yml concurrency 그룹** 부재(main push 경합)까지 봉합. **🛡 CI/CD 정상**: 배포 5건 전원 success·빌드 34~58초·**열린 PR 0건**. 기존 재추가 아닌 순수 증분. 자율 칼끝 6일 연속 전진.',
    lastUpdate: '7/2 목요일 리서치(목요일·🔑 헬스체크가 HTTP 코드 로그로만 남겨 자율머지 성공/실패 로그 스크롤 없인 확인 불가 Actions 요약 미기록·weekly-insights.yml concurrency 그룹 부재 main push 경합 사각지대·배포 5건 전원 success 빌드 34~58초 열린 PR 0건 신규): **🟢 P2[자율 완료✅] deploy-pages 헬스체크 $GITHUB_STEP_SUMMARY 배포 리포트(URL·HTTP상태·시도횟수)+weekly-insights concurrency 그룹 신설(순수 증분·다음 run 요약 표 검증만 남음)**. Sources: gh run/pr list·deploy-pages.yml·weekly-insights.yml 실측.',
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
    taskSummary: '**🎨 신규 1순위(디자인 토큰 테마)**: 2026 지배 트렌드는 Material 3 Expressive의 **디자인 토큰 기반 다이내믹 테마잉** — 색 하드코딩 대신 시맨틱 토큰(primary·surface·accent·locked) 변수 하나로 전 화면 색 계열 전환. NumLink가 마침 3테마+Layer Lab 9-slice 스킨을 갓 도입 → 지금 색을 컨트롤러에 흩어 박으면 테마 확장마다 재작업. **🎨 2순위**: 2a78c94 "잠긴 레벨도 번호 표시"는 "다음 목표 각인" 리텐션 효과(GD "다음 목표 노출"과 정합). **적용**: 3테마 색을 ThemePalette ScriptableObject로 분리.',
    lastUpdate: '7/2 목요일 리서치(목요일·2026 지배 트렌드 Material 3 Expressive 디자인 토큰 기반 다이내믹 테마잉 색 하드코딩 대신 시맨틱 토큰 변수 하나로 전 화면 색 전환·NumLink 3테마+Layer Lab 9-slice 갓 도입돼 직결 지금 컨트롤러 하드코딩 시 테마 확장마다 재작업·잠긴 레벨 번호 노출 다음 목표 각인 리텐션 신규): **🟢 P2 NumLink 3테마 색을 ThemePalette ScriptableObject 1장(시맨틱 토큰)으로 분리·스킨은 토큰 참조만(확장비 0·AI 전형색 회피)**. Sources: m3.material.io·zignuts·aaagameartstudio.',
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
  '🟢 P2 [자율 완료 ✅·오늘의 전진] agent-office CI 헬스체크 가시화 — deploy-pages $GITHUB_STEP_SUMMARY 배포 리포트 + weekly-insights concurrency 그룹. DevOps가 짚은 두 사각지대를 회의 중 자율 조치: ① deploy-pages 헬스체크 스텝에 $GITHUB_STEP_SUMMARY 배포 리포트(배포 URL·최종 HTTP 상태·소요 시도 횟수) 추가 — 매일 자율머지가 도는 파이프라인에서 성공/실패를 로그 스크롤 없이 Actions 요약 페이지에서 한눈에. ② weekly-insights.yml에 concurrency: weekly-insights(cancel-in-progress: false) 그룹 신설 — git push로 main을 직접 갱신하는 워크플로우의 push 경합 사각지대 봉합. 기존 헬스체크 재추가가 아닌 순수 증분. 자율 칼끝 6/26→6/27→6/29→6/30→7/01→7/02로 6일 연속 한 칸씩 전진. 다음 배포 run 요약 페이지 표 노출 검증만 남음',
  '🟡 P1 [신규·긴급 위험·게임 코드·사용자 세션] NumLink 붕괴 폰트 SDF 5종 즉시 git checkout 복구 — 커밋 시 전 텍스트 깨지는 지뢰(절대 스테이징 금지). Developer 신규 발견: NumLink 미커밋 폰트 SDF 5종(Maplestory Bold/Light·Cafe24 등)이 아틀라스를 잃고 1x1로 붕괴(m_Width 2048→1·image data 4194304→1). 지금 상태로 커밋하면 게임 내 전 텍스트 렌더가 깨진다. 조치: ① 붕괴 폰트 .asset 5종을 git checkout으로 즉시 복구(절대 스테이징 금지) → ② QA 지적대로 AutoGenTests 4파일 삭제(D)를 커밋 정리(복원 or 명시적 제거)해 회귀 기준선 확보 → ③ Layer Lab 7,663 untracked 파일은 별도 커밋으로 분리. 사용자 Unity 세션 필요(복구는 안전하나 사용자 확인 권장)',
  '🔴 P0 [이월·detector 생존·우회 땜빵 누적·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 앵커링 — SyncWithAudio 우회(39e3399) 롤백하고 코어 클럭 단일 PR. QA 확인: 코어 라인126 elapsedTime += Time.deltaTime이 9일째 그대로인데 오늘 SyncWithAudio 우회 동기화 커밋(39e3399)이 하나 더 얹혀 근본을 안 고치고 우회 땜빵만 늘어남("속도 8건"+"우회"). 적용: ① SyncWithAudio 우회 롤백 → ② 필드 dspSongStartTime(double)+musicSource → ③ 곡 시작 시 musicSource.PlayScheduled(AudioSettings.dspTime + 0.1)로 DSP 타임라인 고정 → ④ 라인126을 elapsedTime = (float)(AudioSettings.dspTime - dspSongStartTime) 절대차분으로 교체. 노트 신규작업 동결·Unity 에디터 적용+qa_static.py 0 error VERIFY만 남음(사용자 세션)',
  '🟡 P1 [이월·게임 코드·사용자 세션] MeowBeat bgmPlayer.volume 4중 경로 → SongManager.ApplyVolume() 단일 경로 통합 — 슬라이더 무력화 회귀버그 차단. 7/1 Developer 발견 이월: bgmPlayer.volume이 4곳에서 제각각 계산(SongManager:89 baseVolume×userVolume / SongManager:144 PlayerPrefs SongVolume / OptionManager:191 CurrentVolume / GameManager:363,540 1.0f 하드코딩)돼 슬라이더를 0.3으로 내려도 GameManager 경로를 타면 1.0으로 회귀+SongVolume 매직스트링 중복(CLAUDE.md 위반). 조치: SongManager.ApplyVolume() 단일 메서드(곡별 baseVolume×사용자 SongVolume) 신설→모든 호출처 통합+매직스트링 공용 VOLUME_KEY 상수화. 사용자 세션 필요',
  '🟢 P2 [신규 적재 — 모두 P0/P1 후·신규 콘텐츠 0/비용 0 우선]: Game Designer — NumLink·MeowBeat 공통 "데일리 스트릭+온보딩 5분 가치 컷" GDD 신설(스트릭 카운터+깨짐 비용 메인 배치로 D30 15~30%↑·NumLink 첫 5분 성취/다음목표 노출·MeowBeat 데일리 곡 스트릭 연결·신규 콘텐츠 0). Content Writer — 숏폼을 "폴리시 광고" 대신 "유기형 UGC를 Spark Ads로 부스팅"(CTR 2.4배·첫 1.7초 킥 노출·유기 선검증 후 성과 클립만 부스팅)+앱스토어 첫 3장 스크린샷 A/B 우선(전환 변수 80%). Art Director — NumLink 3테마 색을 ThemePalette ScriptableObject 1장(시맨틱 토큰 primary·surface·accent·locked)으로 분리·스킨은 토큰 참조만(Material 3 Expressive 다이내믹 테마잉·확장비 0·AI 전형색 회피). Developer — 출시 빌드에 Unity 6.3 LTS Burst+IL2CPP(빌드 22%↓)+AdMob Next-Gen SDK 11.2.0(Android SDK 25.3.0·minSdk24) 마이그레이션 검토',
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
