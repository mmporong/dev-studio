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
    taskSummary: 'NumLink 미커밋 17개(Phase 5 Singleton 전환 진행), MeowBeat 미커밋 21개(타이틀 난이도 버튼). agent-office 6개 미커밋(무시 가능).',
    lastUpdate: '4/7 스탠드업: NumLink/MeowBeat 미커밋 파일 누적 확인 — 오늘 clean status P0. MeowBeat IAP 저장 로직 블로커 신규 확인.',
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
    taskSummary: '하이브리드 캐주얼 88% YoY 급성장 — 두 게임 모두 소셜 루프/메타 레이어 검토 필요. 리듬 게임 CAGR 9.1%, AI 적응 난이도가 MeowBeat 차별점 후보.',
    lastUpdate: '4/7 리서치: 퍼즐 다운로드 -7% 확인, NumLink 비동기 친구 대결 MVP 포함 여부 결정 필요. 하이브리드 캐주얼 88% 급성장 확인.',
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
    taskSummary: 'Unity 6.3 LTS 출시(Unity AI Beta, 2027.12 지원). C# 14/.NET 10 AOT 기동 40% 단축. NumLink Phase 5 P5-001~003 Singleton→ServiceLocator 전환 진행 중.',
    lastUpdate: '4/7: Unity 6.3 LTS 중장기 업그레이드 후보 확인. NumLink P1-003 킥 후보 Owner 승인 미완료 → Phase 6 전체 블록 — 오늘 즉시 승인 처리 필요.',
    priority: 'high',
    energy: 90,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: 'MeowBeat ButtonController.cs:315 IAP 저장 로직 불완성(🔴HIGH). NumLink UGUI 미사용 컴포넌트 DisableAllUgui()만으로 숨김(미삭제). 전 프로젝트 자동화 테스트 0건.',
    lastUpdate: '4/7: MeowBeat IAP 저장 불완성 신규 확인 — 구매 데이터 손실 위험 P0. NumLink 아키텍처 미결 11건. MeowBeat AI 음악 파이프라인 MVP 미착수.',
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
    taskSummary: 'iOS 첫 3장 스크린샷이 CTR 결정 — A/B 테스트 없이 출시 금지. 한국 게이머 66% 리뷰 작성, 출시 첫 주 리뷰 유도 캠페인 필수. TikTok 숏폼이 인디 게임 바이럴 채널 1위.',
    lastUpdate: '4/7 리서치: 앱스토어 다운로드 60% 검색 경유, 피처링 앱 90% 평점 4.0 이상. NumLink/MeowBeat TikTok 15초 클립 콘셉트 제작 P2.',
    priority: 'medium',
    energy: 80,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: 'agent-office GitHub Actions 2개 워크플로우 정상 운영. NumLink·MeowBeat CI/CD 파이프라인 완전 부재 — 스토어 출시 전 자동화 설계 시급.',
    lastUpdate: '4/7: NumLink 태그 푸시 → Android APK 자동 빌드 파이프라인 설계 P1. MeowBeat는 NumLink 완료 후 동일 템플릿 적용 예정.',
    priority: 'high',
    energy: 72,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'MeowBeat 캐릭터 아트 방향 미확정 — 픽셀+Arcane 하이브리드 제안. EU 접근성법 2025.06.28 발효 — 색약 팔레트 MVP 포함 법적 의무. NumLink UI 타일+연결선만 남기기.',
    lastUpdate: '4/7 리서치: 픽셀 실루엣+굵은 외곽선+파스텔 플랫 색채 하이브리드가 2025 트렌드 정중앙. MeowBeat 아트 방향 확정 + 색약 모드 MVP 포함 여부 결정 P2.',
    priority: 'high',
    energy: 84,
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
  'P0: MeowBeat ButtonController.cs:315 IAP 저장 로직 완성 + AdmobManager 테스트 ID 등록',
  'P0: NumLink 미커밋 17개 정리 (Phase 5 Singleton→ServiceLocator 작업 분 커밋)',
  'P0: MeowBeat 미커밋 21개 정리 (타이틀 난이도 버튼 런타임 생성 커밋)',
  'P1: NumLink P1-003 킥 후보 Owner 승인 처리 → Phase 6 언블록',
  'P1: NumLink GitHub Actions CI/CD 파이프라인 설계 (태그 푸시 → Android APK)',
  'P2: MeowBeat 캐릭터 아트 방향 확정 + 색약 모드 MVP 포함 여부 결정',
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
