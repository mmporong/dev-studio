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
    taskSummary: 'NumLink 대규모 세션 완료(버그 12건+UI 리디자인+빌드 최적화). 6커밋 push 필수. Node 20→24 전환 33일. 로직 퍼즐 +19% 성장 확인',
    lastUpdate: '3/28 스탠드업: NumLink push 즉시, Input.GetKeyDown+Debug.Log 정리 이번 주, Node 24+React 보안패치+Vite 8 업그레이드 결정',
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
    taskSummary: '로직 퍼즐 YoY +19% 성장 확인. 퍼즐 시장 CAGR 6.96%. 매칭 퍼즐 42% 수익이나 NumberLink 경쟁 밀도 낮음. 일일 챌린지 모드 설계 시작',
    lastUpdate: '3/28 리서치: 로직 퍼즐 +19% 성장 호재. 200레벨 후 일일 챌린지+결과 공유 카드 도입 설계. 브레인 트레이닝/마인드풀니스 ASO 프레이밍 유리',
    priority: 'medium',
    energy: 76,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: 'NumLink 버그 12건 수정+UI 리디자인 완료. Input.GetKeyDown 2건+Debug.Log 145건 정리 대기. 커스텀 스킬 5개+훅 3개 구현. Vite 8+React 보안패치 업그레이드 예정',
    lastUpdate: '3/28: 대규모 세션 완료 — DOTween 충돌, StageClearPanel, DFS 연결성 수정. mcp-unity 포트 충돌 해결. CLI PATH 수정. Input.GetKeyDown→InputAction 이번 주 전환',
    priority: 'high',
    energy: 92,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: 'NumLink 버그 12건 수정 회귀 테스트 필요. Debug.Log 145건 잔존(릴리스 성능 영향). TODO 5건(LOW). 자동화 테스트 0건 지속. agent-office 빌드 정상',
    lastUpdate: '3/28: DOTween/Animator 충돌·StageClearPanel·ForceEndDrag·DFS 연결성 수정 검증 대상. Debug.Log 145건 정리 우선순위 상향. 자동화 테스트 0건 상태 개선 필요',
    priority: 'medium',
    energy: 70,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'ASO 2026: 3~5초 스크린샷 결정. 12~18개월 사전 마케팅 표준. 브레인 트레이닝 키워드 최적화. 광고 크리에이티브가 UA 스케일링 핵심',
    lastUpdate: '3/28: UI 리디자인 Phase 2 완료로 스크린샷용 비주얼 확보. 인디 게임 사전 마케팅 12~18개월 권장. 개발일지 숏폼 즉시 시작 재확인. 브레인 트레이닝+로직 퍼즐 ASO 프레이밍',
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
    taskSummary: 'Node 20 EOL 33일(4/30). deploy-pages.yml node-version 24+artifact v4+checkout v5 일괄 전환 이번 주. NumLink 6커밋 push 필수. npm audit moderate 잔존',
    lastUpdate: '3/28: Node 24 전환+.nvmrc 생성 이번 주 완료. FORCE_JAVASCRIPT_ACTIONS_TO_NODE24로 사전 테스트 가능. NumLink push+MeowBeat 분할 커밋 오늘 진행. Vite 8 별도 PR',
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
    taskSummary: '내러티브 UI + 미니멀 HUD 트렌드 주류화. 커스텀 손그림 일러스트가 스톡 대체. NumLink UI 리디자인 Phase 2 완료 — 별점 팝 애니메이션 방향성 적절',
    lastUpdate: '3/28: 내러티브 UI(스토리텔링 UI) + 미니멀 HUD + 손그림 질감 차별화 트렌드 확인. 폴더블/태블릿 반응형 UI 중기 과제. Anti-AI 슬롭 원칙 계속 준수. 3D 인터랙티브 요소 도입 검토',
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
