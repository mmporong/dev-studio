# DESIGN.md — Agent Office

> AI 에이전트용 디자인 시스템 문서. 새 화면/컴포넌트 생성 시 이 파일을 참조할 것.
> 소스 진실: `src/styles/tokens.css`

---

## 1. Visual Theme

**철학**: 토스 미니멀리즘 기반 개발자 대시보드. 픽셀아트 오피스 맵 위에서 에이전트를 실시간으로 관제하는 감성.

- 무드: Clean Functional — 불필요한 장식 없이 정보 밀도 우선
- 참조 감성: Toss/Linear 한국형 미니멀 + 픽셀아트 위트
- 키워드: 명료함, 실시간성, 에이전트 존재감, 상태 색상의 의미론

---

## 2. Color Palette

```
배경 계열
  Base         #ffffff   --color-bg-base       페이지 배경
  Surface      #f8f9fa   --color-bg-surface    카드/패널
  Recessed     #f1f3f5   --color-bg-recessed   입력, 내부 영역

액센트
  Primary      #3182f6   --color-accent-primary  Toss 블루 (CTA, 강조)
  Secondary    #4e5968   --color-accent-secondary 보조 강조

텍스트
  Primary      #191f28   --color-text-primary    주 텍스트 (토스 다크)
  Secondary    #4e5968   --color-text-secondary  보조 텍스트
  Muted        #8b95a1   --color-text-muted      힌트, 메타

보더
  Default      #e5e8eb   --color-border
  Subtle       #f1f3f5   --color-border-subtle

에이전트 상태 색
  Planning     #d4a017   --color-status-planning     골드
  Researching  #3cb371   --color-status-researching  그린
  Building     #9b7ed8   --color-status-building     퍼플
  Verifying    #5a9fd4   --color-status-verifying    스카이블루
  Blocked      #e05a4f   --color-status-blocked      레드
  Syncing      #c4956a   --color-status-syncing      탄
  Idle         #8b95a1   --color-status-idle         그레이
```

**금지**: 글래스모피즘, 그라데이션 배경, 형광 컬러, 상태 색 이외의 무작위 강조색

---

## 3. Typography

```
기본 UI   Pretendard → -apple-system → system-ui → Noto Sans KR → sans-serif
디스플레이  Black Han Sans (로고, 대형 타이틀에만)
라벨/배지  Outfit (영문 레이블, 상태 텍스트)
코드/ID   IBM Plex Mono → Fira Code → monospace
```

**CSS 변수**
```
--font-sans:    'Pretendard' ...
--font-display: 'Black Han Sans'
--font-label:   'Outfit'
--font-mono:    'IBM Plex Mono'
```

**크기 가이드**
- 제목: 18~24px, font-weight 700
- 본문: 14px, line-height 1.6
- 레이블/배지: 11~12px, font-weight 600, uppercase

---

## 4. Component Styling

### 에이전트 스프라이트 (`.agent-sprite`)
- 크기: 32×36px 초상화 캔버스
- 상태 배지: 8px 원 (상태 컬러), 우하단
- 이름판: Outfit 11px uppercase, --color-text-muted

### 상태 카드 (`.status-card`)
```css
background: var(--color-bg-surface);   /* #f8f9fa */
border: 1px solid var(--color-border); /* #e5e8eb */
border-radius: var(--radius-md);       /* 8px */
padding: 12px 16px;
```

### 에너지 바
```css
background: var(--color-bg-recessed);
border-radius: var(--radius-sm);       /* 4px */
fill: 상태에 따른 --color-status-* 적용
```

### 페이즈 헤더 (`.phase-header`)
- 폰트: Black Han Sans 또는 Outfit
- 상태 칩: 해당 --color-status-* 배경 + 대비 텍스트

### 태스크 티커 (`.task-ticker`)
- # 프리픽스 + IBM Plex Mono
- hover: --color-bg-surface 배경

---

## 5. Layout Principles

**스페이싱 스케일** (4px base unit)
```
xs    4px   --space-xs
sm    8px   --space-sm
md    16px  --space-md
lg    24px  --space-lg
xl    32px  --space-xl
2xl   48px  --space-2xl
```

**원칙**
- 4의 배수로 정렬
- 카드 내부 패딩: 12~16px (md)
- 섹션 간격: 24~32px (lg~xl)
- 오피스 맵은 픽셀 단위 정밀 배치

---

## 6. Depth & Elevation

```
기본 카드   shadow: none     (--shadow-card: none)
hover      shadow: none     (그림자 대신 border-color 변경)
글로우      없음             (--shadow-glow: none)
```

**원칙**: 토스 스타일 — 그림자 대신 배경색과 보더로 레이어 구분. 그림자는 사실상 사용 안 함.

---

## 7. Design Guardrails

- 글래스모피즘(`backdrop-filter`, 반투명 배경) 금지
- 그라데이션 배경 금지 (`--gradient-page: none`)
- 상태 색(`--color-status-*`)을 UI 레이블 이외 용도로 사용 금지
- Black Han Sans는 로고/대형 타이틀에만 — 본문 사용 금지
- 그림자 사용 금지 — 보더와 배경색으로 구분
- `color: #색상코드` 직접 사용 금지 — 반드시 CSS 변수 사용

---

## 8. Responsive Behavior

- 오피스 맵: 최소 800px 고정 캔버스, 모바일은 스크롤 허용
- 사이드바 패널: 320px 고정, 모바일 오버레이
- 상태 카드 그리드: 2열 → 1열 (≤ 640px)

---

## 9. Agent Prompt Guide

```
배경       var(--color-bg-base) #ffffff
패널/카드  var(--color-bg-surface) #f8f9fa
강조       var(--color-accent-primary) #3182f6
텍스트     var(--color-text-primary) #191f28
보조       var(--color-text-secondary) #4e5968
힌트       var(--color-text-muted) #8b95a1
선         var(--color-border) #e5e8eb
```

**상태별 컬러 퀵레퍼런스**
```
Planning    #d4a017  Researching  #3cb371  Building  #9b7ed8
Verifying   #5a9fd4  Blocked      #e05a4f  Idle      #8b95a1
```

예시 프롬프트:
> "DESIGN.md 기준으로 에이전트 목록 카드를 만들어줘. surface 배경, border 선, 상태에 따라 color-status 적용."
