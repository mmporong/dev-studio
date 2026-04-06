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
    taskSummary: 'MeowBeat 4/6 곡 시스템 완성 — 30개 .meta staged 커밋 대기. NumLink Settings UI 작업 중(10개 파일 수정). agent-office .omc 미커밋 2건(무시 가능).',
    lastUpdate: '4/6 스탠드업: MeowBeat 곡 연동 완성 확인, .meta 30개 단일 커밋 P0. NumLink Debug.Log 65건 가드 밖 P0. Settings UI 마무리 후 커밋 예정.',
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
    taskSummary: '퍼즐 시장 다운로드 -7.2%(시장 포화) — 리텐션 차별화가 생존 조건. 리듬 게임 $2.5B(CAGR 15%). Royal Match $1.46B 공식: 미니게임+적응 난이도+IAP 전용.',
    lastUpdate: '4/6 리서치: 퍼즐 다운로드 감소 확인, NumLink GDD에 데일리 챌린지+적응 난이도 추가 P1. MeowBeat 일본형 캐릭터 가챠 하이브리드 중장기 검토.',
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
    taskSummary: 'Unity 6.4 Project Auditor 에디터 기본 탑재 — 별도 설치 없이 기술 부채 분석 즉시 가능. Next.js 16.2.2 출시(Turbopack 캐시 안정화). NumLink Settings UI 마무리 단계.',
    lastUpdate: '4/6: Unity 6.4 Project Auditor 내장 확인 — NumLink 업그레이드 스토어 출시 후 검토. Debug.Log 65건 가드 밖 정리 후 커밋 권장.',
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
    taskSummary: 'NumLink Debug.Log 65건 릴리즈 빌드 노출 위험(P0). ResourceManager 테스트값 99999 릴리즈 블로커(Critical). MeowBeat art-director 의존성 22건 미완료.',
    lastUpdate: '4/6: Debug.Log 145건 중 65건 가드 밖 확인 — Phase 5 전 정리 필수. ResourceManager 테스트값 제거 필수. 전 프로젝트 자동화 테스트 0건 리스크.',
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
    taskSummary: 'ASO AI 알고리즘 전환 — 롱테일+행동신호(세션·리텐션) 순위 결정. YouTube Shorts 141% 성장으로 TikTok 유기 도달 소멸 대체 확정. 스크린샷 텍스트 오버레이 A/B 준비.',
    lastUpdate: '4/6 리서치: ASO 롱테일 키워드 전략 수립. NumLink "offline puzzle·no ads", MeowBeat "tap to beat·piano" 첫 스크린샷 오버레이 A/B 초안 P2.',
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
    taskSummary: 'agent-office 배포 정상(Node22, GitHub Pages v4). 번들 519KB > 500KB 임계값 경고 — manualChunks 분리 P1. NumLink CI/CD 파이프라인 부재.',
    lastUpdate: '4/6: 번들 청크 경고 확인, vite.config.ts manualChunks 추가 30분 내 해결 가능(P1). NumLink 스토어 전 GitHub Actions 자동화 설계 일정화 필요.',
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
    taskSummary: '모바일 게임 UI 주류: 미니멀 HUD + 환경 통합 UI. 크리스탈-글로시 팔레트 부상. NumLink(쿨톤 #5a9fd4)·MeowBeat(웜팝 #f97316) 장르별 액센트 컬러 분리 제안.',
    lastUpdate: '4/6 리서치: 미니멀 HUD 트렌드 확인. agent-office tokens.css 변수 2개 추가로 프로젝트 카드 장르 컬러 코딩 수술적 적용 가능(P2).',
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
  'P0: MeowBeat .meta 30개 단일 커밋 정리 (feat(song): 곡 시스템 안정화 및 에셋 메타 통합)',
  'P0: NumLink Debug.Log 65건 가드 밖 정리 + ResourceManager 테스트값(99999) 제거',
  'P1: NumLink GDD에 데일리 챌린지+적응형 난이도 항목 추가 (Royal Match $1.46B 공식 적용)',
  'P1: agent-office Vite 번들 청크 분할 (519KB→300KB+200KB, manualChunks 추가)',
  'P2: 스토어 스크린샷 ASO 텍스트 오버레이 A/B 초안 제작 (NumLink + MeowBeat)',
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
