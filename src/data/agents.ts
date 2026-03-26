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
    taskSummary: 'MeowBeat 미커밋 유실 위험 최우선 해소. NumLink 안정화 마무리+스토어 에셋 유일 블로커. CI Node 24 전환 마감 4/30',
    lastUpdate: '3/26 진행 회의: MeowBeat 50+파일 미커밋·리모트 미푸시 긴급 해소, NumLink 워킹 디렉토리 커밋, Debug.Log 일괄 가드 결정',
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
    taskSummary: '퍼즐 시장 $56억→$121억(CAGR 9%). Wordle DAU 12M 일일 챌린지 모델 NumLink 도입 필수. 리듬 게임 인디 아티스트 협업 참여율 28% 향상',
    lastUpdate: '3/26 리서치: Match-3 포화 속 NumberLink 차별화 공간 존재. 일일 챌린지+공유 결과 카드+테마 해금 메타 레이어 설계 필수. MeowBeat 독립 뮤지션 파트너십 우선',
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
    taskSummary: 'NumLink 안정화 마무리(fix 5커밋). agent-office 소스 기술 부채 실질 0건. Vite 8.0 Rolldown 업그레이드 권장. NumLink/MeowBeat C:\\Unity 하위 확인',
    lastUpdate: '3/26: NumLink 200레벨+타이머+별점 구현 후 버그 수정 안정화. agent-office 최근 5커밋 +430줄 정상. Vite 8.0 Rolldown 빌드 10~30배 향상 전환 권장',
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
    taskSummary: 'NumLink Debug.Log 145건 중 114건 가드 미적용. MeowBeat 53건 중 48건 미가드(SaveSystem 경로노출). 자동화 테스트 3프로젝트 0건. agent-office 빌드 정상·ESLint 1건',
    lastUpdate: '3/26: NumLink PreGeneratedBoardManager 26건·PuzzleManager 23건 최심각. MeowBeat SaveSystem 저장경로·CafeManager 코인금액 노출. agent-office console.log 0건·tsc 에러 0건',
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
    taskSummary: 'Apple 프로모코드 3/26 폐지→Offer Code 전환 필수. ASO 2026: AI 검색 전환으로 키워드 나열 무효화, 첫 2장 스크린샷 전환율 핵심. 개인정보처리방침 KISA 자동생성 활용',
    lastUpdate: '3/26: App Store 4월부터 iOS 26 SDK 필수. Play Store 수수료 20%(한국 12/31). TikTok "하루 퍼즐 챌린지" 시리즈 제안. 개인정보처리방침 작성지침 2025.4 개정 기준 적용',
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
    taskSummary: 'CI 파이프라인 정상(최근 4회 성공). deploy-pages.yml Node 20→24 전환 필요(EOL 4/30). DailyStandup 스케줄러 여전히 미등록',
    lastUpdate: '3/26: deploy-pages.yml 아직 node-version: 20. package.json engines 미설정·.nvmrc 없음. Actions 최신 v4/v5 사용 중. DailyStandup schtasks 미등록 지속',
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
    taskSummary: '마스코트 아이콘 트렌드 정점 — MeowBeat 고양이 직결. 퍼즐 "방해하지 않는 미니멀 HUD" 원칙. 스토어 스크린샷 첫 2장 전환율 90% 결정. 안티-리퀴드글라스 철학 대두',
    lastUpdate: '3/26: 리듬 게임 키네틱 타이포+음악 비주얼라이저 통합 트렌드. 스크린샷 A/B 테스트 24.3% 전환율 향상. NumLink 미니멀 HUD+파티클 클리어 연출. MeowBeat 따뜻한 주황-금색 or 딸기-크림 팔레트',
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
