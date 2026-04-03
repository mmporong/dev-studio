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
    taskSummary: 'NumLink·MeowBeat 로컬 디렉토리 부재(P0 복구 필요). agent-office 정상 가동. 어제 P0/P1 이행 상태 미확인',
    lastUpdate: '4/3 스탠드업: 프로젝트 로컬 복구 P0. 어제 미커밋 6파일·콤보 QA·MeowBeat 빌드 진행 확인 불가. Unity 생태계 리스크 모니터링 P1',
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
    taskSummary: '로직 퍼즐 다운로드 19%↑, 블루오션 유효. Mewgenics 100만장 — 고양이 테마 시장 검증. AI 적응형 난이도 리텐션 핵심. Royal Match 월 1.23억$ 퍼즐 1위',
    lastUpdate: '4/3 리서치: 로직 퍼즐 19% YoY 성장, 직소 21%↑(힐링). Mewgenics 고양이 전술 로그라이크 1주 100만장·OpenCritic 89. AI 적응형 난이도 NumLink MVP 후 검토 권고',
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
    taskSummary: 'Unity HDRP 유지보수 전환, URP 유일 활성 파이프라인. NumLink/MeowBeat URP 기반 영향 없음. Unity 주가 56%↓, 1000+명 Godot 이탈. 생태계 리스크 모니터링',
    lastUpdate: '4/3: Unity HDRP 유지보수 모드(2/25), 신기능 중단. 개발자 이탈 가속(Godot 4.4 대안). URP 집중 확정. Vector AI 광고 매출 72%↑. 차기 프로젝트 엔진 비교 검토 필요',
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
    taskSummary: '자동화 테스트 전무 3일째. AI self-healing 테스트·자동 플레이테스팅 트렌드 부상. QA 아웃소싱 시장 25억$(CAGR 15%). Debug.Log 280건·Input.GetKey 9건 미정리',
    lastUpdate: '4/3: 자동화 테스트 전무 재지적. AI self-healing 테스트 트렌드(스크립트 자동 수정). 프로젝트 로컬 복구 후 Domain 레이어 TDD 즉시 시작 촉구. Debug.Log 280건 정리 미진행',
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
    taskSummary: '인디 시장 55.4억$(+14.3%). Steam 위시리스트 속도>총량. 비주얼 아이덴티티 통일 핵심. 클립 가능한 순간 최적화가 숏폼 성공 열쇠. ASO 필수이나 차별화 불가',
    lastUpdate: '4/3 리서치: 인디 시장 48.5억→55.4억$(CAGR 14.3%). 출시 12~18개월 전 마케팅 시작 권장. 스토어·SNS·배너 비주얼 통일 필수. 클립 가능한 순간(유머·실패) 숏폼 전략',
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
    taskSummary: 'GitHub Actions 2026 보안 로드맵(이그레스 방화벽, Data Stream). npm 토큰 90일 제한·Trusted Publishing 전환. Spring 2026 OSS 공급망 공격 교훈. 빌드 정상 유지',
    lastUpdate: '4/3: GitHub Actions 이그레스 방화벽(L7, VM 외부)·Actions Data Stream 관측성 발표. npm 클래식 토큰 생성 불가, 세분화 토큰 90일 수명. Trusted Publishing(OIDC)+Provenance Attestation. 액션 SHA 고정 강화 권장',
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
    taskSummary: '2026 UI 트렌드: 스토리텔링 UI·환경 통합·3D 몰입감. 다이나믹 아이콘·타이포. 폴더블 반응형 필수. AI 개인화 적응형 레이아웃. 내러티브 UI 적용 제안',
    lastUpdate: '4/3 리서치: UI가 스토리텔링 매체로 진화(메뉴↔게임플레이 매끄러운 전환). 환경 통합 인터페이스. 고급 제스처·모션. NumLink Brutalist+환경 통합, MeowBeat 내러티브 UI(고양이 캐릭터 녹임) 제안',
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
  'P0: NumLink·MeowBeat 로컬 디렉토리 복구 (클론/경로 재설정)',
  'P1: Unity 생태계 리스크 모니터링 체계 수립 (HDRP→URP 집중)',
  'P1: Domain 레이어 TDD 도입 착수 (프로젝트 복구 후)',
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
