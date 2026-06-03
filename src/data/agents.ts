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
    taskSummary: '**🚨 동반 정지**: `git log --since="1 day ago"` = NumLink·MeowBeat 모두 어제·오늘 신규 커밋 0건 — 6/3 NumLink 9커밋 폭발과 정반대로 양쪽 실행 흐름 멈춤. **🔥 백업 수치 정정(재검증)**: 6/3의 "meowbeat/main ahead 37·52일"은 부정확 — 실측은 **양 레포 마지막 원격 푸시 04-07·오늘까지 58일 미백업**·MeowBeat HEAD(657032c)는 6커밋 앞선 미푸시·NumLink는 현 브랜치 미푸시+origin/main 03-28에 머묾(111커밋 뒤). **🚨 MeowBeat 백업 P0 = 7일째→오늘 8일째 이월**. **❌ 이월/후퇴**: NumLink AutoGenTests 삭제 유지(안전망 후퇴)·Android 16KB 미착수·9-slice 프레스드 미완. **⚠️ 리스크**: .meta 삭제+untracked 신규 에셋(Layer Lab·feedIcon_0327) 미커밋=유실 위험. **agent-office** 6/3 저널 origin 동기·정상. 오늘 = 목요일·1개월 임계 D+11·손이 멈춘 지금이 미뤄둔 P0를 인프라로 못 박을 적기.',
    lastUpdate: '6/4 목요일 스탠드업(🚨 양 프로젝트 동반 정지·어제·오늘 커밋 0건·🔥 백업 수치 실측 정정 "52일·ahead 37"→마지막 원격 푸시 04-07·58일 미백업·MeowBeat 로컬 6커밋 ahead·NumLink origin/main 03-28에 머묾·MeowBeat 백업 P0 8일째·❌ NumLink 안전망 미복구): **🚨 P0 MeowBeat 백업**(untracked 정리→커밋→현 브랜치 push 58일치 백업+upstream 설정·사용자 승인 후) + **🚨 P0 NumLink 안전망 복구**(템플릿 Tools 3종 복사·baseline 0-error) + **🔧 P1 MeowBeat 방치 죄책감 루프** + **🎨 P1 MeowBeat 먹이 UI diegetic+햅틱** + **🔍 P2 첫3초 후크 UGC·PrimeTween 시범·game-ci CI**. 메타: 6/3 9커밋 vs 6/4 0커밋·백업 8일째 0 — 실행 편중이 동반 정지로 전이.',
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
    taskSummary: '**🚀 시장 신규 1순위**: 2026 캐주얼 현실 리텐션 벤치마크 **D1/D7/D30 = 35/15/5%**·퍼즐은 D7 장르 최상위(14~15%·Maf.ad·Sensor Tower·6/3 디커플링/Block Blast와 겹치지 않는 신규 토픽). **🚀 신규 2순위**: 가상펫 시장 **$1.5B(2025)→$5B(2033)**·Finch 90일 234만 다운로드·펫의 협력적·치유적 성격이 경쟁형 리더보드 대비 장기 리텐션 우위(Yu-kai Chou·Zigpoll). **🚀 신규 3순위**: 펫 리텐션 핵심은 "보상 감소"가 아니라 **"방치 죄책감"** — 미접속 시 배고픔/슬픔 비주얼이 D1 복귀 동기·단 "버추얼 펫 트레드밀" 번아웃 주의(영구 손실은 이탈 유발). **적용 메시지**: MeowBeat 고양이를 "보상 통화"가 아닌 "방치 죄책감 트리거"로 재설계 — 미접속 시 상태 단계(만족→보통→배고픔→시무룩) 추가, 리듬 플레이를 다시 기쁘게 하는 수단으로 묶음·단 하루 1회 첫 먹이만 카운트·영구 손실 금지.',
    lastUpdate: '6/4 목요일 리서치(목요일·1개월 임계 D+11·2026 캐주얼 D1/D7/D30 35/15/5% 퍼즐 D7 최상위 14~15%·가상펫 시장 $1.5B→$5B Finch 90일 234만·펫 리텐션 핵심=보상감소 아닌 방치 죄책감 신규): **🔧 P1 MeowBeat 고양이 방치 죄책감 트리거 재설계**(미접속 시 만족→보통→배고픔→시무룩 상태 단계·리듬 플레이를 다시 기쁘게 하는 수단으로 묶음·번아웃 방지로 하루 1회 첫 먹이만 카운트·영구 손실 금지) + **보조 P2 NumLink 연속 클리어 스트릭+별점 누적 연동**(손실 회피 심리). 모두 P0 백업·안전망 선행. Sources: Maf.ad·Stepico/Sensor Tower·Yu-kai Chou·Zigpoll.',
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
    taskSummary: '**🆕 기술 신규 1순위**: **Google Mobile Ads Android SDK 25.0.0/iOS 13.0.0이 2026-02 메이저 출시** — Unity 플러그인 의존성이 GMA Android 24.9.0·iOS 12.14.0으로 상향·모바일 빌드 영향 가능(6/3 Unity 6.3 HTTP/2와 겹치지 않는 신규 토픽). **🚀 신규 2순위**: **PrimeTween(zero-allocation)이 DOTween(애니메이션당 734B·딜레이당 584B 할당) 대비 GC 압력 0** — 모바일 프레임 히칭 방지에 유리·단 DOJump·복잡한 시퀀싱은 DOTween 우위. **⚠️ 코드 맥락**: MeowBeat 미커밋 변경(SongData/GameManager/SongManager/OptionManager)+.meta 3종 삭제는 커밋 전 정합성 검증 필요(QA 정정으로 GUID 미참조 확인됨)·NumLink AutoGenTests 삭제는 테스트 코드 제거로 기술부채. **메시지**: GMA SDK 25.0.0 메이저는 다음 빌드 사이클 호환성 확인 후 보류·PrimeTween은 핫패스 1곳 시범 교체로 효과 측정.',
    lastUpdate: '6/4 목요일 리서치(목요일·🆕 Google Mobile Ads Android SDK 25.0.0/iOS 13.0.0 2026-02 메이저·Unity 플러그인 의존성 GMA Android 24.9.0·iOS 12.14.0 상향·PrimeTween zero-alloc vs DOTween 애니메이션당 734B GC 압력 0 신규): **🔍 P2 MeowBeat DOTween 핫패스 1곳(노트 애니메이션 등) PrimeTween 시범 교체**(zero-allocation 효과 정적 프로파일 측정) + **GMA SDK 25.0.0 메이저 버전업은 호환성 확인 후 적용 보류**(섣부른 메이저 업데이트 리스크 회피). Sources: GMA SDK 릴리스 노트·PrimeTween/DOTween 벤치마크.',
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
    taskSummary: '**✅ 확정**: MeowBeat `qa_static.py` 0 error/0 warning·manifest 무결(곡10·누락 오디오0)·미해결 버그 0건. **🆕 중요 정정(리스크 하향)**: MeowBeat 삭제된 `.meta` 3종(Input/Item/SaveLoad)의 GUID는 프로젝트 어디서도 참조되지 않음 → **참조깨짐 리스크 없음(빈 폴더만 삭제·6/3엔 GUID 위험으로 봤으나 Grep 전수 확인 결과 무참조)**·단 untracked .meta(AutoQATests·_Recovery·bak_btn) 다수는 gitignore 정리 권장. **🚨 최대 리스크 = NumLink 안전망 완전 공백**: `Assets/Tests`·`Assets/AutoQATests`에 테스트 `.cs` **0개**(빈 `Editor.meta`만 잔존)·AutoGenTests.cs/.asmdef+.meta git deleted = **테스트 커버리지 전량 손실**·검증 도구(known_bugs.json·qa_static.py·unity_validate.py)가 NumLink엔 **처음부터 부재** = 회귀탐지 자체 불가.',
    lastUpdate: '6/4 목요일 리서치(목요일·✅ 미해결 버그 0건·MeowBeat qa_static 0/0·곡10 오디오누락0 무결·🆕 정정 MeowBeat .meta 3종 GUID 어디서도 미참조 참조깨짐 리스크 없음·🚨 NumLink 검증툴 3종 처음부터 부재+테스트 .cs 0개 회귀탐지 불가): **🚨 P0 NumLink 안전망 복구 — `C:\\Unity\\_ProjectTemplate\\Tools\\`(또는 MeowBeat Tools)에서 unity_validate.py·qa_static.py·known_bugs.json NumLink Tools/로 복사+씬 경로 상수 갱신**(baseline 0-error) + **MeowBeat untracked .meta gitignore 정리 권장**. Sources: qa_static.py 실행·Grep GUID 전수·git status 실측.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **캐주얼 광고 첫 3초가 시청지속 71%를 좌우**·강한 후크 시 완주율 1.4배·**오프닝 후크/AI 보이스오버 교체만으로 설치율 +30%·CTR +25%**(전체 게임플레이 변경보다 ROAS 영향 큼·6/3 애플 CPP와 겹치지 않는 신규 토픽·megadigital/segwise). **📦 신규 2순위**: **틱톡 게임 CPI $0.50~1.80·인피드 전환율 0.8~2.5%·UGC 활용 시 전환비용 40~60% 절감**·2026 D7 리텐션 틱톡108>메타94. **📦 신규 3순위**: **우리 두 게임 모두 마케팅 전용 콘텐츠 디렉터리 부재**(Store 폴더는 게임 내 상점 에셋)·광고용 후크 영상 0건. **적용 메시지**: NumLink·MeowBeat 각 "첫 3초 후크" 세로 15초 UGC 3종(후크만 차이) 틱톡 인피드 A/B — NumLink 좌절형·MeowBeat 고양이 클로즈업+비트싱크·IPM 2% 도달 시 메인 채택.',
    lastUpdate: '6/4 목요일 리서치(목요일·캐주얼 광고 첫 3초 시청지속 71% 좌우·후크 교체만으로 설치율 +30% CTR +25%·틱톡 게임 CPI $0.50~1.80 인피드 전환율 0.8~2.5% UGC 전환비용 40~60%↓·D7 틱톡108>메타94·우리 광고 후크 영상 0건 신규): **🔍 P2 NumLink·MeowBeat 각 "첫 3초 후크" 세로 15초 UGC 3종 틱톡 A/B**(NumLink 좌절형·MeowBeat 고양이 클로즈업+비트싱크·IPM 2% 도달 시 메인 채택). P0 백업·안전망 선행 후. Sources: megadigital.ai·segwise.ai·digitalapplied·admiral.media.',
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
    taskSummary: '**🛡 CI 상태**: agent-office GitHub Pages 최근 5회 전부 success(33~42초)·`deploy-pages.yml`은 Node22+actions 모두 SHA 핀 적용된 안전한 구성·`weekly-insights.yml`(매주 월 09:00 KST)도 안전. **🚨 구조 공백**: NumLink·MeowBeat 둘 다 `.github/workflows/` **0건** → game-ci 기반 Unity 빌드 자동화 미구축·백업/배포 전적으로 수동(8일째 이월 중인 MeowBeat 백업 P0의 근본 원인). **🆕 신규**: **2026-06-16부터 GitHub Actions가 JS 액션 기본 런타임을 Node24로 강제 전환**·단 agent-office는 SHA 핀+setup-node 22 명시라 영향권 밖. **메시지**: MeowBeat에 game-ci unity-builder 최소 빌드 워크플로 1개를 넣으면 8일째 이월 백업 P0를 수동 의존에서 CI 자동 백업으로 구조적 해소.',
    lastUpdate: '6/4 목요일 리서치(목요일·agent-office Pages 5회 연속 success 33~42초 SHA핀 안전·🚨 NumLink·MeowBeat .github/workflows 0건 빌드·백업 전량 수동·🆕 2026-06-16 GitHub Actions JS 액션 Node24 강제전환 agent-office는 영향권 밖): **🔍 P2 MeowBeat game-ci unity-builder 최소 빌드 워크플로 1개 도입**(8일째 이월 백업 P0를 수동 의존→CI 자동 백업으로 구조적 해소·반복되는 백업 누락의 근본 처방). P0 백업·안전망 선행 후. Sources: game-ci/unity-builder 릴리스·github.blog Node20 deprecation·runner-images.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **2026 펫 꾸미기 UI는 손그림 일러스트·3D 인터랙션으로 스톡 이미지 대체**(muz.li·6/3 Neo-Skeuomorphism/APCA와 겹치지 않는 신규 토픽). **🎨 신규 2순위**: **juicy 햅틱 = 보상·레벨업에 10~20ms 짧은 클릭 진동·"less is more"**(과한 진동은 numbing·developer.android.com 햅틱 원칙). **🎨 신규 3순위**: **diegetic UI 부상 — HUD를 게임 월드 안 오브젝트로 녹여 몰입 강화**(wayline.io). **연결 적용**: MeowBeat 고양이 농장 먹이 UI를 diegetic으로 — feedIcon을 별도 버튼이 아니라 고양이 옆 "밥그릇 오브젝트"로 월드 배치·먹이 줄 때 10~20ms 짧은 햅틱 1회+손그림 톤 흡족 이펙트로 juicy 피드백·NumLink는 숫자 연결 성공 시에만 짧은 클릭 햅틱으로 타격감만 보강.',
    lastUpdate: '6/4 목요일 리서치(목요일·2026 펫 꾸미기 UI 손그림·3D 인터랙션 스톡 대체·juicy 햅틱 10~20ms 짧은 클릭 진동 "less is more"·diegetic UI HUD를 월드 오브젝트로 녹여 몰입 신규): **🎨 P1 MeowBeat 먹이 UI diegetic 적용**(feedIcon을 고양이 옆 밥그릇 오브젝트로 월드 배치·먹이 시 10~20ms 햅틱 1회+손그림 흡족 이펙트로 juicy) + **NumLink 숫자 연결 성공 시 짧은 클릭 햅틱**(과한 진동 없이 타격감만). P1 방치 죄책감 루프와 한 작업으로 묶음. Sources: muz.li·developer.android.com/haptics·wayline.io diegetic.',
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
  '🚨 [동반 정지] 6/3 NumLink 9커밋 폭발과 정반대로 NumLink·MeowBeat 둘 다 어제·오늘 신규 커밋 0건 — 양쪽 실행 흐름이 완전히 멈췄다. **"실행 편중"이 "동반 정지"로 전이**·오늘 본질은 손이 멈춘 김에 미뤄둔 P0 두 건(MeowBeat 백업·NumLink 안전망)을 인프라로 못 박는 것',
  '🔥 [백업 수치 실측 정정] 6/3의 "meowbeat/main ahead 37·52일 단절"은 재검증에서 부정확으로 판명 — 실제는 **양 레포 마지막 원격 푸시 04-07·오늘(6/4)까지 58일 미백업**·MeowBeat HEAD는 6커밋 앞선 미푸시·NumLink origin/main은 03-28에 머묾(111커밋 뒤). ✅ QA 유지: 미해결 버그 0건·MeowBeat qa_static 0/0·곡10 오디오누락0 무결',
  '🚨 P0 [MeowBeat 백업 — 8일째 이월·실 단절 58일·Orchestrator·DevOps·Developer·QA 일치·사용자 승인 후]: ① untracked 에셋(feedIcon_0327·AutoQATests) 의도 확인 후 정리/add ② 미커밋 변경(SongData/GameManager/SongManager/OptionManager·.meta 삭제분 — QA 전수 결과 GUID 미참조 확인) 커밋 ③ 현 브랜치 push로 58일치 백업+upstream 영구 설정. **(새벽 실행이라 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [NumLink 회귀 안전망 복구 — 검증툴 3종 부재+테스트 .cs 0개·QA·Orchestrator 일치]: NumLink는 Tests/AutoQATests에 테스트 .cs **0개**(빈 Editor.meta만 잔존)+검증 도구(unity_validate.py·qa_static.py·known_bugs.json)가 **처음부터 부재** = 회귀탐지 자체 불가. `C:\\Unity\\_ProjectTemplate\\Tools\\`(또는 MeowBeat Tools)에서 3종을 NumLink `Tools/`로 즉시 복사+씬 경로 상수 갱신해 baseline 0-error 확보',
  '🔧 P1 [MeowBeat 방치 죄책감 리텐션 루프 — Game Designer]: 미접속 시 고양이 상태 단계(만족→보통→배고픔→시무룩) 비주얼 추가, 리듬 플레이를 "고양이를 다시 기쁘게 하는 수단"으로 위치시켜 케어 루프+리듬 코어를 한 동선으로. 번아웃 방지 = 하루 1회 첫 먹이만 의미 카운트·방치 패널티는 기분 저하+짧은 위로 연출까지·영구 손실(곡 잠금 박탈) 금지. 가상펫 리텐션 핵심이 "방치 죄책감"이라는 데이터 근거',
  '🎨 P1 [MeowBeat 먹이 UI diegetic + juicy 햅틱 — Art Director]: feedIcon을 별도 버튼이 아니라 고양이 옆 "밥그릇 오브젝트"로 월드에 배치(diegetic UI)·먹이 줄 때 10~20ms 짧은 햅틱 1회+손그림 톤 흡족 이펙트로 juicy 피드백. NumLink는 숫자 연결 성공 시에만 짧은 클릭 햅틱으로 과한 진동 없이 타격감만 보강("less is more"). P1 방치 죄책감 루프와 한 작업으로 묶음',
  '🔍 P2 [후크 광고·기술 시범 — 모두 P0 백업·안전망 후 착수]: Content Writer — NumLink·MeowBeat 각 "첫 3초 후크" 세로 15초 UGC 3종 틱톡 A/B(NumLink 좌절형·MeowBeat 고양이 클로즈업+비트싱크·IPM 2% 도달 시 메인 채택·후크 영상 0건 상태). Developer — MeowBeat DOTween 핫패스 1곳 PrimeTween 시범 교체(GMA SDK 25.0.0 메이저는 호환성 확인 후 보류). DevOps — MeowBeat game-ci unity-builder 최소 빌드 워크플로 도입(백업 P0 구조적 해소). **모두 P0 후 착수**',
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
