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
    taskSummary: '**🟢 어제 추가한 것이 오늘 실배포에서 작동으로 실증된 날(7/1)**: agent-office c3000ce(6/30) 헬스체크 **완료✅**(어제 액션 100%)·열린 PR 0건 / NumLink 5fcac3a(6/2)·**29일째 미커밋**이나 36파일 중 **순수 노이즈 22개**(폰트 재import 7+.omc/state 캐시 15)·실작업물 **0건** / MeowBeat 작업트리는 dspTime 아닌 **한글곡명(titleKo)+GameManager(+59)** 별개 기능·**NoteSpawner.cs 변경 0건**(P0 손도 안 댐). **🔑 메타**: 수요일·D+38·자율 칼끝 추가→검증으로 단단해지는데 게임측은 detector 살아있을수록 코어픽스 부재 선명.',
    lastUpdate: '7/1 수요일 스탠드업(🟢 어제 추가한 헬스체크가 오늘 실배포 run 28396561545 "HTTP 200 on attempt 1"로 실증·어제 액션 100% 완료·NumLink 29일째지만 36파일 중 노이즈 22개·실작업물 0건·MeowBeat 작업트리는 dspTime 아닌 한글곡명 별개 기능·NoteSpawner 변경 0건): **🔴 P0[이월] NoteSpawner.cs:126+SyncWithAudio dspTime 앵커링(노트 신규작업 동결·사용자 세션)** + **🟡 P1[신규] bgmPlayer.volume 4중 경로 통합** + **🟢 P2[이월] NumLink 노이즈 청산+Tools 복사**.',
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
    taskSummary: '**🎮 신규(리텐션 시대·Wordle 캡 메타·하이브리드)**: 글로벌 다운로드 2025년 **0.8% 성장**으로 "리텐션 시대" 진입(Sensor Tower)·퍼즐 **D1 31.85%/D30 5.35%**·Wordle 하루1개 캡+**4~6% 난이도**만으로 **1,200만 DAU** 유지(리더보드·소셜 없이)·플로우 황금비 현재 실력+4~6%·하이브리드캐주얼 IAP:광고 **45:55** 최적 평균 ARPU **28%↑**. **적용**: NumLink 데일리 퍼즐(시드 고정·신규 콘텐츠 0).',
    lastUpdate: '7/1 수요일 리서치(수요일·D+38·다운로드 0.8% 성장 리텐션 시대 진입 Sensor Tower·퍼즐 D1 31.85%/D30 5.35% 매치 D30 7.15%·Wordle 하루1개 캡+4~6% 난이도만으로 1,200만 DAU·플로우 황금비 실력+4~6%·하이브리드 IAP:광고 45:55 ARPU 28%↑ 신규): **🟢 P2 NumLink 데일리 퍼즐(시드 고정)+스트릭+Wordle식 이모지 그리드 공유 모드(기존 생성기 시드 고정·신규 콘텐츠 0·MeowBeat보다 구현비 낮음)**. P0/P1 후. Sources: sensortower·gamegrowthadvisor.com·adjust.com·businessofapps.com.',
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
    taskSummary: '**💻 🔑 신규 회귀버그 발견(volume 4중 경로)**: bgmPlayer.volume이 4곳에서 제각각(SongManager:89 baseVolume×userVolume / :144 PlayerPrefs SongVolume / OptionManager:191 CurrentVolume / **GameManager:363,540 1.0f 하드코딩**) → 슬라이더 0.3 내려도 GameManager 경로 타면 **1.0 회귀**+SongVolume 매직스트링 중복(CLAUDE.md 위반). **💻 웹(신규)**: Unity **6.3 LTS 정식**(6000.3·Burst+IL2CPP 빌드 **22%↓**·Box2D v3 2D 물리)·Unity 6.5(2026-06)·AdMob **Next-Gen SDK 1.2.1**(플러그인 10.6.0+·minSdk24).',
    lastUpdate: '7/1 수요일 리서치(수요일·🔑 신규 회귀버그 bgmPlayer.volume 4중 경로 불일치 — SongManager 89/144·OptionManager 191·GameManager 363/540 1.0f 하드코딩으로 슬라이더 내려도 1.0 회귀+SongVolume 매직스트링 중복·Unity 6.3 LTS 정식 Burst+IL2CPP 빌드 22%↓ Box2D v3·AdMob Next-Gen SDK 1.2.1 minSdk24 신규): **🟡 P1 bgmPlayer.volume → SongManager.ApplyVolume() 단일 경로 통합(GameManager 1.0f 하드코딩 2곳 포함)+SongVolume 공용 상수화** + **🟢 출시 빌드 Unity 6.3 LTS+AdMob Next-Gen 검토**. Sources: docs.unity3d.com·developers.google.com/admob·SongManager/GameManager/OptionManager 실측.',
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
    taskSummary: '**🔑 detector 생존 실행 확인(7/1)**: qa_static.py **exit code 2**로 NoteSpawner.cs:126 정확히 핀포인트(죽은 룰 아님) / **코어픽스 여전히 미커밋**(126행 deltaTime 그대로·SyncWithAudio 95행도 elapsedTime = 0f 리셋만·dspTime 앵커링/PlayScheduled 0건) / 🚨 **우선순위 역전**: 최근 NoteSpawner 커밋 8건(노트속도·낙하속도 2배) 전부 속도 땜질·근본 클럭 9일째 방치 / NumLink **Tools 폴더 자체 부재**·검증 0% / 미해결 2건.',
    lastUpdate: '7/1 수요일 리서치(수요일·🔑 detector 생존 실행 확인 qa_static.py exit code 2로 NoteSpawner.cs:126 핀포인트·코어픽스 여전히 미커밋 126행 deltaTime+SyncWithAudio 95행 elapsedTime=0f 리셋만·🚨 우선순위 역전 최근 NoteSpawner 커밋 8건 전부 속도 땜질 근본 클럭 9일째 방치·NumLink Tools 폴더 자체 부재 검증 0% 신규): **🔴 P0 노트 신규작업 동결+NoteSpawner.cs:126+SyncWithAudio dspTime 앵커링 단일 PR 최우선** + **🟢 P2 NumLink Tools 복사로 검증 0% 탈출**. Sources: qa_static.py·NoteSpawner.cs·known_bugs.json 실측.',
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
    taskSummary: '**📦 신규 1순위(Apple CPP 무료 무기)**: CPP 한도 **70개 확대**+오가닉 검색 노출 가능 → 광고 전용 아닌 ASO 정식 무기·CPP 유입 전환 **156%↑**(1.6%→4.1%)·**비용 0원**. **📦 2순위(스크린샷)**: 첫 스크린샷에 소셜프루프(평점/다운로드) 삽입 시 다운로드 **90%↑**·최적화 스크린샷 전환 20~40%↑. **📦 3순위(UA)**: 퍼즐 CPI iOS **$3.00**/Android $2.00·게이밍 CPI 전년比 **30%↑**·Reels 전환 최강(경쟁사 1.3배). **적용**: NumLink iOS CPP 2종 무료 개설.',
    lastUpdate: '7/1 수요일 리서치(수요일·Apple CPP 70개 확대+오가닉 노출 전환 156%↑ 비용 0원·스크린샷 첫장 소셜프루프 다운로드 90%↑·퍼즐 CPI iOS $3.00/Android $2.00 게이밍 CPI 전년比 30%↑·Reels 전환 최강 1.3배·iOS Q1 최저 Q4 20~40% 급등 신규): **🟢 P2 NumLink iOS Custom Product Page 2종(A 무드형 "출퇴근 5분 두뇌 휴식"·B 도전형 "숫자 잇기 챌린지")+첫 스크린샷 소셜프루프·CPP 지표로 유료 UA 전 무료 A/B**. Sources: blog.udonis.co·appalize.com·foxdata.com·adapty.io·respectaso.com.',
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
    taskSummary: '**🛡 🔑 헬스체크 실배포 검증 완료(7/1)**: 6/30 추가한 헬스체크가 오늘 실배포 run 28396561545에서 **"Site is live (HTTP 200) on attempt 1"** 첫 시도 통과 — 어제 "추가"→오늘 "실증". **🛡 CI/CD 정상**: 최근 배포 5건 전원 success·빌드 34~44초·**열린 PR 0건**(Dependabot 포함 #116/#111/#110 MERGED·자율 닫을 PR 없음). **🛡 참고**: 원격 레포 **dev-studio로 리네임**됨(gh agent-office는 리다이렉트로 정상). 이상 없음.',
    lastUpdate: '7/1 수요일 리서치(수요일·🔑 6/30 추가한 헬스체크 오늘 실배포 run 28396561545 "Site is live HTTP 200 on attempt 1" 첫 시도 통과로 실증·배포 5건 전원 success 빌드 34~44초·열린 PR 0건 Dependabot 모두 MERGED·원격 레포 dev-studio로 리네임 gh agent-office는 리다이렉트 신규): **🟢 P2[자율 가능] gh 호출 경로 정식 명칭 mmporong/dev-studio로 통일(리다이렉트 의존 제거)**. CI 이상 없음. Sources: gh run list·gh pr list·deploy-pages.yml 실측.',
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
    taskSummary: '**🎨 신규 1순위(촉각 UI)**: 2026은 "촉각(Tactile/Squishy) UI의 해" — 탭하면 눌리고 짓눌렸다 튕기는 **squash & stretch 변형**+햅틱(플라스틱처럼 만져지는 확인 피드백). **🎨 2순위(워밍 다크)**: 순수 검정(#000) **퇴출**·charcoal-brown(**#1C1917**)·zinc near-black(#09090B)·Mocha Mousse 따뜻한 중성톤이 다크 베이스 표준·네온 대신 스모키 앰비언트 글로우. **🎨 3순위("Juice 과잉" 비판론)**: 파티클 남발 대신 핵심 순간만 선택적 피드백. **적용**: NumLink 타일 squash&stretch+햅틱+워밍 다크 3테마.',
    lastUpdate: '7/1 수요일 리서치(수요일·2026 촉각 Tactile/Squishy UI의 해 탭하면 눌리고 튕기는 squash&stretch 변형+햅틱·순수 검정 #000 퇴출 워밍 다크 charcoal-brown #1C1917/zinc #09090B/Mocha 표준 네온 대신 스모키 글로우·Juice 과잉 비판론 파티클 남발 대신 선택적 피드백·키네틱 타이포 신규): **🟢 P2 NumLink 리워크에 타일 연결 squash&stretch+가벼운 햅틱(과잉 파티클 배제)+3테마 베이스 #000 대신 워밍 다크 재정의(민트+네온 AI 슬롭 회피)**. Sources: pixune.com·zumeirah.com·recursion.software·wayline.io·snaptron.com.',
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
  '🟢 P2 [자율 검증 완료 ✅·오늘의 전진] agent-office 배포 헬스체크 실배포 실증 — 6/30 추가한 헬스체크 스텝이 오늘 실배포 run 28396561545에서 "Site is live (HTTP 200) on attempt 1"으로 첫 시도 통과함을 로그로 확인. 어제는 "스텝 추가", 오늘은 "실배포 검증 완료"로 자율 칼끝이 추가→검증 한 단계 더 단단해짐. 배포 5건 전원 success·열린 PR 0건. 다음 자율 후보: gh 호출 경로를 리네임된 정식 명칭 mmporong/dev-studio로 통일(스크립트/스킬의 agent-office 하드코딩 점진 교체·리다이렉트 의존 제거)',
  '🔴 P0 [이월·detector 생존 확인·우선순위 역전·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 + SyncWithAudio dspTime 앵커링 — 노트 신규작업 동결하고 코어 클럭 단일 PR. QA가 qa_static.py exit code 2로 detector 생존을 처음 실행 확인(NoteSpawner.cs:126 정확히 핀포인트)했으나 코어픽스는 여전히 미커밋(126행 elapsedTime += Time.deltaTime 그대로·SyncWithAudio 95행조차 elapsedTime = 0f 리셋만·dspTime 앵커링/PlayScheduled 0건). 최근 NoteSpawner 커밋 8건(노트속도·낙하속도 2배)이 전부 속도 땜질이라 근본 클럭 드리프트 9일째 방치=우선순위 역전. 적용: ① 필드 dspSongStartTime(double)+musicSource(AudioSource) → ② 곡 시작 시 musicSource.PlayScheduled(AudioSettings.dspTime + 0.1)로 오디오 시작 DSP 타임라인 고정(Play() 대신) → ③ 126행을 elapsedTime = (float)(AudioSettings.dspTime - dspSongStartTime) 절대차분으로 교체+SyncWithAudio도 같은 앵커 사용. 노트 신규작업 동결·Unity 에디터 적용+qa_static.py 0 error VERIFY만 남음(사용자 세션). EditMode 회귀방어 동반 권장',
  '🟡 P1 [신규·게임 코드·사용자 세션] MeowBeat bgmPlayer.volume 4중 경로 → SongManager.ApplyVolume() 단일 경로 통합 — 슬라이더 무력화 회귀버그 차단. Developer 발견: bgmPlayer.volume이 4곳에서 제각각 계산(SongManager:89 baseVolume×userVolume / SongManager:144 PlayerPrefs SongVolume baseVolume 무시 / OptionManager:191 CurrentVolume baseVolume 무시 / GameManager:363,540 1.0f 하드코딩). 슬라이더를 0.3으로 내려도 GameManager 두 경로를 타면 1.0으로 되돌아가는 회귀버그+SongVolume 매직스트링 중복(CLAUDE.md 위반). 조치: SongManager에 ApplyVolume() 단일 메서드(곡별 baseVolume×사용자 SongVolume) 신설→GameManager 1.0f 하드코딩 2곳 포함 모든 호출처 통합+SongVolume을 공용 VOLUME_KEY 상수로 정리. 사용자 세션 필요',
  '🟢 P2 [이월·29일 미커밋·사용자 세션] NumLink 노이즈 청산 + Tools 복사 — 36파일 중 실작업물 0건(노이즈 22개)·검증툴 폴더 자체 부재. ① .gitignore에 .omc/·state/·Screenshots/·_Recovery/ 추가(Layer Lab 스킨은 트래킹) → ② 폰트 SDF asset 분리 커밋+Layer Lab 작업물 분리 커밋으로 작업트리 청산 → ③ C:/Unity/NumLink/Tools/ 폴더 자체가 없으므로 CLAUDE.md 규칙대로 _ProjectTemplate에서 unity_validate.py/qa_static.py/known_bugs.json 복사+씬 경로 상수 업데이트(검증 0% 탈출). 단 AutoGenTests 4파일 삭제 확정 및 폰트/Layer Lab 커밋은 사용자 확인 선행(사용자 작업물 자율 커밋 보류)',
  '🟢 P2 [신규 적재 — 모두 P0/P1 후·신규 콘텐츠 0/비용 0 우선]: Game Designer — NumLink "데일리 퍼즐(시드 고정)+스트릭+Wordle식 이모지 그리드 공유" 모드 추가(데일리는 유저 평균 클리어 +4~6% 난이도·기존 생성기로 시드만 고정해 신규 콘텐츠 0·다운로드 0.8% 성장 리텐션 시대 대응). Content Writer — NumLink iOS Custom Product Page 2종 무료 개설(A 무드형 "출퇴근 5분 두뇌 휴식"·B 도전형 "숫자 잇기 챌린지")+각 첫 스크린샷에 평점/다운로드 소셜프루프(다운로드 90%↑)·CPP 신규 지표로 유료 UA 집행 전 무료 A/B(CPP 전환 156%↑·비용 0원). Art Director — NumLink 리워크에 타일 연결 squash&stretch+가벼운 햅틱(과잉 파티클 배제)+3테마 베이스를 #000 대신 워밍 다크(charcoal-brown #1C1917/zinc #09090B)+Mocha 중성톤으로 재정의(민트+네온 AI 슬롭 회피). Developer — 출시 빌드에 Unity 6.3 LTS Burst+IL2CPP(빌드 22%↓)+AdMob Next-Gen SDK 1.2.1(minSdk24) 마이그레이션 검토',
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
