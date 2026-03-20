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
    taskSummary: 'NumLink 7건 버그 수정 완료 → push 및 미추적 파일 정리 필요',
    lastUpdate: '3/20 진행 회의: NumLink 3커밋 미push, MeowBeat 리팩토링 60+ 파일 진행 중',
    priority: 'high',
    energy: 88,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'idle',
    zone: 'lounge',
    taskSummary: '넘버링크 틈새 블루오션 분석 완료, Daily Puzzle 메타 루프 차별화 전략 수립',
    lastUpdate: '3/19 리서치: 퍼즐 시장 $138억→$240억, Block Blast 성공 공식 분석',
    priority: 'medium',
    energy: 71,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: '4-bug 일괄 수정 + 선/버튼/게임오버 추가 3건 수정 완료 (커밋 3건)',
    lastUpdate: '3/20: 버튼 색상/하이라이트/패널 중복/테마/선 사라짐/게임오버 흐름 총 7건 수정',
    priority: 'high',
    energy: 93,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '게임오버 이벤트 흐름 설계 결함 발견(높음), 기술 부채 6건 존재',
    lastUpdate: '3/20: OnAllLivesLost 미트리거 결함, lineRendererPrefab null 리스크, isVibrated 누수',
    priority: 'medium',
    energy: 64,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'idle',
    zone: 'lounge',
    taskSummary: 'TikTok Paid Organic 전략 수립, AI 개발 타임랩스 콘텐츠 기획',
    lastUpdate: '3/19 리서치: TikTok 유기적 도달 급락, K-인디게임 글로벌 진출 트렌드',
    priority: 'low',
    energy: 80,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: 'daily_standup.bat PATH 오류 수정 완료, 자동 회의 내일부터 정상 실행',
    lastUpdate: '3/20: claude.cmd 전체 경로 수정, Unity 6000.3.5f2 / Vite 7.1.2 정상',
    priority: 'medium',
    energy: 66,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'building',
    zone: 'research-lab',
    taskSummary: '글래스모피즘 UI 적용 검토 + AI 에셋 도구(Meshy AI) 활용 MeowBeat 에셋 준비',
    lastUpdate: '3/19 리서치: 글래스모피즘 복귀, WCAG AA 4.5:1 대비 기준 필수, AI 에셋 90% 시간 단축',
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
