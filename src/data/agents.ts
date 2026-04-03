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
    taskSummary: 'NumLink·MeowBeat 로컬 디렉토리 부재 P0 4일째 미해결. agent-office 정상 가동. Unity 6.4 업그레이드 검토 P2',
    lastUpdate: '4/4 스탠드업: 로컬 복구 P0 오늘 완료 필수. Unity 6.4 ECS 코어 통합·Project Auditor 내장 확인. ASO 전략 문서화 P2 착수',
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
    taskSummary: 'MeowBeat "고양이+리듬+퍼즐" 장르 블렌딩 2026 트렌드 부합. Stage Tour Fall 2026 전 선점 기회. AI 적응형 난이도 NumLink MVP 후 검토 유지',
    lastUpdate: '4/4 리서치: 퍼즐·리듬 장르 융합 가속. Stage Tour(RedOctane) Fall 2026 출시 예정. 리듬 RPG·비주얼노벨 믹싱 레퍼런스 스터디 추가 권고',
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
    taskSummary: 'Unity 6.4 출시: ECS 코어 통합·Project Auditor 내장·분기 업데이트 체계. Unity Studio 브라우저 도구 공개. 2026 로드맵 "안정성 우선"',
    lastUpdate: '4/4: Unity 6.4 ECS 코어 패키지 통합, Project Auditor 기본 내장. Adaptive Performance 콘솔 지원 추가. Unity Studio 브라우저 기반 3D 제작 도구 공개. 업그레이드 검토 P2',
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
    taskSummary: '자동화 테스트 전무 4일째. Unity 6.4 Project Auditor 내장으로 코드 품질 분석 즉시 가능. Debug.Log 280건·Input.GetKey 9건 미정리. TDD 미착수 시 P0 격상 검토',
    lastUpdate: '4/4: 자동화 테스트 부재 4일 연속 지적. Project Auditor 즉시 활용 권고. 로컬 복구 직후 Domain 레이어 TDD 첫 번째 액션으로 실행 요청. 미착수 시 P0 격상',
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
    taskSummary: 'ASO 핵심: 65%+ 스토어 검색 경유, 평점 4.0 이상 필수, 지역화(KR·EN·JP). 전환율 2~3% 개선 = 수백 건 추가 유기 설치. 스토어 메타데이터 초안 P2',
    lastUpdate: '4/4 리서치: ASO 다운로드 65% 스토어 검색 경유. 77% 설치 전 리뷰 확인, 4.0 미만 사실상 배제. 지역화·영상 프리뷰·A/B 테스트 2026 ASO 표준. 스토어 메타데이터 초안 작성 권고',
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
    taskSummary: 'GitHub Actions 4/2 업데이트: 서비스 컨테이너 오버라이드·OIDC 커스텀 속성·VNET 장애조치 프리뷰. 러너 요금 39% 인하(1월~). 빌드 정상 유지',
    lastUpdate: '4/4: GitHub Actions 4월 초 업데이트 확인(서비스 컨테이너 진입점·OIDC 속성·VNET 장애조치). 러너 요금 39% 인하 효과. 셀프호스트 $0.002/분 신설(영향 없음). SHA 고정 점검 P2',
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
    taskSummary: '3D UI·환경 통합 인터페이스 주류화. NumLink Brutalist+환경 통합, MeowBeat 내러티브 UI(고양이 통합) 방향 재확인. 다이나믹 타이포 TextMeshPro 활용 권고',
    lastUpdate: '4/4 리서치: 3D 요소 도입으로 리텐션·몰입감 강화 트렌드. 환경 통합 인터페이스 주류화. 폴더블 대응 MVP 이후 검토. TextMeshPro 다이나믹 타이포 적용 권고',
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
  'P0: NumLink·MeowBeat 로컬 디렉토리 복구 (4일째 미해결 — 오늘 완료 필수)',
  'P1: 로컬 복구 직후 Domain 레이어 TDD 즉시 착수 (미착수 시 P0 격상)',
  'P1: Unity 6.4 업그레이드 호환성 검토 (Project Auditor 실행)',
  'P2: ASO 전략 문서화 착수 (NumLink·MeowBeat 스토어 메타데이터 초안)',
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
