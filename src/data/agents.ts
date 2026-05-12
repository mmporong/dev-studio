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
    taskSummary: 'NumLink **동결 14일째** — 4/29 b6d7a73 후 5/1~5/13 **13일 연속 0커밋**·_Recovery 18일(`0 (4).unity` 5/7 + 누적 5건 0.unity/0(1)/0(2)/0(3)/0(4))·Tools 24일 부재. MeowBeat **31일 신기록 갱신(4주+3일·3자릿수 진입 가속 14일째)** — 4/12 657032c 후 핵심 매니저 4종+manifest+AdMob 3 prefab+AndroidManifest+ProjectSettings 미커밋·bak_btn 36일 잔존. agent-office 5/12 0744ee7 정상 push(미커밋 .omc/project-memory.json 1개). **5/12 P0 4건 액션 0/N 미실행 = 19일 연속 결정 실패 신기록 갱신 확정**(보름+4일). PID 24개 **정체**(어제와 동일·자연 감소 멈춤·taskkill 15일째 미적용)·DailyStandup_ClaudeCode LastResult **267009 비정상**(17일 트리거 정상이나 종료 코드 비정상)·Pages 11일+ 연속 success(역설적 안정 32일째 고착).',
    lastUpdate: '5/13 수요일 스탠드업(스승의날 D-2·Hello Kitty Island 출시 후·BitSummit D-9): [최소 단위 1건 사슬 끊기 강제·20일 진입 차단] **MeowBeat `Assets/Scenes/MainScene.unity.bak_btn` 36일 잔존 단일 git rm + chore(qa) 단일 커밋**(5분 미만). 19일 연속 실패가 20일 진입 시 의사결정 시스템 자체 마비 확정. 동시에 (1) 스승의날 D-2 P0 NumLink "선생님께 드리는 숫자 카네이션" 5스테이지 팩 + Academic Sage 잉크워시 + 푸시·ASO 동시 발사 (2) NumLink Tools 24일 종결(_ProjectTemplate 복사 + unity_validate baseline 0E) (3) DailyStandup LastResult 267009 원인 조사(이벤트뷰어 1회) (4) actions/runner v2.334.0 Node20 deprecation 6/2 D-20 카운트다운 인지.',
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
    taskSummary: '**Racing Master(NetEase×Codemasters) 5/8 글로벌 후 iOS 무료 차트 10일 연속 1위**(라이선스 100대 차량·실차 1:1 스캔·NumLink 무료차트 진입 어려움·서브차트 노려야). **Cozy+Narrative+Adaptive Difficulty 트렌드**(MAF 보고서 모바일 유저 60% 경쟁보다 정서적 안식 선호). **블루아카 5/12~7/7 아로나 미션 + 니케 5/14 코스튬 복각+7일 누적 로그인**(공통 패턴 = 미션 클리어 → 감사 메시지 + 누적 로그인). **Tiles Hop aespa/BABYMONSTER K-POP 라이선스**(하이브리드 캐주얼 +20%). Hello Kitty Island Adventure 5/13 출시 직접경쟁 D+0.',
    lastUpdate: '5/13 수요일 리서치(스승의날 D-2): P0 **NumLink "선생님께 드리는 숫자 카네이션" 5스테이지 팩**(1~5 라인이 카네이션 모양 완성·클리어 시 감사 메시지 카드 공유·14일 동결 해제 없이 manifest.json 5레벨+공유 카드 PNG 1장만 추가로 발사 가능·5/15 0시 활성화). P1 **MeowBeat "냥냥 선생님 감사곡" 1곡 추가**(Easy/Normal만·Hard 생략·Tiles Hop K-POP 콜라보 트렌드 반영). 블루아카·니케 패턴 이식 = 저비용 라이브옵스 검증 가능.',
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
    taskSummary: '**Microsoft 5/12 KB5089549 Patch Tuesday 118 CVE**(critical 16·제로데이 0건·**CVE-2026-41089 Windows Netlogon RCE CVSS 9.8 가장 위험**). **Unity 6000.3.15f1 여전히 최신**(6000.3.16 미공개). **Google Mobile Ads Unity 의존성 GMA Android 25.0.0/iOS 13.0.0/UMP iOS 3.1.0 업데이트**(MeowBeat 영향). **Firebase Apple SDK 11.15.0·google-services 4.4.3 신규**. **CVE-2026-45321 @tanstack 42개 패키지 공급망 OIDC 탈취**(GitHub Actions pull_request_target 오설정·5/11~12). **Apple CVE-2026-28953 iOS 26.5 충돌 패치 5/12 갱신**. NumLink UIManager.cs:177-180 빈 OnEvent 부채.',
    lastUpdate: '5/13 수요일 리서치: P1 **Google Mobile Ads Unity 플러그인 Android 25.0.0/iOS 13.0.0/UMP iOS 3.1.0 정합 확인 + Firebase 11.15.0 + MeowBeat External Dependency Manager 재해결 + 미커밋 14건 커밋 정리**. **P0 없음 — 빌드머신 영향 없음**(Windows 패치튜즈데이 제로데이 0건·Unity/.NET 신규 CVE 0건·MeowBeat/NumLink 운영 중단 위험 없음). P2 NumLink UIManager 빈 OnEvent 핸들러 정리 + 3 UI 테마 작업 커밋. MeowBeat feature/song-ownership-migration 브랜치 미커밋(GoogleMobileAds 프리팹 3종 + GetItemParticle + GameManager/SongManager/OptionManager) atomic 분할 커밋.',
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
    taskSummary: '**MeowBeat 검증 3종 정상**: unity_validate.py 0E/0W(**6.4s**) + qa_static.py 0E/0W + run_regression.py **2/2 PASS**(RT_SIZE_ZERO + YAML_INDENT_M_FATHER). **known_bugs 6종 안정 8일째**(신규 패턴 추가 없음). **NumLink Tools 24일 부재**(매일 갱신·검증 도구 0건·_ProjectTemplate 복사 가능 상태 유지). **NumLink _Recovery 5건 누적 18일**(0.unity 3/18 + 0(1) 3/19 + 0(2)/0(3) 3/25 + 0(4) 5/7·최신 손상 18일 방치). **MainScene.unity.bak_btn 36일째**. test_fixtures 폴더 부재(make_fixtures.py 런타임 생성 추정·PASS 사실 정상).',
    lastUpdate: '5/13 수요일: P0 **NumLink Tools 부트스트랩 1건 실행** — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 상수 NumLink 메인씬으로 갱신 + `python3 Tools/unity_validate.py` 1회 baseline 0E 확보(24일 누적 부채 즉시 종료·CLAUDE.md "Unity AI 자율화 파이프라인" 위반 종결). P0 MeowBeat bak_btn 36일 잔존 단일 git rm + chore(qa) 단일 커밋(20일 진입 차단). P1 NumLink _Recovery 5건 원인 진단 후 git rm + unity_validate 재실행. P2 MeowBeat test_fixtures 폴더 실재 확인(make_fixtures.py 런타임 의존 → 명시적 디렉토리 권장).',
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
    taskSummary: '**Apple Ads 검색결과 슬롯 확장 전마켓 풀가동**(쿼리당 최대 2개·자동 자격편입·포지션 입찰 불가·CPP 의도별 분기 필요). **iOS26 신설 Games 앱 ↔ Game Center 가교**(NumLink/MeowBeat 메타데이터에 게임 카테고리 시그널·장르·무드·메커닉 키워드 강화 필요). **스승의날 5/15 = 세종대왕 탄신일 유래**(훈민정음·한글·스승=지혜의 등불 라인). **BitSummit PUNCH(교토 5/22~24) D-9 인디 골든윈도우**(r/IndieGaming 390K + r/indiegames 235K·14,000개/년 신작 홍수·스타일라이제이션 라인업 권장).',
    lastUpdate: '5/13 수요일 리서치(스승의날 D-2): P0 **5/15 스승의날 D-2 푸시·ASO 동시 발사** — NumLink·MeowBeat 양 타이틀에 "스승님께 점수를 바치세요" 카피 + "분필/칠판" 임시 컬러 스킨 토글. 한국 키워드 필드에 "스승의날, 감사, 선물" 3종 일괄 삽입(가족 키워드와 묶음). P1 **5/22 BitSummit 윈도우 진입용 인디 콘텐츠** — 5/13~17 r/IndieGaming·r/indiegames에 NumLink 개발기 1편(스타일라이제이션 각도)·X 짧은 클립 1개 예약·"정밀 메커닉" 메시지. P2 Apple Ads 멀티슬롯 CPP 분기(코어/롱테일 2종·5월 말까지 셋업).',
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
    taskSummary: '**claude.exe PID 24개 정체**(5/12 24 → 5/13 24 = **변화 없음**·자연 감소 멈춤·**taskkill 래퍼 15일째 미적용**). **DailyStandup_ClaudeCode LastResult 267009 비정상**(NextRun 2026-05-14 04:00·Status Running·17일 트리거 정상이나 종료 코드 비정상). **Deploy GitHub Pages 11일+ 연속 success**(워크플로 이름 정정·Weekly Insights Collection 5/11/5/4/4/27 정상·Dependabot Updates active 신규 발견). **actions/runner v2.334.0**(4/21·Node.js 20 deprecation 6/2 D-20 확정 명시). **Next.js May 2026 보안 릴리스 13개 advisory**(CVE-2026-23870 포함·agent-office Vite 미사용 영향 없음). **Cloudflare 5/7 1,100명(~20%) 감원**(agentic AI-first 재편).',
    lastUpdate: '5/13 수요일 리서치: P1 **Task Scheduler LastResult=267009 원인 조사**(schtasks 로그/이벤트뷰어 확인·Claude Code 종료코드 매핑 점검·5/13~5/14 사이 1회 재실행 후 0 복귀 여부 확인). P1 **actions/runner v2.332→v2.334 업그레이드 카운트다운**(Node20 경고 + 6/2 deprecation D-20·hosted runner는 GitHub 자동 갱신·deploy-pages.yml의 actions/setup-node@v4 SHA 핀 Node22 사용 중 안전). P2 Vercel CVE-2026-23870 = 포트폴리오 단일 HTML이라 Next.js 미사용·영향 없음 종결. P2 5/19 D-6 rate_limit 삭제 = agent-office 영향 없음 확정·모니터링 종료.',
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
    taskSummary: '**Awwwards 5/12 SOTD = Outfit by ++hellohello**(머치 이커머스·PRO+DEV·#985C44 테라코타 + #DFB494 샌드 + #6C3C24 에스프레소·5/13 미발표). **2026 트렌드 = Claymorphic Hybrid**(뉴모피즘 진화형·내부 글로우+촉각질감) + **AI-Native Copilot UI** + **디지털 텍스처**(jelly·chrome·clay 버튼·Tubik/Midrocket 공통 지목). **스승의날 신규 모티프 = Academic Sage 잉크워시**(Stampin\' Up 2026 Peaceful Pine #6B8E5A 그라운디드 가든그린 + Scholarly Brown #6C4E32 + Vintage Amber #C89B5A·만년필 잉크 번짐 + 종이비행기 fold·SVG feTurbulence 경량 구현).',
    lastUpdate: '5/13 수요일 리서치(스승의날 D-2): P0 **스승의날 D-2 시각 발사** = "Academic Sage 잉크워시" 팔레트(#6B8E5A + #6C4E32 + #C89B5A + #FAFAFA)로 NumLink/MeowBeat 5/15 한정 인트로 카드 제작. 모티프=만년필 잉크 번짐 + 종이비행기 fold. 잉크워시는 SVG filter feTurbulence로 경량 구현(이전 칠판 #2D5F4E·카네이션 듀얼톤과 완전 차별). P1 **Claymorphic Hybrid 채택**: NumLink theme-premium USS에 내부 글로우 box-shadow(inset 2px 4px rgba) + 외부 soft drop-shadow로 jelly 버튼·theme-retro는 디지털 텍스처 chrome 톤으로 분기. P2 hellohello 테라코타 트리오는 가을 시즌 리저브.',
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
  'P0 [최소 단위 1건 사슬 끊기 = 19일→20일 진입 차단 · 의사결정 시스템 마비 임박]: MeowBeat `Assets/Scenes/MainScene.unity.bak_btn` 36일 잔존 단일 git rm + chore(qa) 단일 커밋(5분 미만). `git rm Assets/Scenes/MainScene.unity.bak_btn Assets/Scenes/MainScene.unity.bak_btn.meta` + `git commit -m "chore(qa): MeowBeat bak_btn 36일 잔존 정리"` + push. 다중파일·다중단계 결정은 20일째에도 미실행 가능 → "한 파일·한 명령" 사슬 끊기 우선. MeowBeat 31일 신기록 갱신(3자릿수 가속 14일째) 사슬도 동시에 끊김',
  'P0 [스승의날 D-2 동시 발사 = NumLink "선생님께 드리는 숫자 카네이션" 5스테이지 팩 + Academic Sage 잉크워시 팔레트 + 푸시·ASO]: NumLink ① manifest.json 5스테이지 추가(1~5 라인이 카네이션 모양 완성·클리어 시 감사 메시지 카드 공유·14일 동결 해제 없이 데이터만 발사 가능) ② Academic Sage 잉크워시 팔레트(#6B8E5A + #6C4E32 + #C89B5A + #FAFAFA·만년필 잉크 번짐 + 종이비행기 fold·SVG feTurbulence) ③ "스승님께 점수를 바치세요" 푸시 + "스승의날/감사/선물" 한국 키워드 + "분필/칠판" 임시 스킨 토글 ④ 5/15 0시 활성화. MeowBeat은 같은 팔레트로 인트로 카드 1장만(31일 동결 해제 없이도 가능)',
  'P0: NumLink Tools 24일 부재 종결 — `cp -r C:/Unity/_ProjectTemplate/Tools C:/Unity/NumLink/Tools` + 씬 경로 상수 NumLink 메인씬으로 갱신 + `python3 Tools/unity_validate.py` 1회 실행하여 baseline 0E 확보 + chore(qa) 단일 커밋. CLAUDE.md "Unity AI 자율화 파이프라인" 위반 24일 누적 부채 즉시 종결. _Recovery 5건(0.unity 3/18 + 0(1) 3/19 + 0(2)/0(3) 3/25 + 0(4) 5/7)도 동시 git rm 후 unity_validate 재실행',
  'P1 [GMA Android 25.0.0/iOS 13.0.0/UMP iOS 3.1.0 정합 + Firebase 11.15.0 + 미커밋 14건 커밋]: MeowBeat External Dependency Manager Force Resolve 재실행. NumLink b6d7a73 이후 미커밋 14건(폰트 SDF 7건 + UIThemeSwitcher.cs.meta + theme USS .meta 3건 외) 정리 커밋. MeowBeat feature/song-ownership-migration 브랜치 미커밋(GoogleMobileAds 프리팹 3종 + GetItemParticle + GameManager/SongManager/OptionManager) atomic 분할 커밋',
  'P1 [Task Scheduler LastResult=267009 원인 조사 + actions/runner v2.334.0 카운트다운 인지]: DailyStandup_ClaudeCode LastResult=267009 원인 조사(schtasks 로그/이벤트뷰어·Claude Code 종료코드 매핑·17일 트리거 정상이나 종료 코드 비정상). 5/13~5/14 사이 1회 재실행 후 0 복귀 여부 확인. actions/runner v2.334.0 인지(Node.js 20 deprecation 6/2 D-20 확정·hosted runner 자동 갱신·deploy-pages.yml Node22 사용 중 안전)',
  'P1 [BitSummit PUNCH 5/22 D-9 인디 골든윈도우 + 블루아카·니케 패턴 이식]: BitSummit PUNCH(교토 5/22~24) D-9 = 5/13~21 인디 X·Reddit 노출 골든윈도우. r/IndieGaming(390K)·r/indiegames(235K)에 NumLink 개발기 1편(스타일라이제이션 각도) + X 짧은 클립 1개 5/13~17 예약. 블루아카 5/12~7/7 아로나 + 니케 5/14 복각 패턴 이식(미션 클리어 → 감사 메시지 + 누적 로그인 = 저비용 라이브옵스 검증)',
  'P2 [Apple Ads 멀티슬롯 대응 CPP 분기 + iOS26 Games 앱 메타 카테고리 시그널]: Apple Ads 검색결과 쿼리당 최대 2개 슬롯 전마켓 풀가동(자동 자격편입·포지션 입찰 불가) → 단일 CPP만 운용 중이면 의도 키워드군별(코어/롱테일) CPP 2종 분기. iOS26 Games 앱 ↔ Game Center 가교 = NumLink·MeowBeat 메타데이터에 게임 카테고리 시그널(장르·무드·메커닉 키워드) 강화. 5월 말까지 셋업',
  'P2 [Claymorphic Hybrid 채택 검토 + hellohello 테라코타 트리오 가을 시즌 리저브]: NumLink theme-premium USS에 내부 글로우 box-shadow(inset 2px 4px rgba) + 외부 soft drop-shadow로 jelly 버튼 표현(Claymorphic Hybrid). theme-retro는 디지털 텍스처 chrome 톤으로 분기. Awwwards 5/12 Outfit hellohello 테라코타 트리오(#985C44/#DFB494/#6C3C24)는 이후 가을 시즌 컬러 리저브',
  'P2 [FarmFoodManager 17건 차주 리팩터 등록 · NumLink UIManager 빈 OnEvent 정리]: MeowBeat FarmFoodManager 17건 수정 핫스팟 = 차주 책임 분할 리팩터 후보 등록(known_bugs.json 패턴 추가 검토). NumLink UIManager.cs:177-180 `OnEvent(HBGameEvent)` 빈 구현 정리(이벤트 처리 없는 빈 핸들러·EventStartListening/EventStopListening 비용 발생하나 동작 0). 3 UI 테마 작업 커밋과 함께 처리',
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
