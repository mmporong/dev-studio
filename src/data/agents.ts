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
    taskSummary: 'NumLink 출시 최근접 — 스토어 에셋(개인정보처리방침/스크린샷/ASO/AdMob) 유일 블로커. MeowBeat 코드 완료 에셋 대기. Cat Merge Cafe M0 14%',
    lastUpdate: '3/25 진행 회의: NumLink 스토어 준비 집중, CI Node 24 전환, DailyStandup 복구, Debug.Log 2차 가드 적용 결정',
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
    taskSummary: '하이브리드 캐주얼 $42억, 메타 레이어 필수. Number Link 2000+ 레벨 수 경쟁 불리 — "엄선된 200개" 포지셔닝. hololive Dreams 비경쟁 확인',
    lastUpdate: '3/25 리서치: 일일 챌린지+테마 해금 최소 메타 레이어 설계. MeowBeat 온보딩 플로우 GDD 공백 긴급. Flow Free 업데이트 정체 틈새 활용',
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
    taskSummary: 'NumLink TODO 6건 LOW, 출시 블로커 0건. Unity 6.4 ECS 코어 통합 출시. Vite 8.0 Rolldown 빌드 10~30배 향상, agent-office 업그레이드 권장',
    lastUpdate: '3/25: 200레벨 확장 진행 중. cat-merge-cafe C# 코드 0건. Vite 7→8 + plugin-react 5→6 업그레이드 가능. Unity 6.4 업그레이드는 선택적',
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
    taskSummary: 'Debug.Log 가드 미적용 86건+ 릴리스 포함(PuzzleManager 23건, PreGeneratedBoardManager 26건 최심각). 자동화 테스트 3프로젝트 0건 변화 없음',
    lastUpdate: '3/25: 이전 250건 제거 후에도 86건+ 잔존. HBSaveLoadManager 평문 JSON+Debug.Log(json) 출력 유지. SaveSystem<T> 코인/루비 변조 가능. agent-office console.log 0건 양호',
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
    taskSummary: '개인정보처리방침 여전히 미작성 — 출시 차단. Play 수수료 20% 인하+자체 결제 허용. ASO 롱테일 키워드+UGC 숏폼 저예산 핵심',
    lastUpdate: '3/25: 개발자 본인 인증 Q3 의무화. 허위 광고 플랫폼 차단 중. NumLink "number connect puzzle" 등 롱테일 타겟. TikTok UGC 스타일 CPI 최저',
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
    taskSummary: 'CI Node 20→24 직접 전환 긴급(GitHub Actions Node 22 건너뜀). DailyStandup 스케줄러 3일째 미등록. 배포 파이프라인 안정',
    lastUpdate: '3/25: Node 20 EOL 2026-04-30, 로컬 v24.12.0 정상. deploy-pages.yml node-version 24 변경+engines ">=24" 추가 필요. 스케줄러 schtasks /create 재등록 필요',
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
    taskSummary: 'iOS 26.4 Liquid Glass 커스터마이징 확대, 아이콘 4모드 유지. 소프트 3D 플러시+마스코트 아이콘 트렌드. 마이크로인터랙션 120fps 표준',
    lastUpdate: '3/25: NumLink 아이콘 고대비 마이크로 일러스트+iOS 4모드 Export. MeowBeat 소프트 웜 팔레트(크림+복숭아+웜 라벤더). 마이크로인터랙션 선택 150ms/연결 300ms/클리어 500ms 스펙',
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
