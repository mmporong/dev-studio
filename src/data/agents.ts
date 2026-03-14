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
    role: '범위 확정 / 우선순위 / 핸드오프 총괄',
    status: 'planning',
    zone: 'pm-desk',
    taskSummary: 'MeowBeat Phase 2 에셋/UI 작업 우선순위 정리 중',
    lastUpdate: '폴더 구조 정리 완료',
    priority: 'high',
    energy: 88,
    characterKey: 'ember',
  },
  {
    id: 'analyst',
    name: 'Analyst',
    role: '시장성 / 리텐션 / 수익화 가설 검토',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'Feedme 대비 MeowBeat 차별화 포인트와 MVP 컷라인 검증 중',
    lastUpdate: '경쟁작 분석 완료',
    priority: 'medium',
    energy: 71,
    characterKey: 'leaf',
  },
  {
    id: 'designer',
    name: 'Designer',
    role: 'UI/UX 구조 / 아트 디렉션 / 스프라이트 방향',
    status: 'planning',
    zone: 'research-lab',
    taskSummary: 'Cat_2 픽셀아트 기반 아트 디렉션 확정, UI 프리팹 교체 준비 중',
    lastUpdate: '아트 디렉션 문서 확정',
    priority: 'high',
    energy: 79,
    characterKey: 'bloom',
  },
  {
    id: 'executor',
    name: 'Executor',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: 'Phase 2 코드 완료 — 에셋 연결 및 프리팹 배치 대기 중',
    lastUpdate: '광고 최적화 + GameEvents 전면 연동',
    priority: 'high',
    energy: 93,
    characterKey: 'spark',
  },
  {
    id: 'test-engineer',
    name: 'Test Engineer',
    role: '빌드 / 회귀 / Android 테스트 검증',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '폴더 구조 변경 후 Missing Reference 검증 준비 중',
    lastUpdate: 'GUID 참조 무결성 체크 대기',
    priority: 'medium',
    energy: 64,
    characterKey: 'wave',
  },
  {
    id: 'release-ops',
    name: 'ReleaseOps',
    role: 'Git 관리 / 빌드 / 스토어 배포 / CI·CD',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '에셋 폴더 정리 커밋 완료, Android 빌드 테스트 준비 중',
    lastUpdate: 'refactor(assets) 커밋 push 완료',
    priority: 'medium',
    energy: 66,
    characterKey: 'moon',
  },
]

export const currentProject = {
  name: 'MeowBeat (냥비트)',
  phase: 'Phase 2 — 에셋/UI 연결 단계',
  risk: 'Suno Pro 곡 생성과 AI 아트 생성이 Owner 액션으로 대기 중',
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
