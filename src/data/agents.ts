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
    taskSummary: '4/13 P0 3건 미완료 이월. NumLink 미커밋 30개·MeowBeat 미커밋 25개 정리 재지정. Unity 8패치 업그레이드 새 P0 추가.',
    lastUpdate: '4/14 스탠드업: 4/13 미완료 이월(미커밋·FindObjectOfType·Tools). Unity 6000.3.13f1 업그레이드 P0 신규.',
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
    taskSummary: '블록퍼즐 +911% 성장. Poki 월 1억 유저·수익 100%. 리듬 CAGR 12.8%. Duet Cats 고양이+리듬 글로벌 1위. NumLink Poki 출시 검토 P1.',
    lastUpdate: '4/14 리서치: 하이브리드 캐주얼 급성장. NumLink Poki 웹 출시 전략 수립 P1. MeowBeat 정통 리듬게임 포지셔닝 차별화.',
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
    taskSummary: 'Unity 6000.3.5→13f1 8패치 업그레이드 P0. MeowBeat Farm fix 7건 반복(설계 재검토). NumLink TODO 5건 누적. Burst+IL2CPP 빌드 22% 단축 가능.',
    lastUpdate: '4/14: Unity 업그레이드 P0 신규(UIToolkit 터치 버그+오디오 최적화). MeowBeat 레이어/스프라이트 설계 재검토 필요.',
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
    taskSummary: 'NumLink Tools 부재 이틀째. 에러핸들링 격차 33배(NumLink 689회 vs MeowBeat 21회). MeowBeat known_bugs 6건 중 4건 error. 회귀픽스처 미완성.',
    lastUpdate: '4/14: NumLink Tools 복사 P0 이월. 에러핸들링 분산도 심각 — 품질 리스크 HIGH.',
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
    taskSummary: 'ASO 롱테일 키워드 전략. TikTok 도달 -90%→YouTube Shorts/Reels 전환. Duet Cats 시장검증 활용 MeowBeat 포지셔닝. 15초 클립 전략 P2.',
    lastUpdate: '4/14 리서치: TikTok 하락 확인(42.5만→6천). MeowBeat "cat rhythm game" 키워드 사전세팅 P2. YouTube Shorts 중심 전략.',
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
    taskSummary: 'agent-office 배포 정상. Weekly Insights 실패/취소 이력 조사 필요. GameCI v4 안정, 동일 Unity 버전 Docker 공유 가능. CI 도입은 Tools+업그레이드 후.',
    lastUpdate: '4/14: Weekly Insights 워크플로우 실패 원인 조사 P2. GameCI 도입은 Unity 업그레이드 완료 후 순차 진행.',
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
    taskSummary: '2026 코지 내러티브 UI 트렌드. 고양이 세계관 정확히 부합. 양 프로젝트 에셋 네이밍 혼란 심각(한글·숫자 파일명). UIToolkit 전환 전 네이밍 통일 P1.',
    lastUpdate: '4/14 리서치: 코지 미학 트렌드 확인. 에셋 네이밍 컨벤션 {기능}_{크기}_{상태}.png 통일 P1. UIToolkit 108파일 작업 진행 중.',
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
  'P0: [이월] 미커밋 정리 — NumLink 30개·MeowBeat 25개 (AutoGenTests·GoogleMobileAds 포함)',
  'P0: [이월] MeowBeat FindObjectOfType 14회 → ServiceLocator 전환',
  'P0: [이월] NumLink Tools/ QA 인프라 복사 (_ProjectTemplate/Tools/)',
  'P0: Unity 6000.3.5→6000.3.13f1 동시 업그레이드 (UIToolkit 터치 버그+오디오 최적화)',
  'P1: NumLink Poki 웹 플랫폼 출시 전략 수립 (WebGL 빌드+Poki SDK 검토)',
  'P1: 에셋 네이밍 컨벤션 통일 ({기능}_{크기}_{상태}.png)',
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
