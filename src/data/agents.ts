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
    taskSummary: 'NumLink 5개 커밋 생성(44465ac~61c99da) — 세팅패널·폰트·아이콘 완료. 하지만 MainScene.unity+Manager 4개 미커밋 3일 연속. MeowBeat .meta 삭제 처리 3일째 미이행.',
    lastUpdate: '4/5 스탠드업: NumLink 부분 이행 확인, 미커밋 잔재 P0. MeowBeat .meta P0. docs/privacy-policy P1. NEKOPARA 직접 충돌 낮음 확인.',
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
    taskSummary: 'NEKOPARA 장르 재확인: 가챠+경영 → MeowBeat(리듬)과 직접 충돌 낮음. 퍼즐 시장 262.5억 달러(+16.7%). Poki 월 1억 유저 — NumLink WebGL 타이밍 유효.',
    lastUpdate: '4/5 리서치: NEKOPARA 가챠+경영 장르 확인, MeowBeat 위협도 하향 조정. 4/14 출시 후 1주 반응 모니터링 권고. 리워드+IAP 하이브리드 수익 최적.',
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
    taskSummary: 'Unity 6.4 출시(ECS Core 통합·Project Auditor 내장). 세팅 패널 완성 → Input.GetKeyDown 2곳+GameObject.Find 3곳 기술 부채 처리 후 일괄 커밋 권장.',
    lastUpdate: '4/5: Unity 6.4 정식 출시 확인 — 스토어 출시 후 업그레이드 검토. UI Toolkit 6.7 LTS까지 분기별 업데이트. 기술 부채 처리 → 일괄 커밋으로 스토어 전 클린업.',
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
    taskSummary: 'MainScene.unity 722줄 변경 4일 미커밋 고위험. TMP 에셋 4개는 Unity 자동변환(안전). Manager 4개 설정 변경 즉시 커밋 필요.',
    lastUpdate: '4/5: MainScene.unity 4일 연속 미커밋 — YAML merge conflict 시 LevelSelectUI 전체 손상. TMP 에셋 serializedVersion 3→4 자동변환 확인(무시 안전). 즉시 커밋 필수.',
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
    taskSummary: 'ASO 2026 리텐션 중심 전환 — 평점 4.0 미만 피처드 90% 탈락. YouTube Shorts 일 2,000억 뷰·팔로워 무관 신규 도달 80%. Reddit+10초 GIF 무예산 최고 효율.',
    lastUpdate: '4/5 리서치: ASO 알고리즘 리텐션 중심 전환 확인. YouTube Shorts TikTok 대체 채널 확정. NumLink 출시 전 Reddit r/indiegaming + Shorts 10초 GIF 티저 준비 권고.',
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
    taskSummary: 'agent-office 정상(최신 커밋 8cb9ade). GitHub Actions OIDC 커스텀 클레임·VNET 페일오버 4월 업데이트. NumLink docs/privacy-policy 미존재 — AdMob 블로킹.',
    lastUpdate: '4/5: agent-office 파이프라인 건전 확인. GitHub Actions 4월 업데이트 확인. NumLink docs/index.html 생성 + GitHub Pages /docs 설정으로 P1 완료 가능.',
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
    taskSummary: 'Neo-Brutalism 다음: Liquid Glass 트렌드(애플 선도). AI 에셋 표준 워크플로우: Midjourney→Stable Diffusion→Photoshop. 앱 아이콘: 레트로퓨처리즘+마스코트 단일.',
    lastUpdate: '4/5 리서치: Liquid Glass 차세대 트렌드 확인(인디 보편화 전). AI 에셋 Midjourney→SD→PS 하이브리드 2026 표준. NumLink 아이콘 레트로퓨처리즘 방향 Midjourney 초안 3종 권고.',
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
  'P0: NumLink 미커밋 완전 정리 (MainScene.unity+Manager 4개+기술부채 처리 후 일괄 커밋)',
  'P0: MeowBeat .meta 3개 삭제 처리 (Input/Item/SaveLoad — 3일 연속 미이행)',
  'P1: NumLink docs/privacy-policy GitHub Pages 배포 (AdMob 블로킹 요소 해소)',
  'P1: NEKOPARA 4/14 출시 반응 모니터링 계획 수립 (장르 충돌 낮음 확인)',
  'P2: NumLink 앱 아이콘 Midjourney 초안 3종 (레트로퓨처리즘+마스코트)',
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
