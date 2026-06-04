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
    taskSummary: '**🔎 6/4 "동반 정지" 재규명**: 양 레포 커밋 0건은 "손이 멈춤"이 아니라 **"커밋·백업이 멈춤"** — MeowBeat 워킹트리엔 곡 다국어화+음량 조절 작업이 미커밋으로 존재(Developer 분석)·작업물이 백업 못 된 채 고인 게 더 위험. **🚨 백업 P0 9일째**: `git branch -vv` 실측 — MeowBeat origin 마지막 푸시 03-28·오늘(6/5)까지 **69일 미백업**·meowbeat/main ahead 37 미푸시(6/4 "58일"은 04-07 가정값·origin 최신은 실제 03-28). **백업 양호**: NumLink 본진 feature/ugui-layerlab origin과 0/0 완전 동기화(HEAD 06-02). **🚨 NumLink 안전망 2일 연속 부재**: Tools/ 없음·Assets/Tests .cs 0개·AutoGenTests 삭제 유지=회귀탐지 불가. **❌ 이월**: 6/4 P0 2건(MeowBeat 백업·NumLink 안전망) 모두 미완료. **agent-office** .omc/project-memory.json만 변경·정상. 오늘 = 금요일·1개월 임계 D+12·워킹트리에 고인 작업을 커밋·푸시로 못 박을 날.',
    lastUpdate: '6/5 금요일 스탠드업(🔎 6/4 "동반 정지" 재규명=정지 아니라 커밋·백업 정지·MeowBeat 워킹트리에 곡 다국어화+음량 조절 미커밋 고임·🚨 백업 P0 9일째 origin 기준 재정정 마지막 푸시 03-28·69일 미백업·meowbeat/main ahead 37·NumLink 본진 origin과 0/0 동기화 양호·🚨 NumLink 안전망 2일 연속 부재): **🚨 P0 MeowBeat 백업**(미커밋 단일 작업 커밋→push 69일치 백업+upstream 설정·사용자 승인 후) + **🚨 P0 NumLink 안전망 복구**(템플릿 Tools 3종 복사·baseline 0-error) + **🔧 P1 오디오 레이턴시 보정 슬라이더+dspTime PlayScheduled** + **🎮 P1 메타게임 진행층 설계 안건** + **🎨 P1 NumLink 색맹 안전+tabular figures** + **🔍 P2 ASO 스크린샷·일본어 현지화·Library 캐시 PoC**. 메타: 6/4의 "동반 정지"는 정확히는 "커밋·백업 정지"·작업은 있으나 안전하게 못 박지 못한 게 본질.',
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
    taskSummary: '**🚀 시장 신규 1순위**: 코어 루프 밖 **메타게임층(컬렉션·맵·홈 꾸미기)이 D3~D5부터 재실행의 "주된 이유"**가 되어야 함·무한 컬렉션 모델(완성 동기를 영구 진행 엔진으로)이 신흥 트렌드(Naavik·Mobidictum)·**NumLink·MeowBeat 둘 다 코어 위에 메타 진행층이 없음 = 빈 구멍**. **🚀 신규 2순위**: **리듬 난이도는 BPM이 아니라 노트밀도·패턴** — 160BPM 4박 하우스가 110BPM 스윙트리플보다 쉬움·차트 구조=인트로→빌드업→드롭(rhythm-games.com). **🚀 신규 3순위**: **iOS 톱100 그로싱 61%가 길드 탑재(2년새 +20%p)**·우리 규모엔 비동기 소셜(선물·공동목표)이 현실적(ironSource). **적용 메시지**: NumLink·MeowBeat 공통 "코어 밖 메타 진행층" 1개를 다음 스프린트 설계 안건으로 — MeowBeat 고양이 컬렉션 도감(무한 진행)·NumLink 월드맵 진행 스파인으로 D3~D5 재방문 동기.',
    lastUpdate: '6/5 금요일 리서치(금요일·1개월 임계 D+12·메타게임층 컬렉션/맵이 D3~D5 재방문 주동력·무한컬렉션 모델 부상·리듬 난이도는 BPM 아닌 노트밀도·패턴 160BPM 4박>110BPM 스윙트리플·iOS 톱100 그로싱 61% 길드 탑재 +20%p 신규): **🎮 P1 NumLink·MeowBeat 공통 코어 밖 메타 진행층 1개 다음 스프린트 설계 안건 채택**(MeowBeat 고양이 컬렉션 도감 무한 진행·NumLink 월드맵 진행 스파인·D3~D5 재방문 동기). P0 백업·안전망 선행. Sources: Naavik·Game Growth Advisor·Mobidictum·rhythm-games.com·ironSource.',
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
    taskSummary: '**🔎 코드 분석**: MeowBeat 미커밋 변경은 단일 응집 작업 — **"곡 선택 UI 다국어화 + 음량 조절"**. SongData titleKo 필드 추가·manifest 11곡 한글 제목·GameManager 언어 전환 시 곡 버튼 갱신·미보유곡 톤다운·OptionManager SongVolume 슬라이더(0~1·PlayerPrefs)·SongManager 곡별 기본 밸런스×사용자 음량 통합·부수 unity-mcp #beta 교체·collab-proxy 제거. **🆕 기술 신규 1순위**: **Unity Adaptive Performance v5.0** 신규 스케일러(Decal·Layer-culling)+Android ADPF·삼성 HW 온도 API 연동(2026-02 문서)으로 발열 스로틀링 자동 대응. **🆕 신규 2순위**: 리듬게임 동기화 표준 = DSP Buffer "Best latency"+Decompress On Load+**AudioSettings.dspTime/PlayScheduled(1초 예약창)**·안드 오디오 레이턴시가 최대 변수라 **플레이어 보정 슬라이더(±ms·PlayerPrefs) 필수**. **메시지**: 이미 옵션 패널 작업 중이니 음량 슬라이더 옆에 레이턴시 보정 슬라이더를 함께 넣고 BGM을 dspTime PlayScheduled로 전환.',
    lastUpdate: '6/5 금요일 리서치(금요일·🔎 MeowBeat 미커밋 변경 정체 규명=단일 작업 곡 다국어화 titleKo 11곡+음량 조절 SongVolume 슬라이더·🆕 Unity Adaptive Performance v5.0 발열 스로틀링 자동대응 Android ADPF·삼성 온도 API·리듬 동기화 표준 dspTime+PlayScheduled+안드 레이턴시 보정 슬라이더 필수 신규): **🔧 P1 MeowBeat 옵션 패널에 오디오 레이턴시 보정 슬라이더(±ms·PlayerPrefs) 추가 + BGM 재생을 AudioSettings.dspTime PlayScheduled로 전환**(안드 판정 어긋남 정면 대응·옵션 작업 중이라 흡수 효율적). P0 백업·안전망 선행. Sources: Unity Manual AP 6000.4·AP 5.0 manual·Native Audio dsp-sync·AudioSettings.dspTime.',
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
    taskSummary: '**✅ 유지**: MeowBeat `qa_static.py`·`unity_validate.py` 모두 0 error/0 warning·곡 10개·오디오 누락 0건(6/4와 동일·미해결 버그 0건). **🔎 정합성 확인**: manifest.json 변경(+10줄)은 **titleKo 한글 곡명 필드 추가뿐** — audioFile·songId·노트 데이터 모두 불변이라 무결성 영향 0(Developer 규명 다국어화 작업의 데이터측·안전). **🚨 최대 리스크 = NumLink 안전망 2일 연속 공백**: 검증툴 3종(unity_validate.py·qa_static.py·known_bugs.json) 여전히 부재·`Assets/Tests`·`Assets/AutoQATests` 정식 테스트 `.cs` 0개(BoardDataTester.cs 1개는 Editor 데이터 검사 유틸이라 정식 테스트 아님)·AutoGenTests 삭제 유지 = 회귀탐지 자체 불가.',
    lastUpdate: '6/5 금요일 리서치(금요일·✅ MeowBeat qa_static·unity_validate 모두 0/0·곡10 오디오누락0 무결·미해결 버그 0건 유지·manifest 변경은 titleKo 추가뿐 무결성 영향 0·🚨 NumLink 검증툴 3종 부재+정식 테스트 .cs 0개 회귀탐지 불가 2일 연속): **🚨 P0 NumLink 안전망 복구 — `C:\\Unity\\_ProjectTemplate\\Tools\\`(또는 MeowBeat Tools)에서 unity_validate.py·qa_static.py·known_bugs.json NumLink Tools/로 복사+씬 경로 상수 갱신**(회귀탐지 공백 즉시 종료). MeowBeat는 안정·추가 조치 불필요. Sources: qa_static.py·unity_validate.py 실행·git diff·Glob 전수.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **첫 스크린샷이 앱스토어 검색결과 노출의 핵심**·iOS 첫 3장 A/B로 전환 +10~25%·아이콘 변경만으로 구글플레이 +8~12% 리프트(AppFollow·Strataigize·6/4 광고 후크/틱톡 CPI와 겹치지 않는 신규 토픽). **📦 신규 2순위**: **한·일 정식 현지화 시 캐주얼 다운로드 2~3배**·스크린샷만 현지화해도 전환 +5~15%(ASOMobile·영어 추가 최적화보다 ROI 높음). **📦 신규 3순위**: 첫 90일 **푸시 1회만 받아도 잔존 3배**·단 주 2회 초과 발송 시 삭제 급증(Pushwoosh). **적용 메시지**: NumLink·MeowBeat 첫 스크린샷 3장을 실제 게임플레이+소셜프루프(별점/플레이수) 중심으로 재제작 + 일본어 스토어 메타데이터·스크린샷 현지화 우선 채택.',
    lastUpdate: '6/5 금요일 리서치(금요일·첫 스크린샷이 검색결과 노출 핵심·iOS 첫3장 A/B 전환 +10~25%·아이콘 구글 +8~12%·한·일 정식 현지화 다운로드 2~3배·스크린샷 현지화만 +5~15%·첫90일 푸시 1회만 받아도 잔존 3배 주2회 초과 시 삭제 급증 신규): **🔍 P2 NumLink·MeowBeat 첫 스크린샷 3장 실제 플레이+소셜프루프 중심 재제작 + 일본어 스토어 메타데이터·스크린샷 현지화 우선 채택**(영어 추가 최적화보다 ROI 높음). P0 백업·안전망 선행 후. Sources: AppFollow·Strataigize·ASOMobile·Game Growth Advisor·Pushwoosh.',
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
    taskSummary: '**🛡 CI 상태**: agent-office GitHub Pages 최근 5건 전부 success·31~42초로 안정(Deploy GitHub Pages+Weekly Insights). **🚨 구조 공백**: NumLink·MeowBeat 둘 다 `.github` 디렉터리 **자체가 부재** → CI/CD 워크플로 전무·빌드 100% 수동(9일째 이월 중인 MeowBeat 백업 P0의 근본 원인). **🆕 신규**: **game-ci 2레이어 캐시(LFS+Library) 도입 시 워크플로 30~60% 단축·캐시 적중률 70~90%**(RunsOn 2026.1·6/4 game-ci unity-builder/Node24 전환과 겹치지 않는 "캐시 전략" 단일 신규 토픽). **메시지**: NumLink에 먼저 `actions/cache`로 Library 캐시 PoC 도입(플랫폼별 키+restore-key 폴백)·첫 워크플로 생성 시점부터 캐시 키 전략 함께 설계해 초기부터 30~60% 단축.',
    lastUpdate: '6/5 금요일 리서치(금요일·agent-office Pages 5건 연속 success 31~42초 안정·🚨 NumLink·MeowBeat .github 디렉터리 자체 부재 CI/CD 전무 빌드 100% 수동·🆕 game-ci 2레이어 캐시 LFS+Library 워크플로 30~60% 단축 적중률 70~90% RunsOn 2026.1 신규): **🔍 P2 NumLink Unity Library 캐시 PoC 도입**(actions/cache·Library/ 경로·플랫폼별 키+restore-key 폴백·첫 워크플로부터 캐시 키 전략 설계해 30~60% 단축). P0 백업·안전망 선행 후. Sources: game-ci/unity-actions Caching Strategy(DeepWiki)·GitHub Actions Cache Strategy·GitHub Docs Dependency caching.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: 숫자 퍼즐은 가변폭 글리프가 자릿수 정렬을 흔들어 **tabular figures(고정폭 숫자)가 2026 가독성 베스트프랙티스** — NumLink 3테마 폰트를 tabular 변형으로 통일하면 같은 자리 숫자가 항상 같은 폭으로 정렬(DesignMonks·UX Design·6/4 손그림/juicy 햅틱/diegetic과 겹치지 않는 신규 토픽). **🎨 신규 2순위**: 색맹은 남성 약 8%(녹색맹 deuteranopia 6%)·**WCAG 1.4.1은 "색만으로 정보 전달 금지"** → 컬러 외 형태·패턴·위치 중복 단서 필수(Market.us·Colorblind.io). **🎨 신규 3순위**: 2026 트렌드는 "가독성 먼저, 접근성을 기본값으로"(Tubik). **연결 적용**: NumLink 3테마에 색맹 안전 보조 단서 — tabular 고정폭 숫자체 통일+셀 외곽선 형태/도형 마커로 이중 구분·deuteranopia 시뮬레이터로 출시 전 1회 검증.',
    lastUpdate: '6/5 금요일 리서치(금요일·숫자 퍼즐 tabular figures 고정폭 숫자 자릿수 정렬 가독성 베스트프랙티스·색맹 남성 8% 녹색맹 6%·WCAG 1.4.1 색만으로 정보전달 금지 형태/패턴 중복 단서 필수·2026 가독성 먼저 접근성 기본값 신규): **🎨 P1 NumLink 3테마 색맹 안전 보조 단서 1차 도입**(tabular 고정폭 숫자체 통일+셀 외곽선 형태/도형 마커 이중 구분·APCA/WCAG 4.5:1 컬러 재검수·deuteranopia 시뮬레이터 출시 전 1회 검증). 진행 중 3테마 작업에 흡수. Sources: DesignMonks·UX Design·WCAG 1.4.1·Colorblind.io·Market.us·Tubik.',
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
  '🔎 [6/4 "동반 정지" 재규명] 어제 양 레포 커밋 0건을 "손이 멈춤"으로 봤으나, Developer가 워킹트리를 분석한 결과 MeowBeat 미커밋 변경은 **단일 작업 "곡 선택 UI 다국어화(titleKo 11곡)+음량 조절(SongVolume 슬라이더·PlayerPrefs)"** — 손이 멈춘 게 아니라 **"커밋·백업이 멈춘"** 것. 작업물이 워킹트리에만 고여 백업 0인 게 더 위험·오늘 본질은 그 한 덩어리를 커밋·푸시로 못 박고 NumLink 안전망까지 닫는 것',
  '🚨 [백업 수치 origin 기준 재정정] 6/4의 "58일·04-07"은 04-07 가정값이었고 origin 최신은 실제 03-28 — MeowBeat 마지막 원격 푸시 03-28·오늘(6/5)까지 **69일 미백업**·meowbeat/main ahead 37 미푸시. NumLink 본진 feature/ugui-layerlab은 origin과 0/0 완전 동기화로 백업 양호. ✅ QA 유지: 미해결 버그 0건·MeowBeat qa_static·unity_validate 0/0·곡10 오디오누락0 무결·manifest 변경은 titleKo만 추가 무결성 영향 0',
  '🚨 P0 [MeowBeat 백업 — 9일째 이월·origin 기준 69일 미백업·Orchestrator·Developer·QA 일치·사용자 승인 후]: 미커밋 단일 작업(곡 다국어화 titleKo 11곡+음량 조절 SongVolume 슬라이더·QA 전수 결과 manifest titleKo만 추가·무결성 영향 0·.meta 삭제분 GUID 미참조) 커밋 → `git -C C:/Unity/Feedme push`로 69일치 백업+upstream 영구 설정+meowbeat/main ahead 37 해소. 작업물이 9일째 워킹트리에만 고여 단일 디스크 장애 시 전량 유실. **(새벽 실행이라 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [NumLink 회귀 안전망 복구 — 2일 연속 공백·QA·Orchestrator 일치]: 검증툴 3종(unity_validate.py·qa_static.py·known_bugs.json) 부재·`Assets/Tests`·`Assets/AutoQATests` 정식 테스트 .cs **0개**(BoardDataTester.cs는 데이터검사 유틸이라 정식 테스트 아님)·AutoGenTests 삭제 유지 = 회귀탐지 자체 불가. `C:\\Unity\\_ProjectTemplate\\Tools\\`(또는 MeowBeat Tools)에서 3종을 NumLink `Tools/`로 즉시 복사+씬 경로 상수 갱신해 baseline 0-error 확보',
  '🔧 P1 [MeowBeat 오디오 레이턴시 보정 슬라이더 + dspTime PlayScheduled 전환 — Developer]: 이미 추가 중인 음량 슬라이더 옆 옵션 패널에 "오디오 레이턴시 보정 슬라이더"(±ms·PlayerPrefs 영속·AudioSettings.Reset 연동)를 함께 넣고 BGM 재생을 AudioSettings.dspTime 기반 PlayScheduled(1초 예약창)로 전환. 안드로이드 오디오 레이턴시가 리듬 판정 최대 변수라 정면 대응·옵션 작업 중이라 흡수 효율적',
  '🎮🎨 P1 [메타게임 진행층 설계 안건 + NumLink 색맹 안전 — Game Designer·Art Director]: ① 코어 루프 밖 메타 진행층 1개를 다음 스프린트 설계 안건으로 — MeowBeat 고양이 컬렉션 도감(무한 진행)·NumLink 월드맵 진행 스파인으로 D3~D5 재방문 동기(메타게임이 재방문 주동력·우리 둘 다 빈 구멍). ② NumLink 3테마에 tabular 고정폭 숫자 통일+셀 외곽선/도형 마커 이중 구분(색맹 남성 8%·WCAG 1.4.1 색만으로 정보전달 금지)+deuteranopia 시뮬레이터 출시 전 1회 검증. 둘 다 진행 중 작업에 흡수',
  '🔍 P2 [ASO·인프라 — 모두 P0 백업·안전망 후 착수]: Content Writer — NumLink·MeowBeat 첫 스크린샷 3장을 실제 플레이+소셜프루프(별점/플레이수) 중심으로 재제작(iOS A/B 전환 +10~25%)+일본어 스토어 메타데이터·스크린샷 현지화(다운로드 2~3배·영어보다 ROI 높음). DevOps — NumLink에 actions/cache로 Library 캐시 PoC(플랫폼별 키+restore-key 폴백)·첫 워크플로부터 캐시 키 전략 설계해 30~60% 단축. **모두 P0 후 착수**',
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
