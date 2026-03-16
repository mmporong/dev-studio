import { useState } from 'react'

const numlinkSections = [
  { id: 'roadmap', tag: '개발', title: '개발 로드맵', summary: 'Sprint 1-4 + Editor 통합 + 출시' },
  { id: 'sprint', tag: '개발', title: '스프린트 진행', summary: '4개 스프린트 구현 현황' },
  { id: 'kicks', tag: '기획', title: '핵심 기능', summary: '이미지 해금, 패턴, 8방향, 업적, 60레벨' },
  { id: 'techdetail', tag: '기술', title: '기술 상세', summary: 'DFS 보드 생성 + 이벤트 시스템' },
]

const kicks = [
  { name: '이미지 해금', desc: '퍼즐을 풀면 숨겨진 이미지가 점진적으로 드러남' },
  { name: '패턴 시스템', desc: '다양한 숫자 숨김 패턴으로 매 판 다른 경험' },
  { name: '8방향 연결', desc: '상하좌우 + 대각선까지 8방향 숫자 연결' },
  { name: '업적 시스템', desc: '패턴 발견, 연속 클리어 등 다양한 업적 도전' },
  { name: '60 레벨', desc: '5x5부터 6x8까지 점진적 난이도 상승' },
]

const milestones = [
  { title: 'Sprint 1. 보드 생성 + 이미지', summary: 'DFS 기반 보드 생성, 이미지 해금 시스템, 레벨 데이터 구조', deliverables: ['PuzzleManager', 'LevelDataProvider', 'BoardData.json'] },
  { title: 'Sprint 2. SFX + 이펙트', summary: '연결/패널티/클리어 사운드, 파티클 시스템, 피치 상승', deliverables: ['EffectManager', 'GameEvents', 'SoundManager 연동'] },
  { title: 'Sprint 3. 힌트 + 저장', summary: '힌트 시스템, 세이브/로드, 진행도 추적', deliverables: ['HintManager', 'SaveSystem', 'NumLinkSaveData'] },
  { title: 'Sprint 4. 업적 + 패턴', summary: '업적 시스템, 숫자 숨김 패턴, 업적 데이터', deliverables: ['AchievementManager', 'HidePatternApplier', 'AchievementData'] },
]

const roadmap = [
  { id: 'sprint-1-2', label: 'Sprint 1-2', headline: '코어 시스템', description: 'DFS 보드 생성, 이미지 해금, 사운드/파티클 이펙트, 기본 게임 루프 완성.', isActive: false },
  { id: 'sprint-3-4', label: 'Sprint 3-4', headline: '시스템 확장', description: '힌트 시스템, 세이브/로드, 업적, 패턴 시스템 구현 완료.', isActive: false },
  { id: 'editor-integration', label: 'Editor 통합', headline: 'Unity 에셋 연결', description: 'SFX/파티클 프리팹 연결, 프리뷰 UI, AchievementManager 동적 생성.', isActive: true },
  { id: 'launch', label: '출시', headline: 'QA + 스토어 등록', description: '최종 QA, Google Play 등록, 스토어 에셋 준비.', isActive: false },
]

const techDetails = [
  { name: 'DFS 보드 생성', desc: '8방향 DFS + 직선 우선 알고리즘으로 자연스러운 숫자 경로 생성' },
  { name: 'GameEvents', desc: 'OnConnectionSuccess, OnConnectionFailed, OnStageClearEffect 등 이벤트 기반 아키텍처' },
  { name: 'ServiceLocator', desc: 'GameBootstrapper에서 서비스 등록, 직접 참조 체인 금지' },
  { name: 'HidePatternApplier', desc: '체스보드, 테두리, 대각선 등 다양한 숫자 숨김 패턴' },
  { name: 'SaveSystem', desc: 'JSON 기반 진행도 저장, 레벨별 클리어/업적 상태 추적' },
  { name: 'ObjectPoolManager', desc: '파티클/UI 오브젝트 풀링으로 GC 최소화' },
]

function NumLinkSectionDetail({ id }: { id: string }) {
  switch (id) {
    case 'roadmap':
      return (
        <>
          <h2>개발 로드맵</h2>
          <div className="work__roadmap-list">
            {roadmap.map((stage, i) => (
              <div
                key={stage.id}
                className={`work__roadmap-item ${stage.isActive ? 'work__roadmap-item--active' : ''}`}
              >
                <span className="work__roadmap-num">{i + 1}</span>
                <div>
                  <strong>{stage.label} — {stage.headline}</strong>
                  <p>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )
    case 'sprint':
      return (
        <>
          <h2>스프린트 진행</h2>
          <div className="work__milestone-list">
            {milestones.map((ms, i) => (
              <article key={ms.title} className="work__milestone-item">
                <div className="work__milestone-header">
                  <span className="work__milestone-num">{i + 1}</span>
                  <h3>{ms.title}</h3>
                </div>
                <p>{ms.summary}</p>
                <div className="work__deliverables">
                  {ms.deliverables.map((d) => (
                    <span key={d} className="work__deliverable">{d}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </>
      )
    case 'kicks':
      return (
        <>
          <h2>핵심 기능</h2>
          <div className="work__kick-grid">
            {kicks.map((kick) => (
              <article key={kick.name} className="work__kick-card">
                <h3>{kick.name}</h3>
                <p>{kick.desc}</p>
              </article>
            ))}
          </div>
        </>
      )
    case 'techdetail':
      return (
        <>
          <h2>기술 상세</h2>
          <div className="work__kick-grid">
            {techDetails.map((t) => (
              <article key={t.name} className="work__kick-card">
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </article>
            ))}
          </div>
        </>
      )
    default:
      return null
  }
}

export function NumLinkWorkContent() {
  const [activeSection, setActiveSection] = useState('roadmap')

  return (
    <>
      <header className="work__hero">
        <h1>NumLink (넘링크)</h1>
        <p className="work__tagline">숫자 연결 퍼즐 — 이미지 해금 + 패턴 발견 + 업적 시스템</p>
        <div className="work__tech">
          {['Unity C#', 'DFS 보드 생성', 'JSON 레벨 데이터', 'ServiceLocator', 'Event-Driven'].map((label) => (
            <span key={label} className="work__tech-pill">{label}</span>
          ))}
        </div>
      </header>

      <div className="work__layout">
        <nav className="work__sidebar">
          {numlinkSections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`work__nav-item ${activeSection === section.id ? 'work__nav-item--active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="work__nav-tag">{section.tag}</span>
              <span className="work__nav-title">{section.title}</span>
            </button>
          ))}
        </nav>
        <div className="work__panel">
          <NumLinkSectionDetail id={activeSection} />
        </div>
      </div>
    </>
  )
}
