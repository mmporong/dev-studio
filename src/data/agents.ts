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
    taskSummary: 'NumLink 6커밋 미푸시+MeowBeat 130파일 미커밋 유실 리스크. Node 20→24 전환 34일 데드라인. Phase 4 95%·Phase 5 80% 완료',
    lastUpdate: '3/27 스탠드업: NumLink push 즉시 실행, MeowBeat 분할 커밋, Node 24 전환 이번 주, npm audit fix 결정',
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
    taskSummary: 'NumberLink 틈새 장르 포화도 낮음. Wordle식 일일 챌린지+결과 공유 표준 정착. 광고+IAP 하이브리드가 1인 개발 최적 수익 모델',
    lastUpdate: '3/27 리서치: Match-3 포화 속 로직 퍼즐 성장세 확인. 시즌 패스보다 AdMob+IAP가 현실적. MeowBeat 고양이+리듬 니치 Cytus/Phigros와 차별화',
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
    taskSummary: 'NumLink Input.GetKeyDown 2건 CLAUDE.md 위반 수정 필요. GameManager UI 로직 집중(SRP 위반). Vite 8.0.3 + Unity 6.4 출시 확인',
    lastUpdate: '3/27: NumLink 별점UI+StageClearPanel 6커밋 미푸시. MeowBeat ButtonController 저장 미구현. npm audit HIGH 2건(flatted, minimatch). Unity 6.4 ECS 통합 출시',
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
    taskSummary: 'NumLink Debug.Log 자체 40건 가드 미적용. MeowBeat 35건(AdmobManager 12건 최심각). 3프로젝트 자동화 테스트 0건. agent-office ESLint 1건·빌드 정상',
    lastUpdate: '3/27: NumLink TODO 6건(모두 LOW), try-catch 66건 양호. MeowBeat try-catch 9건만(에러 처리 부족). agent-office OfficeContext.tsx Fast Refresh 에러. 빌드 1.54초 정상',
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
    taskSummary: 'ASO AI 검색 전환 — 의도 중심 메타데이터 필수. 스크린샷 첫 2장 전환율 결정. 숏폼 에피소드형 시리즈 알고리즘 선호. Google Play 수수료 20% 인하',
    lastUpdate: '3/27: 10개 언어 현지화 CSL 전환율 35~50% 향상. TikTok 유기 도달 하락→$100~200 소액 부스팅 필수. 한국 AI 기본법 시행 AI 콘텐츠 출처 고지 권장. 개발일지 숏폼 즉시 시작 합의',
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
    taskSummary: 'Node 20 EOL 4/30(34일) → Node 24 직행 전환 긴급. upload-pages-artifact v3→v4 필수. .nvmrc 미존재. CI 파이프라인 구조 양호',
    lastUpdate: '3/27: GitHub Actions 6/2부터 Node 24 기본 런타임. deploy-pages.yml node-version 24+artifact v4+.nvmrc 생성 이번 주 완료 결정. checkout v4→v5도 권장',
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
    taskSummary: '마스코트 아이콘 인게이지먼트 +34%. Anti-AI 슬롭 인간 크래프트 프리미엄 10~50배. NumLink 오프화이트+딥 인디고. MeowBeat 크리미 아이보리+코랄 피치',
    lastUpdate: '3/27: HUD 피로 해소 트렌드 — 미니멀 HUD+제스처 숨김. MeowBeat 고양이 감정 상태 시스템+모듈형 아이콘. 스크린샷 3장 구조(가치약속/핵심플레이/소셜프루프). Wabi-Sabi 불완전성 차별화',
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
