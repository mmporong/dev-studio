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
    taskSummary: '3/22 결정 4건 중 1건만 이행(NumLink push+productName). 스토어 준비/M0/standup 3건 3일째 미착수',
    lastUpdate: '3/23 진행 회의: 스토어 준비 3일째 미착수 최우선 격상, Node 20 EOL 5주 전 워크플로우 업그레이드 시급',
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
    taskSummary: 'Mewgenics 1주 100만장/$2,500만 고양이 IP 폭발. Royal Match $50억+ 광고 제거 모델. AI 음악 비용 80-95% 절감',
    lastUpdate: '3/23 리서치: Mewgenics 흥행 분석, UNBEATABLE 이중 모드 전략, Beatoven.ai 프로토타입 착수 제안',
    priority: 'medium',
    energy: 74,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'researching',
    zone: 'dev-desk',
    taskSummary: 'Unity 6.4 출시(ECS 코어 통합). NumLink 6.3 LTS 유지(2027/12까지). 규칙 위반 3건 백로그. CoreCLR 6.7 예정',
    lastUpdate: '3/23: Unity 6.4 ECS/Project Auditor 확인, NumLink 업그레이드 불필요, 규칙 위반 3건 수정 백로그 유지',
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
    taskSummary: 'Debug.Log 가드 밖 3파일 MEDIUM 리스크. 자동화 테스트 3프로젝트 전무. ESLint 1건 지속. QA 38건 미실행',
    lastUpdate: '3/23: Debug.Log 가드 개선 확인(80건), 잔존 3파일 수정 필요, useOffice 훅 분리 권장, QA 38건 코드 부재로 실행 불가',
    priority: 'medium',
    energy: 68,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '개인정보처리방침 3프로젝트 전무(출시 블로커). "Paid Organic" SNS 전략 채택 권장. CPP/CSL 전환율 40% 상승',
    lastUpdate: '3/23: 개인정보처리방침 즉시 작성 촉구, Paid Organic 전략 제안, YouTube Shorts>TikTok 전환, Discord 12-18개월 전 구축',
    priority: 'medium',
    energy: 82,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: 'Node 20 EOL 5주 후(4/30) 워크플로우 업그레이드 시급. daily_standup 3/22 실행 끊김. 배포 5회 연속 성공',
    lastUpdate: '3/23: Node 20→22 업그레이드 긴급, daily_standup 끊김 원인 조사 필요, 작업 스케줄러 재등록, GameCI v4.8.1 CI 도입 권장',
    priority: 'high',
    energy: 70,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'CatMergeCafe Mint 접근성 미달(1.17:1→#6B9E78 교체). 야간 골목 AAA 검증 완료. 마이크로인터랙션 100ms 기준',
    lastUpdate: '3/23: Mint→허브 초록 교체 필수, Digital Texture+종이접기 정렬, Bento Grid 2.0 레벨선택 UI, 100ms 인터랙션 표준',
    priority: 'high',
    energy: 82,
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
  'Unity 에셋 폴더 구조 정리 완료 및 Missing Reference 검증',
  'Phase 2 남은 에셋/UI 태스크 우선순위 재정리',
  'Agent Office 대시보드를 MeowBeat 기준으로 업데이트',
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
