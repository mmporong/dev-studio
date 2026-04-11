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
    taskSummary: 'NumLink 오늘 2커밋(SaveData 버전관리+BM광고 필드, HUD 폰트), 미커밋 17개. MeowBeat 1커밋(FarmObject 레이어), 미커밋 25개. SaveData 마이그레이션 호환성 검증 필요.',
    lastUpdate: '4/12 스탠드업: NumLink SaveData 구조 변경 — 마이그레이션 테스트 P0. MeowBeat 미커밋 25개 정리 P0.',
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
    taskSummary: '퍼즐 시장 YoY +19% 성장·CAGR 6.96%. 멀티플레이 리듬 DAU +40% — 소셜 루프 1개가 리텐션 핵심. NumLink 데일리 랭킹 MVP 포함 결정 대기.',
    lastUpdate: '4/12 리서치: 퍼즐 $13.87B→$23.99B, 25~44세 47% 차지. Google Play 신규 계정 14일 12명 테스터 의무화 확인.',
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
    taskSummary: 'NumLink SaveData df1aea1 커밋 BM광고 필드 추가 — 구버전 null 크래시 위험. MeowBeat GoogleMobileAds 설정 미커밋. 마이그레이션 로직 검증 P0.',
    lastUpdate: '4/12: SaveData 버전관리 변경 확인 — 구버전 세이브 로드 시 null 필드 크래시 여부 테스트 필요.',
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
    taskSummary: 'NumLink Tools/ 디렉토리 전무 — known_bugs.json, unity_validate.py 미구축. 회귀 테스트 불가. MeowBeat known_bugs.json 6건·QA 도구 14개 정상.',
    lastUpdate: '4/12: NumLink QA 인프라 전무 확인 — _ProjectTemplate/Tools/ 즉시 복사 P0. SaveData 변경 후 회귀 테스트 수단 없음이 핵심 리스크.',
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
    taskSummary: 'ASO 2026 AI 태그: 첫 스크린샷 3초 내 게임플레이 노출 → 전환율 25~40%↑. 시리즈형 숏폼 3~5개 플랫폼 동시 운영이 2026 승리공식.',
    lastUpdate: '4/12 리서치: Apple AI 스크린샷 메타데이터 자동 추출 확인. NumLink/MeowBeat 스토어 등록 전 비주얼 에셋 점검 필요.',
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
    taskSummary: 'agent-office 자동배포 정상(24초). Node.js 20 deprecated 경고 6건(2026-09-16 제거). NumLink·MeowBeat CI/CD 여전히 부재.',
    lastUpdate: '4/12: Node.js 24 마이그레이션 P1 확인. deploy-pages.yml Actions v4→v5 업데이트 필요. Dependabot 정상 운영 중.',
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
    taskSummary: 'Diegetic UI 표준화 — HUD 최소화 필수. 퍼즐 색맹 모드 기본값, 보상 순간에만 액센트. MeowBeat 노트 히트 이펙트 오디오 반응형 버스트 교체 후보.',
    lastUpdate: '4/12 리서치: 오디오 반응형 절차적 파티클이 2026 리듬 게임 주류 확인. MeowBeat 이펙트 교체 P2 검토. NumLink 색맹 모드 MVP 포함 권고.',
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
  'P0: MeowBeat ButtonController.cs:315 IAP 저장 로직 완성 + AdmobManager 테스트 ID 등록',
  'P0: NumLink 미커밋 17개 정리 (Phase 5 Singleton→ServiceLocator 작업 분 커밋)',
  'P0: MeowBeat 미커밋 21개 정리 (타이틀 난이도 버튼 런타임 생성 커밋)',
  'P1: NumLink P1-003 킥 후보 Owner 승인 처리 → Phase 6 언블록',
  'P1: NumLink GitHub Actions CI/CD 파이프라인 설계 (태그 푸시 → Android APK)',
  'P2: MeowBeat 캐릭터 아트 방향 확정 + 색약 모드 MVP 포함 여부 결정',
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
