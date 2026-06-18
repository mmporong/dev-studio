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
    taskSummary: '**🛡️ 안전망 발견·dependabot 종결(6/19)**: NumLink 17일째 미커밋(6/2 이후·+1일 악화)·6/18 결정한 .gitignore 정비는 .gstack/ 한 줄뿐 미완(노이즈 14건 잔존)·MeowBeat NoteSpawner dspTime 4일째 미착수·DOTween→PrimeTween PoC 미착수. **✅ DevOps가 #104 회의 중 자율 머지·dependabot 4PR 전수 종결(HEAD 37b261c)**. **핵심**: QA가 NumLink 안전망 이중 붕괴(테스트 4파일 worktree 삭제+검증툴 미이식) 발견 → P0 순서가 커밋보다 안전망 복구 우선으로 변경. **메타**: 금요일·D+26 — 같은 미커밋을 매일 한 겹씩 더 깊이 벗겨낸 날.',
    lastUpdate: '6/19 금요일 스탠드업(🛡️ 안전망이 두 번 무너진 걸 발견·NumLink 미커밋을 테스트 눈으로 다시 열자 단위테스트 4파일 worktree 삭제(코드는 생존)+검증툴 미이식 이중 무방비·DevOps #104 자율 머지로 dependabot 4PR 전수 종결): **✅ [실행완료] dependabot #104 자율 머지(HEAD 37b261c)** + **🚨 P0 NumLink 안전망 복구(테스트 4파일 복원 판단→검증툴 3종 이식→.gitignore 4줄→선별 커밋·사용자 세션)** + **🔴 P0[이월·4일째] MeowBeat NoteSpawner dspTime 전환+.cs 4종 백업** + **🟡 P1 PrimeTween PoC+MeowBeat Adaptive Performance** + **🟢 P2 햅틱+OKLCH·Continue 보상형광고·앱 아이콘 A/B**.',
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
    taskSummary: '**🎮 신규(리텐션·수익화 심리)**: 캐주얼 D30 리텐션 **4% 미만 붕괴**(FTUE 5~15분 첫 가치가 최대 레버). 퍼즐 신규 IAP는 서브장르 격전 — Sort $279M·Screw $177M 2년새 2배·블록퍼즐 YoY 10배 $213M·단순 코어+깊은 진행 조합. **레벨 실패 직후 Continue 보상형광고 opt-in 15~30%**로 손실회피 심리 활용·churn 감소+광고매출 동시 견인. **적용**: NumLink 실패 다이얼로그에 Continue 프롬프트 버튼 1개 추가(신규 UI 0)+FTUE 1~12레벨 이탈률 1줄 로깅.',
    lastUpdate: '6/19 금요일 리서치(금요일·D+26·캐주얼 D30 4% 미만 붕괴·FTUE 5~15분 첫가치·퍼즐 서브장르 Sort $279M/블록 YoY 10배·레벨 실패 직후 Continue 보상형광고 opt-in 15~30% 신규): **🟢 P2 NumLink 레벨 실패/막힘 직후 Continue 보상형광고 단일 프롬프트(기존 실패 다이얼로그 버튼 1개·신규 UI 0)+FTUE 1~12레벨 이탈률 1줄 로깅으로 튜토리얼 누수 데이터 확보**. P0 후. Sources: GameAnalytics D30·Sensor Tower 퍼즐 서브장르·Unity/Pushwoosh 보상형광고.',
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
    taskSummary: '**💻 신규(발열·빌드)**: Unity 6.2부터 **Adaptive Performance 빌트인 모듈화**(패키지 설치 0·ADPF로 Android12+ 발열/배터리 throttling 자동대응)→리듬게임 장시간 프레임 안정화 직결. IL2CPP High stripping 코드 **30~50% 절감**(link.xml 필수). UI Toolkit 런타임 네이티브 SVG(6.3). **💻 실측**: MeowBeat 미커밋 .cs 4종은 다국어(한/영)+볼륨 세이브 UI(GameManager+59·OptionManager+42)·타이밍 코어 미접촉. **메시지**: MeowBeat Adaptive Performance 도입+NumLink PrimeTween PoC 지속.',
    lastUpdate: '6/19 금요일 리서치(금요일·Unity 6.2 Adaptive Performance 빌트인 모듈화 패키지 0 ADPF 발열 throttling 자동대응·IL2CPP High stripping 30~50% 절감·UI Toolkit 런타임 SVG 6.3·MeowBeat 미커밋 .cs 4종은 다국어+볼륨 세이브 신규): **🟡 P1 MeowBeat Adaptive Performance 빌트인 모듈 도입 검토(thermal API 장시간 세션 프레임 보호·dspTime과 병행 타이밍 2겹 강화)+NumLink DOTween→PrimeTween PoC 지속**. Sources: Unity Manual Adaptive Performance·IL2CPP 빌드 가이드·diff --stat 실측.',
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
    taskSummary: '**🔑 핵심 발견(이중 무방비)**: NumLink Domain 단위테스트 4파일(AutoGenTests.cs/.meta/.asmdef/.asmdef.meta)이 worktree 삭제(` D`·코드는 생존·테스트만 증발)+_ProjectTemplate 검증툴 3종 미이식(정적QA 0%)→회귀 감지 수단 동시 0. 검증 대상 Provider.cs(DailyPuzzle/Endless)는 멀쩡. **🚨 미해결 버그 7건**: MeowBeat known_bugs 6건(에러4·경고2)+NoteSpawner deltaTime P0 1건(4일째 박제·리듬 판정 드리프트). **권고**: 테스트 4파일 복원 판단→검증툴 이식으로 안전망 최소 1장 복구.',
    lastUpdate: '6/19 금요일 리서치(금요일·🔑 NumLink 안전망 이중 붕괴 발견 — 단위테스트 4파일 worktree 삭제 코드는 생존·검증툴 3종 미이식 정적QA 0% 회귀 감지 동시 0·미해결 버그 7건 신규): **🚨 [실행 권고·P0 순서 변경] NumLink AutoGenTests 4파일 git checkout 복원 판단(삭제 의도 사용자 확인 선행)→_ProjectTemplate 검증툴 3종 이식(씬 경로 갱신)→안전망 최소 1장 복구를 커밋보다 우선**. Sources: git status --short 실측·AutoGenTests 내용·known_bugs.json.',
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
    taskSummary: '**📦 신규 1순위(앱 아이콘 A/B)**: Google Play **8~12% 설치 리프트**(iOS 3~6%·무명IP는 단일글자형+채도 단색배경 승률 최고). **📦 신규 2순위(In-App Events)**: FOMO/독점성 설계 시 전환율 **30~50%↑**·재참여 +18%·미출시도 5슬롯 선예약. **📦 신규 3순위(인플루언서)**: 마이크로 ROI **6.9배**·참여율 2~5% 크리에이터 우선·14일 30~50명 동시 활성화. **적용**: NumLink/MeowBeat 출시 직후 앱 아이콘 A/B 1순위(N/고양이 실루엣+채도배경)+사전등록에 In-App Events 슬롯 선설계.',
    lastUpdate: '6/19 금요일 리서치(금요일·앱 아이콘 A/B Google Play 8~12% iOS 2배·무명IP 단일글자형+채도배경·In-App Events FOMO 전환 30~50%↑ 미출시 5슬롯·마이크로 인플루언서 ROI 6.9배 신규): **🟢 P2 NumLink/MeowBeat 출시 직후 앱 아이콘 A/B 1순위 ASO(N/고양이 실루엣+채도 단색배경 대조·Google Play 우선)+사전등록 페이지 In-App Events 슬롯 선설계(FOMO 30~50%)**. P0 후. Sources: Apple In-App Events·StoreMaven/SplitMetrics 아이콘 A/B·인플루언서 ROI 벤치마크.',
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
    taskSummary: '**🛡 ✅ [실행완료] dependabot #104(npm-major 5건) 회의 중 자율 머지·6/17~6/19 4PR 전수 종결(HEAD 37b261c)** — 레포가 flat config+Node22라 ESLint10 최대 breaking 2종 무력·lint는 머지 게이트 아님(statusCheckRollup 비어있음)·변경 2파일 CLEAN. **🛡 ✅ CI**: gh run 최근 5건 success. **🛡 신규(인프라)**: Runner Scale Set Go클라이언트 프리뷰·ARC 0.14.0 GA·self-hosted runner **2.329.0+ 30일 내 강제**(우리는 호스티드라 무관)·Unity 모바일 CI는 Codemagic/Fastlane이 Cloud Build 대안.',
    lastUpdate: '6/19 금요일 리서치(금요일·#104 npm-major 5건 회의 중 자율 머지로 dependabot 4PR 전수 종결 HEAD 37b261c·flat config+Node22라 ESLint10 breaking 무력·Runner Scale Set Go클라이언트·self-hosted 2.329 강제·Codemagic/Fastlane 신규): **✅ [실행완료] dependabot #104 자율 머지(6/13 16일만의 첫 머지로 열린 정리를 #102·#99·#103·#104로 6일만에 전수 종결·큐 비움)**. Sources: gh run/pr 실측·github.blog 2026·codemagic.io.',
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
    taskSummary: '**🎨 신규 1순위(햅틱 레이어링)**: 2026 마이크로인터랙션은 iOS **3강도(light/medium/heavy)×3시맨틱(success/warning/error)** 매핑이 표준. **🎨 신규 2순위(OKLCH 색맹)**: L채널=인지 명도 직결→동일 L 모든 색조 일관 대비·11스텝+APCA가 색맹 대응 신표준. **🎨 신규 3순위(iOS26 아이콘)**: Liquid Glass 네이티브화+squircle 통일·상위100앱 40% 그라데이션 배경·캐주얼 마스코트 라이트3D+표정 5~8종. **적용**: NumLink 3종 햅틱(연결=medium·완성=success·막다른길=warning)+OKLCH 11스텝 팔레트로 색맹 자동 보장.',
    lastUpdate: '6/19 금요일 리서치(금요일·햅틱 레이어링 3강도×3시맨틱·OKLCH 색상계 색맹 대응 동일 L 일관 대비·iOS26 Liquid Glass squircle 아이콘 상위100앱 40% 그라데이션·캐주얼 마스코트 라이트3D+표정 5~8종 신규): **🟢 P2 NumLink Layer Lab 리스킨에 3종 햅틱(연결 성공 medium·라인 완성 success·막다른 길 warning) 버튼 매핑+OKLCH 11스텝 팔레트 재정의로 색맹 명도 대비 자동 보장(Barrier Layer 병행)·MeowBeat 고양이 라이트3D+표정 5~8종 마스코트화**. P0 후. Sources: Muzli/DEV 햅틱·MacRumors iOS26·66colorful/LogRocket OKLCH·AAAGameArt 마스코트.',
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
  '✅ [실행완료·자체 레포 자율 실행 5번째·dependabot 큐 완전 비움] dependabot #104(npm-major 5건: eslint 10·eslint-plugin-react-hooks 7·@types/cheerio 1.0 등) 회의 중 자율 머지 — 레포가 이미 flat config(eslint.config.js)+Node22라 ESLint 10 최대 breaking 2종(eslintrc 제거·Node18 중단)이 무력하고, deploy-pages는 vite build만 돌려 eslint가 머지 게이트가 아니며(statusCheckRollup 비어있음), 변경이 package.json/lock 2파일·CLEAN이라 배포를 깨뜨릴 수 없음을 확인하고 머지(HEAD 37b261c). 6/13 16일 만의 첫 머지로 열린 dependabot 정리가 #102·#99·#103(6/18)·#104(6/19)로 6일 만에 4PR 전수 종결',
  '🚨 P0 [게임 코드·사용자 세션·순서 변경] NumLink 안전망 복구를 커밋보다 먼저 — QA 신규 발견: Domain 단위테스트 4파일(AutoGenTests.cs/.meta/.asmdef/.asmdef.meta)이 worktree 삭제( D 상태·코드는 생존·테스트만 증발)+_ProjectTemplate 검증툴 3종 미이식(정적QA 0%)이라 회귀 감지 수단이 동시에 0인 이중 무방비. ① 삭제가 사용자 의도였는지 확인 후 git checkout -- Assets/Tests/Editor/로 복원 → ② 검증툴 3종 이식(씬 경로 상수 갱신) → ③ .gitignore에 .omc/·.claude/·state/·Screenshots/ 4줄 추가(노이즈 14건 제거) → ④ Layer Lab 리스킨 실작업분 선별 커밋. 17일째 미커밋이지만 핵심은 백업이 아니라 안전망 복구',
  '🔴 P0 [이월·4일째·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환(dspTime+PlayScheduled+판정 윈도우)+미커밋 .cs 4종(GameManager/OptionManager/SongManager/SongData) WIP 백업 — deltaTime 누적이 6/16·17·18·19 4일째 파일 미수정 채 박제·프레임 드랍 시 노트 타이밍 드리프트로 리듬 판정 직접 흔드는 출시 차단급. .cs 4종은 다국어+볼륨 세이브라 타이밍 코어 미접촉·P0와 독립 진행 가능하나 약 2개월 미커밋 컨텍스트 유실 위험',
  '🟡 P1 NumLink DOTween→PrimeTween PoC + MeowBeat Adaptive Performance 빌트인 모듈 검토 — PrimeTween은 NumLink가 DOTween을 게임플레이 9파일 실사용 중이라 범위 명확(ComboPopupUI/EffectManager 반복 트윈부터·GC Alloc before/after). 신규로 Unity 6.2 Adaptive Performance가 빌트인 모듈화(패키지 추가 0)돼 ADPF thermal API로 Android12+ 발열 throttling 자동 대응→MeowBeat 장시간 세션 프레임 보호·dspTime과 병행 시 타이밍 안정성 2겹',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Art Director — NumLink Layer Lab 리스킨에 3종 햅틱(연결 성공 medium·라인 완성 success·막다른 길 warning) 버튼 매핑+OKLCH 11스텝 팔레트 재정의로 색맹 모드 명도 대비 자동 보장(Barrier Layer 병행)·MeowBeat 고양이 라이트3D+표정 5~8종 마스코트화. Game Designer — NumLink 레벨 실패/막힘 직후 Continue 보상형광고 단일 프롬프트(기존 실패 다이얼로그 버튼 1개·신규 UI 0·opt-in 15~30%)+FTUE 1~12레벨 이탈률 1줄 로깅. Content Writer — NumLink/MeowBeat 출시 직후 앱 아이콘 A/B(Google Play 8~12%·무명IP 단일글자형+채도배경)+사전등록 페이지 In-App Events 슬롯 선설계(FOMO 30~50%)',
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
