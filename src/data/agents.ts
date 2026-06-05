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
    taskSummary: '**🚨 백업 P0 10일째·재측정 정밀화**: `git branch -vv` 실측 — 진짜 위험은 작업브랜치 **feature/song-ownership-migration**(tip 04-12·단절 55일)이 **upstream 미설정(fatal)이라 6커밋이 origin·meowbeat 어느 원격에도 0건 백업**. 6/5의 "origin 03-28·69일"은 main 기준이었고, 추적조차 안 되는 작업브랜치 6커밋+미커밋 37파일이 단일 디스크 장애 시 전량 유실. **✅ NumLink 본진 양호**: 작업브랜치 feature/ugui-layerlab origin과 0/0 완전 동기화(미백업 0일·HEAD 06-02)·본진 origin/main만 70일 정체. **🚨 NumLink 안전망 3일 연속 부재·악화**: Tools/ 0개·유일 테스트 AutoGenTests.cs 워킹트리 삭제(D)로 악화(단 git checkout 복구 가능)·미커밋 36파일. **❌ 이월**: 6/5 P0 2건 모두 미완료. **agent-office** .omc/project-memory.json만 변경·정상. 오늘 = 토요일·1개월 임계 D+13·고인 작업을 못 박고 CI 골격을 세울 날.',
    lastUpdate: '6/6 토요일 스탠드업(🚨 백업 P0 10일째 재측정 정밀화=진짜 위험은 upstream 미설정으로 추적 안 되는 작업브랜치 feature/song-ownership-migration 6커밋 tip 04-12·6/5 "origin 03-28·69일"은 main 기준·🚨 NumLink 안전망 3일 연속 부재 AutoGenTests.cs 삭제 D로 악화·✅ NumLink 본진 origin과 0/0 동기화 양호): **🚨 P0 MeowBeat 백업**(미커밋 작업 커밋+작업브랜치 6커밋 git push -u로 upstream 설정·사용자 승인 후) + **🚨 P0 NumLink 안전망 복구**(AutoGenTests.cs git checkout 복구+템플릿 Tools 3종 복사·baseline 0-error) + **🛡 P1 두 Unity 레포 GameCI 워크플로 신규**(.github 부재=백업 P0 근본 원인) + **🔧 P1 MeowBeat 곡선택 분리 커밋+Addressables PoC** + **🔍 P2 인앱이벤트·스프링 피직스·특별 간식 IAP**. 메타: 백업 멈춤의 구조적 뿌리=.github 부재로 자동화 0이라 작업이 워킹트리에 고임.',
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
    taskSummary: '**🚀 시장 신규 1순위**: 2026 스튜디오 **36%가 하이퍼캐주얼→하이브리드캐주얼 전환**·퍼즐/머지 수익 황금비 IAP 45:광고 55·**Royal Match는 신규 콘텐츠 폭격이 아니라 파워업 단 1종(Super Light Ball)으로 매출 베이스라인 1.5배**·최고 $219 시즌패스가 핵심 수익원(Naavik·GameMakers). **🚀 신규 2순위**: **리듬게임 차별화축 BPM→장르융합** — People of Note(턴제RPG)·NecroDancer(로그라이크)가 리듬을 타 장르 코어에 결합(GameSpot). **🚀 신규 3순위**: 콜라보 신표준 = Roblox×넷플릭스 KPop Demon Hunters처럼 외부 IP로 비과금층 지갑 개방(Sensor Tower 4월 톱10). **적용 메시지**: "신규 메카닉 1종=매출 레버 1개" 원칙 — MeowBeat에 "특별 간식(Golden Treat)" 단일 소비형 IAP를 농장 메타(먹이 2배) 한정으로 GDD 명문화(P2W 회피·ARPDAU $0.50 목표).',
    lastUpdate: '6/6 토요일 리서치(토요일·1개월 임계 D+13·2026 스튜디오 36% 하이퍼→하이브리드캐주얼 전환·퍼즐/머지 황금비 IAP 45:광고 55·Royal Match 파워업 1종 Super Light Ball로 매출 베이스라인 1.5배·시즌패스 최고 $219·리듬게임 차별화축 BPM→장르융합 People of Note 턴제RPG·NecroDancer 로그라이크 신규): **🎮 P2 MeowBeat "특별 간식(Golden Treat)" 단일 소비형 IAP를 농장 메타 한정으로 GDD 명문화**(효과를 리듬 판정 아닌 먹이 2배 수확에 한정·P2W 회피·시즌패스 보상통화 재활용·신규 메카닉 1종=매출 레버 1개). P0 백업·안전망 선행. Sources: Naavik·GameMakers·Game Growth Advisor·Antier·Sensor Tower·GameSpot.',
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
    taskSummary: '**🆕 기술 신규 1순위**: **Unity 6.3 LTS(6000.3·2027.12까지 지원) 정식 출시** — Build Profiles 워크플로 개선·URP Bloom 모바일 Kawase/Dual 필터·HTTP/2·gRPC·Box2D v3 물리·2026 로드맵 CoreCLR(.NET 런타임) 전환 예고. **🔎 코드 분석**: MeowBeat 미커밋은 6/5 규명대로 단일 응집 작업 **"곡 선택 UI 다국어화(SongData titleKo·manifest 11곡 한글 제목·미소유곡 톤다운)+음량 조절(SongVolume 슬라이더·PlayerPrefs·SongManager 통합)"**·부수 unity-cli→com.coplaydev.unity-mcp(#beta) 교체·collab-proxy 제거. NumLink 미커밋은 폰트 SDF 재생성+AutoGenTests 삭제+패키지 정리 위주 실코드 변경 아님. **🆕 신규 2순위**: MeowBeat StreamingAssets/Songs 곡 데이터 Addressables 미적용 → 곡당 소그룹 전환 PoC 여지(다운로드 크기·메모리). **메시지**: titleKo+음량슬라이더+톤다운 묶음을 단일 커밋으로 분리하고 곡 데이터 Addressables PoC 1곡 착수.',
    lastUpdate: '6/6 토요일 리서치(토요일·🆕 Unity 6.3 LTS 6000.3 2027.12까지 지원 정식 출시 Build Profiles·URP Bloom Kawase/Dual·HTTP/2·gRPC·Box2D v3·2026 CoreCLR 전환·🔎 MeowBeat 미커밋 단일 작업 곡 다국어화 titleKo 11곡+음량 슬라이더 6/5 규명 일치·unity-cli→CoplayDev Unity-MCP #beta·StreamingAssets/Songs Addressables 미적용 신규): **🔧 P1 MeowBeat titleKo+음량슬라이더+톤다운 묶음을 단일 커밋(feat(songselect): 곡 한국어 제목 및 음량 옵션 추가)으로 분리 + StreamingAssets/Songs Addressables 그룹 전환 PoC 1곡 착수**(P0 백업과 자연 연결). P0 백업·안전망 선행. Sources: Unity 6.3 LTS 블로그·Whats New 6000.3·Unity 2026 Roadmap CoreCLR·Addressables best practices.',
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
    taskSummary: '**✅ 유지**: MeowBeat 루트 실행 시 qa_static 0 error·unity_validate 0 error/1 warning·run_regression 2/2 PASS·manifest 10곡·known_bugs 6패턴·미해결 버그 0건(6/5 동일). 삭제된 .meta 3종(Input/Item/SaveLoad)은 GUID 참조 0이라 **고아 참조 없음·삭제 안전**. **🚨 최대 리스크 = NumLink 안전망 완전 소실**: Tools 폴더 부재+유일 정식 테스트 AutoGenTests.cs가 삭제(D) 상태·Scripts 테스트 .cs 0개 → 회귀 무방비(3일 연속·QA 검증 수단 자체 없음). **⚠️ 도구 결함**: qa_static.py 상대경로라 Tools 폴더 cwd 실행 시 거짓 error 2건(레포 루트 실행 필수)·NumLink 복사 시 경로 처리 보정 필요.',
    lastUpdate: '6/6 토요일 리서치(토요일·✅ MeowBeat 루트 실행 qa_static 0err·unity_validate 0err/1warn·run_regression 2/2 PASS·곡10·known_bugs 6패턴·미해결 버그 0건·.meta 3종 삭제 GUID 참조 0 안전·🚨 NumLink 안전망 완전 소실 Tools 부재+유일 테스트 AutoGenTests.cs 삭제 D·⚠️ qa_static.py 상대경로 결함 cwd 거짓 error 2건 신규): **🚨 P0 NumLink 안전망 복구 — AutoGenTests.cs git checkout 복구 + _ProjectTemplate Tools/ 3종 복사 후 unity_validate 베이스라인 0 error 확보**(qa_static.py 상대경로 결함도 함께 보정·회귀탐지 공백 종료). MeowBeat는 안정·추가 조치 불필요. Sources: qa_static.py·unity_validate.py·run_regression.py 실행·git status·Glob 전수.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **애플 인앱이벤트(In-App Events) 표시 시 제품페이지 전환 평균 +17%·애플이 이벤트를 검색·에디토리얼에 색인**해 추가 노출 면 확보(MobileAction·6/5 첫 스크린샷 A/B·현지화와 겹치지 않는 신규 토픽). **📦 신규 2순위**: **구글플레이 LiveOps 프로모션 콘텐츠는 활성유저 +5%·매출 +4%**(선정 개발자만 노출·Apptweak). **📦 신규 3순위**: 숏폼 게임 UA 후크율 틱톡 중앙값 33%(상위 55%)·**UGC형이 스튜디오형을 후크 34% vs 26%로 압도**(Benly 2026). **적용 메시지**: NumLink 출시 시점에 "신규 레벨팩 출시"·"주간 챌린지"를 애플 인앱이벤트 카드(이미지+카피 2~3줄)로 포장 — 추가 개발 0으로 전환 +17%·검색 색인 노출.',
    lastUpdate: '6/6 토요일 리서치(토요일·애플 인앱이벤트 제품페이지 전환 +17% 검색·에디토리얼 색인·구글플레이 LiveOps 활성유저 +5% 매출 +4% 선정 개발자만·숏폼 UA 후크율 틱톡 중앙값 33% 상위 55%·UGC형이 스튜디오형 압도 34% vs 26% 신규): **🔍 P2 NumLink 출시 시점 애플 인앱이벤트 1종 기획·등록("신규 레벨팩 출시" 또는 "주간 챌린지")** — 추가 개발 없이 기존 레벨/모드를 이벤트 카드로 포장만 해도 전환 +17%·검색 색인 노출(무비용 ASO). P0 백업·안전망 선행 후. Sources: MobileAction·Apptweak·Benly·AppFollow.',
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
    taskSummary: '**🚨 CI 구조 공백**: NumLink·MeowBeat 둘 다 `.github` 디렉터리 **자체가 부재** → CI/CD 전무·빌드 100% 수동(MeowBeat 백업 P0가 10일째 이월되는 구조적 근본 원인)·agent-office는 deploy-pages.yml+weekly-insights.yml 2건 정상·미푸시는 .omc/project-memory.json(로컬 메타·푸시 불필요)뿐. **🆕 신규**: **GitHub Actions 호스티드 러너 가격 1/1부터 최대 39%↓**(16코어 Linux $0.042/min)·분당 $0.002 플랫폼 차지 신설·셀프호스트 러너 과금(3월 예정)은 백래시로 연기(6/5 game-ci 2레이어 캐시와 겹치지 않는 "러너 가격 정책" 신규 토픽). **메시지**: 두 Unity 레포에 GameCI 빌드 검증 워크플로 1건씩 신규로 골격을 세워 자동화 0 상태를 메우기 시작.',
    lastUpdate: '6/6 토요일 리서치(토요일·🚨 NumLink·MeowBeat 둘 다 .github 디렉터리 자체 부재 CI 전무 빌드 100% 수동=백업 P0 구조적 근본 원인·agent-office 워크플로 2건 정상 미푸시 1건 로컬 메타뿐·🆕 GitHub Actions 호스티드 러너 1/1부터 최대 39%↓ 16코어 Linux $0.042/min 분당 $0.002 플랫폼 차지 신설·셀프호스트 과금 백래시로 연기 신규): **🛡 P1 NumLink·MeowBeat 두 Unity 레포에 GameCI(game-ci/unity-builder) 빌드 검증 워크플로 1건씩 신규**(최소 컴파일/빌드 검증·첫 워크플로부터 Library 캐시 키 전략 동반해 30~60% 단축). P0 백업·안전망 선행 후. Sources: GitHub Changelog 러너 가격 인하·Tenki Cloud 셀프호스트 과금 연기·game-ci.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **2026 모바일 게임 UI 핵심은 스프링 피직스 모션**(overshoot→bounce→settle·stiffness/damping 2파라미터로 무게감)·선형 트윈보다 물리 기반 반응이 표준화(4tech·Techqware·6/5 tabular figures/색맹안전과 겹치지 않는 신규 토픽). **🎨 신규 2순위**: **클린 HUD+prefers-reduced-motion 토글이 저비용 고임팩트 접근성 표준** — 모션 끄면 opacity/색 전환으로 대체(vestibular 접근성). **🎨 신규 3순위**: 리듬게임 주스는 "최소 입력→폭발적 캐스케이드 반응"(squash·stretch·파티클·색변화)이되 코어와 일치 필수(abagames·GameAnalytics). **연결 적용**: 양 프로젝트에 스프링 피직스 피드백+"모션 줄이기" 토글 — NumLink 버튼 스프링/노드 바운스·MeowBeat Perfect 파티클·DOTween Ease.OutBack 저비용 근사(신규 에셋 불필요).',
    lastUpdate: '6/6 토요일 리서치(토요일·2026 모바일 UI 핵심 스프링 피직스 overshoot→bounce→settle stiffness/damping 2파라미터·prefers-reduced-motion 토글 저비용 고임팩트 접근성 표준 모션 끄면 opacity/색 전환·리듬게임 주스 최소 입력→폭발적 캐스케이드 반응 단 코어와 일치 필수 신규): **🎨 P2 스프링 피직스 통합 피드백+모션 감쇠 토글 양 프로젝트 동시 도입**(NumLink 9-slice 버튼 프레스 스프링+연결 성공 노드 squash 바운스·MeowBeat Perfect 판정 파티클 버스트+노트 색변화 10~16프레임·Settings "모션 줄이기" 토글 ON 시 페이드+색전환 대체·DOTween Ease.OutBack 저비용·진행 중 작업 흡수). P0 백업·안전망 선행 후. Sources: 4tech·Techqware·Spring Animation 2026·prefers-reduced-motion 가이드·abagames·GameAnalytics.',
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
  '🚨 [백업 P0 10일째·위험 정체 재측정으로 정밀화] 6/5엔 "MeowBeat origin 마지막 푸시 03-28·69일 미백업"으로 봤으나 이는 main 기준이었고, 오늘 `git branch -vv` 실측 결과 진짜 위험은 **upstream 미설정(fatal)으로 추적조차 안 되는 작업브랜치 feature/song-ownership-migration의 6커밋(tip 04-12·단절 55일)** — 이 6커밋+미커밋 37파일이 단일 디스크 장애 시 전량 유실. ✅ NumLink 본진은 origin과 0/0 동기화로 양호',
  '🚨 [멈춤의 구조적 뿌리 규명] DevOps가 짚음 — NumLink·MeowBeat 둘 다 `.github` 디렉터리 **자체가 없어** CI/백업 자동화가 0이고, 그래서 작업이 전적으로 사람 손에 의존해 워킹트리에 고인다. ✅ QA 유지: MeowBeat 루트 실행 시 qa_static 0err·unity_validate 0err/1warn·run_regression 2/2 PASS·곡10·버그0·.meta 3종 삭제 GUID 참조 0 안전',
  '🚨 P0 [MeowBeat 백업 — 10일째 이월·Orchestrator·Developer·QA 일치·사용자 승인 후]: 미커밋 단일 작업(곡 다국어화 titleKo 11곡+미소유곡 톤다운+음량 슬라이더·QA 전수 결과 manifest titleKo만 추가·무결성 영향 0·.meta 삭제분 GUID 미참조 안전) 커밋 → upstream 미설정으로 추적 안 되던 작업브랜치 6커밋을 `git -C C:/Unity/Feedme push -u meowbeat HEAD`로 영구 추적 설정+한 번에 백업. tip 04-12·단절 55일·미커밋 37파일. **(새벽 실행이라 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [NumLink 회귀 안전망 복구 — 3일 연속 공백·악화·QA·Orchestrator 일치]: 유일 정식 테스트 AutoGenTests.cs가 워킹트리 삭제(D)로 악화(단 git checkout 복구 가능)·Tools/ 부재·검증툴 3종 없음 = 회귀탐지 자체 불가. `git -C C:/Unity/NumLink checkout`으로 AutoGenTests.cs 복구 + `C:\\Unity\\_ProjectTemplate\\Tools\\`에서 3종 복사+씬 경로 상수 갱신해 baseline 0-error 확보(qa_static.py 상대경로 결함 cwd 거짓 error 2건도 함께 보정)',
  '🛡 P1 [두 Unity 레포에 GameCI 빌드 검증 워크플로 1건씩 신규 — DevOps]: NumLink·MeowBeat 둘 다 .github 자체가 없어 CI/자동화가 0이고 이것이 작업이 워킹트리에 고이는 구조적 뿌리. GameCI(game-ci/unity-builder) 기반 최소 컴파일/빌드 검증 워크플로를 레포당 1건씩 작성해 골격을 세우고, 첫 워크플로부터 Library 캐시 키 전략(플랫폼별 키+restore-key 폴백)으로 30~60% 단축 확보',
  '🔧 P1 [MeowBeat 곡선택 분리 커밋 + Addressables PoC 1곡 — Developer]: titleKo+음량슬라이더+톤다운 묶음을 단일 커밋 `feat(songselect): 곡 한국어 제목 및 음량 옵션 추가`로 분리(P0 백업과 자연 연결)하고, Addressables 미적용 상태인 StreamingAssets/Songs 곡 데이터를 곡당 소그룹 Addressables로 전환하는 PoC 1곡 착수. Unity 6.3 LTS 정식 출시(Build Profiles·URP Bloom Kawase·Box2D v3·2026 CoreCLR)도 차후 검토',
  '🔍 P2 [무비용 ASO·모션·수익 메카닉 — 모두 P0 백업·안전망 후]: Content Writer — NumLink 출시 시점 애플 인앱이벤트 1종("신규 레벨팩"·"주간 챌린지" 이미지+카피 2~3줄·추가 개발 0·전환 +17%·검색 색인). Art Director — 스프링 피직스 통합 피드백+"모션 줄이기" 토글 양 프로젝트(NumLink 버튼 스프링/노드 바운스·MeowBeat Perfect 파티클·DOTween Ease.OutBack 저비용). Game Designer — MeowBeat "특별 간식(Golden Treat)" 단일 소비형 IAP를 농장 메타(먹이 2배) 한정으로 GDD 명문화(P2W 회피·매출 레버 1개). **모두 P0 후 착수**',
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
