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
    taskSummary: 'NumLink 5커밋 미push + 스토어 준비 착수. MeowBeat 워킹트리 50+ 파일 정리 필요',
    lastUpdate: '3/21 진행 회의: 게임오버 흐름 재설계 완료, 스토어 등록 미비 확인, push 우선',
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
    taskSummary: '메타레이어(이미지 컬렉션) 최우선 도입 제안. Daily Puzzle 소셜 리더보드. MeowBeat UGC 전략',
    lastUpdate: '3/21 리서치: Block Blast MAU 3억, 메타레이어 필수화, 리듬게임 $50억 전망(CAGR 8-15%)',
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
    taskSummary: 'RestartGame→ReturnToLevelSelect 전면 재설계. ClearBoardChildren 역순 반복 수정',
    lastUpdate: '3/21: 게임오버→레벨선택 복귀 흐름 재설계, 보드영역 숨기기/복원 패턴, 이중호출 방지',
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
    taskSummary: '활성 버그 0건(21건 수정 완료). 기술 부채 7건(LOW). HintManager 릴리스 로그 리스크',
    lastUpdate: '3/21: 자동 테스트 전무 확인. HintManager DEBUG_LOG_INTERVAL 릴리스 제거 필요',
    priority: 'medium',
    energy: 64,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '스토어 등록 준비 전면 점검 — 설명문/개인정보처리방침/ASO 키워드 전부 미비',
    lastUpdate: '3/21: ASO 2026 CPP 전략, 숏폼 영상 우선, productName 불일치 발견',
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
    taskSummary: 'daily_standup.bat 3/21 실패(exit code 1) — 로그 기록 추가. NumLink CI/CD 부재',
    lastUpdate: '3/21: bat 로그 추가, agent-office 배포 정상(5회 연속 success), NumLink CI 미설정',
    priority: 'medium',
    energy: 66,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'DefaultTheme만 존재→다크모드 추가 필요. ColorVariables-ThemeData 색상 중복 통합',
    lastUpdate: '3/21: 미니멀+깊이감 트렌드, 마이크로 인터랙션 강화, 패널 전환 애니메이션 통일 제안',
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
