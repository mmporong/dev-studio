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
    taskSummary: '**🎯 5일 위임 전제 부분 붕괴(6/17)**: "게임 레포=전부 위임"이 분류 오류로 판명 — 코드(.cs)는 위임 유지지만 도구(Tools/*.py)는 자율 실행 가능 영역으로 재분류. **✅ 검증 3종 절대경로화 5일 이월 회의 중 종결**(MeowBeat a0d1a81·CWD=/tmp 0 error+회귀 2/2). **🚨 NumLink 미커밋 36파일 최근커밋 6/2 이후 15일째 누적**(Layer Lab 리스킨 미백업·악화). MeowBeat dspTime 전환 여전 미완(NoteSpawner.cs:126). agent-office 클린. **다음 임무**: NumLink Layer Lab 작업분 선별 커밋 사용자 세션 1순위·NumLink Tools 검증툴 이식(MeowBeat 검증본 복사). **메타**: 수요일·D+24 — 회의가 자신의 5일 전제를 의심하고 실행으로 반증한 날.',
    lastUpdate: '6/17 수요일 스탠드업(🔧 위임은 분류 오류였다·QA가 "검증툴은 게임 코드 아닌 Python 도구라 새벽 자율 실행 가능"으로 5일 전제 정정·메인이 회의 중 절대경로화·검증·커밋 a0d1a81으로 종결): **✅ [실행완료·게임 레포 첫 코드 자율 실행] MeowBeat 검증툴 3종 __file__ 절대경로화(5일 이월 P0 종결)** + **🔧 P1 NumLink Tools 검증 파이프라인 이식(MeowBeat 검증본 복사)** + **🚨 P0[이월] MeowBeat 노트-오디오 동기화+UMP/광고+미커밋 .cs 백업(사용자 세션)** + **🔧 P1 NumLink 미커밋 36파일 15일째 선별 커밋+dependabot 잔여 PR 정리** + **🎮📦🎨 P2 메타 진행 레이어·미리보기 동영상+TikTok UGC·촉각 마이크로인터랙션·Unity 6.3 LTS**.',
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
    taskSummary: '**🎮 신규 1순위(메타 진행 레이어)**: 퍼즐 IAP 2025 **100억달러 돌파(+14% YoY)**·Royal Match IAP **14억달러 톱3**·공통 동력은 코어 레벨 밖 메타 진행축(꾸미기/아바타/컬렉션/이벤트통화) → **D30 리텐션 31%**·Gossip Harbor ARPDAU 0.31달러(경쟁작 2배). 하이브리드캐주얼 D7 18~22%(하이퍼캐주얼 6~9%의 2.5배). **문제**: NumLink·MeowBeat 둘 다 "레벨/곡 클리어" 단일 진행축뿐 → D7 이후 리텐션 공백 구조적. **적용**: NumLink 테마 컬렉션/꾸미기(Layer Lab 연결)·MeowBeat farm 기반 고양이 농장 꾸미기 메타축.',
    lastUpdate: '6/17 수요일 리서치(수요일·D+24·퍼즐 IAP 2025 100억달러+14%·Royal Match 14억 톱3·메타 진행 추가 시 D30 31%·하이브리드캐주얼 D7 18~22% 하이퍼 2.5배·두 게임 단일 진행축 한계 신규): **🎮 P2 NumLink 코어 레벨 외 메타 진행 레이어 1종(테마 컬렉션/꾸미기) 도입 검토·MeowBeat farm 기반 고양이 농장 꾸미기 메타축 — D7 이후 리텐션 공백 차단**. P0 후. Sources: 퍼즐 IAP 100억·Royal Match 14억·D30 31%·Gossip Harbor ARPDAU·하이브리드캐주얼 D7 벤치마크.',
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
    taskSummary: '**💻 신규(엔진)**: Unity **6.3 LTS 정식 출시** — 6.0 이후 첫 LTS·**2027.12까지 2년 지원**. 모바일: 화면리더 네이티브 통합 API(iOS VoiceOver/Android TalkBack)·빌드 프로파일/플랫폼 브라우저 개선. **💻 코드 부채(MeowBeat)**: 미커밋 110줄(GameManager +59·OptionManager +42·SongManager·SongData·manifest)+GoogleMobileAds SDK+ProjectSettings 한 덩어리 → 곡/옵션·광고 인프라 뒤엉켜 회귀 추적 난항. **메시지**: 미커밋 110줄 기능 단위 분리 커밋·다음 마이너 마일스톤에 6.3 LTS 업그레이드 검토 적재.',
    lastUpdate: '6/17 수요일 리서치(수요일·Unity 6.3 LTS 정식 출시 6.0 이후 첫 LTS 2027.12까지 2년·모바일 화면리더 네이티브 통합 API·빌드프로파일 개선·MeowBeat 미커밋 110줄 광고SDK/ProjectSettings 혼재 신규): **💻 P1 MeowBeat 미커밋 110줄 기능 단위 분리 커밋(곡/옵션↔광고SDK↔ProjectSettings)+P2 다음 마이너 마일스톤에 Unity 6.3 LTS 업그레이드 검토(2년 LTS 확보)**. Sources: unity.com/blog 6.3 LTS·unity.com/releases·docs.unity3d.com 6000.3·git status.',
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
    taskSummary: '**🔑 핵심 통찰(전제 정정)**: "게임 레포 P0=전부 위임"은 부정확 — .cs 커밋/푸시는 사용자 승인 필요(위임)지만 **검증툴 절대경로화는 Tools/*.py 수정이라 게임 로직 무관·CWD=/tmp 실행 검증으로 즉시 증명·새벽 자율 실행 가능**. 분류 오류로 실행 가능 P0가 5일 이월됨. **✅ 오늘 종결**: 검증 3종 절대경로화·CWD=/tmp 0 error·회귀 2/2(a0d1a81). **🚨 미해결**: NoteSpawner.cs:126 deltaTime 누적 6/16 그대로(게임 코드·사용자 세션). **안전망 양쪽 부재**: NumLink 테스트 0(AutoGenTests 삭제)+Tools 부재. known_bugs.json 6건(error4·warning2).',
    lastUpdate: '6/17 수요일 리서치(수요일·🔑 검증툴은 게임 코드 아닌 Python 도구라 새벽 자율 실행 가능 5일 위임 전제 정정·NoteSpawner deltaTime 6/16 그대로·NumLink 테스트0+Tools 부재 안전망 양쪽 부재·known_bugs 6건 신규): **✅ [실행 권고→종결] 검증 3종 __file__ 절대경로화·CWD=/tmp 0 error 검증·커밋(a0d1a81)으로 5일 이월 종결** + **NumLink엔 검증본 복사로 Tools 파이프라인 0→1**. Sources: unity_validate/qa_static/run_regression 코드·CWD 양쪽 실행·known_bugs.json.',
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
    taskSummary: '**📦 신규 1순위(미리보기 동영상)**: 스토어 게임 미리보기 동영상이 스크린샷 단독 대비 **전환율 25~40% 추가 상승**·사용자 5~10초 내 설치 결정·출시 전 0순위 제작물. **📦 신규 2순위(TikTok·UGC)**: TikTok CPI Meta보다 **15~25% 낮음**(캐주얼 글로벌 $1.75~4.00)·**UGC 영상 28% 더 많은 상호작용**·구매전환 97%↑(iFUN UGC 50명 협업 CPI $1.21). **📦 신규 3순위(App Store Tags)**: Apple **AI 자동 태그**가 2026 브라우즈/검색 노출 핵심 변수. **적용**: 두 게임 15~30초 세로 미리보기 동영상+TikTok UGC 숏폼(MeowBeat 우선)·메타데이터 키워드 정합성 점검.',
    lastUpdate: '6/17 수요일 리서치(수요일·미리보기 동영상 전환율 25~40%↑ 출시전 0순위·TikTok CPI Meta보다 15~25%↓ 캐주얼 $1.75~4.00·UGC 28%↑ 상호작용 구매전환 97%↑·Apple App Store Tags AI 2026 노출 핵심 신규): **📦 P2 두 게임 15~30초 세로형 미리보기 동영상 스토어 등록(전환율 25~40%↑)+TikTok UGC 숏폼(MeowBeat 우선·CPI 15~25%↓)·App Store Tags 대비 메타데이터 키워드 정합성 점검**. P0 후. Sources: ASO 동영상/스크린샷 전환율 2026·TikTok CPI/UGC·Apple App Store Tags.',
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
    taskSummary: '**🛡 ✅ grouping 효과 실증**: 6/16 커밋한 dependabot grouping 동작 확인 — npm 의존성 **11건→PR#103**·npm 메이저 **5건→PR#104**로 묶여 머지 부담 경감. CI gh run 최근 5건 전부 success·실패 0. **🛡 잔여 정리**: PR #99(upload-pages-artifact 4→5)가 actions 그룹 #102와 중복 → #99 닫고 #102·#103 머지·#104(npm-major) breaking 가능성 별도 검토. **🛡 신규(보안)**: GitHub Artifact Attestations(Sigstore 빌드출처증명) 공개레포 기본값 전환 중·Immutable Releases 도입 — deploy-pages는 SHA 핀 OK·attest-build-provenance 미적용(향후 검토). **메시지**: 잔여 PR 정리.',
    lastUpdate: '6/17 수요일 리서치(수요일·✅ dependabot grouping 효과 실증 npm 11건→PR#103·메이저 5건→PR#104·CI 최근 5건 success·잔여 PR#99 actions 그룹 #102와 중복·Artifact Attestations 공개레포 기본값 전환 신규): **🛡 P1 잔여 dependabot PR 정리(#99 닫고 #102·#103 순차 머지·#104 npm-major 별도 검토)+Artifact Attestations 향후 검토 적재**. Sources: gh run/pr 실측·dependabot.yml·GitHub Blog Artifact Attestations.',
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
    taskSummary: '**🎨 신규 1순위(촉각 마이크로인터랙션)**: 2026 핵심은 구글 **Material Expressive** 기반 촉각 마이크로인터랙션 — 버튼 바운스·토글 탄성감 "감각적 즉각 반응" 표준화. **🎨 신규 2순위(키네틱 타이포)**: 키네틱 타이포가 장식 아닌 **정보 위계 도구**로 진화(탭/스크롤/사운드 반응 무게·크기 변화). **🎨 신규 3순위(마스코트+웜 어스톤)**: 마스코트 주도 디자인 수익 입증(Yazio 월 $3M+·Duolingo)·캐주얼 컬러 순백/고대비 대신 **웜 샌드·클레이·오트밀 베이지**. **적용**: MeowBeat 노트 히트 고양이 스쿼시+점수 키네틱 타이포·NumLink 셀 바운스+웜 샌드/클레이(민트+다크 회피).',
    lastUpdate: '6/17 수요일 리서치(수요일·Material Expressive 촉각 마이크로인터랙션 감각적 즉각 반응 표준·키네틱 타이포 정보 위계 도구화·마스코트 주도 수익 입증 Yazio 월 $3M+·웜 샌드/클레이/오트밀 베이지 캐주얼 팔레트 신규): **🎨 P2 두 게임 공통 촉각 마이크로인터랙션 패스 1스프린트(MeowBeat 노트 히트 고양이 스쿼시+점수 키네틱 타이포·NumLink 셀 바운스+웜 샌드/클레이 팔레트·민트+다크 AI 슬롭 회피)**. P0 후. Sources: Elinext/Tubik 2026 UI·AAA Game Art 캐주얼·Recursion 컬러·IndieRadar 마스코트.',
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
  '✅ [실행완료·회의 중 직접 커밋·게임 레포 첫 코드 자율 실행] MeowBeat 검증툴 3종 CWD 의존성 제거·__file__ 절대경로화 — QA의 분류 정정("검증툴은 게임 코드 아닌 Python 도구라 새벽 자율 실행 가능")을 받아 unity_validate.py·qa_static.py·run_regression.py 3종의 상대경로를 PROJECT_ROOT=Path(__file__).resolve().parent.parent 기준 절대경로화+audioFile 검사(L201)·detector 모듈 로더(L65) 숨은 상대경로 2곳 추가 수정. CWD=/tmp(프로젝트 밖)에서 3종 0 error·run_regression 2/2 탐지 성공·MeowBeat a0d1a81 선별 커밋. 6/13 머지·6/15 권한 격하·6/16 grouping에 이은 자율 실행이나 자체 레포 아닌 게임 레포 첫 코드 커밋·5일째 이월 P0 종결',
  '🔧 P1 [신규] NumLink Tools/ 검증 파이프라인 이식 — NumLink는 Tools 디렉터리 부재로 검증 0%·AutoGenTests 삭제로 테스트 커버리지 0(안전망 양쪽 부재). 오늘 MeowBeat에서 절대경로화로 검증된 3종을 NumLink Tools/로 복사+씬/manifest 경로 상수만 NumLink 구조에 맞게 조정하면 검증 파이프라인 0→1(절대경로라 CWD 독립 동작 보장). 게임 코드 아닌 도구 추가라 자율 실행 가능 영역·미커밋 36파일과 엉키지 않게 별도 커밋',
  '🚨 P0 [이월·게임 코드·사용자 세션] MeowBeat 노트-오디오 동기화(dspTime+PlayScheduled+5초 캘리브레이션+판정 윈도우 Easy±60/Normal±50/Hard±35ms)+UMP/targetSdk 36/광고 Bidding+미커밋 핵심 .cs(SongData/GameManager/SongManager/OptionManager) 기능 단위 분리 커밋·푸시 백업 — 게임 로직 수정·커밋·푸시라 사용자 승인 영역. 노트 타이밍 NoteSpawner.cs:126 Time.deltaTime 누적은 6/16 그대로. 신규 발견 동기화 P0와 한 세션 묶음 처리 권장',
  '🔧 P1 NumLink 미커밋 36파일 15일째(최근커밋 6/2) Layer Lab 리스킨 작업분 선별 커밋·백업(.omc/Screenshots 산출물 .gitignore)+DevOps 잔여 dependabot PR 정리(#99 닫고 #102·#103 순차 머지·#104 npm-major breaking 가능성 별도 검토) — grouping 효과 실증됨(npm 11건→PR#103·메이저 5건→PR#104)',
  '🎮📦🎨 P2 [신규 적재 — 모두 P0 후]: Game Designer — NumLink 코어 레벨 외 메타 진행 레이어 1종(테마 컬렉션/꾸미기·Layer Lab 연결)·MeowBeat farm 기반 고양이 농장 꾸미기 메타축(메타 진행 추가 시 D30 리텐션 31% 근거·두 게임 단일 진행축 한계 차단). Content Writer — 두 게임 15~30초 세로형 미리보기 동영상 스토어 등록(전환율 25~40%↑)+TikTok UGC 숏폼(MeowBeat 우선·CPI 15~25%↓)·App Store Tags 대비 메타데이터 키워드 정합성. Art Director — 촉각 마이크로인터랙션 패스 1스프린트(MeowBeat 노트 히트 고양이 스쿼시+점수 키네틱 타이포·NumLink 셀 바운스+웜 샌드/클레이 팔레트·민트+다크 AI 슬롭 회피). Developer — 다음 마이너 마일스톤에 Unity 6.3 LTS 업그레이드 검토(2027.12까지 2년 LTS)',
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
