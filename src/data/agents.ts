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
    taskSummary: '**🟢 어제 발견한 갭을 오늘 닫은 날(6/30)**: NumLink 5fcac3a(6/2)·**28일째 미커밋**·36파일·Tools 0개 / MeowBeat 921e0cf(6/21)·**9일째**·status에 **NoteSpawner.cs 없음**(코어 패치 미적용 확정)·dspTime **9일째 RED** / agent-office 279ba87(6/29)·미커밋 1파일·열린 PR 0건·CI 6연속 success. **🔑 오늘의 전진**: 6/29 DevOps 헬스체크 갭을 회의 중 **자율 클로즈**(deploy-pages.yml에 page_url 200 헬스체크 5회 retry 스텝 추가). 자율 칼끝 5일 연속 전진(cancel-in-progress→#110→#116→헬스체크). 그러나 게임측 P0(dspTime)·P1(NumLink 봉인)은 코드가 책상 위에 완성돼 있어도 또 하루 정지. **메타**: 화요일·D+37·자율↔사용자세션 비대칭 5일째.',
    lastUpdate: '6/30 화요일 스탠드업(🟢 어제 발견한 갭을 오늘 닫았다 — 6/29 DevOps가 짚은 배포 후 헬스체크 부재를 회의 중 자율 클로즈[deploy-pages.yml page_url 200 헬스체크 5회 retry 스텝 추가]·자율 칼끝 5일 연속 전진·그러나 Developer·QA가 NoteSpawner.cs 열어보니 6/29 완성한 dspTime 처방이 코드 미반영 9일째 RED·NumLink 28일째 미커밋·자율인프라↔사용자세션 비대칭 선명): **🟢 P2[자율 완료✅] 배포 헬스체크 추가** + **🔴 P0[이월] MeowBeat NoteSpawner.cs:126 dspTime 전환(코드 완성·사용자 세션)** + **🟡 P1[이월] NumLink 봉인 28일째(사용자 세션)**.',
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
    taskSummary: '**🎮 신규(스탬프 카드 메타·리텐션 정량·소셜)**: 클래시오브클랜 2026-03이 만료형 챌린지 폐지→**누적·이월 스탬프 카드**(하루 빠져도 따라잡기)로 전환 — 윈스트릭(손실회피) 보완재로 압박감 완화+재방문 유지. 데일리 로그인 보상 **D30 +19%**·게이미피케이션 **DAU +12.7% YoY**·리더보드 A/B **ARPU +9%**·소셜 연결 유저 이탈 **~50%↓**·배틀패스 **D3~D7 도입 시 D30 +5~10%p**(출시 즉시 도입은 전환율 악화). 리듬 채보 룩어헤드(빈 공간↑=쉬움). **적용**: 두 게임 공통 스탬프 카드 데일리 GDD 추가.',
    lastUpdate: '6/30 화요일 리서치(화요일·D+37·클래시오브클랜 2026-03 스탬프 카드형 데일리 누적·이월 윈스트릭 보완·데일리 로그인 D30 +19%·게이미피케이션 DAU +12.7% YoY·리더보드 A/B ARPU +9%·소셜 연결 이탈 ~50%↓·배틀패스 D3~D7 도입 D30 +5~10%p·리듬 채보 룩어헤드 신규): **🟢 P2 NumLink·MeowBeat 공통 스탬프 카드형 데일리 진행(누적·이월) GDD 추가+배틀패스/시즌패스 D3~D7 해금**. P0 후. Sources: gamegrowthadvisor.com·sqmagazine.co.uk·adjust.com·supersonic.com·supercell.com·mistplay.com·businessofapps.com·rhythm-games.com·arxiv.org/2107.12506.',
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
    taskSummary: '**💻 🔑 dspTime 처방 NoteSpawner.cs 미반영 재확정**: 126행 여전히 elapsedTime += Time.deltaTime·dspTime/PlayScheduled/dspSongStartTime 파일 내 0건·레포 grep 매치는 known_bugs.json·qa_static.py 검증 파일뿐(**실행 코드 0건**). 6/29 완성 처방이 코드에 안 들어감·탐지기만 먼저 들어가 RED 가리킴. **💻 신규(빌드 크기)**: Unity 6.2 IL2CPP 옵션명 변경("Optimize for code size and build time"으로 바이너리·빌드시간↓)+임포트 시 LOD 자동생성. **💻 신규(메모리)**: ASTC 블록레이트(4×4=8bpp·12×12=0.89bpp)+Addressables로 모바일 VRAM **60~80% 절감**·Read/Write Enabled 끄면 중복사본 방지.',
    lastUpdate: '6/30 화요일 리서치(화요일·dspTime 처방 NoteSpawner.cs 미반영 재확정 RED — 126행 여전히 Time.deltaTime·dspTime/PlayScheduled 실행코드 0건·매치는 검증 파일뿐·Unity 6.2 IL2CPP 옵션명 변경 Optimize for code size and build time·ASTC 블록레이트 4×4=8bpp/12×12=0.89bpp+Addressables VRAM 60~80% 절감 신규): **🔴 P0 NoteSpawner.cs:126 dspTime fix 실코드 적용 오늘 최우선(코드 완성·에디터 적용+qa_static.py 0 error VERIFY만 남음)** + **🟢 출시 빌드 IL2CPP code-size+ASTC/Addressables 적용**. Sources: docs.unity3d.com·angry-shark-studio.com·thegamedev.guru·unity.com.',
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
    taskSummary: '**🔑 dspTime P0 detector(6/21) 기준 9일째 RED**: qa_static.py 정확히 **`1 error`**(NoteSpawner.cs:126 elapsedTime += Time.deltaTime 그대로·dspTime/PlayScheduled 0건). Scripts 전체 Time.deltaTime 19건 중 타이밍 P0 대상은 126번 1건(나머지 이펙트/UI 정상). 어제 대비 RED +1·코드측 진척 0. 출시 차단급. **🔍 NumLink 이중 무방비 무변화**: Tools **0개**+[Test]/[UnityTest] 보유 .cs **0개**(.cs 총 177개 중)·검증 커버리지 0%. **✅ 가드는 건강(대조)**: known_bugs 7개·run_regression **2/2 PASS**·agent-office CI 5건 success. **🚨 미해결 P0 1건**.',
    lastUpdate: '6/30 화요일 리서치(화요일·dspTime P0 detector 기준 9일째 RED — qa_static.py 정확히 1 error·NoteSpawner.cs:126 deltaTime 그대로·dspTime/PlayScheduled 0건·Scripts 전체 deltaTime 19건 중 P0는 126번 1건·NumLink Tools 0개+[Test] 보유 .cs 0개/177개 검증 0%·Feedme 가드 건강 run_regression 2/2 PASS·agent-office CI 5건 success): **🔴 P0 NoteSpawner.cs:126 songPosition=(float)(AudioSettings.dspTime - dspSongStartTime)+PlayScheduled 교체 1순위(patch 후 qa_static.py 0 error VERIFY)** + **🟡 NumLink EditMode 테스트 1개로 무방비 탈출**. Sources: qa_static.py·run_regression.py·known_bugs.json·NoteSpawner.cs·gh run 실측.',
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
    taskSummary: '**📦 신규 1순위(푸시 타이밍)**: 푸시 옵트인 유저 리텐션 **2배**(최소 9세션·미옵트인 절반 2세션 후 이탈)·게이밍 옵트인율 **63.5%**(전산업 최저·개선여지 큼)·7단어 이하 메시지 참여 **94%↑**(최적 5단어)·이모지 1~2개 오픈율 91%↑. **📦 신규 2순위(UGC)**: UGC 광고 CTR **4배**·CPC 50%↓·전환 **10배**·제작비 60%↓·UGC 포함 제품페이지 전환 74%↑. **📦 3순위(아이콘·평점)**: 아이콘 A/B 최대 **+30% 전환**·별점 3.6→4.2시 전환 **60%↑**·피처링앱 90%가 4.0+·피처링 노미네이션 출시 6~8주전 제출. **적용**: 첫 클리어/첫 곡 완주 직후 컨텍스트 푸시 옵트인+5단어 카피.',
    lastUpdate: '6/30 화요일 리서치(화요일·푸시 옵트인 유저 리텐션 2배·게이밍 옵트인 63.5% 최저·5단어 메시지 참여 94%↑ 이모지 1~2개 오픈율 91%↑·UGC 광고 CTR 4배 전환 10배 제작비 60%↓·앱 아이콘 A/B +30% 전환 별점 3.6→4.2시 전환 60%↑·피처링 6~8주전 제출 신규): **🟢 P2 NumLink·MeowBeat 출시 빌드에 "온보딩 직후 즉시 푸시" 대신 "첫 클리어/첫 곡 완주 직후 컨텍스트 푸시 옵트인"+5단어 이내 카피(이모지 1~2개)**. Sources: apple.com/newsroom·developer.apple.com·businessofapps.com·contextsdk.com·blog.udonis.co·naavik.co·kirro.io·apptweak.com·mobileaction.co.',
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
    taskSummary: '**🛡 🔑 헬스체크 갭 오늘 자율 클로즈(6/30)**: 6/29 짚은 "배포 후 사이트 200 확인 부재"를 회의 중 닫음 — deploy-pages.yml deploy job에 page_url 200 헬스체크 스텝 추가(**5회 retry·회당 15초·총 75초 전파 지연 견딤**·200이면 통과·5회 실패 시 워크플로 red). GitHub Pages 전파 지연 무성 실패를 처음으로 인지 가능. **🛡 CI/CD 정상**: agent-office CI 8건 전부 success·열린 PR 0건·모든 액션 SHA pin+cache:npm·cancel-in-progress=false(회귀 0)·Dependabot npm/actions 그룹 분리 완료. **🛡 다음 갭**: Dependabot 보안 업데이트 그룹화(applies-to: security-updates)만 미적용(CVE마다 개별 PR).',
    lastUpdate: '6/30 화요일 리서치(화요일·🔑 6/29 헬스체크 갭 오늘 자율 클로즈 — deploy-pages.yml deploy job에 page_url 200 헬스체크 5회 retry 회당 15초 총 75초 전파지연 견딤 5회 실패 시 red 스텝 추가·CI 8건 전부 success 열린 PR 0건·cache:npm 모범구성·Dependabot 보안 그룹화만 미적용 신규): **🟢 P2[자율 완료✅] 배포 헬스체크 스텝 추가**·다음 후보 Dependabot 보안 그룹화(applies-to: security-updates). CI 자체 이상 없음. Sources: oneuptime.com·docs.github.com(caching·dependabot)·iuriio.com.',
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
    taskSummary: '**🎨 신규 1순위(부분 적용 모피즘)**: 2026은 글래스/뉴모피즘을 전면 아닌 토글·슬라이더·카드 등 특정 요소에만 부분 적용하는 절제 — 시니어의 표식. **🎨 신규 2순위(스프링 물리)**: 버튼이 목표 스케일 **1.05~1.10배** 넘었다 되돌아오는 Overshoot→Bounce→Settle(DOTween OutBack)이 무게감↑·선형 트윈보다 압도적. **🎨 3순위(타이밍 표준)**: 버튼 프레스 **120~220ms** ease-out·컬러 300ms·화면 전환 600~800ms. **보조**: WCAG 2.2 대비 4.5:1(일반)·3:1(큰글씨/UI). **적용**: NumLink 버튼 OutBack 탄성 프레스(150ms/220ms)+3테마 대비 검증.',
    lastUpdate: '6/30 화요일 리서치(화요일·2026 부분 적용 모피즘 전면 아닌 토글/카드 특정요소만 시니어 절제·스프링 물리 OutBack 오버슈트 1.05~1.10배→정착 선형트윈보다 압도적·마이크로 피드백 타이밍 버튼 프레스 120~220ms 컬러 300ms 전환 600~800ms·WCAG 2.2 대비 4.5:1/3:1 신규): **🟢 P2 NumLink 셀 연결/완성·레벨 클리어 버튼 DOTween OutBack 탄성 프레스(프레스 150ms·정착 220ms)+3테마 팔레트 대비 4.5:1/3:1 검증(MeowBeat는 메뉴/곡선택 버튼만·리듬 입력 지연 방지)**. AI 슬롭 회피. Sources: timgraf.com·zignuts.com·tecnoghana.com·alightmotionworld.com·gamedeveloper.com·tigerabrodi.blog·corpowid.ai·makethingsaccessible.com.',
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
  '🟢 P2 [자율 완료 ✅·오늘의 전진] agent-office 배포 후 헬스체크 스텝 추가 — 6/29 DevOps가 짚은 "배포 후 사이트 200 확인 부재"를 오늘 회의 중 자율로 닫음. deploy-pages.yml의 deploy job, deploy-pages 액션 직후에 page_url을 5회 retry로 HTTP 200 확인하는 헬스체크 스텝 추가(회당 15초 대기·총 75초 전파 지연 견딤·200이면 통과·5회 실패 시 워크플로 red). GitHub Pages 전파 지연으로 인한 무성 실패를 처음으로 인지 가능. 6/26 cancel-in-progress→6/27 #110→6/29 #116→6/30 헬스체크로 자율 칼끝 5일 연속 전진. 다음 자율 후보: Dependabot 보안 업데이트 그룹화(applies-to: security-updates)',
  '🔴 P0 [이월·9일째 RED·처방 완성·게임 코드·사용자 세션] MeowBeat NoteSpawner.cs:126 dspTime 전환 — 코드는 책상 위에 있는데 또 하루 정지. Developer·QA가 각각 NoteSpawner.cs를 열어 6/29 완성한 처방이 코드에 미반영임을 재확정(126행 elapsedTime += Time.deltaTime 그대로·dspTime/PlayScheduled 실행코드 0건·매치는 known_bugs.json/qa_static.py 탐지기 파일뿐·qa_static.py 정확히 `1 error`·detector 기준 9일째 RED). 적용 코드: ① 필드 dspSongStartTime(double)+musicSource(AudioSource) → ② 곡 시작 시 musicSource.PlayScheduled(AudioSettings.dspTime + 0.1)로 오디오 시작을 DSP 타임라인 고정(Play() 대신) → ③ 126행을 elapsedTime = (float)(AudioSettings.dspTime - dspSongStartTime) 절대차분으로 교체(+= deltaTime 제거). Unity 에디터 적용+qa_static.py 0 error+run_regression 통과 VERIFY만 남음. EditMode 테스트로 회귀 방어 동반 권장',
  '🟡 P1 [이월·28일 미커밋·사용자 세션] NumLink .gitignore 정비 + 노이즈 분리 커밋 + EditMode 테스트 1개로 이중 무방비 탈출 — 28일 미커밋 종료. 36파일의 실체는 폰트 SDF .asset 재import+_Recovery 깨진 씬+.omc 캐시 "노이즈"가 다수(진짜 소스 변경 거의 없음). ① .gitignore에 .omc/·Screenshots/·_Recovery/ 추가(Layer Lab 스킨은 트래킹) → ② 폰트 asset 분리 커밋(chore: 폰트 SDF 갱신)+Layer Lab 작업물 분리 커밋(feat: Layer Lab UI 스킨)으로 작업트리 0파일 청산 → ③ Assets/Tests에 NumLink.Domain.Tests.asmdef+[Test] RED 테스트 1개 추가해 Tools 0개·테스트 0개 이중 무방비 탈출. 단 AutoGenTests 4파일 삭제 확정 여부 및 폰트/Layer Lab 커밋은 사용자 확인 선행(사용자 작업물이라 자율 커밋 보류)',
  '🟢 P2 [신규 적재 — 모두 P0/P1 후·번역비 0/추가 에셋 0 우선]: Game Designer — NumLink·MeowBeat 공통 메타레이어로 "스탬프 카드형 데일리 진행"(누적·이월·하루 빠져도 따라잡기·클래시오브클랜 2026-03 방식·윈스트릭 보완) GDD 추가+배틀패스/시즌패스는 출시 즉시 아닌 D3~D7 해금(즉시 도입은 전환율 악화). Content Writer — 출시 빌드에 "온보딩 직후 즉시 푸시" 대신 "첫 클리어/첫 곡 완주 직후 컨텍스트 푸시 옵트인"+5단어 이내 카피(이모지 1~2개·옵트인 유저 리텐션 2배·게이밍 옵트인 63.5% 최저). Art Director — NumLink 셀 연결/완성·레벨 클리어 버튼에 DOTween OutBack 스프링 탄성 프레스(프레스 150ms·정착 220ms)+3테마 팔레트 대비 4.5:1/3:1 검증(MeowBeat는 메뉴/곡선택 버튼만). Developer — 출시 빌드에 Unity 6.2 IL2CPP "Optimize for code size and build time"+ASTC 블록레이트+Addressables로 VRAM 60~80% 절감 적용',
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
