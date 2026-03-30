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
    taskSummary: 'MeowBeat 34파일+NumLink 12파일 미커밋 3일째 긴급 정리 최우선. NumLink Phase 5 ServiceLocator 3건 todo. MeowBeat Sprint 2(디자인) 17%로 MVP 병목',
    lastUpdate: '3/30 스탠드업: 미커밋 즉시 정리 > NumLink Poki WebGL 출시 > MeowBeat MVP Sprint 2 디자인 착수. agent-office만 15건 활발',
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
    taskSummary: 'Poki MAU 1억 돌파+연결 퍼즐 공백 블루오션 지속. AI 적응형 난이도 리텐션 15-25%↑. Duet Cats(리듬+고양이+먹이주기) MeowBeat 직접 경쟁작',
    lastUpdate: '3/30 리서치: Block Blast DAU 7천만 독주. AI 적응형 난이도 매출 71%↑ 데이터. Poki 3월 역대 최강 월. NumLink GDD에 적응형 난이도 스펙 초안 필요',
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
    taskSummary: 'NumLink 25커밋 스테이지 시스템 개편 완료. UI Toolkit UXML 5개+컨트롤러 6개 UGUI 병행 중. TODO 5건 기술부채. Unity 6.4 ECS 코어 통합 출시',
    lastUpdate: '3/30: UI Toolkit 전환 완료 시점 이번 스프린트 내 결정 필요. MeowBeat AdMob v11+IAP 통합 후 실기기 빌드 검증 필요. Unity 6.4 Project Auditor 기본 탑재',
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
    taskSummary: 'Debug.Log 285건 잔존(NumLink 149+MeowBeat 136). MeowBeat .meta 삭제 3건 git 방치. FindObjectOfType/GameObject.Find 코딩 규칙 위반. 자동화 테스트 전무',
    lastUpdate: '3/30: Debug.Log PuzzleManager 23건+PreGeneratedBoardManager 26건 우선 정리 필요. .meta 3건 git rm 정식 제거. agent-office TypeScript 컴파일 에러 없음 확인',
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
    taskSummary: 'Google Play Game Trials 신규 도입+수수료 20% 인하. 숏폼 Paid Organic 모델(주 7-14클립+$100-200 부스팅). Custom Store Listings 타겟별 3개 변형 준비',
    lastUpdate: '3/30 리서치: Game Trials로 체험판 내장 가능. ASO AI 기반 사용자 의도 분석으로 진화. Poki 웹 게이밍 커뮤니티 별도 프로모션 영상 필요',
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
    taskSummary: 'Node.js 20 EOL 4/30까지 31일 — 22 LTS 전환 시급. actions/checkout v4→v6+6/2 Node 24 강제. Vite 8(Rolldown 10-30x)/TS 6/ESLint 10 메이저 대기',
    lastUpdate: '3/30: Node 20→22 LTS 전환 최우선. deploy-pages.yml checkout v4→v6 업그레이드 필요. Vite 8/TS 6 별도 브랜치 테스트 후 진행. React 19.1.1 최신',
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
    taskSummary: 'Soft 3D/Plushcore 아이콘+Liquid Glass UI 트렌드. Leonardo AI Phoenix 2.0 LoRA+Consistent Character로 MeowBeat 캐릭터 파이프라인 전환 검토',
    lastUpdate: '3/30 리서치: NumLink 아이콘 Soft 3D 파스텔+단일 오브젝트로 착수. MeowBeat Leonardo Phoenix 2.0 참조 15-20장→일관된 포즈 일괄 생성. 세로형 스크린샷 96% 표준',
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
