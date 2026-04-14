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
    taskSummary: 'P0 3일째 이월. NumLink 미커밋 10개·MeowBeat 미커밋 12+미추적 15개. Unity 업그레이드·FindObjectOfType·Tools 복사 모두 미완료.',
    lastUpdate: '4/15 스탠드업: P0 3일째 이월 — 미커밋 축소(30→10/25→12)이나 MeowBeat 미추적 15개 신규. 오늘 P0 최소 1건 완료 필수.',
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
    taskSummary: '퍼즐 $12.2B·로직퍼즐 +19%. 리듬 CAGR 12.8%·아태 41%. Discord 프리런치 12~18개월 전 착수 필수. 미착수 시 획득비용 3~5배.',
    lastUpdate: '4/15 리서치: 퍼즐 시장 규모·리듬게임 성장률 수치 업데이트. Discord 프리런치 즉시 착수 P1 제안(Content Writer 동의).',
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
    taskSummary: 'Unity 8패치 업그레이드 3일째 미완료. MeowBeat NoteSpawner GameObject.Find 위반 발견(P0). NumLink TODO 4건·MeowBeat 구매저장 미구현.',
    lastUpdate: '4/15: MeowBeat NoteSpawner.cs:52 GameObject.Find 규칙위반 신규 발견. SerializeField 주입 교체 P0 추가. Unity 업그레이드 3일째.',
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
    taskSummary: 'NumLink QA인프라 부재 3일째(known_bugs·test_fixtures 없음). MeowBeat 6패턴+픽스처 2개 정비됨. agent-office 린트 에러 3건. NumLink TODO 5건·MeowBeat 2건.',
    lastUpdate: '4/15: NumLink QA인프라 부재 3일째 — 회귀방지 불가. agent-office 빌드OK이나 fast refresh 위반 2건+청크 경고.',
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
    taskSummary: 'ASO 리텐션 중심 전환 대응. 롱테일 키워드 게임별 10개 초안 P2. Discord 프리런치 즉시 착수 제안. YouTube Shorts 주 7~14개 클립 목표.',
    lastUpdate: '4/15 리서치: ASO 설치→리텐션 전환 확인. Discord 프리런치 Game Designer와 동시 제안. 롱테일 키워드 초안 착수 P2.',
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
    taskSummary: 'agent-office GitHub Pages+Daily Standup 04:00 정상. Weekly Insights Telegram 시크릿 검증 필요. NumLink/Feedme CI/CD 부재 지속. GameCI 도입은 Unity 업그레이드 후.',
    lastUpdate: '4/15: agent-office 배포·스탠드업 정상 확인. Weekly Insights 시크릿 설정 불명확 — 검증 P2 유지. Unity CI 도입 순차 진행.',
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
    taskSummary: '손그림+미니멀HUD+스케우오모피즘 2026 트렌드. MeowBeat 노트 2종 빈약 — 테마 연계 3종 추가 P1. NumLink 임시에셋(ㅡㅡㅡ.png) 정리 필요.',
    lastUpdate: '4/15 리서치: 2026 손그림·스케우오모피즘 트렌드 확인. MeowBeat 노트 스프라이트 확장(발바닥·생선뼈·물음표) P1 제안.',
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
  'P0: [3일째 이월] 미커밋 정리 — NumLink 10개·MeowBeat 12+미추적 15개 (오늘 최소 1건 완료)',
  'P0: [3일째 이월] MeowBeat FindObjectOfType → ServiceLocator 전환',
  'P0: [3일째 이월] NumLink Tools/ QA 인프라 복사 (_ProjectTemplate/Tools/)',
  'P0: MeowBeat NoteSpawner.cs GameObject.Find 제거 → SerializeField 주입',
  'P0: Unity 6000.3.5→6000.3.13f1 업그레이드 (3일째 미완료)',
  'P1: MeowBeat 테마 연계 노트 스프라이트 3종 추가 (발바닥·생선뼈·물음표)',
  'P1: Discord 프리런치 커뮤니티 개설 착수',
  'P2: ASO 롱테일 키워드 초안 게임별 10개 작성',
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
