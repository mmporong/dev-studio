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
    taskSummary: 'NumLink UI Toolkit 전환 Phase 5 진행 중(70%). 미커밋 매니저 4파일+UIToolkit 6파일 즉시 커밋 필요. Poki WebGL 블루오션 출시 검토',
    lastUpdate: '3/29 스탠드업: NumLink UI Toolkit 전환 안정화 > 미커밋 정리 > Poki WebGL 출시 검토. MeowBeat ~34파일 미커밋 지속',
    priority: 'high',
    energy: 90,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'Poki 넘버링크 블루오션 확인. 일일 스트릭 상위 69% 채택. Duet Ducks(리듬+오리, 120곡) MeowBeat 경쟁작이나 메타게임 깊이 차별화 가능',
    lastUpdate: '3/29 리서치: 퍼즐 시장 CAGR 6.02%, 멀티플레이어 퍼즐 YoY 22% 성장. Poki 상위권 넘버링크 부재=블루오션. Stage Tour/Rhythm Heaven Groove 2026 리듬 신작',
    priority: 'medium',
    energy: 78,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: 'NumLink UGUI→UI Toolkit 전환 6파일 신규 확인. 이중 경로 패턴(UIToolkit 우선+UGUI 폴백). Unity 6.3 UI Toolkit 강화. Undo 미구현 기술 부채',
    lastUpdate: '3/29: UIToolkitManager 외 5개 컨트롤러 신규 생성 분석. GameManager/HUDManager/PuzzleManager/AutoSetup에 이중 경로 적용. Vite 8.0.3+TS 6.0.2 메이저 업데이트 가능',
    priority: 'high',
    energy: 94,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: 'UIToolkit/UGUI 이중 구조 회귀 리스크 높음. cachedCleared null 시 전 스테이지 잠금 가능. MeowBeat .meta 삭제 3건 참조 깨짐 확인 필요. 자동화 테스트 0건',
    lastUpdate: '3/29: UIToolkit/UGUI 엣지 케이스(한쪽만 초기화) 수동 QA 필요. _Recovery 씬 4개(2MB) 정리 권장. MeowBeat Input/Item/SaveLoad .meta 삭제 P0 확인',
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
    taskSummary: 'Google Play 수수료 20% 인하(Epic 합의, 6/30 적용). ASO 롱테일 키워드 3개+ 조합 핵심. YouTube Shorts 참여율 5.91% 숏폼 선두',
    lastUpdate: '3/29 리서치: Google Play 수수료 30%→20% 인하+대체 결제 허용(6/30). YouTube Shorts 일 2000억 뷰, 15-35초 최적. 스크린샷 A/B 테스트 상위 57% 실행',
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
    taskSummary: 'checkout v6+setup-node v6 출시 확인. Node 20 EOL 4월, Node 24 강제 6/2. agent-office v4→v6 업그레이드 시급. GameCI Docker Ubuntu 22.04 범프',
    lastUpdate: '3/29: checkout/setup-node v6 출시, deploy-pages.yml v4→v6+node 24 업그레이드 필요. React 19.2.4 안전 업데이트. Vite 8/TS 6/ESLint 10 메이저는 별도 브랜치',
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
    taskSummary: '소프트 3D/플러시코어 아이콘 트렌드. 아이콘 리디자인→설치 21.5%↑ 사례. AI 에셋: Midjourney→SD+ControlNet→Real-ESRGAN 워크플로우 권장',
    lastUpdate: '3/29 리서치: 마스코트+소프트 3D 아이콘 주류. 스크린샷 처음 3장=전환율 90%. NumLink 미니멀+고대비, MeowBeat 플러시코어 스타일 권장. 환경 통합 UI 트렌드',
    priority: 'high',
    energy: 86,
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
