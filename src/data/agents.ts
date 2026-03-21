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
    taskSummary: '3/21 결정사항 3건 전부 미이행 확인. NumLink push+productName 수정 최우선. MeowBeat 81건 워킹트리 정리',
    lastUpdate: '3/22 진행 회의: 3/21 결정 미이행 점검, NumLink push/productName/MeowBeat 정리 재촉진',
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
    taskSummary: 'AI 적응형 난이도 71% 수익 증가 데이터 확인. 하이브리드 캐주얼 19개 $100만+. 음원 라이선싱 리스크 대비',
    lastUpdate: '3/22 리서치: 하이브리드 캐주얼 37% 성장, 적응형 난이도+시즌제 배틀패스 제안, Mewgenics 고양이 IP 입증',
    priority: 'medium',
    energy: 74,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'researching',
    zone: 'dev-desk',
    taskSummary: 'Unity 6.3 LTS 출시 확인(IL2CPP 22% 단축). GDD 엔진 버전 갱신 필요. MeowBeat C# 0개, M0 미완',
    lastUpdate: '3/22: Unity 6.3 LTS Box2D v3/빌드 최적화, GDD 2022→6.3 갱신 필요, GameObject.Find 잔존 미해결',
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
    taskSummary: 'MeowBeat M0 스프린트 1주 지연. QA 체크리스트 38건 전체 미실행. agent-office ESLint 오류 1건',
    lastUpdate: '3/22: M0 지연 확인, 테스트 인프라 전무(HIGH), ESLint react-refresh 위반 발견, AI QA 28% 절감 트렌드',
    priority: 'medium',
    energy: 68,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'ASO 의미 기반 탐색 전환 확인. 개인정보처리방침 공개 URL 필수. 숏폼 주 7-14개 목표',
    lastUpdate: '3/22: Google Play NLP 의미 분석 전환, 롱테일 키워드 전략, Discord 커뮤니티 조기 구축, 마케팅 조기 착수 강조',
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
    taskSummary: 'daily_standup.bat Exit code 9009(claude.cmd 미발견) 원인 파악. agent-office 배포 10회 연속 success',
    lastUpdate: '3/22: 9009 에러 원인 분석 완료(경로 수정 필요), GameCI v4.8.1 NumLink CI 도입 권장, Node 22 업그레이드 검토',
    priority: 'high',
    energy: 70,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: 'Digital Texture/벤토 그리드/Anti-Design 트렌드. "종이접기"/"야간 골목" 독창적 팔레트 제안',
    lastUpdate: '3/22: 촉감 버튼(클레이/젤리), 벤토 그리드 로비, Soft UI 2.0, 햅틱 동기화, 다크모드 #121212 기반 제안',
    priority: 'high',
    energy: 82,
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
