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
    taskSummary: '**🎉 게임 코드 단절 31일→0일 돌파**: NumLink가 어제(5/30 밤~5/31 새벽) `feature/ugui-layerlab` 브랜치에서 UGUI 전환 **MS0~MS4 6개 마일스톤 커밋**(최신 01bc793 .cs 포함) = 마지막 게임코드 4/29 기준 31일 단절을 **0일로 종결**·한 달+ 코드 흐름 위기 해소. **🆕 단 리스크 전이(단절→유실)**: 이 새 브랜치 `feature/ugui-layerlab`가 **upstream 미설정+origin에 미존재 = push 불가·어제 6커밋 백업 0**(ahead 측정조차 불가)·미커밋 30건(modified 8+deleted 4+untracked 18) 잔존. **MeowBeat**: `song-ownership-migration` **49일째 단절**(4/12 마지막·신규 0)·**upstream 미설정·origin/master 대비 72커밋·meowbeat/main 25커밋 적체**·미커밋 36건 = 유실 위험 여전. **NumLink Tools 5회째 이월**(폴더 부재·MeowBeat Tools 18개 복사로 즉시 해소 가능)·AutoGenTests 4파일 deleted 미복구. **agent-office** 4d26e11 origin/main 동기·미푸시 0·DailyStandup Running. 오늘 = 일요일·1개월 임계 D+7·실행 시작됐으나 백업 0이 핵심.',
    lastUpdate: '5/31 일요일 스탠드업(🎉 NumLink 코드 단절 31일→0일 돌파·어제 UGUI MS0~MS4 6커밋·🆕 단 새 브랜치 upstream 미설정으로 6커밋 백업 0·MeowBeat 49일+72커밋 적체·NumLink Tools 5회째 이월): **🚨 P0 NumLink feature/ugui-layerlab upstream 설정+푸시**(어제 6커밋 백업 0 차단·신규 최우선·Orchestrator·QA·DevOps 3인 일치) + **🚨 P0 MeowBeat 브랜치 upstream 설정+푸시**(49일·72커밋 적체 유실 차단·이월) + **🚨 P0 NumLink Tools 부트스트랩+AutoGenTests git restore**(회귀 안전망 0·UGUI 변경 중·5회째 이월) + **🔧 P1 Unity 6.5 대비 GetInstanceID 전수 검색** + **🔍 P2 윈스트릭·레저 누메랄+더블코딩·검색의도 콘텐츠**. 메타: 실행 시작됐으니 이번엔 push -u 1줄이 회의 가치 결정.',
    priority: 'high',
    energy: 86,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🚀 시장 신규 1순위**: **하이브리드캐주얼 퍼즐 매출이 전년比 +429% 폭증·IAP:광고 수익 50:50 비율이 표준** = NumLink 같은 룰 기반 퍼즐의 수익화 잠재력·순수 광고 모델 탈피 시사. **🚀 신규 2순위**: **윈스트릭(연속 클리어) 메커닉이 상위 퍼즐 게임 절반이 도입** — Royal Kingdom은 "스트릭 끊기기 직전 $0.99 구제(rescue) 결제" 전환을 핵심 수익 레버로·"연속 성공을 잃기 싫은 심리" 자극. **🚀 3순위**: **BeatSync(Melodic Games) AR 리듬게임이 AI 적응난이도로 DAU +35%·프리미엄 $9.99** = 리듬 장르에 RL 기반 난이도 조절 부상. **GDD 통합 메시지**: NumLink "윈스트릭+데일리 챌린지"(연속 클리어 N회 보너스+스트릭 끊김 직전 1회 구제 보상)로 습관 형성·리텐션 강화 — 타이머·별점 단발 클리어 구조에 "상실 회피" 스트릭 레이어 적합.',
    lastUpdate: '5/31 일요일 리서치(일요일·1개월 임계 D+7·하이브리드캐주얼 퍼즐 +429%·윈스트릭 메커닉·BeatSync AR 신규): **🔥 P2 NumLink "윈스트릭+데일리 챌린지" 도입**(연속 클리어 N회 달성 시 보너스(추가 힌트·코인)·스트릭 끊김 직전 1회 구제 보상으로 습관 형성·리텐션 강화·NumLink 단발 클리어 구조에 "연속 성공 상실 회피" 레이어 적합·RL 적응난이도는 후순위) + **P2 IAP:광고 50:50 수익화 설계 메모** + **P2 게임 레포 백업 확보 후 착수**. Sources: maf.ad·gamigion.com·naavik.co(Royal Match)·udonis.co(Royal Kingdom)·arxiv 2509.23796·verifiedmarketreports.com.',
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
    taskSummary: '**🚀 기술 신규 1순위**: **Unity 6.4 정식 출시(2026-03) — ECS가 Core 패키지로 승격·`GetInstanceID()`→`GetEntityId()` 전환 시작**(InstanceID API 점진 디프리케이트). **🚀 신규 2순위**: **Unity 6.5 베타 — 최소 Android API 26(Android 8.0) 상향 + EntityId 4바이트→8바이트 확대** = InstanceID를 int로 캐싱/직렬화하는 코드가 있으면 long 전환 필요·없으면 안전. **🚀 신규 3순위**: **Unity 6.5 — Android x86_64 지원 제거·레거시 RenderGraph 컴파일러 삭제** = 모바일 빌드 타깃·렌더 파이프라인 점검 필요. 모두 이전 제외 토픽(CoreCLR 6.7/6.8·.NET10·URP 2026·6.3 LTS)과 겹치지 않는 신규. **NumLink/MeowBeat 6.5 업그레이드 시 실질 기술 부채** = 선제 파악 필요.',
    lastUpdate: '5/31 일요일 리서치(일요일·1개월 임계 D+7·Unity 6.4 정식 ECS Core·6.5 EntityId 8바이트·Android API 26 상향 신규): **🔧 P1 NumLink/MeowBeat 코드에서 `GetInstanceID()` 호출부 전수 검색해 `GetEntityId()` 마이그레이션 대상 목록 작성**(EntityId 8바이트화 대비 int 캐싱/직렬화 코드 점검·있으면 long 전환) + **P2 최소 Android API 26 상향·x86_64 제거 빌드 타깃 영향 모니터링** + **P2 레거시 RenderGraph 삭제 대비 렌더 파이프라인 점검**. 6.5 업그레이드 전 선제 파악으로 기술 부채 차단. Sources: Unity 6.4 릴리스 노트·Unity 6.5 베타 변경사항.',
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
    taskSummary: '**🚨 최대 품질 리스크**: **NumLink가 자동 검증 인프라(Tools)·테스트 코드(AutoGenTests) 둘 다 없어 회귀 안전망이 완전히 0인 상태에서 UGUI/LayerLab 대규모 변경이 진행 중** = 검증 없는 씬 손상 누적 위험. **NumLink 테스트**: `Tools` 폴더 여전 부재(5회째 이월)·unity_validate.py/qa_static.py/run_regression.py 미존재로 자동 회귀 검증 0건·AutoGenTests 4파일(asmdef·meta·cs·meta) git status deleted 미복구(브랜치 feature/ugui-layerlab). **MeowBeat 버그**: 미해결 5건(총 6종 중 auto_fix 1종 YAML_INDENT_M_FATHER 제외)·가장 심각=**RT_SIZE_ZERO(severity:error)** — VerticalLayoutGroup ChildAlignment+sizeDelta=0으로 RectTransform width/height 0·자동 수정 불가 수동 에스컬레이션(이전 6종·미해결 5종서 변동 없음). **MeowBeat test_fixtures 부재** = run_regression.py 회귀 픽스처 없어 실동작 불가 가능성·별도 점검 권장.',
    lastUpdate: '5/31 일요일 리서치(일요일·1개월 임계 D+7·🚨 NumLink 회귀 안전망 0인 채 UGUI 대규모 변경 진행 = 최대 리스크): **🚨 P0 NumLink에 `C:/Unity/_ProjectTemplate/Tools/` 즉시 복사+씬 경로 상수 갱신**(unity_validate.py 0 error baseline 확보) + **🚨 P0 deleted된 AutoGenTests 4파일 `git restore` 복구 여부 이번 세션 명시 결정**(의도된 삭제 아니면 복구·파일 4개만 타깃) + **P1 MeowBeat test_fixtures 부재 점검**(회귀 픽스처 실동작 확인). Sources: known_bugs.json·git status·Tools 폴더 실측.',
    priority: 'high',
    energy: 70,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**📦 콘텐츠 1순위**: **구글플레이가 검색의도별 커스텀 스토어 등록정보 추천 강화** — 예: "sudoku" 검색자에게 퍼즐게임 맞춤 페이지 노출(I/O 2026 솔로 인디 퍼즐 개발자 리포트)·검색 의도에 맞춘 카피·스크린샷 세트가 전환 핵심. **📦 2순위**: **마이크로 인플루언서(5만~30만 팔로워)가 메가 대비 ROAS 2~3배·평균 참여율 4.84%** = 저예산 UA에 마이크로 다수 기용이 효율적. **📦 3순위**: **TikTok UGC를 비포스팅(non-posting) 제작하면 인피드 광고 대비 40~60% 저렴·CPI 최저 채널** = 실제 게재 없이 광고 소재로만 UGC 제작이 비용 효율 최강. **적용 메시지**: NumLink 검색의도형 문구("출근길 5분 숫자 퍼즐")를 스토어 단문+마이크로 UGC 스크립트에 동일 삽입해 의도 추천 노출+저비용 CPI 동시 공략.',
    lastUpdate: '5/31 일요일 리서치(일요일·구글플레이 검색의도 추천·마이크로 인플루언서 ROAS 2~3배·TikTok UGC 비포스팅 40~60% 저렴 신규): **P2 NumLink용 검색의도 매칭 콘텐츠 1세트 제작**("출근길 머리 풀리는 숫자 퍼즐"·"자기 전 5분 차분한 두뇌게임" 의도형 문구를 스토어 단문 설명+마이크로 인플루언서 UGC 스크립트(비포스팅 제작·14일 플라이트 30~50명)에 동일 삽입) + **P2 구글플레이 검색의도 추천 노출+저비용 CPI 동시 공략** + **P2 출시 체크리스트에 캡션 리라이트 반영**. Sources: cas.ai ASO 2026·dev.to 구글플레이 I/O 2026·Tomoson·insense.pro·megadigital.ai.',
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
    taskSummary: '**CI/CD 상태**: **NumLink/MeowBeat 둘 다 `.github/workflows` 부재**(Glob 0건) = Unity 빌드 CI 전무·이전 지적 미해결 이월. **🚨 MeowBeat 원격 적체 심각**: HEAD `feature/song-ownership-migration`이 **upstream 미설정("no upstream configured")으로 push 원천 불가**·origin/master 대비 **72커밋**·meowbeat/main 25커밋·origin/feature 6커밋 미푸시 = 로컬에만 갇혀 백업 0·유실 위험. **agent-office 정상**: deploy-pages.yml(push→main)+weekly-insights.yml 존재·모든 액션 커밋 SHA 핀 고정(공급망 안전)·최근 4d26e11(5/30)·dfd85af(5/29) 일일 배포 정상·`.omc/project-memory.json` 1건 미커밋. **인프라 트렌드**: **Buildalon이 GitHub Actions 기반 Unity 빌드에 무료 오픈소스 액션+빌드 머신으로 빠른 증분(incremental) 빌드 제공**·2026 초 부상(GameCI 대비 빌드 시간 단축).',
    lastUpdate: '5/31 일요일 리서치(일요일·게임 레포 CI 부재 지속·MeowBeat upstream 미설정 72커밋 적체·agent-office 정상·Buildalon 증분 빌드 신규): **🚨 P0 MeowBeat `git push -u origin feature/song-ownership-migration` 단 1회로 upstream 설정+72커밋 적체 즉시 해소**(백업 0·유실 최고위험·5분 내 완료) + **P0 NumLink feature/ugui-layerlab도 동일 push -u 백업**(어제 6커밋) + **P2 CI 신규 구축(GameCI/Buildalon)은 백업 확보 후 단계**. agent-office 배포 파이프라인 정상·미푸시 0. Sources: game-ci/unity-builder·dev.to Unity GHA·Buildalon.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **키네틱 타이포그래피 부상 — GSAP 무료화(Webflow 인수)로 숫자·라벨이 탭에 반응**·**레저 누메랄(ledger numeral·원장체 등폭 숫자)이 퍼즐 UI 표준**(NumLink 숫자에 직접 적용 가능). **🎨 2순위**: **안티-AI 브루탈리즘 고대비 컬러 — 전기오렌지+딥블루·네온옐로우+딥퍼플 등 "용감한" 비대칭 조합이 AI 슬롭 차별화 무기**(전역 규칙 "민트+다크/AI 전형 디자인 금지"와 정합). **🎨 3순위**: **더블코딩 접근성 의무화 — 색 단독 의존 금지·색+아이콘·아웃라인·패턴 동시 인코딩이 2026 인클루시브 핵심**(리듬게임 판정 색 의존 탈피·색맹 대응). **연결 적용**: NumLink 숫자 타일 레저 누메랄+키네틱 바운스(100~200ms)+동일 숫자 고유 아웃라인·패턴(더블코딩)·딥블루 배경+전기오렌지 강조 1색 고대비 시그니처.',
    lastUpdate: '5/31 일요일 리서치(일요일·키네틱 타이포+레저 누메랄·안티-AI 브루탈리즘 고대비·더블코딩 접근성 신규): **🔥 P2 NumLink 숫자 타일 "레저 누메랄(등폭 숫자체)+키네틱 반응" 적용**(같은 숫자 연결 시 숫자 살짝 튀어오르고(bounce 100~200ms)·동일 숫자는 색 외 고유 아웃라인·도트 패턴 부여해 색맹도 구분=더블코딩) + **P2 딥블루 배경+전기오렌지 강조 1색 고대비 시그니처**(AI 전형 민트+그라데이션 회피·동적 Instantiate 금지 준수) + **P2 MeowBeat 노트 판정 더블코딩 적용 검토**. Sources: Tubik UI 2026·Lummi 키네틱 타이포·Fireart 브루탈리즘·Recursion 컬러·Filament Games 색맹 접근성.',
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
  '🎉 [돌파] NumLink 게임 코드 단절 31일→0일 종결: 어제(5/30 밤~5/31 새벽) `feature/ugui-layerlab` 브랜치에서 UGUI 전환 MS0~MS4 6개 마일스톤 커밋(최신 01bc793 .cs 포함). 마지막 게임코드 4/29 기준 31일 단절을 0일로 종결 = 한 달+ 결정 마비·코드 흐름 위기가 드디어 코드 레벨에서 깨짐. **분석 단계 종료·실행 시작 신호 — 이번 회의의 가장 큰 긍정 전환점**',
  '🚨 P0 [NumLink feature/ugui-layerlab upstream 설정+푸시 · 어제 6커밋 백업 0 차단 · 신규 최우선]: 어제 6커밋으로 단절을 돌파했으나 새 브랜치가 upstream 미설정+origin 미존재 = push 불가·백업 0(CI 부재). 실행이 시작된 지금 활발히 작업할수록 유실 위험 급증. `git push -u origin feature/ugui-layerlab` 단 1회로 백업 확보. Orchestrator·QA·DevOps 3인 일치 지적. **(새벽 실행이므로 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [MeowBeat 브랜치 upstream 설정+푸시 · 49일 단절·72커밋 적체 유실 차단 · 이월]: MeowBeat `feature/song-ownership-migration` 49일째 단절·upstream 미설정으로 push 원천 불가·origin/master 대비 72커밋·meowbeat/main 25커밋·미커밋 36파일이 로컬에 갇혀 백업 0. `git push -u origin feature/song-ownership-migration` 1회로 upstream+적체 즉시 해소(5분). 5/30 P0 이월 건',
  '🚨 P0 [NumLink Tools 부트스트랩+AutoGenTests git restore · 회귀 안전망 0·UGUI 변경 중 · 5회째 이월]: NumLink는 Tools·AutoGenTests 둘 다 없어 회귀 안전망 0인데 UGUI/LayerLab 대규모 변경 진행 중 = 검증 없는 씬 손상 누적 위험(QA 최대 리스크). `C:/Unity/_ProjectTemplate/Tools/`(또는 MeowBeat Tools 18개) 복사+씬 경로 상수 갱신해 unity_validate.py 0 error baseline 확보 + deleted된 AutoGenTests 4파일 git restore 복구 여부 명시 결정',
  '🔧 P1 [Unity 6.5 대비 GetInstanceID 전수 검색 · EntityId 4→8바이트 확대 선제 대응]: Unity 6.4 정식(2026-03) InstanceID→EntityId 전환 시작·6.5 베타 EntityId 8바이트 확대·최소 Android API 26 상향·x86_64 제거. NumLink/MeowBeat `GetInstanceID()` 호출부 전수 검색해 `GetEntityId()` 마이그레이션 대상 목록 작성·int 캐싱/직렬화 코드 있으면 long 전환. 6.5 업그레이드 전 선제 파악',
  '🔍 P2 [신규 리서치 적용 — NumLink 윈스트릭·레저 누메랄+더블코딩·검색의도 콘텐츠]: Game Designer — NumLink 윈스트릭+데일리 챌린지(연속 클리어 보너스+스트릭 끊김 직전 1회 구제). Art Director — NumLink 숫자 타일 레저 누메랄+키네틱 바운스+더블코딩(색+아웃라인·패턴)·딥블루+전기오렌지 고대비. Content Writer — NumLink 검색의도 매칭 콘텐츠("출근길/자기 전 5분")+마이크로 인플루언서 비포스팅 UGC. **모두 게임 레포 백업·회귀 안전망 확보 후 착수**',
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
