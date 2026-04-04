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
    taskSummary: 'NumLink 미커밋 12파일(+944줄) 폭증 P0 — MainScene.unity corruption 리스크 9/10. MeowBeat .meta 3개 삭제 방치. 어제 P0/P1 전부 미이행.',
    lastUpdate: '4/4 스탠드업: NumLink 커밋 즉시 P0. MeowBeat .meta 처리 P0. EditMode 테스트 착수 P1. Play 신원인증 즉시 P1.',
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
    taskSummary: 'NEKOPARA Sekai Connect 4/14 출시 — MeowBeat 직접 경쟁. Poki 공유유도 바이럴 공식. 리워드 광고 62%·참여율 45~60% 최적 배치.',
    lastUpdate: '4/4 리서치: NEKOPARA 4/14 직접 경쟁 확인. MeowBeat 퍼즐 비중 강화 대응 전략. NumLink Poki "정답 공유" 기능 추가 권고.',
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
    taskSummary: 'UI 폴리싱 단계 확정(커밋 80% UI). Input.GetKeyDown 2곳·GameObject.Find 3곳 스토어 전 처리 필요. Unity 6.8 CoreCLR 예정 — 현재 출시 시 마이그레이션 불필요.',
    lastUpdate: '4/4: NumLink 커밋 패턴 분석 — UI 폴리싱 단계. Input.GetKeyDown #if UNITY_EDITOR 가드 30분 처리. Unity 6.5 thin LTO·6.8 CoreCLR 예정 확인.',
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
    taskSummary: 'MainScene.unity 미커밋 corruption 리스크 9/10. Manager 의존 체인 리스크 7/10. 오늘 35분 투자로 4일 부채 해소 가능(커밋 5분+EditMode 테스트 30분).',
    lastUpdate: '4/4: MainScene.unity 리스크 9/10 — 씬 파일 YAML merge conflict 시 참조 일괄 손상. 오늘 git commit + EditMode 테스트 3개가 최소 필수 액션.',
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
    taskSummary: 'TikTok 유기 도달률 -98.6% 붕괴 → YouTube Shorts 중심 전환. Play 개발자 신원인증 9월 의무화 즉시 완료. Poki 20MB 이하 기술 요건.',
    lastUpdate: '4/4 리서치: TikTok 도달률 소멸 실증(-98.6%). YouTube Shorts+Reels 크로스포스팅 전략. Play 신원인증 즉시 완료 권고. Poki 20MB 이하 필수.',
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
    taskSummary: 'GameCI+fastlane이 Unity Android 자동화 표준. NumLink privacy-policy docs/ 1시간 배포. agent-office 파이프라인 건전(필수 수정 없음).',
    lastUpdate: '4/4: GameCI ubuntu-latest + fastlane supply 표준 확인. NumLink docs/privacy-policy GitHub Pages 설정 권고. agent-office 파이프라인 OIDC·npm ci·concurrency 정상.',
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
    taskSummary: '마스코트 아이콘 최적화 전환율 +25%. AI 워크플로 3단계(Midjourney→Leonardo→Firefly). Neo-Brutalism 2026 주류 확정 — NumLink 방향 유효.',
    lastUpdate: '4/4 리서치: 마스코트 중심 아이콘 전환율 최대 25% 상승 확인. AI 에셋 3단계 워크플로 확립. MeowBeat HUD 고양이 표정 5단계 Duet Cats 레퍼런스.',
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
  'P0: NumLink 미커밋 12파일 즉시 커밋 (MainScene.unity corruption 리스크 9/10)',
  'P0: MeowBeat .meta 파일 3개 삭제 처리 (Input/Item/SaveLoad — 커밋 또는 복원)',
  'P1: NumLink Domain 레이어 EditMode 테스트 3개 착수 (git commit 직후, 30분)',
  'P1: Google Play 개발자 신원인증 즉시 완료 (9월 의무화, 처리 수 주 소요)',
  'P2: NumLink 개인정보처리방침 GitHub Pages 배포 (docs/ 폴더, 1~2시간)',
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
