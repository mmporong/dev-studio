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
    taskSummary: '**🧹 진단·결정 이중 교정(6/18)**: NumLink 미커밋 16일째(6/2 이후·36파일)를 Orchestrator·QA·Developer가 독립 지목 — QA가 근본 원인을 ".gitignore 미정비(노이즈 36건에 실작업분 매몰)"로 정확히 진단. **✅ dependabot 3건(#102·#99·#103) 회의 중 자율 머지·6/17 P1 종결**(HEAD 7527c52·#99는 "닫기"가 오진이라 정상 major 머지로 정정·#104만 보류). **🔴 MeowBeat 6/17 a0d1a81 이후 정체**(미커밋 37파일·.cs 4개 백업 안 됨·NoteSpawner dspTime 미완). **다음 임무**: NumLink .gitignore 정비 선행 후 선별 커밋(사용자 세션 1순위). **메타**: 목요일·D+25 — 회의가 어제 결정의 오류까지 감사·정정한 날.',
    lastUpdate: '6/18 목요일 스탠드업(🧹 위생이 의지를 가뒀다·NumLink 16일 미커밋의 진짜 원인이 .gitignore 미정비임을 QA가 진단·DevOps가 6/17 "#99 닫기" 오진 정정·메인이 dependabot 3건 회의 중 자율 머지로 6/17 P1 종결): **✅ [실행완료] dependabot #102·#99·#103 자율 머지(HEAD 7527c52·#104만 보류)** + **🚨 P0 NumLink .gitignore 정비(.omc/·state/·Screenshots/) 선행 후 Layer Lab 선별 커밋(사용자 세션)** + **🔴 P0[이월] MeowBeat dspTime 전환+미커밋 .cs 4종 백업(사용자 세션)** + **🟡 P1 NumLink DOTween→PrimeTween PoC+검증툴 3종 이식** + **🟢 P2 글래스모피즘+Barrier Layer·4주 데일리 챌린지·스크린샷 A/B**.',
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
    taskSummary: '**🎮 신규 1순위(시즌 길이)**: 8주 시즌패스는 **5주차 리텐션 50% 붕괴** → 캐주얼은 **2~4주 짧은 시즌+2주 콘텐츠 갱신**이 2026 표준. **🎮 신규 2순위(알림·소셜)**: 데일리 알림 아침→점심 이동 시 **D7 18%p 상승**·비경쟁 리더보드+시간제한 챌린지가 세션·과금 동시 견인. **🎮 신규 3순위(시장)**: 리듬게임 시장 **25→53억달러(CAGR 9.1%)**·캐주얼 과금 IAP:광고 50:50·**보상형 동영상이 광고매출 62%** 점유. **적용**: NumLink 주간 데일리 챌린지+비경쟁 리더보드를 4주 짧은 시즌으로(점심 알림·2주 갱신·보상형 동영상만)·MeowBeat 데일리 1곡 챌린지 동형 이식.',
    lastUpdate: '6/18 목요일 리서치(목요일·D+25·8주 시즌패스 5주차 리텐션 50% 붕괴→캐주얼 2~4주 짧은 시즌 표준·데일리 알림 아침→점심 D7 18%p↑·리듬게임 25→53억달러 CAGR 9.1%·보상형 동영상 광고매출 62% 신규): **🎮 P2 NumLink 주간 데일리 챌린지+비경쟁 리더보드 4주 짧은 시즌 도입(점심 알림·2주 콘텐츠 갱신·보상형 동영상만·단일 진행축 미접촉 최소 침습 라이브옵스)·MeowBeat 데일리 1곡 챌린지 동형 이식**. P0 후. Sources: GameGrowthAdvisor·PocketGamer·GetBruin 시즌길이-리텐션·Udonis 과금·VerifiedMarket 리듬게임 시장.',
    priority: 'high',
    energy: 84,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: '**💻 신규(트위닝 부채 실측)**: PrimeTween은 **50+동시트윈서 GC스파이크 0건**(DOTween 2-3초마다·트윈당 48-120B 할당). NumLink가 DOTween을 **게임플레이 9파일**(GameManager·UIManager·EffectManager·ComboPopupUI·NumberButton 등) 실사용 중 → 마이그레이션 범위 명확·소규모. MeowBeat는 둘 다 미사용. **💻 신규(렌더링)**: Unity6 GPU Resident Drawer는 CPU 최대 50%↓지만 **모바일선 GPU부하↑+정적배칭 충돌**(2D 캐주얼 신중). **💻 코드 부채**: MeowBeat 미커밋 21파일(+1190/-1089) 한 덩어리. **메시지**: NumLink DOTween→PrimeTween PoC(ComboPopupUI/EffectManager부터 GC Alloc 측정).',
    lastUpdate: '6/18 목요일 리서치(목요일·PrimeTween 50+동시트윈 GC스파이크 0건 DOTween 2-3초마다 트윈당 48-120B·NumLink DOTween 게임플레이 9파일 실사용 마이그레이션 범위 명확·Unity6 GPU Resident Drawer 모바일 GPU부하↑+정적배칭 충돌 신규): **💻 P1 NumLink DOTween→PrimeTween PoC — 부하 큰 ComboPopupUI/EffectManager 반복 트윈부터 교체·실기 GC Alloc 프로파일러 before/after 측정(MeowBeat 무관·둘 다 미사용)**. Sources: DeepWiki PrimeTween 벤치마크·Omitram 2026 트위닝 가이드·Unity Manual GPU Resident Drawer·grep 실측.',
    priority: 'high',
    energy: 84,
    characterKey: 'spark',
  },
  {
    id: 'qa-tester',
    name: 'QA Tester',
    role: '빌드 검증 / 회귀 테스트 / 버그 리포트',
    status: 'verifying',
    zone: 'qa-zone',
    taskSummary: '**🔑 핵심 진단(근본 원인)**: NumLink 미커밋 36건의 병목은 커밋 의지가 아니라 **.gitignore 미정비** — .omc/·state/·Screenshots/·Layer Lab 에셋 노이즈가 status를 가득 채워 정작 커밋할 실작업분이 매몰돼 selective add가 번거로워 손이 안 가는 구조. 즉 16일 누적의 원인은 의지가 아니라 **위생(hygiene)**. **🚨 미해결 P0**: NoteSpawner.cs:126 deltaTime 누적이 파일 미수정 채 "방치·박제"(게임 코드·사용자 세션). **🔍 회귀 분리**: MeowBeat 미커밋 .cs 4종은 타이밍 코어 미접촉→P0와 독립 진행 가능(단 2개월 미커밋 컨텍스트 유실 위험).',
    lastUpdate: '6/18 목요일 리서치(목요일·🔑 NumLink 미커밋 36건 근본 원인은 의지 아닌 .gitignore 미정비로 실작업분 매몰·NoteSpawner deltaTime 파일 미수정 채 박제·MeowBeat 미커밋 .cs 4종 타이밍 코어 미접촉이라 P0와 독립 신규): **🚨 [실행 권고] NumLink .gitignore에 .omc/·state/·Screenshots/ 추가해 노이즈 제거→실작업분 노출→선별 커밋** + **MeowBeat 검증툴 3종 NumLink 이식으로 검증 0% 탈출**. Sources: git status 실측·NoteSpawner.cs:126·known_bugs.json.',
    priority: 'high',
    energy: 72,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**📦 신규 1순위(ASO 키워드 배치)**: 2026 ASO는 **탭률7%↑·전환20%↑ 키워드만 타이틀/부제 30자에 배치**·키워드필드 100자는 잔여어·롱테일만(스터핑 배제). **📦 신규 2순위(스크린샷 A/B)**: 게임 평균 전환율 **3~5%대**·첫 2장이 설치 결정 대부분·A/B로 **첫 3프레임 바꾸면 10~25% 리프트**(상위게임 57%가 연2회+ 테스트). **📦 신규 3순위(커뮤니티)**: 디스코드 멤버 유지율 **20~60%로 트위터/인스타 압도**·인디는 WIP 공유형 소규모 운영 표준. **적용**: NumLink 첫 2장 스크린샷 A/B(연결선 모션 캡처)+부제 30자 롱테일 1개·장기 디스코드.',
    lastUpdate: '6/18 목요일 리서치(목요일·2026 ASO 탭률7%↑·전환20%↑ 키워드만 타이틀/부제 30자 배치·게임 전환율 3~5%대 첫 2장 스크린샷 A/B 첫3프레임 10~25% 리프트 상위게임 57% 연2회+ 테스트·디스코드 유지율 20~60% 신규): **📦 P2 NumLink 스토어 첫 2장 스크린샷 A/B 테스트(연결선 그어지는 순간 캡처·숫자 프레임 밖 튀는 캐주얼 정석 대조군)+부제 30자 롱테일 1개 자연 삽입(스터핑 배제)**. P0 후. Sources: MobileAction ASO 2026·AppDrift·Adapty/ScreenFast 전환율·Screenhance 스크린샷.',
    priority: 'high',
    energy: 81,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🛡 ✅ CI 정상**: gh run 최근 5건 전부 success(Pages 배포 44s~1m2s)·dependabot 4PR 전부 MERGEABLE/CLEAN. **🔧 6/17 결정 정정**: "#99 닫기"는 오진 — #99(upload-pages-artifact 4→5)는 actions-major 그룹 의도적 단독 분리된 **정상 v5 업데이트라 머지 대상**. #99·#102 둘 다 deploy-pages.yml 수정→#102 먼저·#99 CLEAN 재확인·#103 독립 안전·**#104(npm-major 5건)만 breaking 가능성 changelog 검토**. **🛡 신규(비용)**: GitHub Actions 2026.1.1부 호스티드러너 **최대 39% 인하**(16코어 Linux $0.042/min)·자체호스팅 분당과금 무기한 보류. **✅ 실행**: #102→#99→#103 회의 중 자율 머지(#104 보류).',
    lastUpdate: '6/18 목요일 리서치(목요일·🔧 6/17 "#99 닫기"는 오진 정정 정상 major 머지 대상·#99·#102 deploy-pages.yml 동시 수정 순서 충돌 회피·#104 npm-major만 changelog 검토·CI 5건 success·Actions 2026.1.1 호스티드러너 39% 인하 신규): **✅ [실행완료] dependabot #102→#99→#103 회의 중 자율 머지(HEAD 7527c52·6/17 P1 종결)·#104(npm-major 5건)만 changelog 검토 후 머지 보류**. Sources: gh run/pr 실측·dependabot.yml·StackTrack/GitHub Actions 2026 가격.',
    priority: 'high',
    energy: 80,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(글래스모피즘 부분 적용)**: 2026 모바일 UI는 글래스+뉴모피즘 하이브리드 주류지만 **전면 적용 사라지고 토글/카드/슬라이더 핵심 요소에만 부분 적용**. **🎨 신규 2순위(접근성·Barrier Layer)**: 글래스 위 텍스트는 WCAG 본문 **4.5:1**·UI **3:1** 필수 → 글래스 밑 **Barrier Layer(불투명도 70~80% 단색 fill)**로 가독성 확보가 2026 표준. **🎨 신규 3순위(온보딩)**: 캐주얼 D1 리텐션 **35~40%가 상위권**(25% 미만이면 온보딩·코어루프 결함)·learn-by-doing 점진 온보딩이 정적 스와이프 대체. **적용**: NumLink 리스킨 글래스모피즘 부분 적용+숫자/타이머 Barrier Layer로 WCAG 4.5:1 확보(셀 묻힘 사고 차단).',
    lastUpdate: '6/18 목요일 리서치(목요일·2026 글래스모피즘 전면 적용 사라지고 토글/카드/슬라이더 부분 적용·글래스 위 텍스트 WCAG 4.5:1 위해 Barrier Layer 70~80% 단색 fill 표준·캐주얼 D1 35~40% 상위권 learn-by-doing 온보딩 신규): **🎨 P2 NumLink Layer Lab 리스킨에 글래스모피즘 HUD/팝업/셀 하이라이트만 부분 적용(그리드 본판 플랫 유지)+글래스 위 숫자/타이머 Barrier Layer로 WCAG 4.5:1 확보·실캡처 대비 육안 확인·MeowBeat 노트 히트 판정선 주변 절제**. P0 후. Sources: Zignuts·AxessLab 글래스모피즘 접근성·VWO 온보딩·GameAnalytics juice.',
    priority: 'high',
    energy: 79,
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
  '✅ [실행완료·자체 레포 자율 실행 4번째·어제 결정을 정정하며 닫은 첫 사례] dependabot PR #102·#99·#103 회의 중 자율 머지 — DevOps가 6/17 "#99 닫기" 결정을 오진(actions-major 그룹으로 의도적 단독 분리된 정상 upload-pages-artifact v5 업데이트라 머지 대상)으로 정정. #99·#102가 둘 다 deploy-pages.yml을 수정하므로 #102(actions minor/patch)→#99(v5)→#103(npm minor/patch 11건) 순으로 자율 머지하고 로컬 동기화(HEAD 7527c52). #104(npm-major 5건)만 breaking 가능성으로 changelog 검토 후 머지 보류. CI 최근 5건 전부 success',
  '🚨 P0 [게임 코드·사용자 세션] NumLink .gitignore 정비 선행 후 Layer Lab 리스킨 실작업분 선별 커밋 — QA 근본 원인 진단: 미커밋 36건의 병목은 커밋 의지가 아니라 .gitignore 미정비로 .omc/·state/·Screenshots/·Layer Lab 에셋 노이즈가 status를 가득 채워 실작업분이 매몰된 것. 따라서 ① .gitignore에 .omc/·state/·Screenshots/ 추가로 노이즈 제거 → ② 드러난 Layer Lab 리스킨 실작업분 선별 커밋 순서. Orchestrator·QA·Developer 3명 독립 지목·6/2 이후 16일째 누적 최대 백업 리스크',
  '🔴 P0 [이월·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환(dspTime+PlayScheduled+판정 윈도우)+미커밋 .cs 4종(GameManager/SongManager/OptionManager/SongData) WIP 백업 커밋 — deltaTime 누적이 6/16·6/17·6/18 파일 미수정 채 박제. .cs 4종은 타이밍 코어 미접촉이라 P0와 독립 진행 가능하나 약 2개월 장기 미커밋으로 컨텍스트 유실 위험',
  '🟡 P1 NumLink DOTween→PrimeTween PoC + MeowBeat 검증툴 3종 NumLink 이식 — PrimeTween은 50+동시트윈서 GC스파이크 0(DOTween 2-3초마다·트윈당 48-120B). NumLink가 DOTween을 게임플레이 9파일 실사용 중이라 범위 명확 → 부하 큰 ComboPopupUI/EffectManager 반복 트윈부터 교체·실기 GC Alloc 프로파일러 before/after 측정. 병행하여 MeowBeat 절대경로화 검증툴 3종을 NumLink로 복사해 검증 0%→1 탈출',
  '🟢 P2 [신규 적재 — 모두 P0 후]: Art Director — NumLink Layer Lab 리스킨에 글래스모피즘 HUD/팝업/셀 하이라이트만 부분 적용(그리드 본판 플랫)+글래스 위 숫자/타이머 Barrier Layer(불투명도 70~80% 단색 fill)로 WCAG 4.5:1 확보(셀 묻힘 사고 차단). Game Designer — NumLink 주간 데일리 챌린지+비경쟁 리더보드 4주 짧은 시즌(8주는 5주차 50% 붕괴·점심 알림 D7 18%p↑·보상형 동영상만)·MeowBeat 데일리 1곡 챌린지 동형 이식. Content Writer — NumLink 스토어 첫 2장 스크린샷 A/B(연결선 모션 캡처·첫 3프레임 10~25% 리프트)+부제 30자 롱테일 1개 자연 삽입',
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
