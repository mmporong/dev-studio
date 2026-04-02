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
    taskSummary: 'NumLink MVP 70%(세팅·콤보·보상 신규). MeowBeat P0 해소(status clean), 빌드 검증 필요. agent-office 안정. NumLink 미커밋 6파일 P0',
    lastUpdate: '4/2 스탠드업: NumLink 미커밋 6파일 즉시 커밋 P0. 콤보·보상 시스템 QA 검증 P1. MeowBeat Packages 삭제 후 빌드 확인. Debug.Log 280건 정리 계획. axios 공급망 공격 간접 의존성 점검',
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
    taskSummary: '넘버/연결 퍼즐 경쟁작 부재, 블루오션 유효. 하이브리드 수익화 상위 리듬게임 45%. 데스크톱 펫 르네상스 코지 핵심 트렌드. 솔로 토너먼트 캐주얼 필수 기능 부상',
    lastUpdate: '4/2 리서치: BeatSync AR+AI 난이도 DAU 35%↑ 사례. 데스크톱 펫 르네상스→MeowBeat 적합. 솔로 토너먼트 NumLink 장기 로드맵 추가 권고. 머지 퍼즐 상위권 점유, UI/UX 차별화 필요',
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
    taskSummary: 'NumLink 콤보 시스템·보상 계산·별점 단순화 신규 구현(+66/-19). 미커밋 매니저 6파일. TODO 5건(긴급 없음). Unity 6.4 ECS 코어 승격, Rider 2026.1',
    lastUpdate: '4/2: 콤보 스트릭 추적+CalculateLevelReward 난이도별 코인 차등 구현. 별점 타이머→생명 기반 단순화. StageClear 카운트업 애니메이션. Unity Agentic AI 도구 공개, CoreCLR 로드맵 발표',
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
    taskSummary: 'Debug.Log 280건(NumLink 209↑+MeowBeat 71↓). MeowBeat GameObject.Find 0건(전량 제거). NumLink Input.GetKey 9건 규칙 위반. 자동화 테스트 전무 지속',
    lastUpdate: '4/2: MeowBeat 대폭 개선(GameObject.Find 23→0, Debug.Log -48). NumLink Debug.Log +55 증가, Input.GetKey 9건 신규 감지. 미추적 .meta 2건. Domain 레이어 TDD 시작 촉구',
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
    taskSummary: 'Apple AI 태그 스크린샷 텍스트 분석. Google Play 리텐션 기반 알고리즘 전환. 한국 퍼즐 매출 14%↑, K-인디 글로벌 도약. 소프트 론치 전략 필수',
    lastUpdate: '4/2 리서치: 리텐션 기반 ASO→튜토리얼 완료율 핵심. 위시리스트 속도>총량. TikTok "버그 실패 영상" 숏폼이 트레일러보다 효과적. 4-6주 간격 업데이트가 알고리즘 노출 트리거',
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
    taskSummary: '빌드 정상(2.49s/483KB, +12KB). axios 공급망 공격 경보(영향 없음). ESLint 10.1.0 메이저 대기. outdated 6개(메이저 4개). GitHub Actions Node 24 전환 6/2',
    lastUpdate: '4/2: axios 1.14.1/0.30.4 RAT 백도어(3/31) — 직접 영향 없으나 간접 의존성 확인 권장. 번들 471→483KB(+12KB) 원인 파악 필요. ESLint 10+react-hooks 7.x 마이그레이션 가이드 검토. Node 24 사전 테스트 권장',
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
    taskSummary: '"불완전함의 미학" 트렌드 Brutalist 강화 근거. 미니멀 맥시멀리즘 하이브리드 부상. Midjourney v8 Style Creator 파이프라인. 앱 아이콘 Soft 3D 트렌드',
    lastUpdate: '4/2 리서치: Canva 2026 "Imperfect by Design" — 수작업 느낌 프리미엄. 블루-그린 계열 지배, 채도 부활. Midjourney v8 Style Creator로 비주얼 DNA 고정 가능. 앱 아이콘 MeowBeat=Soft 3D, NumLink=Retrofuturist',
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
