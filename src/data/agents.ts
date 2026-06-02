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
    taskSummary: '**🔥 NumLink 실행 폭발**: `git log --since="1 day ago"` = 오늘 하루 9커밋(27d82e8 UGUI→UI Toolkit 전면 롤백 → b5e921b Layer Lab 9-slice 스킨 A-lite → 10bed53 3테마 컬러 전면 재설계 → 5fcac3a 게임오버/레벨선택 가독성) = **코드 흐름 최고조·"결정→실행" 사이클 완전 작동**. **🚨 단 MeowBeat 정반대**: `git branch -vv` = `feature/song-ownership-migration` upstream **여전 미설정**(push 원천 불가)·`meowbeat/main [origin/meowbeat/main: ahead 37]`(37커밋 미푸시 그대로)·마지막 커밋 4/12→오늘 6/3 = **52일 단절**·.meta 3종 삭제 유지 = **백업 0·6/2 P0가 7일째 이월**. **❌ 이월**: NumLink `Tools` 폴더 여전 부재(8회째)·AutoGenTests 4파일 deleted(Editor 공백). **agent-office** 958eca1 origin/main 동기·DailyStandup Running. 오늘 = 수요일·1개월 임계 D+10·실행력은 NumLink가 증명했으니 그 손을 1분만 MeowBeat로 옮기는 것이 본질.',
    lastUpdate: '6/3 수요일 스탠드업(🔥 NumLink 오늘 9커밋 폭발·UI Toolkit 롤백→Layer Lab 9-slice→3테마 컬러 재설계·코드 흐름 최고조·🚨 단 MeowBeat 백업 P0 7일째 이월·upstream 미설정·meowbeat/main ahead 37·52일 단절·.meta 3종 삭제 유지·❌ NumLink Tools 8회째·AutoGenTests 미복구): **🚨 P0 MeowBeat 백업**(.meta 3종 restore→push -u origin feature/song-ownership-migration 1줄+meowbeat/main 37커밋 push·5분·사용자 승인 후) + **🚨 P0 MeowBeat Android 16KB 페이지 정렬 점검**(출시 차단) + **🔧 P1 NumLink AutoGenTests git restore+Tools 복사**(8회째) + **🎨 P1 Layer Lab Neo-Skeuomorphism 프레스드 상태** + **🔍 P2 CPP·보상형 광고·인앱이벤트**. 메타: NumLink 9커밋 vs MeowBeat 백업 1줄 7일째 미실행 = 실행력 부재 아닌 레포 편중·1분만 손 옮기면 끝.',
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
    taskSummary: '**🚀 시장 신규 1순위**: **퍼즐 장르 다운로드-매출 디커플링** — 2025 퍼즐 다운로드 -3%인데 매출 +14%·광고 노출 +40% YoY(Sensor Tower State of Gaming 2026) = **성장이 신규 유입이 아니라 기존 유저 광고 수익화에서 나옴**(어제 UGC 레벨에디터·컬렉션 메타와 겹치지 않는 신규 토픽). **🚀 신규 2순위**: **Block Blast가 月 1750만$를 광고 단독으로** 달성·2025년 연 1만 회 A/B 테스트로 70M DAU = **광고 단일 모델도 라이브옵스 A/B로 스케일 가능**(mobilegamer.biz). **🚀 신규 3순위**: 하이브리드캐주얼 IAP 25년 Q2 +100% YoY·상위 10개 분기 1.26억$·D7 18~22%(하이퍼캐주얼 2.5배). **적용 메시지**: NumLink에 "광고 노출 빈도 A/B + 보상형 광고(힌트/되돌리기 1회)" 도입 — 퍼즐 매출이 기존 유저 광고노출(+40%)에서 성장한다는 데이터 근거·보상형 광고 80~90% 완료율+87% 긍정 인식으로 UX 훼손 최소·한 붓 긋기류 캐주얼에 정합.',
    lastUpdate: '6/3 수요일 리서치(수요일·1개월 임계 D+10·퍼즐 다운로드 -3% 매출 +14% 광고노출 +40% YoY 디커플링·Block Blast 광고단독 月 1750만$·연 1만회 A/B 70M DAU·하이브리드캐주얼 IAP Q2 +100% 신규): **🔥 P2 NumLink 광고 노출 빈도 A/B + 보상형 광고(힌트/되돌리기 1회) 도입**(퍼즐 매출은 기존유저 광고노출에서 성장·UX 훼손 최소) + **P2 게임 레포 백업·회귀 안전망 확보 후 착수**. Sources: Sensor Tower State of Gaming 2026·mobilegamer.biz·Game Growth Advisor.',
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
    taskSummary: '**🆕 출시 차단 신규 1순위**: **Android 16KB 페이지 정렬 의무화(2025.11~)+타깃 API36(Android16) 2026 단계 적용** — Unity 엔진 코어는 이미 16KB 지원하나 **AdMob 등 서드파티 `.so`가 4KB 정렬이면 Google Play AAB 업로드가 리젝트**됨 = MeowBeat 출시 직전 반드시 통과해야 할 차단 이슈(어제 GPU Resident Drawer·Analyzers와 겹치지 않는 신규 토픽). **🚀 신규 2순위**: **Unity 6.3 LTS UnityWebRequest HTTP/2 기본화** — Android 서버 부하 40%·CPU 15~20% 절감. **🚀 신규 3순위**: **Unity 6.3 스크립터블 오디오 파이프라인(Burst HPC# 제너레이터)** — 커스텀 DSP/저지연 신호체인·MeowBeat 노트-오디오 동기 정밀도 개선 여지. **메시지**: MeowBeat 빌드 후 objdump/Unity 빌드 경고로 .so 정렬 검증·AdMob SDK가 4KB면 16KB 지원 최신 버전으로 업데이트가 출시 전 필수.',
    lastUpdate: '6/3 수요일 리서치(수요일·🆕 Android 16KB 페이지 정렬 의무화 2025.11~+타깃 API36·AdMob 4KB .so AAB 리젝트·Unity 6.3 LTS HTTP/2 기본화 서버부하 40%↓·스크립터블 오디오 파이프라인 Burst HPC# DSP 신규): **🚨 P0 MeowBeat Android 16KB 페이지 정렬 호환성 점검**(objdump/빌드 경고로 .so 정렬 검증·AdMob 4KB면 최신 업데이트·출시 차단 이슈) + **P2 Unity 6.3 LTS 승격 시 UI Toolkit USS 필터+스크립터블 오디오 검토**. Sources: unity.com Unity 6.3 LTS·developer.android.com/guide/practices/page-sizes·target-sdk.',
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
    taskSummary: '**✅ 유지**: MeowBeat `python3 Tools/qa_static.py` = 0 error/0 warning exit 0 — known_bugs 6패턴(RT_SIZE_ZERO·YAML_DUPLICATE_FILE_ID·YAML_HEADER_REF_MISMATCH·YAML_INDENT_M_FATHER·MANIFEST_MISSING_AUDIO·NOTE_OUT_OF_LANE) 전수 통과·실데이터 무결성 유지(불변). **🚨 최대 품질 리스크 = NumLink 회귀 안전망 0**: `ls C:/Unity/NumLink/Tools/` No such file(8회째)+AutoGenTests 4파일 git status deleted로 **Editor 폴더 완전 공백**인데 오늘 9커밋으로 UI 대규모 변경 계속 누적·미커밋 36건. **🆕 신규 오염**: MeowBeat `.meta` 3종(Input/Item/SaveLoad) 삭제 유지 + `AutoQATests`/`_Recovery`/`.bak_btn` untracked `.meta` 산재(이전 회의엔 없던 신규 항목·GUID 참조 깨짐 위험·working-tree라 무손실 복구 가능).',
    lastUpdate: '6/3 수요일 리서치(수요일·✅ MeowBeat qa_static.py 0 error/0 warning known_bugs 6패턴 전수통과 실데이터 무결·🚨 NumLink Tools 부재+AutoGenTests 4파일 삭제로 Editor 폴더 완전 공백 회귀 안전망 0·🆕 MeowBeat _Recovery/.bak untracked .meta 산재 신규 오염): **🔧 P1 NumLink AutoGenTests 4파일 git restore 복구**(8회째)+**`C:/Unity/_ProjectTemplate/Tools/` 또는 MeowBeat Tools 복사**(unity_validate.py 0 error baseline) + **🔧 P1 MeowBeat .meta 3종 git restore 원복**(GUID 위험·무손실). 모두 미커밋 무손실 복구·NumLink 안전망 0은 즉시 빌드 차단 아니라 P1. Sources: qa_static.py 실행·known_bugs.json·git status 실측.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **애플 Custom Product Page(CPP)가 2025-07-30 organic 검색 노출 시작 + 2025-10-29 한도 35→70개로 2배 확대** — 게임 평균 CVR +8%인데 **채택률 31%뿐(저경쟁 기회)**(RespectASO/Apptweak·어제 구글플레이 무료 A/B와 겹치지 않는 신규 토픽). **📦 신규 2순위**: **퍼즐 게임 인앱 이벤트는 화~목 출시 시 추천 노출 최대 5배 트래픽**·AI 리트라이 번들 추천으로 IAP 매출 +27% 사례(Audiencelab/Appwill). **📦 신규 3순위**: **2026 퍼즐 CPI iOS 약 $3.00/안드 $2.00·플레이어블 광고는 CPI를 $1.5 수준까지 낮추고 D7 ROAS 17% 달성**(Liftoff 2025 Casual Report). **적용 메시지**: NumLink "한 붓에 잇는 쾌감" 후크별(릴렉스/두뇌훈련/타임어택) CPP 2~3종+키워드 할당으로 organic 검색 노출(채택률 31% 저경쟁·무비용·메타데이터만)·MeowBeat 신곡을 화~목 인앱 이벤트로(추천 5배 윈도우).',
    lastUpdate: '6/3 수요일 리서치(수요일·애플 CPP organic 검색 노출 25-07-30+한도 35→70개·게임 CVR +8%·채택률 31% 저경쟁·퍼즐 인앱이벤트 화~목 추천 트래픽 5배·AI 번들 IAP +27%·2026 퍼즐 CPI iOS$3/안드$2·플레이어블 CPI$1.5 D7 ROAS17% 신규): **P2 NumLink 애플 CPP 2~3종 제작**(릴렉스/두뇌훈련/타임어택 후크별·organic 검색 노출·채택률 31% 저경쟁·무비용) + **P2 MeowBeat 신곡 화~목 인앱 이벤트 등록**(추천 5배 윈도우). 모두 P0 백업·안전망 선행 후. Sources: RespectASO CPP 2026·Apptweak·Liftoff 2025 Casual·Audiencelab.',
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
    taskSummary: '**🚨 백업 위험 확정·불변**: `git branch -vv` = `feature/song-ownership-migration`(upstream 표기 없음)·`meowbeat/main [origin/meowbeat/main: ahead 37]`·`git log -1` 로컬 최신 4/12→원격 최신 3/28 = **단절 52일+·단일 디스크 장애 시 4/12 이후 작업 전량 유실**(6/2와 0 변화). **백업 정상**: NumLink는 3개 브랜치 전부 `[origin/...]` 추적·ahead 없음. **CI 상태**: agent-office GitHub Pages `gh run list` 최근 5건 전부 completed success(6/1 마지막 33초)·SHA 핀·안정. **🛡 신규**: 2026년 GitHub가 공개 저장소 대상 **Artifact Attestations(빌드 출처 증명)를 기본값으로 전환** 중·Free/Pro도 공개 레포면 `actions/attest-build-provenance` 무료(Sigstore·SLSA Build Level 2)·Wiz 2026 비인간 ID +44%·AI 생성코드 1/5 조직 영향(어제 Shai-Hulud·Unity CVE와 별개 신규 토픽).',
    lastUpdate: '6/3 수요일 리서치(수요일·🚨 MeowBeat 백업 0 변화없음·feature/song-ownership-migration upstream 여전 미설정·meowbeat/main ahead 37 미푸시·52일 단절·NumLink 3개 브랜치 전부 origin 추적 정상·agent-office Pages 최근 5회 success·🆕 GitHub Artifact Attestations 공개레포 기본화 SLSA L2 무료): **🚨 P0 MeowBeat 백업 즉시 — `git -C C:/Unity/Feedme push -u origin feature/song-ownership-migration` 1줄로 52일치 백업+upstream 영구 설정 + `git push origin meowbeat/main`로 ahead 37 해소**(NumLink 정상이라 조치 불필요·사용자 승인 후) + **P2 agent-office Pages에 Artifact Attestations**(P0 후). Sources: git branch -vv/log 실측·gh run list·GitHub Docs Artifact Attestations·Wiz SDLC 2026.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **Tactile Minimalism(촉각적 미니멀리즘)** — 무게·질감 느껴지는 표면+극단적 단순화·2026 스토어 썸네일 경쟁 우위(aaagameartstudio·어제 플러시코어/리퀴드글래스와 겹치지 않는 신규 토픽). **🎨 신규 2순위**: **Neo-Skeuomorphism/New Neumorphism** — 상태 변화를 촉각 깊이로 알리는 클레이형 버튼·강한 대비로 접근성 보완(Userology). **🎨 신규 3순위**: **WCAG 3.0 APCA 대비 알고리즘 + 인지 접근성(난독·ADHD 대응)** — 2026~27 모바일 적용 의무화 단계 진입(web-accessibility-checker). **연결 적용**: NumLink 진행 중 Layer Lab 9-slice 스킨에 Neo-Skeuomorphism "프레스드 상태" 적용 — 셀/버튼 누름 시 inset shadow로 눌림 깊이 0.1초 표현(촉각 더블코딩)·3테마별 inset 베이스 대비 12% 어둡게 토큰화·대비는 APCA Lc 60+로 재검증(고령·난독 대응)·평면→촉각 깊이 9-slice 한 단계 업그레이드.',
    lastUpdate: '6/3 수요일 리서치(수요일·Tactile Minimalism 무게·질감 표면·Neo-Skeuomorphism 프레스드 상태 inset shadow 촉각 깊이·WCAG 3.0 APCA 대비 알고리즘 인지접근성 2026~27 의무화 신규): **🎨 P1 NumLink Layer Lab 9-slice에 Neo-Skeuomorphism 프레스드 상태 적용**(셀/버튼 누름 시 inset shadow 0.1초 눌림 깊이·3테마별 inset 12% 어둡게 토큰화·APCA Lc 60+ 재검증) — 오늘 진행 중인 9-slice 작업에 충돌 없이 즉시 흡수. Sources: aaagameartstudio·userology.co·web-accessibility-checker WCAG 3.0.',
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
  '🔥 [양극화] NumLink는 오늘 하루 9커밋 폭발(UI Toolkit 롤백→Layer Lab 9-slice 스킨→3테마 컬러 전면 재설계→게임오버/레벨선택 가독성)·코드 흐름 최고조 — "결정→실행" 사이클이 NumLink에선 완전히 작동. **🚨 단 MeowBeat 백업 1줄은 7일째 미실행** — 실행력 부재가 아니라 "어느 레포에 손을 대느냐"의 편중 문제·**오늘 본질은 그 손을 1분만 MeowBeat로 옮기는 것**',
  '🚨 [단일 최대 유실 리스크] MeowBeat 백업 0 변화없음: 4/12 마지막→오늘 6/3 = **52일째 단절**·`feature/song-ownership-migration` upstream 여전 미설정(push 원천 불가)·`meowbeat/main` ahead 37(37커밋 미푸시)·.meta 3종 삭제 유지 = 단일 디스크 장애 시 4/12 이후 전량 유실. ✅ 단 QA 유지: MeowBeat qa_static.py 0 error/0 warning(known_bugs 6패턴 전수 통과·실데이터 무결)',
  '🚨 P0 [MeowBeat 백업 응급조치 — 7일째 이월·DevOps·QA·Orchestrator 일치·5분·사용자 승인 후]: 실행 순서 ① `.meta` 3종(Input/Item/SaveLoad) `git restore`로 원복(GUID 위험 제거) ② 미커밋 정리/커밋 ③ `git -C C:/Unity/Feedme push -u origin feature/song-ownership-migration` 1줄로 52일치 백업+upstream 영구 설정 ④ `git push origin meowbeat/main`로 ahead 37 해소. **(새벽 실행이라 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [MeowBeat Android 16KB 페이지 정렬 호환성 점검 — 출시 차단·Developer 신규]: Android 16KB 페이지 정렬 의무화(2025.11~)+타깃 API36 단계 적용으로 AdMob 등 서드파티 `.so`가 4KB 정렬이면 Google Play AAB 업로드 리젝트. 빌드 후 `objdump`/Unity 빌드 경고로 .so 정렬 검증·미달 SDK는 16KB 지원 최신 버전으로 업데이트 = 출시 직전 반드시 통과',
  '🔧 P1 [NumLink 회귀 안전망 복구 — AutoGenTests git restore + Tools 복사 · 8회째 이월]: AutoGenTests 4파일 deleted로 Editor 폴더 완전 공백 + Tools 폴더 부재(8회째)로 회귀 안전망 0인데 오늘 9커밋으로 UI 대규모 변경 계속 누적. AutoGenTests 4파일 `git restore` 복구+`C:/Unity/_ProjectTemplate/Tools/`(또는 MeowBeat Tools 18개) 복사해 unity_validate.py 0 error baseline 확보. MeowBeat .meta 3종도 git restore 원복. QA 제안·즉시 빌드 차단은 아니라 P1',
  '🎨 P1 [NumLink Layer Lab 9-slice에 Neo-Skeuomorphism 프레스드 상태 — Art Director]: 숫자 셀/버튼 누름 시 안쪽 그림자(inset shadow)로 눌림 깊이 0.1초 표현해 "선택됨"을 촉각적으로 더블코딩·3테마 컬러별 inset shadow 베이스 대비 12% 어둡게 토큰화·대비는 APCA Lc 60+로 재검증(2026~27 의무화 대응). 오늘 진행 중인 9-slice 작업에 충돌 없이 즉시 흡수',
  '🔍 P2 [수익화·ASO 신규 적용 — 모두 P0 백업·안전망 후 착수]: Game Designer — NumLink 보상형 광고(힌트/되돌리기)+노출 빈도 A/B(퍼즐 매출은 기존유저 광고노출 +40%에서 성장). Content Writer — NumLink 애플 CPP 2~3종(릴렉스/두뇌훈련/타임어택·채택률 31% 저경쟁·organic 검색 노출·무비용)·MeowBeat 신곡 화~목 인앱 이벤트(추천 5배). DevOps — agent-office Pages에 Artifact Attestations(SLSA L2 무료). **모두 P0 백업·안전망 확보 후 착수**',
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
