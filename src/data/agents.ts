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
    taskSummary: '**✅ 16일 만의 첫 실행(6/13)**: 6/12 결정한 dependabot actions 메이저 5건(#13~17)을 **회의 중 직접 squash 머지 완료** — 러너 마이그레이션 기한(6/15) 이틀 전 마지막 평일 타이밍. **다만 게임 레포는 오늘도 0커밋**: NumLink 미커밋 36·MeowBeat 37 동결·P0(GMA 3커밋·UMP·NumLink Tools)는 사용자 세션 위임 유지. 6/12 액션아이템 4건 중 **1건 완료·3건 미완**. **다음 임무**: 머지 후 Pages 배포 성공 확인+차기 승인 불필요 실행 큐에 scene_analyzer 인라인화 적재. **메타**: 토요일·D+20 — 진단 기관에서 실행 기관으로.',
    lastUpdate: '6/13 토요일 스탠드업(✅ dependabot actions 5건 머지 — 16일 만의 첫 실행·게임 레포 0커밋 지속·🚨 Developer UMP 긴급도 재정의 "이미 시행 중 요건"+타겟 API 36 의무화 8/31 확정·🚨 QA scene_analyzer 미배치 HIGH 발견): **✅ [완료] actions 메이저 5건 머지** + **🚨 P0[위임+재정의] MeowBeat 3커밋+UMP+targetSdk 36 묶음** + **🔧 P1[차기 실행 큐 1순위] scene_analyzer 인라인화+픽스처 2→6 통합** + **🎮📦🎨🛡 P2 catId 곡-고양이 매핑·판정 VFX 스펙·9:16 클립 표준·auto-merge**. 메타: 바뀐 방향으로 첫 발을 디딘 날.',
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
    taskSummary: '**🆕 신규 1순위(퍼즐 시장 규모)**: **美 모바일 퍼즐 IAP 지출 $4.6B·전년 +31.4%**(Sensor Tower)·글로벌 퍼즐 시장 2026 $6.66B→2035 $14.45B 전망·5월 매출 Royal Match $105.1M·Gossip Harbor $96.8M 역대 2번째 월 기록. **🆕 신규 2순위(리텐션 시대)**: 캐주얼 **D1 26~30%·D7 10~15%·D30 4~8%로 하락** — 시장이 신규 볼륨→기존 유저 LTV로 이동. **🆕 신규 3순위(리듬게임 벤치마크)**: **hololive Dreams 8/31 출시(54멤버×솔로곡 2개=150곡)·Beatstar 3,800만 DL·1년 $73M·RPD $1.41** — 공통 공식 "곡=콘텐츠 단위·캐릭터=수집 동기". **적용 메시지**: MeowBeat "고양이=곡 해금 단위" 1:1 매핑(manifest catId 필드 1개로 시작)+NumLink D1 26% 기준선 KPI.',
    lastUpdate: '6/13 토요일 리서치(토요일·D+20·美 퍼즐 IAP $4.6B +31.4%·캐주얼 D1 26~30% 하락 리텐션 시대·hololive Dreams 8/31 54멤버 150곡·Beatstar RPD $1.41 신규): **🎮 P2 MeowBeat "고양이=곡 해금 단위" 1:1 매핑 GDD 반영(manifest.json catId 필드 1개 추가로 시작하는 저비용 변경·곡 해금→고양이 수집→재방문 루프)**. P0 커밋·UMP 선행. Sources: Sensor Tower·GameDev Reports AppMagic 5월·GameAnalytics 2026·hololive 공식·Water & Music Beatstar.',
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
    taskSummary: '**🚨 신규 1순위(스토어 컴플라이언스 데드라인)**: **Google Play 타겟 API 36(Android 16) 의무화 — 2026-08-31부터** 신규 앱·업데이트 필수(미만 타겟은 신규 기기 비노출). **🚨 신규 2순위(UMP 긴급도 재정의)**: UMP/CMP는 **2024-01-16부터 이미 시행 중인 요건** — 미적용 출시 시 EEA/UK 트래픽 Limited Ads 강제·eCPM 급락. **MeowBeat는 출시 순간부터 미준수가 되므로 "나중에" 항목이 아님**(GMA 내장 ConsentInformation.Update→LoadAndShowConsentFormIfRequired로 구현). **🆕 신규 3순위(엔진 패치)**: 6.3 LTS 최신 **6000.3.16f1**(5월 하순) — 보안 CVE 3건 수정 포함·한가한 시점 업데이트 권장. **코드 실측**: NumLink 미커밋 14파일 +438/-2563·MeowBeat 21파일 +1190/-1089(AndroidResolverDependencies.xml 95줄 — UMP 작업 시 동반 정리). **메시지**: UMP+targetSdk 36 묶음 처리로 컴플라이언스 한 번에 완결.',
    lastUpdate: '6/13 토요일 리서치(토요일·🚨 Play 타겟 API 36 의무화 2026-08-31 확정·UMP/CMP 2024-01-16부터 기시행 Limited Ads 제재·Unity 6000.3.16f1 보안 CVE 3건 수정 신규): **💻 P0 보강 — UMP 구현을 targetSdk 36 상향과 묶어 사용자 세션에서 스토어 컴플라이언스 일괄 완결·6000.3.16f1 에디터 업데이트는 한가한 시점**. Sources: Play Console Help·Android Developers·AdMob CMP 요건·GMA Unity GDPR·Unity 6000.3.16f1 릴리스 노트.',
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
    taskSummary: '**✅ MeowBeat 검증 3종 ALL PASS(6/13 재실행)**: unity_validate 0err(5.1s)·qa_static 0err·run_regression 2/2·manifest 10곡-오디오 1:1 매칭·전 곡 노트 시간순 정렬. **🚨 오늘의 핵심 발견(검증 시스템 두 번째 구멍·HIGH)**: known_bugs.json의 **RT_SIZE_ZERO detector가 "scene_analyzer.calc_size"를 참조하는데 scene_analyzer 모듈이 Tools/에 미배치** — 탐지 경로 불완전으로 RectTransform width=0 버그가 회귀해도 조용히 누락될 위험. 6/12 픽스처 33%에 이은 2차 의심. **🚨 부수(MEDIUM)**: qa_static에 노트 타이밍 순서 검증 부재(현재 0위반이나 수동 추가 시 무방비)·check_scene_buttons() unmapped detector. **메시지**: scene_analyzer 인라인화+픽스처 2→6을 묶어 구멍 2개 동시 해소 — 차기 승인 불필요 실행 큐 1순위.',
    lastUpdate: '6/13 토요일 리서치(토요일·✅ 검증 3종 ALL PASS·🚨 scene_analyzer 미배치로 RT_SIZE_ZERO 탐지 경로 불완전 HIGH·노트 타이밍 순서 검증 부재 MEDIUM·NumLink Tools 미배치 변화 없음): **🔧 P1[차기 실행 큐 1순위] calc_size 로직 unity_validate.py 인라인화+회귀 픽스처 2→6 확충 통합(검증 구멍 2개 동시 해소)+check_note_timing_order() 추가 검토**. Sources: 검증 3종 실행 실측·known_bugs.json/unity_validate.py 코드 분석·manifest 정합성 검사.',
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
    taskSummary: '**📦 신규 1순위(ASO 대전환)**: 구글 I/O 2026에서 **Gemini가 플레이 검색을 키워드 매칭→의도 이해로 전환** — "Ask Play" 챗봇·롱테일 자연어 문장 유리·Grow 페이지 원클릭 커스텀 리스팅+CSV 다국어 자동 현지화. **📦 신규 2순위(Play Shorts)**: **스토어 안에 틱톡식 세로영상 발견 피드 신설**(美 시범) — 미출시 게임은 9:16 클립 자산 선확보 시 확대 즉시 대응. **📦 신규 3순위(숏폼 CPI)**: 퍼즐 CPI iOS $3.00/AOS $2.00·**틱톡이 메타보다 15~25% 저렴**(CPM ~$3.50)·단 ROAS 메타 4.2x 우위 — "설치는 틱톡·과금은 메타". **적용 메시지**: 스토어 문구 롱테일 자연어 표준("숫자 이어 푸는 두뇌 퍼즐"·"고양이와 리듬 타는 게임")+9:16 세로 클립 제작 표준.',
    lastUpdate: '6/13 토요일 리서치(토요일·구글 I/O 2026 Gemini Ask Play 의도 기반 검색·Play Shorts 세로영상 피드 美 시범·퍼즐 CPI iOS $3/AOS $2·틱톡 메타 대비 15~25% 저렴·ROAS 메타 4.2x 신규): **📦 P2 스토어 문구 롱테일 자연어 문장 표준 확정+게임플레이 클립 9:16 세로 규격 제작 표준(Play Shorts·틱톡·릴스·쇼츠 1소스 멀티유즈)**. P0 커밋·UMP 선행. Sources: Android Developers Blog I/O 2026·9to5Google·ASO World·Game Growth Advisor CPI 2026.',
    priority: 'high',
    energy: 79,
    characterKey: 'pearl',
  },
  {
    id: 'devops',
    name: 'DevOps',
    role: 'CI/CD (GitHub Actions) / 스토어 제출 / Git 관리',
    status: 'syncing',
    zone: 'briefing-board',
    taskSummary: '**✅ 실행 완료(16일 만의 첫 실행·6/13)**: **dependabot actions 메이저 5건(#13~17) squash 머지** — upload-pages-artifact v4·setup-node v6·checkout v6·configure-pages v6·deploy-pages v5. 5건 전부 mergeable clean 사전 확인·충돌 0·러너 마이그레이션 기한(6/15) 이틀 전 마지막 평일 타이밍. **CI 현황**: Pages 최근 5런 전부 success — 오늘 저널 푸시가 새 액션 버전 첫 배포 케이스. **잔여**: npm 10건은 배포 안정 확인 후 단계 머지. **🆕 웹(재적체 방지)**: **dependabot auto-merge** — fetch-metadata로 update-type 판별→patch 한정 자동 머지(공급망 공격 대비 minor/major 수동 유지)·필수 사전 설정 2가지(Actions PR 승인 허용+status check 필수). **메시지**: auto-merge(patch 한정)를 차기 승인 불필요 실행 큐에 등록.',
    lastUpdate: '6/13 토요일 리서치(토요일·✅ actions 메이저 5건 머지 완료 — 16일 만의 첫 실행·Pages 5런 연속 success·dependabot auto-merge patch 한정 구성법 신규): **🛡 [완료] #13~17 squash 머지+오늘 푸시로 새 액션 버전 배포 검증** + **P2 auto-merge(patch 한정) 워크플로 도입 — npm patch성 PR 재적체 자동 해소**. Sources: GitHub Docs Automating Dependabot·gh pr merge 실행 실측.',
    priority: 'high',
    energy: 74,
    characterKey: 'moon',
  },
  {
    id: 'art-director',
    name: 'Art Director',
    role: '에셋 방향 / 스프라이트 스펙 / 리디자인 가이드',
    status: 'researching',
    zone: 'research-lab',
    taskSummary: '**🎨 신규 1순위(판정 VFX 3원칙 — 오늘 심층)**: ① **등급 차등** — Perfect/Good 시각 분리 없으면 숙련 동기 소멸(색·스케일 분리) ② **반투명 보호** — DJMAX 히트 이펙트 알파 처리로 후속 노트 시인성 확보(Hard 고밀도에서 결정적) ③ **무음 원칙** — beatmania IIDX 입력음이 원곡 훼손한 실패 사례·VFX는 toneless. **보조**: Arcaea 판정선 이중 대비(어두운 보라+밝은 마젠타)·노트 진입은 페이드보다 팝업. **에셋 실측**: **MeowBeat 4/12 이후 전체 커밋 0건 — 2개월 프로젝트 전체 정체**(에셋만이 아님). **연결 적용**: 판정 VFX 스펙 확정+**고양이 발바닥 모양 히트 이펙트**로 마스코트 정체성 연결 — 스프라이트 1~2장+파티클로 시작하는 재시동 진입점.',
    lastUpdate: '6/13 토요일 리서치(토요일·판정 VFX 3원칙 등급 차등·DJMAX 반투명·beatmania 무음 실패 사례·Arcaea 판정선 이중 대비·MeowBeat 전체 커밋 2개월 0건 재확인 신규): **🎨 P2 MeowBeat 판정 VFX 스펙 확정을 재시동 작업으로(Perfect/Good/Miss 색·스케일 차등+알파 50% 이하 반투명+무음+고양이 발바닥 히트 이펙트)**. P0 커밋·UMP 선행. Sources: Procyon 리듬게임 피드백·exceed7 노트차팅·Arcaea TV Tropes·Sekaipedia.',
    priority: 'high',
    energy: 77,
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
  '✅ [16일 만의 첫 실행 — dependabot actions 5건 머지 완료] 6/12 결정("승인 불필요 영역 실행")을 6/13 회의가 직접 이행: #13 upload-pages-artifact v4·#14 setup-node v6·#15 checkout v6·#16 configure-pages v6·#17 deploy-pages v5 squash 머지. 5건 전부 mergeable clean 사전 확인·충돌 0·러너 마이그레이션 기한(6/15) 이틀 전 마지막 평일 타이밍. 오늘 저널 푸시로 새 액션 버전 배포 성공까지 검증',
  '🎯 [다만 게임 레포는 오늘도 0커밋] NumLink 미커밋 36·MeowBeat 37 동결 그대로·P0 3종(GMA 3커밋·UMP·NumLink Tools)은 사용자 세션 위임 유지. 6/12 액션아이템 4건 중 1건 완료·3건 미완 — 회의는 승인 불필요 영역에서만 실행 가능함을 재확인',
  '🚨 P0 [위임 유지+긴급도 재정의] MeowBeat 복붙 3커밋+UMP+targetSdk 36 묶음 — UMP는 미래 데드라인이 아니라 **2024-01-16부터 이미 시행 중인 요건**(미적용 출시 시 EEA/UK Limited Ads 강제·eCPM 급락). 타겟 API 36 의무화(2026-08-31)와 묶어 사용자 세션에서 스토어 컴플라이언스 일괄 완결: ① 6/11 복붙 3커밋 ② ConsentInformation.Update→LoadAndShowConsentFormIfRequired ③ Target API 36 상향+GMA/EDM4U 호환 확인',
  '🔧 P1 [승인 불필요·차기 실행 큐 1순위] MeowBeat scene_analyzer 인라인화+회귀 픽스처 2→6 확충 통합 — 검증 시스템 구멍 2개 동시 해소: ① RT_SIZE_ZERO detector가 참조하는 scene_analyzer 모듈 미배치(HIGH) → calc_size 로직 unity_validate.py 인라인화 ② error 등급 YAML_DUPLICATE_FILE_ID·MANIFEST_MISSING_AUDIO 재현 미니씬 추가(이월). 부수: check_note_timing_order() 추가 검토(MEDIUM)',
  '🔧 P1 [이월] NumLink Tools 3종 이식+고아 Editor.meta·빈 AutoQATests 정리 — 회귀탐지 0→가동. 게임 레포 커밋 필요라 사용자 세션 권장',
  '🎮📦🎨🛡 P2 [신규 적재 — 모두 P0 후]: Game Designer — MeowBeat manifest catId 필드로 "고양이=곡 해금 단위" 1:1 매핑 GDD 반영(Beatstar RPD $1.41·hololive 150곡 공식)+NumLink D1 26% 기준선 KPI. Art Director — 판정 VFX 스펙 확정(등급 차등·알파 50% 반투명·무음·고양이 발바닥 이펙트)을 2개월 정체 재시동 진입점으로. Content Writer — 스토어 문구 롱테일 자연어 표준+9:16 세로 클립 제작 표준(Gemini Ask Play·Play Shorts 대응). DevOps — dependabot auto-merge(patch 한정) 도입',
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
