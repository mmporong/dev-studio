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
    taskSummary: 'NumLink 200레벨 확장 착수. 스토어 출시 파이프라인(개인정보처리방침→AdMob→APK) 즉시 착수 필요. MeowBeat 에셋 대기',
    lastUpdate: '3/24 진행 회의: 개인정보처리방침 즉시 작성, CI Node 20→22 업그레이드, daily_standup 장애 복구 결정',
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
    taskSummary: '퍼즐 시장 CAGR 9% $121억 전망. 고양이+리듬 블루오션 확인. NumLink 일일 챌린지+메타 레이어 설계 필요',
    lastUpdate: '3/24 리서치: 하이브리드 루프+메타 레이어 필수화, MeowBeat 피아노 타일 탈피 고유 메카닉 정의 선결',
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
    taskSummary: 'NumLink 200레벨 확장(LevelSelectUI+BoardDataGenerator+TimerUI) 진행 중. TODO 6건 전부 LOW. Unity 6000.3.x 안정',
    lastUpdate: '3/24: 200레벨 확장+타이머+별점 3커밋 확인. cat-merge-cafe 코드 미착수. agent-office 기술부채 0건',
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
    taskSummary: 'Debug.Log 100건+ 가드 미적용 MEDIUM. HBSaveLoadManager 평문 JSON 보안 리스크. 자동화 테스트 전무 HIGH',
    lastUpdate: '3/24: BoardDataLoader 17건, PreGeneratedBoardManager 28건, PuzzleManager 22건 가드 없음. 유닛 테스트 최소 작성 권장',
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
    taskSummary: '개인정보처리방침 Google Play 3/4 데드라인 경과 즉시 처리. Instagram Reels 주력+Shorts 병행. Paid Organic $200 소액 집행',
    lastUpdate: '3/24: ASO 첫 2장 스크린샷 전환율 결정. CPP 자연 검색 영향 확대. Discord 커뮤니티 조기 구축. DevLog 콘텐츠 주 3편',
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
    taskSummary: 'daily_standup 2일째 실패(exit 9009) 작업 스케줄러 재등록 필요. Node 20 EOL 5주 전 CI 22 업그레이드. 배포 5연속 성공',
    lastUpdate: '3/24: 9009=실행파일 미발견, 스케줄러 태스크 미등록 확인. deploy-pages.yml node-version 22 변경 필요. 파이프라인 안정',
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
    taskSummary: 'iOS 26 Liquid Glass 아이콘 4모드 대응 필수. 마이크로인터랙션 200-500ms+멀티센서리 표준. 스타일라이즈드+핸드메이드 트렌드',
    lastUpdate: '3/24: 앱 아이콘 Liquid Glass 대응 검토. 스크린샷 내러티브 구조(문제→감성→솔루션). 고양이 테마 소프트 웜 팔레트 권장',
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
