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
    taskSummary: 'NumLink **동결 16일째(2자릿수+6·신기록 갱신)** — 4/29 11:37 b6d7a73 후 5/1~5/10 **10일 연속 0커밋**. MeowBeat **29일째 정체 신기록 갱신**(4/12 657032c·미커밋 GameManager+SongManager+SongData+OptionManager+manifest.json+AdMob 3 prefab+AndroidManifest+ProjectSettings). agent-office 5/9 1e8ae1c push(스탠드업 1건만)·.omc/project-memory.json M 1건. **5/9 결정 9건 전수 추적 = 완료 0·이월 9 = 15일 연속 결정 실패 임박**(보름 풀스코어 미실행 진입 직전). _Recovery/0 (4).unity 15일째 잔존·MeowBeat bak_btn 28일째.',
    lastUpdate: '5/10 일요일 스탠드업(미국 모성절 D-day): [최소 단위 1건 사슬 끊기] **NumLink `_Recovery/0 (4).unity` 단일 파일 git rm + chore(qa) 단일 커밋**(5분 미만·15일 연속 결정 실패 사슬 끊기 단일 단위). 동시에 (1) MeowBeat 매니저 4종 atomic 분할(5/12 패치튜즈데이 D-2·5/8 AdMob 가이드 점검 후) (2) NumLink Tools 19일째 종결(_ProjectTemplate 복사) (3) DailyStandup 종료 코드 0 정상화(16일 STILL_ACTIVE 차단). 미실행 시 17일째/30일째/16일 연속 실패 진입.',
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
    taskSummary: '**Hello Kitty Island Adventure v2.16 5/13 Apple Arcade 출시**(코지 IP+퀘스트·MeowBeat 고양이 IP 코지 톤 직접 경쟁 등장). **미드코어 D30 5.35%·ROAS 39.5% 최고효율**(GameAnalytics 2026 4월·일일 세션 6~7회) — NumLink 1~3분 챌린지 모드 도입 시 D30 벤치마크 도달 직접 근거. **컴투스 5/15 스승의날 쿠폰 이벤트 사전 공지** = 국내 라이브옵스 표준 케이던스 확립(MeowBeat 사전 예약).',
    lastUpdate: '5/10 리서치: P2 NumLink 1~3분 챌린지 모드 GDD 골격 1장 작성(타이머·스코어·보상 흐름·D30 5.35% 벤치마크 도달 일일 세션 빈도 견인 핵심). Hello Kitty Island Adventure v2.16 5/13 출시 직후 ASO 흡수 윈도우 활용. 추후 듀엣/시즌패스/컬렉션 메타로 확장.',
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
    taskSummary: '**Unity 6000.3.15f1 5/8 출시**(HDRP/iOS 픽스 포함). **Gradle 9.5.0 5/7**(Settings 플러그인 Kotlin 타입세이프 액세서). **Google Mobile Ads Unity 플러그인 문서 5/8 업데이트**(_GoogleMobileAdsInit.prefab 통합 가이드·Splash Scene 배치 + Android/iOS 광고 단위 ID 분리·AGP 9.2.0 + Gradle 9.5.0 호환성 매트릭스) — MeowBeat 미커밋 GoogleMobileAds 3 prefab + AndroidManifest 변경분 직격. **5/12 패치튜즈데이 D-2 진입**.',
    lastUpdate: '5/10 리서치: P0 MeowBeat AdMob 변경분 커밋 전 5/8 공식 가이드 기준 _GoogleMobileAdsInit.prefab 패턴 점검(Splash Scene 배치·Android/iOS 광고 단위 ID 분리) + AGP 9.2.0/Gradle 9.5.0 호환성 빌드 검증 후 커밋. P0 MeowBeat 매니저 4종 atomic 분할(33일 경과·5/12 D-2 안전화). P2 Unity 6000.3.15f1 5/8 픽스 영향 사전 점검.',
    priority: 'high',
    energy: 88,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '**NumLink Tools/ 폴더 19일째 부재**(_ProjectTemplate에 즉시 복사 가능 상태·CLAUDE.md "Unity AI 자율화 파이프라인" 매일 위반). **MeowBeat known_bugs.json 6종(RT_SIZE_ZERO/YAML_DUPLICATE_FILE_ID/YAML_HEADER_REF_MISMATCH/YAML_INDENT_M_FATHER/MANIFEST_MISSING_AUDIO/NOTE_OUT_OF_LANE) 8일째 동결**(auto_fix는 INDENT_M_FATHER 1종뿐). **MeowBeat 핵심 매니저 4파일 100줄 변경분 마지막 관련 커밋 4/7 → 33일 경과**(작업 손실 임박).',
    lastUpdate: '5/10: P0 MeowBeat 매니저 4종(GameManager+59·SongManager-16·OptionManager+42·SongData+1) 오늘 안에 atomic 분할 커밋 + 푸시(작업 손실 차단·5/12 D-2 안전화). P0 NumLink Tools 템플릿 복사로 검증 파이프라인 복구(unity_validate+qa_static+run_regression 1회 PASS 확인). P0 _Recovery/0 (4).unity 단일 파일 git rm.',
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
    taskSummary: '**Apple App Store 스크린샷 캡션 텍스트가 검색 랭킹 키워드 필드 신규 포함**(yellowHEAD ASO Update 5/5) — 스토어 캡션 카피 자연 키워드 삽입 필수. **Google Play "Ask Play" Gemini 챗봇 스토어 리스팅 임베드**(메타데이터·리뷰 기반 자동 응답·AppTweak) — 리뷰 품질 가중치 급증. **Unity Ads 워터폴 미디에이션 1/31 종료 + AdMob TCF v2.3 3/1 강제 시행** — MeowBeat 캠페인 송출 전 SDK 점검 필수. **미국 모성절 5/10 + 스승의날 5/16 D-6 + 부처님오신날 5/25 D-15** 잔여 트래픽 흡수 윈도우.',
    lastUpdate: '5/10 일요일 리서치: P1 NumLink 한국 캡션 카피에 "숫자 연결 퍼즐 가족과 함께"·"두뇌 퍼즐 게임" 등 자연 키워드 5종 자연 삽입(Apple 신규 랭킹 필드 활용·35세 이상 60% Sensor Tower 타겟) + MeowBeat "엄마 고양이와 아기 고양이" 듀엣 노트맵 1개 5/11(월) 제작. 마이크로 인플루언서(1만~10만) 진정성 콘텐츠 후속(BAT 2026). P2 부처님오신날 5/25 D-15 슬롯 사전 예약 컴투스 5/15 케이던스 벤치마크.',
    priority: 'medium',
    energy: 78,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**agent-office Pages 최근 5건 모두 success**(36~47s·5/5~5/9 연속·6일 누적 SUCCESS). **DailyStandup_ClaudeCode 5/10 04:00 정시 실행**·결과 267009 STILL_ACTIVE **16일 연속**(자동화 정상이지만 종료 코드 0 미반환). **Node20 GH Actions deprecation 2026/6 마이그레이션 확정**(애초 4월 → 6월 연기). **셀프호스트 v2.329 미만 3/16 차단 시행 중**.',
    lastUpdate: '5/10 리서치: P1 DailyStandup task action 종료 코드 0 정상화 1건(daily_standup.bat 끝줄 `exit /b 0` 강제 + claude.exe 후처리 정리·14일째 미적용 분 포함·ASCII 인코딩 유지). P2 NumLink GameCI 도입 시 Node22 마이그레이션 사전 점검(2026/6 deprecation D-30+). 5/19 rate_limit code_scanning_upload 삭제 D-9.',
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
    taskSummary: '**Awwwards Studio Namma SOTD 5/9 선정**(PRO+DEV+Developer Award·에이전시 아카이브 톤). **Behance 2026 키네틱 타이포 = 메인 캐릭터화 트렌드**(프로그레시브 블러+스프링 모션 → M3 Expressive 동조). **어버이날 카네이션 분홍·살구·복합색 다채화·빈티지 케이크+돈케이크 SNS 인증 패턴 후속**. NumLink Art/Sprites 폴더 미생성(0%) 매일 갱신.',
    lastUpdate: '5/10 일요일 리서치: P1 NumLink 카와이 테마에 어버이날·모성절 한정 "카네이션 듀얼톤(분홍 #FFB7C5 + 살구 #FFCBA4)" 스킨 변형 .uss 추가 + 숫자 연결선에 M3 Expressive식 스프링 모션(살짝 출렁이는 dismiss 잔향) 적용. 5/8~5/10 한정 노출 토큰으로 SNS 인증 친화적 비주얼 확보(미국 모성절 5/10 잔여 흡수). 기존 별점 카드 럭셔리 톤(#E8E5DF+#35311F)은 분리 토큰으로 병행.',
    priority: 'medium',
    energy: 80,
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
  'P0 [최소 단위 1건 사슬 끊기 = 15일 연속 결정 실패 임박 차단]: NumLink `_Recovery/0 (4).unity` 단일 파일 git rm + chore(qa) 단일 커밋(5분 미만). `git rm "Assets/_Recovery/0 (4).unity" "Assets/_Recovery/0 (4).unity.meta"` + `git commit -m "chore(qa): remove _Recovery regression file"` + push. 다중파일·다중단계 결정은 16일째에도 다시 미실행될 가능성 높음 → "한 파일·한 명령" 최소 단위로 사슬 끊기 우선. 미실행 시 16일 연속 결정 실패 신기록(보름 풀스코어) 진입',
  'P0: MeowBeat 핵심 매니저 4종 atomic 분할 커밋 — 5/12 패치튜즈데이 D-2 안전화. GameManager.cs(+59)+SongManager.cs(-16)+OptionManager.cs(+42)+SongData.cs(+1) 4파일 100줄 변경분 마지막 관련 커밋 4/7 → 33일 경과 작업 손실 임박. 5/8 Google Mobile Ads Unity 통합 가이드(_GoogleMobileAdsInit.prefab) 기준 AdMob 변경분 점검 후 atomic: (a) feat(song): 매니저 4+manifest.json (b) chore(deps): GoogleMobileAds 3 prefab+AndroidManifest+Resolver (c) chore(project): ProjectSettings. AGP 9.2.0/Gradle 9.5.0 호환성 빌드 검증 PASS 후 커밋',
  'P0: NumLink Tools/ 19일 부재 종결 + .gitignore /.omc/ 1줄 추가 — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 갱신 + .gitignore에 `/.omc/` 1줄 추가 + chore(qa) 단일 커밋. 복사 후 unity_validate + qa_static + run_regression 1회 실행 PASS 확인. CLAUDE.md "Unity AI 자율화 파이프라인" 위반 매일 갱신 종결',
  'P1: NumLink 한국 캡션 카피 자연 키워드 5종 + MeowBeat "엄마/아기 고양이" 듀엣 노트맵 5/11(월) 제작 — Apple App Store 스크린샷 캡션이 검색 랭킹 키워드 필드 신규 포함(yellowHEAD ASO 5/5) 활용. NumLink 한국 캡션에 "숫자 연결 퍼즐 가족과 함께"·"두뇌 퍼즐 게임"·"숫자 두뇌 트레이닝"·"머리쓰는 게임"·"가족 퍼즐" 자연 삽입(35세 이상 60% Sensor Tower 타겟). MeowBeat 듀엣 노트맵 1개로 미국 모성절 5/10 + 스승의날 5/16 + 부처님오신날 5/25 잔여 흡수. 마이크로 인플루언서(1만~10만) 진정성 콘텐츠 후속(BAT 2026)',
  'P1: NumLink 카와이 테마 카네이션 듀얼톤(#FFB7C5+#FFCBA4) + M3 Expressive 스프링 모션 — Awwwards Studio Namma SOTD 5/9 + Behance 2026 키네틱 타이포 메인 캐릭터화 트렌드 동조. theme-kawaii.uss에 어버이날·모성절 한정 카네이션 듀얼톤 스킨 변형 추가 + 숫자 연결선 dismiss 시 살짝 출렁이는 스프링 모션 잔향 적용. 5/8~5/10 한정 노출 토큰으로 SNS 인증 친화적 비주얼 확보',
  'P1: DailyStandup task action 종료 코드 0 정상화 — 16일 연속 STILL_ACTIVE(267009) 매일 갱신 차단. 자동화는 정상이지만 코드 의미상 "여전히 실행 중" 반환. daily_standup.bat 끝줄 `exit /b 0` 강제 + claude.exe 후처리 정리(taskkill 14일째 미적용 분 포함) 진짜 적용. ASCII 인코딩 유지·BOM 금지',
  'P2: NumLink 1~3분 챌린지 모드 GDD 골격 1장 — GameAnalytics 2026 4월 보고서 미드코어 D30 5.35%·ROAS 39.5% 최고효율 + 일일 세션 6~7회 벤치마크. NumLink 1~3분 짧은 챌린지 모드 도입 = 일일 세션 빈도 견인 직접 근거. GDD 골격 1장(타이머·스코어·보상 흐름) 작성. Hello Kitty Island Adventure v2.16 5/13 출시 직후 ASO 흡수 윈도우 활용',
  'P2: 부처님오신날 5/25 D-15 한국 라이브옵스 사전 슬롯 + 컴투스 5/15 케이던스 벤치 — 컴투스 5/15 스승의날 쿠폰 이벤트 사전 공지 = 국내 라이브옵스 표준 케이던스. NumLink/MeowBeat 5/25 슬롯 사전 예약·"한 박자 쉬어가는 휴일" 콘셉트 카피 초안 1통. 차주 작업 큐',
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
