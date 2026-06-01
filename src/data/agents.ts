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
    taskSummary: '**🎉 핵심 = "결정→실행" 전환의 첫 증거**: 6일째 이월되던 NumLink 백업 P0가 드디어 실행 — `git branch -vv` 결과 `feature/ugui-layerlab`이 `[origin/feature/ugui-layerlab]`과 동기화(ahead 0)·upstream 설정+push 완료로 **백업 0 해소**·게다가 6/1 레벨선택 UI 5커밋(Layer Lab 프리팹화) 추가로 코드 흐름도 유지. **🚨 단 리스크 무게중심 MeowBeat로 이동**: 4/12 마지막→오늘 6/2 = **51일째 단절**·`feature/song-ownership-migration` upstream 여전 미설정(push 원천 불가)·`meowbeat/main` `[origin/meowbeat/main: ahead 37]`(37커밋 미푸시)·미커밋 다수(SongData/GameManager/SongManager.cs+manifest+.meta 3개 삭제) = **백업 0 유지·이제 단일 최대 유실 리스크는 MeowBeat**. **❌ 이월**: NumLink `Tools` 폴더 여전 부재(7회째)·AutoGenTests 4파일 git status 여전 deleted. **agent-office** a9d1f16 origin/main 동기·DailyStandup Running. 오늘 = 화요일·1개월 임계 D+9·NumLink에서 통한 백업 1줄을 MeowBeat에 복제하는 것이 본질.',
    lastUpdate: '6/2 화요일 스탠드업(🎉 6일째 이월 NumLink 백업 P0 드디어 실행·feature/ugui-layerlab→origin 동기화·백업 0 해소+6/1 UI 5커밋·🚨 단 리스크 무게중심 MeowBeat로 이동·51일 단절·meowbeat/main ahead 37 미푸시·백업 0 유지·❌ NumLink Tools 7회째·AutoGenTests 미복구): **🚨 P0 MeowBeat 백업 응급조치**(.meta 3종 restore→push meowbeat HEAD:meowbeat/main 37커밋+push -u upstream 설정·NumLink 방식 복제·5분·사용자 승인 후) + **🚨 P0 NumLink AutoGenTests git restore+Tools 복사**(회귀 안전망 0·7회째 이월) + **🔧 P1 Unity CVE-2025-59489 패치 확인** + **🔍 P2 고양이 수집 메타·무료 A/B·다이제틱 경로맵**. 메타: 6일 만에 백업 1줄 실행으로 결정 마비 균열·같은 행동 MeowBeat 복제가 유일한 본질.',
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
    taskSummary: '**🚀 시장 신규 1순위**: **UGC 레벨에디터 경제 폭발 — 2025년 Roblox+Fortnite+Overwolf 개발자 페이아웃 22억$(+47% YoY)·Fortnite 유저제작맵 48.8만개(2024년 19.8만→2.5배)·전체 플레이타임의 40%가 크리에이터 콘텐츠**·퍼즐은 1st파티 미진출 빈 장르(어제 라이브옵스 IAP 84%·앨범 컬렉션과 겹치지 않는 신규 토픽). **🚀 신규 2순위**: **컬렉션 메타가 리텐션 1순위 도구 — 상위 모바일게임 70%·미드코어 88%가 캐릭터/수집 메타 채택**·정서적 투자로 이탈 방지. **🚀 신규 3순위**: **코지+가상펫 컬렉션 결합이 캐주얼 신성장축**(Merge Dragons식 펫 육성+수집 메타). **GDD 통합 메시지**: MeowBeat에 "수집 메타 레이어"를 정식 GDD 기둥으로 격상 — 고양이를 단일 마스코트가 아닌 컬렉션(품종/희귀도/코스튬)으로 설계+곡 클리어↔고양이 도감 연동(특정 곡 풀콤보→한정 고양이 해금)으로 D7~D30 이탈 방어·NumLink엔 경량 적용(퍼즐 클리어 보상 수집형 테마/스킨 도감).',
    lastUpdate: '6/2 화요일 리서치(화요일·1개월 임계 D+9·UGC 레벨에디터 페이아웃 22억$ +47%·Fortnite 유저맵 48.8만개·컬렉션 메타 70%/88% 채택·코지+가상펫 신규): **🔥 P2 MeowBeat 수집 메타 레이어 정식 GDD 기둥 격상**(고양이 품종/희귀도/코스튬+곡 클리어↔도감 연동·D7~D30 이탈 방어) + **P2 NumLink 경량 수집 도감 적용** + **P2 게임 레포 백업·회귀 안전망 확보 후 착수**. Sources: Naavik UGC Games 2026·Udonis 캐릭터 컬렉션 메타.',
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
    taskSummary: '**🚀 기술 신규 1순위**: **GPU Resident Drawer(URP/HDRP 17.0.4)** — BatchRendererGroup 기반 자동 GPU 인스턴싱으로 CPU 프레임타임 최대 50% 절감·고사양 모바일 대비(어제 Project Auditor·Adaptive Performance·Hub CLI와 겹치지 않는 신규 토픽). **🚀 신규 2순위**: **Microsoft.Unity.Analyzers 1.26.0(2026-02-03)** — .NET10+VS2026 대응·Rider/VS에서 Unity 전용 컴파일타임 진단 강제. **🚀 신규 3순위**: **Unity Test Framework 2.0(exp)** EditMode/PlayMode 어셈블리 분리·**Audio Random Container 정식화**(모바일 오디오 레이턴시는 DSP Buffer Best latency+Decompress On Load 조합·MeowBeat 리듬 정확도 직결). **메시지**: NumLink에 Analyzers 1.26.0+Test Framework 2.0 도입+EditMode asmdef 분리 시 삭제된 AutoGenTests 빈자리 보강+MeowBeat .meta 삭제 GUID 위험 정적 진단 = "테스트 0+미커밋 위험" 두 부채 단일 툴체인 동시 완화.',
    lastUpdate: '6/2 화요일 리서치(화요일·GPU Resident Drawer URP 17.0.4 CPU 50%↓·Microsoft.Unity.Analyzers 1.26.0 .NET10/VS2026·Test Framework 2.0·Audio Random Container 신규): **🔧 P1 NumLink에 Microsoft.Unity.Analyzers 1.26.0+Test Framework 2.0 도입·EditMode asmdef 분리**(AutoGenTests 빈자리 보강+미커밋 .meta GUID 위험 정적 진단·Domain부터 RED→GREEN) + **P2 GPU Resident Drawer 적용 검토** + **P2 MeowBeat Audio Random Container 리듬 레이턴시 점검**. Sources: GPU Resident Drawer HDRP 17.0.4·Microsoft.Unity.Analyzers NuGet·Test Framework 2.0 docs.',
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
    taskSummary: '**✅ 정정**: MeowBeat 미해결 실데이터 버그 **0건** — `python3 Tools/qa_static.py` 0 error/0 warning(곡 10개·오디오 누락 0·노트 3605개 레인 이상 0). 어제까지의 "RT_SIZE_ZERO 미해결 5건"은 실데이터에서 재현되지 않음. **🚨 최대 품질 리스크 = NumLink 회귀 안전망 전무**: AutoGenTests 4파일(asmdef·meta·cs·meta) git status 여전 deleted + `C:/Unity/NumLink/Tools` 폴더 부재(7회째)로 정적/회귀 검증 0인데 6/1 레벨선택 UI 5커밋으로 변경은 계속 누적. **🆕 신규 리스크**: MeowBeat `.meta` 3종(Input.meta/Item.meta/SaveLoad.meta) git status deleted = 해당 스크립트 폴더 GUID 참조 깨짐 위험(단 working-tree 변경이라 `git restore`로 무손실 원복 가능).',
    lastUpdate: '6/2 화요일 리서치(화요일·✅ MeowBeat 실데이터 버그 0건 qa_static.py 0 error·곡10·노트3605·🚨 최severe NumLink 회귀 안전망 전무·🆕 MeowBeat .meta 3종 삭제 GUID 위험): **🚨 P0 NumLink AutoGenTests 4파일 git restore 즉시 복구**(deleted 7회째·의도된 삭제 아니면)+**`C:/Unity/_ProjectTemplate/Tools/` 또는 MeowBeat Tools 18개 복사**(unity_validate.py 0 error baseline) + **🚨 P0 MeowBeat .meta 3종 git restore 원복**(GUID 위험 제거·무손실). 모두 미커밋 working-tree 무손실 복구. Sources: qa_static.py 실행·known_bugs.json·git status·Tools 폴더 실측.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **구글플레이 "스토어 등록정보 실험"(무료 네이티브 A/B)** — 스크린샷 분기 테스트로 전환율 +24.3%·상단 캡션이 하단 대비 15~25% 우위(SplitMetrics 15억+ 노출 데이터·어제 Apple 캡션 인덱싱과 겹치지 않는 신규 토픽). **📦 신규 2순위**: **분기별 스크린샷 A/B 테스트 앱이 연 1회 갱신 앱 대비 전환율 20~30% 높음**·10개+ 시장 현지화 등록정보는 전환 35~50%↑. **📦 신규 3순위**: **숏폼 — 게이밍 콘텐츠 인게이지먼트 TikTok 5.77% vs YouTube Shorts 1.98%**·북미 모바일게이머 39%가 TikTok에서 신작 발견. **적용 메시지**: NumLink·MeowBeat 모두 구글플레이 무료 A/B로 첫 스크린샷 세트를 4~6주 주기 테스트·캡션 상단 배치 통일·핵심 후크 영상은 TikTok 우선(Shorts 대비 약 3배).',
    lastUpdate: '6/2 화요일 리서치(화요일·구글플레이 스토어 등록정보 실험 무료 A/B 전환 +24.3%·상단캡션 15~25%↑·분기 A/B 20~30%↑·TikTok 5.77% vs Shorts 1.98% 신규): **P2 NumLink/MeowBeat 구글플레이 "스토어 등록정보 실험"(무료) 첫 스크린샷 4~6주 주기 A/B 테스트**(NumLink "한 붓에 잇는 쾌감"·MeowBeat "고양이 박자 맞추기" 후크 상단 캡션 A안 vs 게임플레이 클로즈업 B안) + **P2 캡션 상단 배치 통일** + **P2 후크 영상 TikTok 우선 배포**. Sources: SplitMetrics 스토어 등록정보 실험·숏폼 게이밍 인게이지먼트 벤치마크.',
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
    taskSummary: '**CI 상태**: agent-office(GitHub Pages) 배포 파이프라인 **이상 없음** — Pages workflow build·HTTPS 강제·최근 5건 전부 success(6/1 마지막)·모든 액션 SHA 핀. **🛡 보안 신규 1순위**: **Mini Shai-Hulud(CVE-2026-45321)** — npm/PyPI 횡단 웜·OIDC 토큰을 런너 메모리에서 추출·6/1 Red Hat npm 30+ 패키지가 OIDC 통해 감염(어제 trivy-action·Megalodon과 별개 신규 사건). **🛡 신규 2순위**: **Unity CVE-2025-59489** — Unity 2017.1+ Android/Windows/Linux/macOS 임의 코드 실행·엔진 패치 적용 필요. **🚨 백업 위험 확정·악화**: 로컬 `meowbeat/main`이 origin 대비 ahead 37(37커밋 미푸시) + `feature/song-ownership-migration` upstream 미설정+미커밋 다수 = **단일 디스크 장애 시 4/12 이후 작업 전량 유실**·CI 부재로 백업이 git push에만 의존(NumLink는 6/1 백업 완료로 안전).',
    lastUpdate: '6/2 화요일 리서치(화요일·agent-office 배포 이상 없음·🆕 Mini Shai-Hulud CVE-2026-45321 npm/PyPI OIDC 토큰 탈취·Unity CVE-2025-59489 임의코드실행·MeowBeat 미푸시37+미커밋 동시 유실위험): **🚨 P0 MeowBeat 즉시 백업 — git push meowbeat HEAD:meowbeat/main(37커밋)+미커밋 정리 후 push -u upstream 설정**(NumLink에서 통한 방식 복제·유실 최고위험·사용자 승인 후) + **🔧 P1 Unity CVE-2025-59489 패치 적용 확인** + **P2 keystore base64+GitHub Secrets 분리 권고**. agent-office는 이미 SHA 핀·배포 정상. Sources: Aikido Red Hat npm·Tenable Mini Shai-Hulud·The Record Unity CVE-2025-59489.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **플러시코어/토이미학** — 봉제·장난감 형태감의 소프트3D(둥근 지오메트리·친근 비율)·캐주얼 펫게임과 정합(어제 Bento Grid·Neomorphism·키네틱 타이포와 겹치지 않는 신규 토픽). **🎨 신규 2순위**: **리퀴드글래스** — 글래스모피즘 진화형·모션 반응 반투명+굴절(iOS26 견인). **🎨 신규 3순위**: **다이제틱 인월드 UI** — HUD를 게임 세계에 녹여 메뉴가 별도 화면이 아닌 세계의 일부. **연결 적용**: NumLink 레벨선택을 "다이제틱 점-선 경로맵"으로 정리(클리어 레벨끼리 선으로 이어져 진척도가 곧 게임 모티프)·잠긴 노드에만 크림 베이스+따뜻한 앰버 톤 리퀴드글래스 절제 적용(민트+다크 회피·Layer Lab 톤 일관성·60fps·동적 Instantiate 금지 준수).',
    lastUpdate: '6/2 화요일 리서치(화요일·플러시코어/토이미학 소프트3D·리퀴드글래스 모션반응 굴절 iOS26·다이제틱 인월드 UI 신규): **🔥 P2 NumLink 레벨선택을 다이제틱 점-선 경로맵으로 정리 검토**(숫자 연결 퍼즐을 메타포로·클리어 레벨끼리 선 연결·진척도=게임 모티프) + **P2 잠긴 노드만 크림/앰버 리퀴드글래스 절제 적용**(해금=유리 깨지듯 선명·민트+다크 회피·60fps) + **P2 MeowBeat 플러시코어 고양이 토이미학 검토**. Sources: Casual Game Art 2026·Midrocket UI Trends 2026·Diegetic UI Guide·Liquid Glass 2026.',
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
  '🎉 [전환점] 6일째 이월되던 NumLink 백업 P0가 드디어 실행됨 — `feature/ugui-layerlab`이 `origin/feature/ugui-layerlab`과 동기화(ahead 0)·upstream 설정+push 완료로 **백업 0 해소**·게다가 6/1 레벨선택 UI 5커밋 추가. 50회 누적되던 "결정 마비"가 깨진 첫 증거 — **오늘은 NumLink에서 통한 백업 1줄을 MeowBeat에 그대로 복제하는 것이 유일한 본질**',
  '🚨 [리스크 무게중심 이동] 단일 최대 유실 리스크가 NumLink→MeowBeat로 명확히 이동: 4/12 마지막→오늘 6/2 = **51일째 단절**·`feature/song-ownership-migration` upstream 여전 미설정(push 원천 불가)·`meowbeat/main` origin 대비 ahead 37(37커밋 미푸시)·미커밋 다수 = 백업 0 유지·단일 디스크 장애 시 4/12 이후 전량 유실. ✅ 단 QA 정정: MeowBeat 실데이터 버그 0건(qa_static.py 0 error·곡10·노트3605)',
  '🚨 P0 [MeowBeat 백업 응급조치 — NumLink 방식 복제 · 51일·37커밋 미푸시·백업 0·5분·사용자 승인 후]: 실행 순서 ① `.meta` 3종(Input/Item/SaveLoad) `git restore`로 원복(GUID 위험 제거) ② 미커밋 정리/커밋 ③ `git push meowbeat HEAD:meowbeat/main`로 37커밋 백업 ④ `git push -u`로 현재 브랜치 upstream 설정. Orchestrator·QA·DevOps 3인 일치. **(새벽 실행이라 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [NumLink 회귀 안전망 복구 — AutoGenTests git restore + Tools 복사 · 7회째 이월]: AutoGenTests 4파일 deleted + Tools 폴더 부재(7회째)로 회귀 안전망 0인데 6/1 레벨선택 UI 5커밋으로 변경은 계속 누적. AutoGenTests 4파일 `git restore` 복구(의도된 삭제 아니면)+`C:/Unity/_ProjectTemplate/Tools/`(또는 MeowBeat Tools 18개) 복사해 unity_validate.py 0 error baseline 확보. QA·Developer 일치·백업 끝나면 가장 오래된 이월 P0',
  '🔧 P1 [Unity CVE-2025-59489 패치 적용 확인 + Microsoft.Unity.Analyzers 1.26.0 도입 검토]: Unity 2017.1+ Android/Windows 임의 코드 실행 취약점 — NumLink/MeowBeat 엔진 버전 확인 후 패치. 부가로 NumLink에 Microsoft.Unity.Analyzers 1.26.0+Test Framework 2.0 도입해 EditMode 테스트 어셈블리 분리(삭제된 AutoGenTests 빈자리 보강+미커밋 .meta GUID 위험 정적 진단). DevOps·Developer 연계',
  '🔍 P2 [신규 리서치 적용 — 고양이 수집 메타·구글플레이 무료 A/B·다이제틱 경로맵 · 모두 P0 백업·안전망 후 착수]: Game Designer — MeowBeat 고양이 수집 메타(품종/희귀도/코스튬+곡 클리어↔도감 연동) GDD 기둥 격상. Content Writer — NumLink/MeowBeat 구글플레이 "스토어 등록정보 실험"(무료 A/B) 첫 스크린샷 4~6주 주기 테스트·캡션 상단 통일·후크 영상 TikTok 우선. Art Director — NumLink 레벨선택 다이제틱 점-선 경로맵+잠긴 노드 크림/앰버 리퀴드글래스. **모두 P0 게임 레포 백업·회귀 안전망 확보 후 착수**',
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
