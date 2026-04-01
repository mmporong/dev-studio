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
    taskSummary: 'MeowBeat 미커밋 34파일 4일째 방치(P0). NumLink UITK 마무리 단계→main 머지 판단. agent-office Hardboiled 리브랜딩 완료. MeowBeat MVP 40%, NumLink MVP 65%',
    lastUpdate: '4/1 스탠드업: MeowBeat 미커밋 즉시 커밋 최우선. NumLink feature/uitoolkit→main 이번 주 머지 확정. Debug.Log 273건 정리 계획. Unity 6.0 LTS 10월 종료 대비',
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
    taskSummary: '퍼즐 시장 122억$ 중 넘버/연결 퍼즐 블루오션. 리듬 게임 CAGR 9.1%(25→53억$). 하이브리드 수익화 ARPU 28%↑. 코지/힐링 퍼즐 21%↑',
    lastUpdate: '4/1 리서치: NumLink "릴랙싱 퍼즐" 포지셔닝 권고. MeowBeat 리듬+힐링펫 매시업 시장 공백 확인. 소셜 기능 DAU 40%↑ 레퍼런스. Poki 월간 1억 명 웹 게임 부활',
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
    taskSummary: 'NumLink UITK 4화면 전환 완료+레벨선택 버그 3건 수정. MeowBeat AdMob v11+IAP 완료, TODO 3건(구매 저장 로직). Unity 6.4 출시, 6.0 LTS 10월 종료',
    lastUpdate: '4/1: NumLink UITK 마무리 단계, main 머지 준비. MeowBeat 미커밋 34파일 커밋 필요. Unity 6.3 LTS 마이그레이션 분기 내 검토. PrimeTween 제로할당 DOTween 대안 부상',
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
    taskSummary: 'Debug.Log 273건(NumLink 154+MeowBeat 119). MeowBeat .meta 19건 미커밋 빌드 깨짐 확정. GameObject.Find 23건(MeowBeat 20+NumLink 3). 테스트: NumLink 1건, MeowBeat 0건',
    lastUpdate: '4/1: MeowBeat .meta 19건+미커밋 34파일 즉시 커밋 P0. MeowBeat GameObject.Find 20건→ServiceLocator 전환 P1. Debug.Log 273건 #if UNITY_EDITOR 래핑 시급. 양쪽 자동화 테스트 전무',
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
    taskSummary: 'ASO 의도 기반 매칭 전환 — 롱테일 키워드 재설계 필요. Poki 8MB+SDK 이벤트 필수. TikTok 참여율 3.15% 숏폼 1순위. 출시 12-18개월 전 커뮤니티 빌딩 권장',
    lastUpdate: '4/1 리서치: ASO가 키워드→의미론적 매칭 전환. Apple CPP 70개로 확대. 스크린샷 분기별 A/B 테스트 시 전환율 20-30%↑. 숏폼 주 7-14개 UGC 스타일 클립 파이프라인 구축 권고',
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
    taskSummary: '빌드 정상(284ms/471KB). Node 20 EOL 4/30 대응 완료(CI v22). ESLint v10 메이저 대기. React 19/Vite 8/TS 6 최신 유지. outdated 6개(메이저 4개)',
    lastUpdate: '4/1: 인프라 양호. Node 20 EOL 영향 없음(CI v22, 로컬 v24). ESLint v10 분기 내 마이그레이션 계획. 6/2 GitHub Actions Node 24 강제 전환 대비 서드파티 액션 호환성 사전 점검 권장',
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
    taskSummary: 'Raw/Brutalist 미학 NumLink 최적. 코지 게임 675%↑ MeowBeat 기회. AI 에셋: Scenario+PixelLab+Ludo.ai. 스크린샷 A/B 테스트 전환율 40%↑. 앱 아이콘 32px 인식성 필수',
    lastUpdate: '4/1 리서치: NumLink 그리드 기반+기하학적 서체 Brutalist 방향 권고. MeowBeat 코랄/피치/크림 코지 팔레트. Scenario AI로 아트 바이블 기반 고양이 캐릭터 변형 생성 추천. 목적 있는 모션(Purposeful Motion) 원칙 적용',
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
