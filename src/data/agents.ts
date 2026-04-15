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
    taskSummary: 'P0 4일째 이월. NumLink .gitignore 정리 필요·MeowBeat unstaged 15건 방치. FarmFood 디버그로그·QA인프라 구축 미완료.',
    lastUpdate: '4/16 스탠드업: P0 4일째 이월 — 실행 정체 심각. FarmFood 디버그 정리(30분) 등 소규모 P0부터 즉시 닫을 것.',
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
    taskSummary: '니치퍼즐 222%성장·Block Blast 월3000만DL. 리듬 $2.5B→$5.3B, Hololive Dreams 직접 경쟁. NumLink 데일리퍼즐 모드 P1 제안.',
    lastUpdate: '4/16 리서치: 니치 서브장르 폭발(Block +2900%), Royal Match $1.46B 무광고 모델. NumLink 데일리퍼즐로 Flow Free 차별화 제안.',
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
    taskSummary: 'MeowBeat FarmFoodManager 디버그로그 5개 잔존+farm 3커밋 반복수정. NumLink TODO 5건. Unity 6.4 출시(4/14)이나 LTS 패치 우선.',
    lastUpdate: '4/16: FarmFood 디버그로그 정리 P0 추가. farm revert→재수정 반복 — 안정화 필요. Unity 6.4 출시 확인, LTS 6000.3.13f1 우선 권장.',
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
    taskSummary: 'NumLink QA인프라 전무 4일째(테스트 0건). input 드래그 회귀 3건·UI 렌더링 fix 5건 반복. MeowBeat Farm 모듈 fix 7연속 고위험.',
    lastUpdate: '4/16: NumLink 테스트 커버리지 0%, MeowBeat ~3.4%. input/UI 반복수정은 테스트 부재가 근본 원인. Tools/ 복사 즉시 실행 필요.',
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
    taskSummary: 'Apple AI 태그=스크린샷 검색순위 결정. 첫 2장 스크린샷 전략 전환 시급. 분기별 A/B 테스트 시 전환율 20-30% 상승. 인디=틱톡 숏폼+마이크로 인플루언서.',
    lastUpdate: '4/16 리서치: Apple AI 태그 시대 ASO 스크린샷 혁명 발견. 첫 2장="핵심 게임플레이+CTA" 형태로 제작 P2 제안.',
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
    taskSummary: 'agent-office 배포 정상(최근 5회 success). MeowBeat 색공간 Gamma(0) 발견 — 모바일 품질 이슈. NumLink/MeowBeat CI/CD 전무. GameCI 도입 NumLink부터.',
    lastUpdate: '4/16: MeowBeat 색공간 Gamma(0) 신규 발견 — Linear 교정 필요. agent-office 워크플로우 5회 연속 success. GameCI 도입 NumLink 우선 착수.',
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
    taskSummary: '의도적 미니멀리즘+어스톤(샌드/클레이) 부상. MeowBeat UI=NumLink 동일 세트 → 분리 시급. 노트 2종→5종 확장. .png.meta.png 오류 2건.',
    lastUpdate: '4/16 리서치: MeowBeat UI 완전 분리 P1 제안(고양이 테마 전용 UI 킷). 코튼핑크+크림+라벤더 팔레트. .png.meta.png 확장자 오류 즉시 수정.',
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
  'P0: [4일째 이월] 미커밋 정리 + .gitignore 업데이트 — NumLink IDE폴더·MeowBeat unstaged 15건',
  'P0: MeowBeat FarmFoodManager 디버그로그 5개 제거 + farm 안정화',
  'P0: [4일째 이월] NumLink Tools/ QA 인프라 복사 (_ProjectTemplate/Tools/)',
  'P0: Unity 6000.3.5→6000.3.13f1 LTS 패치 업그레이드',
  'P1: MeowBeat UI를 NumLink에서 완전 분리 — 고양이 테마 전용 UI 킷',
  'P1: NumLink 데일리 퍼즐 모드 MVP 스코프 추가 검토',
  'P2: ASO 스크린샷 전략 수립 — Apple AI 태그 시대 대응',
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
