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
    taskSummary: '**🔴 6/7 액션아이템 5건 전부 미완료(컬러만 부분)**: 복붙 1줄 명령으로 전환했는데도 ① MeowBeat 백업 ② NumLink 안전망 ③ API36 백로그 ④ 두 레포 CI ⑤ 온보딩/프리뷰 — 전부 실행 0(컬러는 4/12 커밋·신규 아님). **🚨 MeowBeat 백업 P0 12일째**: feature/song-ownership-migration upstream 미설정·이제 master 대비 **ahead 67커밋**(어제 6→farm 커밋 더 쌓여 가중)·미커밋 37파일·meowbeat/main ahead 37 유지. **🚨 NumLink 안전망 5일째**: AutoGenTests 4파일 삭제(D)·Tools 0개·**push 불필요한데도 5일째 미복구=삭제 의도성 강력 시사**·본진 feature/ugui-layerlab은 origin 0/0 동기화. **✅ agent-office**: 정상. **🎯 메타 규명**: 복붙 명령으로 바꿔도 5건 실행 0 = 병목은 명령 형태가 아니라 실행 트리거 부재. 오늘 = 월요일·1개월 임계 D+15·재측정/복붙 명령 반복 멈추고 단일 yes/no 결정 질문으로 환원.',
    lastUpdate: '6/8 월요일 스탠드업(🔴 6/7 복붙 1줄 명령 5건도 전부 실행 0 확정·병목=명령 형태 아닌 실행 트리거 부재·🚨 MeowBeat 백업 P0 12일째 ahead 67커밋 가중·미커밋 37파일·🚨 NumLink 안전망 5일째 push 불필요한데도 미복구=삭제 의도성 강력 시사): **🚨 P0[결정질문·최우선] NumLink 안전망**(AutoGenTests 삭제 의도적인가? yes=영구제거/no=git checkout 복구·Tools 3종은 의도 무관 신규 복사) + **🚨 P0[복붙] MeowBeat 백업**(ahead 67커밋·미커밋 커밋 후 `push -u meowbeat`·사용자 아침 1줄) + **🛡 P1 CI 골격 game-ci unity-activate 라이선스 자동화 차주 단일 목표+Android API36 백로그(8/31)** + **🎮🎨 P2 NumLink streak 캘린더·60초 TTFV 온보딩·롱테일 ASO**. 메타: 처방 형태를 바꿔도 실행 0이면 처방 내용과 회의 작동 방식을 의심하는 날.',
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
    taskSummary: '**🚀 시장 신규 1순위**: **7일 연속 streak 7+일 도달 시 일일 참여 2.3배·streak+마일스톤 병행 시 30일 이탈 35%↓** — 핵심은 평탄한 일일 로그인 보상(구식)이 아니라 **Day7 보상을 Day1~6 합산보다 크게 설계하는 지수형 곡선**·프리즈/유예 1회로 죄책감 회피(Plotline·UX Mag). **🚀 신규 2순위**: 배틀패스 글로벌 IAP 15%·연 286억$·캐주얼은 짧은 소비형 패스 적합(고양이 스킨·농장 보상 시즌 단위). **🚀 신규 3순위**: **리워드 광고 패배화면+일일보상상자 배치 시 opt-in 64%·통화 2~3배 또는 "보상 2배" 부스터형 전환 70%↑·총광고매출 68%↑·eCPM $18~45**. **적용 메시지**: NumLink 지수형 streak 캘린더(Day7>Day1~6 합·프리즈 1회·7일 도달 데일리 2.3배)+패배/클리어 화면 "다음 레벨 보상 2배" 리워드 광고.',
    lastUpdate: '6/8 월요일 리서치(월요일·1개월 임계 D+15·7일 streak 도달 시 일일 참여 2.3배·streak+마일스톤 30일 이탈 35%↓ Day7 보상>Day1~6 합·배틀패스 글로벌 IAP 15% 연 286억$ 캐주얼은 짧은 소비형 패스·리워드 광고 패배화면 opt-in 64% 부스터 전환 70%↑ 매출 68%↑ 신규): **🎮 P2 NumLink 데일리 챌린지+지수형 streak 캘린더(Day7>Day1~6 합·프리즈 1회로 죄책감 회피)+패배/클리어 화면 "다음 레벨 보상 2배" 리워드 광고**·MeowBeat 시즌 단위 짧은 소비형 패스. P0 백업·안전망 선행. Sources: gamegrowthadvisor·plotline·uxmag·deconstructoroffun·udonis·maf.ad·coinis·adreact.',
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
    taskSummary: '**🆕 기술 신규 1순위**: **Unity Sentis(현 Inference Engine) com.unity.ai.inference 2.6.1 출시**·ONNX opset 7~25·Float32→Uint8 양자화로 메모리 절감·**단 추론 CPU 단독 실행으로 모바일 NPU 미지원**→리듬/퍼즐 런타임 AI 부적합(발열·지연)·사전계산 데이터 방식 유지가 정답. **🆕 신규 2순위**: **Burst+IL2CPP ARM64 관리코드 대비 20~40배**·Incremental IL2CPP로 변경분만 재트랜스파일해 빌드 시간 절감·CPU 집약 경로(퍼즐 생성·경로 탐색)에 Job System+Burst. **🔎 코드 분석**: 두 레포 최근 커밋은 MeowBeat farm 애니메이션·NumLink UI 수정 위주·신규 기술 도입 없음. **메시지**: MeowBeat AI는 사전계산 유지(런타임 추론 회피)+NumLink 퍼즐 생성 Burst+Job 검증을 차기 스프린트 후보로 등록+Android API36 백로그(8/31 이월).',
    lastUpdate: '6/8 월요일 리서치(월요일·🆕 Unity Sentis com.unity.ai.inference 2.6.1 ONNX opset 7~25 Float32→Uint8 양자화·단 추론 CPU 단독 모바일 NPU 미지원=게임 런타임 부적합·Burst+IL2CPP ARM64 관리코드 대비 20~40배 Incremental IL2CPP 변경분만 재트랜스파일 신규): **🔧 P2 MeowBeat 차기 AI는 Sentis 런타임 추론 대신 사전계산 데이터 유지(발열·지연 회피)+NumLink 퍼즐 생성 Burst+Job System(ARM64) 검증을 차기 스프린트 후보 등록**·P1 Android API36 백로그(8/31). P0 백업·안전망 선행. Sources: docs.unity3d.com(Inference Engine 2.6)·discussions.unity.com(NPU 미지원)·support.unity.com(IL2CPP)·resources.unity.com(Burst ARM64).',
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
    taskSummary: '**✅ MeowBeat 검증 3종 ALL PASS**: unity_validate 0 error/0 warning·qa_static 0 error/0 warning·run_regression 2/2 PASS(RT_SIZE_ZERO·YAML_INDENT_M_FATHER)·곡10(audio 누락 0)·known_bugs 6패턴·미해결 버그 0건·안정 유지·추가 조치 불필요. **🚨 최대 리스크=NumLink 안전망 5일째 부재**: Tools 폴더 부재(검증툴 4종 전부 없음)+Assets/Tests/Editor 빈 폴더(AutoGenTests 4파일 D)+남은 건 BoardDataTester.cs 1개뿐인데 정식 단위 테스트가 아닌 에디터 유틸 → 회귀·검증·단위테스트 0의 무방비 상태로 코드 변경(최근 UI 수정) 지속. **⚠️ 잠재 악화**: 양 프로젝트 미커밋 누적(MeowBeat 37·NumLink 36)+?? _Recovery/·AutoQATests/·.bak 잔존 리뷰 사각지대.',
    lastUpdate: '6/8 월요일 리서치(월요일·✅ MeowBeat 검증 3종 ALL PASS unity_validate 0err·qa_static 0err·run_regression 2/2·곡10·known_bugs 6패턴·버그0 안정·🚨 NumLink 안전망 5일째 부재 Tools 0개+AutoGenTests 4파일 D+BoardDataTester만 잔존 정식 테스트 아님 회귀 무방비): **🚨 P0 NumLink Tools 3종은 삭제 의도와 무관하게 즉시 복사·경로 패치(검증 도구는 테스트 파일과 별개로 필요)+AutoGenTests git restore 복구 여부는 사용자 yes/no로 확정**(5일째 미복구는 의도적 삭제 가능성·잘못된 복구 강행 금지). MeowBeat 안정·조치 불필요. Sources: unity_validate/qa_static/run_regression 실행·git status·manifest 파싱.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **롱테일 키워드 전환율이 헤드 키워드 대비 2.5배·중소형 게임은 비브랜드 검색에서 오가닉 설치의 37~52% 확보**(헤드 상위10위 12~18%)·"relaxing number connect puzzle"처럼 **장르+기믹+무드 조합 롱테일**이 단일 "number puzzle"보다 전환·노출 우위(6/4~6/7 인앱이벤트·CPP·앱 프리뷰 영상·아이콘 A/B와 겹치지 않는 신규 토픽). **📦 신규 2순위**: **디스코드 친구 1명 동반 시 플레이시간 중앙값 6배·3명이면 8배**·인디 디스코드 커뮤니티가 2025 킥스타터 2,600만$ 견인·자체 웹스토어 판매로 앱스토어 30% 수수료 우회가 표준 전략 부상. **적용 메시지**: NumLink ASO를 롱테일 조합으로 전면 교체·MeowBeat 무드+캐릭터 롱테일 5개 분산·비브랜드 오가닉(37~52%) 1차 KPI(디스코드는 출시 후 백로그).',
    lastUpdate: '6/8 월요일 리서치(월요일·롱테일 키워드 전환율 헤드 대비 2.5배·중소형 게임 비브랜드 오가닉 37~52% 유입 헤드 상위10위는 12~18%·장르+기믹+무드 조합이 단일 키워드보다 강함·디스코드 친구 1명 동반 플레이시간 6배 3명 8배·인디 디스코드 킥스타터 2,600만$ 견인 신규): **🔍 P2 NumLink ASO 키워드를 단일 "number puzzle"→롱테일("relaxing number connect puzzle"·"offline brain puzzle no wifi")로 전면 교체+MeowBeat "cute cat rhythm game"류 무드+캐릭터 롱테일 5개 분산·비브랜드 오가닉(37~52%) 1차 KPI**(디스코드 커뮤니티는 출시 후 리텐션 백로그). P0 백업·안전망 선행. Sources: mobileaction·asoworld·neilpatel·discord·growthhq.',
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
    taskSummary: '**🛡 CI 현황(실측 6/8)**: NumLink·MeowBeat 둘 다 `.github/workflows/` 부재(레포 자체는 존재→원격 연결·CI 추가만 하면 됨)·**12일째 동일**·agent-office는 deploy-pages.yml+weekly-insights.yml 정상·**최근 배포 3회 전부 success(33/36/50초)**·오늘 CI/CD 변경 없음. **🆕 신규**: **GitHub OIDC 키리스 인증**(장기 시크릿 불필요·단기 JWT 교환·2026-06-18 이후 생성 레포부터 owner/repo 변경불가 ID 클레임 자동·name-reuse 공격 방어)·**Artifact Attestation**(`actions/attest@v4` 한 줄 SLSA Build L2·공개 레포 기본값화)·**game-ci unity-activate**(무료 개인 라이선스 만료·재활성화 자동화·2FA TOTP). **메시지**: 두 Unity 레포 CI 신설 시 처음부터 game-ci unity-activate+GitHub Secrets로 라이선스 자동화 설계·차주 단일 실행 목표로 못박기.',
    lastUpdate: '6/8 월요일 리서치(월요일·🛡 두 Unity 레포 .github 부재 12일째 동일 CI 전무·agent-office Pages 3회 연속 success 33~50초·오늘 변경 없음·🆕 GitHub OIDC 키리스 인증 2026-06-18 이후 생성 레포부터 owner/repo 변경불가 ID 클레임 자동·Artifact Attestation SLSA Build L2 공개 레포 기본값화·game-ci unity-activate 라이선스 자동화 신규): **🛡 P1 두 Unity 레포 CI 신설 시 처음부터 game-ci unity-activate+GitHub Secrets로 라이선스 자동화 설계+"최소 1개(빌드 OR 테스트) 워크플로 추가"를 차주 단일 실행 목표로 못박기**(12일째 부재 종결). P0 백업·안전망 선행. Sources: docs.github.com(OIDC·Attestation)·actions/attest-build-provenance·game-ci/unity-activate·game.ci/docs.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **2026 온보딩 정석은 "첫 60초 TTFV(Time To First Value·가치도달시간)"** — 다운로드 후 60초 내 게임 가치를 체감 못 하면 이탈(6/7 엘리베이티드 뉴트럴 컬러·6/6 스프링 피직스와 겹치지 않는 신규 토픽). **🎨 신규 2순위**: **강제 가입벽 대신 게스트 플레이 기본화·스킵 버튼 가시화**·온보딩 5단계 초과 시 단계당 완료율 10~15%↓이라 단계 최소화. **🎨 신규 3순위**: **"Nothing here" 빈 상태 금지** — "첫 퍼즐을 풀어 별을 모아보세요!" 같은 동기부여 마이크로카피+따뜻한 일러스트로 전환(짧은 마이크로인터랙션 만족도 +28%)·민트+다크 그라데이션 AI슬롭 배제. **연결 적용**: NumLink 텍스트 없이 첫 라인 연결 60초 유도+친근한 빈 기록 화면·MeowBeat 빈 농장에 "첫 곡 연주하면 고양이가 찾아와요".',
    lastUpdate: '6/8 월요일 리서치(월요일·2026 온보딩 정석 첫 60초 TTFV 가치도달시간·60초 내 미체감 시 이탈·강제 가입벽→게스트 플레이 기본화·스킵 버튼 가시화 5단계 초과 시 단계당 완료율 10~15%↓·"Nothing here" 빈 상태 금지→친근한 마이크로카피+따뜻한 일러스트 만족도 +28%·민트+다크 AI슬롭 배제 신규): **🎨 P2 NumLink+MeowBeat 공통 "첫 60초 퀵윈+친근한 빈 상태"** — NumLink 텍스트 없이 애니메이션 화살표+하이라이트로 첫 라인 연결 60초 유도·빈 기록 화면 "첫 퍼즐을 풀어 별을 모아보세요!"·MeowBeat 빈 농장 "빈 방석+발자국+첫 곡 연주하면 고양이가 찾아와요"·게스트 플레이. P0 백업·안전망 선행. Sources: muz.li·medium.com(온보딩 UX)·udonis.co(FTUE)·uxdesign.cc·appcues.com.',
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
  '🔴 [처방을 바꿔도 실행 0 — 메타-실패 확정] 6/7 액션아이템 5건(MeowBeat 백업·NumLink 안전망·API36 백로그·두 레포 CI·온보딩/프리뷰/컬러)을 전수 대조한 결과 **컬러만 부분(4/12 커밋·신규 아님), 나머지 전부 미완료**. **6/7에 처방 전달 형태를 "복붙 1줄 명령"으로 바꿨는데도 5건 전부 실행 0** → 병목은 명령의 형태가 아니라 **"사용자가 아침에 회의록을 열어 명령을 실제로 실행하는 트리거/루틴 자체가 없다"**는 것. 12일째 같은 P0를 재기술하는 회의는 그 자체로 오작동',
  '✅ [QA 안전망 비대칭 5일째] MeowBeat 검증 3종 ALL PASS(unity_validate 0err·qa_static 0err·run_regression 2/2·곡10·버그0·안정). 반면 NumLink는 Tools 0개+AutoGenTests 4파일 삭제(D)+BoardDataTester만 잔존(정식 테스트 아님)으로 회귀 무방비 5일째. ✅ agent-office는 .omc/project-memory.json만 변경·정상',
  '🚨 P0 [결정질문·최우선] NumLink 안전망 — 5일째 push 불필요한 git checkout인데도 미복구 = **AutoGenTests 삭제가 의도적일 가능성 강함**(5일간 "복구하라"는 처방 자체가 오진일 수 있음). 재측정·복붙 명령 반복 멈추고 **단일 yes/no 질문**: "AutoGenTests 삭제는 의도적인가? Y=회의 P0에서 영구 제거 / N=`git -C C:/Unity/NumLink checkout -- \"Assets/Tests/Editor/AutoGenTests.cs\" \"...meta\" \"...asmdef\" \"...asmdef.meta\"`로 복구". **삭제 의도와 무관하게** `C:\\Unity\\_ProjectTemplate\\Tools\\`에서 unity_validate·qa_static·run_regression·known_bugs.json을 NumLink/Tools/로 복사+경로 갱신(검증 도구는 테스트와 별개로 필요)',
  '🚨 P0 [복붙 명령] MeowBeat 백업 — 12일째 이월·이제 master 대비 **ahead 67커밋**(어제 6→farm 커밋 더 쌓여 위험 가중)·미커밋 37파일. 사용자 아침 1줄: ① `git -C C:/Unity/Feedme add -A` ② `git -C C:/Unity/Feedme commit -m "feat(songselect): 곡 음량 옵션 및 한국어 제목 추가"` ③ `git -C C:/Unity/Feedme push -u meowbeat feature/song-ownership-migration`. **새벽 무인이라 게임 레포 push는 사용자 아침 승인 후**',
  '🛡 P1 [CI 골격 라이선스 자동화 + Android API36 백로그 — DevOps·Developer]: 두 Unity 레포 .github 12일째 부재가 백업 P0의 구조적 뿌리. CI 신설 시 처음부터 **game-ci `unity-activate`+GitHub Secrets로 무료 개인 라이선스 만료·재활성화 자동화**를 설계하고 "최소 1개(빌드 OR 테스트) 워크플로 추가"를 **차주 단일 실행 목표**로 못박기. Google Play 2026-08-31 타겟 API 36(Android 16) 강제로 MeowBeat(현 35)를 8/31 마감 백로그 등록',
  '🎮🎨🔍 P2 [출시 준비 — 모두 P0 후]: Game Designer — NumLink 데일리 챌린지+지수형 streak 캘린더(Day7>Day1~6 합·프리즈 1회로 죄책감 회피·7일 도달 데일리 2.3배)+패배/클리어 화면 "보상 2배" 리워드 광고(opt-in 64%). Art Director — NumLink/MeowBeat 첫 60초 TTFV 온보딩(텍스트 없이 첫 라인 연결·게스트 플레이·친근한 빈 상태). Content Writer — NumLink ASO 롱테일 전면 교체("relaxing number connect puzzle")·비브랜드 오가닉(37~52%) 1차 KPI. Developer — NumLink 퍼즐 생성 Burst+Job(ARM64) 검증 차기 후보. **모두 P0 후 착수**',
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
