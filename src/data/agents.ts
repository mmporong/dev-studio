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
    taskSummary: '**🔧 자율 칼끝 한 칸 전진(6/26)**: 어제는 Dependabot 의존성 머지, 오늘은 DevOps 발견을 받아 deploy-pages.yml `cancel-in-progress` true→false 자율 수정(연속 push 시 직전 배포 취소 결함·오늘 배포가 첫 검증). **🚨 두 P0 무인 미착수 유지**: NumLink 24일째 미커밋(6/2 이후·23→24 또 악화·작업트리 36파일), MeowBeat NoteSpawner dspTime 코어 미패치(qa_static.py 여전히 정확히 1 error·detector 닷새째 빨간불). 둘 다 게임 코드/대량 워킹트리라 사용자 세션 P0. #110(checkout v7 major) 여전히 열림·보류 유지. **메타**: 금요일·D+33.',
    lastUpdate: '6/26 금요일 스탠드업(🔧 어제는 의존성을 머지했고 오늘은 배포 파이프라인 자체의 숨은 결함을 고쳤다 — 두 P0는 또 못 건드렸지만 자율 영역이 의존성→배포 파이프라인으로 한 칸 더 깊어짐·NumLink 24일째·dspTime 여전히 1 error): **✅ [자율완료] deploy-pages.yml cancel-in-progress false 수정(배포 큐잉·오늘 배포가 검증)** + **🔴 P0[이월] MeowBeat NoteSpawner dspTime 코어 패치(사용자 세션·탐지기 닷새째 GREEN 가드 대기)** + **🚨 P0[이월] NumLink 24일 미커밋 봉인+검증툴 이식** + **🟡 P1 #110 changelog 확인 후 머지+Unity 6.5 2D 스프라이트 프로파일+LevelPlay** + **🟢 P2 주간 라이브옵스 이벤트·스크린샷 OCR 혜택문구·키네틱 타이포+햅틱**.',
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
    taskSummary: '**🎮 신규(라이브옵스·소셜·AI생성)**: 2026 모바일 IAP 매출 **84%**가 라이브옵스 운영 게임에서 발생(상위 퍼즐 월 **80~100개** 이벤트 터치포인트·3년 전 20개). 소셜 레이어(비동기 리더보드/길드챗) 적용 시 리텐션 **+22%**·상위 캐주얼 D7 리텐션 지속 하락 중. AI 레벨생성으로 개발시간 **-40%**·리텐션 **+30%**. 빠른 BPM일수록 조작속도 상승(적응형 오디오). **적용**: NumLink 주간 라이브옵스 이벤트 슬롯(7일 회전 비대칭 리더보드+친구 비교 UI·기존 레벨 재활용), MeowBeat은 "주간 곡 챌린지"로 변형.',
    lastUpdate: '6/26 금요일 리서치(금요일·D+33·IAP 매출 84% 라이브옵스 발생·상위 퍼즐 월 80~100개 이벤트·소셜 레이어 +22% 리텐션·AI 레벨생성 -40% 개발/+30% 리텐션·빠른 BPM 조작속도 상승 신규): **🟢 P2 NumLink 주간 라이브옵스 이벤트 슬롯("이번 주 최단 경로 챌린지"+친구 비교 UI·소셜 +22% 리텐션 방어)·MeowBeat 주간 곡 챌린지 변형**. P0 후. Sources: naavik.co·gamegrowthadvisor.com·deconstructoroffun.com·ceenaija.com·studiokrew.com.',
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
    taskSummary: '**💻 신규 1순위(Unity 6.5 정식)**: 2026.6 Unity 6.5 정식 출시 — on-tile 포스트프로세싱 전 플랫폼 지원(Vulkan/Metal 모바일 HDR 대역폭 절감)·Memory Profiler resident 정확도 향상+그래픽 메모리 분해+**2D 스프라이트 프로파일 모듈** 신설(NumLink/MeowBeat 2D라 직접 유효). **💻 신규 2순위(Google Play)**: targetSDK Android 15 강제 2026.6.30 미·영, 한국 **연말** 적용·Epic 합의로 수수료 **15/20%**·외부결제 허용. **💻 코어**: NoteSpawner dspTime 패치=사용자 세션 P0(탐지기 닷새째 GREEN 대기). 베이스라인 봉인 선행.',
    lastUpdate: '6/26 금요일 리서치(금요일·Unity 6.5 정식 출시 2026.6 — on-tile 포스트프로세싱/Memory Profiler 2D 스프라이트 모듈·Google Play targetSDK Android 15 강제 미·영 6/30 한국 연말/Epic 합의 수수료 15·20% 신규): **🔴 P0 NoteSpawner dspTime 코어 패치+4개 .cs 단일 커밋(사용자 세션·픽스 시 탐지기 자동 GREEN)** + **🟡 P1 봉인 후 Unity 6.5 2D 스프라이트 프로파일로 모바일 메모리 베이스라인 측정+LevelPlay 미디에이션**. Sources: unity.com·docs.unity3d.com·cgchannel.com·support.google.com·coda.co.',
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
    taskSummary: '**🔑 dspTime P0 무변화(코어 미수정)**: qa_static.py 오늘도 정확히 **`1 error`**(NoteSpawner.cs:126 Time.deltaTime 잔존·dspTime/PlayScheduled 0건·detector 닷새째 빨간불). "감지만 했고 안 고쳤다" 그대로. **✅ 가드는 건강**: known_bugs detector 전부 실재 함수 매핑(댕글링 0)·회귀 **2/2** 통과 — 픽스 기다리는 GREEN 대기. **🔍 NumLink 이중 무방비 무변화**: 검증툴 **0개**(Tools 부재)+단위테스트 **0개**(AutoGenTests 삭제 이월·AutoQATests 빈 폴더). 신규 확인: BoardDataTester.cs는 Editor 보조 도구일 뿐 자동 단위테스트 아님. **🚨 미해결 P0 1건**.',
    lastUpdate: '6/26 금요일 리서치(금요일·dspTime P0 무변화 — qa_static.py 여전히 정확히 1 error NoteSpawner.cs:126·detector 닷새째 빨간불·NumLink 무방비 무변화·BoardDataTester.cs는 Editor 도구일 뿐 자동 테스트 아님 신규 확인): **🔴 P0 NoteSpawner.cs:126 dspTime 교체로 코드 종결(detector 자동 GREEN)** + **🚨 P0 NumLink 검증툴 4종 이식+AutoQATests 빈 껍데기 정리(사용자 세션)**. Sources: qa_static.py 실행·known_bugs.json·NoteSpawner.cs·BoardDataTester.cs·git status 실측.',
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
    taskSummary: '**📦 신규 1순위(CPI 벤치마크)**: 2026 퍼즐 CPI iOS **$3.0**·Android **$2.0**(iOS 2~4배 비쌈)→UA 예산 Android 우선이 효율적. **📦 신규 2순위(스크린샷 OCR ASO)**: 애플이 첫 스크린샷 텍스트 OCR 색인화→검색 노출+혜택문구 추가 시 전환 **+10~20%**·게임 프리뷰영상 **+15~30%**. **📦 신규 3순위(출시 타이밍)**: UA 비용 Q1 최저·Q4 **20~40%** 급등·목요일 출시→주말 다운로드 피크. **적용**: 두 게임 Q4 회피·Q1/목요일 발매+첫 스크린샷 한글 혜택문구로 OCR 노출+전환 확보(무료·즉시).',
    lastUpdate: '6/26 금요일 리서치(금요일·2026 퍼즐 CPI iOS $3.0/Android $2.0 iOS 2~4배·첫 스크린샷 OCR 색인화+혜택문구 전환 +10~20%/프리뷰영상 +15~30%·UA Q1 최저 Q4 20~40% 급등 목요일 출시 주말 피크 신규): **🟢 P2 두 게임 출시 Q4 회피·Q1/목요일 발매+첫 스크린샷 한글 혜택문구("3분 두뇌훈련"·"고양이와 박자 맞추기") ASO 1순위**. Sources: foxdata.com·gamegrowthadvisor.com·asoworld.com·apptweak.com·screenfast.app·fanstudio.co.uk.',
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
    taskSummary: '**🛡 ✅ CI 안정(6/26)**: agent-office gh run 최근 **6건** 전부 success·실패 0. **🔧 신규 결함 발견·자율 수정**: deploy-pages.yml(16행) `concurrency.cancel-in-progress: true` → 6/24 #111→docs 9분 간격 연속 push 실사례처럼 진행 중 배포 취소·최신 커밋 미배포 리스크 → GitHub 공식 권장(production 큐잉) **false**로 오늘 자율 1줄 수정(오늘 배포가 첫 검증). **🛡 열린 PR**: #110(checkout v7 major·CLEAN/MERGEABLE) 6/25 이어 여전히 열림 — major라 보류 유지(다음 사용자 세션 changelog 확인 후 머지).',
    lastUpdate: '6/26 금요일 리서치(금요일·CI 6건 success/실패 0·🔧 deploy-pages.yml cancel-in-progress true 연속 push 시 직전 배포 취소 결함 발견→false 자율 수정·#110 checkout v7 major 여전히 열림 보류 유지 신규): **✅ [자율완료] cancel-in-progress false 수정(production 배포 큐잉·오늘 배포가 검증) + 🟡 P1 #110 changelog 확인 후 머지**. Sources: gh run/pr 실측·GitHub Changelog concurrency(2026-05)·OneUptime(2026-01)·GitHub Pages 공식 문서.',
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
    taskSummary: '**🎨 신규 1순위(마이크로인터랙션+햅틱)**: 2026 마이크로인터랙션이 "장식→지시(instruction)"로 전환·햅틱 동반 시 30일 리텐션 **+23%**. **🎨 신규 2순위(가변폰트·키네틱 타이포)**: 가변폰트/키네틱 타이포 표준화·단일 파일로 화면 크기별 반응형 가독성 확보. **🎨 신규 3순위(글래스모피즘 절제)**: 글래스모피즘은 토대 아닌 액센트만(Liquid Glass식 고대비 유지)·저사양 GPU 블러 프레임드롭 주의. **적용**: NumLink 결합 성공 시 키네틱 타이포(zoom+morph)+햅틱 1펄스·배경만 글래스 액센트, MeowBeat 판정 햅틱 차등(Perfect=강/Good=약)·노트 플랫 고대비.',
    lastUpdate: '6/26 금요일 리서치(금요일·마이크로인터랙션 장식→지시 전환 햅틱 동반 30일 리텐션 +23%·가변폰트/키네틱 타이포 표준화·글래스모피즘 토대 아닌 액센트만 저사양 블러 프레임드롭 주의 신규): **🟢 P2 NumLink 숫자 결합 성공 시 키네틱 타이포+햅틱 1펄스·배경만 글래스 액센트(고대비 유지)·MeowBeat 판정 햅틱 강도 차등(Perfect=강/Good=약)·노트 플랫 고대비(블러 금지)**. Sources: dev.to·designrush.com·loungelizard.com·designmonks.co·ixdf.org·timgraf.com.',
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
  '✅ [자율완료·자율 칼끝 한 칸 전진] agent-office deploy-pages.yml cancel-in-progress true→false 수정 — DevOps 신규 발견: 16행 concurrency.cancel-in-progress가 true로 걸려 6/24 #111 머지(19:06)→docs 커밋(19:15) 9분 간격 연속 push 같은 실사례에서 진행 중 배포가 취소돼 최신 커밋이 미배포될 수 있는 구조적 결함이었다. GitHub 공식/2026 모범사례는 production 배포(Pages 포함) 큐잉(false)을 권장 → 회의 중 false로 1줄 자율 수정. 오늘 이 회의록 배포가 곧 첫 검증. 어제 "Dependabot 의존성 머지"에서 "배포 파이프라인 자체 결함 수정"으로 자율 영역 한 칸 전진',
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — "감지만 했고 안 고쳤다" 종결. 6/21 탐지기는 만들었으나 코어 미수정이라 qa_static.py가 오늘도 정확히 `1 error`(126행 elapsedTime += Time.deltaTime·dspTime/PlayScheduled 0건)를 외친다. songPosition = (float)(AudioSettings.dspTime - dspSongStartTime)로 교체+BGM은 AudioSource.PlayScheduled로 시작 고정+Android 오디오 지연 캘리브레이션 오프셋. 픽스하는 순간 6/21에 만든 탐지기가 자동 GREEN으로 전환돼 픽스를 증명한다(탐지기 완성 기준 5일째·발견 기준 10일째). 4개 미커밋 .cs(SongData·GameManager·SongManager·OptionManager)도 단일 커밋 정리',
  '🚨 P0 [이월·게임 코드·사용자 세션] NumLink 24일 미커밋 봉인 + 검증툴 이식 — 이중 무방비 해소. ① .gitignore에 .omc/·Screenshots/·_Recovery/ 패턴 먼저 추가(Layer Lab 에셋은 트래킹) → ② 단일 스냅샷으로 24일 공백 봉인(6/2 이후·23→24 악화). 병행해 QA 발견 대응: NumLink/Tools에 검증툴 4종(unity_validate.py·qa_static.py 등) 이식(현재 0개), AutoQATests 빈 껍데기 정리(meta untracked 커밋 누락 리스크), AutoGenTests 4파일 삭제 확정 여부는 사용자 확인 선행(git restore vs 삭제). BoardDataTester.cs는 Editor 보조 도구라 단위테스트 대체 불가 — 봉인만으로는 검증툴/테스트 0개가 안 풀린다',
  '🟡 P1 [신규/이월]: DevOps — agent-office #110(actions/checkout v7 major·CLEAN/MERGEABLE) changelog 확인 후 다음 사용자 세션에서 머지(major 신중 보류 유지). Developer — 베이스라인 봉인 후 Unity 6.5 2D 스프라이트 프로파일 모듈로 두 게임 모바일 메모리 베이스라인 측정+광고 LevelPlay 인앱비딩 단일 미디에이션 표준화(시한부 매출 부채). targetSDK Android 15는 한국 연말 적용(미·영 6/30)·Epic 합의로 수수료 15/20%·외부결제 허용으로 수익화 전제 변경',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Game Designer — NumLink 주간 라이브옵스 이벤트 슬롯 1개(7일 회전 비대칭 리더보드 "이번 주 최단 경로 챌린지"+친구 비교 UI·기존 레벨 재활용·소셜 +22% 리텐션 방어)·MeowBeat은 "주간 곡 챌린지" 변형. Content Writer — 두 게임 출시 Q4 회피·Q1/목요일 발매+첫 스크린샷 한글 혜택문구("3분 두뇌훈련"·"고양이와 박자 맞추기")로 Apple OCR 검색 노출+전환 +10~20%. Art Director — NumLink 숫자 결합 성공 시 키네틱 타이포(zoom+morph)+햅틱 1펄스·배경만 글래스 액센트(고대비 유지)·MeowBeat 판정 햅틱 강도 차등(Perfect=강/Good=약)·노트 플랫 고대비(블러 금지)',
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
