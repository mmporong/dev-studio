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
    taskSummary: '**🚨 핵심 = 5/31 P0 3건 전부 미실행(0/3)**: 어제 회의가 "push -u 1줄이 회의 가치 결정"이라 못박았으나 ① NumLink `feature/ugui-layerlab` upstream 여전 미설정(`## feature/ugui-layerlab`만·origin 없음) ② MeowBeat `feature/song-ownership-migration` upstream 여전 미설정 ③ AutoGenTests 4파일 git status 여전 deleted = **3건 전부 0/3 실행**. **✅ 단 긍정 신호**: NumLink 5/31 UGUI MS4(b80ab1d) 커밋 = 마지막 게임코드 5/31·**단절 1일·코드 작성은 계속됨**(흐름 유지). **🆕 메타 전환**: NumLink는 코드를 계속 쌓는데 백업 1줄이 6일째 미실행 = 문제가 "백업 0"에서 "백업 0 누적 심화"로 — 어제보다 커밋 더 쌓여 유실 시 손실 규모만 증가. **MeowBeat**: 4/12 마지막→오늘 6/1 = **50일째 단절 돌파**·미커밋 37파일·곡 10개 MVP 컷라인 유지. **NumLink** 미커밋 33파일. **agent-office** d9679a6 origin/main 동기·DailyStandup Running. 오늘 = 월요일·1개월 임계 D+8·실행 1줄이 본질.',
    lastUpdate: '6/1 월요일 스탠드업(🚨 5/31 P0 3건 전부 0/3 미실행·NumLink/MeowBeat upstream 여전 미설정·AutoGenTests 여전 deleted·✅ 단 NumLink 5/31 MS4 커밋으로 코드 흐름 유지·🆕 문제가 백업 0→백업 0 누적 심화·MeowBeat 50일 단절): **🚨 P0 MeowBeat push -u origin feature/song-ownership-migration**(50일·백업 0·5분·6일째 이월) + **🚨 P0 NumLink push -u origin feature/ugui-layerlab**(코드 계속 쌓이는데 백업 0 누적) + **🚨 P0 NumLink AutoGenTests git restore+Tools 부트스트랩**(회귀 안전망 0·6회째 이월) + **🔧 P1 Unity 6.5 GetInstanceID 전수 검색 착수** + **🔍 P2 앨범 컬렉션·스크린샷 캡션·Bento Grid**. 메타: 결정 50회 누적·5분짜리 백업 1줄 실행만이 오늘 유일한 가치(게임 레포 push는 사용자 승인 후).',
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
    taskSummary: '**🚀 시장 신규 1순위**: **모바일 IAP 수익의 84%가 라이브옵스(LiveOps) 운영 타이틀에서 발생**·캐주얼 퍼즐 상위작은 월 80~100개 이벤트 레이어 운영 = 단발 출시 후 방치 모델은 수익 구조적 한계. **🚀 신규 2순위**: **앨범 컬렉션 이벤트가 캐주얼 게임 참여율 1위(66%)** — 수집 욕구가 세션 반복을 유도하는 가장 강한 메커닉. **🚀 신규 3순위**: **앨범+배틀패스 조합이 매출의 10~40% 기여**·D7 리텐션 하락 추세 속 대체 수익 레버로 급부상(어제 윈스트릭과 겹치지 않는 신규 토픽). **GDD 통합 메시지**: MeowBeat 고양이 캐릭터 카드 수집 앨범(농장 루프와 자연 결합)·NumLink 챕터별 스탬프/도장 앨범(클리어 시 수집)으로 월 1~2회 시즌 앨범 기획 = 라이브옵스 수익 구조 도입.',
    lastUpdate: '6/1 월요일 리서치(월요일·1개월 임계 D+8·라이브옵스 IAP 84%·앨범 컬렉션 참여율 1위 66%·앨범+배틀패스 매출 10~40% 신규): **🔥 P2 "앨범 컬렉션" 시즌 이벤트 메커닉 양 프로젝트 백로그 등재 검토**(MeowBeat 고양이 카드 수집·NumLink 챕터 스탬프 앨범·월 1~2회 시즌 기획) + **P2 라이브옵스 수익 구조 설계 메모** + **P2 게임 레포 백업·회귀 안전망 확보 후 착수**. Sources: 라이브옵스 IAP 84% 리포트·캐주얼 이벤트 참여율 벤치마크.',
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
    taskSummary: '**🚀 기술 신규 1순위**: **Unity 6.4(2026-03)에 Project Auditor가 에디터 기본 탑재** — 성능·코드·세팅 정적 분석이 별도 패키지 설치 없이 내장 = NumLink가 Tools/qa_static.py 외에 엔진 내장 정적 분석으로 회귀 안전망 보강 가능(QA P0와 시너지). **🚀 신규 2순위**: **Adaptive Performance 기본 프로바이더가 PS4/5·Xbox 콘솔까지 확장**(6.4) = 모바일 외 타깃 대비 기반. **🚀 신규 3순위**: **Unity Hub 독립 CLI 시작속도 50배↑(5s→<100ms)** = CI 빌드 컨테이너 부트 시간 단축 가능성(DevOps 연계). 어제 제외 토픽(6.4 ECS Core·6.5 EntityId·GetInstanceID)과 겹치지 않는 신규 측면. **메시지**: NumLink에 Unity 6.4 내장 Project Auditor 1회 실행해 baseline 리포트 확보 시 Tools 부트스트랩과 회귀 안전망 이중화.',
    lastUpdate: '6/1 월요일 리서치(월요일·Unity 6.4 Project Auditor 에디터 기본 탑재·Adaptive Performance 콘솔 확장·Hub 독립 CLI 시작 50배↑ 신규): **🔧 P2 NumLink에 Unity 6.4 내장 Project Auditor 1회 실행해 성능·코드 baseline 리포트 확보**(Tools 부트스트랩 P0와 병행 시 회귀 안전망 이중화) + **🔧 P1 어제 이월 GetInstanceID 전수 검색 착수**(6.5 EntityId 8바이트 대비) + **P2 Hub CLI CI 부트 단축 검토**. Sources: Unity 6.4 릴리스 노트·Unity Hub 2026-05 업데이트.',
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
    taskSummary: '**🚨 최대 품질 리스크 심화**: NumLink가 자동 검증 인프라(Tools)·테스트 코드(AutoGenTests) 둘 다 없어 회귀 안전망 0인데 **5/31 UGUI MS4 커밋으로 코드는 더 쌓였다 = 검증 없는 대규모 변경이 누적 심화**. **NumLink 테스트**: `C:/Unity/NumLink/Tools` 폴더 여전 부재(6회째 이월)·AutoGenTests 4파일 git status 여전 deleted(브랜치 feature/ugui-layerlab·5/31 P0 미복구). **MeowBeat 버그**: 미해결 5건 변동 없음·가장 심각=**RT_SIZE_ZERO(severity:error)** — VerticalLayoutGroup ChildAlignment+sizeDelta=0으로 RectTransform width/height 0. **🆕 이중 리스크**: 게임 레포 둘 다 백업 0(upstream 미설정)이라 로컬 유실 시 코드+회귀 안전망(Tools·AutoGenTests)이 동시 소실 = 복구 불가.',
    lastUpdate: '6/1 월요일 리서치(월요일·🚨 NumLink 회귀 안전망 0인데 5/31 코드 더 쌓임 = 검증 없는 변경 누적 심화·게임 레포 백업 0이라 유실 시 안전망 동시 소실 이중 리스크): **🚨 P0 NumLink AutoGenTests 4파일 git restore 즉시 복구**(deleted 6일째·파일 4개만 타깃·의도된 삭제 아니면)+**`C:/Unity/_ProjectTemplate/Tools/` 또는 MeowBeat Tools 18개 복사**(unity_validate.py 0 error baseline) + **P1 MeowBeat test_fixtures 점검**. push -u(백업)와 함께 실행해야 안전망 보존. Sources: known_bugs.json·git status·Tools 폴더 실측.',
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
    taskSummary: '**📦 콘텐츠 신규 1순위**: **Apple이 2025년 6월부터 앱스토어 스크린샷 캡션 텍스트를 키워드 메타데이터로 정식 인덱싱** = 스크린샷 위 문구가 검색 색인에 직접 반영·단순 설명형 캡션은 ASO 기회 손실. **📦 신규 2순위**: **풀 로컬라이제이션(메타+스크린샷+키워드 동시) 적용 시 단순 번역 대비 다운로드 2~3배** = 부분 번역으로는 효과 미미·완전 현지화가 임계. **📦 신규 3순위**: **스크린샷 이미지 텍스트 현지화만으로도 비영어권 설치 전환율 평균 +17%** = 적은 비용으로 즉효(어제 검색의도/마이크로 인플루언서와 겹치지 않는 신규 토픽). **적용 메시지**: NumLink/MeowBeat 스크린샷 캡션을 설명형→키워드 의도형("숫자 연결 퍼즐"·"고양이 리듬 게임")으로 재작성·비영어권 1~2개 언어 스크린샷 우선 현지화로 +17% 전환 확보.',
    lastUpdate: '6/1 월요일 리서치(월요일·Apple 스크린샷 캡션 키워드 인덱싱 2025-06~·풀 로컬라이제이션 DL 2~3배·스크린샷 현지화만으로 비영어권 +17% 신규): **P2 NumLink/MeowBeat 앱스토어 스크린샷 캡션 키워드 의도 기반 재작성**(설명형→"숫자 연결 퍼즐"·"고양이 리듬 게임" 키워드 삽입형) + **P2 비영어권 1~2개 언어 스크린샷 텍스트 우선 현지화**(+17% 전환) + **P2 출시 체크리스트에 캡션 리라이트 반영**. Sources: Apple ASO 2025-06 캡션 인덱싱·로컬라이제이션 ROI 벤치마크.',
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
    taskSummary: '**🛡 보안 신규 1순위**: **aquasecurity/trivy-action 75개 태그가 하이재킹됨(2026-03-19·TeamPCP 그룹)** — 버전 태그 사용 시 변조된 액션이 주입돼 CI 시크릿 탈취 가능(어제 Megalodon·actions-cool과 별개 신규 사건). **🛡 신규 2순위**: **GitHub Actions가 호스팅 러너에 L7 이그레스(egress) 방화벽을 네이티브로 도입 예정** = 액션 외부 통신 통제로 공급망 공격 방어 강화·2026 보안 로드맵. **🛡 신규 3순위**: **GameCI unity-license-activate가 2026-05-18 업데이트**. **CI 상태**: NumLink/MeowBeat 여전 `.github/workflows` 부재·**MeowBeat upstream 미설정으로 push 원천 불가(백업 0)**·agent-office deploy-pages.yml은 모든 액션 SHA 핀 고정으로 공급망 안전 유지·미푸시 0.',
    lastUpdate: '6/1 월요일 리서치(월요일·trivy-action 75개 태그 하이재킹 2026-03-19 TeamPCP·GitHub Actions L7 이그레스 방화벽 로드맵·GameCI unity-license-activate 5/18 패치 신규): **🚨 P0 MeowBeat git push -u origin feature/song-ownership-migration**(upstream 미설정·백업 0·유실 최고위험·5분·6일째 이월) + **P0 NumLink feature/ugui-layerlab도 동일 push -u 백업** + **P2 게임 CI 구축 시 액션 SHA 핀 고정 원칙 명문화**(trivy-action 사례가 증명). agent-office는 이미 SHA 핀·배포 정상. Sources: trivy-action 하이재킹(TeamPCP)·GitHub Actions 보안 로드맵·game-ci.',
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
    taskSummary: '**🎨 디자인 신규 1순위**: **Liquid Glass — 글라스모피즘 진화형으로 투명 레이어가 움직임·빛반사에 유동적으로 반응**·2026 주류 부상(Apple UI 방향성과 정합). **🎨 신규 2순위**: **Bento Grid — 비대칭 모듈 카드 레이아웃이 모바일 전면 채택**·정보 밀도를 높이면서도 시각적으로 정돈됨 = 레벨/곡 선택처럼 다정보 화면에 최적. **🎨 신규 3순위**: **Neomorphism 재부상 — 소프트 그림자+하이라이트로 촉각적 버튼감**·캐주얼 게임 UI에 적합(어제 키네틱 타이포·브루탈리즘·더블코딩과 겹치지 않는 신규 토픽). **연결 적용**: NumLink 레벨 선택 화면에 Bento Grid 비대칭 카드(번호·별점·잠금을 크기 다른 타일로)·MeowBeat 곡 선택에 Liquid Glass 카드·AI 전형 디자인(민트+다크) 회피 원칙과 정합.',
    lastUpdate: '6/1 월요일 리서치(월요일·Liquid Glass 글라스모피즘 진화·Bento Grid 비대칭 모듈 카드·Neomorphism 재부상 신규): **🔥 P2 NumLink 레벨 선택 화면 Bento Grid 비대칭 모듈 카드 적용 검토**(레벨 정보 번호·별점·잠금을 크기 다른 비대칭 타일로 배치·가독성+몰입 동시·씬 사전 배치·동적 Instantiate 금지 준수) + **P2 MeowBeat 곡 선택 Liquid Glass 카드 검토** + **P2 AI 전형 디자인 민트+다크 회피 유지**. Sources: 2026 모바일 UI 트렌드(Liquid Glass·Bento Grid·Neomorphism).',
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
  '🚨 [본질] 어제(5/31) 회의가 "이번엔 push -u 1줄이 회의 가치를 결정한다"고 못박았으나 그 1줄조차 미실행: NumLink `feature/ugui-layerlab`·MeowBeat `feature/song-ownership-migration` 둘 다 upstream 여전 미설정·AutoGenTests 4파일 여전 deleted = **5/31 P0 3건 전부 0/3**. 결정은 50회 누적됐으나 5분짜리 백업 1줄의 실행이 안 되는 게 본질 — **오늘은 분석을 줄이고 push -u 1줄 실행만이 유일한 가치**',
  '✅ [긍정 신호] NumLink 코드 흐름은 유지: 5/31 UGUI MS4(b80ab1d `feat(ui): MS4 — InGameHUD 컨트롤러 부착`) 커밋으로 단절 1일·코드 작성은 계속됨. 🆕 단 문제가 "백업 0"에서 "백업 0 누적 심화"로 전환 — 코드를 계속 쌓는데 push -u가 6일째 미실행이라 어제보다 커밋이 더 쌓여 유실 시 손실 규모만 커짐',
  '🚨 P0 [MeowBeat git push -u origin feature/song-ownership-migration · 50일 단절·백업 0·5분·6일째 이월]: 4/12 마지막→오늘 6/1 = 50일째 단절·upstream 미설정으로 push 원천 불가·미커밋 37파일이 로컬에만 갇혀 백업 0. 1줄로 upstream 설정+적체 즉시 해소. **(새벽 실행이므로 게임 레포 push는 사용자 승인 후)**',
  '🚨 P0 [NumLink git push -u origin feature/ugui-layerlab · 코드 계속 쌓이는데 백업 0 누적 심화 · 신규 최우선]: 5/31 UGUI MS4까지 코드를 계속 쌓고 있으나 새 브랜치 upstream 미설정+origin 미존재로 push 불가·백업 0. 1줄로 백업 확보. Orchestrator·QA·DevOps 3인 일치. **(사용자 승인 후)**',
  '🚨 P0 [NumLink AutoGenTests 4파일 git restore + Tools 부트스트랩 · 회귀 안전망 0·UGUI 변경 중 · 6회째 이월]: Tools·AutoGenTests 둘 다 없어 회귀 안전망 0인데 5/31 코드는 더 쌓임 = 검증 없는 변경 누적 심화. deleted된 AutoGenTests 4파일 `git restore` 복구(의도된 삭제 아니면)+`C:/Unity/_ProjectTemplate/Tools/`(또는 MeowBeat Tools 18개) 복사해 unity_validate.py 0 error baseline 확보. push -u(백업)와 함께 실행해야 안전망 보존',
  '🔧 P1 [Unity 6.5 대비 GetInstanceID 전수 검색 착수 · 어제 이월]: Unity 6.4 정식 InstanceID→EntityId 전환 시작·6.5 EntityId 4→8바이트 확대. NumLink/MeowBeat `GetInstanceID()` 호출부 전수 검색해 `GetEntityId()` 마이그레이션 대상 목록 작성·int 캐싱/직렬화 코드 있으면 long 전환. 추가로 Unity 6.4 내장 Project Auditor 1회 실행해 baseline 리포트 확보(회귀 안전망 이중화)',
  '🔍 P2 [신규 리서치 적용 — 앨범 컬렉션·스크린샷 캡션·Bento Grid·SHA 핀 원칙]: Game Designer — MeowBeat 고양이 카드/NumLink 챕터 스탬프 앨범 컬렉션 시즌 이벤트 백로그 등재. Content Writer — 스크린샷 캡션 키워드 의도형 재작성+비영어권 1~2개 언어 우선 현지화(+17%). Art Director — NumLink 레벨 선택 Bento Grid·MeowBeat 곡 선택 Liquid Glass 카드. DevOps — 게임 CI 구축 시 액션 SHA 핀 원칙 명문화. **모두 P0 게임 레포 백업·회귀 안전망 확보 후 착수**',
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
