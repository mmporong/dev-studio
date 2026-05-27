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
    taskSummary: '**✅ 결정 마비 33일 만에 균열 — 2일 연속 P0 실행 성공**: 어제 bak_btn 완전 삭제(find 0건) + 오늘 메인이 **UIThemeSwitcher.cs.meta 단독 커밋 27d67fe 직접 실행**(GUID 휘발 위험 해소)·"결정만 하고 실행 안 함" 악순환 14일 만에 차단. NumLink **재동결·미커밋 41→40파일**(2건 P0 처리·4/29 b6d7a73 이후·feature/uitoolkit 브랜치·Phase 4·5 거의 완료·Phase 6 킥 미착수). MeowBeat **46일 = 6주+4일**(곡 10개 = MVP 컷라인 충족·feature/song-ownership-migration 체류·Sprint2 디자인/Sprint3 먹이주기 FarmScene 파란화면 blocker). **🔍 PKM 정정 2건**: ① 태스크 실제명 = **PKM_GBrain_Sync_Daily**(이전 회의 `_Daily` 누락 오기 = 쿼리 실패 유발) ② 근본원인 = **gbrain CLI WASM `Aborted()` 즉사**(embeddinggemma 임베딩·3일 연속 동일·재시도 무의미·자동복구 불가). **DailyStandup/JobResearch 정상**: 다음 5/29 04:00·Status=Running·LastResult=267009(=실행 중). agent-office Pages 배포 5건 success(5/27 47초). **마감 카운트다운**: Steam Next Fest 자산 6/3 D-6·Imagen EOL 6/24 D-27·GHA Node24 6/16 D-19·WWDC 6/8 D-11. 오늘 = 목요일·1개월 임계 D+4·균열 흐름 형성 직후.',
    lastUpdate: '5/28 목요일 스탠드업(✅ 결정 마비 33일 만에 균열·2일 연속 P0 실행·UIThemeSwitcher.cs.meta 커밋 27d67fe 직접 실행·MeowBeat 46일 곡 10개 MVP 충족·PKM_GBrain_Sync_Daily 근본원인 WASM Aborted() 확정): **✅ [완료] UIThemeSwitcher.cs.meta 단독 커밋**(어제 미실행 P0를 오늘 회의에서 메인 직접 실행·GUID 휘발 해소) + **🚨 P0 PKM_GBrain_Sync_Daily 일시 비활성화 + WASM Aborted() 패치 P1 등록**(매일 03:00 무의미한 실패 누적 차단·로그 리다이렉트로 에러 캡처) + **🚨 P0 NumLink Tools 부트스트랩 10m**(자동 회귀 검증 0건 해소·균열 흐름 잇기) + **🔧 P1 2일 연속 실행 흐름 유지 = MeowBeat 코어 4파일 커밋 또는 NumLink 40파일 커밋·태깅**(6.3 LTS 검증 전 롤백 안전망) + **🔍 P2 Arrows 하트 모드·듀오톤 테마·Ask Play ASO 컨셉 메모**(신규 리서치 적용).',
    priority: 'high',
    energy: 80,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🚀 시장 신규 1순위**: **Arrows 화살표 퍼즐 2026-04 급부상** — Miniclip **Arrows–Puzzle Escape 2,090만 DL(전체 3위)**·**Arrows GO! 1,610만**·핵심 메커닉 = **방향+순서 의존**(막힌 화살표는 경로 먼저 비워야 이동)으로 **NumLink 연결 순서 의존성과 동일 계열**. **무압박+긴장 양립**: 타이머 없이 **하트 3개 실수 제한**만 사용·코지 분위기 유지하며 실수에 무게 부여. **리텐션 벤치마크**: 퍼즐 장르 **D1 31.85%/D30 5.35%**·하이브리드캐주얼 목표 D1 35~45/D7 20. **매출 동력**: Royal Match $1.3B(2025) 여전 1위·신규 동력은 콘텐츠 업데이트 + **스트릭(연속 출석) 손실회피 습관화**. **GDD 통합 메시지**: NumLink에 타이머 대신 하트 3개로 무압박 코지 유지 + 순서 힌트로 흥행 수요 정렬.',
    lastUpdate: '5/28 목요일 리서치(목요일·1개월 임계 D+4·Arrows 화살표 퍼즐 신규): **🔥 P1 NumLink "하트 3개 실수 제한 + 순서 힌트" 모드 도입 검토**(타이머 대신 하트로 무압박 유지·"막힌 노드는 선행 연결 먼저 풀어야" 시각 힌트·기존 별점과 충돌 없이 추가·4월 화살표 퍼즐 흥행 수요 정렬) + **P2 NumLink 스트릭(연속 출석) 손실회피 습관화 컨셉 메모**(Royal Match 신규 동력) + **P2 MeowBeat 리듬↔농장 단일 루프 1차 설계 이월**(곡 클리어 콤보 등급 → 농장 수확량 결정적 매핑). Sources: Miniclip Arrows–Puzzle Escape·Arrows GO!·Sensor Tower April 2026·하이브리드캐주얼 리텐션 벤치마크 D1 31.85%.',
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
    taskSummary: '**✅ UIThemeSwitcher.cs.meta 해소 완료**: 오늘 메인이 단독 커밋 27d67fe로 git 추적 전환(어제 본인이 지적한 GUID a9f063 휘발 위험 종결). **🚀 기술 신규 1순위**: **Unity 6.3 LTS(6000.3.0f1) 2025-12 정식 출시**(지원 종료 2027-12·신규 권장)·모바일: **2D URP Box2D v3 저수준 물리**(멀티스레드·결정성)·**Bloom Dual/Kawase 필터**(모바일 저해상도 최적)·**Sprite Atlas Analyser**·Tile 기반 인스턴스화 성능 개선·**NumLink/MeowBeat 둘 다 2D 모바일 = 직접 수혜**. **🚀 기술 신규 2순위**: **Unity Hub 독립 CLI 2026-04-21**(별도 바이너리·`unity upgrade` 자체 업데이트·시작 **5초→100ms 미만**·JSON/TSV 출력 = CI/AI 자율화 파이프라인 직결). **MeowBeat 미커밋 핵심**: SongData.cs·manifest.json+10·GameManager.cs·SongManager/OptionManager·AndroidManifest(광고)·이월 지속(orphan GUID 위험 없음).',
    lastUpdate: '5/28 목요일 리서치(목요일·1개월 임계 D+4·Unity 6.3 LTS+Hub CLI 신규·UIThemeSwitcher.cs.meta 해소 검증): **P1 NumLink 미커밋 40파일을 6.3 LTS 업그레이드 검증 전 커밋·태깅하여 롤백 안전망 확보** 후 6.3 시험 브랜치에서 **Sprite Atlas Analyser로 2D 아틀라스 효율 점검**(둘 다 2D 모바일 직접 수혜) + **P1 MeowBeat 코어 4파일 단일 PR 분리 커밋**(이월 종결) + **P2 Unity Hub CLI 도입으로 빌드 자동화**(시작 5초→100ms·CI 직결). Sources: Unity 6.3 LTS(6000.3.0f1) 릴리스 노트·Unity Hub CLI 26.4.21 공지.',
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
    taskSummary: '**✅ UIThemeSwitcher.cs.meta 해소 검증**: 같은 폴더 다른 .cs는 .meta 짝 추적·UIThemeSwitcher만 미추적이었으나 **오늘 메인이 단독 커밋 27d67fe로 git 추적 전환 완료**(`git ls-files` 확인)·GUID 재생성→씬/uxml 참조 깨짐 리스크 제거. **🚨 NumLink Tools 부재 지속**: `C:/Unity/NumLink/Tools/` 폴더 자체 없음 = **자동 회귀 검증 0건 = 최대 리스크**(MeowBeat만 보유). **MeowBeat 무결**: 루트 실행 시 unity_validate.py·qa_static.py 모두 **0 error**·곡 10개 전부 오디오 실재·빈 난이도 없음·default 곡 4개 정상. **⚠️ 실행 주의**: MeowBeat qa_static/unity_validate는 상대경로 기반 → 반드시 프로젝트 루트 `C:/Unity/Feedme`에서 실행(Tools 폴더에서 돌리면 manifest 미발견 오탐).',
    lastUpdate: '5/28 목요일 리서치(목요일·1개월 임계 D+4·UIThemeSwitcher.cs.meta 해소 검증 완료): **🚨 P0 10m NumLink Tools 부트스트랩**(MeowBeat Tools 또는 `_ProjectTemplate/Tools/`를 NumLink에 복사 + "01. Scenes/" 공백 경로 1줄 수정 + baseline 0 error·자동 회귀 검증 0건 해소·균열 흐름 잇는 최소·검증된 작업) + **P1 .meta git 추적 점검 룰 qa_static 추가**(디스크 존재만이 아닌 `git ls-files` 추적 여부 확인) + **P2 MeowBeat 신곡 manifest 노트 데이터 무결성 재검증**. Sources: NumLink/MeowBeat Tools 재실측·git ls-files 검증.',
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
    taskSummary: '**📦 콘텐츠 1순위**: **구글플레이 "Ask Play"(제미나이 챗봇) + 인앱 콘텐츠 색인화** — AI 추천이 기존 순위 위에 노출·**키워드 나열 → AI 시맨틱 색인 대응으로 ASO 전환 필요**. **📦 2순위**: **양 스토어 모두 설치량 → 리텐션/7일 잔존율 기반 랭킹 전환**·**플레이어블 광고 CTR 11.34%**(정적 배너 18배·완주형 보상광고 완료율 95%). **📦 3순위**: **구글플레이 wake lock 5% 임계 신규 코어바이탈**(3/1부터 미준수 앱 노출 제외). **NumLink 적용**: 난이도/모드를 인앱 콘텐츠 deep link로 노출(검색 색인)·스크린샷 캡션을 자연어 문장("숫자 연결 퍼즐, 두뇌 트레이닝")·Ask Play 예상 질문 Q&A형 설명·7일 잔존율을 마케팅 KPI 1순위.',
    lastUpdate: '5/28 목요일 리서치(목요일·구글플레이 Ask Play AI 색인·리텐션 기반 랭킹 전환 신규): **P1 NumLink 스토어 등록정보를 AI 시맨틱 색인 대응으로 재작성**(① 난이도/모드 인앱 콘텐츠 deep link ② 스크린샷 캡션 자연어 문장 ③ Ask Play 예상 질문 Q&A형 설명 첫 2줄) + **7일 잔존율 마케팅 KPI 1순위 설정**(설치량→리텐션 랭킹 전환) + **P2 NumLink 한 판 미니 데모 플레이어블 광고 제작**(CTR 11.34%·정적 배너 18배·보상광고 완료율 95%). Sources: ASO World May 2026·App Store Ranking 2026 Retention·CTR Benchmark 2026·Playio Rewarded Ad 2026.',
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
    taskSummary: '**agent-office GitHub Pages 정상**: 최근 배포 5건 전부 success(마지막 5/27 04:17 KST 47초)·Weekly Insights 5/25 success·**두 워크플로우 모두 actions를 commit SHA로 핀 = 워크플로우 주입에 견고**. **🚨 보안 신규**: **Megalodon 공격(5/18)** — 6시간 내 **5,561개 GitHub 저장소에 악성 CI 워크플로우 주입·시크릿 탈취**·**감염 33%가 인포스틸러로 탈취된 PAT 유출이 진입점**. **⚠️ 잔여 리스크**: weekly-insights.yml `permissions: contents:write` 보유(Pages는 contents:read)·토큰 탈취 시 푸시 가능 → **이번 주 토큰 회전 권고** + GitHub 5/22 staged publishing(npm 2FA 게이트) 검토. **🚨 인프라 블로커**: **PKM_GBrain_Sync_Daily 3일 연속 LastResult=1 실패**(이름 정정: `_Daily` 접미사 포함)·무인 재시도 무한 반복 중·원인 미수집 = 로그 캡처 필요. **DailyStandup/JobResearch Running**(267009=실행 중 정상).',
    lastUpdate: '5/28 목요일 리서치(목요일·Megalodon 5,561개 레포 공격·PKM_GBrain_Sync_Daily 3일 연속 실패): **🚨 P0 PKM_GBrain_Sync_Daily 다음 1회 실행을 stdout/stderr 리다이렉트(`>> sync.log 2>&1`)로 감싸 종료코드·에러 메시지 확보**(OBSERVE→ROOT→FIX·추측 수정 금지·Orchestrator의 WASM Aborted() 가설 교차 검증) + **P1 weekly-insights.yml `contents:write` 토큰 회전**(Megalodon PAT 유출 진입점 대비) + **P2 GitHub staged publishing(npm 2FA 게이트) 적용 검토**. Sources: The Hacker News·StepSecurity·SecurityWeek Megalodon·gh run list mmporong/agent-office.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **듀오톤(2색 split-tone) + 보석톤 컬러 시그니처 부상** — 썸네일에서 장르 식별되는 컬러 시그니처가 **리텐션 핵심**. **🎨 2순위**: **시간대 적응형 컬러 무드**(아침=라이트+활기·집중=저대비·저녁=웜톤+느린 전환·AI 레이아웃 아닌 순수 컬러축). **🎨 3순위**: **하이퍼새츄레이트 1포인트 악센트**(근-블랙 #09090B에 일렉트릭블루·네온그린·코랄 1포인트만). **NumLink 3테마 듀오톤 재정의 제안**: Kawaii=코랄핑크 #FF7AA2↔크림 #FFF3E6 / Premium=사파이어 #1E3A8A↔샴페인골드 #E8C97A(근-블랙 배경) / Retro=머스타드 #E0A526↔틸 #1F7A6E·연결선·완성 숫자만 일렉트릭블루 #2D6BFF 1포인트 강조. **AI 슬롭 회피 준수**: 민트+다크/뻔한 그라데이션 배제·테마별 단일 시그니처로 광고 썸네일 인지도↑. **구현 방식**: 동일 레이아웃·동일 에셋 슬롯에 머티리얼 프리셋만 스왑(동적 Instantiate 금지 준수).',
    lastUpdate: '5/28 목요일 리서치(목요일·듀오톤+보석톤 컬러 시그니처/시간대 적응형 컬러 무드 신규): **🔥 P1 NumLink 3테마를 듀오톤 컬러 시그니처로 재정의**(Kawaii 코랄핑크↔크림·Premium 사파이어↔골드·Retro 머스타드↔틸·연결선만 일렉트릭블루 #2D6BFF 1포인트·머티리얼 프리셋 스왑·동적 Instantiate 금지 준수·테마별 단일 시그니처로 광고 썸네일 인지도↑) + **P2 MeowBeat 시간대 적응형 컬러 무드**(낮 농장=라이트/저녁=웜톤) + **P2 Mulmaru OFL 한글 픽셀 폰트 NumLink 04_Fonts SDF 생성 이월**(Maplestory 라이선스 회색지대 대체). Sources: 2026 컬러 트렌드 듀오톤·보석톤·Awwwards/Mobbin 2026.',
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
  '✅ [완료] NumLink UIThemeSwitcher.cs.meta 단독 커밋 27d67fe — GUID 휘발 위험 해소: 어제 미실행 P0를 오늘 회의에서 메인이 직접 실행. `git add` 후 단독 커밋(fix(meta): UIThemeSwitcher.cs.meta 추적 추가). `git ls-files`로 추적 전환 확인 = 재클론 시 GUID 재생성→씬/uxml 참조 깨짐 리스크 제거. **어제 bak_btn 삭제에 이어 2일 연속 P0 실행 = 33일 결정 마비 균열**',
  '🚨 P0 [PKM_GBrain_Sync_Daily 일시 비활성화 + WASM Aborted() 패치 P1 등록 · 매일 무의미한 실패 누적 차단]: 근본원인 = gbrain CLI가 WASM 레벨 Aborted()로 매회 즉사(embeddinggemma 임베딩)·3일 연속 동일·재시도 무의미 = 자동복구 불가. 태스크 일시 비활성화(또는 알림만) 후 다음 1회는 stdout/stderr 리다이렉트(`>> sync.log 2>&1`)로 감싸 에러 메시지 확보 → OBSERVE→ROOT→FIX. 패치는 별도 P1',
  '🚨 P0 [NumLink Tools 부트스트랩 10m · 자동 회귀 검증 0건 해소]: NumLink는 Tools 폴더 자체가 없어 자동 회귀 검증 0건 = 최대 리스크. `_ProjectTemplate/Tools`(또는 MeowBeat Tools)를 NumLink에 복사하고 씬 경로 상수("01. Scenes/" 공백 경로 포함)만 수정 후 baseline 0 error 확인. **2일 연속 실행 흐름을 잇는 최소·검증된 작업**',
  '🔧 P1 [2일 연속 P0 실행 흐름 유지 — MeowBeat 코어 커밋 또는 NumLink 40파일 정리 · 사흘째로 잇기]: MeowBeat 코어 4파일(SongData/GameManager/SongManager/manifest)을 단일 PR로 분리 커밋(이월 종결) 또는 NumLink 미커밋 40파일을 6.3 LTS 검증 전 커밋·태깅(롤백 안전망). **결정 마비 균열 흐름을 사흘째로 잇는 것이 핵심**',
  '🔍 P2 [신규 리서치 적용 — Arrows 하트 모드·듀오톤 테마·Ask Play ASO · 여유 시 컨셉 메모부터]: Game Designer — NumLink 하트 3개 실수 제한+순서 힌트 모드 검토(Arrows 화살표 퍼즐 2,090만 DL). Art Director — NumLink 3테마 듀오톤 컬러 시그니처 재정의(Kawaii 코랄핑크↔크림 등). Content Writer — 스토어 등록정보 AI 시맨틱 색인(Ask Play) 대응 + 7일 잔존율 KPI화. Developer — Unity 6.3 LTS Sprite Atlas Analyser 검토',
  '🔐 P2 [agent-office weekly-insights.yml 토큰 회전 · Megalodon 대비]: Megalodon 5/18 5,561개 레포 공격 진입점이 인포스틸러 PAT 유출. agent-office는 actions SHA 핀으로 견고하나 weekly-insights.yml이 `contents:write` 토큰 보유 → 이번 주 토큰 회전 + GitHub staged publishing(npm 2FA 게이트) 검토',
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
