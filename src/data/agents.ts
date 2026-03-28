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
    taskSummary: 'NumLink 코드 완료, 비코드 출시 작업 6건 이번 주 집중. MeowBeat 84파일 미커밋 긴급 해소. deploy-pages v5+Vite 8 업그레이드 예정',
    lastUpdate: '3/28 스탠드업: NumLink 출시 마무리 최우선, MeowBeat 미커밋 즉시 해소, CI 액션 v5 업그레이드+Vite 8 별도 PR 결정',
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
    taskSummary: '일일 챌린지 리텐션 40%↑ 확인. Duck Town(리듬+펫) MeowBeat 경쟁작. Flow Free 2.2억 DL 지배적이나 소셜/일일 챌린지 부재로 차별화 가능',
    lastUpdate: '3/28 리서치: 일일 챌린지+동적 리더보드 표준화, AI 적응형 난이도 트렌드. Duck Town 경쟁 분석. 리듬 게임 CAGR 9.1%, 하이브리드 수익화 표준',
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
    taskSummary: 'Vite 8.0 정식 출시 확인, agent-office 업그레이드 준비. NumLink Debug.Log 69건/16파일+_Recovery 정리 대기. Unity 6.3 LTS 안정 패치 중',
    lastUpdate: '3/28: Vite 8.0 Rolldown 정식 출시(3/12) 확인. NumLink Debug.Log 69건 정리+_Recovery 씬 백업 4개 미추적 해소 필요. Unity 6.3 LTS Box2D v3+Enhanced Audio',
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
    taskSummary: 'NumLink LevelSelectUI 5커밋 집중 회귀 리스크. MeowBeat 84파일(56 미추적) 유실 긴급. MainScene.unity 미커밋. 자동화 테스트 0건 지속',
    lastUpdate: '3/28: NumLink 10커밋 회귀 테스트 시급(스크롤·BackButton·스테이지 전환). MeowBeat 56개 미추적 파일 즉시 커밋 필요. happy path 자동화 테스트 1건 추가 권장',
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
    taskSummary: 'TikTok 도달 급락 → Reels·Shorts 전환 필수. Apple CPP 70개 확대. Google Play 숏폼 비디오 발견 도입(3/2). 스크린샷 A/B 테스트 전환율 핵심',
    lastUpdate: '3/28 리서치: TikTok 유기적 도달 급락(42.5만→6천). Reels·Shorts 멀티플랫폼 전환 필수. Apple CPP 70개+키워드 연결, Google 숏폼 발견. 롱테일 키워드+A/B 테스트 권장',
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
    taskSummary: 'deploy-pages v5.0.0+checkout v5.0.0 출시(3/25), Node 24 대응 완료. Node 24 기본 전환 6/2 확정. MeowBeat 84파일 분할 커밋 긴급',
    lastUpdate: '3/28: deploy-pages v5+checkout v5 Node 24 대응 출시 확인. 이번 주 v4→v5 업그레이드+사전 테스트. MeowBeat 분할 커밋 긴급. Unity 빌드 파이프라인 변경 없음',
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
    taskSummary: 'Raw Aesthetic·Brutalist UI 주류화. Lo-Fi 미니멀+클린 스타일라이즈드 대세. AI 생성+수동 정제 하이브리드 워크플로우 2026 표준',
    lastUpdate: '3/28 리서치: Raw Aesthetic(볼드 타이포·가시적 그리드) 주류. NumLink Phase 2 클린 스타일라이즈드 부합. MeowBeat 에셋은 AI+Aseprite 하이브리드 권장. 84% 유저 미니멀 UI 선호',
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
