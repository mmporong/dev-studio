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
    taskSummary: 'MeowBeat 16일 커밋 공백+64건 미커밋 긴급. NumLink UI Toolkit 3일 정체. MeowBeat MVP 40%, NumLink MVP 60%. CI Node 20→22 전환 D-30',
    lastUpdate: '3/31 스탠드업: MeowBeat 미커밋 즉시 정리 > CI Node 전환 > NumLink Phase 5 완료→Poki 배포. MeowBeat 에셋 파이프라인 구축 착수',
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
    taskSummary: 'Pair 퍼즐 매출 363%↑ NumLink 장르 적중. Block Blast MAU 3억 단순 코어 루프 증명. DDA_Plugin_Unity 적용 검토. Duet Cats 주간 $470만 피크',
    lastUpdate: '3/31 리서치: Pair 퍼즐이 퍼즐 시장 최고 성장 서브장르. NumLink 복잡도 높이지 말 것. MeowBeat 육성 메타게임이 Duet Cats 대비 핵심 차별점',
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
    taskSummary: 'NumLink UITK 우선+UGUI 폴백 패턴 적용 중(4파일 +65줄 미커밋). MeowBeat AdMob v11+IAP 완료, 에셋/UI 남음. TODO 5건. Unity 6.4 출시, CoreCLR 6.8 목표',
    lastUpdate: '3/31: NumLink UI Toolkit 전환 미커밋 즉시 커밋 필요. MeowBeat 코드 완료+에셋 병목. Unity 6.4 ECS 코어+Project Auditor 내장. .NET 10.0.5 보안 패치',
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
    taskSummary: 'Debug.Log 202건(NumLink 149+MeowBeat 53). MeowBeat .meta 64건 미커밋 빌드 깨짐 위험. NumLink 코딩 규칙 위반 5건(Input.GetKeyDown 2건 모바일 불가). 자동화 테스트 전무',
    lastUpdate: '3/31: MeowBeat .meta 64건 즉시 커밋 최우선. NumLink Input.GetKeyDown→InputAction 전환 필요. Debug.Log #if UNITY_EDITOR 래핑 또는 커스텀 Logger 도입 권장',
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
    taskSummary: 'Google Play 수수료 20% 인하(6/30)+개발자 인증 필수(9월). 마케팅 74% 비디오, 숏폼 58%. Poki 8MB+웹독점. ASO 롱테일 키워드 차별화 필수',
    lastUpdate: '3/31 리서치: 개발자 인증 즉시 확인. Paid Organic 모델(오가닉→$200 부스팅). Poki Playtest로 초기 유저 피드백. Instagram Reels 주력+TikTok 보조 채널',
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
    taskSummary: 'Node.js 20 EOL D-30 CI 전환 시급. Vite 8.0.3+TS 6.0.2 출시(breaking changes). outdated 14개(메이저 7개). 빌드 정상 2.2초/440KB',
    lastUpdate: '3/31: Node 20→22 LTS CI 즉시 전환. Vite 8/TS 6는 별도 브랜치. 마이너(React 19.2.4 등) 안전 적용 가능. 6/2 GitHub Actions Node 24 강제',
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
    taskSummary: 'Plushcore/Soft 3D 2026 아이콘 주류. SpriteFlow/PixelLab AI 에셋 도구 신규. Cozy Game 675%↑. 스토어 첫 3장 스크린샷이 전환율 결정',
    lastUpdate: '3/31 리서치: NumLink Soft 3D+Bold Geometric 하이브리드 아이콘. MeowBeat 마스코트+Plushcore 코랄/피치. SpriteFlow 레퍼런스 1장→무한 변형. 마스코트 내비게이션 UI 설계 권고',
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
