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
    taskSummary: 'NumLink 오늘 5커밋(폰트·UI 작업), 미커밋 30개(AutoGenTests 삭제 미스테이지 포함). MeowBeat 5커밋(먹기 애니메이션), 미커밋 25개(GoogleMobileAds 미커밋). 두 프로젝트 미커밋 정리 P0.',
    lastUpdate: '4/13 스탠드업: NumLink AutoGenTests 삭제 파일 미스테이지 — 커밋 정리 P0. MeowBeat bak 파일 삭제 + GoogleMobileAds 커밋 P0.',
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
    taskSummary: '퍼즐 시장 $12.2B·IAP +14%. Numberlink 블루오션 확인. MeowBeat 고양이 테마 메이저 공백. Day 30 리텐션 위한 데일리 챌린지+스트릭 시스템 GDD 추가 필요.',
    lastUpdate: '4/13 리서치: Block Blast 2810만 다운로드 1위. 리듬 CAGR 9.1%. Phigros식 무선 판정선 트렌드 확인. NumLink Daily Challenge GDD 항목 추가 P2.',
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
    taskSummary: 'MeowBeat GameManager.cs FindObjectOfType 14회 호출(규칙위반 HIGH). PlayerController Input.GetKeyDown 직접 사용. Runtime 동적 GameObject 생성. Unity 6.4 ECS 편입 대비 아키텍처 점검 필요.',
    lastUpdate: '4/13: MeowBeat 기술부채 3건 확인 — FindObjectOfType 전환·InputAction 마이그레이션·씬 사전배치 P0~P1. Unity 6.7 CoreCLR 마이그레이션 예정.',
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
    taskSummary: 'NumLink 테스트 파일 0개·Tools/ 전무. MeowBeat known_bugs 6건·회귀 2/2 PASS. NumLink _ProjectTemplate에서 QA 파이프라인 즉시 복사 P0.',
    lastUpdate: '4/13: NumLink 테스트 커버리지 0% 확인 — Unity Editor 통합 전 방어선 없음. MeowBeat 게임플레이 로직(판정·점수) 테스트 부재.',
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
    taskSummary: 'Apple ASO AI Tags 도입 — 스크린샷 비주얼=검색 노출. TikTok 유기적 도달 급락 대비 Discord 소유 채널 구축 시급. 출시 6~8주 전 사전 등록+devlog 시작 공식.',
    lastUpdate: '4/13 리서치: Google Play Level Up 참여도 지표 순위 반영 확인. 퍼즐 타겟 25~44세 여성 75%. 커뮤니티 빌딩 지금부터 시작 권장.',
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
    taskSummary: 'agent-office CI 정상(SHA 고정·weekly-insights 자동). NumLink·MeowBeat CI 없음. GameCI 도입으로 Unity 자동 빌드+테스트 구축 P1.',
    lastUpdate: '4/13: GameCI Library 캐싱으로 빌드 단축 확인. NumLink EditMode CI 먼저, MeowBeat Android AAB 후속. agent-office Vercel 전환 검토 중.',
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
    taskSummary: 'Diegetic UI+Dynamic Icons 2026 표준. MeowBeat PERFECT 콤보 고양이 캐릭터 연동 파티클 제안. NumLink 오답 흔들림 피드백 5줄. agent-office 게임 카드 border-left 개선.',
    lastUpdate: '4/13 리서치: 볼류메트릭 파티클+BPM 동기화 리듬 트렌드 확인. MeowBeat 픽셀아트 파티클로 세계관 일관성 유지 방향. NumLink 색+심볼 이중 구분 접근성 권장.',
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
  'P0: MeowBeat GameManager.cs FindObjectOfType 14회 → SerializeField/ServiceLocator 전환',
  'P0: NumLink Tools/ QA 인프라 구축 (_ProjectTemplate/Tools/ 즉시 복사 + 씬 경로 업데이트)',
  'P0: MeowBeat 미커밋 25개 정리 (GoogleMobileAds·삭제 파일 스테이지·bak 삭제)',
  'P1: MeowBeat PlayerController.cs Input.GetKeyDown → InputAction 마이그레이션',
  'P1: NumLink GameCI 기반 Unity CI 추가 (.github/workflows/unity-test.yml)',
  'P2: NumLink Daily Challenge + 스트릭 시스템 GDD 항목 추가',
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
