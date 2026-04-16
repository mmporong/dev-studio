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
    taskSummary: 'P0 이월 지속. NumLink·MeowBeat 미커밋 정리+QA인프라 구축+Unity 업그레이드. 하이브리드 전략·핸드크래프트 비주얼 검토 착수.',
    lastUpdate: '4/17 스탠드업: 미커밋 정리·QA인프라·Unity 6패치 업그레이드 P0. 하이브리드 캐주얼 전략+핸드크래프트 비주얼 P1 신규.',
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
    taskSummary: '퍼즐14%성장·하이브리드캐주얼=새표준. 리듬CAGR9.1%·30일리텐션35%. MeowBeat 일본형 캐릭터+육성 메타 결합 전략 제안.',
    lastUpdate: '4/17 리서치: 하이브리드 캐주얼 전환이 핵심. Block Blast 7.68억DL. MeowBeat에 Project Sekai 모델(캐릭터+수집+육성) 채택 제안.',
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
    taskSummary: 'Unity 6000.3.5→6000.3.11f1 6패치 업그레이드 P0. MeowBeat farm revert 반복·Debug.Log 100건·GetComponent 과다 정리 필요.',
    lastUpdate: '4/17: Unity 6패치 뒤처짐 확인(빌드 22% 단축). MeowBeat farm 설계 불안정+Debug.Log 100건+GetComponent 30건(GM). 릴리스 전 정리 필수.',
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
    taskSummary: 'NumLink QA인프라 전무(Tools/없음·테스트0건). MeowBeat known_bugs 6건(error4). qa_static CWD의존·run_regression 경로오류 수정 필요.',
    lastUpdate: '4/17: NumLink Tools/ 완전 부재 확인 — _ProjectTemplate에서 즉시 복사 P0. MeowBeat unity_validate 정상이나 qa_static/run_regression CWD 문제.',
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
    taskSummary: 'ASO 리텐션/안정성 중심 전환. TikTok Paid Organic 필수($200 부스팅). Discord 커뮤니티=광고독립 트래픽 핵심. 평점4.0미만 노출무시.',
    lastUpdate: '4/17 리서치: Google Play 알고리즘 리텐션 전환 확인. TikTok 유기적 도달 급감→Paid Organic 필수. Discord 서버 개설+숏폼 파이프라인 P2 제안.',
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
    taskSummary: 'agent-office 배포정상. MeowBeat productName "hefeedmee"+Gamma색공간 미정리. 자동화 정상(DailyStandup·JobResearch Running). run_build.bat 경로불일치.',
    lastUpdate: '4/17: MeowBeat productName→"MeowBeat"+색공간→Linear 교정 P0 추가. run_build.bat 구경로(unity-webgl-wrapper) 참조 수정 필요. 자동화 2건 정상.',
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
    taskSummary: '핸드크래프트 반란 트렌드 — AI광택거부, 질감+불완전함=진정성. 퍼즐15색제한팔레트. 리듬 환경통합형HUD. 크래프트지3색축 제안.',
    lastUpdate: '4/17 리서치: 2026 핵심은 핸드크래프트 반란(Tactile Rebellion). 크래프트지 베이지+잉크 블랙+주홍 3색 축. NumLink 15색 팔레트, MeowBeat 환경통합HUD.',
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
  'P0: 미커밋 정리 + 워킹 디렉토리 클린업 — NumLink·MeowBeat 모두 (이월 지속)',
  'P0: NumLink QA 인프라 구축 — _ProjectTemplate/Tools/ 복사 (이월 지속)',
  'P0: Unity 6000.3.5→6000.3.11f1 LTS 6패치 업그레이드 + MeowBeat productName/색공간 교정',
  'P1: MeowBeat 하이브리드 전략 검토 — 고양이 수집+육성 메타 결합 (일본형)',
  'P1: 핸드크래프트 비주얼 아이덴티티 — 크래프트지 톤 3색 축 채택 검토',
  'P2: Discord 서버 개설 + TikTok 숏폼 Paid Organic 파이프라인 구축',
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
