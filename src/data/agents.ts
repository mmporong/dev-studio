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
    taskSummary: '**🎯 세 레포 동결 3일째(6/15)**: NumLink 미커밋 36·MeowBeat 37·해시 5fcac3a/657032c/7e95fbf 6/14 대비 변동 0·월요일 새벽 무인 구간·P0(MeowBeat UMP·targetSdk 36·광고 Bidding)는 사용자 세션 위임 유지. **dependabot PR 13건**(npm 10건 #19~32+actions 3건 #97~99)·6/14 액션아이템 4종(MeowBeat P0·검증 절대경로화·NumLink Tools 이식·dependabot 머지) **전부 미완료**. **게임 레포 P0는 위임으로 막힘 → 자율 실행 가능한 유일 영역은 자체 레포**. **다음 임무**: "결정만 하는 회의" 정체를 깨기 위해 자체 레포 개선(weekly-insights.yml 권한 최소화)을 회의 중 직접 커밋. **메타**: 월요일·D+22 — 정체 속에서 회의가 손이 닿는 곳을 직접 고친 날.',
    lastUpdate: '6/15 월요일 스탠드업(🛠 동결 3일째·액션 4종 미완 속 회의가 자체 레포 보안 개선 직접 커밋·dependabot PR 13건): **✅ [실행완료] weekly-insights.yml permissions 워크플로 레벨→collect job 레벨 격하(최소권한·deploy-pages 패턴 통일)** + **🔧 P1[4일째 미착수] 검증 3종 절대경로화(사용자 세션 1순위)** + **🚨 P0[위임·동결 3일째] MeowBeat UMP+targetSdk 36+광고 Bidding+엔진 패치** + **🛡 P1 dependabot actions #97·#98 안전머지·#99 메이저 검증** + **🎮💻🎨📦 P2 PrimeTween 시범·데일리 스트릭+보상형 광고·마이크로 인플루언서 시딩·고양이 마스코트 시트**. 메타: 위임 영역과 자율 영역을 분리해 회의가 멈추지 않는 구조 재입증.',
    priority: 'high',
    energy: 86,
    characterKey: 'ember',
  },
  {
    id: 'game-designer',
    name: 'Game Designer',
    role: 'GDD / 이코노미 밸런싱 / 차별화 전략',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🆕 신규 1순위(라이브옵스·스트릭)**: **데일리 스트릭은 게임 95%가 채택**(손실회피로 미접속일도 복귀 유도). **🆕 신규 2순위(보상형 광고)**: 보상형 광고 이용자 **리텐션 3.5배·완료율 85~95%·광고매출 50~70% 차지**(美 안드로이드 eCPM $16.49/iOS $19.63)·단 레벨완료 같은 자연스러운 전환점 배치 시 D7 중립~상승, 오배치 시 D7 최대 25%↓. 시즌패스 스타터팩 $0.99~2.99·시즌패스 $7.99~19.99 듀얼패스 표준. **🆕 신규 3순위(리듬 신작·차별점)**: **RedOctane Stage Tour(가을·Gibson)·Rhythm Heaven Groove(7/2)** — 모바일 리듬 70%+ 라이선스 음원 → **MeowBeat Lyria 자체생성=라이선스 0 차별점**. **적용 메시지**: NumLink "데일리 스트릭+보상형 광고 스트릭 구제" 결합(코어루프 단순해 우선 적용).',
    lastUpdate: '6/15 월요일 리서치(월요일·D+22·데일리 스트릭 95% 채택·보상형 광고 리텐션 3.5배·완료율 85~95%·광고매출 50~70%·리듬 신작 RedOctane Stage Tour/Rhythm Heaven Groove·MeowBeat Lyria 라이선스 0 차별점 신규): **🎮 P2 NumLink "데일리 스트릭+보상형 광고 스트릭 구제" 결합 — 매일 첫 접속 스트릭 증가(7일 주기 보상)·끊길 위기 시 광고 1회로 1일 복구·광고를 "스트릭 구제" 가치 지점 배치해 D7 부정 영향 회피**. P0 커밋·UMP 선행. Sources: designthegame.com·maf.ad/coinis.com·gamerefinery.com·gamegrowthadvisor.com·insider-gaming.com.',
    priority: 'high',
    energy: 83,
    characterKey: 'leaf',
  },
  {
    id: 'developer',
    name: 'Developer',
    role: 'Unity C# 구현 / 프리팹 배치 / 시스템 연동',
    status: 'building',
    zone: 'dev-desk',
    taskSummary: '**💻 실측**: NumLink·MeowBeat 둘 다 Unity 6000.3.5f2 유지. **🆕 신규 1순위(트위닝 GC)**: **PrimeTween**(DOTween과 거의 동일 API에 zero-allocation·파괴 시 크래시 없음·1.29배 느린 trade-off)이 **NumLink DOTween 7스크립트(NumberButton·ComboPopupUI·EffectManager 등) GC 스파이크 해소 후보** — 콤보 팝업/이펙트 GC Alloc이 모바일 프레임 드랍 원인 가능성·MeowBeat는 DOTween 0건(대상 아님). **🆕 신규 2순위(대안)**: LitMotion(DOTS 기반 최속·대량 오브젝트용·NumLink 규모엔 PrimeTween 적합). **🆕 신규 3순위(프로파일러)**: Unity 6.3 프로파일러 기본 2,000프레임 캡처·TypeTree 런타임 메모리 최대 99% 절감. **메시지**: NumLink ComboPopupUI/EffectManager만 시범 전환 후 GC 측정.',
    lastUpdate: '6/15 월요일 리서치(월요일·PrimeTween zero-allocation DOTween 대체·NumLink 7스크립트 DOTween 실사용·MeowBeat 미사용·LitMotion DOTS·Unity 6.3 프로파일러 2,000프레임/TypeTree 99%절감 신규): **💻 P2 NumLink ComboPopupUI/EffectManager만 PrimeTween 시범 전환 후 GC Alloc 프로파일러 측정·유의미하면 7스크립트 확대(MeowBeat DOTween 미사용·대상 아님)**. P0 선행. Sources: github.com/KyryloKuzyk/PrimeTween·omitram.com 2026 트위닝 가이드·unity.com 6.3 LTS·DOTween 사용처 grep 실측.',
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
    taskSummary: '**🔍 절대경로화 4일째 미착수(P1 재확정)**: 6/14 "차기 큐 1순위·승인 불필요"로 결정한 검증 3종 절대경로화 여전히 미착수 — `unity_validate.py:24 Path(\'Tools/known_bugs.json\')`·:64·`qa_static.py:20-22`·`run_regression.py:19-20`·`add_song_buttons.py:167` 전부 CWD 상대경로. **Tools/ CWD 실행 시 거짓 WARN 2건 재현**(known_bugs not found·manifest 없음)·**루트에서만 0err 2/2 PASS**. 대응: 상단에 `SCRIPT_DIR=Path(__file__).resolve().parent`·`ROOT=SCRIPT_DIR.parent` 정의 후 절대경로 교체(약 30분)·게임 레포 커밋 필요라 위임 적체. **🚨 신규 리스크**: 미커밋 37건(SongData/GameManager/SongManager.cs 등 핵심 .cs 6개) 백업 안 됨. **회귀 픽스처 2/6(33%) 그대로**. 게임데이터 무결성 양호(곡 10·audioFile 10·ogg 10 일치·노트 레인 0위반·meta 누락 0). **메시지**: 사용자 세션 1순위 실착수.',
    lastUpdate: '6/15 월요일 리서치(월요일·검증 3종 절대경로화 4일째 미착수 unity_validate.py:24 상대경로 그대로·Tools/ CWD 거짓 WARN 2건 재현·루트 0err·미커밋 37건 핵심 .cs 미백업·픽스처 2/6 신규): **🔧 P1[재확정] 검증 3종+make_fixtures+add_song_buttons __file__ 절대경로화 사용자 세션 1순위 실착수 — 4일째 결정만 반복 중·미커밋 37건 백업 권고**. Sources: unity_validate/qa_static/run_regression 코드 실측·루트/Tools CWD 양쪽 실행·manifest/ogg 대조.',
    priority: 'high',
    energy: 64,
    characterKey: 'wave',
  },
  {
    id: 'content-writer',
    name: 'Content Writer',
    role: '블로그 / 스토어 설명 / SNS 콘텐츠',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**📦 신규 1순위(마이크로 인플루언서)**: $100~500/건의 마이크로 인플루언서에 $1만 5~8명 분산 시 **메타 광고 대비 ROAS 2~5배·평균 인게이지먼트 4.84%**·단건당 재사용 영상 5~10개 확보(ASO 스크린샷·숏폼 멀티유즈). **📦 신규 2순위(현지화)**: 현지화 시 **대상 지역 1일차 다운로드·위시리스트 4~5배 급증**·**CJK(중·일·한)가 글로벌 모바일 매출 50%+** — 일본어 우선 현지화 효율 높음. **📦 신규 3순위(피처링)**: 애플 신규 **Featuring Nominations** — 인게임 한정 이벤트·할인을 에디토리얼에 직접 제안·검색결과/헤더 노출. **적용 메시지**: MeowBeat TikTok 마이크로 크리에이터 3~5명 시딩 테스트($1천 내)+NumLink 일본어 현지화 백로그.',
    lastUpdate: '6/15 월요일 리서치(월요일·마이크로 인플루언서 ROAS 메타 2~5배·인게이지 4.84%·현지화 시 대상지역 다운로드 4~5배·CJK 매출 50%+·애플 Featuring Nominations 신규): **📦 P2 MeowBeat 출시 전 TikTok 마이크로 크리에이터(10k~100k) 3~5명 시딩 테스트 — 무료 빌드+소액 플랫피($100~300/건)·$1천 내 ROAS 측정·재사용 영상 5~10개 확보+NumLink 일본어 우선 현지화 백로그**. P0 커밋·UMP 선행. Sources: influencermarketinghub.com·brands.joinstatus.com·1word4pics.com/speequalgames.com·prismnews.com·discord.com.',
    priority: 'high',
    energy: 80,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**🛡 ✅ 회의 중 실행 완료**: weekly-insights.yml의 `permissions: contents: write` 워크플로 레벨 전역 부여를 **워크플로 레벨 `contents: read`+collect job 레벨 `contents: write`로 격하**(최소권한·deploy-pages 패턴 통일·단일 job이라 동작 변화 0). **🛡 CI 현황**: gh run 최근 5건 중 4 success+1 cancelled(concurrency 정상)·워크플로 2종 모두 SHA 핀+최소권한·deploy-pages는 OIDC까지 적용. **잔여 PR 13건**: actions 3건(#97 setup-node 6.4·#98 checkout 6.0.3·#99 upload-pages-artifact 5.0 메이저)+npm 10건(eslint 10/react-hooks 7/@eslint/js 10/cheerio 1.0 메이저 다수). **🆕 보안 근거**: **2026.3 trivy-action 75태그 force-push 침해→PyPI(LiteLLM) 연쇄 유출** — agent-office는 이미 SHA 핀으로 방어. **메시지**: #97·#98 안전 머지·#99 메이저 검증 선행.',
    lastUpdate: '6/15 월요일 리서치(월요일·✅ weekly-insights.yml permissions job 레벨 격하 회의 중 커밋·배포 정상 SHA핀 적용·dependabot PR 13건·trivy-action 75태그 침해 SHA핀 실증 신규): **🛡 ✅ weekly-insights.yml 권한 최소화 실행완료 + dependabot actions #97·#98 안전 머지 권장·#99(upload-pages-artifact 메이저) deploy-pages 호환 검증 선행·npm 메이저 분리**. Sources: stepsecurity.io·wiz.io·wellarchitected.github.com·gh run/pr 실측·workflows/*.yml 코드 분석.',
    priority: 'high',
    energy: 78,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(글래스모피즘 진화)**: **글래스모피즘 2026** — 다크 UI에서 반투명 레이어로 색 추가 없이 깊이 표현(NumLink 미니멀 톤 적합·과한 블러 금지·텍스트 고대비 필수). **🎨 신규 2순위(마스코트 표준)**: 캐주얼 마스코트는 **3개 정규 포즈(중립 대기·콤보 히어로 액션·컴팩트)+스쿼시앤스트레치 비율·바운스 속도 문서화**가 표준 — 캐릭터 시트로 인게임·스토어·SNS 자산 일관. **🎨 신규 3순위(스토어 일관성)**: 아이콘=스크린샷 변주(동일 배경/폰트/팔레트)·before/after 컷 전환율 우위. **연결 적용**: MeowBeat 고양이 3정규포즈 캐릭터 시트 표준화+컴팩트 포즈를 스토어 아이콘에 재사용(아이콘=인게임 캐릭터).',
    lastUpdate: '6/15 월요일 리서치(월요일·글래스모피즘 2026 다크UI 깊이·캐주얼 마스코트 3정규포즈+스쿼시앤스트레치·스토어 일관성 아이콘=스크린샷 변주·before/after 컷 신규): **🎨 P2 MeowBeat 고양이 마스코트 3정규포즈(중립/콤보 히어로/컴팩트) 캐릭터 시트 표준화 — 컴팩트 포즈를 스토어 아이콘에 재사용해 "아이콘=인게임 캐릭터" 일관성으로 ASO 전환율 직결+NumLink 다크모드 서브틀 글래스모피즘**. P0 커밋·UMP 선행. Sources: retrostylegames.com·blog.tubikstudio.com·zignuts.com·screenhance.com/apptweak.com.',
    priority: 'high',
    energy: 78,
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
  '✅ [실행완료·회의 중 직접 커밋] weekly-insights.yml permissions 워크플로 레벨→collect job 레벨 격하 — DevOps가 `permissions: contents: write` 워크플로 레벨 전역 부여를 발견(deploy-pages.yml은 이미 job별 분리). 워크플로 레벨 contents: read+collect job 레벨 contents: write로 최소권한 적용·두 워크플로 패턴 통일. 단일 job이라 동작 변화 0·보안 일관성만 확보. 6/12 "무게중심 이동"의 두 번째 이행(6/13 dependabot 머지에 이어). 배경: 2026.3 trivy-action 75태그 force-push 침해→PyPI 연쇄 유출·agent-office는 SHA 핀으로 방어',
  '🔧 P1 [4일째 미착수·실착수 권고] 검증 3종+make_fixtures+add_song_buttons __file__ 절대경로화 — unity_validate.py:24 Path(\'Tools/known_bugs.json\')·:64·qa_static.py:20-22·run_regression.py:19-20·add_song_buttons.py:167 전부 CWD 상대경로·Tools/ 실행 시 거짓 WARN 2건·루트에서만 ALL PASS. SCRIPT_DIR=Path(__file__).resolve().parent·ROOT=SCRIPT_DIR.parent 정의 후 절대경로 교체(약 30분). 6/14 차기 큐 1순위 결정 후 4일째 미착수 — 게임 레포 커밋 필요라 사용자 세션 1순위. 미커밋 37건(핵심 .cs 6개) 백업 함께 권고',
  '🚨 P0 [위임 유지·동결 3일째] MeowBeat UMP+targetSdk 36+광고 Bidding 전환+엔진 6000.3.16f1 패치 — 한 세션 묶음: ① 6/11 복붙 3커밋 ② ConsentInformation.Update→LoadAndShowConsentFormIfRequired(2024-01-16부터 시행 중) ③ Target API 36 상향(8/31) ④ LevelPlay Bidding 전환(Waterfall 1/31·Unity Ads Legacy 4/1 경과) ⑤ 6000.3.16f1 패치(CVE 3건). 새벽 무인이라 게임 레포 push 승인 불가 — 사용자 세션 위임 유지',
  '🛡 P1 [검증 후 머지] dependabot actions #97·#98 안전 머지·#99(upload-pages-artifact 메이저) deploy-pages 호환 검증 선행·npm 메이저 분리 — open 13건. #97 setup-node 6.4·#98 checkout 6.0.3은 patch/minor 안전. #99 upload-pages-artifact 4→5는 메이저라 6/13 deploy-pages 5.0.0과 정합성 확인. npm 메이저(eslint 10.2·@eslint/js 10·react-hooks 7·cheerio 1.0·globals 17.5)는 lint 깨짐 위험으로 분리·patch/minor(react·react-router·typescript-eslint) 우선. 빌드 검증 없는 새벽 무인 머지 보류',
  '🎮💻 P2 [신규 — 모두 P0 후]: Developer — NumLink ComboPopupUI/EffectManager만 PrimeTween(zero-allocation) 시범 전환 후 GC Alloc 프로파일러 측정·유의미하면 7스크립트 확대(MeowBeat DOTween 미사용·대상 아님). Game Designer — NumLink "데일리 스트릭+보상형 광고 스트릭 구제" 결합(스트릭 95% 채택·보상형 광고 리텐션 3.5배·광고를 "스트릭 구제" 가치 지점 배치해 D7 부정 영향 회피)',
  '📦🎨 P2 [신규 — 모두 P0 후]: Content Writer — MeowBeat 출시 전 TikTok 마이크로 크리에이터 3~5명 시딩 테스트($1천 내·ROAS 메타 2~5배·재사용 영상 5~10개)+NumLink 일본어 우선 현지화 백로그(CJK 매출 50%+). Art Director — MeowBeat 고양이 마스코트 3정규포즈(중립/히어로/컴팩트) 캐릭터 시트 표준화+컴팩트 포즈를 스토어 아이콘에 재사용(아이콘=인게임 캐릭터 일관성)·NumLink 다크모드 글래스모피즘',
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
